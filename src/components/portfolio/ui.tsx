import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ImgHTMLAttributes,
  type ReactNode,
} from "react";
import { NOISE } from "./variants";

const FALLBACK_BG = "oklch(0.18 0 0)";

export function ImageWithFallback({
  alt,
  className,
  style,
  ...rest
}: ImgHTMLAttributes<HTMLImageElement>) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt || ""}
        className={className}
        style={{ ...style, background: FALLBACK_BG }}
      />
    );
  }

  return (
    <img
      {...rest}
      alt={alt}
      className={className}
      style={style}
      onError={() => setFailed(true)}
    />
  );
}

export function Logo({ className }: { className?: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className={`font-display font-black text-white flex items-center ${className ?? ""}`}
        style={{ lineHeight: 1 }}
      >
        MK
      </span>
    );
  }

  return (
    <img
      src="/portfolio/logo.svg"
      alt="Mtende Kuyokwa"
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

export function NoiseOverlay({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-[1] ${className}`}
      style={{
        backgroundImage: `url("${NOISE}")`,
        backgroundSize: "180px 180px",
        opacity: 0.06,
        mixBlendMode: "overlay",
      }}
    />
  );
}

export function usePointerParallax<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        if (r.width === 0) return;
        const mx = (e.clientX - r.left) / r.width - 0.5;
        const my = (e.clientY - r.top) / r.height - 0.5;
        el.style.setProperty("--mx", mx.toFixed(3));
        el.style.setProperty("--my", my.toFixed(3));
      });
    };

    el.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mousemove", onMove);
    };
  }, []);

  return ref;
}

export const parallax = (depth: number): CSSProperties => ({
  transform: `translate3d(calc(var(--mx, 0) * ${depth}px), calc(var(--my, 0) * ${depth}px), 0)`,
});

export function PillLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="inline-flex items-center gap-2 text-xs text-white/60 border border-white/15 rounded-full px-3 py-1.5 hover:bg-white/5 hover:text-white transition-colors"
    >
      {children}
    </a>
  );
}

export function GlowDot({ label }: { label: string }) {
  return (
    <div className="absolute bottom-3 left-3 z-10 inline-flex items-center gap-2 bg-black/70 backdrop-blur-sm text-white text-[11px] uppercase tracking-widest rounded-full px-3 py-2 ring-1 ring-white/15">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
      </span>
      {label}
    </div>
  );
}
