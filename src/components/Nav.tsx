import { motion, useScroll, useTransform } from "motion/react";
import { Leaf, Menu } from "lucide-react";
import { WHATSAPP_URL } from "@/src/constants";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Nav() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(247, 244, 236, 0)", "rgba(247, 244, 236, 1)"]
  );
  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ["none", "0 4px 6px -1px rgb(0 0 0 / 0.1)"]
  );

  return (
    <motion.nav
      style={{ backgroundColor, boxShadow }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between transition-all duration-300"
    >
      <div className="flex items-center gap-2">
        <Leaf className="text-accent-green w-6 h-6" />
        <span className="font-heading font-bold text-primary-green text-sm sm:text-base leading-tight">
          Espaço Herbalife <br className="sm:hidden" />
          <span className="text-accent-green">· Hangar Business</span>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-widest text-ink">
        <a href="#bebidas" className="hover:text-primary-green transition-colors">Bebidas</a>
        <a href="#beneficios" className="hover:text-primary-green transition-colors">Benefícios</a>
        <a href="#localizacao" className="hover:text-primary-green transition-colors">Localização</a>
      </div>

      <div className="flex items-center gap-4">
        <Button asChild className="bg-accent-green hover:bg-accent-green/90 text-cream rounded-full px-4 sm:px-6 h-10 sm:h-11 cta-shadow transition-all text-xs sm:text-sm font-bold uppercase tracking-wider">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener">Chame no zap</a>
        </Button>
      </div>
    </motion.nav>
  );
}
