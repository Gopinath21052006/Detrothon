import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  hue: number;
  depth: number;
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const raf = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COUNT = Math.min(240, Math.floor(window.innerWidth / 5));

    particles.current = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.1,
      vy: (Math.random() - 0.5) * 0.1,
      size: Math.random() * 2.5 + 0.5,
      hue: 170 + Math.random() * 120,
      depth: Math.random()
    }));

    const move = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", move);

    let t = 0;

    const render = () => {
      t += 0.0015;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Fog layer
      ctx.fillStyle = "rgba(0,0,0,0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p, i) => {
        p.x += p.vx * (0.2 + p.depth);
        p.y += p.vy * (0.2 + p.depth);

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 250) {
          p.x -= dx * 0.0002 * (1 - p.depth);
          p.y -= dy * 0.0002 * (1 - p.depth);
        }

        // Connections
        for (let j = i + 1; j < particles.current.length; j++) {
          const o = particles.current[j];
          const d = Math.hypot(p.x - o.x, p.y - o.y);
          if (d < 140) {
            ctx.strokeStyle = `hsla(${p.hue},100%,60%,${(1 - d / 140) * 0.08})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(o.x, o.y);
            ctx.stroke();
          }
        }

        // Breathing glow
        const pulse = 10 + Math.sin(t + p.depth * 10) * 6;

        const glow = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          pulse
        );
        glow.addColorStop(0, `hsla(${p.hue},100%,60%,0.45)`);
        glow.addColorStop(1, "transparent");

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fill();
      });

      raf.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf.current!);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.65 }}
    />
  );
}
