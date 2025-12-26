const PhilosophicalBlock = () => {
  return (
    <section className="section-padding bg-black relative overflow-hidden">

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Opening Question */}
        <div className="text-center mb-12 animate-fade-up">
          <p className="text-2xl md:text-3xl font-semibold text-foreground/90">
            ¿Alguna vez te has preguntado en algún momento de tu vida, qué es la realidad?
          </p>
        </div>

        {/* First GIF */}
        <div className="flex justify-center mb-12 animate-fade-up delay-100">
          <img
            src="/giphy (3).gif"
            alt="Reality"
            className="w-full max-w-md rounded-2xl shadow-2xl"
          />
        </div>

        {/* Reality Explanation */}
        <div className="text-center mb-12 animate-fade-up delay-200">
          <p className="text-[16px] md:text-[17px] text-foreground/80 leading-relaxed">
            ¡La realidad es una proyección holográfica de la consciencia, que recibe la Luz de la Fuente Primordial, pasa por tus filtros mentales en el centro psíquico y proyecta tu experiencia externa en la línea del continuo espacio-tiempo!
          </p>
        </div>

        {/* Second GIF */}
        <div className="flex justify-center mb-12 animate-fade-up delay-300">
          <img
            src="/giphy (2).gif"
            alt="Consciousness"
            className="w-full max-w-md rounded-2xl shadow-2xl"
          />
        </div>

        {/* Bible Quote */}
        <div className="text-center mb-12 animate-fade-up delay-400">
          <div className="inline-block bg-primary px-8 py-6 rounded-2xl">
            <blockquote className="text-xl md:text-2xl font-light italic text-black leading-relaxed mb-2">
              "El Reino de Dios está dentro de ti"
            </blockquote>
            <cite className="block text-black text-lg">
              — Lucas 17:21
            </cite>
          </div>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mt-6">
            ¡Con este libro, aprenderás cómo acceder a este reino, trayéndolo del Cielo a la Tierra, materializando la realidad de tus sueños!
          </p>
        </div>

        {/* Power Message */}
        <div className="text-center space-y-6 mb-12 animate-fade-up">
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            Al asimilar todo este conocimiento, podrás construir un constructo mental PODEROSO e IMPARABLE.
          </p>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            ¡También aprenderás a recibir y ejercer cada vez más el Poder de la LUZ INFINITA!
          </p>
          <p className="text-xl md:text-2xl font-semibold text-foreground/90">
            ¡Afirmando tu verdadero PODER como Ser Divino!
          </p>
          <p className="text-xl md:text-2xl font-semibold neon-text">
            ¡Hecho a imagen y semejanza del CREADOR!
          </p>
        </div>

        {/* Second Bible Quote */}
        <div className="text-center mb-12 animate-fade-up">
          <div className="inline-block bg-primary px-8 py-6 rounded-2xl">
            <blockquote className="text-xl md:text-2xl font-light italic text-black leading-relaxed">
              Entonces Jesús dijo: — En vuestra Ley está escrito que Dios dijo: "Vosotros sois dioses."
            </blockquote>
            <cite className="block mt-2 text-black text-lg">
              — Juan 10:34
            </cite>
          </div>
        </div>

        {/* Third GIF */}
        <div className="flex justify-center mb-12 animate-fade-up">
          <img
            src="/giphy (1).gif"
            alt="Divine Power"
            className="w-full max-w-md rounded-2xl shadow-2xl"
          />
        </div>

        {/* Full Width GIF */}
        <div className="mb-12 -mx-4 sm:-mx-6 lg:-mx-8 animate-fade-up">
          <img
            src="/8dfb7036cdf29e13b850615e639e24d8.gif"
            alt="Truth"
            className="w-full"
          />
        </div>

        {/* Truth Statement */}
        <div className="text-center mb-12 animate-fade-up">
          <p className="text-xl md:text-2xl font-semibold text-foreground/90 leading-relaxed mb-6">
            Lo que te ofrecemos aquí es solo la <span className="text-primary font-black">VERDAD</span>, nada más.
          </p>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            <mark className="bg-red-600 text-white px-2 py-1 rounded">¡Puedes seguir culpando al mundo por tus fracasos o puedes asumir la responsabilidad de tu vida y determinar conscientemente tu futuro!</mark>
          </p>
        </div>

        {/* Fourth GIF */}
        <div className="flex justify-center animate-fade-up">
          <img
            src="/giphy.gif"
            alt="Choice"
            className="w-full max-w-md rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default PhilosophicalBlock;
