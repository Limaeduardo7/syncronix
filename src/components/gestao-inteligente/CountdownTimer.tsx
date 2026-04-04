import { useEffect, useState } from "react";

type CountdownTimerProps = {
  offerEndsText?: string;
  minutesLabel?: string;
  secondsLabel?: string;
  expiredTitle?: string;
  expiredDescription?: string;
};

const CountdownTimer = ({
  offerEndsText = "Esta oferta termina em:",
  minutesLabel = "Min",
  secondsLabel = "Seg",
  expiredTitle = "TEMPO ESGOTADO!",
  expiredDescription = "Essa e a sua ultima chance, e agora ou nunca!",
}: CountdownTimerProps) => {
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
    <div className="mb-8 md:mb-12 animate-fade-in">
      <div className="inline-block min-w-[300px] rounded-2xl border-4 border-red-500 bg-red-600 px-6 py-4 md:min-w-[520px] md:px-16 md:py-6">
        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-white drop-shadow-lg md:mb-4 md:text-sm">
          {offerEndsText}
        </p>
        <div className="flex items-center justify-center gap-2 md:gap-3">
          <div
            className="min-w-[80px] rounded-xl border-2 border-white/50 bg-white/20 px-3 py-2 backdrop-blur-sm md:min-w-[110px] md:px-6 md:py-4"
            style={{
              boxShadow:
                "0 0 20px rgba(255, 255, 255, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.15)",
              animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            }}
          >
            <span className="block text-3xl font-black text-white drop-shadow-lg md:text-4xl">
              {formatNumber(timeLeft.minutes)}
            </span>
            <span className="mt-0.5 block text-xs font-semibold uppercase text-white/90">
              {minutesLabel}
            </span>
          </div>
          <span className="animate-pulse text-2xl font-black text-white drop-shadow-lg md:text-3xl">
            :
          </span>
          <div
            className="min-w-[80px] rounded-xl border-2 border-white/50 bg-white/20 px-3 py-2 backdrop-blur-sm md:min-w-[110px] md:px-6 md:py-4"
            style={{
              boxShadow:
                "0 0 20px rgba(255, 255, 255, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.15)",
              animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            }}
          >
            <span className="block text-3xl font-black text-white drop-shadow-lg md:text-4xl">
              {formatNumber(timeLeft.seconds)}
            </span>
            <span className="mt-0.5 block text-xs font-semibold uppercase text-white/90">
              {secondsLabel}
            </span>
          </div>
        </div>
        {isExpired && (
          <div className="mt-3 md:mt-4">
            <p className="mb-2 text-sm font-bold text-white animate-pulse md:text-base">
              {expiredTitle}
            </p>
            <p className="text-xs font-semibold text-white/95 md:text-sm">
              {expiredDescription}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountdownTimer;
