import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "What services does DevOmX offer?", a: "We offer brand strategy, UI/UX design, web development, digital marketing, and analytics — end-to-end digital solutions for modern businesses." },
  { q: "How long does a typical project take?", a: "Most projects take 4–8 weeks depending on scope. We'll give you a clear timeline during our initial discovery call." },
  { q: "How is pricing structured?", a: "We offer monthly retainer plans as well as project-based pricing. Check our pricing section or contact us for a custom quote." },
  { q: "Do you offer ongoing support after project completion?", a: "Yes! We provide post-launch support and maintenance packages to ensure your product continues to perform at its best." },
  { q: "How often will I receive updates on my project?", a: "Depending on your plan, you'll receive updates daily or every 2 days, plus regular strategy calls." },
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
