import { motion } from "motion/react";
import { BENEFITS, WHATSAPP_URL } from "@/src/constants";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Benefits() {
  return (
    <section id="beneficios" className="py-16 sm:py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-last lg:order-first mt-8 sm:mt-0"
        >
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Estilo de vida saudável" 
              className="w-full h-[300px] sm:h-auto object-cover"
            />
          </div>
          {/* Decorative shapes */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-highlight rounded-full -z-10 blur-2xl opacity-50" />
          <div className="absolute -top-6 -left-6 w-48 h-48 bg-accent-green rounded-full -z-10 blur-3xl opacity-20" />
        </motion.div>

        <div className="flex flex-col gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-ink mb-6">
              O que você sente logo nos primeiros dias.
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {BENEFITS.map((benefit, idx) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-center gap-3 sm:gap-4 bg-white/50 backdrop-blur-sm p-4 rounded-xl sm:rounded-2xl border border-primary-green/5"
                >
                  <div className="bg-accent-green/10 p-1.5 sm:p-2 rounded-full shrink-0">
                    <motion.svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 sm:w-5 sm:h-5 text-accent-green"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <motion.path
                        d="M20 6L9 17L4 12"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 + (idx * 0.1) }}
                      />
                    </motion.svg>
                  </div>
                  <span className="text-base sm:text-lg font-medium text-ink/80">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button asChild size="lg" className="w-full sm:w-auto bg-primary-green hover:bg-primary-green/90 text-cream rounded-2xl px-8 h-14 text-base font-bold cta-shadow">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener">
                Comece agora pelo zap
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
