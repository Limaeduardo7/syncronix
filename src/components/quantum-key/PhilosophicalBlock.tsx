const PhilosophicalBlock = () => {
  return (
    <section className="section-padding bg-black relative overflow-hidden">

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Opening Question */}
        <div className="text-center mb-12 animate-fade-up">
          <p className="text-2xl md:text-3xl font-semibold text-foreground/90">
            Have you ever asked yourself at some point in your life, what is reality?
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
            Reality is a holographic projection of consciousness, which receives the Light from the Primordial Source, passes through your mental filters in the psychic center and projects your external experience on the space-time continuum line!
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
              "The Kingdom of God is within you"
            </blockquote>
            <cite className="block text-black text-lg">
              — Luke 17:21
            </cite>
          </div>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mt-6">
            With this book, you will learn how to access this kingdom, bringing it from Heaven to Earth, materializing the reality of your dreams!
          </p>
        </div>

        {/* Power Message */}
        <div className="text-center space-y-6 mb-12 animate-fade-up">
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            By assimilating all this knowledge, you will be able to build a POWERFUL and UNSTOPPABLE mental construct.
          </p>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            You will also learn to receive and exercise more and more the Power of INFINITE LIGHT!
          </p>
          <p className="text-xl md:text-2xl font-semibold text-foreground/90">
            Affirming your true POWER as a Divine Being!
          </p>
          <p className="text-xl md:text-2xl font-semibold neon-text">
            Made in the image and likeness of the CREATOR!
          </p>
        </div>

        {/* Second Bible Quote */}
        <div className="text-center mb-12 animate-fade-up">
          <div className="inline-block bg-primary px-8 py-6 rounded-2xl">
            <blockquote className="text-xl md:text-2xl font-light italic text-black leading-relaxed">
              Then Jesus said: — In your Law it is written that God said: "You are gods."
            </blockquote>
            <cite className="block mt-2 text-black text-lg">
              — John 10:34
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
            What we offer you here is only the <span className="text-primary font-black">TRUTH</span>, nothing more.
          </p>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            <mark className="bg-red-600 text-white px-2 py-1 rounded">You can keep blaming the world for your failures or you can take responsibility for your life and consciously determine your future!</mark>
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
