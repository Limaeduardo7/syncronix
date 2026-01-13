"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Loader2, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { SparklesCore } from "@/components/ui/sparkles";
import { useLanguage } from "@/contexts/LanguageContext";

type FormState = "idle" | "loading" | "success" | "error";

export function Community() {
  const navigate = useNavigate();
  const { t } = useLanguage();
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
        title: t('community.toast.email.required'),
        description: t('community.toast.email.required.desc'),
        variant: "destructive"
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: t('community.toast.email.invalid'),
        description: t('community.toast.email.invalid.desc'),
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
          title: t('community.toast.success'),
          description: t('community.toast.success.desc'),
        });
        setEmail("");
        console.log('[Community]', 'subscribe_success', { email });
      } else {
        setState("error");
        toast({
          title: t('community.toast.error'),
          description: t('community.toast.error.desc'),
          variant: "destructive"
        });
      }
    } catch (error) {
      setState("error");
      toast({
        title: t('community.toast.connection'),
        description: t('community.toast.connection.desc'),
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
            {t('community.button.loading')}
          </>
        );
      case "success":
        return (
          <>
            <CheckCircle className="w-4 h-4 mr-2" />
            {t('community.button.success')}
          </>
        );
      case "error":
        return (
          <>
            <AlertCircle className="w-4 h-4 mr-2" />
            {t('community.button.error')}
          </>
        );
      default:
        return t('community.button.subscribe');
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
            {t('community.title')}
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
              {t('community.subtitle1')}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-primary font-semibold"
            >
              {t('community.subtitle2')}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-primary font-semibold"
            >
              {t('community.subtitle3')}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-primary font-semibold"
            >
              {t('community.subtitle4')}
            </motion.div>
          </div>

          <div className="space-y-6 text-foreground mb-12 max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed">
              {t('community.description1')}
            </p>

            <p className="text-lg font-medium text-primary">
              {t('community.description2')}
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
              {t('community.button.main')}
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
              placeholder={t('community.form.placeholder')}
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
            {t('community.form.privacy')}{" "}
            <a
              href="/legal/privacy"
              className="text-primary hover:underline"
              aria-label="Política de privacidade"
            >
              {t('community.form.privacy.link')}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}