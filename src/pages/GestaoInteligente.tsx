import { useEffect, useState } from "react";
import { ArrowRight, Check, Brain, Target, Zap, BookOpen, Lightbulb, ListChecks, RefreshCw, ShieldCheck, CreditCard, Download, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CountdownTimer from "@/components/gestao-inteligente/CountdownTimer";
import GuaranteeSection from "@/components/gestao-inteligente/GuaranteeSection";
import NotionCarousel from "@/components/gestao-inteligente/NotionCarousel";
import PurchaseNotifications from "@/components/quantum-key/PurchaseNotifications";
import LiveViewers from "@/components/quantum-key/LiveViewers";
import { brazilianPurchaseNotifications } from "@/components/quantum-key/notificationsData";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

const HeroLiveViewers = () => {
  const [viewers, setViewers] = useState(128);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(prev => {
        const change = Math.floor(Math.random() * 2) + 1;
        const direction = Math.random() > 0.5 ? 1 : -1;
        const newValue = prev + (change * direction);
        return Math.max(120, Math.min(145, newValue));
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.07)]"
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute w-2 h-2 rounded-full bg-red-500 animate-ping opacity-40"></div>
        <div className="relative w-2 h-2 rounded-full bg-red-500"></div>
      </div>
      <span className="text-sm md:text-base font-medium tracking-tight">
        <strong className="text-black font-extrabold">{viewers}</strong>{" "}
        <span className="text-slate-500">pessoas assistindo agora</span>
      </span>
    </motion.div>
  );
};

