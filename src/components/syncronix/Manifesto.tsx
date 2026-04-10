"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function Manifesto() {
  const { t } = useLanguage();
  return (
    <section id="manifesto" className="bg-background relative py-24 overflow-hidden">
      {/* Vibrant background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/8 to-transparent" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-40 bg-fuchsia-500/5 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-8 text-foreground leading-relaxed">
            {/* Quote highlight with glow */}
            <blockquote className="relative border-l-4 border-cyan-400 pl-6 py-4 text-xl font-semibold text-foreground/90">
              <div className="absolute -left-1 top-0 w-1 h-full bg-cyan-400 blur-md shadow-[0_0_20px_#22d3ee]" />
              "{t('manifesto.quote')}"
            </blockquote>

            <p className="text-lg text-foreground/80">
              {t('manifesto.p1')}
            </p>

            <p className="text-lg text-foreground/80">
              {t('manifesto.p2')}
            </p>

            <p className="text-lg text-foreground/80">
              {t('manifesto.p3')}
            </p>

            <p className="text-xl font-semibold bg-gradient-to-r from-cyan-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              {t('manifesto.p4')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
