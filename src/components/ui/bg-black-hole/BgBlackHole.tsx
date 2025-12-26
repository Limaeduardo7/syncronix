import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface BgBlackHoleProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Intensidade da animação (velocidade)
   * @default 1
   */
  intensity?: number;
  
  /**
   * Tamanho do buraco negro
   * @default "md"
   */
  size?: "sm" | "md" | "lg" | "xl";
  
  /**
   * Cor do buraco negro
   * @default "purple"
   */
  color?: "purple" | "blue" | "violet" | "indigo" | "pink";
  
  /**
   * Mostrar partículas
   * @default true
   */
  showParticles?: boolean;
  
  /**
   * Opacidade do background
   * @default 0.5
   */
  opacity?: number;
}

const sizeMap = {
  sm: "200px",
  md: "400px",
  lg: "600px",
  xl: "800px",
};

const colorMap = {
  purple: {
    gradient: "from-purple-900 via-purple-800 to-black",
    glow: "rgba(168, 85, 247, 0.3)",
    particle: "rgba(168, 85, 247, 0.6)",
  },
  blue: {
    gradient: "from-blue-900 via-blue-800 to-black",
    glow: "rgba(59, 130, 246, 0.3)",
    particle: "rgba(59, 130, 246, 0.6)",
  },
  violet: {
    gradient: "from-violet-900 via-violet-800 to-black",
    glow: "rgba(139, 92, 246, 0.3)",
    particle: "rgba(139, 92, 246, 0.6)",
  },
  indigo: {
    gradient: "from-indigo-900 via-indigo-800 to-black",
    glow: "rgba(99, 102, 241, 0.3)",
    particle: "rgba(99, 102, 241, 0.6)",
  },
  pink: {
    gradient: "from-pink-900 via-pink-800 to-black",
    glow: "rgba(236, 72, 153, 0.3)",
    particle: "rgba(236, 72, 153, 0.6)",
  },
};

const BgBlackHole = React.forwardRef<HTMLDivElement, BgBlackHoleProps>(
  (
    {
      className,
      intensity = 1,
      size = "md",
      color = "purple",
      showParticles = true,
      opacity = 0.5,
      ...props
    },
    ref
  ) => {
    const sizeValue = sizeMap[size];
    const colorConfig = colorMap[color];
    const [particles, setParticles] = React.useState<Array<{ id: number; x: number; y: number; delay: number; size: number }>>([]);

    React.useEffect(() => {
      if (showParticles) {
        const particleCount = size === "sm" ? 30 : size === "md" ? 50 : size === "lg" ? 70 : 100;
        const newParticles = Array.from({ length: particleCount }, (_, i) => ({
          id: i,
          x: (Math.random() - 0.5) * 200,
          y: (Math.random() - 0.5) * 200,
          delay: Math.random() * 2,
          size: Math.random() * 3 + 1,
        }));
        setParticles(newParticles);
      }
    }, [size, showParticles]);

    const rotationSpeed = 20 * intensity;
    const scaleSpeed = 0.5 * intensity;

    return (
      <div
        ref={ref}
        className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
        style={{ opacity }}
        {...props}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Black Hole Core */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: sizeValue,
              height: sizeValue,
              background: `radial-gradient(circle, transparent 0%, ${colorConfig.glow} 30%, rgba(0, 0, 0, 0.8) 60%, black 100%)`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: {
                duration: rotationSpeed,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: scaleSpeed,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            {/* Inner Core */}
            <div
              className="absolute inset-[20%] rounded-full bg-black"
              style={{
                boxShadow: `inset 0 0 ${parseInt(sizeValue) * 0.3}px ${colorConfig.glow}`,
              }}
            />
          </motion.div>

          {/* Spiral Rings */}
          {[1, 2, 3].map((ring) => (
            <motion.div
              key={ring}
              className="absolute rounded-full"
              style={{
                width: `${parseInt(sizeValue) * (1 + ring * 0.3)}px`,
                height: `${parseInt(sizeValue) * (1 + ring * 0.3)}px`,
                background: `conic-gradient(from ${ring * 120}deg, transparent, ${colorConfig.particle}, transparent)`,
                padding: "2px",
                opacity: 0.3 / ring,
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
              animate={{
                rotate: [0, -360],
                scale: [1, 1.05, 1],
              }}
              transition={{
                rotate: {
                  duration: rotationSpeed * (1 + ring * 0.5),
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: scaleSpeed * 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <div className="w-full h-full rounded-full bg-black" />
            </motion.div>
          ))}

          {/* Particles */}
          {showParticles &&
            particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute rounded-full"
                style={{
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  backgroundColor: colorConfig.particle,
                  left: "50%",
                  top: "50%",
                  boxShadow: `0 0 ${particle.size * 2}px ${colorConfig.particle}`,
                }}
                animate={{
                  x: [particle.x * 10, 0, particle.x * 10],
                  y: [particle.y * 10, 0, particle.y * 10],
                  scale: [1, 0, 1],
                  opacity: [0.8, 0, 0.8],
                }}
                transition={{
                  duration: 3 / intensity + particle.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: particle.delay,
                }}
              />
            ))}

          {/* Glow Effect */}
          <div
            className="absolute rounded-full blur-3xl opacity-30"
            style={{
              width: `${parseInt(sizeValue) * 1.5}px`,
              height: `${parseInt(sizeValue) * 1.5}px`,
              background: `radial-gradient(circle, ${colorConfig.glow} 0%, transparent 70%)`,
            }}
          />
        </div>
      </div>
    );
  }
);

BgBlackHole.displayName = "BgBlackHole";

export { BgBlackHole };

