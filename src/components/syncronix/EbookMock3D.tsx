"use client";

import { memo } from "react";
import { motion } from "framer-motion";

export const EbookMock3D = memo(function EbookMock3D() {
  return (
    <motion.div
      className="relative max-w-sm mx-auto"
      whileHover={{ 
        rotateY: -5, 
        rotateX: 5,
        scale: 1.05 
      }}
      transition={{ duration: 0.3 }}
      style={{ 
        perspective: 1000,
        transformStyle: "preserve-3d"
      }}
    >
      <div className="relative">
        {/* Image container */}
        <div className="card-elegant bg-gradient-to-br from-card to-muted p-4 aspect-[3/4] flex items-center justify-center transform-gpu">
          <img 
            src="/pagina pagamento.png" 
            alt="Página de pagamento SYNCRONIX"
            className="w-full h-full object-contain rounded-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
        
        {/* Book spine effect */}
        <div 
          className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-muted to-accent rounded-l-xl"
          style={{ transform: "translateX(-8px) rotateY(-90deg)" }}
        ></div>
        
        {/* Shadow */}
        <div 
          className="absolute top-4 left-4 w-full h-full bg-foreground/5 rounded-2xl -z-10"
          style={{ transform: "translateZ(-10px)" }}
        ></div>
      </div>
    </motion.div>
  );
});