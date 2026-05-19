import { motion } from "motion/react";
import { MapPin, Clock, Smartphone, Navigation, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/src/constants";

export default function Location() {
  return (
    <section id="localizacao" className="py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[600px]">
          <div className="w-full lg:w-1/2 min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5835251642927!2d-38.375806623992!3d-12.93444438737759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71610444391696f%3A0xc3be11883ae0317e!2sHangar%20Business%20Park!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.5] hover:grayscale-0 transition-all duration-500 min-h-[400px]"
            ></iframe>
          </div>
          
          <div className="w-full lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center gap-8 sm:gap-10">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-6 sm:mb-8 font-heading">
                Onde nos encontrar
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-accent-green/10 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl text-accent-green mt-1">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg text-ink">Endereço</h4>
                    <p className="text-ink/60 text-sm sm:text-base">Hangar Business Park · Loja 21</p>
                    <p className="text-ink/60 text-sm sm:text-base">Salvador - BA (Torre 5)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-accent-green/10 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl text-accent-green mt-1">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg text-ink">Horário</h4>
                    <p className="text-ink/60 text-sm sm:text-base">Segunda à Sexta</p>
                    <p className="text-ink/60 text-sm sm:text-base font-bold">07:00 às 15:00</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <Button asChild size="lg" className="w-full sm:w-auto bg-primary-green hover:bg-primary-green/90 text-cream rounded-2xl px-8 h-14 text-base font-bold">
                <a href="https://maps.app.goo.gl/9yGZ7o2L2z2z2z2z7" target="_blank" rel="noopener">
                  <Navigation className="w-5 h-5 mr-2" /> Traçar rota
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-primary-green/20 text-primary-green hover:bg-primary-green/5 rounded-2xl px-8 h-14 text-base font-bold">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener">
                  <MessageCircle className="w-5 h-5 mr-2" /> Chame no zap
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
