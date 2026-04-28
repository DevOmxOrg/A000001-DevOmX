import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = ["Services", "Work", "Team", "Pricing", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      {/* Floating pill navbar */}
      <div className="relative w-full max-w-3xl bg-white/90 backdrop-blur-md rounded-full shadow-md px-4 h-14 flex items-center justify-center md:grid md:grid-cols-[auto_auto_auto] md:justify-center md:gap-0">
        <div className="hidden md:flex md:w-52 md:justify-end md:pr-[3.75rem]">
          <a href="#" className="text-lg font-display font-bold tracking-tight text-foreground">
            Dev<span className="text-accent">Om</span>X
          </a>
        </div>

        <a href="#" className="text-lg font-display font-bold tracking-tight text-foreground md:hidden">
          Dev<span className="text-accent">Om</span>X
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex md:w-52 md:justify-start md:pl-[3.75rem]">
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get Started
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className="rotate-45">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <button className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 text-foreground/70" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-base font-medium text-foreground/70 hover:text-foreground px-4 py-2.5 rounded-xl hover:bg-secondary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium mt-2"
                onClick={() => setOpen(false)}
              >
                Get Started
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
