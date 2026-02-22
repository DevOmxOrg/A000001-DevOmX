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
              "DevOmX's expertise transformed my vision into a stunning reality!"
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
            className="frosted-card p-8 rounded-2xl bg-primary/75 text-foreground flex flex-col justify-center items-center text-center"
          >
            <p className="text-6xl font-display font-bold">{`91%`}</p>
            <p className="mt-2 text-sm opacity-80">Clients recommend our design services</p>
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
              "Their design clarity and attention to detail completely transformed our website."
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
