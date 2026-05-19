import { motion } from "motion/react";
import { Leaf } from "lucide-react";

export default function MarqueeBar() {
  const items = [
    "NATURAL",
    "PRÁTICO",
    "RÁPIDO",
    "SABOROSO",
    "RESULTADO",
  ];

  return (
    <div className="bg-primary-green h-20 overflow-hidden flex items-center whitespace-nowrap uppercase font-black text-2xl tracking-tight text-cream headline">
      <motion.div
        animate={{ x: [0, -1035] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
        className="flex shrink-0 items-center gap-12 px-6"
      >
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center gap-12">
            {items.map((item) => (
              <div key={item} className="flex items-center gap-12">
                <span>{item}</span>
                <Leaf className="w-5 h-5 text-accent-green fill-accent-green" />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
