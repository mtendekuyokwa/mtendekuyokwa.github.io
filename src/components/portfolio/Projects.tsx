import { motion } from "framer-motion";
import { ArrowUpRight, MoveRight } from "lucide-react";
import StarField from "../StarField";
import LineField from "../LineField";
import { ImageWithFallback, NoiseOverlay } from "./ui";
import { PROJECTS, REPOS } from "./data";
import { blurIn, MATTE } from "./variants";

export default function Projects() {
  return (
    <section
      id="projects"
      className={`relative scroll-mt-24 overflow-hidden px-6 md:px-12 py-32 ${MATTE}`}
    >
      <StarField count={550} />
      <LineField variant="marvels" />
      <NoiseOverlay />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-end">
          <motion.h2
            className="font-display font-black text-5xl md:text-6xl uppercase leading-[0.95]"
            {...blurIn(0)}
          >
            Things I&apos;ve
            <br />
            shipped
          </motion.h2>
          <motion.div className="max-w-md md:justify-self-end" {...blurIn(1)}>
            <p className="text-white/55 text-[15px] leading-relaxed">
              Apps, servers, and one very patient Brainfuck program. The rough
              edges are public — the lessons, too.
            </p>
            <a
              href={REPOS.all}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-3 text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors"
            >
              View all on GitHub
              <MoveRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.1,
              }}
            >
              <a
                href={project.href}
                target={project.href.startsWith("http") ? "_blank" : undefined}
                rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                className={`relative block overflow-hidden bg-card shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] ring-1 ring-white/10 ${
                  project.tall ? "aspect-3/4" : "aspect-4/3"
                }`}
              >
                <ImageWithFallback
                  src={project.cover}
                  alt={`${project.title} project screenshot`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </a>
              <div className="mt-4">
                <h3 className="font-display font-bold text-lg uppercase">
                  <a
                    href={project.href}
                    target={
                      project.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      project.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    className="hover:text-white/80 transition-colors"
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="text-white/55 text-sm mt-1">{project.blurb}</p>
                <a
                  href={project.repoHref}
                  target={
                    project.repoHref.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    project.repoHref.startsWith("http")
                      ? "noreferrer"
                      : undefined
                  }
                  className="mt-4 inline-flex items-center gap-3 text-xs text-white/60 border border-white/15 rounded-full px-3 py-1.5 hover:bg-white/5 hover:text-white transition-colors"
                >
                  {project.repoLabel}
                  <span className="grid place-items-center w-4 h-4 rounded-full border border-white/20">
                    <ArrowUpRight className="w-2.5 h-2.5" />
                  </span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
