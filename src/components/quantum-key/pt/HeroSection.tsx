import { useEffect, useState } from "react";
import { Volume2 } from "lucide-react";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 15, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.minutes === 0 && prev.seconds === 0) {
          setIsExpired(true);
          clearInterval(timer);
          return prev;
        }
        if (prev.seconds === 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <>
      {/* Main Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden py-20 pt-6 md:pt-10">

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">

        {/* Countdown Card */}
        <div className="mb-8 md:mb-12 animate-fade-in">
          <div
            className="inline-block bg-red-600 rounded-2xl border-4 border-red-700 px-6 py-4 md:px-16 md:py-6 min-w-[300px] md:min-w-[520px] animate-pulse-glow-red"
          >
            <p className="text-xs md:text-sm text-white font-bold uppercase tracking-wider mb-3 md:mb-4 drop-shadow-lg">
              ⚠️ Esta oferta termina em:
            </p>
            <div className="flex items-center justify-center gap-2 md:gap-3">
              <div
                className="bg-white/20 backdrop-blur-sm px-3 md:px-6 py-2 md:py-4 rounded-xl border-2 border-white/50 min-w-[80px] md:min-w-[110px]"
                style={{
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.15)',
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                }}
              >
                <span className="text-3xl md:text-4xl font-black text-white drop-shadow-lg block">
                  {formatNumber(timeLeft.minutes)}
                </span>
                <span className="text-xs text-white/90 font-semibold uppercase mt-0.5 block">Min</span>
              </div>
              <span className="text-2xl md:text-3xl text-white font-black drop-shadow-lg animate-pulse">:</span>
              <div
                className="bg-white/20 backdrop-blur-sm px-3 md:px-6 py-2 md:py-4 rounded-xl border-2 border-white/50 min-w-[80px] md:min-w-[110px]"
                style={{
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.15)',
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                }}
              >
                <span className="text-3xl md:text-4xl font-black text-white drop-shadow-lg block">
                  {formatNumber(timeLeft.seconds)}
                </span>
                <span className="text-xs text-white/90 font-semibold uppercase mt-0.5 block">Seg</span>
              </div>
            </div>
            {isExpired && (
              <div className="mt-3 md:mt-4">
                <p className="text-sm md:text-base text-white font-bold animate-pulse mb-2">
                  ⏰ TEMPO ESGOTADO!
                </p>
                <p className="text-xs md:text-sm text-white/95 font-semibold">
                  Essa é a sua última chance, é agora ou nunca!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Branding */}
        <div className="flex justify-center mb-6 animate-fade-in delay-100">
          <img
            src="/HEXACRONIX-ADESIVO-300x300.webp"
            alt="HEXACRONIX"
            className="h-32 md:h-40 w-auto"
          />
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 md:mb-6 animate-fade-up whitespace-nowrap text-white" style={{ textShadow: '0 0 40px rgba(255, 255, 255, 0.8), 0 0 80px rgba(255, 255, 255, 0.6), 0 0 120px rgba(255, 255, 255, 0.4)' }}>
          A CHAVE DO PODER
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-2xl text-foreground/80 italic mb-8 md:mb-12 animate-fade-up delay-200">
          A verdade que <span className="neon-text font-bold">jamais</span> te contaram.
        </p>

        {/* Video Player */}
        <div className="space-y-3 md:space-y-4 animate-fade-up delay-400">
          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden neon-border">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dVzyJgQyE14"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0"
            />
          </div>

          <p className="flex items-center justify-center gap-2 text-xs md:text-sm text-muted-foreground px-4">
            <Volume2 className="w-4 h-4 flex-shrink-0" />
            <span>Ative o volume e aumente a qualidade do vídeo para a melhor experiência.</span>
          </p>

          {/* CTA Button */}
          <div className="mt-8 md:mt-10 flex justify-center animate-fade-up delay-500">
            <a
              href="#oferta"
              className="inline-block px-12 py-5 bg-primary text-primary-foreground font-bold text-xl rounded-lg border-2 border-primary animate-pulse-glow transition-all duration-300 transform hover:scale-105 cta-button"
            >
              QUERO TRANSFORMAR MINHA VIDA AGORA
            </a>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default HeroSection;
