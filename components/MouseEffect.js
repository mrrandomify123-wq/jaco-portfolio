import { useEffect, useRef } from 'react';

export default function MouseEffect() {
  const canvasRef = useRef(null);
  const spotlightRef = useRef(null);

  // Spotlight gradient — updates DOM directly to avoid re-renders
  useEffect(() => {
    const el = spotlightRef.current;
    if (!el) return;
    const onMove = (e) => {
      el.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(232,68,10,0.045), transparent 70%)`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // Canvas particle field
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const mouse = { x: -9999, y: -9999 };
    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', onMove);

    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      r: Math.random() * 1.1 + 0.3,
      a: Math.random() * 0.28 + 0.04,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130 && dist > 0) {
          const force = ((130 - dist) / 130) * 0.55;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        // Damping + gentle random drift
        p.vx *= 0.97;
        p.vy *= 0.97;
        p.vx += (Math.random() - 0.5) * 0.012;
        p.vy += (Math.random() - 0.5) * 0.012;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < -4) p.x = canvas.width + 4;
        if (p.x > canvas.width + 4) p.x = -4;
        if (p.y < -4) p.y = canvas.height + 4;
        if (p.y > canvas.height + 4) p.y = -4;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.a})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          inset: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        ref={spotlightRef}
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
    </>
  );
}
