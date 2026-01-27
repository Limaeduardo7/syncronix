import SEO from "@/components/quantum-key/SEO";
import LiveViewers from "@/components/quantum-key/LiveViewers";
import PurchaseNotifications from "@/components/quantum-key/PurchaseNotifications";
import { brazilianPurchaseNotifications } from "@/components/quantum-key/notificationsData";
import { Check, Brain, Target, Zap, ChevronLeft, ChevronRight, ShieldCheck, CreditCard, Download, Clock } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";
import CountdownTimer from "@/components/regra-da-vida/CountdownTimer";
import GuaranteeSection from "@/components/regra-da-vida/GuaranteeSection";
import Footer from "@/components/regra-da-vida/Footer";
import WhatsAppButton from "@/components/regra-da-vida/pt/WhatsAppButton";

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
      image: "/regra-da-vida/introdução-min.png",
      alt: "Introdução - A Regra da Vida"
    },
    {
      image: "/regra-da-vida/A REGRA DA VIDA(2).png",
      alt: "A Regra da Vida - Conceito Principal"
    },
    {
      image: "/regra-da-vida/pt1-min.png",
      alt: "Parte 1 - A Regra da Vida"
    },
    {
      image: "/regra-da-vida/pt2 (1).png",
      alt: "Parte 2 - A Regra da Vida"
    },
    {
      image: "/regra-da-vida/pt2.png",
      alt: "Parte 2 Continuação - A Regra da Vida"
    },
    {
      image: "/regra-da-vida/pt3.png",
      alt: "Parte 3 - A Regra da Vida"
    }
  ];

  return (
    <section className="relative py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Prévia do Conteúdo
        </h2>
        <p className="text-xl text-gray-700 text-center mb-16 max-w-3xl mx-auto">
          Veja algumas páginas do livro e descubra a abordagem visual e direta que torna conceitos complexos claros e aplicáveis
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
                  <div className="group relative rounded-2xl overflow-hidden border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-200/50">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-cyan-50/0 group-hover:from-blue-50/30 group-hover:to-cyan-50/30 transition-all duration-300"></div>
                    <img
                      src={preview.image}
                      alt={preview.alt}
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 z-10"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 z-10"
            aria-label="Próximo slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 italic">
            Conteúdo visual, direto e baseado em como a mente realmente funciona
          </p>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-gray-900 relative">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      {/* Gradient Orbs */}
      <div className="fixed top-0 -left-40 w-96 h-96 bg-gradient-to-r from-cyan-200/40 to-blue-200/40 rounded-full blur-[120px] animate-pulse"></div>
      <div className="fixed bottom-0 -right-40 w-96 h-96 bg-gradient-to-r from-blue-200/40 to-indigo-200/40 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-100/30 to-blue-100/30 rounded-full blur-[150px]"></div>

      <SEO
        title="A Regra da Vida | eBook - Clareza Mental Aplicada"
        description="Manual visual de engenharia mental que revela o que realmente controla suas decisões, hábitos e resultados. Deixe de tentar mais e entenda o sistema."
        keywords="ebook, mudança de hábitos, identidade, comportamento, mente humana, transformação, clareza mental, desenvolvimento pessoal, engenharia mental"
        ogImage="https://syncronix.co/regra-da-vida/MOCKUP%20PRESENTS%20PORTUGUES.png"
        canonical="https://syncronix.co/ebook-a-regra-da-vida"
        lang="pt-BR"
      />

      <WhatsAppButton />

      <PurchaseNotifications
        purchaseText="acabou de adquirir o eBook!"
        justNowText="comprou agora"
        notifications={brazilianPurchaseNotifications}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white to-white"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Countdown Timer */}
          <CountdownTimer />

          {/* Offer Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 border border-blue-300 rounded-full bg-blue-50">
            <span className="text-blue-500 font-bold text-sm tracking-wide">OFERTA ESPECIAL</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-gray-900 leading-tight">
            A REGRA DA VIDA
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed font-medium">
            Sua mente tem regras. Entenda-as ou seja escravo delas.
          </p>

          <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            A Regra da Vida é um manual visual de engenharia mental que revela o que realmente controla suas decisões, hábitos e resultados.
          </p>

          {/* VSL Video Player */}
          <div className="mb-16 max-w-4xl mx-auto px-4">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20 border-4 border-white">
              <iframe
                src="https://www.youtube.com/embed/IFVVj7UWR8s"
                title="VSL A Regra da Vida"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Mockup do eBook */}
          <div className="mb-12 flex justify-center">
            <img
              src="/regra-da-vida/mockup 3(2) resize.png"
              alt="Mockup do eBook A Regra da Vida"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain drop-shadow-2xl rounded-3xl animate-float"
            />
          </div>

          <div className="mb-12">
            <LiveViewers text="pessoas estão visualizando esta página agora" color="blue" />
          </div>

          <a
            href="#oferta"
            className="inline-flex items-center justify-center gap-3 px-16 py-6 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg md:text-2xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl animate-pulse-glow-blue"
          >
            <span>QUERO ACESSAR AGORA</span>
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Book Preview Section */}
      <BookPreviewCarousel />

      {/* Por que "Tentar Mais" Falha */}
      <section className="relative py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* GIF */}
          <div className="mb-12 flex justify-center">
            <img
              src="/regra-da-vida/c32d93b8fd84f270d94b838d5e6ebbe4.gif"
              alt="Animação"
              className="w-full max-w-2xl object-contain rounded-2xl"
            />
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-center mb-6 text-gray-900">
            Por que se esforçar mais não resolve
          </h2>
          <p className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto leading-relaxed">
            Força de vontade funciona como uma <span className="text-red-600 font-bold">bateria</span>, ela acaba. Já a <span className="text-blue-500 font-bold">identidade</span> funciona como um <span className="text-blue-500 font-bold">piloto automático</span>, sempre ligado, guiando decisões e comportamentos sem pedir esforço.
          </p>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            Quando você tenta mudar só na força, o <span className="text-blue-500 font-bold">piloto automático</span> corrige o caminho e te leva de volta ao padrão antigo. Não é fraqueza nem falta de disciplina. É apenas o cérebro mantendo o que ele considera normal.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative p-8 rounded-2xl bg-blue-50/50 border border-blue-100 text-center">
              <div className="w-16 h-16 mb-6 rounded-xl bg-blue-100 flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">O Hábito</h3>
              <p className="text-gray-600 leading-relaxed">
                Padrões repetitivos que sua mente criou para economizar energia e manter você onde está.
              </p>
            </div>

            <div className="relative p-8 rounded-2xl bg-blue-50/50 border border-blue-100 text-center">
              <div className="w-16 h-16 mb-6 rounded-xl bg-blue-100 flex items-center justify-center mx-auto">
                <Brain className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">O Piloto Automático</h3>
              <p className="text-gray-600 leading-relaxed">
                95% das suas ações são automáticas. Se você não entende a lógica delas, você é apenas um passageiro.
              </p>
            </div>

            <div className="relative p-8 rounded-2xl bg-blue-50/50 border border-blue-100 text-center">
              <div className="w-16 h-16 mb-6 rounded-xl bg-blue-100 flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">A Repetição</h3>
              <p className="text-gray-600 leading-relaxed">
                O loop invisível que te faz cometer os mesmos erros mesmo sabendo o que deveria ser feito.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <a
              href="#oferta"
              className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-blue-500 hover:bg-blue-600 text-white font-bold text-xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl animate-pulse-glow-blue"
            >
              <span>QUERO ENTENDER A REGRA</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* O jogo muda quando você entende a regra */}
      <section className="relative py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-6 text-gray-900">
            O jogo muda quando você entende a regra
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Saia da tentativa e erro e entre no campo da estratégia pura.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* O JEITO COMUM */}
            <div className="relative p-8 rounded-2xl bg-white border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-red-500 font-bold text-xl">✗</span>
                </div>
                <h3 className="text-xl font-bold text-red-600">O JEITO COMUM</h3>
              </div>

              <h4 className="text-2xl font-bold text-gray-900 mb-6">Tentar mudar na força bruta</h4>

              <ul className="space-y-4">
                {[
                  "Depende de motivação passageira",
                  "Gera ansiedade e estresse constante",
                  "Termina em frustração e culpa",
                  "Resultados que somem em semanas"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-600">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* A REGRA DA VIDA */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-400 shadow-xl">
              <div className="absolute top-4 right-4 px-4 py-1 bg-green-600 text-white text-xs font-bold rounded-full">
                RECOMENDADO
              </div>

              <div className="flex items-center gap-3 mb-6 mt-4">
                <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-600">A REGRA DA VIDA</h3>
              </div>

              <h4 className="text-2xl font-bold text-gray-900 mb-6">Entender o Sistema Interno</h4>

              <ul className="space-y-4">
                {[
                  "Usa a lógica biológica da mente",
                  "Processo leve e sustentável",
                  "Autocontrole que se torna natural",
                  "Mudança baseada em estrutura, não força"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <a
              href="#oferta"
              className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-blue-500 hover:bg-blue-600 text-white font-bold text-xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl animate-pulse-glow-blue"
            >
              <span>QUERO MUDAR DE VERDADE</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* O que torna este manual diferente */}
      <section className="relative py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <img
              src="/regra-da-vida/MOCKUP PRESENTS PORTUGUES.png"
              alt="A Regra da Vida - eBook"
              className="w-full max-w-sm object-contain drop-shadow-2xl rounded-3xl animate-float"
            />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 text-gray-900">
            O que torna este manual diferente
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: "Manual Visual",
                description: "Esqueça blocos infinitos de texto. Diagramas claros e mapas mentais que seu cérebro entende na hora."
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Linguagem Direta",
                description: "Sem enrolação acadêmica. Fatos, lógica e aplicação estratégica para adultos que valorizam o tempo."
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Consumo Eficiente",
                description: "Projetado para ser lido e aplicado rapidamente. O conhecimento que você precisa, sem o excesso."
              },
              {
                icon: <Target className="w-10 h-10" />,
                title: "Ferramentas Reais",
                description: "Vem com modelos mentais que você pode começar a usar imediatamente após a primeira página."
              }
            ].map((item, index) => (
              <div key={index} className="relative p-6 rounded-xl bg-blue-50/50 border border-blue-100 hover:border-blue-400 hover:bg-blue-50/30 transition-all duration-300 text-center shadow-sm hover:shadow-md">
                <div className="w-14 h-14 mb-6 rounded-xl bg-blue-100 flex items-center justify-center text-blue-500 mx-auto transform transition-transform group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformação Section */}
      <section className="relative py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            A transformação que você vai experimentar
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Antes */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200">
              <div className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white text-sm font-bold rounded-full">
                ANTES
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-4">Sem clareza mental</h3>
              <ul className="space-y-4">
                {[
                  "Repete os mesmos erros constantemente",
                  "Luta contra si mesmo sem entender o porquê",
                  "Mudanças temporárias que não duram",
                  "Força de vontade que se esgota rapidamente",
                  "Sensação de estar preso nos mesmos padrões"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="text-red-500 text-xl font-bold">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Depois */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-green-50 to-cyan-50 border-2 border-green-300 shadow-xl">
              <div className="absolute top-4 right-4 px-4 py-2 bg-green-600 text-white text-sm font-bold rounded-full">
                DEPOIS
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-4">Com clareza mental</h3>
              <ul className="space-y-4">
                {[
                  "Compreende os padrões e sabe como mudá-los",
                  "Alinha identidade com os resultados desejados",
                  "Mudanças profundas e permanentes",
                  "Sistema mental que trabalha a seu favor",
                  "Liberdade para criar a vida que quer viver"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="text-green-600 text-xl font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <a
              href="#oferta"
              className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-blue-500 hover:bg-blue-600 text-white font-bold text-xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl animate-pulse-glow-blue"
            >
              <span>SIM, QUERO TER CLAREZA MENTAL</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Citação Impactante */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 mb-8 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
            <Zap className="w-8 h-8 text-blue-500" />
          </div>

          <h2 className="text-3xl md:text-5xl font-black mb-8 text-gray-900 leading-tight">
            Este material não é motivacional. Ele não vai te prometer milhões nem a felicidade eterna. Ele explica como a engrenagem funciona.
          </h2>

          <p className="text-xl text-gray-500 font-medium tracking-wider">
            A REGRA DA VIDA É SOBRE ESTRUTURA, NÃO INSPIRAÇÃO.
          </p>
        </div>
      </section>

      {/* Para quem é / não é este livro */}
      <section className="relative py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Este manual é para você se */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl font-black text-green-600">01</span>
                <h3 className="text-2xl font-bold text-gray-900">Este manual é para você se:</h3>
              </div>

              <ul className="space-y-4">
                {[
                  "Busca clareza lógica e cansou de métodos subjetivos ou místicos.",
                  "Sente que está sempre no 'quase' e quer entender o que trava seus avanços.",
                  "Valoriza objetividade e quer ferramentas que funcionam na prática."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4 text-gray-700">
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Não perca seu tempo se */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl font-black text-red-600">02</span>
                <h3 className="text-2xl font-bold text-gray-400">Não perca seu tempo se:</h3>
              </div>

              <ul className="space-y-4">
                {[
                  "Você está procurando um 'atalho mágico' ou pílula para o sucesso rápido.",
                  "Você quer apenas uma dose de motivação barulhenta para se sentir bem por 10 minutos.",
                  "Você não está disposto a ler fatos racionais sobre sua própria mente."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4 text-gray-400">
                    <span className="w-6 h-6 flex-shrink-0 mt-1 text-xl text-red-500">✗</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Onde a mudança real acontece */}
      <section className="relative py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* GIF */}
          <div className="mb-12 flex justify-center">
            <img
              src="/regra-da-vida/cb6f7c3462fe3af6071f4715b45dd818.gif"
              alt="Animação"
              className="w-full max-w-2xl object-contain rounded-2xl"
            />
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-center mb-6 text-gray-900">
            Onde a mudança real acontece
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Os pilares que compõem o manual e como eles vão reorganizar sua forma de pensar.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-blue-100 hover:border-blue-400 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">O Algoritmo da Decisão Automática</h3>
              <p className="text-gray-600 leading-relaxed">
                Descubra como seu cérebro escolhe o caminho de menor resistência em milésimos de segundo e aprenda a 'inserir' novas variáveis nesse cálculo para mudar suas escolhas sem esforço.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-blue-100 hover:border-blue-400 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">O Fim da Força de Vontade</h3>
              <p className="text-gray-600 leading-relaxed">
                Entenda por que a disciplina falha e como criar um ambiente (mental e físico) onde o comportamento correto é a escolha mais fácil.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-blue-100 hover:border-blue-400 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Identidade Reativa</h3>
              <p className="text-gray-600 leading-relaxed">
                Como desvincular quem você é do que você faz, permitindo que falhas sejam dados de ajuste em vez de feridas no ego.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-blue-100 hover:border-blue-400 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Arquitetura de Novos Hábitos</h3>
              <p className="text-gray-600 leading-relaxed">
                O protocolo exato para 'instalar' rotinas produtivas. Menos atrito, mais constância. Aprenda a usar a neuroplasticidade a seu favor, não contra.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <a
              href="#oferta"
              className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-blue-500 hover:bg-blue-600 text-white font-bold text-xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl animate-pulse-glow-blue"
            >
              <span>QUERO ACESSAR AGORA</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="oferta" className="relative py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/30 via-transparent to-transparent"></div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-1 gap-12 items-center max-w-3xl mx-auto">
            {/* Pricing Card */}
            <div className="relative p-8 md:p-12 rounded-2xl bg-white border-2 border-blue-300 shadow-2xl shadow-blue-200/50 text-center overflow-hidden">
              {/* Animated Border Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-cyan-100/30 to-blue-100/30 opacity-50 blur-xl"></div>

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 border border-blue-300 rounded-full bg-blue-50">
                  <span className="text-blue-500 font-bold text-sm tracking-wide">OFERTA ESPECIAL</span>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">
                  A Regra da Vida
                </h3>

                {/* Mockup do eBook */}
                <div className="mb-8 flex justify-center">
                  <img
                    src="/regra-da-vida/mockup 3(2) resize.png"
                    alt="Mockup do eBook A Regra da Vida"
                    className="w-full max-w-sm object-contain drop-shadow-2xl rounded-3xl animate-float"
                  />
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">5.0</span>
                  <span className="text-sm text-gray-500">(2.847 avaliações)</span>
                </div>

                {/* Subtitle */}
                <h4 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
                  Torne-se o dono do jogo.
                </h4>
                <p className="text-xl md:text-2xl font-semibold mb-8 text-gray-800">
                  Seja quem <span className="text-blue-500 font-black">dita a regra</span>.
                </p>

                {/* Benefits */}
                <div className="text-left mb-8 space-y-3 bg-blue-50/50 p-6 rounded-xl">
                  {[
                    "Manual Estratégico em PDF",
                    "Diagramas de Fluxo Mental",
                    "Acesso Vitalício + Atualizações"
                  ].map((benefit, index) => (
                    <p key={index} className="text-gray-700 flex items-center gap-3 text-base">
                      <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span className="font-medium">{benefit}</span>
                    </p>
                  ))}
                </div>

                {/* Pricing */}
                <div className="mb-8 space-y-3">
                  <p className="text-red-500 line-through text-2xl md:text-3xl font-black">
                    R$ 97,00
                  </p>
                  <p className="text-lg font-semibold text-gray-600">por apenas</p>
                  <p className="text-5xl md:text-6xl font-black text-blue-500">
                    R$ 47,00
                  </p>
                  <p className="text-lg font-semibold text-gray-600">à vista</p>
                  <p className="text-base font-medium text-gray-500 mt-2">ou 6x de R$ 8,82</p>
                </div>

                {/* CTA */}
                <a
                  href="https://pay.hotmart.com/E103440064H?checkoutMode=10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full px-12 py-6 bg-blue-500 hover:bg-blue-600 text-white font-bold text-xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl animate-pulse-glow-blue mb-8"
                >
                  COMPRAR AGORA
                </a>

                {/* Trust badges */}
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2 justify-center">
                    <ShieldCheck className="w-5 h-5 text-blue-500" />
                    <span>Compra segura</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <CreditCard className="w-5 h-5 text-blue-500" />
                    <span>Pagamento fácil</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <Download className="w-5 h-5 text-blue-500" />
                    <span>Acesso imediato</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <span>Garantia de 7 dias</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-gray-900 leading-tight">
            Sua mente tem regras. Entenda-as ou seja escravo delas.
          </h2>

          <a
            href="https://pay.hotmart.com/E103440064H?checkoutMode=10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-16 py-6 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg md:text-2xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl animate-pulse-glow-blue"
          >
            <span>COMEÇAR AGORA</span>
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Guarantee Section */}
      <GuaranteeSection />

      {/* FAQ Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Perguntas Frequentes
          </h2>

          <div className="space-y-6">
            {[
              {
                question: "Como e quando recebo o livro?",
                answer: "O acesso é imediato via e-mail. Assim que o pagamento for confirmado, você recebe um link exclusivo da Hotmart para baixar o manual completo e todos os extras."
              },
              {
                question: "O conteúdo é focado em teoria ou prática?",
                answer: "O manual é 80% prático. Usamos a teoria apenas para fundamentar a lógica das ferramentas que você vai aplicar no seu dia a dia."
              },
              {
                question: "Posso ler no Kindle ou celular?",
                answer: "Sim. O PDF foi otimizado para leitura em dispositivos móveis, tablets e computadores, mantendo a clareza visual dos diagramas."
              },
              {
                question: "Por que o valor é tão acessível?",
                answer: "Nosso objetivo é que a 'Regra da Vida' seja a base para o maior número de pessoas possível. O valor baixo remove a barreira de entrada para quem quer começar a mudança hoje."
              }
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-white rounded-xl border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <span className="text-blue-600 text-2xl">?</span>
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
