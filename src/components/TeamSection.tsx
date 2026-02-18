import { motion } from "framer-motion";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

const team = [
  { img: team1, name: "Marcus Chen", role: "Lead Developer" },
  { img: team2, name: "Sofia Rivera", role: "UX Designer" },
  { img: team3, name: "James Okafor", role: "Product Designer" },
  { img: team4, name: "Elena Novak", role: "Brand Strategist" },
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
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
