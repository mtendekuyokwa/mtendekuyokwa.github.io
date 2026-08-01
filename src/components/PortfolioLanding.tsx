import { useState } from "react";
import { MotionConfig } from "framer-motion";
import IntroSequence from "./IntroSequence";
import TopBar from "./portfolio/TopBar";
import Hero from "./portfolio/Hero";
import About from "./portfolio/About";
import Experience from "./portfolio/Experience";
import Projects from "./portfolio/Projects";
import BlogSection from "./portfolio/BlogSection";
import GetInTouch from "./portfolio/GetInTouch";
import Footer from "./portfolio/Footer";
import type { Post } from "./portfolio/data";

export default function PortfolioLanding({ posts }: { posts: Post[] }) {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MotionConfig reducedMotion="user">
        {!introDone && <IntroSequence onComplete={() => setIntroDone(true)} />}
        <TopBar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <BlogSection posts={posts} />
          <GetInTouch />
        </main>
        <Footer />
      </MotionConfig>
    </div>
  );
}
