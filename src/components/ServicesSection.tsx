import { motion } from "framer-motion";
import { Palette, BarChart3, Layout, LineChart, Code2 } from "lucide-react";

const services = [
  { icon: Palette, title: "Brand Strategy", description: "We build cohesive brand identities that resonate with your audience." },
  { icon: BarChart3, title: "Digital Marketing", description: "Data-driven campaigns that grow your reach and convert visitors." },
  { icon: Layout, title: "UI/UX Design", description: "Intuitive interfaces that delight users and drive engagement." },
  { icon: LineChart, title: "Analytics & Reporting", description: "Actionable insights to optimize every touchpoint." },
  { icon: Code2, title: "Web Development", description: "Performant, scalable websites built with modern technologies." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary/50">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-serif font-bold text-foreground text-center"
        >
          Where innovation meets aesthetics
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/40 hover:glow-amber transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                <service.icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-serif font-bold text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="p-8 rounded-2xl bg-primary text-primary-foreground flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-serif font-bold">See Our Work in Action.</h3>
              <p className="mt-2 text-sm opacity-80">Start your creative journey with us!</p>
            </div>
            <div className="flex gap-3 mt-6">
              <a href="#contact" className="px-5 py-2.5 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                Let's Collaborate
              </a>
              <a href="#work" className="px-5 py-2.5 rounded-full border border-primary-foreground/30 text-sm font-medium hover:bg-primary-foreground/10 transition-colors">
                View Work
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
