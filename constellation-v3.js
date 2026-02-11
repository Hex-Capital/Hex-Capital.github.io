(function () {
  // V3: Gravitational Clusters — invisible attractors pull particles into organic formations
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
  var attractors = [];
  var mouse = { x: -9999, y: -9999 };
  var scrollY = 0;
  var time = 0;

  var BG_COLOR = [70, 160, 190];
  var FG_COLOR = [100, 160, 220];
  var ATTRACTOR_COLOR = [80, 180, 230];

  var BG_CONNECT_DIST = 120;
  var FG_CONNECT_DIST = 140;
  var MOUSE_REPEL = 90;
  var MOUSE_CONNECT = 180;

  var BG_PARALLAX = 0.12;
  var FG_PARALLAX = 0.28;

  var PULSE_INTERVAL = 55;
  var pulseTimer = 0;

  var ATTRACTOR_PULL_BG = 0.003;
  var ATTRACTOR_PULL_FG = 0.008;
  var ATTRACTOR_RADIUS = 250;

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

  function createAttractors() {
    var count = Math.max(3, Math.min(6, Math.floor((width * height) / 300000)));
    attractors = [];
    for (var i = 0; i < count; i++) {
      // Each attractor orbits around its anchor point
      var anchorX = width * 0.15 + Math.random() * width * 0.7;
      var anchorY = height * 0.15 + Math.random() * height * 0.7;
      attractors.push({
        anchorX: anchorX,
        anchorY: anchorY,
        x: anchorX,
        y: anchorY,
        orbitRadius: 40 + Math.random() * 80,
        orbitSpeed: 0.002 + Math.random() * 0.003,
        orbitPhase: Math.random() * Math.PI * 2,
        strength: 0.6 + Math.random() * 0.4
      });
    }
  }

  function updateAttractors() {
    for (var i = 0; i < attractors.length; i++) {
      var a = attractors[i];
      a.x = a.anchorX + Math.cos(time * a.orbitSpeed + a.orbitPhase) * a.orbitRadius;
      a.y = a.anchorY + Math.sin(time * a.orbitSpeed * 0.7 + a.orbitPhase) * a.orbitRadius * 0.6;
    }
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
    createAttractors();
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

  function applyAttractorForce(p, pullStrength) {
    for (var i = 0; i < attractors.length; i++) {
      var a = attractors[i];
      var dx = a.x - p.x;
      var dy = a.y - p.y;
      var dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < ATTRACTOR_RADIUS && dist > 5) {
        var t = 1 - dist / ATTRACTOR_RADIUS;
        // Smooth pull — stronger near the middle, zero at edges
        var force = t * t * pullStrength * a.strength;
        p.vx += (dx / dist) * force;
        p.vy += (dy / dist) * force;
      }
    }
  }

  function updateParticles(arr, baseSpeed, pullStrength) {
    for (var i = 0; i < arr.length; i++) {
      var p = arr[i];

      // Mouse repulsion
      var mdx = p.x - mouse.x; var mdy = p.y - mouse.y;
      var mDist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mDist < MOUSE_REPEL && mDist > 1) {
        var force = (1 - mDist / MOUSE_REPEL) * 1.5;
        p.vx += (mdx / mDist) * force; p.vy += (mdy / mDist) * force;
      }

      // Gravitational pull from attractors
      applyAttractorForce(p, pullStrength);

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

  function drawAttractorGlows() {
    for (var i = 0; i < attractors.length; i++) {
      var a = attractors[i];
      var pulse = 0.5 + 0.5 * Math.sin(time * 0.015 + a.orbitPhase);
      var glowR = 60 + pulse * 30;
      var alpha = 0.04 + pulse * 0.03;
      var grad = ctx.createRadialGradient(a.x, a.y, 0, a.x, a.y, glowR);
      grad.addColorStop(0, 'rgba(' + ATTRACTOR_COLOR[0] + ',' + ATTRACTOR_COLOR[1] + ',' + ATTRACTOR_COLOR[2] + ',' + alpha + ')');
      grad.addColorStop(1, 'rgba(' + ATTRACTOR_COLOR[0] + ',' + ATTRACTOR_COLOR[1] + ',' + ATTRACTOR_COLOR[2] + ',0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(a.x, a.y, glowR, 0, Math.PI * 2);
      ctx.fill();
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
    time++;

    pulseTimer++;
    if (pulseTimer >= PULSE_INTERVAL) { triggerPulse(); pulseTimer = 0; }
    propagatePulses();
    updateAttractors();

    updateParticles(bgParticles, 0.18, ATTRACTOR_PULL_BG);
    updateParticles(fgParticles, 0.4, ATTRACTOR_PULL_FG);

    var bgOffset = -scrollY * BG_PARALLAX;
    var fgOffset = -scrollY * FG_PARALLAX;

    drawAttractorGlows();
    drawConnectionsParallax(bgParticles, BG_COLOR, BG_CONNECT_DIST, 0.1, bgOffset);
    drawParticlesParallax(bgParticles, BG_COLOR, bgOffset);
    drawConnectionsParallax(fgParticles, FG_COLOR, FG_CONNECT_DIST, 0.28, fgOffset);
    drawMouseConnectionsParallax(fgOffset);
    drawParticlesParallax(fgParticles, FG_COLOR, fgOffset);

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
