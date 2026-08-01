import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "./portfolio/ui";
import { EASE } from "./portfolio/variants";

const RAYS = Array.from({ length: 9 }, (_, i) => i * 40);

export default function IntroSequence({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [reduced, setReduced] = useState(false);
  const [dock, setDock] = useState<{ x: number; y: number; scale: number } | null>(null);
  const [phase, setPhase] = useState<"in" | "dock">("in");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);

    if (mq.matches) {
      const t = setTimeout(onComplete, 100);
      return () => clearTimeout(t);
    }

    const scale = 24 / 64;
    const x = 74.25 - window.innerWidth / 2;
    const y = 36 - window.innerHeight / 2;
    setDock({ x, y, scale });
    const dockT = setTimeout(() => setPhase("dock"), 2300);
    const doneT = setTimeout(onComplete, 3600);
    return () => {
      clearTimeout(dockT);
      clearTimeout(doneT);
    };
  }, [onComplete]);

  if (reduced) return null;

  const ringSizes = [60, 130, 200];

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden bg-black">
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{ duration: 3.6, times: [0, 0.55, 0.78, 1], ease: "easeInOut" }}
      />

      {ringSizes.map((size, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 rounded-full border border-white/15"
          style={{
            width: size,
            height: size,
            marginLeft: -size / 2,
            marginTop: -size / 2,
          }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: [0, 0.7, 0], scale: [0.6, 1.7, 2.4] }}
          transition={{ duration: 1.9, delay: 0.25 + i * 0.2, ease: "easeOut" }}
        />
      ))}

      <motion.div
        className="absolute left-1/2 top-1/2"
        style={{ width: 0, height: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.7, 0], rotate: [0, 24, 0] }}
        transition={{ duration: 2.4, delay: 0.3, ease: "easeInOut" }}
      >
        {RAYS.map((deg) => (
          <div
            key={deg}
            className="absolute"
            style={{
              left: 0,
              top: 0,
              width: 2,
              height: 220,
              marginLeft: -1,
              marginTop: -220,
              transform: `rotate(${deg}deg)`,
              transformOrigin: "bottom center",
              background:
                "linear-gradient(to top, rgba(255,255,255,0.9), rgba(255,255,255,0))",
            }}
          />
        ))}
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-1/2"
        style={{
          width: 268,
          height: 64,
          marginLeft: -134,
          marginTop: -32,
        }}
        initial={{ opacity: 0, scale: 1.6, filter: "blur(16px)" }}
        animate={
          phase === "in"
            ? { opacity: 1, scale: 1, filter: "blur(0px)" }
            : dock
              ? {
                  opacity: 1,
                  scale: dock.scale,
                  x: dock.x,
                  y: dock.y,
                  filter: "blur(0px)",
                }
              : { opacity: 1, scale: 1, filter: "blur(0px)" }
        }
        transition={
          phase === "in"
            ? { duration: 0.7, delay: 0.35, ease: EASE }
            : { duration: 0.9, ease: EASE }
        }
      >
        <motion.div
          className="overflow-hidden"
          style={{ width: 268, height: 64 }}
          initial={{ width: 0 }}
          animate={{ width: 268 }}
          transition={{ duration: 0.8, delay: 0.95, ease: EASE }}
        >
          <Logo className="h-16 w-auto" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute"
        style={{ left: 24, top: 24, width: 8, height: 8, borderRadius: 9999, background: "#ffffff" }}
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: [0, 1, 0], scale: [1, 30, 60] }}
        transition={{ duration: 0.9, delay: 2.85, ease: "easeOut" }}
      />
    </div>
  );
}
