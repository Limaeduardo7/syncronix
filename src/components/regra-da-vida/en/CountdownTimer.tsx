import { useEffect, useState } from "react";

const CountdownTimer = () => {
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
      <div
        className="inline-block bg-red-600 rounded-2xl border-4 border-red-700 px-6 py-4 md:px-16 md:py-6 min-w-[300px] md:min-w-[520px] animate-pulse-glow-red"
      >
        <p className="text-xs md:text-sm text-white font-bold uppercase tracking-wider mb-3 md:mb-4 drop-shadow-lg">
          ⚠️ This offer ends in:
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
            <span className="text-xs text-white/90 font-semibold uppercase mt-0.5 block">Sec</span>
          </div>
        </div>
        {isExpired && (
          <div className="mt-3 md:mt-4">
            <p className="text-sm md:text-base text-white font-bold animate-pulse mb-2">
              ⏰ TIME EXPIRED!
            </p>
            <p className="text-xs md:text-sm text-white/95 font-semibold">
              This is your last chance, it's now or never!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountdownTimer;
