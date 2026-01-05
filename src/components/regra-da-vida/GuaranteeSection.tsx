import { Clock, CheckCircle } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="p-8 md:p-12 rounded-2xl bg-white border-2 border-blue-200 shadow-2xl">
          {/* Guarantee Icon */}
          <div className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 flex items-center justify-center">
            <img
              src="/garantia-7-dias_(1).png"
              alt="Garantia de 7 dias"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">
            Garantia{" "}
            <span className="text-blue-500">Incondicional de 7 Dias</span>
          </h2>

          {/* Description */}
          <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed mb-8">
            <p>
              Você tem <span className="font-bold text-blue-500">7 dias completos</span> para explorar o manual e aplicar os conceitos na prática. Se por qualquer razão você não sentir que o material entregou o que prometeu, devolvemos <span className="font-bold text-blue-500">100% do seu investimento</span>.
            </p>

            <p>
              Mas considere isto: a <span className="font-bold text-blue-500">mudança real</span> não acontece apenas pela leitura. Ela acontece quando você entende o sistema e começa a <span className="font-bold text-blue-500">aplicar a estrutura</span> no seu dia a dia. Este manual foi feito para ser usado, não apenas lido.
            </p>

            <p className="font-semibold text-gray-900">
              Dê a si mesmo a chance de <span className="text-blue-500 font-bold">reprogramar seus padrões mentais</span>. Você não tem nada a perder.
            </p>
          </div>

          {/* Guarantee Points */}
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-blue-500" />
              <span className="text-sm text-gray-600 font-medium">
                7 dias para experimentar
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-blue-500" />
              <span className="text-sm text-gray-600 font-medium">
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
