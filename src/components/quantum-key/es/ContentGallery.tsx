import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const screenshots = [
  "/preview-es-1.png",
  "/preview-es-2.png",
  "/preview-es-3.png",
  "/preview-es-4.png",
  "/preview-es-5.png",
  "/preview-es-6.png",
  "/preview-es-7.png",
  "/preview-es-8.png",
  "/preview-es-9.png",
  "/preview-es-10.png",
];

const ContentGallery = () => {
  return (
    <section className="section-padding bg-black relative overflow-hidden">

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Una <span className="neon-text">vista previa</span> del contenido
          </h2>
          <p className="text-muted-foreground">
            Mira lo que te espera dentro del eBook
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className="animate-fade-up delay-100">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {screenshots.map((screenshot, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/2"
                >
                  <div className="glass-card p-3 hover:neon-border transition-all duration-300">
                    <img
                      src={screenshot}
                      alt={`Vista previa del contenido ${index + 1}`}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-card/80 border-primary/30 hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="right-0 bg-card/80 border-primary/30 hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
        </div>

        {/* CTA Button */}
        <div className="text-center pt-12 animate-fade-up delay-200">
          <a
            href="https://pay.hotmart.com/Q97114057B?checkoutMode=10&bid=1766356135373"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-primary text-primary-foreground font-bold text-xl rounded-lg border-2 border-primary animate-pulse-glow transition-all duration-300 transform hover:scale-105 cta-button"
          >
            ASEGURAR MI COPIA AHORA
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContentGallery;
