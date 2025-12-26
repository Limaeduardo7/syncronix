import { Check, CreditCard, ShieldCheck, Clock, Download } from "lucide-react";

const OfferSection = () => {
  return (
    <section id="oferta" className="section-padding bg-black relative overflow-hidden">

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* eBook Mockup */}
          <div className="flex justify-center animate-fade-up">
            <img
              src="/mockup-offer-english.png"
              alt="The Key to Power - eBook"
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
              <span className="text-sm text-muted-foreground">(7,986 reviews)</span>
            </div>

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
                $39.90
              </p>
              <p className="text-lg font-semibold">for only</p>
              <p className="text-5xl md:text-6xl font-black neon-text">
                $19.90
              </p>
              <p className="text-lg font-semibold">cash payment</p>
            </div>

            {/* CTA */}
            <div className="animate-fade-up delay-300">
              <a
                href="https://pay.hotmart.com/H98004318H?off=dxizckv8&checkoutMode=10&bid=1766356727625"
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
