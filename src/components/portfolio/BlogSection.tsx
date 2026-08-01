import { motion } from "framer-motion";
import { Clock3, MoveRight } from "lucide-react";
import StarField from "../StarField";
import LineField from "../LineField";
import { ImageWithFallback, NoiseOverlay } from "./ui";
import type { Post } from "./data";
import { EASE, NOISE } from "./variants";

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
}

export default function BlogSection({ posts }: { posts: Post[] }) {
  return (
    <section id="blog" className="relative scroll-mt-24 overflow-hidden py-32">
      <StarField count={450} />
      <LineField variant="marvels" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: `url("${NOISE}")`, backgroundSize: "180px 180px", opacity: 0.05 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2
          className="font-display font-medium uppercase text-5xl md:text-[90px] leading-[0.95]"
          initial={{ opacity: 0, filter: "blur(12px)", y: 24 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: EASE }}
        >
          Notes &amp; writing
        </motion.h2>

        <div className="mt-10 flex justify-between items-center">
          <a
            href="/blog/"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors"
          >
            Read the blog
            <MoveRight className="w-3.5 h-3.5 -rotate-45" />
          </a>
          <a
            href="#posts-grid"
            className="hidden md:inline-flex items-center gap-3 text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors"
          >
            Scroll to view more
            <MoveRight className="w-3.5 h-3.5 rotate-90" />
          </a>
        </div>

        <div id="posts-grid" className="mt-16 grid md:grid-cols-3 gap-6">
          {posts.length === 0 && (
            <p className="text-white/55 text-sm col-span-full">
              New essays are on their way.
            </p>
          )}
          {posts.map((post, i) => (
            <motion.article
              key={post.url}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE, delay: i * 0.1 }}
            >
              <a href={post.url} className="block">
                <div className="relative aspect-[16/10] overflow-hidden bg-card ring-1 ring-white/10">
                  {post.cover ? (
                    <ImageWithFallback
                      src={post.cover}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full" />
                  )}
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-white/50">
                  <Clock3 className="w-3 h-3" />
                  <span>{formatDate(post.pubDate)}</span>
                </div>
                <h3 className="font-display font-bold uppercase text-sm mt-1 group-hover:text-white/80 transition-colors">
                  {post.title}
                </h3>
                <p className="text-white/55 text-sm mt-1 line-clamp-2">
                  {post.description}
                </p>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
