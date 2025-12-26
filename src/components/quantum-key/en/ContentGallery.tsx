import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const screenshots = [
  "/preview-en-1.png",
  "/preview-en-2.png",
  "/preview-en-3.png",
  "/preview-en-4.png",
  "/preview-en-5.png",
  "/preview-en-6.png",
  "/preview-en-7.png",
  "/preview-en-8.png",
  "/preview-en-9.png",
  "/preview-en-10.png",
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
            href="https://pay.hotmart.com/H98004318H?off=dxizckv8&checkoutMode=10&bid=1766356727625"
            target="_blank"
            rel="noopener noreferrer"
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
