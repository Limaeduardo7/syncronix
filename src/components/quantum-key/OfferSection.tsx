import { Check, CreditCard, ShieldCheck, Clock, Download } from "lucide-react";

const OfferSection = () => {
  return (
    <section id="oferta" className="section-padding bg-black relative overflow-hidden">

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* eBook Mockup */}
          <div className="flex justify-center animate-fade-up">
            <img
              src="/mockup-3-ebook-black.webp"
              alt="A Chave do Poder - eBook"
              className="w-full max-w-md animate-float drop-shadow-2xl rounded-3xl"
            />
          </div>

          {/* Pricing Card */}
          <div className="glass-card p-8 md:p-12 neon-border text-center animate-fade-up delay-200">
            {/* Title */}
            <div className="animate-fade-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                <span className="neon-text">Don't waste time!</span>
              </h2>
              <p className="text-xl md:text-2xl font-semibold mb-8">
                The <span className="neon-text font-bold">Key</span> is in <span className="neon-text font-bold">your hands</span>.
              </p>
            </div>

            {/* Pricing */}
            <div className="mb-8 space-y-3 animate-fade-up delay-100">
              <p className="text-red-600 line-through text-2xl md:text-3xl font-black">
                R$97.50
              </p>
              <p className="text-lg font-semibold">for only</p>
              <p className="text-5xl md:text-6xl font-black neon-text">
                R$59.90
              </p>
              <p className="text-lg font-semibold">cash</p>
              <p className="text-base text-muted-foreground">or</p>
              <p className="text-xl font-bold text-foreground">
                5x of R$8.71
              </p>
            </div>

            {/* CTA */}
            <div className="animate-fade-up delay-300">
              <a
                href="https://pay.hotmart.com/K94845555H?checkoutMode=10&bid=1764616750183&xcod=usr_wyyignla1765398604552&sck=direto%7Cdireto%7Cdireto%7Cdireto%7Cdireto&_hi=eyJzaWQiOiI5NWFhOGYxNDVjYzQ0Y2U5YmM2MDAyZGM4ZDY5ZjFiYyJ9.1765642145790"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full md:w-auto px-12 py-5 bg-primary text-primary-foreground font-bold text-xl rounded-lg border-2 border-primary animate-pulse-glow transition-all duration-300 transform hover:scale-105 cta-button"
              >
                BUY NOW
              </a>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-4 mt-8 text-sm text-muted-foreground animate-fade-up delay-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span>Secure purchase</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-primary" />
                <span>Easy payment</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5 text-primary" />
                <span>Instant access</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>7-day guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
