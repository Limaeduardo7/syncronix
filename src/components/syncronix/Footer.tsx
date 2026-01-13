"use client";

import { memo, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Instagram, Twitter, Youtube, Linkedin, MessageCircle, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const socialLinks = [
  { 
    name: "WhatsApp", 
    href: "https://wa.me/5511999999999", 
    icon: MessageCircle,
    label: "Fale conosco no WhatsApp" 
  },
  { 
    name: "Instagram", 
    href: "https://instagram.com/syncronix", 
    icon: Instagram,
    label: "Siga-nos no Instagram" 
  },
  { 
    name: "Facebook", 
    href: "https://facebook.com/syncronix", 
    icon: Facebook,
    label: "Curta nossa página no Facebook" 
  },
  { 
    name: "Twitter", 
    href: "https://twitter.com/syncronix", 
    icon: Twitter,
    label: "Siga-nos no X (Twitter)" 
  },
  { 
    name: "YouTube", 
    href: "https://youtube.com/syncronix", 
    icon: Youtube,
    label: "Inscreva-se no YouTube" 
  },
  { 
    name: "LinkedIn", 
    href: "https://linkedin.com/company/syncronix", 
    icon: Linkedin,
    label: "Conecte-se no LinkedIn" 
  },
];

export const Footer = memo(function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  const quickLinks = [
    { name: t('footer.link.about'), href: "#manifesto", route: "/sobre" },
    { name: t('footer.link.knowledge'), href: "#ebook", route: "/ebooks" },
    { name: t('footer.link.clothes'), href: "#shop", route: "/shop" },
    { name: t('footer.link.community'), href: "#comunidade", route: "/comunidade" },
  ];

  const handleLinkClick = useCallback((href: string, route?: string) => {
    console.log('[Footer]', 'link_click', { href, route });
    
    // Se tem rota e não é um link externo
    if (route && !href.startsWith('http')) {
      navigate(route);
      // Aguarda navegação e faz scroll se houver âncora
      setTimeout(() => {
        if (href.startsWith('#')) {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }, 100);
    } else if (href.startsWith('#')) {
      // Se estamos na página inicial, faz scroll
      if (location.pathname === '/') {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        // Se estamos em outra página, navega para / e depois faz scroll
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
  }, [navigate, location.pathname]);

  return (
    <footer className="bg-black border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-foreground">
              SYNCRONIX®
            </div>
            <p className="text-lg font-medium text-primary">
              {t('footer.tagline')}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              {t('footer.quicklinks')}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href, link.route);
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              {t('footer.connect')}
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-200"
                  aria-label={social.label}
                  onClick={() => handleLinkClick(social.href)}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              {t('footer.copyright')}
            </p>

            <div className="flex space-x-6 text-sm">
              <a
                href="/legal/privacy"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                onClick={() => handleLinkClick('/legal/privacy')}
              >
                {t('footer.privacy')}
              </a>
              <a
                href="/legal/terms"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                onClick={() => handleLinkClick('/legal/terms')}
              >
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});