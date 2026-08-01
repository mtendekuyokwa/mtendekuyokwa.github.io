import { motion } from "framer-motion";
import { ArrowUpRight, MoveRight } from "lucide-react";
import StarField from "../StarField";
import LineField from "../LineField";
import { PillLink } from "./ui";
import { EXPERIENCE, LINKEDIN } from "./data";
import { blurIn, EASE, MATTE, NOISE } from "./variants";

export default function Experience() {
  return (
    <section
      id="experience"
      className={`relative scroll-mt-24 overflow-hidden px-6 md:px-12 py-32 ${MATTE}`}
    >
      <StarField
        count={550}
        ring
        ringCount={260}
        ringRadiusFactor={0.37}
        ringBandWidth={50}
      />
      <LineField variant="projects" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: `url("${NOISE}")`, backgroundSize: "180px 180px", opacity: 0.05 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-end">
          <motion.h2
            className="font-display font-black text-5xl md:text-6xl uppercase leading-[0.95]"
            {...blurIn(0)}
          >
            Where I&apos;ve
            <br />
            worked
          </motion.h2>
          <motion.div className="max-w-md md:justify-self-end" {...blurIn(1)}>
            <p className="text-white/55 text-[15px] leading-relaxed">
              A running list of the places I&apos;ve built things — some are
              degrees, some are products, and a few are just essays that got
              out of hand.
            </p>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-3 text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors"
            >
              View full resume
              <MoveRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>

        <div>
          {EXPERIENCE.map((entry, i) => (
            <motion.div
              key={entry.role + entry.company}
              className="grid md:grid-cols-[220px_1fr] gap-2 md:gap-12 border-t border-white/10 py-8 last:border-b"
              initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: EASE, delay: i * 0.12 }}
            >
              <div className="text-xs uppercase tracking-widest text-white/50 pt-1.5">
                {entry.period}
              </div>
              <div>
                <h3 className="font-display font-bold text-lg uppercase">
                  {entry.role}
                </h3>
                <p className="text-white/40 text-sm mt-0.5">{entry.company}</p>
                <p className="text-white/55 text-[15px] leading-relaxed mt-3 max-w-xl">
                  {entry.description}
                </p>
                {entry.links.length > 0 && (
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {entry.links.map((link) => (
                      <PillLink key={link.href + link.label} href={link.href}>
                        {link.label}
                        <ArrowUpRight className="w-3 h-3" />
                      </PillLink>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
