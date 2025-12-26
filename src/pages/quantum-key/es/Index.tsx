import HeroSection from "@/components/quantum-key/es/HeroSection";
import EbookPresentation from "@/components/quantum-key/es/EbookPresentation";
import SummaryCarousel from "@/components/quantum-key/es/SummaryCarousel";
import ContentSummary from "@/components/quantum-key/es/ContentSummary";
import FeedbackSection from "@/components/quantum-key/es/FeedbackSection";
import PhilosophicalBlock from "@/components/quantum-key/es/PhilosophicalBlock";
import ConfrontationSection from "@/components/quantum-key/es/ConfrontationSection";
import ContentGallery from "@/components/quantum-key/es/ContentGallery";
import OfferSection from "@/components/quantum-key/es/OfferSection";
import GuaranteeSection from "@/components/quantum-key/es/GuaranteeSection";
import ManifestoSection from "@/components/quantum-key/es/ManifestoSection";
import Footer from "@/components/quantum-key/es/Footer";
import WhatsAppButton from "@/components/quantum-key/es/WhatsAppButton";
import SEO from "@/components/quantum-key/SEO";
import LiveViewers from "@/components/quantum-key/LiveViewers";
import PurchaseNotifications from "@/components/quantum-key/PurchaseNotifications";

const purchaseNotificationsES = [
  { name: "Carlos García", location: "Madrid, España" },
  { name: "María López", location: "Barcelona, España" },
  { name: "José Martínez", location: "Valencia, España" },
  { name: "Ana Rodríguez", location: "Sevilla, España" },
  { name: "Francisco Pérez", location: "Zaragoza, España" },
  { name: "Laura Sánchez", location: "Málaga, España" },
  { name: "Antonio Ramírez", location: "Murcia, España" },
  { name: "Carmen Torres", location: "Palma, España" },
  { name: "Juan Flores", location: "Bilbao, España" },
  { name: "Isabel Gómez", location: "Alicante, España" },
];

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden quantum-key-page">
      <SEO
        title="La Clave del Poder | eBook - Transforma tu Realidad"
        description="Descubre los conocimientos ancestrales y modernos en 351 páginas. Física Cuántica, Kabbalah, Metafísica y mucho más. La verdad que nunca te contaron."
        keywords="ebook, poder, conocimiento, kabbalah, metafísica, física cuántica, transformación, consciencia, alquimia, taoísmo, magnetismo personal"
        canonical="https://achavdopoder.com/es"
        lang="es-ES"
      />
      <WhatsAppButton />
      <PurchaseNotifications
        purchaseText="acaba de adquirir el eBook!"
        justNowText="justo ahora"
        minutesAgoText="minutos atrás"
        notifications={purchaseNotificationsES}
      />

      <HeroSection />

      <div className="container mx-auto px-4 -mt-8 mb-8">
        <LiveViewers text="personas están viendo esta página ahora" />
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
