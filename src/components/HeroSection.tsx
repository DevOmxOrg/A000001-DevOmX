import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient pt-16 overflow-hidden">
      {/* Subtle decorative circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container text-center relative z-10 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-[1.05] tracking-tight max-w-4xl mx-auto"
        >
          Crafting digital experiences with{" "}
          <em className="not-italic text-accent">purposeful design</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
        >
          At DevOmX, we help ambitious brands stand out with tailored web design & development solutions, guiding you from concept to launch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-6 flex-wrap"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity glow-amber"
          >
            Get Started
            <ArrowUpRight size={16} />
          </a>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-muted border-2 border-background overflow-hidden"
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
              <p className="text-xs text-muted-foreground">Trusted by 500+ clients</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
