import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-muted-foreground">Carregando...</div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
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

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
