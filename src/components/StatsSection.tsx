import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "8+", label: "Years of Experience" },
  { value: "10+", label: "Design Awards" },
];

const pillWords = ["Clarity", "Performance", "Conversion"];

const StatsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-foreground max-w-3xl mx-auto leading-tight"
        >
          Websites designed to look great, load fast, and convert
        </motion.h2>

        <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
          {pillWords.map((word) => (
            <span
              key={word}
              className="px-5 py-2 rounded-full border border-border text-sm font-medium text-muted-foreground"
            >
              {word}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <p className="text-5xl md:text-6xl font-display font-bold text-foreground">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
