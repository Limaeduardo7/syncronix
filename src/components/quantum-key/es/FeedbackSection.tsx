import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const feedbacks = [
  "/testimonial-es-1.jpg",
  "/testimonial-es-2.jpg",
  "/testimonial-es-3.jpg",
  "/testimonial-es-4.jpg",
  "/testimonial-es-5.jpg",
  "/testimonial-es-6.jpg",
  "/testimonial-es-7.jpg",
  "/testimonial-es-8.jpg",
  "/testimonial-es-9.jpg",
  "/testimonial-es-10.jpg",
  "/testimonial-es-11.jpg",
];

const FeedbackSection = () => {
  return (
    <section className="section-padding abstract-bg relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-15" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Mira algunos{" "}
            <span className="neon-text">testimonios</span> de nuestros lectores
          </h2>
          <p className="text-sm text-muted-foreground/60 italic mt-2">
            * Testimonios traducidos automáticamente del portugués
          </p>
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
                <div className="glass-card p-3 hover:neon-border transition-all duration-300 h-full flex items-center justify-center">
                  <img
                    src={feedback}
                    alt={`Feedback ${index + 1}`}
                    className="w-full h-auto rounded-lg object-contain"
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
            href="https://pay.hotmart.com/Q97114057B?checkoutMode=10&bid=1766356135373"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-primary text-primary-foreground font-bold text-xl rounded-lg border-2 border-primary animate-pulse-glow transition-all duration-300 transform hover:scale-105 cta-button"
          >
            QUIERO ESTA TRANSFORMACIÓN
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
