import { motion } from "motion/react";
import { Leaf, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/src/constants";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Leaf className="text-accent-green w-8 h-8" />
              <span className="font-heading font-bold text-2xl">
                Espaço Herbalife <span className="text-accent-green">· Salvador</span>
              </span>
            </div>
            <p className="text-cream/60 max-w-sm text-lg leading-relaxed">
              Nutrição de elite em Salvador. Entregamos leveza e disposição real através de bebidas funcionais Herbalife preparadas na hora.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/espacoherbalifehangarbusiness" target="_blank" rel="noopener" className="bg-white/5 p-3 rounded-full hover:bg-accent-green transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="bg-white/5 p-3 rounded-full hover:bg-accent-green transition-colors">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-lg uppercase tracking-widest text-accent-green">Atalhos</h4>
            <nav className="flex flex-col gap-4 text-cream/80">
              <a href="#bebidas" className="hover:text-cream transition-colors">Bebidas</a>
              <a href="#beneficios" className="hover:text-cream transition-colors">Benefícios</a>
              <a href="#localizacao" className="hover:text-cream transition-colors">Localização</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="hover:text-cream transition-colors">WhatsApp</a>
            </nav>
          </div>

          <div className="flex flex-col gap-8">
            <h4 className="font-bold text-lg uppercase tracking-widest text-accent-green">Horário</h4>
            <div className="text-cream/80">
              <p className="font-bold">Segunda à Sexta</p>
              <p>07:00 – 15:00</p>
            </div>
            <Button asChild className="bg-accent-green hover:bg-accent-green/90 text-cream rounded-full">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener">Chame no zap</a>
            </Button>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-cream/40">
          <p>© 2026 Espaço Herbalife Hangar Business · Salvador-BA</p>
          <p className="text-center md:text-right max-w-md">
            Informação importante: Estes produtos não substituem o acompanhamento médico ou nutricional regular. Os resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </div>
    </footer>
  );
}
