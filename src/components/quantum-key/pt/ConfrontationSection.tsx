const ConfrontationSection = () => {
  return (
    <section className="section-padding bg-black relative overflow-hidden">

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Pills Message */}
        <div className="text-center mb-12 animate-fade-up">
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            Lembre-se, a <span className="text-blue-500 font-bold">pílula azul</span> te mantém no mundo da ignorância, a <span className="text-red-600 font-bold">pílula vermelha</span> te tira da bolha da ilusão e te leva a uma longa jornada rumo à verdadeira <span className="text-primary font-bold">liberdade</span>!
          </p>
        </div>

        {/* Central Questions */}
        <div className="text-center space-y-6 mb-12 animate-fade-up delay-100">
          <h2 className="text-3xl md:text-5xl font-black">
            <span className="text-yellow-400">QUAL VOCÊ ESCOLHE?</span>
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-yellow-400">
            QUANTO VALE A SUA LIBERDADE?
          </p>
        </div>

        {/* Abyss Message */}
        <div className="text-center mb-12 animate-fade-up delay-200">
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            Talvez você já tenha se pegado encarando o abismo de uma vida que se repete em círculos, sentindo o peso esmagador da rotina que aprisiona. Mas o que talvez você ainda não tenha percebido é que a chave para quebrar essas correntes está em suas mãos.
          </p>
        </div>

        {/* Final Empowerment */}
        <div className="text-center mb-12 animate-fade-up delay-300">
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            Enquanto a maioria se contenta em rastejar pela mediocridade, você já deu o primeiro passo ao reconhecer que o poder está aí, adormecido dentro de você, apenas esperando que você o desperte.
          </p>
        </div>

        {/* Fifth GIF */}
        <div className="flex justify-center mb-12 animate-fade-up delay-400">
          <div className="w-full max-w-md h-96 md:h-[28rem] overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="/giphy (4).gif"
              alt="Despertar"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center animate-fade-up delay-600">
          <a
            href="#oferta"
            className="inline-block px-12 py-5 bg-primary text-primary-foreground font-bold text-xl rounded-lg border-2 border-primary animate-pulse-glow transition-all duration-300 transform hover:scale-105 cta-button"
          >
            DESPERTAR MEU PODER
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConfrontationSection;
