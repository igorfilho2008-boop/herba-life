import { motion } from "motion/react";
import { FAQS } from "@/src/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4 leading-tight">Dúvidas Frequentes</h2>
          <p className="text-ink/60 text-sm sm:text-base">Tudo o que você precisa saber antes de nos visitar.</p>
        </motion.div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {FAQS.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <AccordionItem value={`item-${idx}`} className="border-none bg-white rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="text-lg font-bold text-ink hover:text-primary-green transition-colors py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-ink/70 text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
