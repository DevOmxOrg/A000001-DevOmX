import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    desc: "For companies who need design support. One request at a time.",
    price: "$2,500",
    features: ["Design Updates Every 2 Days", "Mid-level Designer", "SEO Optimization", "Monthly Analytics", "2x Calls Per Month", "License Free Assets"],
    highlight: false,
  },
  {
    name: "Pro",
    desc: "2x the speed. Great for an MVP, Web App, or complex problem.",
    price: "$3,800",
    features: ["Design Updates Daily", "Senior-level Designer", "AI Advisory Framework", "Full-service Creative Team", "4x Calls Per Month", "License Free Assets"],
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
          Pick the plan that fits your startup
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`p-8 rounded-2xl border ${
                plan.highlight
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-foreground border-border"
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
                Let's Collaborate
              </a>

              <div className="mt-8">
                <p className={`text-xs font-medium uppercase tracking-wider ${plan.highlight ? "opacity-60" : "text-muted-foreground"}`}>Features</p>
                <ul className="mt-4 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
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
