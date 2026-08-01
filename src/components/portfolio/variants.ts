export const EASE = [0.22, 1, 0.36, 1] as const;
export const INTRO_DELAY = 2.9;
export const MATTE = "bg-[oklch(0.16_0.004_240)]";

export const NOISE =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='180' height='180' filter='url(#n)' opacity='0.7'/></svg>`,
  );

export const blurIn = (custom = 0) => ({
  initial: { opacity: 0, filter: "blur(12px)", y: 24 },
  whileInView: { opacity: 1, filter: "blur(0px)", y: 0 },
  viewport: { once: true },
  transition: { duration: 1.1, ease: EASE, delay: custom * 0.1 },
});
