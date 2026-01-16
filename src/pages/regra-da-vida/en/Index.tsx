import SEO from "@/components/quantum-key/SEO";
import LiveViewers from "@/components/quantum-key/LiveViewers";
import PurchaseNotifications from "@/components/quantum-key/PurchaseNotifications";
import { americanPurchaseNotifications } from "@/components/quantum-key/notificationsData";
import { Check, Brain, Target, Zap, ChevronLeft, ChevronRight, ShieldCheck, CreditCard, Download, Clock } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";
import CountdownTimer from "@/components/regra-da-vida/en/CountdownTimer";
import GuaranteeSection from "@/components/regra-da-vida/en/GuaranteeSection";
import Footer from "@/components/regra-da-vida/en/Footer";
import WhatsAppButton from "@/components/regra-da-vida/WhatsAppButton";

const BookPreviewCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const previews = [
    {
      image: "/regra-da-vida/ingles/CAPA.jpeg",
      alt: "Front Cover - The Rule of Life"
    },
    {
      image: "/regra-da-vida/ingles/pt1.jpeg",
      alt: "Part 1 - The Rule of Life"
    },
    {
      image: "/regra-da-vida/ingles/pt2 (1).jpeg",
      alt: "Part 2 - The Rule of Life"
    },
    {
      image: "/regra-da-vida/ingles/pt2.jpeg",
      alt: "Part 2 Continued - The Rule of Life"
    },
    {
      image: "/regra-da-vida/ingles/pt3.jpeg",
      alt: "Part 3 - The Rule of Life"
    }
  ];

  return (
    <section className="relative py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Content Preview
        </h2>
        <p className="text-xl text-gray-700 text-center mb-16 max-w-3xl mx-auto">
          See some pages from the book and discover the visual and direct approach that makes complex concepts clear and applicable
        </p>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {previews.map((preview, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_40%] min-w-0"
                >
                  <div className="group relative rounded-2xl overflow-hidden border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-200/50">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-cyan-50/0 group-hover:from-blue-50/30 group-hover:to-cyan-50/30 transition-all duration-300"></div>
                    <img
                      src={preview.image}
                      alt={preview.alt}
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 italic">
            Visual, direct content based on how the mind actually works
          </p>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-gray-900 relative">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      {/* Gradient Orbs */}
      <div className="fixed top-0 -left-40 w-96 h-96 bg-gradient-to-r from-cyan-200/40 to-blue-200/40 rounded-full blur-[120px] animate-pulse"></div>
      <div className="fixed bottom-0 -right-40 w-96 h-96 bg-gradient-to-r from-blue-200/40 to-indigo-200/40 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-100/30 to-blue-100/30 rounded-full blur-[150px]"></div>

      <SEO
        title="The Rule of Life | eBook - Applied Mental Clarity"
        description="Visual manual of mental engineering that reveals what really controls your decisions, habits, and results. Stop trying harder and understand the system."
        keywords="ebook, habit change, identity, behavior, human mind, transformation, mental clarity, personal development, mental engineering"
        ogImage="https://achavdopoder.com/regra-da-vida/ingles/MOCKUP%20PRESENTS%20INGLES.png"
        canonical="https://achavdopoder.com/ebook-the-rule-of-life"
        lang="en"
      />

      <WhatsAppButton />

      <PurchaseNotifications
        purchaseText="just purchased the eBook!"
        justNowText="bought now"
        notifications={americanPurchaseNotifications}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white to-white"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Countdown Timer */}
          <CountdownTimer />

          {/* Offer Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 border border-blue-300 rounded-full bg-blue-50">
            <span className="text-blue-500 font-bold text-sm tracking-wide">SPECIAL OFFER</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-gray-900 leading-tight">
            THE RULE OF LIFE
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed font-medium">
            Your mind has rules. Understand them or be enslaved by them.
          </p>

          <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            The Rule of Life is a visual mental engineering manual that reveals what really controls your decisions, habits, and results.
          </p>

          {/* VSL Video Player */}
          <div className="mb-16 max-w-4xl mx-auto px-4">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20 border-4 border-white">
              <iframe
                src="https://www.youtube.com/embed/Tz0blcWBZ-M"
                title="VSL The Rule of Life"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Mockup do eBook */}
          <div className="mb-12 flex justify-center">
            <img
              src="/regra-da-vida/ingles/mockup ingles resized 1x1-min.png"
              alt="The Rule of Life eBook Mockup"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain drop-shadow-2xl rounded-3xl animate-float"
            />
          </div>

          <div className="mb-12">
            <LiveViewers text="people are viewing this page right now" color="blue" />
          </div>

          <a
            href="#oferta"
            className="inline-flex items-center justify-center gap-3 px-16 py-6 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg md:text-2xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl animate-pulse-glow-blue"
          >
            <span>I WANT ACCESS NOW</span>
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Book Preview Section */}
      <BookPreviewCarousel />

      {/* Why "Trying Harder" Fails */}
      <section className="relative py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* GIF */}
          <div className="mb-12 flex justify-center">
            <img
              src="/regra-da-vida/c32d93b8fd84f270d94b838d5e6ebbe4.gif"
              alt="Animation"
              className="w-full max-w-2xl object-contain rounded-2xl"
            />
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-center mb-6 text-gray-900">
            Why trying harder doesn't work
          </h2>
          <p className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto leading-relaxed">
            Willpower works like a <span className="text-red-600 font-bold">battery</span>, it runs out. But <span className="text-blue-500 font-bold">identity</span> works like an <span className="text-blue-500 font-bold">autopilot</span>, always on, guiding decisions and behaviors without requiring effort.
          </p>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            When you try to change only through force, the <span className="text-blue-500 font-bold">autopilot</span> corrects the course and takes you back to the old pattern. It's not weakness or lack of discipline. It's just the brain maintaining what it considers normal.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative p-8 rounded-2xl bg-blue-50/50 border border-blue-100 text-center">
              <div className="w-16 h-16 mb-6 rounded-xl bg-blue-100 flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Habit</h3>
              <p className="text-gray-600 leading-relaxed">
                Repetitive patterns your mind created to save energy and keep you where you are.
              </p>
            </div>

            <div className="relative p-8 rounded-2xl bg-blue-50/50 border border-blue-100 text-center">
              <div className="w-16 h-16 mb-6 rounded-xl bg-blue-100 flex items-center justify-center mx-auto">
                <Brain className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Autopilot</h3>
              <p className="text-gray-600 leading-relaxed">
                95% of your actions are automatic. If you don't understand their logic, you're just a passenger.
              </p>
            </div>

            <div className="relative p-8 rounded-2xl bg-blue-50/50 border border-blue-100 text-center">
              <div className="w-16 h-16 mb-6 rounded-xl bg-blue-100 flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Loop</h3>
              <p className="text-gray-600 leading-relaxed">
                The invisible cycle that makes you commit the same mistakes even when you know what should be done.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <a
              href="#oferta"
              className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-blue-500 hover:bg-blue-600 text-white font-bold text-xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl animate-pulse-glow-blue"
            >
              <span>I WANT TO UNDERSTAND THE RULE</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* The game changes when you understand the rule */}
      <section className="relative py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-6 text-gray-900">
            The game changes when you understand the rule
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Leave trial and error behind and enter the field of pure strategy.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* THE COMMON WAY */}
            <div className="relative p-8 rounded-2xl bg-white border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-red-500 font-bold text-xl">✗</span>
                </div>
                <h3 className="text-xl font-bold text-red-600">THE COMMON WAY</h3>
              </div>

              <h4 className="text-2xl font-bold text-gray-900 mb-6">Trying to change through brute force</h4>

              <ul className="space-y-4">
                {[
                  "Depends on fleeting motivation",
                  "Generates constant anxiety and stress",
                  "Ends in frustration and guilt",
                  "Results that disappear within weeks"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-600">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* THE RULE OF LIFE */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-400 shadow-xl">
              <div className="absolute top-4 right-4 px-4 py-1 bg-green-600 text-white text-xs font-bold rounded-full">
                RECOMMENDED
              </div>

              <div className="flex items-center gap-3 mb-6 mt-4">
                <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-600">THE RULE OF LIFE</h3>
              </div>

              <h4 className="text-2xl font-bold text-gray-900 mb-6">Understanding the Internal System</h4>

              <ul className="space-y-4">
                {[
                  "Uses the biological logic of the mind",
                  "Light and sustainable process",
                  "Self-control that becomes natural",
                  "Change based on structure, not force"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <a
              href="#oferta"
              className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-blue-500 hover:bg-blue-600 text-white font-bold text-xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl animate-pulse-glow-blue"
            >
              <span>I WANT TO TRULY CHANGE</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* What makes this manual different */}
      <section className="relative py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <img
              src="/regra-da-vida/ingles/MOCKUP PRESENTS INGLES.png"
              alt="The Rule of Life - eBook"
              className="w-full max-w-sm object-contain drop-shadow-2xl rounded-3xl animate-float"
            />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 text-gray-900">
            What makes this manual different
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: "Visual Manual",
                description: "Forget endless blocks of text. Clear diagrams and mind maps that your brain understands instantly."
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Direct Language",
                description: "No academic fluff. Facts, logic, and strategic application for adults who value their time."
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Efficient Consumption",
                description: "Designed to be read and applied quickly. The knowledge you need, without the excess."
              },
              {
                icon: <Target className="w-10 h-10" />,
                title: "Real Tools",
                description: "Comes with mental models you can start using immediately after the first page."
              }
            ].map((item, index) => (
              <div key={index} className="relative p-6 rounded-xl bg-blue-50/50 border border-blue-100 hover:border-blue-400 hover:bg-blue-50/30 transition-all duration-300 text-center">
                <div className="w-14 h-14 mb-4 rounded-xl bg-blue-100 flex items-center justify-center text-blue-500 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="relative py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            The transformation you'll experience
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Before */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200">
              <div className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white text-sm font-bold rounded-full">
                BEFORE
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-4">Without mental clarity</h3>
              <ul className="space-y-4">
                {[
                  "Repeats the same mistakes constantly",
                  "Fights against yourself without understanding why",
                  "Temporary changes that don't last",
                  "Willpower that quickly depletes",
                  "Feeling stuck in the same patterns"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="text-red-500 text-xl font-bold">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-green-50 to-cyan-50 border-2 border-green-300 shadow-xl">
              <div className="absolute top-4 right-4 px-4 py-2 bg-green-600 text-white text-sm font-bold rounded-full">
                AFTER
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-4">With mental clarity</h3>
              <ul className="space-y-4">
                {[
                  "Understands patterns and knows how to change them",
                  "Aligns identity with desired outcomes",
                  "Deep and permanent changes",
                  "Mental system that works in your favor",
                  "Freedom to create the life you want to live"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="text-green-600 text-xl font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <a
              href="#oferta"
              className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-blue-500 hover:bg-blue-600 text-white font-bold text-xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl animate-pulse-glow-blue"
            >
              <span>YES, I WANT MENTAL CLARITY</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Impactful Quote */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 mb-8 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
            <Zap className="w-8 h-8 text-blue-500" />
          </div>

          <h2 className="text-3xl md:text-5xl font-black mb-8 text-gray-900 leading-tight">
            This material is not motivational. It won't promise you millions or eternal happiness. It explains how the machinery works.
          </h2>

          <p className="text-xl text-gray-500 font-medium tracking-wider">
            THE RULE OF LIFE IS ABOUT STRUCTURE, NOT INSPIRATION.
          </p>
        </div>
      </section>

      {/* Who this book is / isn't for */}
      <section className="relative py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* This manual is for you if */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl font-black text-green-600">01</span>
                <h3 className="text-2xl font-bold text-gray-900">This manual is for you if:</h3>
              </div>

              <ul className="space-y-4">
                {[
                  "You seek logical clarity and are tired of subjective or mystical methods.",
                  "You feel you're always 'almost there' and want to understand what's holding you back.",
                  "You value objectivity and want tools that work in practice."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4 text-gray-700">
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Don't waste your time if */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl font-black text-red-600">02</span>
                <h3 className="text-2xl font-bold text-gray-400">Don't waste your time if:</h3>
              </div>

              <ul className="space-y-4">
                {[
                  "You're looking for a 'magic shortcut' or pill for quick success.",
                  "You just want a dose of loud motivation to feel good for 10 minutes.",
                  "You're not willing to read rational facts about your own mind."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4 text-gray-400">
                    <span className="w-6 h-6 flex-shrink-0 mt-1 text-xl text-red-500">✗</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Where real change happens */}
      <section className="relative py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* GIF */}
          <div className="mb-12 flex justify-center">
            <img
              src="/regra-da-vida/cb6f7c3462fe3af6071f4715b45dd818.gif"
              alt="Animation"
              className="w-full max-w-2xl object-contain rounded-2xl"
            />
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-center mb-6 text-gray-900">
            Where real change happens
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            The pillars that make up the manual and how they will reorganize your way of thinking.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-blue-100 hover:border-blue-400 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Automatic Decision Algorithm</h3>
              <p className="text-gray-600 leading-relaxed">
                Discover how your brain chooses the path of least resistance in milliseconds and learn to 'insert' new variables into this calculation to change your choices effortlessly.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-blue-100 hover:border-blue-400 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The End of Willpower</h3>
              <p className="text-gray-600 leading-relaxed">
                Understand why discipline fails and how to create an environment (mental and physical) where the right behavior is the easiest choice.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-blue-100 hover:border-blue-400 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reactive Identity</h3>
              <p className="text-gray-600 leading-relaxed">
                How to decouple who you are from what you do, allowing failures to be adjustment data instead of wounds to the ego.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-blue-100 hover:border-blue-400 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">New Habits Architecture</h3>
              <p className="text-gray-600 leading-relaxed">
                The exact protocol to 'install' productive routines. Less friction, more consistency. Learn to use neuroplasticity in your favor, not against it.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <a
              href="#oferta"
              className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-blue-500 hover:bg-blue-600 text-white font-bold text-xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl animate-pulse-glow-blue"
            >
              <span>I WANT ACCESS NOW</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="oferta" className="relative py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/30 via-transparent to-transparent"></div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-1 gap-12 items-center max-w-3xl mx-auto">
            {/* Pricing Card */}
            <div className="relative p-8 md:p-12 rounded-2xl bg-white border-2 border-blue-300 shadow-2xl shadow-blue-200/50 text-center overflow-hidden">
              {/* Animated Border Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-cyan-100/30 to-blue-100/30 opacity-50 blur-xl"></div>

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 border border-blue-300 rounded-full bg-blue-50">
                  <span className="text-blue-500 font-bold text-sm tracking-wide">SPECIAL OFFER</span>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">
                  The Rule of Life
                </h3>

                {/* Mockup do eBook */}
                <div className="mb-8 flex justify-center">
                  <img
                    src="/regra-da-vida/ingles/mockup ingles resized 1x1-min.png"
                    alt="The Rule of Life eBook Mockup"
                    className="w-full max-w-sm object-contain drop-shadow-2xl rounded-3xl animate-float"
                  />
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">5.0</span>
                  <span className="text-sm text-gray-500">(2,847 reviews)</span>
                </div>

                {/* Subtitle */}
                <h4 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
                  Become the owner of the game.
                </h4>
                <p className="text-xl md:text-2xl font-semibold mb-8 text-gray-800">
                  Be the one who <span className="text-blue-500 font-black">dictates the rule</span>.
                </p>

                {/* Benefits */}
                <div className="text-left mb-8 space-y-3 bg-blue-50/50 p-6 rounded-xl">
                  {[
                    "Strategic Manual in PDF",
                    "Mental Flow Diagrams",
                    "Lifetime Access + Updates"
                  ].map((benefit, index) => (
                    <p key={index} className="text-gray-700 flex items-center gap-3 text-base">
                      <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span className="font-medium">{benefit}</span>
                    </p>
                  ))}
                </div>

                {/* Pricing */}
                <div className="mb-8 space-y-3">
                  <p className="text-red-500 line-through text-2xl md:text-3xl font-black">
                    $ 29.99
                  </p>
                  <p className="text-lg font-semibold text-gray-600">for only</p>
                  <p className="text-5xl md:text-6xl font-black text-blue-500">
                    $ 12.99
                  </p>
                  <p className="text-lg font-semibold text-gray-600">cash payment</p>
                </div>

                {/* CTA */}
                <a
                  href="https://pay.hotmart.com/U103487608E?checkoutMode=10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full px-12 py-6 bg-blue-500 hover:bg-blue-600 text-white font-bold text-xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl animate-pulse-glow-blue mb-8"
                >
                  BUY NOW
                </a>

                {/* Trust badges */}
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2 justify-center">
                    <ShieldCheck className="w-5 h-5 text-blue-500" />
                    <span>Secure purchase</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <CreditCard className="w-5 h-5 text-blue-500" />
                    <span>Easy payment</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <Download className="w-5 h-5 text-blue-500" />
                    <span>Instant access</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <span>7-day guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-gray-900 leading-tight">
            Your mind has rules. Understand them or be enslaved by them.
          </h2>

          <a
            href="https://pay.hotmart.com/U103487608E?checkoutMode=10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-16 py-6 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg md:text-2xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl animate-pulse-glow-blue"
          >
            <span>START NOW</span>
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Guarantee Section */}
      <GuaranteeSection />

      {/* FAQ Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                question: "How and when do I receive the book?",
                answer: "Access is immediate via email. As soon as payment is confirmed, you receive an exclusive link from Hotmart to download the complete manual and all extras."
              },
              {
                question: "Is the content focused on theory or practice?",
                answer: "The manual is 80% practical. We use theory only to ground the logic of the tools you'll apply in your daily life."
              },
              {
                question: "Can I read it on Kindle or mobile phone?",
                answer: "Yes. The PDF has been optimized for reading on mobile devices, tablets, and computers, maintaining the visual clarity of diagrams."
              },
              {
                question: "Why is the price so affordable?",
                answer: "Our goal is for 'The Rule of Life' to be the foundation for as many people as possible. The low price removes the entry barrier for those who want to start change today."
              }
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-white rounded-xl border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <span className="text-blue-600 text-2xl">?</span>
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
