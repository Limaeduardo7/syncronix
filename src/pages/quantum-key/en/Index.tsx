import HeroSection from "@/components/quantum-key/en/HeroSection";
import EbookPresentation from "@/components/quantum-key/en/EbookPresentation";
import SummaryCarousel from "@/components/quantum-key/en/SummaryCarousel";
import ContentSummary from "@/components/quantum-key/en/ContentSummary";
import FeedbackSection from "@/components/quantum-key/en/FeedbackSection";
import PhilosophicalBlock from "@/components/quantum-key/en/PhilosophicalBlock";
import ConfrontationSection from "@/components/quantum-key/en/ConfrontationSection";
import ContentGallery from "@/components/quantum-key/en/ContentGallery";
import OfferSection from "@/components/quantum-key/en/OfferSection";
import GuaranteeSection from "@/components/quantum-key/en/GuaranteeSection";
import ManifestoSection from "@/components/quantum-key/en/ManifestoSection";
import Footer from "@/components/quantum-key/en/Footer";
import WhatsAppButton from "@/components/quantum-key/en/WhatsAppButton";
import SEO from "@/components/quantum-key/SEO";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <SEO
        title="The Key to Power | eBook - Transform Your Reality"
        description="Discover ancient and modern knowledge in 351 pages. Quantum Physics, Kabbalah, Metaphysics and much more. The truth they never told you."
        keywords="ebook, power, knowledge, kabbalah, metaphysics, quantum physics, transformation, consciousness, alchemy, taoism, personal magnetism"
        canonical="https://achavdopoder.com/us"
        lang="en-US"
      />
      <WhatsAppButton />

      <HeroSection />
      <EbookPresentation />
      <SummaryCarousel />
      <ContentSummary />
      <FeedbackSection />
      <PhilosophicalBlock />
      <ConfrontationSection />
      <ContentGallery />
      <OfferSection />
      <GuaranteeSection />
      <ManifestoSection />
      <Footer />
    </main>
  );
};

export default Index;
