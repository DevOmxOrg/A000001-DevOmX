import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    desc: "Ideal for small businesses that need a polished, high-performing website.",
    price: "£20",
    features: ["Up to 5 Pages", "Custom Website Design", "Responsive Development", "Basic On-Page SEO", "2 Revision Rounds", "Launch Support"],
    highlight: false,
  },
  {
    name: "Pro",
    desc: "Best for growing teams that need a larger, conversion-focused website.",
    price: "£30",
    features: ["Up to 10 Pages", "Priority Design + Build", "Landing Page Optimization", "Advanced On-Page SEO Setup", "4 Revision Rounds", "30 Days Post-Launch Support"],
    highlight: true,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-secondary/50">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-foreground text-center"
        >
          Pick the package that fits your website project
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`frosted-card p-8 rounded-2xl text-center ${
                plan.highlight
                  ? "bg-primary/75 text-foreground"
                  : "text-foreground"
              }`}
            >
              <p className={`text-sm font-medium ${plan.highlight ? "text-accent" : "text-accent"}`}>{plan.name}</p>
              <p className={`mt-2 text-sm ${plan.highlight ? "opacity-80" : "text-muted-foreground"}`}>{plan.desc}</p>
              <p className="mt-6 text-4xl font-display font-bold">{plan.price}<span className="text-base font-sans font-normal opacity-60">/month</span></p>

              <a
                href="#contact"
                className={`mt-6 inline-flex w-full items-center justify-center px-5 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-90 ${
                  plan.highlight
                    ? "bg-accent text-accent-foreground"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                Start Your Project
              </a>

              <div className="mt-8">
                <p className={`text-xs font-medium uppercase tracking-wider ${plan.highlight ? "opacity-60" : "text-muted-foreground"}`}>Features</p>
                <ul className="mt-4 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center justify-center gap-3 text-sm">
                      <Check size={16} className={plan.highlight ? "text-accent" : "text-accent"} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
