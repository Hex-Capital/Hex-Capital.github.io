(function () {
  // V1: Shooting Stars — bright streaks that illuminate nearby particles
  if (window._constellationRAF) cancelAnimationFrame(window._constellationRAF);
  if (window._constellationResize) window.removeEventListener('resize', window._constellationResize);
  if (window._constellationMouseMove) window.removeEventListener('mousemove', window._constellationMouseMove);
  if (window._constellationScroll) window.removeEventListener('scroll', window._constellationScroll);

  var canvas = document.getElementById('constellation-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');

  var width, height;
  var bgParticles = [];
  var fgParticles = [];
  var shootingStars = [];
  var mouse = { x: -9999, y: -9999 };
  var scrollY = 0;

  var BG_COLOR = [70, 160, 190];
  var FG_COLOR = [100, 160, 220];
  var STAR_COLOR = [180, 220, 255];

  var BG_CONNECT_DIST = 120;
  var FG_CONNECT_DIST = 140;
  var MOUSE_REPEL = 90;
  var MOUSE_CONNECT = 180;

  var BG_PARALLAX = 0.12;
  var FG_PARALLAX = 0.28;

  var PULSE_INTERVAL = 55;
  var pulseTimer = 0;

  var STAR_INTERVAL = 180;
  var STAR_ILLUMINATE_DIST = 120;
  var starTimer = 0;

  function resize() {
    var dpr = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function createParticles() {
    var area = width * height;
    var bgCount = Math.min(160, Math.floor(area / 16000));
    bgParticles = [];
    for (var i = 0; i < bgCount; i++) {
      bgParticles.push({
        x: Math.random() * width, y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        radius: 0.9 + Math.random() * 0.3,
        baseOpacity: 0.2 + Math.random() * 0.15, pulse: 0
      });
    }
    var fgCount = Math.min(130, Math.floor(area / 15000));
    fgParticles = [];
    for (var i = 0; i < fgCount; i++) {
      var r = Math.random();
      var radius, type;
      if (r < 0.1) { radius = 3.2; type = 'hub'; }
      else if (r < 0.4) { radius = 1.8; type = 'medium'; }
      else { radius = 1; type = 'small'; }
      fgParticles.push({
        x: Math.random() * width, y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8, vy: (Math.random() - 0.5) * 0.8,
        radius: radius, type: type,
        baseOpacity: type === 'hub' ? 0.85 : type === 'medium' ? 0.6 : 0.45, pulse: 0
      });
    }
  }

  function spawnShootingStar() {
    // Enter from a random edge, travel at a slight angle
    var angle = Math.random() * Math.PI * 0.4 + Math.PI * 0.1; // 10-50 degrees downward
    if (Math.random() > 0.5) angle = Math.PI - angle; // flip horizontally sometimes
    var speed = 4 + Math.random() * 4;
    var startX, startY;
    // Spawn from top or sides
    var edge = Math.random();
    if (edge < 0.5) { startX = -20; startY = Math.random() * height * 0.5; }
    else if (edge < 0.8) { startX = width + 20; startY = Math.random() * height * 0.3; angle = Math.PI - angle; }
    else { startX = Math.random() * width; startY = -20; angle = Math.PI / 2 + (Math.random() - 0.5) * 0.6; }

    shootingStars.push({
      x: startX, y: startY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      trail: [],
      life: 1.0,
      maxTrail: 18 + Math.floor(Math.random() * 12),
      brightness: 0.7 + Math.random() * 0.3
    });
  }

  function updateShootingStars() {
    for (var i = shootingStars.length - 1; i >= 0; i--) {
      var s = shootingStars[i];
      s.trail.unshift({ x: s.x, y: s.y });
      if (s.trail.length > s.maxTrail) s.trail.pop();

      s.x += s.vx;
      s.y += s.vy;

      // Illuminate nearby fg particles
      var fgOffset = -scrollY * FG_PARALLAX;
      for (var j = 0; j < fgParticles.length; j++) {
        var p = fgParticles[j];
        var py = wrapY(p.y, fgOffset);
        var dx = s.x - p.x;
        var dy = s.y - py;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < STAR_ILLUMINATE_DIST) {
          var boost = (1 - dist / STAR_ILLUMINATE_DIST) * 0.6 * s.brightness;
          if (p.pulse < boost) p.pulse = boost;
        }
      }

      // Fade out and remove when off screen
      if (s.x < -100 || s.x > width + 100 || s.y < -100 || s.y > height + 100) {
        s.life -= 0.05;
      }
      if (s.life <= 0) {
        shootingStars.splice(i, 1);
      }
    }
  }

  function drawShootingStars() {
    for (var i = 0; i < shootingStars.length; i++) {
      var s = shootingStars[i];
      if (s.trail.length < 2) continue;

      // Draw trail as tapered line with gradient
      for (var j = 0; j < s.trail.length - 1; j++) {
        var t = 1 - j / s.trail.length;
        var alpha = t * t * s.brightness * s.life;
        var lineW = t * 2.5;
        ctx.strokeStyle = 'rgba(' + STAR_COLOR[0] + ',' + STAR_COLOR[1] + ',' + STAR_COLOR[2] + ',' + alpha + ')';
        ctx.lineWidth = lineW;
        ctx.beginPath();
        ctx.moveTo(s.trail[j].x, s.trail[j].y);
        ctx.lineTo(s.trail[j + 1].x, s.trail[j + 1].y);
        ctx.stroke();
      }

      // Bright head
      var headAlpha = s.brightness * s.life;
      ctx.fillStyle = 'rgba(255,255,255,' + headAlpha + ')';
      ctx.beginPath();
      ctx.arc(s.x, s.y, 2, 0, Math.PI * 2);
      ctx.fill();

      // Head glow
      var grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, 12);
      grad.addColorStop(0, 'rgba(' + STAR_COLOR[0] + ',' + STAR_COLOR[1] + ',' + STAR_COLOR[2] + ',' + (0.4 * headAlpha) + ')');
      grad.addColorStop(1, 'rgba(' + STAR_COLOR[0] + ',' + STAR_COLOR[1] + ',' + STAR_COLOR[2] + ',0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(s.x, s.y, 12, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function triggerPulse() {
    var candidates = [];
    for (var i = 0; i < fgParticles.length; i++) {
      if (fgParticles[i].type === 'hub' || fgParticles[i].type === 'medium') candidates.push(fgParticles[i]);
    }
    if (candidates.length === 0) return;
    candidates[Math.floor(Math.random() * candidates.length)].pulse = 1.0;
    if (Math.random() > 0.5 && candidates.length > 1)
      candidates[Math.floor(Math.random() * candidates.length)].pulse = 0.8;
  }

  function propagatePulses() {
    for (var i = 0; i < fgParticles.length; i++) {
      var p = fgParticles[i];
      if (p.pulse > 0.25) {
        for (var j = 0; j < fgParticles.length; j++) {
          if (i === j) continue;
          var q = fgParticles[j];
          var dx = p.x - q.x; var dy = p.y - q.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < FG_CONNECT_DIST) {
            var propagated = (p.pulse - 0.1) * 0.55;
            if (q.pulse < propagated) q.pulse = propagated;
          }
        }
      }
    }
  }

  function updateParticles(arr, baseSpeed) {
    for (var i = 0; i < arr.length; i++) {
      var p = arr[i];
      var mdx = p.x - mouse.x; var mdy = p.y - mouse.y;
      var mDist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mDist < MOUSE_REPEL && mDist > 1) {
        var force = (1 - mDist / MOUSE_REPEL) * 1.5;
        p.vx += (mdx / mDist) * force; p.vy += (mdy / mDist) * force;
      }
      var speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      var maxSpeed = baseSpeed * 3;
      if (speed > maxSpeed) { p.vx = (p.vx / speed) * maxSpeed; p.vy = (p.vy / speed) * maxSpeed; }
      p.vx *= 0.985; p.vy *= 0.985;
      if (speed < baseSpeed * 0.3) {
        p.vx += (Math.random() - 0.5) * baseSpeed * 0.1;
        p.vy += (Math.random() - 0.5) * baseSpeed * 0.1;
      }
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
      p.x = Math.max(0, Math.min(width, p.x));
      p.y = Math.max(0, Math.min(height, p.y));
      if (p.pulse > 0) p.pulse *= 0.95;
      if (p.pulse < 0.01) p.pulse = 0;
    }
  }

  function wrapY(y, offset) {
    var shifted = y + offset;
    return ((shifted % height) + height) % height;
  }

  function drawConnectionsParallax(arr, color, maxDist, baseAlpha, yOffset) {
    ctx.lineWidth = 0.5;
    for (var i = 0; i < arr.length; i++) {
      var ay = wrapY(arr[i].y, yOffset);
      for (var j = i + 1; j < arr.length; j++) {
        var by = wrapY(arr[j].y, yOffset);
        var dx = arr[i].x - arr[j].x; var dy = ay - by;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          var falloff = 1 - dist / maxDist;
          var pulseBoost = (arr[i].pulse + arr[j].pulse) * 0.25;
          var alpha = Math.min((baseAlpha + pulseBoost) * falloff, 0.65);
          ctx.strokeStyle = 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',' + alpha + ')';
          ctx.beginPath(); ctx.moveTo(arr[i].x, ay); ctx.lineTo(arr[j].x, by); ctx.stroke();
        }
      }
    }
  }

  function drawMouseConnectionsParallax(yOffset) {
    if (mouse.x < 0 || mouse.y < 0) return;
    ctx.lineWidth = 0.7;
    for (var i = 0; i < fgParticles.length; i++) {
      var p = fgParticles[i];
      var py = wrapY(p.y, yOffset);
      var dx = p.x - mouse.x; var dy = py - mouse.y;
      var dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MOUSE_CONNECT) {
        var alpha = 0.3 * (1 - dist / MOUSE_CONNECT);
        ctx.strokeStyle = 'rgba(150,200,255,' + alpha + ')';
        ctx.beginPath(); ctx.moveTo(mouse.x, mouse.y); ctx.lineTo(p.x, py); ctx.stroke();
      }
    }
  }

  function drawParticlesParallax(arr, color, yOffset) {
    for (var i = 0; i < arr.length; i++) {
      var p = arr[i];
      var py = wrapY(p.y, yOffset);
      var pulseBoost = p.pulse * 0.35;
      var alpha = Math.min(p.baseOpacity + pulseBoost, 1.0);
      var r = p.radius + p.pulse * 1.2;
      ctx.fillStyle = 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',' + alpha + ')';
      ctx.beginPath(); ctx.arc(p.x, py, r, 0, Math.PI * 2); ctx.fill();
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    pulseTimer++;
    if (pulseTimer >= PULSE_INTERVAL) { triggerPulse(); pulseTimer = 0; }
    propagatePulses();

    starTimer++;
    if (starTimer >= STAR_INTERVAL + Math.floor(Math.random() * 80)) {
      spawnShootingStar();
      starTimer = 0;
    }

    updateParticles(bgParticles, 0.18);
    updateParticles(fgParticles, 0.4);
    updateShootingStars();

    var bgOffset = -scrollY * BG_PARALLAX;
    var fgOffset = -scrollY * FG_PARALLAX;

    drawConnectionsParallax(bgParticles, BG_COLOR, BG_CONNECT_DIST, 0.1, bgOffset);
    drawParticlesParallax(bgParticles, BG_COLOR, bgOffset);
    drawConnectionsParallax(fgParticles, FG_COLOR, FG_CONNECT_DIST, 0.28, fgOffset);
    drawMouseConnectionsParallax(fgOffset);
    drawParticlesParallax(fgParticles, FG_COLOR, fgOffset);
    drawShootingStars();

    window._constellationRAF = requestAnimationFrame(animate);
  }

  function onResize() { resize(); createParticles(); }
  function onMouseMove(e) { mouse.x = e.clientX; mouse.y = e.clientY; }
  function onScroll() { scrollY = window.scrollY || window.pageYOffset || 0; }

  window._constellationResize = onResize;
  window._constellationMouseMove = onMouseMove;
  window._constellationScroll = onScroll;
  window.addEventListener('resize', onResize);
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('scroll', onScroll, { passive: true });

  function init() {
    resize(); createParticles();
    scrollY = window.scrollY || window.pageYOffset || 0;
    animate(); document.body.style.opacity = '1';
  }
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); }
  else { init(); }
})();
