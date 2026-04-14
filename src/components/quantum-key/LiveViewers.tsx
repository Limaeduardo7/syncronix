import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

interface LiveViewersProps {
  text: string;
  color?: "yellow" | "blue" | "purple" | "pink" | "slate";
  variant?: "default" | "hero";
  liveLabel?: string;
}

const LiveViewers = ({ text, color = "yellow", variant = "default", liveLabel = "ao vivo" }: LiveViewersProps) => {
  const [viewers, setViewers] = useState(Math.floor(Math.random() * 20) + 80); // Random between 80-100

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly increase or decrease viewers by 1-3
      const change = Math.floor(Math.random() * 3) + 1;
      const direction = Math.random() > 0.5 ? 1 : -1;

      setViewers((prev) => {
        const newValue = prev + (change * direction);
        // Keep between 75 and 120
        return Math.max(75, Math.min(120, newValue));
      });
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const getColorClasses = () => {
    switch (color) {
      case "blue":
        return "bg-transparent border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]";
      case "purple":
        return "bg-transparent border-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]";
      case "pink":
        return "bg-transparent border-2 border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.5)]";
      case "slate":
        return "bg-transparent border-2 border-slate-700 shadow-[0_0_15px_rgba(51,65,85,0.5)]";
      default:
        return "bg-transparent border-2 border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.5)]";
    }
  };

  const getIconColor = () => {
    switch (color) {
      case "blue": return "text-blue-500";
      case "purple": return "text-purple-500";
      case "pink": return "text-pink-500";
      case "slate": return "text-slate-700";
      default: return "text-yellow-500";
    }
  };

  const getDotColor = () => {
    switch (color) {
      case "blue": return "bg-blue-400";
      case "purple": return "bg-purple-400";
      case "pink": return "bg-pink-400";
      case "slate": return "bg-slate-400";
      default: return "bg-yellow-400";
    }
  };

  const getContainerClasses = () => {
    if (variant === "hero") {
      return "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-md transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]";
    }

    return `flex items-center justify-center gap-2 rounded-lg py-4 px-6 ${getColorClasses()} backdrop-blur-sm animate-fade-in`;
  };

  const getTextClasses = () => {
    if (variant === "hero") {
      return "text-left leading-tight";
    }

    return `text-sm font-semibold ${getIconColor()}`;
  };

  const getCountClasses = () => {
    if (variant === "hero") {
      return "text-lg font-black tracking-tight text-white md:text-xl";
    }

    return `font-bold text-lg ${getIconColor()}`;
  };

  return (
    <div className={getContainerClasses()}>
      {variant === "hero" && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/[0.03] via-transparent to-transparent opacity-70" />
      )}
      <div className={variant === "hero" ? "relative mr-3 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/25" : "relative"}>
        <Eye className={`w-5 h-5 animate-pulse ${getIconColor()}`} />
        <span className={`absolute ${variant === "hero" ? "right-2 top-2" : "-top-1 -right-1"} h-2 w-2 rounded-full animate-pulse ${getDotColor()}`}></span>
      </div>
      {variant === "hero" ? (
        <div className={getTextClasses()}>
          <div className="flex items-baseline gap-2">
            <span className={getCountClasses()}>{viewers}</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-purple-300/80">
              {liveLabel}
            </span>
          </div>
          <p className="mt-0.5 text-sm font-medium text-slate-300 md:text-[15px]">{text}</p>
        </div>
      ) : (
        <p className={getTextClasses()}>
          <span className={getCountClasses()}>{viewers}</span>
          {text}
        </p>
      )}
    </div>
  );
};

export default LiveViewers;
