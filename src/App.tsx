import { lazy, Suspense } from "react";
import { m, LazyMotion, domMax } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import LoadingOverlay from "@/components/ui/LoadingOverlay";

// Lazy load pages for code splitting
const Index = lazy(() => import("./pages/Index"));
const Ebooks = lazy(() => import("./pages/Ebooks"));
const Shop = lazy(() => import("./pages/Shop"));
const Comunidade = lazy(() => import("./pages/Comunidade"));
const Sobre = lazy(() => import("./pages/Sobre"));
const BookDemo = lazy(() => import("./pages/BookDemo"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Quantum Key pages
const QuantumKeyPT = lazy(() => import("./pages/quantum-key/pt/Index"));
const QuantumKeyEN = lazy(() => import("./pages/quantum-key/en/Index"));
const QuantumKeyES = lazy(() => import("./pages/quantum-key/es/Index"));
const QuantumKeyFisico = lazy(() => import("./pages/quantum-key/fisico/Index"));

// Regra da Vida pages
const RegraDaVidaPT = lazy(() => import("./pages/regra-da-vida/pt/Index"));
const RegraDaVidaEN = lazy(() => import("./pages/regra-da-vida/en/Index"));
const RegraDaVidaES = lazy(() => import("./pages/regra-da-vida/es/Index"));

// Alma Livre pages
const AlmaLivrePT = lazy(() => import("./pages/alma-livre/pt/Index"));
const GestaoInteligente = lazy(() => import("./pages/GestaoInteligente"));

// O Algoritmo do Universo pages
const AlgoritmoDoUniverso = lazy(() => import("./pages/AlgoritmoDoUniverso"));

// Optimize QueryClient with better defaults
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <m.div
      animate={{
        scale: [1, 1.1, 1],
        rotateY: [0, 360],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="w-20 h-20"
    >
      <img
        src="/HEXACRONIX-ADESIVO-300x300.webp"
        alt="Loading..."
        className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
      />
    </m.div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LazyMotion features={domMax}>
      <LanguageProvider>
        <TooltipProvider>
          <LoadingOverlay />
          <Toaster />
          <Sonner />
          <BrowserRouter
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true,
            }}
          >
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/ebooks" element={<Ebooks />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/comunidade" element={<Comunidade />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/BookDemo" element={<BookDemo />} />

                {/* Quantum Key Routes */}
                <Route path="/ebook-a-chave-do-poder" element={<QuantumKeyPT />} />
                <Route path="/ebook-the-key-to-power" element={<QuantumKeyEN />} />
                <Route path="/ebook-la-clave-del-poder" element={<QuantumKeyES />} />
                <Route path="/livro-fisico" element={<QuantumKeyFisico />} />

                {/* Regra da Vida Routes */}
                <Route path="/ebook-a-regra-da-vida" element={<RegraDaVidaPT />} />
                <Route path="/ebook-the-rule-of-life" element={<RegraDaVidaEN />} />
                <Route path="/ebook-la-regla-de-la-vida" element={<RegraDaVidaES />} />

                {/* Alma Livre Routes */}
                <Route path="/alma-livre-leve-abundante" element={<AlmaLivrePT />} />

                {/* Gestão Inteligente Route */}
                <Route path="/gestao-inteligente" element={<GestaoInteligente />} />

                {/* O Algoritmo do Universo Route */}
                <Route path="/o-algoritmo-do-universo" element={<AlgoritmoDoUniverso />} />

                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>

            {/* WhatsApp Button - appears on all pages */}
            <WhatsAppButton />
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </LazyMotion>
  </QueryClientProvider>
);

export default App;
