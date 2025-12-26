const PhilosophicalBlock = () => {
  return (
    <section className="section-padding bg-black relative overflow-hidden">

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Opening Question */}
        <div className="text-center mb-12 animate-fade-up">
          <p className="text-2xl md:text-3xl font-semibold text-foreground/90">
            Você já se perguntou em algum momento da sua vida, o que é a realidade?
          </p>
        </div>

        {/* First GIF */}
        <div className="flex justify-center mb-12 animate-fade-up delay-100">
          <img
            src="/giphy (3).gif"
            alt="Realidade"
            className="w-full max-w-md rounded-2xl shadow-2xl"
          />
        </div>

        {/* Reality Explanation */}
        <div className="text-center mb-12 animate-fade-up delay-200">
          <p className="text-[16px] md:text-[17px] text-foreground/80 leading-relaxed">
            A realidade é uma projeção holográfica da consciência, que recebe a Luz da Fonte Primordial, passa pelos seus filtros mentais no centro psíquico e projeta sua experiência externa na linha do continuum espaço-tempo!
          </p>
        </div>

        {/* Second GIF */}
        <div className="flex justify-center mb-12 animate-fade-up delay-300">
          <img
            src="/giphy (2).gif"
            alt="Consciência"
            className="w-full max-w-md rounded-2xl shadow-2xl"
          />
        </div>

        {/* Bible Quote */}
        <div className="text-center mb-12 animate-fade-up delay-400">
          <div className="inline-block bg-primary px-8 py-6 rounded-2xl">
            <blockquote className="text-xl md:text-2xl font-light italic text-black leading-relaxed mb-2">
              "O Reino de Deus está dentro de vós"
            </blockquote>
            <cite className="block text-black text-lg">
              — Lucas 17:21
            </cite>
          </div>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mt-6">
            Com este livro, você aprenderá a acessar este reino, trazendo-o do Céu para a Terra, materializando a realidade dos seus sonhos!
          </p>
        </div>

        {/* Power Message */}
        <div className="text-center space-y-6 mb-12 animate-fade-up">
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            Assimilando todo este conhecimento, você será capaz de construir um construto mental PODEROSO e IMPARÁVEL.
          </p>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            Você também aprenderá a receber e exercer cada vez mais o Poder da LUZ INFINITA!
          </p>
          <p className="text-xl md:text-2xl font-semibold text-foreground/90">
            Afirmando seu verdadeiro PODER como um Ser Divino!
          </p>
          <p className="text-xl md:text-2xl font-semibold neon-text">
            Feito à imagem e semelhança do CRIADOR!
          </p>
        </div>

        {/* Second Bible Quote */}
        <div className="text-center mb-12 animate-fade-up">
          <div className="inline-block bg-primary px-8 py-6 rounded-2xl">
            <blockquote className="text-xl md:text-2xl font-light italic text-black leading-relaxed">
              Então Jesus disse: — Na vossa Lei está escrito que Deus disse: "Vós sois deuses."
            </blockquote>
            <cite className="block mt-2 text-black text-lg">
              — João 10:34
            </cite>
          </div>
        </div>

        {/* Third GIF */}
        <div className="flex justify-center mb-12 animate-fade-up">
          <img
            src="/giphy (1).gif"
            alt="Poder Divino"
            className="w-full max-w-md rounded-2xl shadow-2xl"
          />
        </div>

        {/* Full Width GIF */}
        <div className="mb-12 -mx-4 sm:-mx-6 lg:-mx-8 animate-fade-up">
          <img
            src="/8dfb7036cdf29e13b850615e639e24d8.gif"
            alt="Verdade"
            className="w-full"
          />
        </div>

        {/* Truth Statement */}
        <div className="text-center mb-12 animate-fade-up">
          <p className="text-xl md:text-2xl font-semibold text-foreground/90 leading-relaxed mb-6">
            O que oferecemos a você aqui é apenas a <span className="text-primary font-black">VERDADE</span>, nada mais.
          </p>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            <mark className="bg-red-600 text-white px-2 py-1 rounded">Você pode continuar culpando o mundo pelos seus fracassos ou pode assumir a responsabilidade pela sua vida e determinar conscientemente o seu futuro!</mark>
          </p>
        </div>

        {/* Fourth GIF */}
        <div className="flex justify-center animate-fade-up">
          <img
            src="/giphy.gif"
            alt="Escolha"
            className="w-full max-w-md rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default PhilosophicalBlock;
