import { useEffect, useRef, useState } from "react";

interface GlitchTextProps {
  children: string;
  className?: string;
  speed?: number;
  enableShadow?: boolean;
}

const GlitchText = ({
  children,
  className = "",
  speed = 50,
  enableShadow = true,
}: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState(children);
  const [isGlitching, setIsGlitching] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`01";

  const startGlitch = () => {
    if (isGlitching) return;
    setIsGlitching(true);
    let iteration = 0;

    intervalRef.current = setInterval(() => {
      setDisplayText(
        children
          .split("")
          .map((char, idx) => {
            if (idx < iteration) return children[idx];
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= children.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setIsGlitching(false);
      }
      iteration += 1 / 2;
    }, speed);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const shadowStyle = enableShadow
    ? {
        textShadow:
          "0 0 10px rgba(168,85,247,0.5), 0 0 40px rgba(6,182,212,0.3), 0 0 80px rgba(236,72,153,0.2)",
      }
    : {};

  return (
    <span
      className={`inline-block cursor-default ${className}`}
      style={shadowStyle}
      onMouseEnter={startGlitch}
    >
      {displayText}
    </span>
  );
};

export default GlitchText;
