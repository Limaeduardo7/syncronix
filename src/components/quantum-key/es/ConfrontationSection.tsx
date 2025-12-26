const ConfrontationSection = () => {
  return (
    <section className="section-padding bg-black relative overflow-hidden">

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Pills Message */}
        <div className="text-center mb-12 animate-fade-up">
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            Recuerda, la <span className="text-blue-500 font-bold">píldora azul</span> te mantiene en el mundo de la ignorancia, la <span className="text-red-600 font-bold">píldora roja</span> te saca de la burbuja de la ilusión y te lleva a un largo viaje hacia la verdadera <span className="text-primary font-bold">libertad</span>!
          </p>
        </div>

        {/* Central Questions */}
        <div className="text-center space-y-6 mb-12 animate-fade-up delay-100">
          <h2 className="text-3xl md:text-5xl font-black">
            <span className="text-yellow-400">¿CUÁL ELIGES?</span>
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-yellow-400">
            ¿CUÁNTO VALE TU LIBERTAD?
          </p>
        </div>

        {/* Abyss Message */}
        <div className="text-center mb-12 animate-fade-up delay-200">
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            Quizás te has sorprendido a ti mismo mirando al abismo de una vida que se repite en círculos, sintiendo el peso aplastante de la rutina que aprisiona. Pero lo que quizás aún no has comprendido es que la llave para romper estas cadenas está en tus manos.
          </p>
        </div>

        {/* Final Empowerment */}
        <div className="text-center mb-12 animate-fade-up delay-300">
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            Mientras la mayoría se conforma con arrastrarse por la mediocridad, tú ya has dado el primer paso al reconocer que el poder está ahí, latente dentro de ti, solo esperando a que lo despiertes.
          </p>
        </div>

        {/* Fifth GIF */}
        <div className="flex justify-center mb-12 animate-fade-up delay-400">
          <div className="w-full max-w-md h-96 md:h-[28rem] overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="/giphy (4).gif"
              alt="Awakening"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center animate-fade-up delay-600">
          <a
            href="https://pay.hotmart.com/Q97114057B?checkoutMode=10&bid=1766356135373"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-primary text-primary-foreground font-bold text-xl rounded-lg border-2 border-primary animate-pulse-glow transition-all duration-300 transform hover:scale-105 cta-button"
          >
            DESPERTAR MI PODER
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConfrontationSection;
