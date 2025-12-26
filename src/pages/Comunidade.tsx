"use client";

import { memo, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/syncronix/Header";
import { Footer } from "@/components/syncronix/Footer";
import { FallingPattern } from "@/components/ui/falling-pattern";
import { CommitsGrid } from "@/components/ui/commits-grid";
import HolographicCard from "@/components/ui/holographic-card";
import SkewCards from "@/components/ui/gradient-card-showcase";
import { 
  CheckCircle, 
  TrendingUp, 
  DollarSign, 
  Brain, 
  Users, 
  Target, 
  Zap,
  Shield,
  Clock,
  ArrowRight,
  Sparkles
} from "lucide-react";

const topics = [
  { name: "Crypto", icon: DollarSign },
  { name: "Finanças Descentralizadas", icon: TrendingUp },
  { name: "Multiplicação de Capital", icon: DollarSign },
  { name: "Renda Passiva em Dólar", icon: TrendingUp },
  { name: "IA", icon: Brain },
  { name: "Empreendedorismo", icon: Target },
  { name: "Negócios Digitais", icon: Zap },
  { name: "Gestão Inteligente", icon: Brain },
  { name: "Networking", icon: Users },
  { name: "Marketing", icon: Target },
  { name: "Branding", icon: Sparkles },
  { name: "Vendas", icon: DollarSign },
  { name: "Psicologia", icon: Brain },
  { name: "Metafísica", icon: Zap },
  { name: "Conhecimentos Ocultos", icon: Shield },
  { name: "Filosofia de Alta Performance", icon: Target },
  { name: "Desenvolvimento Pessoal", icon: TrendingUp },
  { name: "Mentalidade de Sucesso", icon: Brain },
];

const Comunidade = memo(function Comunidade() {
  const handlePurchase = useCallback(() => {
    console.log('[Comunidade]', 'purchase_click');
    window.open('https://pay.hotmart.com/K94845555H?checkoutMode=10', '_blank', 'noopener,noreferrer');
  }, []);

  const handleSupport = useCallback(() => {
    console.log('[Comunidade]', 'support_click');
    window.open('https://wa.me/555431963107', '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <FallingPattern 
            color="#ffffff"
            backgroundColor="transparent"
            duration={200}
            blurIntensity="0.3em"
            density={0.5}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex justify-center">
              <CommitsGrid text="COMUNIDADE" />
            </div>
            <p className="text-2xl md:text-3xl font-semibold text-primary mb-8">
              A comunidade onde você aprende, conecta e ainda ganha dinheiro indicando seus amigos
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Ao participar da Comunidade Syncronix, você terá acesso à verdade e ao conhecimento que transformam vidas. 
              Não se trata apenas de informação, mas de uma jornada de transformação que começa com uma decisão consciente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content & Benefits Section */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Principais Temas
            </h2>
            
            {/* Carousel container */}
            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  className="flex gap-6 animate-scroll"
                  style={{
                    width: 'max-content',
                    animation: 'scroll 60s linear infinite'
                  }}
                >
                  {/* Duplicate topics for seamless loop */}
                  {[...topics, ...topics].map((topic, index) => {
                    const IconComponent = topic.icon;
                    return (
                      <div
                        key={`${topic.name}-${index}`}
                        className="flex-shrink-0 w-64"
                      >
                        <HolographicCard
                          title={topic.name}
                          description="Conteúdo exclusivo"
                          icon={<IconComponent className="w-8 h-8 text-primary" />}
                          className="h-full"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Guarantee & Support Section */}
      <section className="py-24 bg-muted/30 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SkewCards 
            cards={[
              {
                title: "Garantia de 7 Dias",
                desc: "Você pode explorar a comunidade por 7 dias completos e, se sentir que o conteúdo não ressoou profundamente, devolvemos 100% do seu investimento. Sem perguntas, sem complicações. A transformação exige prática e reflexão.",
                gradientFrom: "#6366f1",
                gradientTo: "#8b5cf6"
              },
              {
                title: "Suporte 24h",
                desc: "Nossa equipe está disponível 24 horas por dia para tirar suas dúvidas e oferecer suporte. Você não está sozinho nesta jornada de transformação e crescimento pessoal.",
                gradientFrom: "#10b981",
                gradientTo: "#06b6d4"
              }
            ]}
          />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-background relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              A Decisão é Sua
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A realidade está esperando. O conhecimento está disponível. A transformação começa quando você decide agir.
            </p>
            <Button
              onClick={handlePurchase}
              className="btn-hero text-lg px-12 py-6 mt-8"
              size="lg"
            >
              ENTRAR PARA A COMUNIDADE
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Institutional Text Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            A SYNCRONIX valoriza a tríade que amplia a mente, alimenta a alma e nos ajuda a escapar da rotina: 
            <span className="text-primary font-semibold"> arte, conhecimento e entretenimento</span>. 
            Não somos apenas uma marca. Somos um sistema operacional para a vida humana.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
});

export default Comunidade;



