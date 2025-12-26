const ManifestoSection = () => {
  return (
    <section className="section-padding bg-black relative overflow-hidden">

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          <p className="text-xl md:text-2xl font-semibold text-foreground/90 animate-fade-up">
            Este eBook é seu <span className="neon-text font-bold">passaporte para uma revolução pessoal</span>.
          </p>

          <p className="text-lg md:text-xl text-foreground/80 animate-fade-up delay-100">
            Não espere piedade do destino. A questão aqui é aceitar que você tem em mãos <span className="neon-text font-bold">o poder que muitos apenas sonham em alcançar</span>.
          </p>

          <p className="text-lg md:text-xl text-foreground/80 animate-fade-up delay-200">
            A maioria prefere a <span className="neon-text font-bold">sombra da ignorância</span>, onde é confortável culpar o mundo, as circunstâncias, qualquer coisa que justifique a <span className="neon-text font-bold">inércia</span>.
          </p>

          <p className="text-lg md:text-xl text-foreground/80 animate-fade-up delay-300">
            Mas você, que chegou até aqui, está numa <span className="neon-text font-bold">encruzilhada</span>. Será apenas mais um a seguir as normas padrão do sistema e <span className="neon-text font-bold">desaparecer na multidão</span>?
          </p>

          <p className="text-xl md:text-2xl font-semibold text-foreground/90 animate-fade-up delay-400">
            Ou terá a <span className="neon-text font-bold">coragem de assumir o papel de protagonista</span> na sua vida?
          </p>

          <p className="text-2xl md:text-3xl font-black animate-fade-up delay-500">
            <span className="neon-text">LEMBRE-SE, A ESCOLHA É SUA.</span>
          </p>

          {/* GIF */}
          <div className="flex justify-center py-8 animate-fade-up delay-550">
            <img
              src="/giphy (5).gif"
              alt="A Escolha"
              className="w-full max-w-md rounded-2xl shadow-2xl"
            />
          </div>

          {/* Final CTA */}
          <div className="pt-8 animate-fade-up delay-600">
            <a
              href="#oferta"
              className="inline-block px-12 py-5 bg-primary text-primary-foreground font-bold text-xl rounded-lg border-2 border-primary animate-pulse-glow transition-all duration-300 transform hover:scale-105 cta-button"
            >
              ASSUMIR O CONTROLE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
