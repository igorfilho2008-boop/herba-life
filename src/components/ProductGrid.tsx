import { motion } from "motion/react";
import { PRODUCTS, WHATSAPP_URL } from "@/src/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

export default function ProductGrid() {
  return (
    <section id="bebidas" className="py-24 px-6 bg-cream/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">Para o seu resultado.</h2>
          <p className="text-ink/60 text-lg max-w-2xl mx-auto">
            Combinações densas em nutrientes para quem não abre mão do sabor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <Card className="h-full border-none shadow-xl shadow-ink/5 bg-white overflow-hidden rounded-3xl group">
                <div className="aspect-square relative overflow-hidden bg-cream">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary-green/90 backdrop-blur-sm text-cream px-3 py-1 rounded-full text-xs font-bold">
                    {project.price}
                  </div>
                </div>
                <CardContent className="p-5 sm:p-6 flex flex-col gap-4">
                  <h3 className="text-lg sm:text-xl font-bold text-ink">{project.name}</h3>
                  <p className="text-ink/60 text-xs sm:text-sm leading-relaxed grow">
                    {project.description}
                  </p>
                  <Button asChild className="w-full bg-accent-green hover:bg-accent-green/90 text-cream rounded-xl sm:rounded-full py-6 sm:py-2 h-auto text-sm sm:text-base font-bold cta-shadow transition-all active:scale-95">
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener">
                      <MessageCircle className="w-4 h-4 mr-2" /> Peça no zap
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
