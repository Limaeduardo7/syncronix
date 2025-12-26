import { MessageCircle } from "lucide-react";

const EbookPresentation = () => {
  return (
    <section className="section-padding bg-black relative overflow-hidden">

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* eBook Mockup */}
          <div className="flex justify-center animate-fade-up relative">
            {/* GIF Background */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-3xl">
              <img
                src="/11e071c9c0f8b83dbd54038e6b12e99a.gif"
                alt="Fire background"
                className="w-full h-full object-cover opacity-60 scale-110 rounded-3xl"
              />
            </div>

            {/* Book Image */}
            <img
              src="/capa-ebook-spanish.png"
              alt="La Clave del Poder - eBook"
              className="w-full max-w-md animate-float drop-shadow-2xl relative z-10"
            />
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-up delay-200">
            <h2 className="text-4xl md:text-5xl font-black text-white text-center" style={{ textShadow: '0 0 40px rgba(255, 255, 255, 0.8), 0 0 80px rgba(255, 255, 255, 0.6), 0 0 120px rgba(255, 255, 255, 0.4)' }}>
              LA CLAVE DEL PODER
            </h2>

            <div className="flex items-center justify-center gap-3 text-primary">
              <MessageCircle className="w-6 h-6" />
              <span className="font-semibold text-lg">SOPORTE 24H</span>
            </div>

            <div className="glass-card p-6 space-y-4">
              <p className="text-lg text-foreground/90 leading-relaxed text-center">
                Dentro de este eBook encontrarás un <span className="neon-text font-bold">compendio de conocimientos</span> antiguos y modernos.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed text-center">
                Una verdadera <span className="neon-text font-bold">alquimia de saberes</span>, condensada en{" "}
                <span className="font-bold neon-text">351 páginas</span>, creada
                para enseñarte a <span className="neon-text font-bold">moldear tu destino conscientemente</span>.
              </p>
            </div>

            {/* CTA Button */}
            <div className="text-center pt-6 animate-fade-up delay-300">
              <a
                href="https://pay.hotmart.com/Q97114057B?checkoutMode=10&bid=1766356135373"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-5 bg-primary text-primary-foreground font-bold text-xl rounded-lg border-2 border-primary animate-pulse-glow transition-all duration-300 transform hover:scale-105 cta-button"
              >
                QUIERO TRANSFORMAR MI VIDA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EbookPresentation;
