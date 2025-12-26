import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  BOOK_SIZE_MAP,
  BOOK_COLOR_MAP,
  BOOK_RADIUS_MAP,
  BOOK_SHADOW_SIZE_MAP,
  type BookColor,
  type BookSize,
  type BookRadius,
} from "./index";

export interface BookProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: BookSize;
  color?: BookColor;
  radius?: BookRadius;
  shadowSize?: keyof typeof BOOK_SHADOW_SIZE_MAP;
  hasCoverImage?: boolean;
}

const Book = React.forwardRef<HTMLDivElement, BookProps>(
  ({ className, size = "md", color = "slate", radius = "md", shadowSize = "md", hasCoverImage = false, children, ...props }, ref) => {
    const sizeConfig = BOOK_SIZE_MAP[size];
    const colorConfig = BOOK_COLOR_MAP[color];
    const radiusClass = BOOK_RADIUS_MAP[radius];
    const shadowStyle = BOOK_SHADOW_SIZE_MAP[shadowSize];
    
    // Espessura do livro em pixels
    const bookThickness = 20;
    const bookHeight = 360;
    
    // Verifica se há uma imagem nos children ou se foi passada a prop
    const hasImage = React.useMemo(() => {
      if (hasCoverImage) return true;
      const childrenArray = React.Children.toArray(children);
      return childrenArray.some((child: any) => {
        if (React.isValidElement(child)) {
          const isImg = child.type === 'img';
          const hasSrc = child.props && typeof child.props === 'object' && 'src' in child.props;
          return isImg || hasSrc;
        }
        return false;
      });
    }, [children, hasCoverImage]);

    return (
      <div
        ref={ref}
        className={cn("relative flex items-center justify-center", className)}
        style={{ 
          width: sizeConfig.width,
          height: `${bookHeight}px`,
          perspective: "1200px",
          perspectiveOrigin: "center center",
        }}
        {...props}
      >
        <motion.div
          className="relative"
          style={{ 
            width: "100%",
            height: "100%",
            transformStyle: "preserve-3d",
            position: "relative",
          }}
          whileHover={{ rotateY: -20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Book Back Cover - Fica atrás */}
          <div
            className={cn(
              "absolute bg-gradient-to-br",
              colorConfig.to,
              colorConfig.from,
              radiusClass,
              "opacity-90"
            )}
            style={{
              width: "100%",
              height: "100%",
              transform: `translateZ(-${bookThickness}px)`,
              backfaceVisibility: "hidden",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
            }}
          />

          {/* Book Pages - Cria a espessura do livro */}
          {/* Lado direito (right edge) */}
          <div
            className="absolute bg-gradient-to-b from-white/20 via-white/10 to-white/20"
            style={{
              width: `${bookThickness}px`,
              height: "100%",
              right: "0",
              transform: `translateX(${bookThickness}px) translateZ(-${bookThickness / 2}px) rotateY(90deg)`,
              transformOrigin: "left center",
              backfaceVisibility: "hidden",
            }}
          />

          {/* Lado esquerdo (spine) */}
          <div
            className={cn(
              "absolute bg-gradient-to-b",
              colorConfig.to,
              colorConfig.from,
              "opacity-95"
            )}
            style={{
              width: `${bookThickness}px`,
              height: "100%",
              left: "0",
              transform: `translateX(-${bookThickness}px) translateZ(-${bookThickness / 2}px) rotateY(-90deg)`,
              transformOrigin: "right center",
              backfaceVisibility: "hidden",
            }}
          />

          {/* Top edge */}
          <div
            className="absolute bg-gradient-to-r from-white/10 via-white/5 to-white/10"
            style={{
              width: "100%",
              height: `${bookThickness}px`,
              top: "0",
              transform: `translateY(-${bookThickness}px) translateZ(-${bookThickness / 2}px) rotateX(90deg)`,
              transformOrigin: "center bottom",
              backfaceVisibility: "hidden",
            }}
          />

          {/* Bottom edge */}
          <div
            className="absolute bg-gradient-to-r from-white/10 via-white/5 to-white/10"
            style={{
              width: "100%",
              height: `${bookThickness}px`,
              bottom: "0",
              transform: `translateY(${bookThickness}px) translateZ(-${bookThickness / 2}px) rotateX(-90deg)`,
              transformOrigin: "center top",
              backfaceVisibility: "hidden",
            }}
          />

          {/* Book Front Cover - Fica na frente com conteúdo */}
          <div
            className={cn(
              radiusClass,
              "cursor-pointer shadow-2xl overflow-hidden",
              !hasImage && "bg-gradient-to-br",
              !hasImage && colorConfig.from,
              !hasImage && colorConfig.to
            )}
            style={{
              transform: `translateZ(${bookThickness / 2}px)`,
              boxShadow: shadowStyle.replace("var(--shadowColor)", "rgba(0, 0, 0, 0.4)"),
              backfaceVisibility: "hidden",
              border: hasImage ? "none" : "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            {hasImage ? (
              <div className="absolute inset-0 w-full h-full overflow-hidden rounded-lg" style={{ zIndex: 10 }}>
                {children}
              </div>
            ) : (
              <div className="relative w-full h-full flex flex-col text-white overflow-hidden">
                {children}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    );
  }
);
Book.displayName = "Book";

export { Book };

