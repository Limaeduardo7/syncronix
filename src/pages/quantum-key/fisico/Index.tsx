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
import LiveViewers from "@/components/quantum-key/LiveViewers";
import PurchaseNotifications from "@/components/quantum-key/PurchaseNotifications";

const purchaseNotificationsFisico = [
  { name: "Carlos Mendes", location: "Rio de Janeiro, RJ" },
  { name: "Fernanda Costa", location: "São Paulo, SP" },
  { name: "Ricardo Oliveira", location: "Belo Horizonte, MG" },
  { name: "Beatriz Santos", location: "Curitiba, PR" },
  { name: "Gustavo Silva", location: "Porto Alegre, RS" },
  { name: "Camila Rodrigues", location: "Brasília, DF" },
  { name: "Rafael Almeida", location: "Salvador, BA" },
  { name: "Mariana Pereira", location: "Fortaleza, CE" },
  { name: "Bruno Carvalho", location: "Recife, PE" },
  { name: "Larissa Souza", location: "Florianópolis, SC" },
];

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden quantum-key-page">
      <SEO
        title="A Chave do Poder | Livro Físico - Transforme sua Realidade"
        description="Adquira o livro físico com 351 páginas de conhecimento ancestral e moderno. Física Quântica, Kabbalah, Metafísica e muito mais. Edição física premium."
        keywords="livro físico, poder, conhecimento, kabbalah, metafísica, física quântica, transformação, consciência, alquimia, taoísmo, edição física"
        canonical="https://achavdopoder.com/fisico"
        lang="pt-BR"
      />
      <WhatsAppButton />
      <PurchaseNotifications
        purchaseText="acabou de adquirir o Livro Físico!"
        justNowText="agora mesmo"
        minutesAgoText="minutos atrás"
        notifications={purchaseNotificationsFisico}
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
