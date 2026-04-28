import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-foreground text-center"
        >
          What clients say about working with us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="frosted-card p-8 rounded-2xl"
          >
            <Quote size={24} className="text-accent" />
            <p className="mt-4 text-foreground font-display text-lg font-medium leading-relaxed">
              "DevOmX handled all the confusing tech stuff for me, and their expertise transformed my vision into a stunning reality!."
            </p>
            <div className="mt-6">
              <p className="font-semibold text-foreground text-sm">Sarah Mitchell</p>
              <p className="text-xs text-muted-foreground">Founder of TechLoom</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="frosted-card p-8 rounded-2xl"
          >
            <Quote size={24} className="text-accent" />
            <p className="mt-4 text-foreground font-display text-lg font-medium leading-relaxed">
              "Our old site was an outdated mess, but their design clarity and attention to detail completely transformed our website"
            </p>
            <div className="mt-6">
              <p className="font-semibold text-foreground text-sm">James Jenkins</p>
              <p className="text-xs text-muted-foreground">Owner of The Daily Grind Cafe</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="frosted-card p-8 rounded-2xl"
          >
            <Quote size={24} className="text-accent" />
            <p className="mt-4 text-foreground font-display text-lg font-medium leading-relaxed">
              "DevOmX built us a perfect, ready-to-launch website from scratch, making the whole process completely stress free!"
            </p>
            <div className="mt-6">
              <p className="font-semibold text-foreground text-sm">Raj Patel</p>
              <p className="text-xs text-muted-foreground">CEO of GreenPulse</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
