import { Clock, CheckCircle } from "lucide-react";
import guaranteeImage from "@/assets/quantum-key/us/7days-1 (1).png";

const GuaranteeSection = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="p-8 md:p-12 rounded-2xl bg-white border-2 border-blue-200 shadow-2xl">
          {/* Guarantee Icon */}
          <div className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 flex items-center justify-center">
            <img
              src={guaranteeImage}
              alt="7-day guarantee"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">
            Unconditional{" "}
            <span className="text-blue-500">7-Day Guarantee</span>
          </h2>

          {/* Description */}
          <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed mb-8">
            <p>
              You have <span className="font-bold text-blue-500">7 full days</span> to explore the manual and apply the concepts in practice. If for any reason you don't feel the material delivered what it promised, we will refund <span className="font-bold text-blue-500">100% of your investment</span>.
            </p>

            <p>
              But consider this: <span className="font-bold text-blue-500">real change</span> doesn't happen just by reading. It happens when you understand the system and start <span className="font-bold text-blue-500">applying the structure</span> in your daily life. This manual was made to be used, not just read.
            </p>

            <p className="font-semibold text-gray-900">
              Give yourself the chance to <span className="text-blue-500 font-bold">reprogram your mental patterns</span>. You have nothing to lose.
            </p>
          </div>

          {/* Guarantee Points */}
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-blue-500" />
              <span className="text-sm text-gray-600 font-medium">
                7 days to try it out
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-blue-500" />
              <span className="text-sm text-gray-600 font-medium">
                No-questions-asked refund
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
