import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

const SplitText = ({
  text,
  className = "",
  delay = 0.03,
  duration = 0.4,
}: SplitTextProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const words = text.split(" ");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delay,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration, ease: "easeOut" },
    },
  };

  return (
    <motion.span
      ref={ref}
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {words.map((word, i) => (
        <motion.span key={i} className="inline-block mr-[0.3em]" variants={child}>
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default SplitText;
