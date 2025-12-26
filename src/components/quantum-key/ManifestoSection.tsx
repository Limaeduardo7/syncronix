const ManifestoSection = () => {
  return (
    <section className="section-padding bg-black relative overflow-hidden">

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          <p className="text-xl md:text-2xl font-semibold text-foreground/90 animate-fade-up">
            This eBook is your <span className="neon-text font-bold">passport to a personal revolution</span>.
          </p>

          <p className="text-lg md:text-xl text-foreground/80 animate-fade-up delay-100">
            Don't expect mercy from fate. The question here is about accepting that you have in your hands <span className="neon-text font-bold">the power that many only dream of achieving</span>.
          </p>

          <p className="text-lg md:text-xl text-foreground/80 animate-fade-up delay-200">
            Most prefer the <span className="neon-text font-bold">shadow of ignorance</span>, where it's comfortable to blame the world, the circumstances, anything that justifies the <span className="neon-text font-bold">inertia</span>.
          </p>

          <p className="text-lg md:text-xl text-foreground/80 animate-fade-up delay-300">
            But you, who have come this far, are at a <span className="neon-text font-bold">crossroads</span>. Will you be just another one to follow the standard norms of the system and <span className="neon-text font-bold">disappear in the crowd</span>?
          </p>

          <p className="text-xl md:text-2xl font-semibold text-foreground/90 animate-fade-up delay-400">
            Or will you have the <span className="neon-text font-bold">courage to take the protagonist role</span> in your life?
          </p>

          <p className="text-2xl md:text-3xl font-black animate-fade-up delay-500">
            <span className="neon-text">REMEMBER, THE CHOICE IS YOURS.</span>
          </p>

          {/* GIF */}
          <div className="flex justify-center py-8 animate-fade-up delay-550">
            <img
              src="/giphy (5).gif"
              alt="The Choice"
              className="w-full max-w-md rounded-2xl shadow-2xl"
            />
          </div>

          {/* Final CTA */}
          <div className="pt-8 animate-fade-up delay-600">
            <a
              href="#oferta"
              className="inline-block px-12 py-5 bg-primary text-primary-foreground font-bold text-xl rounded-lg border-2 border-primary animate-pulse-glow transition-all duration-300 transform hover:scale-105 cta-button"
            >
              TAKE CONTROL
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
