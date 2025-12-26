import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const screenshots = [
  "/Screenshot_11.png",
  "/Screenshot_10.png",
  "/Screenshot_9.png",
  "/Screenshot_7.png",
  "/Screenshot_6.png",
  "/Screenshot_5.png",
  "/Screenshot_4.png",
  "/Screenshot_3.png",
  "/Screenshot_2.png",
  "/Screenshot_1.png",
];

const ContentGallery = () => {
  return (
    <section className="section-padding bg-black relative overflow-hidden">

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            A <span className="neon-text">preview</span> of the content
          </h2>
          <p className="text-muted-foreground">
            See what awaits you inside the eBook
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
                      alt={`Content preview ${index + 1}`}
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
            href="#oferta"
            className="inline-block px-12 py-5 bg-primary text-primary-foreground font-bold text-xl rounded-lg border-2 border-primary animate-pulse-glow transition-all duration-300 transform hover:scale-105 cta-button"
          >
            SECURE MY COPY NOW
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContentGallery;
