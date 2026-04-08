import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

interface LiveViewersProps {
  text: string;
  color?: "yellow" | "blue" | "purple" | "pink" | "slate";
  variant?: "default" | "hero";
}

const LiveViewers = ({ text, color = "yellow", variant = "default" }: LiveViewersProps) => {
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
      return `group relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 px-5 py-3 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 ${getColorClasses()}`;
    }

    return `flex items-center justify-center gap-2 rounded-lg py-4 px-6 ${getColorClasses()} backdrop-blur-sm animate-fade-in`;
  };

  const getTextClasses = () => {
    if (variant === "hero") {
      return `text-sm md:text-[15px] font-medium tracking-[0.01em] ${getIconColor()}`;
    }

    return `text-sm font-semibold ${getIconColor()}`;
  };

  const getCountClasses = () => {
    if (variant === "hero") {
      return `mr-1 inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-base font-black text-white shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]`;
    }

    return `font-bold text-lg ${getIconColor()}`;
  };

  return (
    <div className={getContainerClasses()}>
      {variant === "hero" && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent opacity-60" />
      )}
      <div className={`relative ${variant === "hero" ? "mr-1" : ""}`}>
        <Eye className={`w-5 h-5 animate-pulse ${getIconColor()}`} />
        <span className={`absolute -top-1 -right-1 w-2 h-2 rounded-full animate-pulse ${getDotColor()}`}></span>
      </div>
      <p className={getTextClasses()}>
        <span className={getCountClasses()}>{viewers}</span>
        {text}
      </p>
    </div>
  );
};

export default LiveViewers;
