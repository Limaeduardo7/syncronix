"use client";

import { motion } from "framer-motion";
import { LampDemo } from "@/components/ui/lamp";

export function Manifesto() {
  return (
    <section id="manifesto" className="bg-background relative pt-8 pb-8">
      {/* Lamp Effect */}
      <LampDemo />
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-4 -mt-56 relative z-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          
          <div className="space-y-6 text-foreground leading-relaxed">
            {/* Quote highlight */}
            <blockquote className="border-l-2 border-primary pl-6 text-lg font-medium text-foreground/90 mb-8">
              "A realidade é moldável. Você só precisa aprender a sintaxe."
            </blockquote>
            
            <p className="text-lg">
              Na SYNCRONIX, entendemos que a existência humana opera em frequências. 
              Alguns nascem sintonizados com o poder, outros precisam encontrar a estação certa.
            </p>
            
            <p className="text-lg">
              Não somos uma marca. Somos um sistema operacional para a vida humana. 
              Uma filosofia que reconhece uma verdade simples: você não está aqui para sobreviver. 
              Você está aqui para dominar.
            </p>
            
            <p className="text-lg">
              O mundo está dividido entre aqueles que criam as regras e aqueles que as seguem. 
              Entre os que constroem impérios e os que trabalham neles. Entre os que definem 
              a realidade e os que simplesmente existem dentro dela.
            </p>
            
            <p className="text-lg font-medium text-primary">
              SYNCRONIX é para aqueles que escolheram o primeiro caminho.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}