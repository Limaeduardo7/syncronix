import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const feedbacks = [
  "/WhatsApp-Image-2024-12-11-at-16.41.11-1.jpeg",
  "/WhatsApp-Image-2024-12-11-at-16.41.11-2.jpeg",
  "/WhatsApp-Image-2024-12-11-at-16.41.11-1 (1).jpeg",
  "/WhatsApp-Image-2024-12-11-at-16.41.11-4.jpeg",
  "/WhatsApp-Image-2024-12-11-at-16.41.11-5.jpeg",
  "/WhatsApp-Image-2024-12-11-at-16.41.11.jpeg",
  "/WhatsApp-Image-2024-12-11-at-16.41.12-1.jpeg",
  "/WhatsApp-Image-2024-12-11-at-16.41.12-3.jpeg",
  "/WhatsApp-Image-2024-12-11-at-16.41.12-4.jpeg",
  "/WhatsApp-Image-2024-12-11-at-16.41.12.jpeg",
  "/WhatsApp-Image-2024-12-11-at-16.41.12-2.jpeg",
];

const FeedbackSection = () => {
  return (
    <section className="section-padding abstract-bg relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-15" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            See some{" "}
            <span className="neon-text">feedback</span> from our readers
          </h2>
        </div>

        {/* Carousel */}
        <div className="animate-fade-up delay-100">
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
            {feedbacks.map((feedback, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="glass-card p-3 hover:neon-border transition-all duration-300">
                  <img
                    src={feedback}
                    alt={`Feedback ${index + 1}`}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
            <CarouselPrevious className="left-0 top-1/3 bg-card/80 border-2 border-primary/50 hover:bg-primary hover:text-primary-foreground animate-pulse-glow" />
            <CarouselNext className="right-0 top-1/3 bg-card/80 border-2 border-primary/50 hover:bg-primary hover:text-primary-foreground animate-pulse-glow" />
          </Carousel>
        </div>

        {/* CTA Button */}
        <div className="text-center pt-12 animate-fade-up delay-200">
          <a
            href="#oferta"
            className="inline-block px-12 py-5 bg-primary text-primary-foreground font-bold text-xl rounded-lg border-2 border-primary animate-pulse-glow transition-all duration-300 transform hover:scale-105 cta-button"
          >
            I WANT THIS TRANSFORMATION
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
