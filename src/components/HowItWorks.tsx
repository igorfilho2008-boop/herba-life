import { motion } from "motion/react";
import { MessageSquare, Coffee, Store } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <MessageSquare className="w-10 h-10" />,
      title: "1. Chame no zap",
      desc: "Tire dúvidas ou peça seu kit direto pelo nosso link exclusivo.",
    },
    {
      icon: <Coffee className="w-10 h-10" />,
      title: "2. Escolha os sabores",
      desc: "Defina seus itens favoritos entre Shakes, Detox e Drinks funcionais.",
    },
    {
      icon: <Store className="w-10 h-10" />,
      title: "3. Retire na Loja 21",
      desc: "Busque no Hangar Business Park (em frente à Torre 5) ou tome aqui no Espaço.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:text-center sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-ink">Como funciona</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="flex flex-col items-center text-center gap-4 sm:gap-6"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-accent-green/10 text-primary-green flex items-center justify-center mb-2 sm:mb-4">
                <div className="scale-75 sm:scale-100">{step.icon}</div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-ink">{step.title}</h3>
              <p className="text-ink/60 leading-relaxed text-base sm:text-lg px-4 sm:px-0">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
