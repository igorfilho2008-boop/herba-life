import { motion } from "motion/react";
import { WHATSAPP_URL } from "@/src/constants";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function KitHighlight() {
  return (
    <section className="px-6 py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto rounded-[2.5rem] sm:rounded-[3rem] bg-gradient-to-br from-sunset to-accent-green p-1 group relative overflow-hidden"
      >
        <div className="bg-white/95 backdrop-blur-md rounded-[2.4rem] sm:rounded-[2.9rem] px-6 sm:px-8 py-10 sm:py-16 flex flex-col items-center text-center gap-6 sm:gap-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full noise opacity-30" />
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-sunset/20 text-sunset font-bold px-4 py-1 rounded-full text-[10px] sm:text-sm inline-flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 h-4" /> OFERTA ESPECIAL
          </motion.div>

          <h2 className="text-3xl sm:text-6xl font-extrabold text-ink max-w-3xl leading-[1.1]">
            O kit completo para o seu resultado.
          </h2>
          
          <p className="text-base sm:text-lxt text-ink/70 max-w-xl leading-relaxed">
            Nutrição de precisão para o mês inteiro. APENAS algumas unidades disponíveis para retirada imediata na Loja 21 do Hangar Business Park.
          </p>

          <Button asChild size="lg" className="w-full sm:w-auto bg-primary-green hover:bg-primary-green/90 text-cream rounded-2xl px-8 sm:px-12 h-14 sm:h-16 text-base sm:text-lg font-bold shadow-2xl hover:scale-105 active:scale-95 transition-transform">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener">
              Garanta seu kit no zap
            </a>
          </Button>

          <p className="text-[10px] sm:text-sm font-bold text-ink/40 tracking-widest uppercase">
            Retirada na Loja 21 (em frente à Torre 5)
          </p>
        </div>
      </motion.div>
    </section>
  );
}
