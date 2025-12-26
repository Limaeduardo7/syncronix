import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CosmicPortalProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Tamanho do portal
   * @default "md"
   */
  size?: "sm" | "md" | "lg" | "xl";
  
  /**
   * Cor do portal
   * @default "violet"
   */
  color?: "violet" | "blue" | "cyan" | "purple" | "pink" | "indigo";
  
  /**
   * Velocidade da animação (em segundos)
   * @default 10
   */
  speed?: number;
  
  /**
   * Conteúdo a ser exibido dentro do portal
   */
  children?: React.ReactNode;
  
  /**
   * Mostrar partículas
   * @default true
   */
  showParticles?: boolean;
  
  /**
   * Mostrar brilho
   * @default true
   */
  showGlow?: boolean;
}

const sizeMap = {
  sm: { width: "200px", height: "200px" },
  md: { width: "300px", height: "300px" },
  lg: { width: "400px", height: "400px" },
  xl: { width: "500px", height: "500px" },
};

const colorMap = {
  violet: {
    from: "rgb(139, 92, 246)", // violet-500
    via: "rgb(168, 85, 247)", // purple-500
    to: "rgb(217, 70, 239)", // fuchsia-500
    glow: "rgba(139, 92, 246, 0.5)",
  },
  blue: {
    from: "rgb(59, 130, 246)", // blue-500
    via: "rgb(6, 182, 212)", // cyan-500
    to: "rgb(14, 165, 233)", // sky-500
    glow: "rgba(59, 130, 246, 0.5)",
  },
  cyan: {
    from: "rgb(6, 182, 212)", // cyan-500
    via: "rgb(59, 130, 246)", // blue-500
    to: "rgb(20, 184, 166)", // teal-500
    glow: "rgba(6, 182, 212, 0.5)",
  },
  purple: {
    from: "rgb(168, 85, 247)", // purple-500
    via: "rgb(139, 92, 246)", // violet-500
    to: "rgb(236, 72, 153)", // pink-500
    glow: "rgba(168, 85, 247, 0.5)",
  },
  pink: {
    from: "rgb(236, 72, 153)", // pink-500
    via: "rgb(244, 63, 94)", // rose-500
    to: "rgb(217, 70, 239)", // fuchsia-500
    glow: "rgba(236, 72, 153, 0.5)",
  },
  indigo: {
    from: "rgb(99, 102, 241)", // indigo-500
    via: "rgb(59, 130, 246)", // blue-500
    to: "rgb(139, 92, 246)", // violet-500
    glow: "rgba(99, 102, 241, 0.5)",
  },
};

const CosmicPortal = React.forwardRef<HTMLDivElement, CosmicPortalProps>(
  (
    {
      className,
      size = "md",
      color = "violet",
      speed = 10,
      children,
      showParticles = true,
      showGlow = true,
      ...props
    },
    ref
  ) => {
    const sizeConfig = sizeMap[size];
    const colorConfig = colorMap[color];
    const [particles, setParticles] = React.useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

    React.useEffect(() => {
      if (showParticles) {
        const particleCount = size === "sm" ? 20 : size === "md" ? 30 : size === "lg" ? 40 : 50;
        const newParticles = Array.from({ length: particleCount }, (_, i) => ({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * speed,
        }));
        setParticles(newParticles);
      }
    }, [size, showParticles, speed]);

    return (
      <div
        ref={ref}
        className={cn("relative flex items-center justify-center", className)}
        style={{
          width: sizeConfig.width,
          height: sizeConfig.height,
          perspective: "1000px",
        }}
        {...props}
      >
        {/* Portal Container */}
        <motion.div
          className="relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateY: [0, 360],
          }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Portal Ring - Outer */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(from 0deg, ${colorConfig.from}, ${colorConfig.via}, ${colorConfig.to}, ${colorConfig.from})`,
              padding: "4px",
            }}
          >
            <div className="w-full h-full rounded-full bg-black" />
          </div>

          {/* Portal Ring - Middle */}
          <motion.div
            className="absolute inset-[15%] rounded-full"
            style={{
              background: `conic-gradient(from 180deg, ${colorConfig.to}, ${colorConfig.via}, ${colorConfig.from}, ${colorConfig.to})`,
              padding: "2px",
            }}
            animate={{
              rotate: [0, -360],
            }}
            transition={{
              duration: speed * 0.7,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-full h-full rounded-full bg-black" />
          </motion.div>

          {/* Portal Core */}
          <div
            className="absolute inset-[25%] rounded-full backdrop-blur-sm"
            style={{
              background: "radial-gradient(circle, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 50%, transparent 100%)",
            }}
          >
            {/* Portal Depth Effect */}
            <motion.div
              className="absolute inset-[10%] rounded-full opacity-20"
              style={{
                background: `radial-gradient(circle, ${colorConfig.from} 0%, ${colorConfig.via} 50%, ${colorConfig.to} 100%)`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: speed * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Particles */}
          {showParticles &&
            particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute rounded-full bg-white/60 blur-sm"
                style={{
                  width: "4px",
                  height: "4px",
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                animate={{
                  x: [
                    "0%",
                    `${(Math.random() - 0.5) * 200}%`,
                    "0%",
                  ],
                  y: [
                    "0%",
                    `${(Math.random() - 0.5) * 200}%`,
                    "0%",
                  ],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: speed * 0.8,
                  repeat: Infinity,
                  delay: particle.delay,
                  ease: "easeInOut",
                }}
              />
            ))}

          {/* Glow Effect */}
          {showGlow && (
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-50"
              style={{
                background: `radial-gradient(circle, ${colorConfig.glow} 0%, transparent 70%)`,
                transform: "translateZ(-50px)",
              }}
            />
          )}

          {/* Content */}
          {children && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="relative z-20">{children}</div>
            </div>
          )}
        </motion.div>
      </div>
    );
  }
);

CosmicPortal.displayName = "CosmicPortal";

export { CosmicPortal };

