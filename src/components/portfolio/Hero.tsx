import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { ArrowUpRight, ExternalLink, Github, MoveRight } from "lucide-react";
import StarField from "../StarField";
import LineField from "../LineField";
import {
  GlowDot,
  ImageWithFallback,
  parallax,
  usePointerParallax,
} from "./ui";
import { GITHUB, JIYA_PLAY, REPOS } from "./data";
import { EASE, INTRO_DELAY, MATTE, NOISE } from "./variants";

interface CardDef {
  position: CSSProperties;
  size: string;
  depth: number;
  badge?: { icon: "github" | "external"; href: string; label: string };
  image?: { src: string; alt: string };
  tech?: string[];
  code?: boolean;
  glow?: string;
}

const CARDS: CardDef[] = [
  {
    position: { top: "34%", right: "6%" },
    size: "w-[150px] aspect-[4/3]",
    depth: 18,
    badge: { icon: "github", href: REPOS.katholic, label: "katholic" },
    image: { src: "/portfolio/profile.jpg", alt: "Mtende Kuyokwa" },
  },
  {
    position: { top: "2%", right: "2%" },
    size: "w-[260px] aspect-[16/9]",
    depth: 22,
    image: { src: "/portfolio/hackathon-group-gaiathon.jpg", alt: "Mtende with his group at Gaiathon" },
  },
  {
    position: { top: "7%", left: "4%" },
    size: "w-[110px] aspect-[3/4]",
    depth: 28,
    badge: { icon: "github", href: GITHUB, label: "github" },
    tech: ["TypeScript", "React", "Astro", "Go", "Dart", "Clojure"],
  },
  {
    position: { top: "10%", right: "12%" },
    size: "w-[200px] aspect-[3/4]",
    depth: 26,
    badge: { icon: "external", href: JIYA_PLAY, label: "jiya" },
    image: { src: "/portfolio/robotics-project.jpg", alt: "Robotics project" },
    glow: "View project",
  },
  {
    position: { top: "30%", left: "44%" },
    size: "w-[220px] aspect-[3/4]",
    depth: 20,
    badge: { icon: "github", href: REPOS.katholic, label: "katholic" },
    image: { src: "/portfolio/photo-world-bank-meet-1.jpg", alt: "Mtende at a World Bank meet" },
  },
  {
    position: { bottom: "calc(6% - 10px)", left: "calc(34% - 90px)" },
    size: "w-[160px] aspect-[4/5]",
    depth: 24,
    code: true,
  },
  {
    position: { bottom: "6%", right: "22%" },
    size: "w-[230px] aspect-[16/10]",
    depth: 22,
    image: { src: "/portfolio/hackathon-group-gaiathon.jpg", alt: "Mtende with his group at Gaiathon" },
  },
];

