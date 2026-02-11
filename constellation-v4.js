(function () {
  // V4: Three Layers + Depth Bokeh — ultra-deep third layer for soft depth effect
  if (window._constellationRAF) cancelAnimationFrame(window._constellationRAF);
  if (window._constellationResize) window.removeEventListener('resize', window._constellationResize);
  if (window._constellationMouseMove) window.removeEventListener('mousemove', window._constellationMouseMove);
  if (window._constellationScroll) window.removeEventListener('scroll', window._constellationScroll);

  var canvas = document.getElementById('constellation-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');

  var width, height;
  var deepParticles = [];
  var bgParticles = [];
  var fgParticles = [];
  var mouse = { x: -9999, y: -9999 };
  var scrollY = 0;
  var time = 0;

  // Three depth layers with distinct colors
  var DEEP_COLOR = [55, 120, 160];
  var BG_COLOR = [70, 160, 190];
  var FG_COLOR = [100, 160, 220];

  var DEEP_CONNECT_DIST = 200;
  var BG_CONNECT_DIST = 120;
  var FG_CONNECT_DIST = 140;
  var MOUSE_REPEL = 90;
  var MOUSE_CONNECT = 180;

  // Three parallax rates for enhanced depth
  var DEEP_PARALLAX = 0.04;
  var BG_PARALLAX = 0.12;
  var FG_PARALLAX = 0.28;

  var PULSE_INTERVAL = 55;
  var pulseTimer = 0;

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

    // Deep layer: few, large, soft, slow — bokeh effect
    var deepCount = Math.min(40, Math.floor(area / 40000));
    deepParticles = [];
    for (var i = 0; i < deepCount; i++) {
      var r = 8 + Math.random() * 16; // large soft dots
      deepParticles.push({
        x: Math.random() * width, y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.1, vy: (Math.random() - 0.5) * 0.1,
        radius: r,
        baseOpacity: 0.06 + Math.random() * 0.07,
        breathPhase: Math.random() * Math.PI * 2,
        breathSpeed: 0.008 + Math.random() * 0.006,
        pulse: 0
      });
    }

    // Background layer
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

    // Foreground layer
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

  function updateDeepParticles() {
    for (var i = 0; i < deepParticles.length; i++) {
      var p = deepParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -20 || p.x > width + 20) p.vx *= -1;
      if (p.y < -20 || p.y > height + 20) p.vy *= -1;
      p.x = Math.max(-20, Math.min(width + 20, p.x));
      p.y = Math.max(-20, Math.min(height + 20, p.y));
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

  function drawDeepLayer(yOffset) {
    // Bokeh: large, soft, breathing circles
    for (var i = 0; i < deepParticles.length; i++) {
      var p = deepParticles[i];
      var py = wrapY(p.y, yOffset);
      var breath = 0.5 + 0.5 * Math.sin(time * p.breathSpeed + p.breathPhase);
      var alpha = p.baseOpacity * (0.6 + breath * 0.4);
      var r = p.radius * (0.85 + breath * 0.15);

      // Soft radial gradient for bokeh look
      var grad = ctx.createRadialGradient(p.x, py, 0, p.x, py, r);
      grad.addColorStop(0, 'rgba(' + DEEP_COLOR[0] + ',' + DEEP_COLOR[1] + ',' + DEEP_COLOR[2] + ',' + (alpha * 1.8) + ')');
      grad.addColorStop(0.4, 'rgba(' + DEEP_COLOR[0] + ',' + DEEP_COLOR[1] + ',' + DEEP_COLOR[2] + ',' + (alpha * 0.9) + ')');
      grad.addColorStop(1, 'rgba(' + DEEP_COLOR[0] + ',' + DEEP_COLOR[1] + ',' + DEEP_COLOR[2] + ',0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(p.x, py, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Very faint connections between nearby deep particles
    ctx.lineWidth = 0.8;
    for (var i = 0; i < deepParticles.length; i++) {
      var ay = wrapY(deepParticles[i].y, yOffset);
      for (var j = i + 1; j < deepParticles.length; j++) {
        var by = wrapY(deepParticles[j].y, yOffset);
        var dx = deepParticles[i].x - deepParticles[j].x;
        var dy = ay - by;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < DEEP_CONNECT_DIST) {
          var falloff = 1 - dist / DEEP_CONNECT_DIST;
          var alpha = 0.08 * falloff;
          ctx.strokeStyle = 'rgba(' + DEEP_COLOR[0] + ',' + DEEP_COLOR[1] + ',' + DEEP_COLOR[2] + ',' + alpha + ')';
          ctx.beginPath(); ctx.moveTo(deepParticles[i].x, ay); ctx.lineTo(deepParticles[j].x, by); ctx.stroke();
        }
      }
    }
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

    updateDeepParticles();
    updateParticles(bgParticles, 0.18);
    updateParticles(fgParticles, 0.4);

    var deepOffset = -scrollY * DEEP_PARALLAX;
    var bgOffset = -scrollY * BG_PARALLAX;
    var fgOffset = -scrollY * FG_PARALLAX;

    // Draw back to front: deep → bg → fg
    drawDeepLayer(deepOffset);
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
