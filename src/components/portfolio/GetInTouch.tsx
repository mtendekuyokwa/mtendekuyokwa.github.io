import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import LineField from "../LineField";
import { MAILTO } from "./data";
import { blurIn, NOISE } from "./variants";

export default function GetInTouch() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"]);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative h-[80vh] scroll-mt-24 overflow-hidden"
    >
      <motion.div
        aria-hidden="true"
        className="absolute -inset-x-0 -inset-y-[20%]"
        style={{
          y: bgY,
          background:
            "radial-gradient(ellipse 60% 55% at 70% 30%, oklch(0.92 0.18 130 / 0.09), transparent 65%), radial-gradient(ellipse 50% 45% at 25% 75%, rgba(255,255,255,0.05), transparent 65%), radial-gradient(ellipse 80% 70% at 50% 50%, oklch(0.16 0.004 240), oklch(0.06 0 0) 75%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.06 0 0) 0%, transparent 30%, transparent 70%, oklch(0.06 0 0) 100%)",
        }}
      />
      <LineField variant="marvelsBottom" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: `url("${NOISE}")`, backgroundSize: "180px 180px", opacity: 0.05 }}
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h3
          className="font-display font-black uppercase text-4xl md:text-7xl leading-[0.95]"
          {...blurIn(0)}
        >
          Let&apos;s build something
          <br />
          <span className="text-lime">worth shipping.</span>
        </motion.h3>

        <motion.div
          className="mt-12 flex items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <a
            href={MAILTO}
            className="inline-flex items-center gap-3 bg-white text-black font-display font-bold uppercase text-sm tracking-widest rounded-full px-8 py-4 hover:bg-white/90 transition-colors"
          >
            Get in touch
          </a>
          <span
            aria-hidden="true"
            className="grid place-items-center w-12 h-12 rounded-full border border-white/20 text-white/70"
          >
            <ArrowUpRight className="w-5 h-5" />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
