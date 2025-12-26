import { Clock, CheckCircle } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="section-padding bg-black relative overflow-hidden">

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="glass-card p-8 md:p-12 animate-fade-up">
          {/* Guarantee Icon */}
          <div className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 flex items-center justify-center">
            <img
              src="/guarantee-seal-es.png"
              alt="Garantía de 7 días"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            {/* Mobile: Two lines with different colors */}
            <span className="block md:hidden">
              <span className="block text-white">Garantía Incondicional</span>
              <span className="block neon-text">de 7 Días</span>
            </span>
            {/* Desktop: Original single line */}
            <span className="hidden md:block">
              Garantía{" "}
              <span className="neon-text">Incondicional de 7 Días</span>
            </span>
          </h2>

          {/* Description */}
          <div className="space-y-4 text-sm md:text-base text-foreground/80 leading-relaxed mb-8">
            <p>
              Entendemos que no todo conocimiento resuena inmediatamente. A veces, las <span className="neon-text font-bold">mayores revelaciones</span> tardan en manifestarse. Por eso ofrecemos <span className="neon-text font-bold">7 días</span> para que explores el contenido de este libro. Si al final de ese período aún no sientes que tocó tu alma, estamos aquí para <span className="neon-text font-bold">devolver tu inversión</span>.
            </p>

            <p>
              Pero recuerda, el <span className="neon-text font-bold">verdadero poder del conocimiento</span> se revela a través de la práctica y la reflexión. Cada página es una invitación a ir más allá de la lectura y <span className="neon-text font-bold">aplicar los conceptos en tu vida</span>. Antes de considerar un reembolso, reflexiona sobre el impacto potencial de este conocimiento con el tiempo. La <span className="neon-text font-bold">transformación</span> no ocurre de la noche a la mañana, pero comienza con un <span className="neon-text font-bold">primer paso</span>.
            </p>

            <p className="font-semibold text-foreground/90">
              Tu <span className="neon-text font-bold">desarrollo personal</span> merece una oportunidad de florecer. ¡Dale tiempo a lo que <span className="neon-text font-bold">verdaderamente importa</span>!
            </p>
          </div>

          {/* Guarantee Points */}
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-primary" />
              <span className="text-sm text-muted-foreground">
                7 días para probar
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-primary" />
              <span className="text-sm text-muted-foreground">
                Reembolso sin preguntas
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
