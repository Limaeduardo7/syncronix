import { Check, CreditCard, ShieldCheck, Clock, Download } from "lucide-react";

const OfferSection = () => {
  return (
    <section id="oferta" className="section-padding bg-black relative overflow-hidden">

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* eBook Mockup */}
          <div className="flex justify-center animate-fade-up">
            <img
              src="/fisico/mockup-livro.jpg"
              alt="A Chave do Poder - Livro Físico"
              className="w-full max-w-md animate-float drop-shadow-2xl rounded-3xl"
            />
          </div>

          {/* Pricing Card */}
          <div className="glass-card p-8 md:p-12 neon-border text-center animate-fade-up delay-200 relative">
            {/* Best Seller Badge */}
            <div className="flex justify-center mb-6 animate-fade-up">
              <img
                src="/Best-Seller-PNG-Image.png"
                alt="Best Seller"
                className="w-28 h-28 md:w-36 md:h-36 object-contain"
              />
            </div>

            {/* Rating */}
            <div className="flex items-center justify-center gap-2 mb-6 animate-fade-up">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < 4 ? 'text-yellow-400' : 'text-yellow-400'}`}
                    fill={i < 4 || (i === 4) ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    strokeWidth={i === 4 ? '1.5' : '0'}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    {i === 4 && (
                      <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        fill="currentColor"
                        clipPath="inset(0 10% 0 0)"
                      />
                    )}
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold">4.9</span>
              <span className="text-sm text-muted-foreground">(7,986 avaliações)</span>
            </div>

            {/* Title */}
            <div className="animate-fade-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                <span className="neon-text">Não perca tempo!</span>
              </h2>
              <p className="text-xl md:text-2xl font-semibold mb-8">
                A <span className="neon-text font-bold">Chave</span> está em <span className="neon-text font-bold">suas mãos</span>.
              </p>
            </div>

            {/* Pricing */}
            <div className="mb-8 space-y-3 animate-fade-up delay-100">
              <p className="text-red-600 line-through text-2xl md:text-3xl font-black">
                R$197,00
              </p>
              <p className="text-lg font-semibold">por apenas</p>
              <p className="text-5xl md:text-6xl font-black neon-text">
                R$147,00
              </p>
              <p className="text-lg font-semibold">à vista</p>
              <p className="text-base text-muted-foreground">ou</p>
              <p className="text-xl font-bold text-foreground">
                12x de R$15,20
              </p>
            </div>

            {/* CTA */}
            <div className="animate-fade-up delay-300">
              <a
                href="https://pay.hotmart.com/W98592698K?off=w3j9j3jk&checkoutMode=10"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full md:w-auto px-12 py-5 bg-primary text-primary-foreground font-bold text-xl rounded-lg border-2 border-primary animate-pulse-glow transition-all duration-300 transform hover:scale-105 cta-button"
              >
                COMPRAR AGORA
              </a>
            </div>

            {/* WhatsApp Info */}
            <div className="mt-6 p-4 bg-yellow-900/20 border-2 border-yellow-600/50 rounded-lg animate-fade-up delay-400">
              <p className="text-sm md:text-base text-yellow-200 font-semibold mb-2">
                ⚠️ IMPORTANTE
              </p>
              <p className="text-xs md:text-sm text-foreground/90">
                Se você deseja adquirir o livro <span className="font-bold text-primary">COLORIDO</span> (R$247,00), entre em contato pelo WhatsApp.
              </p>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-4 mt-8 text-sm text-muted-foreground animate-fade-up delay-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span>Compra segura</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-primary" />
                <span>Pagamento fácil</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5 text-primary" />
                <span>Conteúdo exclusivo</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>Garantia de 7 dias</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
