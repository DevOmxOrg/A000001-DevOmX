import { motion } from "framer-motion";
import teamDev from "@/assets/team-dev.png";
import teamOm from "@/assets/team-om.png";

const team = [
  { img: teamDev, name: "Dev Test", role: "Director and Web Lead" },
  { img: teamOm, name: "Om", role: "Director and Content Lead" },
];

const TeamSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-foreground text-center"
        >
          Meet the creative minds behind our success
        </motion.h2>

        <div className="flex justify-center gap-6 mt-16">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group w-48"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted border border-border group-hover:border-accent/40 transition-colors">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground font-sans text-sm">{member.name}</h3>
              <p className="text-xs text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
