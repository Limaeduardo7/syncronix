import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

interface LiveViewersProps {
  text: string;
}

const LiveViewers = ({ text }: LiveViewersProps) => {
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

  return (
    <div className="flex items-center justify-center gap-2 py-4 px-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-lg border border-purple-500/20 shadow-lg animate-fade-in">
      <div className="relative">
        <Eye className="w-5 h-5 text-purple-400 animate-pulse" />
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
      </div>
      <p className="text-sm font-semibold text-white">
        <span className="text-purple-400 font-bold text-lg">{viewers}</span> {text}
      </p>
    </div>
  );
};

export default LiveViewers;
