import { Clock, CheckCircle } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="p-8 md:p-12 rounded-2xl bg-white border-2 border-blue-200 shadow-2xl">
          {/* Guarantee Icon */}
          <div className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 flex items-center justify-center">
            <img
              src="/guarantee-seal-es.png"
              alt="Garantía de 7 días"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">
            Garantía{" "}
            <span className="text-blue-500">Incondicional de 7 Días</span>
          </h2>

          {/* Description */}
          <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed mb-8">
            <p>
              Tienes <span className="font-bold text-blue-500">7 días completos</span> para explorar el manual y aplicar los conceptos en la práctica. Si por cualquier razón no sientes que el material entregó lo que prometió, devolvemos <span className="font-bold text-blue-500">100% de tu inversión</span>.
            </p>

            <p>
              Pero considera esto: el <span className="font-bold text-blue-500">cambio real</span> no ocurre solo por la lectura. Ocurre cuando entiendes el sistema y comienzas a <span className="font-bold text-blue-500">aplicar la estructura</span> en tu día a día. Este manual fue hecho para ser usado, no solo leído.
            </p>

            <p className="font-semibold text-gray-900">
              Date a ti mismo la oportunidad de <span className="text-blue-500 font-bold">reprogramar tus patrones mentales</span>. No tienes nada que perder.
            </p>
          </div>

          {/* Guarantee Points */}
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-blue-500" />
              <span className="text-sm text-gray-600 font-medium">
                7 días para experimentar
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-blue-500" />
              <span className="text-sm text-gray-600 font-medium">
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
