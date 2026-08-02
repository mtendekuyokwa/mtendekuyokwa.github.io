import { motion } from "framer-motion";
import { ArrowUpRight, Clock3, Rss } from "lucide-react";
import StarField from "../StarField";
import LineField from "../LineField";
import { ImageWithFallback, NoiseOverlay } from "../portfolio/ui";
import type { Post } from "../portfolio/data";
import { EASE, MATTE } from "../portfolio/variants";
import BlogHeader from "./BlogHeader";
import BlogFooter from "./BlogFooter";

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
}

function PostCard({ post, i }: { post: Post; i: number }) {
  return (
    <motion.article
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
  );
}

function FeaturedPost({ post }: { post: Post }) {
  return (
    <motion.article
      className="group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: EASE }}
    >
      <a
        href={post.url}
        className="grid md:grid-cols-2 gap-8 items-center border-t border-white/10 pt-8"
      >
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
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-lime">
            Latest essay
          </div>
          <h3 className="mt-3 font-display font-bold uppercase text-2xl md:text-4xl leading-[1.02]">
            {post.title}
          </h3>
          <p className="mt-4 text-white/55 text-[15px] leading-relaxed max-w-md">
            {post.description}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-6">
            <span className="inline-flex items-center gap-2 text-xs text-white/50 uppercase tracking-widest">
              <Clock3 className="w-3 h-3" />
              {formatDate(post.pubDate)}
            </span>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">
              Read essay
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </a>
    </motion.article>
  );
}

export default function BlogIndex({ posts }: { posts: Post[] }) {
  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <BlogHeader />

      <main className={`relative overflow-hidden pt-48 pb-32 ${MATTE}`}>
        <StarField
          count={500}
          ring
          ringCount={240}
          ringRadiusFactor={0.37}
          ringBandWidth={50}
        />
        <LineField variant="marvels" />
        <NoiseOverlay />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <motion.h1
            className="font-display font-medium uppercase text-5xl md:text-[96px] leading-[0.95]"
            initial={{ opacity: 0, filter: "blur(12px)", y: 24 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: EASE }}
          >
            Essays &amp;
            <br />
            writing
          </motion.h1>

          <div className="mt-10 flex flex-wrap justify-between items-end gap-6">
            <p className="text-white/55 text-[15px] leading-relaxed max-w-md">
              A public archive of notes — code, language, faith, and the
              occasional rabbit hole that got out of hand.
            </p>
            <a
              href="/rss.xml"
              className="inline-flex items-center gap-2 text-xs text-white/60 border border-white/15 rounded-full px-3 py-1.5 hover:bg-white/5 hover:text-white transition-colors"
            >
              <Rss className="w-3 h-3" />
              RSS feed
            </a>
          </div>

          <div className="mt-6 text-xs uppercase tracking-widest text-white/40">
            {posts.length} {posts.length === 1 ? "essay" : "essays"}
          </div>

          {featured && (
            <div className="mt-16">
              <FeaturedPost post={featured} />
            </div>
          )}

          {rest.length > 0 && (
            <div className="mt-16 grid md:grid-cols-3 gap-6">
              {rest.map((post, i) => (
                <PostCard key={post.url} post={post} i={i} />
              ))}
            </div>
          )}
        </div>
      </main>

      <BlogFooter />
    </div>
  );
}
