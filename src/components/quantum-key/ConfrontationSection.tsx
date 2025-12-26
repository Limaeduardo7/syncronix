const ConfrontationSection = () => {
  return (
    <section className="section-padding bg-black relative overflow-hidden">

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Pills Message */}
        <div className="text-center mb-12 animate-fade-up">
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            Remember, the <span className="text-blue-500 font-bold">blue pill</span> keeps you in the world of ignorance, the <span className="text-red-600 font-bold">red pill</span> takes you out of the bubble of illusion and leads to a long journey towards true <span className="text-primary font-bold">freedom</span>!
          </p>
        </div>

        {/* Central Questions */}
        <div className="text-center space-y-6 mb-12 animate-fade-up delay-100">
          <h2 className="text-3xl md:text-5xl font-black">
            <span className="text-yellow-400">WHICH ONE DO YOU CHOOSE?</span>
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-yellow-400">
            HOW MUCH IS YOUR FREEDOM WORTH?
          </p>
        </div>

        {/* Abyss Message */}
        <div className="text-center mb-12 animate-fade-up delay-200">
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            Perhaps you have caught yourself staring into the abyss of a life that repeats in circles, feeling the crushing weight of the routine that imprisons. But what you may not have realized yet is that the key to breaking these chains is in your hands.
          </p>
        </div>

        {/* Final Empowerment */}
        <div className="text-center mb-12 animate-fade-up delay-300">
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            While most are content to crawl through mediocrity, you have already taken the first step by recognizing that the power is there, dormant within you, just waiting for you to awaken it.
          </p>
        </div>

        {/* Fifth GIF */}
        <div className="flex justify-center mb-12 animate-fade-up delay-400">
          <img
            src="/giphy (4).gif"
            alt="Awakening"
            className="w-full max-w-md rounded-2xl shadow-2xl"
          />
        </div>

        {/* CTA Button */}
        <div className="text-center animate-fade-up delay-600">
          <a
            href="#oferta"
            className="inline-block px-12 py-5 bg-primary text-primary-foreground font-bold text-xl rounded-lg border-2 border-primary animate-pulse-glow transition-all duration-300 transform hover:scale-105 cta-button"
          >
            AWAKEN MY POWER
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConfrontationSection;
