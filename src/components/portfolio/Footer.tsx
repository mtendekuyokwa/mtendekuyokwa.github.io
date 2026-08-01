import { GITHUB, LINKEDIN } from "./data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 md:px-12 py-6 flex justify-between items-center text-xs text-white/40">
      <p>© 2026 Mtende Kuyokwa. All rights reserved.</p>
      <div className="flex items-center gap-5">
        <a
          href={GITHUB}
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors"
        >
          Github
        </a>
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors"
        >
          Linkedin
        </a>
      </div>
    </footer>
  );
}
