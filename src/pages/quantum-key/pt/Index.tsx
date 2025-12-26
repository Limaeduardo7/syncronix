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
import LiveViewers from "@/components/quantum-key/LiveViewers";
import PurchaseNotifications from "@/components/quantum-key/PurchaseNotifications";

const purchaseNotificationsPT = [
  { name: "Maria Silva", location: "São Paulo, SP" },
  { name: "João Santos", location: "Rio de Janeiro, RJ" },
  { name: "Ana Costa", location: "Belo Horizonte, MG" },
  { name: "Pedro Oliveira", location: "Curitiba, PR" },
  { name: "Carla Souza", location: "Porto Alegre, RS" },
  { name: "Lucas Ferreira", location: "Brasília, DF" },
  { name: "Juliana Lima", location: "Salvador, BA" },
  { name: "Roberto Alves", location: "Fortaleza, CE" },
  { name: "Patricia Ribeiro", location: "Recife, PE" },
  { name: "Fernando Martins", location: "Manaus, AM" },
];

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden quantum-key-page">
      <SEO
        title="A Chave do Poder | eBook - Transforme sua Realidade"
        description="Descubra os conhecimentos ancestrais e modernos em 351 páginas. Física Quântica, Kabbalah, Metafísica e muito mais. A verdade que jamais te contaram."
        keywords="ebook, poder, conhecimento, kabbalah, metafísica, física quântica, transformação, consciência, alquimia, taoísmo, magnetismo pessoal"
        canonical="https://achavdopoder.com"
        lang="pt-BR"
      />
      <WhatsAppButton />
      <PurchaseNotifications
        purchaseText="acabou de adquirir o eBook!"
        justNowText="agora mesmo"
        minutesAgoText="minutos atrás"
        notifications={purchaseNotificationsPT}
      />

      <HeroSection />

      <div className="container mx-auto px-4 -mt-8 mb-8">
        <LiveViewers text="pessoas estão visualizando esta página agora" />
      </div>

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
