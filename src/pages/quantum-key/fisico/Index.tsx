import HeroSection from "@/components/quantum-key/fisico/HeroSection";
import EbookPresentation from "@/components/quantum-key/fisico/EbookPresentation";
import SummaryCarousel from "@/components/quantum-key/fisico/SummaryCarousel";
import ContentSummary from "@/components/quantum-key/fisico/ContentSummary";
import FeedbackSection from "@/components/quantum-key/fisico/FeedbackSection";
import PhilosophicalBlock from "@/components/quantum-key/fisico/PhilosophicalBlock";
import ConfrontationSection from "@/components/quantum-key/fisico/ConfrontationSection";
import ContentGallery from "@/components/quantum-key/fisico/ContentGallery";
import OfferSection from "@/components/quantum-key/fisico/OfferSection";
import GuaranteeSection from "@/components/quantum-key/fisico/GuaranteeSection";
import ManifestoSection from "@/components/quantum-key/fisico/ManifestoSection";
import Footer from "@/components/quantum-key/fisico/Footer";
import WhatsAppButton from "@/components/quantum-key/fisico/WhatsAppButton";
import SEO from "@/components/quantum-key/SEO";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <SEO
        title="A Chave do Poder | Livro Físico - Transforme sua Realidade"
        description="Adquira o livro físico com 351 páginas de conhecimento ancestral e moderno. Física Quântica, Kabbalah, Metafísica e muito mais. Edição física premium."
        keywords="livro físico, poder, conhecimento, kabbalah, metafísica, física quântica, transformação, consciência, alquimia, taoísmo, edição física"
        canonical="https://achavdopoder.com/fisico"
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
