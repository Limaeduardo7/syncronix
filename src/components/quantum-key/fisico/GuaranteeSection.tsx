import { Clock, CheckCircle } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="section-padding bg-black relative overflow-hidden">

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="glass-card p-8 md:p-12 animate-fade-up">
          {/* Guarantee Icon */}
          <div className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 flex items-center justify-center">
            <img
              src="/garantia-7-dias_(1).png"
              alt="Garantia de 7 dias"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            {/* Mobile: Two lines with different colors */}
            <span className="block md:hidden">
              <span className="block text-white">Garantia Incondicional</span>
              <span className="block neon-text">de 7 Dias</span>
            </span>
            {/* Desktop: Original single line */}
            <span className="hidden md:block">
              Garantia{" "}
              <span className="neon-text">Incondicional de 7 Dias</span>
            </span>
          </h2>

          {/* Description */}
          <div className="space-y-4 text-sm md:text-base text-foreground/80 leading-relaxed mb-8">
            <p>
              Entendemos que nem todo conhecimento ressoa imediatamente. Às vezes, as <span className="neon-text font-bold">maiores revelações</span> levam tempo para se manifestar. Por isso oferecemos <span className="neon-text font-bold">7 dias</span> para você explorar o conteúdo deste livro. Se ao final desse período você ainda não sentir que ele tocou sua alma, estamos aqui para <span className="neon-text font-bold">devolver seu investimento</span>.
            </p>

            <p>
              Mas lembre-se, o <span className="neon-text font-bold">verdadeiro poder do conhecimento</span> se revela através da prática e da reflexão. Cada página é um convite para ir além da leitura e <span className="neon-text font-bold">aplicar os conceitos em sua vida</span>. Antes de considerar um reembolso, reflita sobre o impacto potencial deste conhecimento ao longo do tempo. A <span className="neon-text font-bold">transformação</span> não acontece da noite para o dia, mas ela começa com um <span className="neon-text font-bold">primeiro passo</span>.
            </p>

            <p className="font-semibold text-foreground/90">
              Seu <span className="neon-text font-bold">desenvolvimento pessoal</span> merece uma chance de florescer. Dê tempo ao que <span className="neon-text font-bold">realmente importa</span>!
            </p>
          </div>

          {/* Guarantee Points */}
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-primary" />
              <span className="text-sm text-muted-foreground">
                7 dias para experimentar
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-primary" />
              <span className="text-sm text-muted-foreground">
                Reembolso sem perguntas
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
