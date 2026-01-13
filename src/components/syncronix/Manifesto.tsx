"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function Manifesto() {
  const { t } = useLanguage();
  return (
    <section id="manifesto" className="bg-background relative py-24 overflow-hidden">
      {/* Vibrant background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-8 text-foreground leading-relaxed">
            {/* Quote highlight with glow */}
            <blockquote className="relative border-l-4 border-cyan-500 pl-6 py-4 text-xl font-semibold text-foreground/90">
              <div className="absolute -left-1 top-0 w-1 h-full bg-cyan-500 blur-sm" />
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

            <p className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {t('manifesto.p4')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}