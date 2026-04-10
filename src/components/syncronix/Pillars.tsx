"use client";

import { motion } from "framer-motion";
import { Banknote, Activity, Users } from "lucide-react";

const pillars = [
  {
    icon: Banknote,
    title: "Riqueza & Poder",
    description: "Domine as leis da abundância financeira e construa sistemas que trabalhem para você. Transforme conhecimento em capital e capital em liberdade.",
    color: {
      icon: "text-cyan-300",
      iconBg: "bg-cyan-500/10 group-hover:bg-cyan-500/20",
      border: "hover:border-cyan-500/50",
      glow: "hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.5)]",
      orb: "bg-cyan-400/5 group-hover:bg-cyan-400/10",
    }
  },
  {
    icon: Activity,
    title: "Corpo & Energia",
    description: "Otimize sua máquina biológica para performance máxima. Energia é poder. Vitalidade é moeda. Força física reflete força mental.",
    color: {
      icon: "text-violet-300",
      iconBg: "bg-violet-500/10 group-hover:bg-violet-500/20",
      border: "hover:border-violet-500/50",
      glow: "hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.5)]",
      orb: "bg-violet-400/5 group-hover:bg-violet-400/10",
    }
  },
  {
    icon: Users,
    title: "Conexões & Influência",
    description: "Construa redes estratégicas que amplificam seu poder. Influência é o multiplicador de força mais poderoso do universo.",
    color: {
      icon: "text-fuchsia-300",
      iconBg: "bg-fuchsia-500/10 group-hover:bg-fuchsia-500/20",
      border: "hover:border-fuchsia-500/50",
      glow: "hover:shadow-[0_0_40px_-10px_rgba(217,70,239,0.5)]",
      orb: "bg-fuchsia-400/5 group-hover:bg-fuchsia-400/10",
    }
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
          className={`card-elegant group cursor-pointer relative overflow-hidden border border-white/10 ${pillar.color.border} ${pillar.color.glow} transition-all duration-500`}
          style={{
            background: 'rgba(10, 10, 10, 0.3)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
        >
          <div className={`absolute inset-0 ${pillar.color.orb} transition-colors duration-500 pointer-events-none`} />
          <div className="mb-6 relative z-10">
            <div className={`w-12 h-12 ${pillar.color.iconBg} rounded-xl flex items-center justify-center mb-4 transition-colors duration-300`}>
              <pillar.icon className={`w-6 h-6 ${pillar.color.icon}`} />
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