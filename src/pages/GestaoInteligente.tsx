import { ArrowRight } from "lucide-react";
import { Header } from "@/components/syncronix/Header";
import { Footer } from "@/components/syncronix/Footer";

const GestaoInteligente = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1 bg-white text-gray-900">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -left-10 w-72 h-72 bg-slate-200/60 blur-3xl rounded-full" />
            <div className="absolute -bottom-32 -right-10 w-72 h-72 bg-slate-300/60 blur-3xl rounded-full" />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 lg:py-32">
            <div className="max-w-3xl">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-black text-white text-xs uppercase tracking-[0.2em] mb-4">
                Sistema Gestão Inteligente · Notion + Minicurso
              </span>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4">
                Sistema de Organização Mental{" "}
                <span className="text-slate-700">aplicado à Vida e aos Negócios</span>
              </h1>

              <p className="text-slate-600 text-base md:text-lg max-w-xl mb-6">
                Um sistema prático de organização que transforma caos em clareza, improviso em direção e esforço em
                resultado aplicado na vida e nos negócios.
              </p>

              <p className="text-slate-500 text-sm md:text-base mb-8">
                "Esse é o sistema que eu uso para organizar projetos, decisões e negócios que já faturaram mais de{" "}
                <span className="text-slate-900 font-medium">R$ 600 mil</span>."
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* CTA principal preto */}
                <button className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-black hover:bg-slate-900 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl">
                  Quero o Sistema Gestão Inteligente
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>

                {/* CTA secundário outline */}
                <button className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-slate-300 text-sm font-medium hover:border-slate-900 hover:text-slate-900 transition-colors duration-200 bg-white">
                  Ver como funciona por dentro
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* O QUE É / DESCRIÇÃO */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                Sistema de Organização Mental aplicado à Vida e aos Negócios
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Este não é apenas um template de Notion. É um sistema prático de organização mental que transforma caos
                em clareza, improviso em direção e esforço em resultado.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3 text-sm md:text-base text-slate-700">
                <p>O Gestão Inteligente foi criado para pessoas que querem:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>parar de se sentir perdidas</li>
                  <li>organizar ideias, projetos e objetivos</li>
                  <li>ter um plano claro para a vida e os negócios</li>
                  <li>executar com mais foco, leveza e previsibilidade</li>
                </ul>
              </div>

              <div className="space-y-3 text-sm md:text-base text-slate-700">
                <p>
                  Esse é o mesmo sistema que eu utilizo para gerenciar projetos e negócios digitais que já faturaram
                  mais de <span className="font-semibold text-slate-900">R$ 600 mil</span>, aplicado de forma simples,
                  funcional e acessível.
                </p>
                <p className="text-slate-500 text-sm">
                  O básico bem feito é perfeito. Estrutura antes da execução. Arquitetura &gt; força bruta.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* O QUE VOCÊ RECEBE */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">🎯 O que você recebe</h2>
            <p className="text-slate-600 text-sm md:text-base mb-8 max-w-2xl">
              Um sistema completo para sair do improviso e ter clareza de visão, objetivos e execução — sem complicar o
              Notion.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-lg font-semibold mb-2">Template exclusivo "Gestão Inteligente" (Notion)</h3>
                <p className="text-slate-700 text-sm mb-3">Um sistema pronto para organizar:</p>
                <ul className="space-y-1 text-sm text-slate-700 list-disc list-inside">
                  <li>visão, objetivos e metas</li>
                  <li>planos de ação e projetos</li>
                  <li>tarefas, atividades e checklists</li>
                </ul>
                <p className="text-slate-500 text-xs mt-3">Tudo conectado de forma lógica, simples e prática.</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-lg font-semibold mb-2">Minicurso prático com 6 aulas</h3>
                <p className="text-slate-700 text-sm mb-3">Aulas diretas mostrando:</p>
                <ul className="space-y-1 text-sm text-slate-700 list-disc list-inside">
                  <li>como usar o template na prática</li>
                  <li>como estruturar projetos do zero</li>
                  <li>como organizar uma gestão básica funcional</li>
                  <li>como transformar ideias em execução clara</li>
                  <li>como usar o Notion sem complicação</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-lg font-semibold mb-2">Tutorial simples de Notion</h3>
                <p className="text-slate-700 text-sm mb-3">Mesmo que você seja iniciante, você aprende:</p>
                <ul className="space-y-1 text-sm text-slate-700 list-disc list-inside">
                  <li>como navegar e adaptar o template</li>
                  <li>como construir dentro do sistema</li>
                  <li>como usar o Notion como ferramenta de gestão real</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-lg font-semibold mb-2">Atualizações futuras do template</h3>
                <p className="text-slate-700 text-sm">
                  Este é um produto vivo. Sempre que o template for aprimorado, quem já comprou recebe a atualização,
                  sem custo extra.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VIRADA DE CHAVE / PROBLEMA / SOLUÇÃO */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 space-y-14">
            {/* Virada de chave */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">🧠 Virada de chave</h2>
              <div className="grid md:grid-cols-2 gap-4 text-sm md:text-base text-slate-800">
                <ul className="space-y-2">
                  <li>• Execução sem estrutura vira ansiedade.</li>
                  <li>• Quem não tem sistema vive apagando incêndio.</li>
                  <li>• O problema não é fazer mais, é saber o que fazer.</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Improviso constante cansa. Estrutura liberta.</li>
                  <li>• Clareza vem antes da produtividade.</li>
                  <li>• Quem domina a estrutura, domina o resultado.</li>
                </ul>
              </div>
            </div>

            {/* Problema + copy forte */}
            <div className="grid md:grid-cols-[1.2fr,1fr] gap-8 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-3">🧩 O problema (sem drama)</h2>
                <p className="text-slate-700 text-sm md:text-base mb-3">
                  Você não está travado porque é preguiçoso. Você está travado porque tudo está solto na sua cabeça.
                </p>
                <p className="text-slate-700 text-sm md:text-base mb-3">
                  Ideias, tarefas, planos e objetivos misturados criam:
                </p>
                <ul className="space-y-1 text-sm md:text-base text-slate-700 list-disc list-inside">
                  <li>confusão</li>
                  <li>procrastinação</li>
                  <li>sensação de estar sempre atrasado</li>
                </ul>
                <p className="text-slate-500 text-sm mt-3">Sem estrutura, até gente boa trava.</p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-800">
                <p className="mb-2">
                  quer fazer dinheiro, fazer bufunfa, imprimir as nota, fazer chover pra cima né?
                </p>
                <p className="mb-2">
                  mas vou te contar uma coisa: se você não tiver estrutura pra sustentar o resultado, esqueça.
                </p>
                <p>
                  Não se constrói casa na areia, a fundação tem que ser na rocha. Por isso ter uma estrutura para o seu
                  projeto é fundamental, e é isso que eu te apresento aqui.
                </p>
              </div>
            </div>

            {/* Solução */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">✅ A solução (direto)</h2>
              <p className="text-slate-700 text-sm md:text-base mb-3">
                Gestão Inteligente é um sistema simples, fácil e prático que organiza:
              </p>
              <ul className="space-y-1 text-sm md:text-base text-slate-700 list-disc list-inside mb-4">
                <li>o que você quer</li>
                <li>o que você precisa fazer</li>
                <li>e como executar sem travar</li>
              </ul>
              <p className="text-slate-700 text-sm md:text-base">
                Tudo em um único lugar, com lógica clara e aplicação prática.
              </p>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA / PARA QUEM É */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 space-y-12 pb-10">
            {/* Como funciona */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">⚙️ Como funciona na prática</h2>
              <p className="text-slate-700 text-sm md:text-base mb-4">
                Um fluxo simples para tirar tudo da cabeça e colocar em execução:
              </p>
              <ol className="space-y-2 text-sm md:text-base text-slate-700 list-decimal list-inside">
                <li>Você organiza a visão</li>
                <li>Define objetivos claros</li>
                <li>Transforma isso em metas</li>
                <li>Cria um plano de ação</li>
                <li>Executa com projetos, tarefas e checklists</li>
              </ol>
              <p className="text-slate-500 text-sm mt-3">Sem complicação. Sem excesso. Sem improviso.</p>
            </div>

            {/* Para quem é / não é */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">🎯 Para quem é</h3>
                <ul className="space-y-2 text-sm md:text-base text-slate-700 list-disc list-inside">
                  <li>Para quem quer mais clareza</li>
                  <li>Para quem quer agilidade</li>
                  <li>Para quem quer parar de se sentir perdido</li>
                  <li>Para quem quer um plano real (inclusive para sair do CLT)</li>
                  <li>Para quem valoriza simplicidade funcional</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">🚫 Para quem não é</h3>
                <ul className="space-y-2 text-sm md:text-base text-slate-700 list-disc list-inside">
                  <li>Para quem busca atalhos mágicos</li>
                  <li>Para quem não pretende aplicar</li>
                  <li>Para quem quer algo complexo só para parecer avançado</li>
                </ul>
              </div>
            </div>

            {/* Prova de confiança + CTA final */}
            <div className="border border-slate-200 rounded-3xl bg-white p-6 md:p-8 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
              <p className="text-slate-700 text-sm md:text-base mb-4">
                Esse é o mesmo sistema que eu uso para organizar projetos e negócios digitais que já faturaram mais de{" "}
                <span className="font-semibold text-slate-900">R$ 600 mil</span>, aplicado aqui de forma simples e
                acessível.
              </p>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                Se você quer parar de improvisar e ganhar clareza, o Gestão Inteligente é o ponto de partida.
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-black hover:bg-slate-900 text-sm font-semibold text-white transition">
                  Quero o Sistema Gestão Inteligente
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <button className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-slate-300 text-sm font-medium hover:border-slate-900 hover:text-slate-900 transition bg-white">
                  Ver detalhes do template
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GestaoInteligente;
