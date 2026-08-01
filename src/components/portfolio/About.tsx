import { motion } from "framer-motion";
import StarField from "../StarField";
import LineField from "../LineField";
import { ImageWithFallback, NoiseOverlay } from "./ui";
import { blurIn, MATTE } from "./variants";

function CircuitTexture() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute -right-24 -top-10 w-[520px] opacity-[0.08]"
      viewBox="0 0 520 400"
      fill="none"
    >
      <path
        d="M10 60h120l40 40h70l30-30h80M10 160h90l30 30h120l40-40h90M10 300h160l50 50h100M250 100v120M380 200v100"
        stroke="oklch(0.92 0.18 130)"
        strokeWidth="2"
      />
      <circle cx="10" cy="60" r="5" fill="oklch(0.92 0.18 130)" />
      <circle cx="370" cy="90" r="5" fill="oklch(0.92 0.18 130)" />
      <circle cx="460" cy="350" r="5" fill="oklch(0.92 0.18 130)" />
    </svg>
  );
}

function GridTexture() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -left-20 bottom-0 h-[380px] w-[460px] opacity-[0.05]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
        backgroundSize: "34px 34px",
        maskImage:
          "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        WebkitMaskImage:
          "radial-gradient(ellipse at center, black 30%, transparent 75%)",
      }}
    />
  );
}

function TopoTexture() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute left-[38%] top-[12%] w-[260px] opacity-[0.06]"
      viewBox="-180 -120 380 240"
      fill="none"
    >
      {[30, 60, 90, 120, 150].map((r) => (
        <g
          key={r}
          transform={`translate(${r % 60 === 0 ? 40 : 0}, ${r % 60 === 0 ? 30 : 0})`}
        >
          <ellipse
            cx="0"
            cy="0"
            rx={r}
            ry={r * 0.55}
            stroke="rgba(255,255,255,0.8)"
            strokeWidth="1"
          />
        </g>
      ))}
    </svg>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className={`relative scroll-mt-24 overflow-hidden px-6 md:px-12 py-32 ${MATTE}`}
    >
      <StarField count={500} />
      <LineField variant="photographer" />
      <NoiseOverlay />

      <CircuitTexture />
      <GridTexture />
      <TopoTexture />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-full w-[400px]"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(255,255,255,0.03), transparent)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-[1fr_1.5fr] gap-12 items-center">
        <motion.div
          className="relative rounded-[20px] bg-[#efeae0] p-3 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]"
          {...blurIn(0)}
        >
          <div className="relative overflow-hidden rounded-[14px]">
            <ImageWithFallback
              src="/portfolio/avatar.png"
              alt="Portrait of Mtende"
              className="aspect-[3/4] w-full object-cover"
            />
            <div className="absolute bottom-3 left-3">
              <p className="font-display font-black text-2xl leading-none text-black">
                MTENDE
              </p>
              <p className="font-display font-black text-2xl leading-none text-black/70">
                KUYOKWA
              </p>
            </div>
          </div>
        </motion.div>

        <div>
          <motion.h2
            className="font-display font-black text-5xl md:text-6xl uppercase leading-[0.95] w-[600px] max-w-full"
            {...blurIn(1)}
          >
            builds things
            <br />
            that solve real
            <br />
            problems
          </motion.h2>

          <motion.div
            className="mt-8 space-y-4 text-white/55 text-[15px] leading-relaxed max-w-xl"
            {...blurIn(2)}
          >
            <p>
              Mtende is a software engineering student at the Malawi
              University of Business and Applied Sciences who ships for the
              problems he sees. He built Jiya, a ridesharing platform for
              Malawi, end to end — app, backend, and web — and Katholic, an
              offline-first Flutter app for daily Catholic readings and the
              Way of the Cross in English and Chichewa.
            </p>
            <p>
              These days he is deep in functional programming — working
              through Clojure and Project Euler — and learning machine
              learning from first principles. He cares less about shiny
              frameworks and more about tools that quietly do the job.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
