"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { MorphingText } from "@/components/ui/liquid-text";

export function Hero() {
  useEffect(() => {
    // Carregar model-viewer e criar o elemento
    const loadModelViewer = async () => {
      if (!customElements.get('model-viewer')) {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
        document.head.appendChild(script);
        
        // Aguardar o script carregar
        await new Promise((resolve) => {
          script.onload = resolve;
          script.onerror = resolve;
        });
      }
      
      // Criar o model-viewer diretamente no DOM
      const container = document.getElementById('model-container');
      
      if (container && !container.querySelector('model-viewer')) {
        container.innerHTML = `
          <model-viewer
            src="/_1019221926_texture.glb"
            alt="Modelo 3D Syncronix"
            auto-rotate
            auto-rotate-delay="0"
            rotation-per-second="20deg"
            exposure="1"
            disable-zoom
            disable-pan
            disable-tap
            interaction-prompt="none"
            camera-controls="false"
            loading="eager"
            reveal="auto"
            style="width: 100%; max-width: 560px; height: 420px; background: transparent; display: block; margin: 0 auto; pointer-events: none;">
          </model-viewer>
        `;
      }
    };
    
    loadModelViewer();
  }, []);


  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-20">
      {/* Background with sparkles effect */}
      <div 
        className="absolute inset-0 opacity-20 z-0"
        style={{ background: 'var(--gradient-hero)' }}
      ></div>
      
      {/* Sparkles background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <SparklesCore
          id="tsparticleshero"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#ffffff"
          speed={0.8}
        />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-12">
          {/* Modelo 3D - Primeiro */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="w-full flex justify-center items-center"
          >
            <div 
              id="model-container" 
              className="w-full max-w-[560px]"
              style={{ 
                height: '420px',
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div 
                className="w-full h-full flex items-center justify-center text-white/60 text-sm"
              >
                Carregando modelo 3D...
              </div>
            </div>
          </motion.div>

          {/* Título MorphingText - Segundo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="w-full flex justify-center items-center"
          >
            <div className="w-full max-w-5xl px-4 overflow-hidden">
              <MorphingText 
                texts={[
                  "Scientia potentia est.",
                  "Conhecimento é poder.",
                  "Knowledge is power.",
                  "El conocimiento es poder."
                ]}
                className="text-white"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Subtle parallax effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </section>
  );
}