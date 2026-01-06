import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

interface LiveViewersProps {
  text: string;
  color?: "yellow" | "blue";
}

const LiveViewers = ({ text, color = "yellow" }: LiveViewersProps) => {
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

  const colorClasses = color === "blue"
    ? "bg-gradient-to-r from-blue-500/70 to-blue-600/70 border-blue-400/80"
    : "bg-gradient-to-r from-yellow-500/70 to-yellow-600/70 border-yellow-400/80";

  return (
    <div className={`flex items-center justify-center gap-2 py-4 px-6 ${colorClasses} backdrop-blur-md rounded-lg shadow-lg animate-fade-in`}>
      <div className="relative">
        <Eye className="w-5 h-5 text-white animate-pulse" />
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-pulse"></span>
      </div>
      <p className="text-sm font-semibold text-white">
        <span className="text-white font-bold text-lg">{viewers}</span> {text}
      </p>
    </div>
  );
};

export default LiveViewers;
