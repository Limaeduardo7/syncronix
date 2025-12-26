"use client";

import { memo, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/syncronix/Header";
import { Footer } from "@/components/syncronix/Footer";
import { FallingPattern } from "@/components/ui/falling-pattern";
import { ParticleTextEffect } from "@/components/ui/particle-text-effect";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { EvervaultCard } from "@/components/ui/evervault-card";
import DisplayCards from "@/components/ui/display-cards";
import { FeatureCard } from "@/components/ui/grid-feature-cards";
import { GridBackground } from "@/components/ui/glowing-card";
import { 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Star, 
  Zap,
  Sparkles,
  Target,
  ArrowRight,
  ShoppingBag,
  BookOpen,
  Infinity
} from "lucide-react";

const stats = [
  { value: "95%", label: "Aprovação dos Clientes", icon: Star },
  { value: "12k+", label: "Produtos Vendidos", icon: ShoppingBag },
  { value: "111+", label: "Países", icon: Target },
  { value: "14k+", label: "Seguidores", icon: Users },
];

const collections = [
  {
    name: "Street Winter",
    description: "Linha de jaqueta windbreaker, calça jogger e jaqueta puffer. Todas impermeáveis, com tecidos importados e design que combina funcionalidade e elegância.",
    features: ["Impermeável", "Tecidos Importados", "Design Funcional"],
    icon: TrendingUp,
  },
  {
    name: "Street Dragon",
    description: "Coleção inspirada no dragão como guardião ancestral, símbolo de poder e sabedoria. Incentiva a despertar o 'dragão interior'.",
    features: ["Símbolo de Poder", "Estética Ancestral", "Design Exclusivo"],
    icon: Sparkles,
  },
  {
    name: "Dark Smoke Collab",
    description: "Edição limitada com estampa neon e estética urbana. Para quem busca exclusividade e destaque.",
    features: ["Edição Limitada", "Estampa Neon", "Estética Urbana"],
    icon: Zap,
  },
];

const Sobre = memo(function Sobre() {
  const handleEbookClick = useCallback(() => {
    window.open('https://pay.hotmart.com/K94845555H?checkoutMode=10', '_blank', 'noopener,noreferrer');
  }, []);

  const handleComunidadeClick = useCallback(() => {
    window.location.href = '/comunidade';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-24">
        {/* DottedSurface Background */}
        <div className="absolute inset-0 opacity-30">
          <DottedSurface 
            particleSize={8}
            animationSpeed={0.08}
            particleColor="#a900ff"
            className="w-full h-full"
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
            
            {/* Particle Text Effect for Syncronix Original Lifestyle */}
            <div className="mb-8">
              <ParticleTextEffect 
                words={["SYNCRONIX", "ORIGINAL", "LIFESTYLE"]}
                width={800}
                height={150}
                fontSize={50}
                autoAdvance={true}
                intervalMs={2500}
                className="mx-auto"
              />
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A Syncronix combina a elegância do esportivo com o poder da ambição, 
              promovendo um estilo de vida de alta performance onde <span className="text-primary font-semibold">espírito, mente e corpo se alinham</span> para viver em alta frequência.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Missão e Propósito
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                A Syncronix vai <span className="text-primary font-semibold">além da moda</span>. 
                Nossa missão é trazer conhecimentos que fortaleçam o autodesenvolvimento e ampliem a consciência, 
                misturando metafísica e física quântica para criar uma experiência transformadora.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="relative h-80"
                >
                  <EvervaultCard text="" className="w-full h-full" />
                  <div className="absolute inset-0 flex flex-col justify-start p-4 text-left pointer-events-none z-20">
                    <h3 className="text-3xl font-bold text-white mb-4 bg-black/60 backdrop-blur-sm p-6 rounded leading-tight">
                      Transcender o Comum
                    </h3>
                    <p className="text-xl text-white bg-black/40 backdrop-blur-sm p-6 rounded leading-relaxed flex-1 flex items-center">
                      Oferecer uma visão que vai além do convencional, conectando o físico ao metafísico.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative h-80"
                >
                  <EvervaultCard text="" className="w-full h-full" />
                  <div className="absolute inset-0 flex flex-col justify-start p-4 text-left pointer-events-none z-20">
                    <h3 className="text-3xl font-bold text-white mb-4 bg-black/60 backdrop-blur-sm p-6 rounded leading-tight">
                      Conectar Visionários
                    </h3>
                    <p className="text-xl text-white bg-black/40 backdrop-blur-sm p-6 rounded leading-relaxed flex-1 flex items-center">
                      Unir pessoas que buscam excelência e estão prontas para uma vida extraordinária.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative h-80"
                >
                  <EvervaultCard text="" className="w-full h-full" />
                  <div className="absolute inset-0 flex flex-col justify-start p-4 text-left pointer-events-none z-20">
                    <h3 className="text-3xl font-bold text-white mb-4 bg-black/60 backdrop-blur-sm p-6 rounded leading-tight">
                      Produtos Exclusivos
                    </h3>
                    <p className="text-xl text-white bg-black/40 backdrop-blur-sm p-6 rounded leading-relaxed flex-1 flex items-center">
                      Criar peças que complementam a personalidade e amplificam o poder pessoal.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative h-80"
                >
                  <EvervaultCard text="" className="w-full h-full" />
                  <div className="absolute inset-0 flex flex-col justify-start p-4 text-left pointer-events-none z-20">
                    <h3 className="text-3xl font-bold text-white mb-4 bg-black/60 backdrop-blur-sm p-6 rounded leading-tight">
                      Despertar Potencial
                    </h3>
                    <p className="text-xl text-white bg-black/40 backdrop-blur-sm p-6 rounded leading-relaxed flex-1 flex items-center">
                      Oferecer conteúdos que ativam o potencial criador interior de cada indivíduo.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-muted/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Números
            </h2>
            <p className="text-lg text-muted-foreground">
              Resultados que refletem nossa dedicação à excelência
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              
              const displayCardData = {
                icon: <IconComponent className="size-4 text-primary" />,
                title: stat.value,
                description: stat.label,
                date: "",
                iconClassName: "text-primary",
                titleClassName: "text-primary",
                className: "[grid-area:stack] hover:-translate-y-2 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0"
              };

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex justify-center"
                >
                  <DisplayCards cards={[displayCardData]} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Produtos e Coleções
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nossos produtos destacam-se por originalidade, durabilidade, excelência, exclusividade e elegância. 
              Cada peça complementa a personalidade do usuário.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2 md:grid-cols-3"
          >
            {collections.map((collection) => {
              const featureData = {
                title: collection.name,
                icon: collection.icon,
                description: `${collection.description} • ${collection.features.join(" • ")}`
              };
              
              return (
                <FeatureCard 
                  key={collection.name} 
                  feature={featureData}
                  className="min-h-[200px]"
                />
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-muted/30 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <GridBackground
              title="Manifestando uma Realidade Extraordinária"
              description="A sincronicidade é apresentada como um mecanismo que organiza a realidade. Quando seguimos nosso entusiasmo e estamos presentes, atraímos sincronicidades positivas que alinham nossos caminhos com nosso propósito mais profundo. Agir sem expectativas rígidas e confiar no processo transforma obstáculos em oportunidades e acelera nossa jornada em direção à vida extraordinária que buscamos."
              showAvailability={false}
              className="mb-12"
            />

            {/* Symbolism inside the same card */}
            <div className="mt-16 p-8 md:p-12 card-elegant">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Simbolismo da Marca
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Infinity className="w-8 h-8 text-primary" />
                    <h4 className="text-xl font-semibold text-foreground">
                      Hexagrama Unicursal
                    </h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    O símbolo da marca remete ao hexagrama unicursal, representando a harmonia entre forças opostas 
                    e o domínio da consciência sobre a realidade. É um símbolo de integração e poder.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-8 h-8 text-primary" />
                    <h4 className="text-xl font-semibold text-foreground">
                      Gematria 33
                    </h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    A gematria 33 do nome Syncronix conecta à "Sephirah Daath" da Kabbalah, associada à sabedoria oculta 
                    e ao conhecimento transcendente. O número 33 representa a evolução da consciência.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 bg-background relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <GridBackground
              title="Comunidade Digital Syncronix"
              description="A Comunidade Digital Syncronix é um espaço onde a jornada de autodesenvolvimento se torna uma alavanca para o poder supremo e a criação de uma realidade transformadora. Reunimos pessoas visionárias que buscam excelência, oferecemos conteúdos exclusivos que ativam o potencial criador, e promovemos networking que impulsiona autoconfiança e excelência. A comunidade junta o ambiente físico e digital para conectar mentes prontas para transcender o comum."
              showAvailability={false}
              className="mb-8"
            />
            
            <div className="text-center">
              <Button
                onClick={handleComunidadeClick}
                className="btn-hero text-lg px-12 py-6"
                size="lg"
              >
                CONHEÇA A COMUNIDADE
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* E-book Section */}
      <section className="py-24 bg-muted/30 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <GridBackground
              title="E-book 'A Chave do Poder'"
              description="Apresentado como um guia completo para transformar vida, riqueza, saúde e relacionamentos. O e-book combina princípios de electromagnetismo, reprogramação mental e estudos de diversas culturas para despertar perseverança, otimismo e ação. Integrando conceitos de electromagnetismo, reprogramação mental e estudos metafísicos, este guia promete levar você a um novo patamar de consciência e materializar seus sonhos."
              showAvailability={false}
              className="mb-8"
            />

            {/* Benefits section */}
            <div className="card-elegant p-8 md:p-12 mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Benefícios Principais:
              </h3>
              <ul className="space-y-4 max-w-2xl mx-auto">
                {[
                  "Desenvolver perseverança e resiliência",
                  "Cultivar otimismo e mentalidade positiva",
                  "Ação alinhada com propósito",
                  "Materializar sonhos através da consciência elevada",
                  "Transformar todas as áreas da vida"
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-center">
              <Button
                onClick={handleEbookClick}
                className="btn-hero text-lg px-12 py-6"
                size="lg"
              >
                ADQUIRIR O E-BOOK
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
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
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ative Seu Poder Interior
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Para realizar sonhos, é preciso seguir o entusiasmo, prestar atenção às sincronicidades e persistir 
              mesmo diante de desafios, criando uma realidade alinhada com sua essência verdadeira.
            </p>
            <p className="text-lg text-foreground font-medium">
              Explore a marca, participe da comunidade e descubra como a Syncronix pode ser sua alavanca para uma vida extraordinária.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button
                onClick={() => window.location.href = '/shop'}
                className="btn-hero"
                variant="default"
              >
                VER PRODUTOS
              </Button>
              <Button
                onClick={() => window.location.href = '/ebooks'}
                className="btn-hero"
                variant="default"
              >
                VER E-BOOKS
              </Button>
              <Button
                onClick={handleComunidadeClick}
                className="btn-hero"
                variant="default"
              >
                ENTRAR NA COMUNIDADE
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
});

export default Sobre;




