import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const SummaryCarousel = () => {
  // Imagens do sumário do livro
  const summaryImages = [
    "/IMG_3758.webp",
    "/IMG_3759.webp",
    "/IMG_3760.webp",
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-black">

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-4 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-black">
            <span className="neon-text">Aqui está o sumário do nosso livro!</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Cada tema e cada conceito irá transformar sua percepção sobre si e sobre o mundo ao seu redor.
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
                    alt={`Sumário página ${index + 1}`}
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
