"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Loader2, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { SparklesCore } from "@/components/ui/sparkles";

type FormState = "idle" | "loading" | "success" | "error";

export function Community() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email obrigatório",
        description: "Por favor, insira seu endereço de email.",
        variant: "destructive"
      });
      return;
    }
    
    if (!validateEmail(email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um endereço de email válido.",
        variant: "destructive"
      });
      return;
    }

    console.log('[Community]', 'subscribe_attempt', { email });
    setState("loading");

    try {
      // Mock API call - simulate network delay and response
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate 90% success rate for demo
      const success = Math.random() > 0.1;
      
      if (success) {
        setState("success");
        toast({
          title: "Bem-vindo à SYNCRONIX!",
          description: "Sua jornada de ascensão começou. Verifique seu email.",
        });
        setEmail("");
        console.log('[Community]', 'subscribe_success', { email });
      } else {
        setState("error");
        toast({
          title: "Erro na inscrição",
          description: "Tente novamente em alguns instantes.",
          variant: "destructive"
        });
      }
    } catch (error) {
      setState("error");
      toast({
        title: "Erro de conexão",
        description: "Verifique sua conexão e tente novamente.",
        variant: "destructive"
      });
    }

    // Reset state after 2 seconds
    setTimeout(() => setState("idle"), 2000);
  };

  const getButtonContent = () => {
    switch (state) {
      case "loading":
        return (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Processando...
          </>
        );
      case "success":
        return (
          <>
            <CheckCircle className="w-4 h-4 mr-2" />
            Sucesso!
          </>
        );
      case "error":
        return (
          <>
            <AlertCircle className="w-4 h-4 mr-2" />
            Tentar novamente
          </>
        );
      default:
        return "DESBLOQUEIE SUA ASCENÇÃO";
    }
  };

  return (
    <section id="comunidade" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-24">
      {/* Background with sparkles effect - igual à Hero */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ background: 'var(--gradient-hero)' }}
      ></div>
      
      {/* Sparkles background - igual à Hero */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlescomunidade"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#ffffff"
          speed={0.8}
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Título Principal */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            A Comunidade SYNCRONIX
          </h2>
          
          {/* Subtítulos animados */}
          <div className="space-y-3 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-primary font-semibold"
            >
              Você não está sozinho nesta jornada
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-primary font-semibold"
            >
              Rejeitar a mediocridade
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-primary font-semibold"
            >
              Construir excelência
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-primary font-semibold"
            >
              Formar alianças
            </motion.div>
          </div>
          
          <div className="space-y-6 text-foreground mb-12 max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed">
              Aqui você encontrará mentores, parceiros estratégicos e mentes que operam 
              na mesma frequência. Networking não é sobre trocar cartões. É sobre formar 
              alianças que amplificam o poder de todos os envolvidos.
            </p>
            
            <p className="text-lg font-medium text-primary">
              Entre na frequência do poder. Junte-se a nós.
            </p>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Button
              onClick={() => navigate('/comunidade')}
              className="btn-hero mb-8"
              aria-label="Conhecer a Comunidade Syncronix"
            >
              CONHEÇA A COMUNIDADE COMPLETA
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          {/* Email Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8"
          >
            <Input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-input border-border text-foreground placeholder-muted-foreground"
              aria-label="Endereço de email"
              disabled={state === "loading"}
            />
            <Button
              type="submit"
              className="btn-hero whitespace-nowrap"
              disabled={state === "loading"}
              aria-label="Inscrever-se na comunidade SYNCRONIX"
            >
              {getButtonContent()}
            </Button>
          </motion.form>

          {/* Privacy Link */}
          <p className="text-sm text-muted-foreground">
            Ao se inscrever, você concorda com nossa{" "}
            <a 
              href="/legal/privacy" 
              className="text-primary hover:underline"
              aria-label="Política de privacidade"
            >
              política de privacidade
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}