const GestaoInteligente = () => {

  useEffect(() => {
    document.title = "Gestão Inteligente | Template Notion + Minicurso";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <PurchaseNotifications
        purchaseText="acabou de adquirir o Template!"
        justNowText="comprou agora"
        notifications={brazilianPurchaseNotifications}
      />
      <main className="flex-1 bg-white text-gray-900 relative overflow-x-hidden">
        {/* Animated Background Grid */}
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        {/* Gradient Orbs */}
        <div className="fixed top-0 -left-40 w-96 h-96 bg-gradient-to-r from-slate-200/40 to-gray-200/40 rounded-full blur-[120px] animate-pulse"></div>
        <div className="fixed bottom-0 -right-40 w-96 h-96 bg-gradient-to-r from-gray-200/40 to-slate-200/40 rounded-full blur-[120px] animate-pulse delay-1000"></div>

        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 md:pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-white to-white"></div>

          <div className="relative z-10 max-w-6xl mx-auto text-center">

            {/* Live Viewers Badge */}
            <div className="flex justify-center mb-4">
              <HeroLiveViewers />
            </div>

            {/* Countdown Timer */}
            <div className="flex justify-center mb-6">
              <CountdownTimer />
            </div>

            {/* Offer Badge */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 mb-6 border border-slate-300 rounded-full bg-slate-50 shadow-sm"
            >
              <img src="/images/notion-logo.png" alt="Notion" className="w-5 h-5 object-contain" />
              <span className="text-slate-700 font-bold text-sm tracking-wide uppercase">Template Gestão Inteligente · Notion + Minicurso</span>
            </motion.div>

            <motion.h1
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-6xl lg:text-7xl font-black mb-6 text-gray-900 leading-tight"
            >
              Modelo de Gestão <br className="block md:hidden" />
              Universal para <br className="block md:hidden" />
              <span className="bg-gradient-to-r from-slate-600 to-gray-800 bg-clip-text text-transparent">
                Negócios Promissores
              </span>
            </motion.h1>

            <motion.p
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              Um sistema prático de organização que transforma caos em clareza, improviso em direção e estratégia em resultado.
            </motion.p>


            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <motion.a
                href="#oferta"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-black hover:bg-gray-900 text-white font-bold text-lg rounded-xl shadow-xl hover:scale-105 transition-transform"
              >
                <span>QUERO O SISTEMA AGORA</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <a href="#preview" className="inline-flex items-center justify-center px-8 py-5 rounded-xl border border-slate-300 text-lg font-medium hover:border-slate-900 hover:text-slate-900 transition-colors duration-200 bg-white">
                Ver como funciona
              </a>
            </motion.div>
          </div>
        </section>



        {/* CAROUSEL PREVIEW */}
        <NotionCarousel />

        {/* VIRADA DE CHAVE */}
        <section className="relative py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeInUp} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-5xl font-black text-center mb-16 text-gray-900 max-w-4xl mx-auto leading-tight">
                Insights que mudam a forma como você pensa sobre produtividade e organização.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-8 h-8 text-slate-700" />,
                  title: "Estrutura liberta",
                  description: "Execução sem estrutura vira ansiedade. Quem não tem sistema vive apagando incêndio."
                },
                {
                  icon: <Lightbulb className="w-8 h-8 text-slate-700" />,
                  title: "Clareza primeiro",
                  description: "O problema não é fazer mais, é saber o que fazer. Clareza vem antes da produtividade."
                },
                {
                  icon: <Target className="w-8 h-8 text-slate-700" />,
                  title: "Domínio do resultado",
                  description: "Improviso constante cansa. Quem domina a estrutura, domina o resultado."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative p-8 rounded-2xl bg-white border border-slate-200 text-center hover:border-slate-400 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 mb-6 rounded-xl bg-slate-100 flex items-center justify-center mx-auto">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* O PROBLEMA / A SOLUÇÃO */}
        <section className="relative py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeInUp} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-5xl font-black text-center mb-6 text-gray-900">
                O jogo muda quando você tem um sistema
              </h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                Saia da tentativa e erro e entre no campo da estratégia pura.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* O JEITO COMUM */}
              <motion.div
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative p-8 rounded-2xl bg-white border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-red-500 font-bold text-xl">✗</span>
                  </div>
                  <h3 className="text-xl font-bold text-red-600">SEM SISTEMA</h3>
                </div>

                <h4 className="text-2xl font-bold text-gray-900 mb-6">Improviso constante</h4>

                <ul className="space-y-4">
                  {[
                    "Ideias soltas na cabeça sem organização",
                    "Sensação de estar sempre atrasado",
                    "Confusão e procrastinação constantes",
                    "Esforço que não vira resultado"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <span className="text-gray-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* GESTÃO INTELIGENTE */}
              <motion.div
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-400 shadow-xl"
              >
                <div className="absolute top-4 right-4 px-4 py-1 bg-green-600 text-white text-xs font-bold rounded-full">
                  RECOMENDADO
                </div>

                <div className="flex items-center gap-3 mb-6 mt-4">
                  <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-green-600">GESTÃO INTELIGENTE</h3>
                </div>

                <h4 className="text-2xl font-bold text-gray-900 mb-6">Sistema de organização</h4>

                <ul className="space-y-4">
                  {[
                    "Visão clara de objetivos e metas",
                    "Planos de ação estruturados",
                    "Projetos e tarefas conectados",
                    "Execução com foco e previsibilidade"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-12"
            >
              <motion.a
                href="#oferta"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-black hover:bg-gray-900 text-white font-bold text-xl rounded-xl shadow-xl hover:scale-105 transition-transform"
              >
                <span>QUERO ORGANIZAR MINHA VIDA</span>
                <ArrowRight className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* O QUE VOCÊ RECEBE */}
        <section className="relative py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeInUp} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-5xl font-black text-center mb-16 text-gray-900 max-w-4xl mx-auto leading-tight">
                Um sistema completo para sair do improviso e ter clareza de visão, objetivos e execução.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <BookOpen className="w-10 h-10" />,
                  title: (
                    <span className="flex items-center gap-2">
                      Template exclusivo
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-xs text-gray-900 font-bold">
                        <img src="/images/notion-logo.png" alt="" className="w-3 h-3 object-contain" />
                        Notion
                      </span>
                    </span>
                  ),
                  description: "Um sistema pronto para organizar visão, objetivos, metas, planos de ação, projetos, tarefas, atividades e checklists. Tudo conectado de forma lógica, simples e prática."
                },
                {
                  icon: <ListChecks className="w-10 h-10" />,
                  title: "Minicurso prático com 6 aulas",
                  description: "Aulas diretas mostrando como usar o template na prática, estruturar projetos do zero, organizar uma gestão básica funcional e transformar ideias em execução clara."
                },
                {
                  icon: <Lightbulb className="w-10 h-10" />,
                  title: (
                    <span className="flex items-center gap-2">
                      Tutorial simples de
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-xs text-gray-900 font-bold">
                        <img src="/images/notion-logo.png" alt="" className="w-3 h-3 object-contain" />
                        Notion
                      </span>
                    </span>
                  ),
                  description: "Mesmo que você seja iniciante, você aprende como navegar, adaptar e construir dentro do sistema. Use o Notion como ferramenta de gestão real."
                },
                {
                  icon: <RefreshCw className="w-10 h-10" />,
                  title: "Atualizações futuras do template",
                  description: "Este é um produto vivo. Sempre que o template for aprimorado, quem já comprou recebe a atualização, sem custo extra."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative p-6 rounded-xl bg-white border border-slate-200 hover:border-slate-400 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 mb-6 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 relative">
                    {item.icon}
                    <img src="/images/notion-logo.png" alt="" className="absolute -top-2 -right-2 w-6 h-6 object-contain bg-white rounded-full p-0.5 shadow-sm border border-slate-100" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA NA PRÁTICA */}
        <section className="relative py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeInUp} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-5xl font-black text-center mb-6 text-gray-900">
                ⚙️ COMO FUNCIONA POR DENTRO
              </h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                Um sistema completo para gerenciar todas as áreas da sua vida e dos seus negócios.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {[
                { step: "1", title: "Controle Financeiro", description: "Você registra receitas e despesas, acompanha fluxo de caixa e passa a tomar decisão com número na mão, não com sensação." },
                { step: "2", title: "Notas & Pendências", description: "Caixa de captura de ideias e prioridades centralizadas. Nada mais perdido em conversa ou caderno." },
                { step: "3", title: "Metas e KPIs", description: "Transforma intenção em ação com acompanhamento semanal e mensal." },
                { step: "4", title: "Projetos", description: "Etapas claras, prazos, responsáveis e status de execução." },
                { step: "5", title: "Tarefas Extras", description: "Organização do dia a dia sem sobrecarregar a cabeça." },
                { step: "6", title: "Marketing", description: "Planejamento de conteúdo, anúncios e calendário de postagens." },
                { step: "7", title: "Documentos e Processos", description: "Base de conhecimento da empresa em um só lugar." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-6 mb-8"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center font-black text-xl">
                    {item.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center text-gray-500 text-lg mt-8"
            >
              Sem complicação. Sem excesso. Sem improviso.
            </motion.p>
          </div>
        </section>

        {/* PARA QUEM É / NÃO É */}
        <section className="relative py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Para quem é */}
              <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }}>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-4xl font-black text-green-600">01</span>
                  <h3 className="text-2xl font-bold text-gray-900 tracking-tight">O Gestão Inteligente foi feito para:</h3>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    "Quem está começando a empreender",
                    "Equipes de até 10 pessoas",
                    "Autônomos e prestadores de serviço",
                    "Criadores digitais",
                    "Pequenos negócios físicos",
                    "Quem quer sair do improviso"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4 text-gray-700">
                      <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>


              </motion.div>

              {/* Para quem não é */}
              <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-4xl font-black text-red-600">02</span>
                  <h3 className="text-2xl font-bold text-gray-400">Não perca seu tempo se:</h3>
                </div>

                <ul className="space-y-4">
                  {[
                    "Você busca atalhos mágicos ou soluções instantâneas.",
                    "Você não pretende aplicar o que vai aprender.",
                    "Você quer algo complexo só para parecer avançado."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4 text-gray-400">
                      <span className="w-6 h-6 flex-shrink-0 mt-1 text-xl text-red-500">✗</span>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROVA DE CONFIANÇA */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeInUp} transition={{ duration: 0.6 }}>
              <div className="w-16 h-16 mb-8 mx-auto rounded-full bg-slate-100 flex items-center justify-center">
                <Zap className="w-8 h-8 text-slate-700" />
              </div>

              <h2 className="text-2xl md:text-5xl font-black mb-8 text-gray-900 leading-tight">
                O básico bem feito é perfeito. Estrutura antes da execução. Arquitetura &gt; força bruta.
              </h2>

              <p className="text-xl text-gray-500 font-medium tracking-wider">
                GESTÃO INTELIGENTE É SOBRE CLAREZA, NÃO COMPLICAÇÃO.
              </p>
            </motion.div>
          </div>
        </section>

        {/* OFFER SECTION */}
        <section id="oferta" className="relative py-20 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-100/30 via-transparent to-transparent"></div>

          <div className="relative max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto">
              <motion.div
                {...fadeInUp}
                transition={{ duration: 0.6 }}
                className="relative p-8 md:p-12 rounded-2xl bg-white border-2 border-slate-300 shadow-2xl shadow-slate-200/50 text-center overflow-hidden"
              >
                {/* Animated Border Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-100/30 via-gray-100/30 to-slate-100/30 opacity-50 blur-xl"></div>

                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 border border-slate-300 rounded-full bg-slate-50">
                    <span className="text-slate-700 font-bold text-sm tracking-wide">OFERTA ESPECIAL</span>
                  </div>

                  <div className="flex flex-col items-center gap-3 mb-6">
                    <img src="/images/notion-logo.png" alt="Notion" className="w-12 h-12 object-contain drop-shadow-sm" />
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900">
                      Template Gestão Inteligente + Minicurso Notion
                    </h3>
                  </div>

                  {/* Subtitle */}
                  <h4 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
                    Organize sua vida e seus negócios.
                  </h4>
                  <p className="text-xl md:text-2xl font-semibold mb-8 text-gray-800">
                    Saia do caos e ganhe <span className="text-slate-700 font-black">direção</span>.
                  </p>

                  {/* Benefits */}
                  <div className="text-left mb-8 space-y-3 bg-slate-50/50 p-6 rounded-xl">
                    {[
                      "Template Gestão Inteligente (Notion)",
                      "Minicurso prático com 6 aulas",
                      "Tutorial simples de Notion",
                      "Atualizações futuras do template"
                    ].map((benefit, index) => (
                      <p key={index} className="text-gray-700 flex items-center gap-3 text-base">
                        <Check className="w-5 h-5 text-slate-700 flex-shrink-0" />
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
                    <p className="text-5xl md:text-6xl font-black text-slate-800">
                      R$ 47,00
                    </p>
                    <p className="text-lg font-semibold text-gray-600">à vista</p>
                    <p className="text-base font-medium text-gray-500 mt-2">ou 6x de R$ 8,82</p>
                  </div>

                  <div className="mb-8">
                    <LiveViewers text="pessoas estão visualizando esta página agora" color="slate" />
                  </div>

                  {/* CTA */}
                  <motion.a
                    href="https://pay.hotmart.com/P104196723Q"
                    target="_blank"
                    rel="noopener noreferrer"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-block w-full px-12 py-6 bg-black hover:bg-gray-900 text-white font-bold text-xl rounded-xl shadow-xl hover:shadow-2xl mb-8 hover:scale-[1.03] transition-transform"
                  >
                    COMPRAR AGORA
                  </motion.a>

                  {/* Trust badges */}
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2 justify-center">
                      <ShieldCheck className="w-5 h-5 text-slate-700" />
                      <span>Compra segura</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CreditCard className="w-5 h-5 text-slate-700" />
                      <span>Pagamento fácil</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <Download className="w-5 h-5 text-slate-700" />
                      <span>Acesso imediato</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <Clock className="w-5 h-5 text-slate-700" />
                      <span>Garantia de 7 dias</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* WHATSAPP GROUP HIGHLIGHT */}
        <section className="relative py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              {...fadeInUp}
              className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-black text-white text-center shadow-2xl overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 font-bold text-sm tracking-wide">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  COMUNIDADE EXCLUSIVA
                </div>

                <h2 className="text-2xl md:text-4xl font-black mb-6 leading-tight">
                  Grupo de Networking, Acompanhamento e Insights de Gestão
                </h2>

                <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Networking, acompanhamento, insights de gestão e desenvolvimento.
                </p>

                <motion.a
                  href="https://wa.me/555431963107?text=Olá! Quero saber mais sobre o grupo de networking e gestão."
                  target="_blank"
                  rel="noopener noreferrer"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-green-500/20 transition-all duration-300"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>ACESSAR GRUPO NO WHATSAPP</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeInUp} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-5xl font-black mb-8 text-gray-900 leading-tight">
                Se você deseja avançar com velocidade e clareza o nosso modelo de gestão é o seu ponto de partida rumo ao sucesso.
              </h2>

              <motion.a
                href="#oferta"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center justify-center gap-3 px-16 py-6 bg-black hover:bg-gray-900 text-white font-bold text-lg md:text-2xl rounded-xl shadow-2xl hover:scale-105 transition-transform"
              >
                <span>COMEÇAR AGORA</span>
                <ArrowRight className="w-7 h-7" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* GUARANTEE SECTION */}
        <GuaranteeSection />

        {/* FAQ Section */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-slate-50/30 to-white">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-5xl font-black text-center mb-16 bg-gradient-to-r from-slate-600 to-gray-800 bg-clip-text text-transparent">
                Perguntas Frequentes
              </h2>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  question: "Como e quando recebo o acesso?",
                  answer: "O acesso é imediato via e-mail. Assim que o pagamento for confirmado, você recebe um link exclusivo para acessar o template e o minicurso."
                },
                {
                  question: "Preciso saber usar o Notion?",
                  answer: "Não! O minicurso inclui um tutorial completo de Notion para iniciantes. Você vai aprender tudo do zero."
                },
                {
                  question: "Funciona para qualquer tipo de negócio?",
                  answer: "Sim. O sistema é baseado em princípios universais de organização que funcionam para vida pessoal, projetos, freelancers, empresas e qualquer área de atuação."
                },
                {
                  question: "Tem garantia?",
                  answer: "Sim! Você tem 7 dias para testar. Se não gostar, devolvemos 100% do seu dinheiro, sem perguntas."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-400 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                    <span className="text-slate-600 text-2xl">?</span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed pl-8">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GestaoInteligente;
