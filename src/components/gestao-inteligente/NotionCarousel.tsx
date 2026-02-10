import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';

const IMAGES = Array.from({ length: 10 }, (_, i) => `/images/gestao-inteligente/preview-${String(i + 1).padStart(2, '0')}.jpg`);

const NotionCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);

  return (
    <section className="relative py-20 px-4 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src="/images/notion-logo.png" alt="Notion" className="w-8 h-8 object-contain" />
            <h2 className="text-3xl md:text-5xl font-black text-gray-900">
              Por dentro do sistema
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja como o template organiza suas áreas, projetos e recursos visualmente.
          </p>
        </motion.div>

        <div className="embla overflow-hidden rounded-2xl border-2 border-slate-200 shadow-xl bg-white" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {IMAGES.map((src, index) => (
              <div className="flex-[0_0_100%] min-w-0 relative h-[500px] sm:h-[600px] flex items-center justify-center bg-slate-100 p-4" key={index}>
                {/* Blurred background for aesthetic consistency */}
                <div
                  className="absolute inset-0 bg-cover bg-center blur-3xl opacity-30"
                  style={{ backgroundImage: `url(${src})` }}
                />

                <img
                  src={src}
                  alt={`Preview do Notion ${index + 1}`}
                  className="relative z-10 max-h-full w-auto object-contain rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotionCarousel;
