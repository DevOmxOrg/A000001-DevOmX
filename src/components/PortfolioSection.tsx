import { motion } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  { img: project1, title: "Studio 28", tags: ["UX Research", "Interface Design"] },
  { img: project2, title: "Om's Plumbing", tags: ["Product Design", "E-commerce"] },
  { img: project3, title: "STF Marketing", tags: ["Brand Identity", "Mobile App"] },
  { img: project4, title: "Yogi's Yoga", tags: ["Visual Identity", "Web Design"] },
];

const PortfolioSection = () => {
  return (
    <section id="work" className="py-24 bg-background">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-foreground text-center"
        >
          How we transformed brands' online presence
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group frosted-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-foreground">{project.title}</h3>
                <div className="flex gap-2 mt-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/30 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;