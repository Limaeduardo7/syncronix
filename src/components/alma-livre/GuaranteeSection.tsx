import { Clock, CheckCircle } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="bg-white/10 p-8 md:p-12 rounded-2xl border border-purple-300/20 backdrop-blur-sm">
          {/* Guarantee Icon */}
          <div className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 flex items-center justify-center">
            <img
              src="/garantia-7-dias_(1).png"
              alt="Garantia de 7 dias"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-white">
            Garantia{" "}
            <span className="text-purple-400 font-black">7 Dias</span> Incondicional
          </h2>

          {/* Description */}
          <div className="space-y-4 text-lg text-gray-200 leading-relaxed mb-8">
            <p>
              Entendemos que nem todo conhecimento ressoa imediatamente. Às vezes, as <span className="text-purple-400 font-bold">maiores revelações</span> levam tempo para se manifestar. É por isso que oferecemos <span className="text-purple-400 font-bold">7 dias</span> para você explorar o conteúdo deste livro. Se ao final desse período você ainda não sentir que ele tocou sua alma, estamos aqui para <span className="text-purple-400 font-bold">reembolsar seu investimento</span>.
            </p>

            <p>
              Mas lembre-se, o <span className="text-purple-400 font-bold">verdadeiro poder do conhecimento</span> é revelado através da prática e reflexão. Cada página é um convite para ir além da leitura e <span className="text-purple-400 font-bold">aplicar os conceitos em sua vida</span>. Antes de considerar um reembolso, reflita sobre o potencial impacto deste conhecimento ao longo do tempo. A <span className="text-purple-400 font-bold">transformação</span> não acontece da noite para o dia, mas começa com um <span className="text-purple-400 font-bold">primeiro passo</span>.
            </p>

            <p className="font-semibold text-gray-100">
              Seu <span className="text-purple-400 font-bold">desenvolvimento pessoal</span> merece uma chance de florescer. Dê tempo ao que <span className="text-purple-400 font-bold">realmente importa</span>!
            </p>
          </div>

          {/* Guarantee Points */}
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-purple-400" />
              <span className="text-sm text-gray-300">
                7 dias para testar
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-purple-400" />
              <span className="text-sm text-gray-300">
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