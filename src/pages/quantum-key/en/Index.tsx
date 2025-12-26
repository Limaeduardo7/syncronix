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
import LiveViewers from "@/components/quantum-key/LiveViewers";
import PurchaseNotifications from "@/components/quantum-key/PurchaseNotifications";

const purchaseNotificationsEN = [
  { name: "John Smith", location: "New York, USA" },
  { name: "Sarah Johnson", location: "Los Angeles, USA" },
  { name: "Michael Brown", location: "Chicago, USA" },
  { name: "Emily Davis", location: "Houston, USA" },
  { name: "David Wilson", location: "Phoenix, USA" },
  { name: "Jessica Martinez", location: "Philadelphia, USA" },
  { name: "James Anderson", location: "San Antonio, USA" },
  { name: "Jennifer Taylor", location: "San Diego, USA" },
  { name: "Robert Thomas", location: "Dallas, USA" },
  { name: "Linda Garcia", location: "Austin, USA" },
];

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden quantum-key-page">
      <SEO
        title="The Key to Power | eBook - Transform Your Reality"
        description="Discover ancient and modern knowledge in 351 pages. Quantum Physics, Kabbalah, Metaphysics and much more. The truth they never told you."
        keywords="ebook, power, knowledge, kabbalah, metaphysics, quantum physics, transformation, consciousness, alchemy, taoism, personal magnetism"
        canonical="https://achavdopoder.com/us"
        lang="en-US"
      />
      <WhatsAppButton />
      <PurchaseNotifications
        purchaseText="just purchased the eBook!"
        justNowText="just now"
        minutesAgoText="minutes ago"
        notifications={purchaseNotificationsEN}
      />

      <HeroSection />

      <div className="container mx-auto px-4 -mt-8 mb-8">
        <LiveViewers text="people are viewing this page right now" />
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
