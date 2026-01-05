import SEO from "@/components/quantum-key/SEO";
import LiveViewers from "@/components/quantum-key/LiveViewers";
import PurchaseNotifications from "@/components/quantum-key/PurchaseNotifications";
import { brazilianPurchaseNotifications } from "@/components/quantum-key/notificationsData";
import { Check, Brain, Target, Zap } from "lucide-react";

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
        description="Manual direto e visual que mostra como a mente humana opera por trás das decisões, hábitos e resultados. Descubra como a mudança real acontece."
        keywords="ebook, mudança de hábitos, identidade, comportamento, mente humana, transformação, clareza mental, desenvolvimento pessoal"
        canonical="https://achavdopoder.com/ebook-a-regra-da-vida"
        lang="pt-BR"
      />

      <PurchaseNotifications
        purchaseText="acabou de adquirir o eBook!"
        justNowText="comprou agora"
        notifications={brazilianPurchaseNotifications}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white to-white"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Tech Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-blue-300/50 rounded-full bg-white/80 backdrop-blur-md shadow-lg shadow-blue-200/50">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-blue-600 font-semibold tracking-wide">SISTEMA DE TRANSFORMAÇÃO MENTAL</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            A REGRA DA VIDA
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            O manual direto e visual que mostra como a mente humana opera por trás das decisões, hábitos e resultados
          </p>

          <div className="mb-12">
            <LiveViewers text="pessoas estão visualizando esta página agora" />
          </div>

          <a
            href="#oferta"
            className="group relative inline-block px-12 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-xl rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center gap-2">
              QUERO CLAREZA MENTAL AGORA
              <span className="text-2xl">→</span>
            </span>
          </a>
        </div>
      </section>

      {/* O Problema Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-white via-blue-50/30 to-white backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-100/20 to-transparent"></div>

        <div className="relative max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Por que tentar mudar só com esforço quase sempre falha?
          </h2>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p className="border-l-4 border-blue-400 pl-6 py-4 bg-white/60 backdrop-blur-sm rounded-r-xl shadow-lg shadow-blue-100/50">
              Você já tentou mudar com força de vontade e viu o resultado desaparecer em dias ou semanas? Não é falta de disciplina. É que você estava lutando contra o sistema errado.
            </p>
            <p className="border-l-4 border-blue-400 pl-6 py-4 bg-white/60 backdrop-blur-sm rounded-r-xl shadow-lg shadow-blue-100/50">
              A verdade é que <span className="text-blue-600 font-bold">a identidade controla o comportamento no automático</span>. Enquanto você continuar acreditando que é "aquele tipo de pessoa", vai repetir os mesmos padrões.
            </p>
            <p className="border-l-4 border-blue-400 pl-6 py-4 bg-white/60 backdrop-blur-sm rounded-r-xl shadow-lg shadow-blue-100/50">
              Este livro não é motivação. Não é promessa mágica. É <span className="text-blue-600 font-bold">clareza mental aplicada</span> para que os resultados passem a surgir como consequência natural.
            </p>
          </div>
        </div>
      </section>

      {/* O que você vai descobrir */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent"></div>

        <div className="relative max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            O que você vai descobrir
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Brain className="w-12 h-12 text-blue-600" />,
                title: "Como a mente realmente funciona",
                description: "Entenda por que você repete os mesmos padrões mesmo querendo avançar"
              },
              {
                icon: <Target className="w-12 h-12 text-blue-600" />,
                title: "O papel da identidade",
                description: "Descubra como quem você acredita ser determina seus resultados"
              },
              {
                icon: <Zap className="w-12 h-12 text-blue-600" />,
                title: "Mudança real e duradoura",
                description: "Aprenda como corrigir a instrução interna para resultados automáticos"
              },
              {
                icon: <Check className="w-12 h-12 text-blue-600" />,
                title: "Sistema de coerência mental",
                description: "Entenda como o cérebro busca coerência com suas crenças internas"
              }
            ].map((item, index) => (
              <div key={index} className="group relative p-8 rounded-2xl bg-white border border-blue-200/60 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 backdrop-blur-sm">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/0 via-cyan-50/0 to-blue-50/0 group-hover:from-blue-50 group-hover:via-cyan-50/30 group-hover:to-transparent transition-all duration-300"></div>

                <div className="relative">
                  <div className="mb-4 p-3 w-fit rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 border border-blue-200">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="oferta" className="relative py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/30 via-transparent to-transparent"></div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* eBook Mockup */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Glow behind mockup */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200/50 to-cyan-200/50 rounded-3xl blur-3xl"></div>
                <img
                  src="/regra-da-vida/mockup-ebook.png"
                  alt="A Regra da Vida - eBook"
                  className="relative w-full max-w-md rounded-3xl shadow-2xl shadow-blue-300/30 border border-blue-200"
                />
              </div>
            </div>

            {/* Pricing Card */}
            <div className="relative p-8 md:p-12 rounded-2xl bg-white border-2 border-blue-300 shadow-2xl shadow-blue-200/50 text-center overflow-hidden">
              {/* Animated Border Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-cyan-100/30 to-blue-100/30 opacity-50 blur-xl"></div>

              <div className="relative">
                <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                  A Regra da Vida
                </h3>

                <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-orange-300 rounded-full bg-gradient-to-r from-orange-50 to-yellow-50 shadow-lg">
                  <span className="text-orange-600 font-bold text-lg">🔥 OFERTA DE LANÇAMENTO 🔥</span>
                </div>

                {/* Pricing */}
                <div className="mb-8 space-y-3">
                  <p className="text-red-500 line-through text-2xl md:text-3xl font-black">
                    R$ 49,90
                  </p>
                  <p className="text-lg font-semibold text-gray-600">por apenas</p>
                  <p className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    R$ 29,90
                  </p>
                  <p className="text-lg font-semibold text-gray-600">à vista</p>
                </div>

                {/* Benefits */}
                <div className="text-left mb-8 space-y-3">
                  {[
                    "✅ Acesso imediato ao eBook completo",
                    "✅ Leitura em qualquer dispositivo",
                    "✅ Conteúdo direto e visual",
                    "✅ Garantia de 7 dias"
                  ].map((benefit, index) => (
                    <p key={index} className="text-gray-700 flex items-center gap-2 font-medium">
                      <span className="text-blue-600 text-xl">→</span>
                      {benefit}
                    </p>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="https://pay.hotmart.com/E103440064H?checkoutMode=10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-block w-full px-12 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-xl rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">GARANTIR MINHA VAGA</span>
                </a>

                <p className="text-sm text-gray-600 mt-4 flex items-center justify-center gap-2">
                  <span className="text-green-500">🔒</span>
                  Pagamento 100% seguro via Hotmart
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-white to-green-50/30">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-100/20 to-transparent"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-green-300 rounded-full bg-white shadow-lg shadow-green-200/50">
            <span className="text-2xl">🛡️</span>
            <span className="text-green-600 font-bold">GARANTIA TOTAL</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black mb-8 bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">
            Garantia Incondicional de 7 Dias
          </h2>

          <div className="p-8 rounded-2xl bg-white border-2 border-green-200 shadow-xl shadow-green-200/30">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Se por qualquer motivo você não ficar satisfeito, devolvemos <span className="text-green-600 font-bold">100% do seu investimento</span>. Sem perguntas, sem burocracia.
            </p>
            <p className="text-lg text-gray-600">
              Você não tem nada a perder. <span className="text-blue-600 font-bold">Todo o risco é nosso.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 bg-gray-50 border-t border-gray-200">
        <div className="relative max-w-4xl mx-auto text-center text-gray-600">
          <p className="mb-4">© 2024 A Regra da Vida. Todos os direitos reservados.</p>
          <p className="text-sm">Este site não faz parte do Facebook ou Meta. Não somos afiliados ao Facebook de nenhuma maneira.</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
