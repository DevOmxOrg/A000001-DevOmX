import { motion } from "framer-motion";
import teamDev from "@/assets/team-dev.png";
import teamOm from "@/assets/team-om.png";

const team = [
  { img: teamDev, name: "Dev", role: "Director and Web Lead" },
  { img: teamOm, name: "Om", role: "Director and Content Lead" },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-secondary/50">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-foreground text-center"
        >
          Meet the team building your next website
        </motion.h2>

        <div className="flex justify-center gap-6 mt-16">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="frosted-card rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300 text-center w-[288px] md:w-[335px]"
            >
              <div className="aspect-square overflow-hidden hero-gradient">
                <img
                  src={member.img}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 [image-rendering:auto]"
                />
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-foreground font-sans" style={{ fontSize: '115%' }}>{member.name}</h3>
                <p className="text-xs mt-1" style={{ color: 'hsl(210 11% 20%)', fontSize: '115%' }}>{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;