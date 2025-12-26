import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const SummaryCarousel = () => {
  // Book summary images
  const summaryImages = [
    "/sumario-en-1.png",
    "/sumario-en-2.png",
    "/sumario-en-3.png",
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-black">

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-4 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-black">
            <span className="neon-text">Here's our book's table of contents!</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Each topic and concept will transform your perception of yourself and the world around you.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {summaryImages.map((image, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="glass-card p-3 hover:neon-border transition-all duration-300">
                  <img
                    src={image}
                    alt={`Table of contents page ${index + 1}`}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 bg-card/80 border-2 border-primary/50 hover:bg-primary hover:text-primary-foreground animate-pulse-glow" />
          <CarouselNext className="right-0 bg-card/80 border-2 border-primary/50 hover:bg-primary hover:text-primary-foreground animate-pulse-glow" />
        </Carousel>
      </div>
    </section>
  );
};

export default SummaryCarousel;
