"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/syncronix/Header";
import { Footer } from "@/components/syncronix/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

interface Product {
  id: number;
  name: string;
  description: string;
  originalPrice: string;
  promotionalPrice: string;
  installments: string;
  link?: string;
  languageLinks?: {
    pt: string;
    en: string;
    es: string;
  };
  coverImage?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "eBook – A Chave do Poder",
    description: "Desbloqueie seu potencial com sabedoria",
    originalPrice: "R$ 97,50",
    promotionalPrice: "R$ 59,90 à vista",
    installments: "8× de R$ 8,49",
    coverImage: "/achavedopoder.webp",
    languageLinks: {
      pt: "/ebook-a-chave-do-poder",
      en: "/ebook-the-key-to-power",
      es: "/ebook-la-clave-del-poder",
    },
  },
  {
    id: 2,
    name: "eBook – A Regra da Vida",
    description: "Desvende os segredos para uma vida plena e significativa",
    originalPrice: "R$ 97,50",
    promotionalPrice: "R$ 59,90 à vista",
    installments: "8× de R$ 8,49",
    coverImage: "/regra-da-vida/MOCKUP PRESENTS PORTUGUES.png",
    languageLinks: {
      pt: "/regra-da-vida",
      en: "/regra-da-vida/en",
      es: "/regra-da-vida/es",
    },
  },
  {
    id: 3,
    name: "eBook – Efeito Camaleão – O Guia Definitivo da Persuasão e Influência Invisível",
    description: "Guia de persuasão e influência invisível",
    originalPrice: "R$ 87,50",
    promotionalPrice: "R$ 49,90 à vista",
    installments: "7× de R$ 7,98",
    link: "https://pay.hotmart.com/V95856841S?checkoutMode=10",
    coverImage: "/efeitocamaleão.png",
  },
  {
    id: 4,
    name: "eBook – Alma Livre, Leve e Abundante",
    description: "Bem‑estar emocional e abundância interior",
    originalPrice: "R$ 77,50",
    promotionalPrice: "R$ 39,90 à vista",
    installments: "5× de R$ 8,83",
    link: "/alma-livre-leve-abundante",
    coverImage: "/almalivreleveeabundante.png",
  },
  {
    id: 5,
    name: "Guia Prático – Dominando Demônios Internos",
    description: "Transforme inseguranças em poder e clareza",
    originalPrice: "R$ 39,90",
    promotionalPrice: "R$ 19,90 à vista",
    installments: "2× de R$ 10,38",
    link: "https://pay.hotmart.com/S96001034V",
    coverImage: "/dominandodemoniosinternos.png",
  },
  {
    id: 6,
    name: "Manual Avançado do Salto Quântico – 10 Passos",
    description: "10 passos para reescrever sua realidade",
    originalPrice: "R$ 39,90",
    promotionalPrice: "R$ 19,90 à vista",
    installments: "2× de R$ 10,38",
    link: "https://pay.hotmart.com/P95880111J",
    coverImage: "/manualavançadodosaltoquantico.png",
  },
  {
    id: 7,
    name: "Energy Hack + Áudio Reprogramação",
    description: "Atualize o mindset e viva sua realidade",
    originalPrice: "R$ 29,90",
    promotionalPrice: "R$ 19,90 à vista",
    installments: "2× de R$ 10,38",
    link: "https://pay.hotmart.com/J95022753E",
    coverImage: "/energyhack.png",
  },
];

