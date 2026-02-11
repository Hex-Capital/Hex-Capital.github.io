(function () {
  const canvas = document.getElementById('constellation-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height, particles;
  const MAX_PARTICLES = 100;
  const CONNECT_DIST = 150;
  const SPEED = 0.3;
  const DOT_RADIUS = 1.5;
  const LINE_WIDTH = 0.5;
  const COLOR = [100, 160, 220];

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function createParticles() {
    const area = window.innerWidth * window.innerHeight;
    const count = Math.min(MAX_PARTICLES, Math.floor(area / 25000));
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * SPEED * 2,
        vy: (Math.random() - 0.5) * SPEED * 2
      });
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Update positions
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      // Clamp to bounds
      p.x = Math.max(0, Math.min(width, p.x));
      p.y = Math.max(0, Math.min(height, p.y));
    }

    // Draw connections
    ctx.lineWidth = LINE_WIDTH;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECT_DIST) {
          const opacity = 0.4 * (1 - dist / CONNECT_DIST);
          ctx.strokeStyle = 'rgba(' + COLOR[0] + ',' + COLOR[1] + ',' + COLOR[2] + ',' + opacity + ')';
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw dots
    for (let i = 0; i < particles.length; i++) {
      ctx.fillStyle = 'rgba(' + COLOR[0] + ',' + COLOR[1] + ',' + COLOR[2] + ',0.6)';
      ctx.beginPath();
      ctx.arc(particles[i].x, particles[i].y, DOT_RADIUS, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(animate);
  }

  function init() {
    resize();
    createParticles();
    animate();

    // Show body once ready
    document.body.style.opacity = '1';
  }

  window.addEventListener('resize', function () {
    resize();
    createParticles();
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
