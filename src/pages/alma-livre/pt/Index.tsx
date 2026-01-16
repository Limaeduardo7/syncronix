import SEO from "@/components/quantum-key/SEO";
import LiveViewers from "@/components/quantum-key/LiveViewers";
import PurchaseNotifications from "@/components/quantum-key/PurchaseNotifications";
import { brazilianPurchaseNotifications } from "@/components/quantum-key/notificationsData";
import Footer from "@/components/alma-livre/Footer";
import GuaranteeSection from "@/components/alma-livre/GuaranteeSection";
import CountdownTimer from "@/components/alma-livre/CountdownTimer";
import WhatsAppButton from "@/components/alma-livre/WhatsAppButton";
import { Check, Heart, Star, Clock, Sparkles, Zap, ShieldCheck, CreditCard, Download, Gift, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const BookPreviewCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const previews = [
    {
      image: "/almalivre/IMG_7188-658x1024.jpg",
      alt: "Preview Página 1"
    },
    {
      image: "/almalivre/IMG_7191-662x1024.jpg",
      alt: "Preview Página 2"
    },
    {
      image: "/almalivre/IMG_7193-658x1024.jpg",
      alt: "Preview Página 3"
    },
    {
      image: "/almalivre/IMG_7195-659x1024.jpg",
      alt: "Preview Página 4"
    }
  ];

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Prévia do Conteúdo
        </h2>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Veja algumas páginas do ebook e descubra a abordagem prática e direta que torna conceitos complexos claros e aplicáveis.
        </p>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {previews.map((preview, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_40%] min-w-0"
                >
                  <div className="group relative rounded-3xl overflow-hidden border-2 border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
                    <img
                      src={preview.image}
                      alt={preview.alt}
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300 rounded-3xl"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-purple-500 hover:bg-purple-600 text-white flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-purple-500 hover:bg-purple-600 text-white flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Este ebook me ajudou a encontrar a liberdade emocional que eu tanto buscava. Finalmente entendi como me livrar dos padrões que me prendiam.",
      author: "Maria Silva",
      location: "São Paulo, SP"
    },
    {
      text: "Uma abordagem completamente diferente. Não é mais um livro de autoajuda, é um guia prático para transformação real.",
      author: "Ana Costa",
      location: "Rio de Janeiro, RJ"
    },
    {
      text: "A seção sobre abundância mudou completamente minha relação com o dinheiro e as oportunidades.",
      author: "Juliana Santos",
      location: "Belo Horizonte, MG"
    }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes pulseScale {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes animate-pulse-glow-purple {
          0%, 100% {
            box-shadow: 0 0 5px rgba(147, 51, 234, 0.5), 0 0 10px rgba(147, 51, 234, 0.5), 0 0 15px rgba(147, 51, 234, 0.5), 0 0 20px rgba(147, 51, 234, 0.5);
          }
          50% {
            box-shadow: 0 0 5px rgba(147, 51, 234, 0.8), 0 0 10px rgba(147, 51, 234, 0.8), 0 0 15px rgba(147, 51, 234, 0.8), 0 0 25px rgba(147, 51, 234, 0.8);
          }
        }

        @keyframes animate-pulse-glow-green {
          0%, 100% {
            box-shadow: 0 0 5px rgba(34, 197, 94, 0.5), 0 0 10px rgba(34, 197, 94, 0.5), 0 0 15px rgba(34, 197, 94, 0.5), 0 0 20px rgba(34, 197, 94, 0.5);
          }
          50% {
            box-shadow: 0 0 5px rgba(34, 197, 94, 0.8), 0 0 10px rgba(34, 197, 94, 0.8), 0 0 15px rgba(34, 197, 94, 0.8), 0 0 25px rgba(34, 197, 94, 0.8);
          }
        }

        @keyframes animate-pulse-glow-pink {
          0%, 100% {
            box-shadow: 0 0 5px rgba(236, 72, 153, 0.5), 0 0 10px rgba(236, 72, 153, 0.5), 0 0 15px rgba(236, 72, 153, 0.5), 0 0 20px rgba(236, 72, 153, 0.5);
          }
          50% {
            box-shadow: 0 0 5px rgba(236, 72, 153, 0.8), 0 0 10px rgba(236, 72, 153, 0.8), 0 0 15px rgba(236, 72, 153, 0.8), 0 0 25px rgba(236, 72, 153, 0.8);
          }
        }

        .animate-pulse-glow-purple {
          animation: animate-pulse-glow-purple 2s ease-in-out infinite;
        }

        .animate-pulse-glow-green {
          animation: animate-pulse-glow-green 2s ease-in-out infinite;
        }

        .animate-pulse-glow-pink {
          animation: animate-pulse-glow-pink 2s ease-in-out infinite;
        }

        @keyframes animate-fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floating {
          0% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.02);
          }
          100% {
            transform: translateY(0px) scale(1);
          }
        }

        .animate-floating {
          animation: floating 4s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: animate-fade-in 0.6s ease-out;
        }
      `}</style>
      
      <main className="min-h-screen overflow-x-hidden bg-gray-900 text-white relative">
      {/* Cosmic Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-b from-purple-900/20 via-indigo-900/10 to-gray-900"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.3),transparent_50%)]"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.2),transparent_50%)]"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,69,19,0.1),transparent_70%)]"></div>
      
      {/* Animated Stars */}
      <div className="fixed inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-300 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <SEO
        title="Alma Livre, Leve & Abundante | eBook - Liberdade Emocional"
        description="Guia prático para mulheres que buscam liberdade emocional, leveza interior e abundância em todas as áreas da vida. Transforme sua relação consigo mesma."
        keywords="liberdade emocional, abundância, mulher, transformação pessoal, ebook, autoconhecimento, leveza interior"
        ogImage="https://syncronix.co/alma-livre/mockup-alma-livre.png"
        canonical="https://syncronix.co/alma-livre-leve-abundante"
        lang="pt-BR"
      />

      <WhatsAppButton />

      <PurchaseNotifications
        purchaseText="acabou de adquirir o eBook!"
        justNowText="comprou agora"
        notifications={brazilianPurchaseNotifications}
      />

      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-gray-900/50 to-gray-900"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Countdown Timer */}
          <CountdownTimer />

          {/* Headline superior */}
          <div className="mb-8">
            <p className="text-lg md:text-xl text-white mb-2">
              Você não está aqui por acaso. Sua <span className="text-pink-400 font-semibold">alma</span> te trouxe até aqui.
            </p>
          </div>

          {/* Título principal */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black mb-8 text-white leading-tight tracking-wide">
            ALMA LIVRE,<br />
            LEVE &<br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">ABUNDANTE</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Um guia prático para a mulher que busca liberdade emocional, leveza interior e abundância em todas as áreas da vida.
          </p>

          {/* VSL Video Player */}
          <div className="mb-16 max-w-4xl mx-auto px-4">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20 border-4 border-purple-300/30">
              <iframe
                src="https://www.youtube.com/embed/OiCUbmQhbbo"
                title="VSL Alma Livre, Leve & Abundante"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Imagem do ebook */}
          <div className="mb-12 flex justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 blur-3xl rounded-full scale-150"></div>
            <img
              src="/almalivre/capa-png-768x512.png"
              alt="Ebook Alma Livre"
              className="relative w-full max-w-xl md:max-w-2xl lg:max-w-3xl object-contain drop-shadow-2xl rounded-3xl animate-floating"
            />
          </div>

          <div className="mb-12">
            <LiveViewers text="mulheres estão visualizando esta página agora" color="pink" />
          </div>

          {/* CTA primário */}
          <a
            href="#oferta"
            className="inline-flex items-center justify-center gap-3 px-16 py-6 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-gray-900 font-bold text-lg md:text-2xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-green-500/30 animate-pulse-glow-green"
          >
            <span>QUERO ACESSAR AGORA</span>
            <Sparkles className="w-7 h-7" />
          </a>
        </div>
      </section>

      {/* 2. Seção de Pergunta Diagnóstica */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
            Você sente que algo <span className="text-green-400">trava</span> sua vida emocional?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Como se existisse uma <span className="text-pink-400 font-semibold">barreira invisível</span> entre você e a mulher que você sabe que pode ser?
          </p>
        </div>
      </section>

      {/* 3. Apresentação do Produto */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Um guia prático para <span className="text-purple-400">mulheres</span>
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Este ebook foi criado especialmente para você que busca uma transformação profunda e duradoura. Não são apenas teorias, mas ferramentas práticas que você pode aplicar imediatamente.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Liberte-se de padrões limitantes",
                  "Encontre leveza em meio ao caos",
                  "Desperte sua abundância natural",
                  "Reconecte-se com sua essência"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-200">
                    <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#oferta"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-gray-900 font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-green-500/30 animate-pulse-glow-green"
              >
                <span>QUERO TRANSFORMAR MINHA VIDA</span>
                <Sparkles className="w-6 h-6" />
              </a>
            </div>

            {/* Imagem */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 blur-2xl rounded-full"></div>
                <img
                  src="/almalivre/book-alma-1024x683.png"
                  alt="Ebook Alma Livre, Leve & Abundante"
                  className="relative w-full max-w-xl md:max-w-2xl object-contain drop-shadow-2xl rounded-3xl animate-floating"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Seção "Você Não Está Aqui Por Acaso" */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-gray-900 to-purple-900/20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-20 h-20 mb-8 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <Heart className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
            Você não está aqui por acaso.
          </h2>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto">
            Existe uma força maior que te guiou até este momento. Sua alma reconhece que chegou a hora de se libertar das correntes invisíveis que te impedem de brilhar em toda sua magnitude.
          </p>

          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Este não é um encontro casual. É um chamado interior para despertar a mulher livre, leve e abundante que sempre habitou em você, esperando o momento certo para emergir.
          </p>

          {/* CTA Button */}
          <div className="mb-12">
            <a
              href="#oferta"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/30 animate-pulse-glow-purple"
            >
              <span>DESPERTAR MINHA ESSÊNCIA</span>
              <Heart className="w-6 h-6" />
            </a>
          </div>

          {/* Imagem central com efeito de energia */}
          <div className="mb-12 flex justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-500/30 to-yellow-400/30 blur-3xl rounded-full animate-pulse"></div>
            <img
              src="/almalivre/222-794x1024.png"
              alt="Ebook Alma Livre"
              className="relative w-full max-w-xl object-contain drop-shadow-2xl rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* 5. Sumário / Conteúdo do Ebook */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-rose-100/10 to-pink-50/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Imagem do Sumário */}
            <div className="flex justify-center">
              <img
                src="/almalivre/SUMARIO-768x1188.jpeg"
                alt="Sumário do Ebook Alma Livre"
                className="w-full max-w-md object-contain drop-shadow-2xl rounded-3xl"
              />
            </div>

            {/* Texto explicativo */}
            <div>
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-6">
                O que você vai sentir ao aplicar
              </h4>
              <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                Cada capítulo foi cuidadosamente estruturado para gerar uma transformação progressiva e profunda em sua vida.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Você experimentará uma sensação crescente de libertação, como se camadas de peso emocional fossem sendo removidas uma a uma, revelando a mulher radiante que sempre esteve dentro de você.
              </p>

              {/* CTA Button */}
              <div className="text-center md:text-left">
                <a
                  href="#oferta"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-pink-500/30 animate-pulse-glow-pink"
                >
                  <span>QUERO EXPERIMENTAR ESSA LIBERDADE</span>
                  <Zap className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Seção de Conteúdo Profundo (Pilares do Método) */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Os Pilares da Transformação
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-12 h-12" />,
                title: "Ciclos do Tempo",
                description: "Entenda como honrar os ciclos naturais da vida para encontrar seu ritmo perfeito de crescimento e descanso."
              },
              {
                icon: <Sparkles className="w-12 h-12" />,
                title: "Energia Feminina",
                description: "Desperte sua força interior através da reconexão com a sabedoria ancestral feminina que habita em você."
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Fogo Interior",
                description: "Acenda novamente a chama da paixão pela vida e transforme cada dia em uma celebração de sua existência."
              }
            ].map((pilar, index) => (
              <div key={index} className="relative p-8 rounded-2xl bg-gradient-to-b from-purple-900/30 to-indigo-900/20 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 text-center backdrop-blur-sm">
                <div className="w-20 h-20 mb-6 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white mx-auto">
                  {pilar.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{pilar.title}</h3>
                <p className="text-gray-300 leading-relaxed">{pilar.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <a
              href="#oferta"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-gray-900 font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-green-500/30 animate-pulse-glow-green"
            >
              <span>QUERO DOMINAR ESSES PILARES</span>
              <Star className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* 7. Prova Social / Avaliação */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
            ))}
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Mais de 3.000 mulheres já transformaram suas vidas
          </h3>

          {/* Carrossel de depoimentos */}
          <div className="bg-white/10 p-8 rounded-2xl border border-purple-300/20 backdrop-blur-sm mb-8">
            <p className="text-xl text-gray-200 mb-6 italic leading-relaxed">
              "{testimonials[currentTestimonial].text}"
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold">{testimonials[currentTestimonial].author[0]}</span>
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">{testimonials[currentTestimonial].author}</p>
                <p className="text-gray-400 text-sm">{testimonials[currentTestimonial].location}</p>
              </div>
            </div>
          </div>

          {/* Navegação dos depoimentos */}
          <div className="flex justify-center gap-2 mb-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial ? 'bg-purple-400' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="#oferta"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/30 animate-pulse-glow-purple"
            >
              <span>QUERO FAZER PARTE DESSAS TRANSFORMAÇÕES</span>
              <Heart className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* 8. Oferta e Preço */}
      <section id="oferta" className="relative py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-2xl bg-white text-gray-900 shadow-2xl shadow-purple-500/20 text-center overflow-hidden">
            {/* Borda animada */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-purple-400/20 blur-xl"></div>

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 border border-purple-300 rounded-full bg-purple-50">
                <span className="text-purple-600 font-bold text-sm tracking-wide">OFERTA ESPECIAL</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">
                Alma Livre, Leve & Abundante
              </h3>

              <div className="mb-8 flex justify-center">
                <img
                  src="/almalivre/aaaaaaaaa.png"
                  alt="Oferta Ebook Alma Livre"
                  className="w-full max-w-sm object-contain drop-shadow-2xl rounded-3xl"
                />
              </div>

              <div className="text-left mb-8 space-y-3 bg-purple-50 p-6 rounded-xl">
                {[
                  "Ebook completo em PDF",
                  "Exercícios práticos de transformação",
                  "Acesso vitalício ao conteúdo"
                ].map((benefit, index) => (
                  <p key={index} className="text-gray-700 flex items-center gap-3 text-base">
                    <Check className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    <span className="font-medium">{benefit}</span>
                  </p>
                ))}
              </div>

              <div className="mb-8 space-y-3">
                <p className="text-red-500 line-through text-2xl md:text-3xl font-black">
                  R$ 97,50
                </p>
                <p className="text-lg font-semibold text-gray-600">por apenas</p>
                <p className="text-5xl md:text-6xl font-black text-green-600">
                  R$ 39,90
                </p>
                <p className="text-lg font-semibold text-gray-600">acesso imediato</p>
              </div>

              <a
                href="https://pay.hotmart.com/Y101412022I?checkoutMode=10&_hi=eyJzaWQiOiIzNjg5NjVkMTZjMDM0NDJlOGMyNzUwODQyMjk5MjBjYiJ9.1767990696457"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full px-12 py-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl mb-8"
              >
                COMPRAR AGORA
              </a>

              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2 justify-center">
                  <ShieldCheck className="w-5 h-5 text-purple-500" />
                  <span>Compra segura</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <CreditCard className="w-5 h-5 text-purple-500" />
                  <span>Pagamento fácil</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Download className="w-5 h-5 text-purple-500" />
                  <span>Acesso imediato</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Clock className="w-5 h-5 text-purple-500" />
                  <span>Garantia de 7 dias</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prévia do Conteúdo */}
      <BookPreviewCarousel />

      {/* 9. Bônus Inclusos */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Bônus Exclusivos Inclusos
          </h2>

          <div className="space-y-8">
            {/* BÔNUS 01 */}
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white/10 p-8 rounded-2xl border border-purple-300/20 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-1 rounded-bl-xl font-bold text-sm">BÔNUS 01</div>
              <div className="w-32 h-32 flex-shrink-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center border border-purple-500/30 group-hover:border-purple-500/60 transition-colors">
                <Gift className="w-16 h-16 text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Ebook ALMA LIVRE – Guia do Poder Feminino (184 páginas)</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Uma visão prática da Lei da Atração aplicada no seu campo energético, para manifestar com mais clareza e intenção.
                </p>
              </div>
            </div>

            {/* BÔNUS 02 */}
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white/10 p-8 rounded-2xl border border-pink-300/20 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-pink-500 text-white px-4 py-1 rounded-bl-xl font-bold text-sm">BÔNUS 02</div>
              <div className="w-32 h-32 flex-shrink-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-pink-500/30 group-hover:border-pink-500/60 transition-colors">
                <Sparkles className="w-16 h-16 text-pink-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Glow Checklist</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Um mapa prático com áreas da vida, exercícios e uma playlist vibracional para te ajudar a manter sua energia alinhada e sua rotina leve todos os dias.
                </p>
              </div>
            </div>

            {/* SUPER BÔNUS */}
            <div className="mt-12 bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-8 md:p-12 rounded-3xl border-2 border-purple-400/30 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 blur-3xl rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-pink-500/20 blur-3xl rounded-full"></div>
              
              <h3 className="text-2xl md:text-3xl font-black text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Você também terá acesso a esses SUPER BÔNUS:
              </h3>

              <ul className="grid md:grid-cols-1 gap-6">
                {[
                  "Áudio de reprogramação mental para ouvir ao acordar e antes de dormir",
                  "Glow Checklist — um mapa prático com áreas da vida, exercícios e uma playlist vibracional para manter sua energia alinhada e sua rotina leve todos os dias",
                  "Acesso à Comunidade de Mulheres Livres, Leves & Abundantes"
                ].map((superBonus, index) => (
                  <li key={index} className="flex items-start gap-4 text-gray-200">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-purple-500/20">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg md:text-xl font-medium leading-relaxed">{superBonus}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <a
              href="#oferta"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-gray-900 font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-green-500/30 animate-pulse-glow-green"
            >
              <span>QUERO TODOS ESSES BÔNUS AGORA</span>
              <Gift className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* 10. Garantia */}
      <GuaranteeSection />

      {/* 11. Rodapé (Footer) */}
      <Footer />
    </main>
    </>
  );
};

export default Index;