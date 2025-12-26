"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/syncronix/Header";
import { Footer } from "@/components/syncronix/Footer";
import { CosmicPortal } from "@/components/ui/cosmic-portal";

interface Product {
  id: number;
  name: string;
  description: string;
  originalPrice: string;
  promotionalPrice: string;
  installments: string;
  link: string;
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
    link: "https://pay.hotmart.com/K94845555H?checkoutMode=10",
    coverImage: "/achavedopoder.webp",
  },
  {
    id: 2,
    name: "eBook – Efeito Camaleão – O Guia Definitivo da Persuasão e Influência Invisível",
    description: "Guia de persuasão e influência invisível",
    originalPrice: "R$ 87,50",
    promotionalPrice: "R$ 49,90 à vista",
    installments: "7× de R$ 7,98",
    link: "https://pay.hotmart.com/V95856841S?checkoutMode=10",
    coverImage: "/efeitocamaleão.png",
  },
  {
    id: 3,
    name: "eBook – Alma Livre, Leve e Abundante",
    description: "Bem‑estar emocional e abundância interior",
    originalPrice: "R$ 77,50",
    promotionalPrice: "R$ 39,90 à vista",
    installments: "5× de R$ 8,83",
    link: "https://pay.hotmart.com/Y101412022I?checkoutMode=10&bid=1756748303542",
    coverImage: "/almalivreleveeabundante.png",
  },
  {
    id: 4,
    name: "Guia Prático – Dominando Demônios Internos",
    description: "Transforme inseguranças em poder e clareza",
    originalPrice: "R$ 39,90",
    promotionalPrice: "R$ 19,90 à vista",
    installments: "2× de R$ 10,38",
    link: "https://pay.hotmart.com/S96001034V",
    coverImage: "/dominandodemoniosinternos.png",
  },
  {
    id: 5,
    name: "Manual Avançado do Salto Quântico – 10 Passos",
    description: "10 passos para reescrever sua realidade",
    originalPrice: "R$ 39,90",
    promotionalPrice: "R$ 19,90 à vista",
    installments: "2× de R$ 10,38",
    link: "https://pay.hotmart.com/P95880111J",
    coverImage: "/manualavançadodosaltoquantico.png",
  },
  {
    id: 6,
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
  const handlePurchase = (link: string, productName: string) => {
    console.log('[Ebooks]', 'purchase_click', { productName, link });
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
        {/* Background Cosmic Portal */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <CosmicPortal 
            size="xl"
            color="violet"
            speed={12}
            showParticles={true}
            showGlow={true}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Coleção de e‑books
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              A SYNCRONIX valoriza a tríade que amplia a mente, alimenta a alma e nos ajuda a escapar da rotina: <span className="text-primary font-semibold">arte, conhecimento e entretenimento</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="card-elegant group flex flex-col h-full"
              >
                {/* Product Image */}
                {product.coverImage && (
                  <div className="w-full aspect-[3/4] mb-6 flex items-center justify-center overflow-hidden rounded-xl">
                    <img 
                      src={product.coverImage} 
                      alt={product.name}
                      className="w-full h-full object-cover rounded-xl"
                      style={{ 
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                )}

                {/* Product Info */}
                <div className="flex-1 flex flex-col space-y-4">
                  <h3 className="text-xl font-semibold text-foreground leading-tight">
                    {product.name}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    {product.description}
                  </p>

                  {/* Pricing */}
                  <div className="space-y-2 pt-4 border-t border-border/50">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                      <span className="text-2xl font-bold text-primary">
                        {product.promotionalPrice}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      ou {product.installments}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={() => handlePurchase(product.link, product.name)}
                    className="btn-hero w-full mt-4"
                    aria-label={`Comprar ${product.name}`}
                  >
                    COMPRAR AGORA
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 bg-muted/30 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Garantia de 7 Dias
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Você tem <span className="text-primary font-semibold">7 dias completos</span> para explorar o conteúdo e experimentar sua transformação.
              </p>
              <p>
                Se, ao final desse período, você não sentir que o livro tocou profundamente sua vida, devolvemos 100% do seu investimento. Sem perguntas, sem complicações.
              </p>
              <p className="text-foreground font-medium">
                A transformação exige prática e tempo. Por isso, incentivamos que você dedique tempo à leitura, reflexão e prática antes de solicitar o reembolso.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
});

export default Ebooks;



