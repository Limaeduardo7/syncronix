import {
  Atom,
  BookOpen,
  Brain,
  Eye,
  Flame,
  Heart,
  Lightbulb,
  Moon,
  Sparkles,
  Star,
  Sun,
  Zap,
} from "lucide-react";

const topics = [
  { icon: Atom, title: "Física Cuántica" },
  { icon: Star, title: "Cábala" },
  { icon: Eye, title: "Metafísica" },
  { icon: Zap, title: "Magnetismo Personal" },
  { icon: Moon, title: "Taoísmo" },
  { icon: Flame, title: "Alquimia" },
  { icon: Brain, title: "Poder Mental" },
  { icon: Heart, title: "Creencias" },
  { icon: Sparkles, title: "Inconsciente" },
  { icon: Lightbulb, title: "Cómo Moldear la Realidad" },
  { icon: Sun, title: "Activar el Máximo Potencial" },
  { icon: BookOpen, title: "Bien vs Mal | Luz vs Sombra" },
];

const ContentSummary = () => {
  return (
    <section className="section-padding pt-0 bg-black relative overflow-hidden">

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            ¿Cuál es el contenido de nuestro{" "}
            <span className="neon-text">eBook?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cada capítulo ha sido <span className="neon-text font-bold">cuidadosamente estructurado</span> para guiarte a través
            de un camino de <span className="neon-text font-bold">conocimiento profundo y oculto</span> para la mayoría.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center group hover:neon-border transition-all duration-300 cursor-default animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <topic.icon className="w-10 h-10 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-sm md:text-base">
                {topic.title}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center pt-16 animate-fade-up delay-600">
          <a
            href="https://pay.hotmart.com/Q97114057B?checkoutMode=10&bid=1766356135373"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-primary text-primary-foreground font-bold text-xl rounded-lg border-2 border-primary animate-pulse-glow transition-all duration-300 transform hover:scale-105 cta-button"
          >
            ACCEDER A TODO ESTE CONOCIMIENTO
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContentSummary;
