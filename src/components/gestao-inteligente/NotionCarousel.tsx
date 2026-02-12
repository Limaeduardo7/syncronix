import React, { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { Check, ZoomIn } from 'lucide-react';
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const IMAGES = [
  '/images/gestao-inteligente/preview-01.jpg',
  '/images/gestao-inteligente/preview-11.jpg',
  '/images/gestao-inteligente/preview-12.jpg',
  '/images/gestao-inteligente/preview-13.jpg',
  '/images/gestao-inteligente/preview-15.jpg',
  '/images/gestao-inteligente/preview-14.jpg',
  '/images/gestao-inteligente/preview-17.jpg',
  '/images/gestao-inteligente/preview-16.jpg',
  '/images/gestao-inteligente/preview-03.jpg',
  '/images/gestao-inteligente/preview-02.jpg',
  '/images/gestao-inteligente/preview-04.jpg',
  '/images/gestao-inteligente/preview-05.jpg',
  '/images/gestao-inteligente/preview-06.jpg',
  '/images/gestao-inteligente/preview-09.jpg',
  '/images/gestao-inteligente/preview-10.jpg',
  '/images/gestao-inteligente/preview-08.jpg'
];

const slides = IMAGES.map((src) => ({ src }));

const NotionCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);
  const [index, setIndex] = useState(-1);

  return (
    <section id="preview" className="relative py-20 px-4 bg-gray-50 overflow-hidden scroll-mt-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex flex-col items-center justify-center gap-3 mb-6">
            <img src="/images/notion-logo.png" alt="Notion" className="w-10 h-10 object-contain" />
            <h2 className="text-3xl md:text-5xl font-black text-gray-900">
              Por dentro do sistema
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Veja como o template organiza suas áreas, projetos e recursos visualmente.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-left max-w-2xl mx-auto mb-10">
            {[
              "Controle financeiro real",
              "Gestão de metas",
              "Organização de projetos",
              "Tarefas do dia",
              "Planejamento de marketing",
              "Documentos e processos",
              "Registro de reuniões e decisões"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-lg text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-base md:text-xl text-gray-900 font-bold border-t border-slate-200 pt-6 inline-block">
            Tudo conectado no Notion, pronto para usar.
          </p>
        </motion.div>

        <div className="embla overflow-hidden rounded-2xl border-2 border-slate-200 shadow-xl bg-white" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {IMAGES.map((src, index) => (
              <div
                className="flex-[0_0_100%] min-w-0 relative h-[500px] sm:h-[600px] flex items-center justify-center bg-slate-100 p-4 cursor-zoom-in group"
                key={index}
                onClick={() => setIndex(index)}
              >
                {/* Blurred background for aesthetic consistency */}
                <div
                  className="absolute inset-0 bg-cover bg-center blur-3xl opacity-30 pointer-events-none"
                  style={{ backgroundImage: `url(${src})` }}
                />

                <img
                  src={src}
                  alt={`Preview do Notion ${index + 1}`}
                  className="relative z-10 max-h-full w-auto object-contain rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
                />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                  <div className="bg-black/50 p-4 rounded-full backdrop-blur-sm">
                    <ZoomIn className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Zoom]}
        animation={{ fade: 300 }}
        carousel={{ finite: false }}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
        }}
      />
    </section>
  );
};

export default NotionCarousel;


