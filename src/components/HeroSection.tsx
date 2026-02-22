import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient pt-24 overflow-hidden">
      {/* Subtle decorative circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent/8 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container text-center relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-widest mb-8"
        >
          Website Design Studio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.05] tracking-tight max-w-4xl mx-auto"
        >
          Simply, we just make{" "}
          <em className="not-italic text-accent">great websites</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-base md:text-lg text-white/60 max-w-xl mx-auto leading-relaxed"
        >
          At DevOmX, we design and build clean, conversion-focused websites for service businesses, from first concept to launch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-6 flex-wrap"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90 transition-opacity glow-teal"
          >
            Get Started
            <ArrowUpRight size={16} />
          </a>

          <a
            href="#work"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            View Our Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex items-center justify-center gap-3"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full bg-white/10 border-2 border-white/20 overflow-hidden"
              >
                <div className="w-full h-full bg-accent/20" />
              </div>
            ))}
          </div>
          <div className="text-left">
            <div className="flex text-accent">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
              <Star size={14} />
            </div>
            <p className="text-xs text-white/50">Trusted by local businesses and growing teams</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
