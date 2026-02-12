import { ArrowRight, Check, Brain, Target, Zap, BookOpen, Lightbulb, ListChecks, RefreshCw, ShieldCheck, CreditCard, Download, Clock } from "lucide-react";
import { motion } from "framer-motion";
import CountdownTimer from "@/components/gestao-inteligente/CountdownTimer";
import GuaranteeSection from "@/components/gestao-inteligente/GuaranteeSection";
import NotionCarousel from "@/components/gestao-inteligente/NotionCarousel";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

const GestaoInteligente = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
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
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-gray-900 leading-tight"
            >
              Sistema de Organização Mental{" "}
              <span className="bg-gradient-to-r from-slate-600 to-gray-800 bg-clip-text text-transparent">
                aplicado à Vida e aos Negócios
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
              <a
                href="#oferta"
                className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-black hover:bg-gray-900 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <span>QUERO O SISTEMA AGORA</span>
                <ArrowRight className="w-5 h-5" />
              </a>

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
              <h2 className="text-3xl md:text-5xl font-black text-center mb-6 text-gray-900">
                🧠 Virada de Chave
              </h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                Insights que mudam a forma como você pensa sobre produtividade e organização.
              </p>
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
              <a
                href="#oferta"
                className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-black hover:bg-gray-900 text-white font-bold text-xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <span>QUERO ORGANIZAR MINHA VIDA</span>
                <ArrowRight className="w-6 h-6" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* O QUE VOCÊ RECEBE */}
        <section className="relative py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeInUp} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-5xl font-black text-center mb-6 text-gray-900">
                🎯 O que você recebe
              </h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                Um sistema completo para sair do improviso e ter clareza de visão, objetivos e execução.
              </p>
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
                ⚙️ Como funciona na prática
              </h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                Um fluxo simples para tirar tudo da cabeça e colocar em execução.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {[
                { step: "01", title: "Organiza a visão", description: "Defina onde você quer chegar na vida e nos negócios." },
                { step: "02", title: "Define objetivos claros", description: "Transforme a visão em objetivos mensuráveis." },
                { step: "03", title: "Transforma em metas", description: "Quebre objetivos em metas alcançáveis." },
                { step: "04", title: "Cria um plano de ação", description: "Monte o caminho passo a passo." },
                { step: "05", title: "Executa com foco", description: "Projetos, tarefas e checklists organizados." }
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

              <h2 className="text-3xl md:text-5xl font-black mb-8 text-gray-900 leading-tight">
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

                  {/* CTA */}
                  <a
                    href="#"
                    className="inline-block w-full px-12 py-6 bg-black hover:bg-gray-900 text-white font-bold text-xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl mb-8"
                  >
                    COMPRAR AGORA
                  </a>

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

        {/* FINAL CTA */}
        <section className="relative py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeInUp} transition={{ duration: 0.6 }}>
              <h2 className="text-4xl md:text-6xl font-black mb-8 text-gray-900 leading-tight">
                Se você deseja avançar com velocidade e clareza o nosso modelo de gestão é o seu ponto de partida rumo ao sucesso.
              </h2>

              <a
                href="#oferta"
                className="inline-flex items-center justify-center gap-3 px-16 py-6 bg-black hover:bg-gray-900 text-white font-bold text-lg md:text-2xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <span>COMEÇAR AGORA</span>
                <ArrowRight className="w-7 h-7" />
              </a>
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
