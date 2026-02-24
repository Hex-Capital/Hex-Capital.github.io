(function () {
  // Dense parallax network + shooting stars + color waves

  var canvas = document.getElementById('constellation-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');

  var width, height;
  var bgParticles = [];
  var fgParticles = [];
  var shootingStars = [];
  var waves = [];
  var mouse = { x: -9999, y: -9999 };
  var scrollY = 0;
  var time = 0;
  var rafId;

  var BG_COLOR = [70, 160, 190];
  var FG_COLOR = [100, 160, 220];
  var STAR_COLOR = [180, 220, 255];
  var WAVE_COLORS = [
    [60, 200, 200], [140, 120, 220], [80, 190, 240],
    [110, 100, 200], [50, 180, 170]
  ];

  var BG_CONNECT_DIST = 120;
  var FG_CONNECT_DIST = 140;
  var MOUSE_REPEL = 90;
  var MOUSE_CONNECT = 180;
  var isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  var BG_PARALLAX = isTouch ? 0 : 0.12;
  var FG_PARALLAX = isTouch ? 0 : 0.28;

  var PULSE_INTERVAL = 55;
  var pulseTimer = 0;
  var STAR_INTERVAL = 720;
  var STAR_ILLUMINATE_DIST = 120;
  var starTimer = 0;
  var WAVE_INTERVAL = 140;
  var WAVE_BAND = 500;
  var waveTimer = 0;

  var BG_CONNECT_DIST_SQ = BG_CONNECT_DIST * BG_CONNECT_DIST;
  var FG_CONNECT_DIST_SQ = FG_CONNECT_DIST * FG_CONNECT_DIST;
  var MOUSE_CONNECT_SQ = MOUSE_CONNECT * MOUSE_CONNECT;
  var STAR_ILLUMINATE_DIST_SQ = STAR_ILLUMINATE_DIST * STAR_ILLUMINATE_DIST;

  function resize() {
    var dpr = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = isTouch ? window.screen.height : window.innerHeight;
    canvas.width = width * dpr; canvas.height = height * dpr;
    canvas.style.width = width + 'px'; canvas.style.height = height + 'px';
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
      var r = Math.random(); var radius, type;
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

  // --- Shooting Stars ---
  function spawnShootingStar() {
    var angle = Math.random() * Math.PI * 0.4 + Math.PI * 0.1;
    if (Math.random() > 0.5) angle = Math.PI - angle;
    var speed = 4 + Math.random() * 4;
    var startX, startY, edge = Math.random();
    if (edge < 0.5) { startX = -20; startY = Math.random() * height * 0.5; }
    else if (edge < 0.8) { startX = width + 20; startY = Math.random() * height * 0.3; angle = Math.PI - angle; }
    else { startX = Math.random() * width; startY = -20; angle = Math.PI / 2 + (Math.random() - 0.5) * 0.6; }
    shootingStars.push({
      x: startX, y: startY, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
      trail: [], life: 1.0, maxTrail: 18 + Math.floor(Math.random() * 12),
      brightness: 0.315 + Math.random() * 0.135
    });
  }

  function updateShootingStars() {
    for (var i = shootingStars.length - 1; i >= 0; i--) {
      var s = shootingStars[i];
      s.trail.push({ x: s.x, y: s.y });
      if (s.trail.length > s.maxTrail) s.trail.shift();
      s.x += s.vx; s.y += s.vy;
      for (var j = 0; j < fgParticles.length; j++) {
        var p = fgParticles[j];
        var dx = s.x - p.x, dy = s.y - p._wy;
        var distSq = dx * dx + dy * dy;
        if (distSq < STAR_ILLUMINATE_DIST_SQ) {
          var dist = Math.sqrt(distSq);
          var boost = (1 - dist / STAR_ILLUMINATE_DIST) * 0.6 * s.brightness;
          if (p.pulse < boost) p.pulse = boost;
        }
      }
      if (s.x < -100 || s.x > width + 100 || s.y < -100 || s.y > height + 100) s.life -= 0.05;
      if (s.life <= 0) shootingStars.splice(i, 1);
    }
  }

  function drawShootingStars() {
    for (var i = 0; i < shootingStars.length; i++) {
      var s = shootingStars[i];
      if (s.trail.length < 2) continue;
      for (var j = s.trail.length - 1; j > 0; j--) {
        var t = j / s.trail.length;
        var alpha = t * t * s.brightness * s.life;
        ctx.strokeStyle = 'rgba(' + STAR_COLOR[0] + ',' + STAR_COLOR[1] + ',' + STAR_COLOR[2] + ',' + alpha + ')';
        ctx.lineWidth = t * 2.5;
        ctx.beginPath(); ctx.moveTo(s.trail[j].x, s.trail[j].y); ctx.lineTo(s.trail[j-1].x, s.trail[j-1].y); ctx.stroke();
      }
      var headAlpha = s.brightness * s.life;
      ctx.fillStyle = 'rgba(255,255,255,' + headAlpha + ')';
      ctx.beginPath(); ctx.arc(s.x, s.y, 2, 0, Math.PI * 2); ctx.fill();
      var grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, 12);
      grad.addColorStop(0, 'rgba(' + STAR_COLOR[0] + ',' + STAR_COLOR[1] + ',' + STAR_COLOR[2] + ',' + (0.4 * headAlpha) + ')');
      grad.addColorStop(1, 'rgba(' + STAR_COLOR[0] + ',' + STAR_COLOR[1] + ',' + STAR_COLOR[2] + ',0)');
      ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(s.x, s.y, 12, 0, Math.PI * 2); ctx.fill();
    }
  }

  // --- Color Waves ---
  function spawnWave() {
    var angle = Math.PI / 6 + Math.random() * Math.PI / 3;
    if (Math.random() > 0.5) angle += Math.PI;
    var color = WAVE_COLORS[Math.floor(Math.random() * WAVE_COLORS.length)];
    var diag = Math.sqrt(width * width + height * height);
    waves.push({ angle: angle, dist: -WAVE_BAND, speed: 2 + Math.random(), maxDist: diag + WAVE_BAND, color: color, intensity: 0.7 + Math.random() * 0.3 });
  }

  function getWaveColorAt(x, y) {
    var totalR = 0, totalG = 0, totalB = 0, totalI = 0;
    for (var i = 0; i < waves.length; i++) {
      var w = waves[i];
      var proj = x * Math.cos(w.angle) + y * Math.sin(w.angle);
      var delta = Math.abs(proj - w.dist);
      if (delta < WAVE_BAND / 2) {
        var t = 1 - delta / (WAVE_BAND / 2);
        t = t * t * (3 - 2 * t);
        var intensity = t * w.intensity * 1.5;
        totalR += w.color[0] * intensity; totalG += w.color[1] * intensity; totalB += w.color[2] * intensity;
        totalI += intensity;
      }
    }
    return totalI > 0 ? [totalR / totalI, totalG / totalI, totalB / totalI, Math.min(totalI, 1)] : null;
  }

  function blendColor(base, wave) {
    if (!wave) return base;
    var t = wave[3];
    return [Math.round(base[0] + (wave[0] - base[0]) * t), Math.round(base[1] + (wave[1] - base[1]) * t), Math.round(base[2] + (wave[2] - base[2]) * t)];
  }

  // --- Pulses ---
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
          var q = fgParticles[j]; var dx = p.x - q.x, dy = p.y - q.y;
          var distSq = dx * dx + dy * dy;
          if (distSq < FG_CONNECT_DIST_SQ) { var prop = (p.pulse - 0.1) * 0.55; if (q.pulse < prop) q.pulse = prop; }
        }
      }
    }
  }

  // --- Physics ---
  function updateParticles(arr, baseSpeed, yOffset) {
    for (var i = 0; i < arr.length; i++) {
      var p = arr[i];
      var py = wrapY(p.y, yOffset);
      var mdx = p.x - mouse.x, mdy = py - mouse.y;
      var mDist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mDist < MOUSE_REPEL && mDist > 1) {
        var force = (1 - mDist / MOUSE_REPEL) * 1.5;
        p.vx += (mdx / mDist) * force; p.vy += (mdy / mDist) * force;
      }
      var speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      var maxSpeed = baseSpeed * 3;
      if (speed > maxSpeed) { p.vx = (p.vx / speed) * maxSpeed; p.vy = (p.vy / speed) * maxSpeed; }
      p.vx *= 0.985; p.vy *= 0.985;
      if (speed < baseSpeed * 0.3) { p.vx += (Math.random() - 0.5) * baseSpeed * 0.1; p.vy += (Math.random() - 0.5) * baseSpeed * 0.1; }
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
      p.x = Math.max(0, Math.min(width, p.x)); p.y = Math.max(0, Math.min(height, p.y));
      if (p.pulse > 0) p.pulse *= 0.95;
      if (p.pulse < 0.01) p.pulse = 0;
    }
  }

  function wrapY(y, offset) { var s = y + offset; return ((s % height) + height) % height; }

  // --- Drawing (wave-color-aware) ---
  function drawConnectionsParallax(arr, baseColor, maxDist, maxDistSq, baseAlpha) {
    ctx.lineWidth = 0.5;
    for (var i = 0; i < arr.length; i++) {
      var ai = arr[i], ay = ai._wy;
      for (var j = i + 1; j < arr.length; j++) {
        var aj = arr[j], by = aj._wy;
        var dx = ai.x - aj.x, dy = ay - by;
        var distSq = dx * dx + dy * dy;
        if (distSq < maxDistSq) {
          var dist = Math.sqrt(distSq);
          var falloff = 1 - dist / maxDist;
          var pulseBoost = (ai.pulse + aj.pulse) * 0.25;
          var alpha = Math.min((baseAlpha + pulseBoost) * falloff, 0.65);
          var wave = getWaveColorAt((ai.x + aj.x) / 2, (ay + by) / 2);
          var c = blendColor(baseColor, wave);
          ctx.strokeStyle = 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + alpha + ')';
          ctx.beginPath(); ctx.moveTo(ai.x, ay); ctx.lineTo(aj.x, by); ctx.stroke();
        }
      }
    }
  }

  function drawMouseConnectionsParallax() {
    if (mouse.x < 0 || mouse.y < 0) return;
    ctx.lineWidth = 0.7;
    for (var i = 0; i < fgParticles.length; i++) {
      var p = fgParticles[i], py = p._wy;
      var dx = p.x - mouse.x, dy = py - mouse.y;
      var distSq = dx * dx + dy * dy;
      if (distSq < MOUSE_CONNECT_SQ) {
        var dist = Math.sqrt(distSq);
        var alpha = 0.3 * (1 - dist / MOUSE_CONNECT);
        var wave = getWaveColorAt(p.x, py);
        var c = wave ? blendColor([150, 200, 255], wave) : [150, 200, 255];
        ctx.strokeStyle = 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + alpha + ')';
        ctx.beginPath(); ctx.moveTo(mouse.x, mouse.y); ctx.lineTo(p.x, py); ctx.stroke();
      }
    }
  }

  function drawParticlesParallax(arr, baseColor) {
    for (var i = 0; i < arr.length; i++) {
      var p = arr[i], py = p._wy;
      var pulseBoost = p.pulse * 0.35;
      var alpha = Math.min(p.baseOpacity + pulseBoost, 1.0);
      var r = p.radius + p.pulse * 1.2;
      var wave = getWaveColorAt(p.x, py);
      var c = blendColor(baseColor, wave);
      if (wave) alpha = Math.min(alpha + wave[3] * 0.3, 1.0);
      ctx.fillStyle = 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + alpha + ')';
      ctx.beginPath(); ctx.arc(p.x, py, r, 0, Math.PI * 2); ctx.fill();
    }
  }

  // --- Main Loop ---
  function animate() {
    ctx.clearRect(0, 0, width, height);
    time++;

    pulseTimer++;
    if (pulseTimer >= PULSE_INTERVAL) { triggerPulse(); pulseTimer = 0; }
    propagatePulses();

    starTimer++;
    if (starTimer >= STAR_INTERVAL + Math.floor(Math.random() * 80)) { spawnShootingStar(); starTimer = 0; }

    waveTimer++;
    if (waveTimer >= WAVE_INTERVAL) { spawnWave(); waveTimer = 0; }
    for (var i = waves.length - 1; i >= 0; i--) { waves[i].dist += waves[i].speed; if (waves[i].dist > waves[i].maxDist) waves.splice(i, 1); }

    var bgOffset = -scrollY * BG_PARALLAX;
    var fgOffset = -scrollY * FG_PARALLAX;

    updateParticles(bgParticles, 0.18, bgOffset);
    updateParticles(fgParticles, 0.4, fgOffset);

    // Cache wrapY per particle for draw phase
    for (var i = 0; i < bgParticles.length; i++) bgParticles[i]._wy = wrapY(bgParticles[i].y, bgOffset);
    for (var i = 0; i < fgParticles.length; i++) fgParticles[i]._wy = wrapY(fgParticles[i].y, fgOffset);

    updateShootingStars();

    drawConnectionsParallax(bgParticles, BG_COLOR, BG_CONNECT_DIST, BG_CONNECT_DIST_SQ, 0.1);
    drawParticlesParallax(bgParticles, BG_COLOR);
    drawConnectionsParallax(fgParticles, FG_COLOR, FG_CONNECT_DIST, FG_CONNECT_DIST_SQ, 0.28);
    drawMouseConnectionsParallax();
    drawParticlesParallax(fgParticles, FG_COLOR);
    drawShootingStars();

    rafId = requestAnimationFrame(animate);
  }

  var lastWidth = 0;
  function onResize() {
    var newWidth = window.innerWidth;
    if (newWidth === lastWidth) return;
    lastWidth = newWidth;
    resize();
    createParticles();
  }
  function onMouseMove(e) { mouse.x = e.clientX; mouse.y = e.clientY; }
  function onScroll() { scrollY = window.scrollY || window.pageYOffset || 0; }

  window.addEventListener('resize', onResize);
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('scroll', onScroll, { passive: true });

  function init() {
    lastWidth = window.innerWidth;
    resize(); createParticles();
    scrollY = window.scrollY || window.pageYOffset || 0;
    spawnWave();
    animate(); document.body.style.opacity = '1';
  }
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); }
  else { init(); }
})();
