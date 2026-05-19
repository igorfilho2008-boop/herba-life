import { motion } from "motion/react";
import { WHATSAPP_URL } from "@/src/constants";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

export default function Opportunity() {
  return (
    <section className="py-16 sm:py-24 px-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60%] h-[120%] bg-accent-green/5 rounded-full blur-[100px] -z-10 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto rounded-[2rem] sm:rounded-[3rem] bg-ink/5 p-8 sm:p-20 text-center flex flex-col items-center gap-6 sm:gap-8 border border-ink/5">
        <TrendingUp className="w-12 h-12 sm:w-16 sm:h-16 text-accent-green mb-2 sm:mb-4" />
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-bold text-ink leading-tight"
        >
          Quer revender e ganhar com Herbalife?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-base sm:text-lg text-ink/70 max-w-2xl leading-relaxed"
        >
          Seja um distribuidor oficial e alcance sua rentabilidade no seu tempo. Garantimos treinamento completo para você faturar de onde quiser.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="w-full sm:w-auto"
        >
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-2 border-primary-green hover:bg-primary-green hover:text-cream text-primary-green rounded-2xl px-8 sm:px-12 h-14 transition-all uppercase tracking-widest font-bold text-xs sm:text-sm">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener">
              Saber mais no zap
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
