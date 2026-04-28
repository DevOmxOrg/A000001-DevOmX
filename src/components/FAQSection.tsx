import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "What services does DevOmX offer?", a: "We focus on website design, redesigns, landing pages, responsive development, and basic on-page SEO setup." },
  { q: "How long does a typical project take?", a: "Most website projects take 2–6 weeks depending on scope, content readiness, and revisions." },
  { q: "How is pricing structured?", a: "We primarily work with fixed project packages. If your project is unique, we can provide a custom quote." },
  { q: "Do you offer ongoing support after project completion?", a: "Yes. We offer post-launch support for updates, fixes, and ongoing website improvements." },
  { q: "How often will I receive updates on my project?", a: "You can expect regular progress updates at each milestone, plus scheduled check-ins during the build." },
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-foreground text-center"
        >
          Got questions? We've got answers
        </motion.h2>

        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-sans font-medium text-foreground hover:text-accent">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
