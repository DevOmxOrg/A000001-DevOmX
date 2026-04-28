import { motion } from "framer-motion";
import { Palette, BarChart3, Layout, LineChart, Code2 } from "lucide-react";

const services = [
  { icon: Palette, title: "Custom Website Design", description: "Clean, modern designs tailored to your business and audience." },
  { icon: Layout, title: "Website Redesigns", description: "Refresh outdated websites with stronger structure, visuals, and UX." },
  { icon: BarChart3, title: "Landing Page Design", description: "Conversion-focused landing pages for campaigns, offers, and services." },
  { icon: Code2, title: "Responsive Development", description: "Fast, reliable builds that work smoothly across desktop, tablet, and mobile." },
  { icon: LineChart, title: "Basic SEO Setup", description: "On-page essentials to help search engines understand and rank your website." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Website design services focused on clarity and conversion
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group frosted-card p-7 rounded-2xl hover:shadow-xl transition-all duration-300 cursor-default"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center text-white group-hover:bg-accent transition-colors duration-300">
                <service.icon size={20} />
              </div>
              <h3 className="mt-5 text-base font-display font-bold text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="p-7 rounded-2xl bg-primary text-primary-foreground flex flex-col justify-between"
          >
            <div>
              <h3 className="text-base font-display font-bold">See website projects in action.</h3>
              <p className="mt-2 text-sm opacity-70">Explore recent design and build work.</p>
            </div>
            <div className="flex gap-3 mt-6">
              <a href="#contact" className="px-5 py-2.5 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                Start Your Website
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
