"use client";

import { motion } from "framer-motion";
import { Banknote, Activity, Users } from "lucide-react";

const pillars = [
  {
    icon: Banknote,
    title: "Riqueza & Poder",
    description: "Domine as leis da abundância financeira e construa sistemas que trabalhem para você. Transforme conhecimento em capital e capital em liberdade."
  },
  {
    icon: Activity,
    title: "Corpo & Energia",
    description: "Otimize sua máquina biológica para performance máxima. Energia é poder. Vitalidade é moeda. Força física reflete força mental."
  },
  {
    icon: Users,
    title: "Conexões & Influência",
    description: "Construa redes estratégicas que amplificam seu poder. Influência é o multiplicador de força mais poderoso do universo."
  }
];

export function Pillars() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {pillars.map((pillar, index) => (
        <motion.div
          key={pillar.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1,
            ease: "easeOut" 
          }}
          viewport={{ once: true }}
          className="card-elegant group cursor-pointer"
          style={{
            background: 'rgba(10, 10, 10, 0.15)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <div className="mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-200">
              <pillar.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {pillar.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {pillar.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}