function TechCard({ tags }: { tags: string[] }) {
  return (
    <div className="h-full w-full bg-card ring-1 ring-white/10 p-3 flex flex-col gap-2">
      <span className="text-[10px] uppercase tracking-widest text-white/50">
        Stack
      </span>
      <div className="flex flex-wrap content-start gap-1.5">
        {tags.map((t) => (
          <span
            key={t}
            className="text-[10px] text-white/80 bg-white/5 border border-white/15 rounded-full px-2 py-0.5"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function CodeCard() {
  return (
    <div className="h-full w-full bg-[#0a0a0a] ring-1 ring-white/10 flex flex-col overflow-hidden">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10">
        <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
        <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
        <span className="w-2 h-2 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[10px] text-white/40 font-mono">euler.clj</span>
      </div>
      <pre className="px-3 py-2 text-[10px] leading-relaxed font-mono flex-1 overflow-hidden text-white/70">
        <code>
          <span className="text-[#9ae26b]">(defn</span>{" "}
          <span className="text-white/90">square</span>{" "}
          <span className="text-white/50">[x]</span>{" "}
          <span className="text-white/90">(* x x))</span>
          {"\n"}
          <span className="text-[#9ae26b]">(defn</span>{" "}
          <span className="text-white/90">solve</span>{" "}
          <span className="text-white/50">[n]</span>
          {"\n"}
          {"  "}
          <span className="text-[#c792ea]">(reduce</span>{" "}
          <span className="text-white/90">+</span>
          {"\n"}
          {"    "}
          <span className="text-white/50">(map</span>{" "}
          <span className="text-white/90">square</span>
          {"\n"}
          {"      "}
          <span className="text-white/50">(filter</span>{" "}
          <span className="text-white/90">odd?</span>{" "}
          <span className="text-white/50">(range</span>{" "}
          <span className="text-white/90">1</span>{" "}
          <span className="text-white/90">n</span>
          <span className="text-white/50">))))</span>
        </code>
      </pre>
    </div>
  );
}

export default function Hero() {
  const secRef = usePointerParallax<HTMLElement>();

  return (
    <section
      id="top"
      ref={secRef}
      className={`relative min-h-[110vh] overflow-hidden pt-32 pb-24 ${MATTE}`}
    >
      <StarField count={700} />
      <LineField variant="hero" />

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 w-[700px] opacity-40"
        viewBox="0 0 700 500"
        fill="none"
      >
        <ellipse cx="350" cy="250" rx="320" ry="195" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <ellipse cx="350" cy="250" rx="258" ry="150" stroke="oklch(0.92 0.18 130 / 0.16)" strokeWidth="1" />
      </svg>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: `url("${NOISE}")`, backgroundSize: "180px 180px", opacity: 0.05 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-y-16 -left-24 w-[min(780px,130%)]"
          style={{
            background:
              "radial-gradient(ellipse 100% 80% at 30% 45%, oklch(0.03 0.01 240 / 0.7) 0%, transparent 70%)",
          }}
        />
        <motion.h1
          className="font-display font-black text-7xl md:text-[110px] leading-[0.95] tracking-tight [text-shadow:0_2px_24px_rgba(0,0,0,0.65),0_1px_4px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0, filter: "blur(12px)", y: 24 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: INTRO_DELAY + 0.08 }}
        >
          MTENDE
          <br />
          KUYOKWA
        </motion.h1>

        <motion.p
          className="mt-8 text-white/70 max-w-md text-[15px] leading-relaxed [text-shadow:0_2px_12px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, filter: "blur(12px)", y: 24 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: INTRO_DELAY + 0.3 }}
        >
          Software engineer building products people actually use — currently
          shipping Jiya and Katholic.
        </motion.p>

        <motion.div
          className="mt-10 flex items-center gap-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: INTRO_DELAY + 0.5 }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors"
          >
            View projects
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors"
          >
            GitHub
            <MoveRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-[2] hidden md:block">
        {CARDS.map((card, i) => (
          <motion.div
            key={i}
            className={`absolute ${card.size}`}
            style={card.position}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1.1,
              ease: EASE,
              delay: INTRO_DELAY + 0.4 + i * 0.12,
            }}
          >
            <div className="relative h-full w-full" style={parallax(card.depth)}>
              <div className="group relative h-full w-full overflow-hidden bg-card shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] ring-1 ring-white/10">
                {card.image && (
                  <ImageWithFallback
                    src={card.image.src}
                    alt={card.image.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                {card.tech && <TechCard tags={card.tech} />}
                {card.code && <CodeCard />}
                {card.glow && <GlowDot label={card.glow} />}
                {card.badge && (
                  <a
                    href={card.badge.href}
                    target={card.badge.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.badge.href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={card.badge.label}
                    className="absolute bottom-2 left-2 z-10 inline-flex items-center gap-2 text-xs text-white/60 border border-white/15 rounded-full px-3 py-1.5 hover:bg-white/5 hover:text-white transition-colors"
                  >
                    {card.badge.icon === "github" ? (
                      <Github className="w-3 h-3" />
                    ) : (
                      <ExternalLink className="w-3 h-3" />
                    )}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
