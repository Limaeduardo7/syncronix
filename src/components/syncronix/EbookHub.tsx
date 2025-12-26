"use client";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { EbookMock3D } from "./EbookMock3D";
import { Pillars } from "./Pillars";
import { FallingPattern } from "@/components/ui/falling-pattern";

export function EbookHub() {
  const navigate = useNavigate();
  
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
            Construa Sua Realidade.
          </h2>
          <p className="text-subtitle max-w-2xl mx-auto">
            Desbloqueie o poder que habita em você com a CHAVE MESTRE.
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
              Este não é mais um livro de autoajuda. É um manual de engenharia humana. 
              Um sistema comprovado para reescrever sua programação mental e alinhar 
              suas ações com a frequência do poder.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              Desenvolvido através de anos de estudo sobre neurociência, psicologia 
              comportamental e os padrões de sucesso das elites globais.
            </p>
            
            <Button 
              onClick={handleCTAClick}
              className="btn-hero"
              aria-label="Acessar conhecimento SYNCRONIX"
            >
              ACESSAR O CONHECIMENTO
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
            Domine os Pilares da Sua Existência:
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
            SYNCRONIX não é apenas conhecimento. É um ecossistema completo de 
            transformação. Além do ebook fundamental, você terá acesso a:
          </p>
          
          <p className="text-lg text-foreground leading-relaxed">
            Workshops exclusivos, comunidade de alto nível, mentoria direta, 
            ferramentas de tracking de progresso e updates constantes conforme 
            evoluímos nossos métodos.
          </p>
          
          <p className="text-lg font-medium text-primary">
            Quando você entra na SYNCRONIX, você não compra um produto. 
            Você ganha acesso a uma realidade superior.
          </p>
        </motion.div>
      </div>
    </section>
  );
}