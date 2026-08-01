import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  alpha: number;
  phase: number;
  speed: number;
  depth: number;
  glow: boolean;
  tinted: boolean;
}

interface StarFieldProps {
  count?: number;
  ring?: boolean;
  ringCount?: number;
  ringRadiusFactor?: number;
  ringBandWidth?: number;
  className?: string;
}

export default function StarField({
  count = 500,
  ring = false,
  ringCount = 0,
  ringRadiusFactor = 0.37,
  ringBandWidth = 50,
  className = "",
}: StarFieldProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let stars: Star[] = [];
    let raf = 0;
    let disposed = false;

    const pointer = { x: 0.5, y: 0.5 };

    const gaussian = () =>
      (Math.random() + Math.random() + Math.random() - 1.5) / 1.5;

    const push = (
      x: number,
      y: number,
      r: number,
      alpha: number,
      speed: number,
      depth: number,
      glow: boolean,
      tinted: boolean,
    ) => {
      stars.push({
        x,
        y,
        r,
        alpha,
        phase: Math.random() * Math.PI * 2,
        speed,
        depth,
        glow,
        tinted,
      });
    };

    const buildStars = () => {
      stars = [];
      for (let i = 0; i < count; i++) {
        const big = Math.random() < 0.14;
        push(
          Math.random(),
          Math.random(),
          big ? 1.3 + Math.random() * 1.7 : 0.5 + Math.random() * 0.8,
          0.25 + Math.random() * 0.6,
          0.4 + Math.random() * 1.4,
          0.15 + Math.random() * 0.85,
          Math.random() < 0.18,
          Math.random() < 0.12,
        );
      }
      if (ring && ringCount > 0) {
        const cx = 0.5;
        const cy = 0.5;
        for (let i = 0; i < ringCount; i++) {
          const ang = Math.random() * Math.PI * 2;
          const dist =
            ringRadiusFactor + gaussian() * (ringBandWidth / 100);
          push(
            cx + Math.cos(ang) * dist,
            cy + Math.sin(ang) * dist,
            0.7 + Math.random() * 1.2,
            0.4 + Math.random() * 0.5,
            0.3 + Math.random() * 0.9,
            0.2 + Math.random() * 0.8,
            Math.random() < 0.3,
            Math.random() < 0.1,
          );
        }
      }
    };

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildStars();
    };

    const onPointer = (e: PointerEvent) => {
      pointer.x = e.clientX / window.innerWidth;
      pointer.y = e.clientY / window.innerHeight;
    };

    const frame = () => {
      if (disposed) return;
      ctx.clearRect(0, 0, w, h);
      const t = performance.now() / 1000;
      const maxShift = Math.min(w, h) * 0.025;
      const px = (pointer.x - 0.5) * 2;
      const py = (pointer.y - 0.5) * 2;

      for (const st of stars) {
        const tw =
          0.5 + 0.5 * Math.sin(t * st.speed + st.phase);
        const alpha = st.alpha * (0.5 + 0.5 * tw);
        const sx = st.x * w + px * maxShift * st.depth;
        const sy = st.y * h + py * maxShift * st.depth;

        ctx.globalAlpha = alpha;
        if (st.glow) {
          const g = ctx.createRadialGradient(sx, sy, 0, sx, sy, st.r * 4);
          g.addColorStop(0, st.tinted ? "rgba(154,226,107,0.95)" : "rgba(255,255,255,0.95)");
          g.addColorStop(0.3, st.tinted ? "rgba(154,226,107,0.4)" : "rgba(255,255,255,0.4)");
          g.addColorStop(1, "rgba(255,255,255,0)");
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(sx, sy, st.r * 4, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = st.tinted
            ? "rgba(154,226,107,0.95)"
            : "rgba(255,255,255,0.9)";
          ctx.beginPath();
          ctx.arc(sx, sy, st.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;

      if (!reduced) raf = requestAnimationFrame(frame);
    };

    resize();
    if (!reduced) {
      raf = requestAnimationFrame(frame);
      window.addEventListener("pointermove", onPointer);
    } else {
      frame();
    }

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      ro.disconnect();
    };
  }, [count, ring, ringCount, ringRadiusFactor, ringBandWidth]);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
