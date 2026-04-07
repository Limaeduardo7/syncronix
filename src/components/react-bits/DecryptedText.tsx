import { useEffect, useRef, useState } from "react";

interface DecryptedTextProps {
  text: string;
  className?: string;
  speed?: number;
  revealDirection?: "start" | "end" | "center";
  parentClassName?: string;
  animateOn?: "view" | "hover";
}

const DecryptedText = ({
  text,
  className = "",
  speed = 60,
  revealDirection = "start",
  parentClassName = "",
  animateOn = "view",
}: DecryptedTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";

  const animate = () => {
    if (hasAnimated && animateOn === "view") return;
    setHasAnimated(true);
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, idx) => {
            if (char === " ") return " ";
            const revealIdx =
              revealDirection === "end" ? text.length - 1 - idx : idx;
            if (revealIdx < iteration) return text[idx];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 0.5;
    }, speed);
  };

  useEffect(() => {
    if (animateOn !== "view") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) animate();
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span
      ref={ref}
      className={parentClassName}
      onMouseEnter={animateOn === "hover" ? animate : undefined}
    >
      <span className={`font-mono ${className}`}>{displayText}</span>
    </span>
  );
};

export default DecryptedText;
