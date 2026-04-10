"use client";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MatrixRain from "@/components/ui/matrix-code";
import { useLanguage } from "@/contexts/LanguageContext";

export function Shop() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const products = [
    {
      id: 1,
      name: t('shop.product1.name'),
      category: t('shop.product1.category'),
      description: t('shop.product1.description')
    },
    {
      id: 2,
      name: t('shop.product2.name'),
      category: t('shop.product2.category'),
      description: t('shop.product2.description')
    },
    {
      id: 3,
      name: t('shop.product3.name'),
      category: t('shop.product3.category'),
      description: t('shop.product3.description')
    }
  ];
  
  const handleCTAClick = () => {
    console.log('[Shop]', 'cta_shop_click');
    navigate('/shop');
  };

  return (
    <section id="shop" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 opacity-40">
        <MatrixRain
          fontSize={20}
          color="#22d3ee"
          characters="01"
          fadeOpacity={0.08}
          speed={1}
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('shop.title')}
          </h2>
          <p className="text-2xl text-muted-foreground mb-8">
            {t('shop.subtitle')}
          </p>

          <div className="max-w-3xl mx-auto space-y-6 text-foreground">
            <p className="text-lg leading-relaxed">
              {t('shop.description1')}
            </p>

            <p className="text-lg leading-relaxed">
              {t('shop.description2')}
            </p>

            <p className="text-lg font-medium text-primary">
              {t('shop.description3')}
            </p>
          </div>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
              className="card-elegant group cursor-pointer text-center"
            >
              {/* Placeholder image */}
              <div className="w-full h-64 bg-gradient-to-br from-muted to-accent rounded-xl mb-6 flex items-center justify-center">
                <div className="text-4xl font-bold text-muted-foreground/30">
                  SYNC
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm font-mono text-muted-foreground tracking-widest uppercase">
                  {product.category}
                </p>
                <h3 className="text-xl font-semibold text-foreground">
                  {product.name}
                </h3>
                <p className="text-muted-foreground">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            onClick={handleCTAClick}
            className="btn-hero"
            aria-label="Ver coleções SYNCWEAR"
          >
            {t('shop.button')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}