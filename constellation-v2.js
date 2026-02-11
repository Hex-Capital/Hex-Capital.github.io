(function () {
  // V2: Color Waves — diagonal aurora sweeps that shift particle colors
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
  var mouse = { x: -9999, y: -9999 };
  var scrollY = 0;
  var time = 0;

  var BG_COLOR = [70, 160, 190];
  var FG_COLOR = [100, 160, 220];

  // Wave color palette
  var WAVE_COLORS = [
    [60, 200, 200],   // teal
    [140, 120, 220],  // purple
    [80, 190, 240],   // cyan
    [110, 100, 200],  // indigo
    [50, 180, 170]    // deep teal
  ];

  var BG_CONNECT_DIST = 120;
  var FG_CONNECT_DIST = 140;
  var MOUSE_REPEL = 90;
  var MOUSE_CONNECT = 180;

  var BG_PARALLAX = 0.12;
  var FG_PARALLAX = 0.28;

  var PULSE_INTERVAL = 55;
  var pulseTimer = 0;

  // Wave system
  var WAVE_INTERVAL = 140;
  var WAVE_BAND = 500;
  var waveTimer = 0;
  var waves = [];

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

  function spawnWave() {
    var angle = Math.PI / 6 + Math.random() * Math.PI / 3;
    if (Math.random() > 0.5) angle += Math.PI;
    var color = WAVE_COLORS[Math.floor(Math.random() * WAVE_COLORS.length)];
    var diag = Math.sqrt(width * width + height * height);
    waves.push({
      angle: angle,
      dist: -WAVE_BAND,
      speed: 2 + Math.random() * 1,
      maxDist: diag + WAVE_BAND,
      color: color,
      intensity: 0.7 + Math.random() * 0.3
    });
  }

  // Returns [r, g, b, intensity] for color wave influence at a given position
  function getWaveColorAt(x, y) {
    var totalR = 0, totalG = 0, totalB = 0, totalI = 0;
    for (var i = 0; i < waves.length; i++) {
      var w = waves[i];
      var proj = x * Math.cos(w.angle) + y * Math.sin(w.angle);
      var delta = Math.abs(proj - w.dist);
      if (delta < WAVE_BAND / 2) {
        var t = 1 - delta / (WAVE_BAND / 2);
        // Smooth falloff
        t = t * t * (3 - 2 * t);
        var intensity = t * w.intensity * 1.5;
        totalR += w.color[0] * intensity;
        totalG += w.color[1] * intensity;
        totalB += w.color[2] * intensity;
        totalI += intensity;
      }
    }
    if (totalI > 0) {
      return [totalR / totalI, totalG / totalI, totalB / totalI, Math.min(totalI, 1)];
    }
    return null;
  }

  function blendColor(base, wave) {
    if (!wave) return base;
    var t = wave[3];
    return [
      Math.round(base[0] + (wave[0] - base[0]) * t),
      Math.round(base[1] + (wave[1] - base[1]) * t),
      Math.round(base[2] + (wave[2] - base[2]) * t)
    ];
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

  function drawConnectionsParallax(arr, baseColor, maxDist, baseAlpha, yOffset) {
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
          // Blend midpoint color with wave
          var mx = (arr[i].x + arr[j].x) / 2;
          var my = (ay + by) / 2;
          var wave = getWaveColorAt(mx, my);
          var c = blendColor(baseColor, wave);
          ctx.strokeStyle = 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + alpha + ')';
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
        var wave = getWaveColorAt(p.x, py);
        var c = wave ? blendColor([150, 200, 255], wave) : [150, 200, 255];
        ctx.strokeStyle = 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + alpha + ')';
        ctx.beginPath(); ctx.moveTo(mouse.x, mouse.y); ctx.lineTo(p.x, py); ctx.stroke();
      }
    }
  }

  function drawParticlesParallax(arr, baseColor, yOffset) {
    for (var i = 0; i < arr.length; i++) {
      var p = arr[i];
      var py = wrapY(p.y, yOffset);
      var pulseBoost = p.pulse * 0.35;
      var alpha = Math.min(p.baseOpacity + pulseBoost, 1.0);
      var r = p.radius + p.pulse * 1.2;
      var wave = getWaveColorAt(p.x, py);
      var c = blendColor(baseColor, wave);
      // Boost opacity slightly when in wave
      if (wave) alpha = Math.min(alpha + wave[3] * 0.3, 1.0);
      ctx.fillStyle = 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + alpha + ')';
      ctx.beginPath(); ctx.arc(p.x, py, r, 0, Math.PI * 2); ctx.fill();
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    time++;

    pulseTimer++;
    if (pulseTimer >= PULSE_INTERVAL) { triggerPulse(); pulseTimer = 0; }
    propagatePulses();

    waveTimer++;
    if (waveTimer >= WAVE_INTERVAL) { spawnWave(); waveTimer = 0; }

    // Update waves
    for (var i = waves.length - 1; i >= 0; i--) {
      waves[i].dist += waves[i].speed;
      if (waves[i].dist > waves[i].maxDist) waves.splice(i, 1);
    }

    updateParticles(bgParticles, 0.18);
    updateParticles(fgParticles, 0.4);

    var bgOffset = -scrollY * BG_PARALLAX;
    var fgOffset = -scrollY * FG_PARALLAX;

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
    spawnWave(); // Immediate first wave so the effect is visible right away
    animate(); document.body.style.opacity = '1';
  }
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); }
  else { init(); }
})();
