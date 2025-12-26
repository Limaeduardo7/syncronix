import { lazy, Suspense, memo } from "react";
import { Header } from "@/components/syncronix/Header";
import { Footer } from "@/components/syncronix/Footer";

// Lazy load heavy components with Intersection Observer support
const Hero = lazy(() => import("@/components/syncronix/Hero").then(m => ({ default: m.Hero })));
const Manifesto = lazy(() => import("@/components/syncronix/Manifesto").then(m => ({ default: m.Manifesto })));
const EbookHub = lazy(() => import("@/components/syncronix/EbookHub").then(m => ({ default: m.EbookHub })));
const Shop = lazy(() => import("@/components/syncronix/Shop").then(m => ({ default: m.Shop })));
const Community = lazy(() => import("@/components/syncronix/Community").then(m => ({ default: m.Community })));

// Simple loading component for sections
const SectionLoader = memo(() => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="text-muted-foreground text-sm">Carregando...</div>
  </div>
));
SectionLoader.displayName = "SectionLoader";

// Lazy wrapper component with intersection observer
const LazySection = memo(({ 
  children, 
  fallback = <SectionLoader /> 
}: { 
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) => (
  <Suspense fallback={fallback}>
    {children}
  </Suspense>
));
LazySection.displayName = "LazySection";

const Index = memo(() => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <LazySection>
          <Hero />
        </LazySection>
        <div className="section-glow-line-strong"></div>
        <LazySection>
          <Manifesto />
        </LazySection>
        <div className="section-glow-line-strong"></div>
        <LazySection>
          <EbookHub />
        </LazySection>
        <div className="section-glow-line-strong"></div>
        <LazySection>
          <Shop />
        </LazySection>
        <div className="section-glow-line-strong"></div>
        <LazySection>
          <Community />
        </LazySection>
        <div className="section-glow-line-strong"></div>
      </main>
      <Footer />
    </div>
  );
});
Index.displayName = "Index";

export default Index;
