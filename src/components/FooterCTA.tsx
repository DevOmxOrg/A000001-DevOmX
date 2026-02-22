import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const FooterCTA = () => {
  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground">
      <div className="container text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold"
        >
          Innovative solutions for bold brands
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-base opacity-70 max-w-lg mx-auto"
        >
          Looking to elevate your brand? We craft immersive experiences that captivate, engage, and make your business unforgettable.
        </motion.p>
        <motion.a
          href="mailto:hello@devomx.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Start a Project
          <ArrowUpRight size={16} />
        </motion.a>
      </div>

      <div className="container relative mt-20 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm font-display font-bold tracking-tight">
          Dev<span className="text-accent">Om</span>X
        </p>
        <div className="flex gap-6 md:absolute md:left-1/2 md:-translate-x-1/2">
          {["About", "Services", "Work", "Pricing"].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-xs opacity-60 hover:opacity-100 transition-opacity">
              {link}
            </a>
          ))}
        </div>
        <p className="text-xs opacity-40">© 2026 DevOmX. All rights reserved.</p>
      </div>
    </section>
  );
};

export default FooterCTA;
