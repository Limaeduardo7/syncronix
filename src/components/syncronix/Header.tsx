"use client";

import { useState, useEffect, useCallback, memo, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage, type Language } from "@/contexts/LanguageContext";
import BR from "country-flag-icons/react/3x2/BR";
import US from "country-flag-icons/react/3x2/US";
import ES from "country-flag-icons/react/3x2/ES";

const languageLabels: Record<Language, string> = {
  pt: 'PT',
  en: 'EN',
  es: 'ES',
};

const LanguageFlag = ({ language }: { language: Language }) => {
  const flagClass = "w-5 h-4 rounded-sm";
  switch (language) {
    case 'pt':
      return <BR className={flagClass} />;
    case 'en':
      return <US className={flagClass} />;
    case 'es':
      return <ES className={flagClass} />;
  }
};

export const Header = memo(function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [headerOpacity, setHeaderOpacity] = useState(1);
  const rafRef = useRef<number>();

  const leftNavigation = [
    { name: t('header.nav.brand'), href: "#manifesto", route: "/sobre" },
    { name: t('header.nav.knowledge'), href: "#ebook", route: "/ebooks" },
  ];

  const rightNavigation = [
    { name: t('header.nav.clothes'), href: "#shop", route: "/shop" },
    { name: t('header.nav.reality'), href: "#comunidade", route: "/comunidade" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Cancel previous RAF
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      rafRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const heroHeight = window.innerHeight;
        
        // Fade out header when scrolling past hero section
        if (scrollY > heroHeight * 0.8) {
          const fadeStart = heroHeight * 0.8;
          const fadeEnd = heroHeight;
          const opacity = Math.max(0, 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart));
          setHeaderOpacity(opacity);
        } else {
          setHeaderOpacity(1);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const handleNavClick = useCallback((href: string, route: string) => {
    console.log('[Header]', 'nav_click', { href, route });
    setIsOpen(false);
    
    // Se tem rota específica (subpágina)
    if (route && !route.startsWith('/#')) {
      navigate(route);
      // Se a rota tem âncora, faz scroll após navegação
      if (href.startsWith('#') && route.includes('#')) {
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 300);
      }
    } else {
      // Se é apenas âncora (#manifesto)
      if (location.pathname === '/') {
        // Estamos na página inicial, faz scroll
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        // Estamos em outra página, navega para / e depois faz scroll
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 300);
      }
    }
  }, [navigate, location.pathname]);

  const handleLogoClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    navigate('/');
    // Scroll para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [navigate]);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: headerOpacity, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md h-20"
      style={{ opacity: headerOpacity }}
    >
      <div className="max-w-[1200px] mx-auto px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {leftNavigation.map((item) => (
              <button
                key={item.name}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href, item.route);
                }}
                className="text-white hover:text-cyan-400 transition-colors duration-200 text-sm font-medium whitespace-nowrap cursor-pointer bg-transparent border-none"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Logo Central */}
          <div className="flex-1 flex justify-center">
            <button 
              onClick={handleLogoClick}
              className="hover:opacity-80 transition-opacity duration-200 bg-transparent border-none p-0 cursor-pointer"
              aria-label="Ir para página inicial"
            >
              <img 
                src="/53c9d0b6-d91c-4826-902f-269cf93d8103.png" 
                alt="SYNCRONIX"
                className="h-16 w-auto object-contain"
                loading="eager"
                width={64}
                height={64}
                decoding="async"
              />
            </button>
          </div>

          {/* Right Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {rightNavigation.map((item) => (
              <button
                key={item.name}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href, item.route);
                }}
                className="text-white hover:text-cyan-400 transition-colors duration-200 text-sm font-medium whitespace-nowrap cursor-pointer bg-transparent border-none"
              >
                {item.name}
              </button>
            ))}

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="relative group text-white hover:text-cyan-400 hover:bg-white/10 transition-all duration-300 gap-2 px-3 py-2 rounded-lg border border-transparent hover:border-cyan-400/30"
                >
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-2 relative z-10">
                    <LanguageFlag language={language} />
                    <span className="text-xs font-bold tracking-wider">{languageLabels[language]}</span>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-black/95 backdrop-blur-xl border-gray-800 shadow-2xl shadow-cyan-400/10 min-w-[180px] p-2"
              >
                <DropdownMenuItem
                  onClick={() => setLanguage('pt')}
                  className={`text-white hover:text-cyan-400 hover:bg-cyan-400/10 cursor-pointer rounded-lg px-4 py-3 mb-1 transition-all duration-200 flex items-center gap-3 ${
                    language === 'pt' ? 'bg-cyan-400/20 text-cyan-400' : ''
                  }`}
                >
                  <LanguageFlag language="pt" />
                  <span className="font-medium">Português</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage('en')}
                  className={`text-white hover:text-cyan-400 hover:bg-cyan-400/10 cursor-pointer rounded-lg px-4 py-3 mb-1 transition-all duration-200 flex items-center gap-3 ${
                    language === 'en' ? 'bg-cyan-400/20 text-cyan-400' : ''
                  }`}
                >
                  <LanguageFlag language="en" />
                  <span className="font-medium">English</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage('es')}
                  className={`text-white hover:text-cyan-400 hover:bg-cyan-400/10 cursor-pointer rounded-lg px-4 py-3 transition-all duration-200 flex items-center gap-3 ${
                    language === 'es' ? 'bg-cyan-400/20 text-cyan-400' : ''
                  }`}
                >
                  <LanguageFlag language="es" />
                  <span className="font-medium">Español</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile menu and language selector */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200 px-2"
                >
                  <LanguageFlag language={language} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-black/95 backdrop-blur-xl border-gray-800 shadow-2xl shadow-cyan-400/10 min-w-[180px] p-2"
              >
                <DropdownMenuItem
                  onClick={() => setLanguage('pt')}
                  className={`text-white hover:text-cyan-400 hover:bg-cyan-400/10 cursor-pointer rounded-lg px-4 py-3 mb-1 transition-all duration-200 flex items-center gap-3 ${
                    language === 'pt' ? 'bg-cyan-400/20 text-cyan-400' : ''
                  }`}
                >
                  <LanguageFlag language="pt" />
                  <span className="font-medium">Português</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage('en')}
                  className={`text-white hover:text-cyan-400 hover:bg-cyan-400/10 cursor-pointer rounded-lg px-4 py-3 mb-1 transition-all duration-200 flex items-center gap-3 ${
                    language === 'en' ? 'bg-cyan-400/20 text-cyan-400' : ''
                  }`}
                >
                  <LanguageFlag language="en" />
                  <span className="font-medium">English</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage('es')}
                  className={`text-white hover:text-cyan-400 hover:bg-cyan-400/10 cursor-pointer rounded-lg px-4 py-3 transition-all duration-200 flex items-center gap-3 ${
                    language === 'es' ? 'bg-cyan-400/20 text-cyan-400' : ''
                  }`}
                >
                  <LanguageFlag language="es" />
                  <span className="font-medium">Español</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[280px] bg-black/95 backdrop-blur-md border-gray-800"
              >
                <div className="flex flex-col space-y-8 mt-12">
                  <div className="flex justify-center">
                    <button 
                      onClick={handleLogoClick}
                      className="hover:opacity-80 transition-opacity duration-200 bg-transparent border-none p-0 cursor-pointer"
                      aria-label="Ir para página inicial"
                    >
                      <img 
                        src="/53c9d0b6-d91c-4826-902f-269cf93d8103.png" 
                        alt="SYNCRONIX"
                        className="h-20 w-auto object-contain"
                        loading="lazy"
                        width={80}
                        height={80}
                        decoding="async"
                      />
                    </button>
                  </div>
                  
                  <nav className="flex flex-col space-y-6">
                    {[...leftNavigation, ...rightNavigation].map((item) => (
                      <button
                        key={item.name}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href, item.route);
                        }}
                        className="text-white hover:text-cyan-400 transition-colors duration-200 text-lg font-medium text-center py-3 border-b border-gray-800/50 bg-transparent border-none w-full cursor-pointer"
                      >
                        {item.name}
                      </button>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
});