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
    ? "bg-transparent border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
    : "bg-transparent border-2 border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.5)]";

  return (
    <div className={`flex items-center justify-center gap-2 py-4 px-6 ${colorClasses} backdrop-blur-sm rounded-lg animate-fade-in`}>
      <div className="relative">
        <Eye className={`w-5 h-5 animate-pulse ${color === "blue" ? "text-blue-500" : "text-yellow-500"}`} />
        <span className={`absolute -top-1 -right-1 w-2 h-2 rounded-full animate-pulse ${color === "blue" ? "bg-blue-400" : "bg-yellow-400"}`}></span>
      </div>
      <p className={`text-sm font-semibold ${color === "blue" ? "text-blue-500" : "text-yellow-500"}`}>
        <span className={`font-bold text-lg ${color === "blue" ? "text-blue-500" : "text-yellow-500"}`}>{viewers}</span> {text}
      </p>
    </div>
  );
};

export default LiveViewers;
