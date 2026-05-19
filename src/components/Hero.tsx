import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/src/constants";
import { ArrowRight, Star, MapPin, Clock, Leaf } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] pt-24 sm:pt-32 pb-12 sm:pb-16 px-6 sm:px-12 overflow-hidden flex items-center">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full noise pointer-events-none" />
      <div className="blob bg-primary-green/10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] -top-20 sm:-top-40 -left-10 sm:-left-20" />
      <div className="blob bg-sunset/10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] top-40 sm:top-60 -right-10 sm:-right-20" />

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-4 sm:gap-6"
        >
          <motion.span 
            variants={itemVariants}
            className="text-primary-green font-bold tracking-[0.2em] text-[10px] sm:text-xs uppercase bg-primary-green/10 self-center px-3 py-1 rounded-full mb-1 sm:mb-2"
          >
            NUTRIÇÃO FUNCIONAL HERBALIFE · SALVADOR-BA
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-[80px] font-black text-ink leading-[1] sm:leading-[0.9] tracking-[-0.03em] mb-2 sm:mb-4 max-w-4xl"
          >
            Há um jeito mais leve de atravessar a sua rotina.
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-xl text-ink/70 max-w-2xl leading-relaxed mb-4 sm:mb-8"
          >
            Bebidas funcionais preparadas na hora com ingredientes naturais que devolvem sua disposição.
          </motion.p>

          {/* Visual Element Moved Here */}
          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full max-w-2xl aspect-[4/3] mb-8 sm:mb-12 flex items-center justify-center p-4"
          >
            {/* Animated dashed orb */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-primary-green/10 rounded-full"
            />

            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20 w-full h-full rounded-[30px] sm:rounded-[40px] shadow-2xl overflow-hidden bg-white"
            >
               <img 
                 src="http://testepablo.viraloferta.com/wp-content/uploads/2026/05/faca_essa_mulher_segurar_a_202605191347.jpeg" 
                 alt="Bebida Herbalife Preparada na Hora" 
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

            <div className="absolute -top-4 sm:-top-8 -right-2 sm:-right-4 w-20 sm:w-28 h-20 sm:h-28 bg-highlight rounded-full flex items-center justify-center font-black text-[10px] sm:text-xs text-center p-2 leading-tight rotate-12 shadow-lg z-30 headline">
              FEITO NA<br/>HORA!
            </div>
            
            <motion.div
               animate={{ rotate: -360 }}
               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
               className="absolute bottom-4 sm:bottom-10 -left-2 sm:-left-10 w-16 sm:w-24 h-16 sm:h-24 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 z-30"
            >
               <span className="text-3xl sm:text-5xl">🍃</span>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Button asChild size="lg" className="w-full sm:w-auto bg-accent-green hover:bg-accent-green/90 text-cream rounded-2xl px-8 sm:px-10 py-7 sm:py-8 text-base sm:text-lg font-bold cta-shadow hover:scale-[1.02] active:scale-95 transition-transform group">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener">
                Chame no zap <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-2 border-primary-green/20 px-8 sm:px-10 py-7 sm:py-8 rounded-2xl text-base sm:text-lg font-bold hover:bg-primary-green/5 active:scale-95 transition-all">
              <a href="#bebidas">Ver bebidas</a>
            </Button>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-6 sm:mt-12 flex flex-wrap items-center justify-center gap-x-6 sm:gap-8 gap-y-3 text-primary-green/60 font-bold text-[11px] sm:text-sm tracking-wide"
          >
            <div className="flex items-center gap-1.5 sm:gap-2"><span>⏱</span> 07:00 – 15:00</div>
            <div className="flex items-center gap-1.5 sm:gap-2"><span>📍</span> Loja 21 (Torre 5)</div>
            <div className="flex items-center gap-1.5 sm:gap-2"><span>⭐</span> +2.900 clientes</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
