const ManifestoSection = () => {
  return (
    <section className="section-padding bg-black relative overflow-hidden">

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          <p className="text-xl md:text-2xl font-semibold text-foreground/90 animate-fade-up">
            Este eBook es tu <span className="neon-text font-bold">pasaporte hacia una revolución personal</span>.
          </p>

          <p className="text-lg md:text-xl text-foreground/80 animate-fade-up delay-100">
            No esperes piedad del destino. La cuestión aquí es aceptar que tienes en tus manos <span className="neon-text font-bold">el poder que muchos solo sueñan con alcanzar</span>.
          </p>

          <p className="text-lg md:text-xl text-foreground/80 animate-fade-up delay-200">
            La mayoría prefiere la <span className="neon-text font-bold">sombra de la ignorancia</span>, donde es cómodo culpar al mundo, a las circunstancias, a cualquier cosa que justifique la <span className="neon-text font-bold">inercia</span>.
          </p>

          <p className="text-lg md:text-xl text-foreground/80 animate-fade-up delay-300">
            Pero tú, que has llegado hasta aquí, estás en una <span className="neon-text font-bold">encrucijada</span>. ¿Serás uno más en seguir las normas estándar del sistema y <span className="neon-text font-bold">desaparecer en la multitud</span>?
          </p>

          <p className="text-xl md:text-2xl font-semibold text-foreground/90 animate-fade-up delay-400">
            ¿O tendrás el <span className="neon-text font-bold">coraje de asumir el papel protagonista</span> en tu vida?
          </p>

          <p className="text-2xl md:text-3xl font-black animate-fade-up delay-500">
            <span className="neon-text">RECUERDA, LA ELECCIÓN ES TUYA.</span>
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
              href="https://pay.hotmart.com/Q97114057B?checkoutMode=10&bid=1766356135373"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 bg-primary text-primary-foreground font-bold text-xl rounded-lg border-2 border-primary animate-pulse-glow transition-all duration-300 transform hover:scale-105 cta-button"
            >
              TOMAR EL CONTROL
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
