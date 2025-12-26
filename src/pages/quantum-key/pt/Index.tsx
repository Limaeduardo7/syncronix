import HeroSection from "@/components/quantum-key/pt/HeroSection";
import EbookPresentation from "@/components/quantum-key/pt/EbookPresentation";
import SummaryCarousel from "@/components/quantum-key/pt/SummaryCarousel";
import ContentSummary from "@/components/quantum-key/pt/ContentSummary";
import FeedbackSection from "@/components/quantum-key/pt/FeedbackSection";
import PhilosophicalBlock from "@/components/quantum-key/pt/PhilosophicalBlock";
import ConfrontationSection from "@/components/quantum-key/pt/ConfrontationSection";
import ContentGallery from "@/components/quantum-key/pt/ContentGallery";
import OfferSection from "@/components/quantum-key/pt/OfferSection";
import GuaranteeSection from "@/components/quantum-key/pt/GuaranteeSection";
import ManifestoSection from "@/components/quantum-key/pt/ManifestoSection";
import Footer from "@/components/quantum-key/pt/Footer";
import WhatsAppButton from "@/components/quantum-key/pt/WhatsAppButton";
import SEO from "@/components/quantum-key/SEO";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <SEO
        title="A Chave do Poder | eBook - Transforme sua Realidade"
        description="Descubra os conhecimentos ancestrais e modernos em 351 páginas. Física Quântica, Kabbalah, Metafísica e muito mais. A verdade que jamais te contaram."
        keywords="ebook, poder, conhecimento, kabbalah, metafísica, física quântica, transformação, consciência, alquimia, taoísmo, magnetismo pessoal"
        canonical="https://achavdopoder.com"
        lang="pt-BR"
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