const Ebooks = memo(function Ebooks() {
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const handlePurchase = (link: string, productName: string) => {
    console.log('[Ebooks]', 'purchase_click', { productName, link });

    // Check if it's an internal route
    if (link.startsWith('/')) {
      navigate(link);
    } else {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const getProductLink = (product: Product): string => {
    if (product.languageLinks) {
      return product.languageLinks[language];
    }
    return product.link || '#';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
        {/* Animated Falling Stripes Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background">
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 bg-gradient-to-b from-transparent via-primary/30 to-transparent"
                style={{
                  left: `${(i + 1) * 12}%`,
                  height: '40%',
                }}
                animate={{
                  y: ['-100%', '200%'],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: i * 0.4,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
            >
              <span className="text-primary font-semibold tracking-wider text-sm uppercase">
                {t('ebooks.badge')}
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              {t('ebooks.title')}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              {t('ebooks.subtitle')} <span className="text-primary font-semibold">{t('ebooks.subtitle.highlight')}</span>.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center justify-center gap-4 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>{t('ebooks.feature.instant')}</span>
              </div>
              <div className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>{t('ebooks.feature.guarantee')}</span>
              </div>
              <div className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>{t('ebooks.feature.premium')}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-[120px] -translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              {t('ebooks.section.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('ebooks.section.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                className="group relative flex flex-col h-full"
              >
                {/* Card with advanced effects */}
                <div className="relative flex flex-col h-full p-6 rounded-2xl bg-card border border-border/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:-translate-y-2">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/20 to-transparent rounded-tr-2xl rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Product Image */}
                  {product.coverImage && (
                    <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-xl">
                      {/* Image glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                      <img
                        src={product.coverImage}
                        alt={product.name}
                        className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                        style={{
                          objectFit: "cover",
                          display: "block",
                        }}
                      />

                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                  )}

                  {/* Product Info */}
                  <div className="relative flex-1 flex flex-col space-y-4">
                    <h3 className="text-xl font-semibold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                      {product.name}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed flex-1">
                      {product.description}
                    </p>

                    {/* Pricing */}
                    <div className="space-y-2 pt-4 border-t border-border/30 relative">
                      {/* Animated line */}
                      <div className="absolute top-0 left-0 h-[1px] w-0 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500" />

                      <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground line-through opacity-60">
                          {product.originalPrice}
                        </span>
                        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">
                          {product.promotionalPrice}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary/60 rounded-full" />
                        <p className="text-sm text-muted-foreground">
                          ou {product.installments}
                        </p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button
                      onClick={() => handlePurchase(getProductLink(product), product.name)}
                      className="relative w-full bg-white hover:bg-gray-50 text-gray-900 py-3 rounded-lg font-bold shadow-lg border-2 border-primary/50 hover:border-primary hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 overflow-hidden group/btn mt-4"
                      aria-label={`Ver mais sobre ${product.name}`}
                    >
                      <span className="relative z-10">{t('ebooks.button.buy')}</span>
                      {/* Button shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        </div>

        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Card container */}
            <div className="relative p-8 md:p-12 rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50 shadow-2xl">
              {/* Top accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />

              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mx-auto w-16 h-16 mb-6 rounded-full bg-white flex items-center justify-center shadow-lg shadow-primary/25 border-2 border-primary/20"
              >
                <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </motion.div>

              <div className="text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                  {t('guarantee.title')}
                </h2>

                <div className="space-y-6 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-muted-foreground"
                  >
                    {t('guarantee.text1')} <span className="text-primary font-bold">{t('guarantee.text1.highlight')}</span> {t('guarantee.text1.end')}
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-muted-foreground"
                  >
                    {t('guarantee.text2')} <span className="text-primary font-bold">{t('guarantee.text2.highlight')}</span>{t('guarantee.text2.end')}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="pt-4 mt-4 border-t border-border/30"
                  >
                    <p className="text-foreground font-medium">
                      {t('guarantee.text3')}
                    </p>
                  </motion.div>
                </div>

                {/* Trust badges */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center gap-6 mt-10 flex-wrap"
                >
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>{t('guarantee.badge.secure')}</span>
                  </div>
                  <div className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>{t('guarantee.badge.instant')}</span>
                  </div>
                  <div className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>{t('guarantee.badge.support')}</span>
                  </div>
                </motion.div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
});

export default Ebooks;



