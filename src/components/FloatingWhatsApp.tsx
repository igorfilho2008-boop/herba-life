import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/src/constants";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener"
      className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 sm:p-5 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 2 }}
    >
      {/* Pulsing Ring */}
      <div className="absolute inset-0 rounded-full border-4 border-[#25D366] animate-ping opacity-20 pointer-events-none" />
      
      <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
      
      {/* Tooltip on hover (Hidden on mobile touch) */}
      <span className="hidden sm:block absolute right-full mr-4 bg-white text-ink px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Chame no zap
      </span>
    </motion.a>
  );
}
