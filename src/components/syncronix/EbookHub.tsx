"use client";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { EbookMock3D } from "./EbookMock3D";
import { Pillars } from "./Pillars";
import { FallingPattern } from "@/components/ui/falling-pattern";
import { useLanguage } from "@/contexts/LanguageContext";

export function EbookHub() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const handleCTAClick = () => {
    console.log('[EbookHub]', 'cta_ebook_click');
    navigate('/ebooks');
  };

  return (
    <section id="ebook" className="py-24 bg-background relative overflow-hidden">
      {/* Falling Pattern Background */}
      <div className="absolute inset-0">
        <FallingPattern 
          color="#ffffff"
          backgroundColor="transparent"
          duration={200}
          blurIntensity="0.5em"
          density={0.8}
          className="opacity-20"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {t('ebookhub.title')}
          </h2>
          <p className="text-subtitle max-w-2xl mx-auto">
            {t('ebookhub.subtitle')}
          </p>
        </motion.div>

        {/* Ebook Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <EbookMock3D />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground leading-relaxed">
              {t('ebookhub.description1')}
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              {t('ebookhub.description2')}
            </p>

            <Button
              onClick={handleCTAClick}
              className="btn-hero"
              aria-label="Acessar conhecimento SYNCRONIX"
            >
              {t('ebookhub.button')}
            </Button>
          </motion.div>
        </div>

        {/* Pillars Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            {t('ebookhub.pillars.title')}
          </h3>
        </motion.div>

        <Pillars />

        {/* Ecosystem Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-20 space-y-6 text-center"
        >
          <p className="text-lg text-foreground leading-relaxed">
            {t('ebookhub.ecosystem1')}
          </p>

          <p className="text-lg text-foreground leading-relaxed">
            {t('ebookhub.ecosystem2')}
          </p>

          <p className="text-lg font-medium text-primary">
            {t('ebookhub.ecosystem3')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}