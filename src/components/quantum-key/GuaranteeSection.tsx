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
              alt="7-day guarantee"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Unconditional{" "}
            <span className="neon-text">7-Day</span> Guarantee
          </h2>

          {/* Description */}
          <div className="space-y-4 text-lg text-foreground/80 leading-relaxed mb-8">
            <p>
              We understand that not all knowledge resonates immediately. Sometimes, the <span className="neon-text font-bold">greatest revelations</span> take time to manifest. That's why we offer <span className="neon-text font-bold">7 days</span> for you to explore the content of this book. If at the end of that period you still don't feel it touched your soul, we're here to <span className="neon-text font-bold">refund your investment</span>.
            </p>

            <p>
              But remember, the <span className="neon-text font-bold">true power of knowledge</span> is revealed through practice and reflection. Each page is an invitation to go beyond reading and <span className="neon-text font-bold">apply the concepts in your life</span>. Before considering a refund, reflect on the potential impact of this knowledge over time. <span className="neon-text font-bold">Transformation</span> doesn't happen overnight, but it begins with a <span className="neon-text font-bold">first step</span>.
            </p>

            <p className="font-semibold text-foreground/90">
              Your <span className="neon-text font-bold">personal development</span> deserves a chance to flourish. Give time to what <span className="neon-text font-bold">truly matters</span>!
            </p>
          </div>

          {/* Guarantee Points */}
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-primary" />
              <span className="text-sm text-muted-foreground">
                7 days to try
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-primary" />
              <span className="text-sm text-muted-foreground">
                No questions refund
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
