import SEO from "@/components/quantum-key/SEO";
import LiveViewers from "@/components/quantum-key/LiveViewers";
import PurchaseNotifications from "@/components/quantum-key/PurchaseNotifications";
import { spanishPurchaseNotifications } from "@/components/quantum-key/notificationsData";
import { Check, Brain, Target, Zap } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white relative">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      {/* Gradient Orbs */}
      <div className="fixed top-0 -left-40 w-80 h-80 bg-cyan-500/30 rounded-full blur-[120px] animate-pulse"></div>
      <div className="fixed bottom-0 -right-40 w-80 h-80 bg-blue-500/30 rounded-full blur-[120px] animate-pulse delay-1000"></div>

      <SEO
        title="La Regla de la Vida | eBook - Claridad Mental Aplicada"
        description="Manual directo y visual que muestra cómo opera la mente humana detrás de las decisiones, hábitos y resultados. Descubre cómo ocurre el cambio real."
        keywords="ebook, cambio de hábitos, identidad, comportamiento, mente humana, transformación, claridad mental, desarrollo personal"
        canonical="https://achavdopoder.com/ebook-la-regla-de-la-vida"
        lang="es-ES"
      />

      <PurchaseNotifications
        purchaseText="acaba de adquirir el eBook!"
        justNowText="compró ahora"
        notifications={spanishPurchaseNotifications}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Tech Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-cyan-500/30 rounded-full bg-cyan-500/10 backdrop-blur-sm">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-cyan-400 font-medium">SISTEMA DE TRANSFORMACIÓN MENTAL</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            LA REGLA DE LA VIDA
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            El manual directo y visual que muestra cómo opera la mente humana detrás de las decisiones, hábitos y resultados
          </p>

          <div className="mb-12">
            <LiveViewers text="personas están viendo esta página ahora" />
          </div>

          <a
            href="#oferta"
            className="group relative inline-block px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xl rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center gap-2">
              QUIERO CLARIDAD MENTAL AHORA
              <span className="text-2xl">→</span>
            </span>
          </a>
        </div>
      </section>

      {/* El Problema Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-white via-blue-50/30 to-white backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-100/20 to-transparent"></div>

        <div className="relative max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            ¿Por qué intentar cambiar solo con esfuerzo casi siempre falla?
          </h2>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p className="border-l-4 border-blue-400 pl-6 py-4 bg-white/60 backdrop-blur-sm rounded-r-xl shadow-lg shadow-blue-100/50">
              ¿Alguna vez intentaste cambiar con fuerza de voluntad y viste cómo el resultado desaparecía en días o semanas? No es falta de disciplina. Es que estabas luchando contra el sistema equivocado.
            </p>
            <p className="border-l-4 border-blue-400 pl-6 py-4 bg-white/60 backdrop-blur-sm rounded-r-xl shadow-lg shadow-blue-100/50">
              La verdad es que <span className="text-blue-600 font-bold">la identidad controla el comportamiento en automático</span>. Mientras sigas creyendo que eres "ese tipo de persona", repetirás los mismos patrones.
            </p>
            <p className="border-l-4 border-blue-400 pl-6 py-4 bg-white/60 backdrop-blur-sm rounded-r-xl shadow-lg shadow-blue-100/50">
              Este libro no es motivación. No es una promesa mágica. Es <span className="text-blue-600 font-bold">claridad mental aplicada</span> para que los resultados surjan como consecuencia natural.
            </p>
          </div>
        </div>
      </section>

      {/* Lo que descubrirás */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent"></div>

        <div className="relative max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Lo que descubrirás
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Brain className="w-12 h-12 text-blue-600" />,
                title: "Cómo funciona realmente la mente",
                description: "Entiende por qué repites los mismos patrones incluso queriendo avanzar"
              },
              {
                icon: <Target className="w-12 h-12 text-blue-600" />,
                title: "El papel de la identidad",
                description: "Descubre cómo quien crees que eres determina tus resultados"
              },
              {
                icon: <Zap className="w-12 h-12 text-blue-600" />,
                title: "Cambio real y duradero",
                description: "Aprende cómo corregir la instrucción interna para resultados automáticos"
              },
              {
                icon: <Check className="w-12 h-12 text-blue-600" />,
                title: "Sistema de coherencia mental",
                description: "Entiende cómo el cerebro busca coherencia con tus creencias internas"
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

      {/* Transformation Section */}
      <section className="relative py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            La transformación que experimentarás
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Antes */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200">
              <div className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white text-sm font-bold rounded-full">
                ANTES
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-4">Sin claridad mental</h3>
              <ul className="space-y-4">
                {[
                  "Repites los mismos errores constantemente",
                  "Luchas contra ti mismo sin entender por qué",
                  "Cambios temporales que no duran",
                  "Fuerza de voluntad que se agota rápidamente",
                  "Sensación de estar atrapado en los mismos patrones"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="text-red-500 text-xl font-bold">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Después */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-green-50 to-cyan-50 border-2 border-green-300 shadow-xl">
              <div className="absolute top-4 right-4 px-4 py-2 bg-green-600 text-white text-sm font-bold rounded-full">
                DESPUÉS
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-4">Con claridad mental</h3>
              <ul className="space-y-4">
                {[
                  "Comprendes los patrones y sabes cómo cambiarlos",
                  "Alineas identidad con los resultados deseados",
                  "Cambios profundos y permanentes",
                  "Sistema mental que trabaja a tu favor",
                  "Libertad para crear la vida que quieres vivir"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="text-green-600 text-xl font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Este libro es para ti si...
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Quieres cambios reales, no solo motivación temporal",
              "Estás cansado de repetir los mismos patrones",
              "Buscas entender cómo funciona realmente la mente",
              "Quieres resultados basados en claridad, no en esfuerzo",
              "Deseas transformación profunda y duradera",
              "Estás listo para tomar el control de tu vida"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Lo que dicen quienes ya lo leyeron
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Rodríguez",
                location: "Madrid, España",
                text: "Finalmente entendí por qué siempre volvía a los mismos hábitos. Este libro cambió completamente mi perspectiva sobre la transformación personal.",
                rating: 5
              },
              {
                name: "María González",
                location: "Barcelona, España",
                text: "No es un libro más de autoayuda. Es un manual práctico que muestra exactamente cómo opera la mente. Claridad total.",
                rating: 5
              },
              {
                name: "Javier López",
                location: "Buenos Aires, Argentina",
                text: "Leí decenas de libros sobre cambio de hábitos, pero este fue el único que realmente me hizo entender el funcionamiento detrás. ¡Lo recomiendo mucho!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="relative p-8 bg-white rounded-2xl border border-blue-200 shadow-lg hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-6">
            {[
              {
                question: "¿Cómo recibo el eBook después de la compra?",
                answer: "Recibirás acceso inmediato después de la confirmación del pago. El eBook se enviará a tu correo electrónico y estará disponible en la plataforma Hotmart para descarga en cualquier dispositivo."
              },
              {
                question: "¿Puedo leer en cualquier dispositivo?",
                answer: "¡Sí! El eBook está disponible en formato PDF, permitiendo lectura en smartphones, tablets, computadoras y e-readers. Puedes descargar y leer sin conexión cuando quieras."
              },
              {
                question: "¿Cómo funciona la garantía de 7 días?",
                answer: "Simple: si dentro de 7 días no estás satisfecho por cualquier motivo, solo solicita el reembolso y devolveremos el 100% de tu inversión. Sin preguntas, sin burocracia."
              },
              {
                question: "¿Este libro es diferente de otros sobre hábitos?",
                answer: "Completamente. No es motivación temporal ni técnicas superficiales. Es un manual visual y directo que muestra cómo opera la mente detrás de los comportamientos, enfocándose en la identidad como base del cambio real."
              },
              {
                question: "¿Necesito conocimientos previos?",
                answer: "No. El contenido se presenta de forma clara y visual, accesible para cualquiera que busque entender cómo funciona la mente humana y quiera resultados prácticos."
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

      {/* Offer Section */}
      <section id="oferta" className="relative py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/30 via-transparent to-transparent"></div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* eBook Mockup */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Glow behind mockup */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-3xl blur-3xl"></div>
                <img
                  src="/regra-da-vida/mockup-ebook.png"
                  alt="La Regla de la Vida - eBook"
                  className="relative w-full max-w-md rounded-3xl shadow-2xl shadow-cyan-500/20 border border-cyan-500/20"
                />
              </div>
            </div>

            {/* Pricing Card */}
            <div className="relative p-8 md:p-12 rounded-2xl bg-white border-2 border-blue-300 shadow-2xl shadow-blue-200/50 text-center overflow-hidden">
              {/* Animated Border Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-cyan-100/30 to-blue-100/30 opacity-50 blur-xl"></div>

              <div className="relative">
                <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                  La Regla de la Vida
                </h3>

                <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-orange-300 rounded-full bg-gradient-to-r from-orange-50 to-yellow-50 shadow-lg">
                  <span className="text-orange-600 font-bold text-lg">🔥 OFERTA DE LANZAMIENTO 🔥</span>
                </div>

                {/* Pricing */}
                <div className="mb-8 space-y-3">
                  <p className="text-red-500 line-through text-2xl md:text-3xl font-black">
                    U$ 49.90
                  </p>
                  <p className="text-lg font-semibold text-gray-600">por solo</p>
                  <p className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    U$ 29.90
                  </p>
                  <p className="text-lg font-semibold text-gray-600">al contado</p>
                </div>

                {/* Benefits */}
                <div className="text-left mb-8 space-y-3">
                  {[
                    "✅ Acceso inmediato al eBook completo",
                    "✅ Lectura en cualquier dispositivo",
                    "✅ Contenido directo y visual",
                    "✅ Garantía de 7 días"
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
                  <span className="relative">ASEGURAR MI PLAZA</span>
                </a>

                <p className="text-sm text-gray-600 mt-4 flex items-center justify-center gap-2">
                  <span className="text-green-500">🔒</span>
                  Pago 100% seguro vía Hotmart
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Comienza tu transformación hoy
          </h2>

          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
            La claridad mental que buscas está a un clic de distancia. Inversión mínima, impacto máximo en cómo entiendes y transformas tu vida.
          </p>

          <div className="inline-flex flex-col items-center gap-6 p-8 bg-white rounded-2xl border-2 border-blue-300 shadow-2xl shadow-blue-200/40">
            <div className="space-y-2">
              <p className="text-gray-600 line-through text-xl">U$ 49.90</p>
              <p className="text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                U$ 29.90
              </p>
              <p className="text-sm text-gray-600">Oferta de lanzamiento por tiempo limitado</p>
            </div>

            <a
              href="https://pay.hotmart.com/E103440064H?checkoutMode=10"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block px-16 py-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-2xl rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">COMENZAR AHORA</span>
            </a>

            <p className="text-sm text-gray-600 flex items-center gap-2">
              <span className="text-green-500">🔒</span>
              Pago seguro • Acceso inmediato • Garantía de 7 días
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-white to-green-50/30">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-100/20 to-transparent"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-green-300 rounded-full bg-white shadow-lg shadow-green-200/50">
            <span className="text-2xl">🛡️</span>
            <span className="text-green-600 font-bold">GARANTÍA TOTAL</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black mb-8 bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">
            Garantía Incondicional de 7 Días
          </h2>

          <div className="p-8 rounded-2xl bg-white border-2 border-green-200 shadow-xl shadow-green-200/30">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Si por cualquier motivo no quedas satisfecho, devolvemos <span className="text-green-600 font-bold">el 100% de tu inversión</span>. Sin preguntas, sin burocracia.
            </p>
            <p className="text-lg text-gray-600">
              No tienes nada que perder. <span className="text-blue-600 font-bold">Todo el riesgo es nuestro.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 bg-gray-50 border-t border-gray-200">
        <div className="relative max-w-4xl mx-auto text-center text-gray-600">
          <p className="mb-4">© 2026 La Regla de la Vida. Todos los derechos reservados.</p>
          <p className="text-sm">Este sitio no forma parte de Facebook o Meta. No estamos afiliados a Facebook de ninguna manera.</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
