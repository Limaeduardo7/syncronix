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
              src="/mockup-ebook-english.png"
              alt="The Key to Power - eBook"
              className="w-full max-w-md animate-float drop-shadow-2xl relative z-10"
            />
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-up delay-200">
            <h2 className="text-4xl md:text-5xl font-black text-white text-center" style={{ textShadow: '0 0 40px rgba(255, 255, 255, 0.8), 0 0 80px rgba(255, 255, 255, 0.6), 0 0 120px rgba(255, 255, 255, 0.4)' }}>
              THE KEY TO POWER
            </h2>

            <div className="flex items-center justify-center gap-3 text-primary">
              <MessageCircle className="w-6 h-6" />
              <span className="font-semibold text-lg">24/7 SUPPORT</span>
            </div>

            <div className="glass-card p-6 space-y-4">
              <p className="text-lg text-foreground/90 leading-relaxed text-center">
                Inside this eBook you will find a <span className="neon-text font-bold">compendium of knowledge</span> both ancient and modern.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed text-center">
                A true <span className="neon-text font-bold">alchemy of wisdom</span>, condensed into{" "}
                <span className="font-bold neon-text">351 pages</span>, created
                to teach you how to <span className="neon-text font-bold">consciously shape your destiny</span>.
              </p>
            </div>

            {/* CTA Button */}
            <div className="text-center pt-6 animate-fade-up delay-300">
              <a
                href="https://pay.hotmart.com/H98004318H?off=dxizckv8&checkoutMode=10&bid=1766356727625"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-5 bg-primary text-primary-foreground font-bold text-xl rounded-lg border-2 border-primary animate-pulse-glow transition-all duration-300 transform hover:scale-105 cta-button"
              >
                I WANT TO TRANSFORM MY LIFE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EbookPresentation;
