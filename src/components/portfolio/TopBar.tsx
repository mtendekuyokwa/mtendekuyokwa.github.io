import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Mail, Menu } from "lucide-react";
import { GITHUB, LINKEDIN, MAILTO } from "./data";
import { Logo } from "./ui";
import { EASE, INTRO_DELAY } from "./variants";

const NAV = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function TopBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between pt-6 px-6 md:px-10">
        <motion.a
          href="/"
          aria-label="Mtende Kuyokwa — home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: INTRO_DELAY - 0.2, ease: EASE }}
        >
          <Logo className="h-6 w-auto" />
        </motion.a>

        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-8"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-4 h-4 text-white/60 hover:text-white transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: INTRO_DELAY - 0.1, ease: EASE }}
          >
            <Github className="w-4 h-4" />
          </motion.a>
          <motion.a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-4 h-4 text-white/60 hover:text-white transition-colors hidden sm:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: INTRO_DELAY - 0.05, ease: EASE }}
          >
            <Linkedin className="w-4 h-4" />
          </motion.a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-6 h-6 text-white/70 hover:text-white flex items-center justify-center"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden mx-6 mt-4 bg-card ring-1 ring-white/10 rounded-lg overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-5 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center justify-between px-5 py-3 border-t border-white/10">
                <span className="text-xs uppercase tracking-widest text-white/50">
                  Say hi
                </span>
                <a
                  href={MAILTO}
                  aria-label="Email"
                  className="text-white/60 hover:text-white"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
