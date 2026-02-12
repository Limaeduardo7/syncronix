import { Clock, CheckCircle, ShieldCheck } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="p-8 md:p-12 rounded-2xl bg-white border-2 border-slate-200 shadow-2xl">
          {/* Guarantee Icon */}
          <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center bg-slate-50 rounded-full">
            <ShieldCheck className="w-16 h-16 text-slate-900" />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">
            Garantia{" "}
            <span className="text-slate-700">Incondicional de 7 Dias</span>
          </h2>

          {/* Description */}
          <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed mb-8">
            <p>
              Você tem <span className="font-bold text-slate-900">7 dias completos</span> para explorar o template e aplicar o sistema na prática. Se por qualquer razão você não sentir que o material entregou o que prometeu, devolvemos <span className="font-bold text-slate-900">100% do seu investimento</span>.
            </p>

            <p>
              A <span className="font-bold text-slate-900">clara visão e organização</span> não acontecem apenas por ter acesso ao template. Elas acontecem quando você entende a lógica e começa a <span className="font-bold text-slate-900">aplicar a estrutura</span> no seu dia a dia.
            </p>

            <p className="font-semibold text-gray-900">
              Dê a si mesmo a chance de <span className="text-slate-900 font-bold">dominar sua gestão mental</span>. Você não tem nada a perder.
            </p>
          </div>

          {/* Guarantee Points */}
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="flex items-center gap-3 justify-center">
              <Clock className="w-6 h-6 text-slate-900" />
              <span className="text-sm text-gray-600 font-medium">
                7 dias para experimentar
              </span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <CheckCircle className="w-6 h-6 text-slate-900" />
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