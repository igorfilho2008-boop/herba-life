import { motion } from "motion/react";
import { TESTIMONIALS } from "@/src/constants";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-white/40">
      <div className="absolute top-0 right-0 p-12 opacity-10 -z-10">
        <LeafPattern className="w-64 h-64 text-accent-green" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">O que nossos clientes dizem</h2>
          <p className="text-ink/60 text-lg">Resultados reais de quem frequenta nosso espaço.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-ink/5 border border-primary-green/5 relative h-full flex flex-col"
            >
              <div className="flex text-highlight mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              
              <Quote className="absolute top-8 right-8 w-12 h-12 text-primary-green/5" />
              
              <p className="text-ink/80 text-lg italic leading-relaxed mb-8 grow">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-ink/5 pt-6">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-cream border-2 border-accent-green/20">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-ink">{testimonial.name}</h4>
                  <p className="text-sm text-ink/40 uppercase tracking-tighter">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeafPattern({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className}>
      <path
        fill="currentColor"
        d="M100,0 C120,40 160,50 200,60 C160,80 140,120 120,160 C80,140 40,160 0,160 C20,120 40,80 0,40 C40,40 60,10 100,0 Z"
      />
    </svg>
  );
}
