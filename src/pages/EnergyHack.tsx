import { useEffect, useState } from "react";
import { ArrowRight, Lock, Zap, Brain, ShieldCheck, Clock, CheckCircle, Eye, ChevronDown, Headphones, Play, Radio, Waves, Shield, Cpu, Activity, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PurchaseNotifications from "@/components/quantum-key/PurchaseNotifications";
import LiveViewers from "@/components/quantum-key/LiveViewers";
import CountdownTimer from "@/components/gestao-inteligente/CountdownTimer";
import SEO from "@/components/quantum-key/SEO";
import { brazilianPurchaseNotifications } from "@/components/quantum-key/notificationsData";
import SpotlightCard from "@/components/react-bits/SpotlightCard";
import GlitchText from "@/components/react-bits/GlitchText";
import DecryptedText from "@/components/react-bits/DecryptedText";
import SplitText from "@/components/react-bits/SplitText";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7 },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
};

const EnergyHack = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    { title: "Clareza executiva ao acordar", icon: <Brain className="w-6 h-6" />, color: "#a855f7" },
    { title: "Redução de ruído mental", icon: <Radio className="w-6 h-6" />, color: "#06b6d4" },
    { title: "Foco contínuo ao longo do dia", icon: <Cpu className="w-6 h-6" />, color: "#ec4899" },
    { title: "Estabilidade emocional sob pressão", icon: <Shield className="w-6 h-6" />, color: "#22c55e" },
    { title: "Sensação de controle interno", icon: <Activity className="w-6 h-6" />, color: "#3b82f6" },
    { title: "Presença e autoridade perceptiva", icon: <Sparkles className="w-6 h-6" />, color: "#f59e0b" },
  ];

  const offerItems = [
    { title: "Manual Energy Hack (PDF)", desc: "Base conceitual e prática para assumir controle da sua neuropercepção", icon: <Brain className="w-8 h-8" />, color: "#a855f7" },
    { title: "Áudio 8D de Reconfiguração Matinal", desc: "Ferramenta de indução para elevar sua frequência basal", icon: <Headphones className="w-8 h-8" />, color: "#06b6d4" },
    { title: "Protocolo Matinal", desc: "Execução simples em menos de 10 minutos", icon: <Clock className="w-8 h-8" />, color: "#22c55e" },
  ];

  const steps = [
    { num: "01", label: "Acorde", color: "#a855f7" },
    { num: "02", label: "Coloque os fones", color: "#06b6d4" },
    { num: "03", label: "Dê play", color: "#ec4899" },
    { num: "04", label: "Reconfigure seu estado", color: "#22c55e" },
    { num: "05", label: "Entre no dia em outro padrão", color: "#f59e0b" },
  ];

  const faqs = [
    { q: "Isso é meditação guiada?", a: "Não. O Energy Hack utiliza engenharia sonora 8D com estímulo bilateral — uma abordagem técnica e neuroperceptiva, sem misticismo ou visualizações." },
    { q: "Quanto tempo leva para sentir resultado?", a: "A maioria dos usuários relata mudança perceptível no estado interno já na primeira sessão. Resultados acumulativos aparecem nos primeiros 7 dias de uso consistente." },
    { q: "Preciso de fones de ouvido?", a: "Sim. A tecnologia 8D exige fones para o estímulo bilateral funcionar corretamente. Qualquer fone serve." },
    { q: "E se não funcionar para mim?", a: "Você tem 7 dias de garantia incondicional. Se não sentir diferença, devolvemos 100% do seu investimento sem perguntas." },
  ];

  return (
    <div className="min-h-screen bg-black text-slate-200 flex flex-col font-sans selection:bg-purple-500/30 selection:text-purple-200">
      <SEO
        title="ENERGY HACK — Reprograme Sua Frequência Basal | Syncronix"
        description="Protocolo de reconfiguração neural com áudio 8D. Reprograme sua frequência basal, silencie o ruído mental e assuma o comando do seu estado interno em menos de 10 minutos por dia."
        keywords="energy hack, reconfiguração neural, áudio 8D, frequência basal, foco mental, protocolo matinal, estado interno, neuropercepção, modelagem neuroperceptiva"
        ogImage="/energy%20hack/ENERGY%20HACK%20LOGO%20BLACK.png"
        canonical="https://syncronix.netlify.app/energy-hack"
      />
      {/* ═══ CSS Animations ═══ */}
      <style>{`
        @keyframes float-orb { 0%,100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-40px) scale(1.1); } }
        @keyframes float-orb-r { 0%,100% { transform: translateY(0) scale(1.05); } 50% { transform: translateY(30px) scale(0.95); } }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes pulse-glow { 0%,100% { opacity: 0.4; } 50% { opacity: 0.8; } }
        @keyframes aurora { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes border-cycle { 0%,100% { border-color: rgba(168,85,247,0.4); } 33% { border-color: rgba(6,182,212,0.4); } 66% { border-color: rgba(236,72,153,0.4); } }
        @keyframes energy-pulse { 0%,100% { box-shadow: 0 0 20px rgba(168,85,247,0.3), 0 0 60px rgba(6,182,212,0.15); } 50% { box-shadow: 0 0 40px rgba(168,85,247,0.5), 0 0 100px rgba(6,182,212,0.3); } }
        @keyframes grid-scroll { 0% { background-position: 0 0; } 100% { background-position: 0 60px; } }
        @keyframes wave { 0%,100% { d: path("M0,50 Q25,30 50,50 T100,50"); } 50% { d: path("M0,50 Q25,70 50,50 T100,50"); } }
        .shimmer-multi { background: linear-gradient(110deg, #a855f7, #06b6d4, #ec4899, #06b6d4, #a855f7); background-size: 200% 100%; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: shimmer 4s ease-in-out infinite; }
        .aurora-border { animation: border-cycle 6s ease-in-out infinite; }
        .energy-card { animation: energy-pulse 4s ease-in-out infinite; }
        .grid-bg { background-image: linear-gradient(rgba(168,85,247,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.03) 1px, transparent 1px); background-size: 60px 60px; animation: grid-scroll 8s linear infinite; }
      `}</style>

      <PurchaseNotifications
        purchaseText="acabou de adquirir o Energy Hack!"
        justNowText="comprou agora"
        notifications={brazilianPurchaseNotifications}
      />

      <main className="flex-1 relative overflow-x-hidden">
        {/* ═══ GLOBAL BACKGROUND ═══ */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.08)_0%,transparent_60%)]" />
          <div className="absolute inset-0 grid-bg" />
          <div className="absolute top-[5%] left-[3%] w-[600px] h-[600px] bg-purple-600/[0.08] rounded-full blur-[150px]" style={{ animation: 'float-orb 14s ease-in-out infinite' }} />
          <div className="absolute top-[25%] right-[3%] w-[500px] h-[500px] bg-cyan-500/[0.07] rounded-full blur-[130px]" style={{ animation: 'float-orb-r 16s ease-in-out infinite' }} />
          <div className="absolute bottom-[15%] left-[10%] w-[450px] h-[450px] bg-pink-500/[0.06] rounded-full blur-[120px]" style={{ animation: 'float-orb 18s ease-in-out infinite 4s' }} />
          <div className="absolute top-[55%] right-[15%] w-[400px] h-[400px] bg-emerald-500/[0.05] rounded-full blur-[100px]" style={{ animation: 'float-orb-r 20s ease-in-out infinite 2s' }} />
          <div className="absolute top-[75%] left-[40%] w-[350px] h-[350px] bg-blue-500/[0.05] rounded-full blur-[110px]" style={{ animation: 'float-orb 15s ease-in-out infinite 6s' }} />
        </div>

        {/* ═══ COUNTDOWN ═══ */}
        <section className="relative pt-6 pb-2 px-4 bg-black text-center z-30">
          <CountdownTimer />
        </section>

        {/* ═══════════════════════════════════════════════════
            1. HERO
        ═══════════════════════════════════════════════════ */}
        <section className="relative min-h-[90vh] flex items-center justify-center px-4 pt-10 pb-16">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-600/[0.12] blur-[180px] rounded-full pointer-events-none" />
          <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-cyan-500/[0.08] blur-[150px] rounded-full pointer-events-none" style={{ animation: 'pulse-glow 6s ease-in-out infinite' }} />
          <div className="absolute top-[15%] right-[5%] w-[400px] h-[400px] bg-pink-500/[0.06] blur-[130px] rounded-full pointer-events-none" style={{ animation: 'pulse-glow 8s ease-in-out infinite 2s' }} />
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

          <div className="relative z-20 max-w-5xl mx-auto text-center">
            {/* Energy nucleus */}
            <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.2 }} className="mx-auto mb-12 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 blur-[60px] rounded-full" style={{ animation: 'pulse-glow 3s ease-in-out infinite' }} />
              <img
                src="/energy%20hack/ENERGY%20HACK%20LOGO%20BLACK.png"
                alt="Energy Hack Logo"
                className="relative z-10 w-full max-w-[90vw] md:max-w-none md:w-96 mx-auto rounded-2xl md:rounded-3xl drop-shadow-[0_0_40px_rgba(168,85,247,0.4)]"
              />
            </motion.div>

            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2.5 px-5 py-2.5 mb-10 border border-purple-500/30 rounded-full bg-purple-500/5 backdrop-blur-sm aurora-border">
              <Waves className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 font-bold text-[10px] md:text-xs tracking-[0.15em] uppercase">Sistema de Reconfiguração Neural</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 text-white leading-[1.1] tracking-tight">
              <GlitchText className="shimmer-multi text-3xl md:text-5xl lg:text-6xl font-black">ENERGY HACK</GlitchText>
              <br />
              <span className="text-xl md:text-3xl lg:text-4xl font-bold text-slate-300 mt-4 block">
                <SplitText text="A realidade externa é um reflexo exato do seu estado interno." className="justify-center" />
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-2xl text-slate-400 mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
              Reprograme sua frequência basal, silencie o ruído interno e assuma o comando da realidade que responde ao seu <span className="text-cyan-400 font-bold">padrão.</span>
            </motion.p>

            {/* CTA */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.6 }} className="flex flex-col items-center gap-5">
              <motion.a href="#oferta" animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="group inline-flex items-center justify-center gap-3 px-10 md:px-14 py-5 md:py-6 bg-gradient-to-r from-purple-600 via-cyan-500 to-pink-500 hover:from-purple-500 hover:via-cyan-400 hover:to-pink-400 text-white font-black text-base md:text-xl rounded-2xl shadow-[0_0_50px_-12px_rgba(168,85,247,0.5),0_0_80px_-20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_80px_-15px_rgba(168,85,247,0.6)] transform hover:-translate-y-1 transition-all duration-300">
                <span>QUERO HACKEAR MEU ESTADO INTERNO</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <span className="text-slate-500 text-sm font-medium flex items-center gap-2">
                <Lock className="w-3.5 h-3.5" /> Acesso imediato · Garantia de 7 dias
              </span>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-8 flex justify-center">
              <LiveViewers text="pessoas estão nesta página agora" color="purple" />
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="mt-20">
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex flex-col items-center gap-2 text-slate-600">
                <span className="text-xs font-medium uppercase tracking-widest">Continue lendo</span>
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            2. QUEBRA DE PARADIGMA
        ═══════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-32 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
                <DecryptedText text="O erro nunca esteve no ambiente." className="text-3xl md:text-5xl font-black not-italic" />
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              <SpotlightCard spotlightColor="rgba(168,85,247,0.15)" className="p-8 md:p-10">
                <p className="text-lg text-slate-300 leading-relaxed">
                  Você foi condicionado a lutar contra o reflexo. A reagir ao caos. A tentar controlar o externo na força. Mas a realidade <span className="text-purple-400 font-bold">não responde ao esforço bruto</span>. Ela responde ao padrão interno que você sustenta.
                </p>
              </SpotlightCard>
              <SpotlightCard spotlightColor="rgba(6,182,212,0.15)" className="p-8 md:p-10">
                <p className="text-lg text-slate-300 leading-relaxed">
                  Se sua vida repete os mesmos obstáculos, o problema não está no cenário. Está na <span className="text-cyan-400 font-bold">configuração basal</span> que governa sua percepção.
                </p>
              </SpotlightCard>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            3. MECANISMO
        ═══════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-32 px-4 bg-gradient-to-b from-neutral-950/40 to-black">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/[0.06] blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute top-[30%] left-[5%] w-[400px] h-[400px] bg-purple-600/[0.05] blur-[100px] rounded-full pointer-events-none" style={{ animation: 'float-orb 10s ease-in-out infinite' }} />

          <div className="relative max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-cyan-500/20 rounded-full bg-cyan-500/5">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300 font-bold text-[10px] tracking-[0.2em] uppercase">Método</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                <span className="shimmer-multi">Energy Hack</span>: Modelagem Neuroperceptiva
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Um protocolo de reconfiguração interna projetado para modular <span className="text-white font-bold">percepção, foco e estado mental</span> nos primeiros minutos do dia.
              </p>
            </motion.div>

            <SpotlightCard spotlightColor="rgba(6,182,212,0.2)" className="p-8 md:p-12 energy-card">
              <div className="text-center">
                <Headphones className="w-12 h-12 text-cyan-400 mx-auto mb-6" style={{ filter: 'drop-shadow(0 0 20px rgba(6,182,212,0.5))' }} />
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4">A Faixa 8D é o motor central do sistema</h3>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                  Engenharia sonora espacial com estímulo bilateral para indução de <span className="text-cyan-400 font-bold">foco, isolamento cognitivo</span> e alinhamento interno.
                </p>
              </div>
            </SpotlightCard>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            4. CONCEITO CENTRAL
        ═══════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-32 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-10 leading-tight">
                A vida que você vive é o <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">eco da sua fisiologia.</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                Seu nível de ação é limitado pela qualidade do seu estado interno. Quando sua energia está fragmentada, sua percepção distorce. Quando está <span className="text-white font-bold">calibrada</span>, sua realidade responde em outro nível.
              </p>
            </motion.div>
            <motion.div {...fadeInUp} className="flex items-center justify-center gap-3 my-12">
              <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent via-purple-500/50 to-cyan-500/50" />
              <Zap className="w-6 h-6 text-pink-400" />
              <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent via-cyan-500/50 to-pink-500/50" />
            </motion.div>
            <motion.p {...fadeInUp} className="text-2xl md:text-3xl font-black text-white">
              Você deixa de <span className="text-pink-400">reagir</span> ao ambiente e passa a <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">operar acima dele.</span>
            </motion.p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            5. BENEFÍCIOS
        ═══════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-32 px-4 bg-gradient-to-b from-neutral-950/30 to-black">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                O que muda quando o <span className="shimmer-multi">padrão interno</span> sobe
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, idx) => (
                <motion.div key={idx} {...stagger} transition={{ delay: idx * 0.1 }}>
                  <SpotlightCard spotlightColor={`${b.color}25`} className="p-8 h-full hover:-translate-y-2 transition-transform duration-500">
                    <div className="p-3 rounded-xl w-fit mb-5" style={{ backgroundColor: `${b.color}15`, color: b.color }}>
                      {b.icon}
                    </div>
                    <h3 className="text-lg font-black text-white">{b.title}</h3>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            6. OFERTA
        ═══════════════════════════════════════════════════ */}
        <section id="oferta" className="relative py-24 md:py-32 px-4 scroll-mt-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/[0.08] blur-[150px] rounded-full pointer-events-none" />

          <div className="relative max-w-lg mx-auto z-10">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-purple-500/20 rounded-full bg-purple-500/5 aurora-border">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 font-bold text-[10px] tracking-[0.2em] uppercase">O que você recebe hoje</span>
              </div>
            </motion.div>

            {/* Product mockup */}
            <motion.div {...fadeInUp} className="flex justify-center mb-12">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 blur-[40px] rounded-3xl" />
                <img
                  src="/energy%20hack/Image_in_phone_202604021212.jpeg"
                  alt="Energy Hack - Produto"
                  className="relative z-10 w-56 md:w-72 rounded-2xl border-2 border-purple-500/20 shadow-[0_0_60px_-20px_rgba(168,85,247,0.3)]"
                />
              </div>
            </motion.div>

            <div className="space-y-4 mb-10">
              {offerItems.map((item, idx) => (
                <motion.div key={idx} {...stagger} transition={{ delay: idx * 0.1 }}>
                  <SpotlightCard spotlightColor={`${item.color}20`} className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-xl flex-shrink-0" style={{ backgroundColor: `${item.color}15`, color: item.color }}>{item.icon}</div>
                    <div>
                      <h3 className="text-lg font-black text-white mb-1">{item.title}</h3>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>

            {/* Price card */}
            <motion.div {...fadeInUp} className="relative p-8 md:p-12 rounded-[2rem] bg-gradient-to-b from-neutral-950 to-neutral-950/50 border-2 overflow-hidden aurora-border" style={{ boxShadow: '0 0 80px -20px rgba(168,85,247,0.3), 0 0 100px -30px rgba(6,182,212,0.2), inset 0 0 60px rgba(0,0,0,0.4)' }}>
              <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-purple-500/40 rounded-tl-[2rem] pointer-events-none" style={{ animation: 'pulse-glow 3s ease-in-out infinite' }} />
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-500/30 rounded-tr-[2rem] pointer-events-none" style={{ animation: 'pulse-glow 3s ease-in-out infinite 1s' }} />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-pink-500/30 rounded-bl-[2rem] pointer-events-none" style={{ animation: 'pulse-glow 3s ease-in-out infinite 2s' }} />
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-emerald-500/30 rounded-br-[2rem] pointer-events-none" style={{ animation: 'pulse-glow 3s ease-in-out infinite 1.5s' }} />

              <div className="relative z-10 text-center">
                <div className="py-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] mb-8">
                  <p className="text-red-500/60 line-through text-2xl font-bold mb-2">R$ 97,00</p>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">por apenas</p>
                  <p className="text-6xl md:text-7xl font-black text-white tracking-tighter leading-none">
                    R$ 47<span className="text-4xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">,00</span>
                  </p>
                  <p className="font-black text-lg mt-3 tracking-wide bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">ou 6x de R$ 8,69</p>
                  <p className="text-slate-500 font-medium text-sm mt-2">acesso imediato e vitalício</p>
                </div>

                <motion.a href="https://pay.hotmart.com/PLACEHOLDER" target="_blank" rel="noopener noreferrer" animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="group block w-full px-8 py-6 bg-gradient-to-r from-purple-600 via-cyan-500 to-pink-500 hover:from-purple-500 hover:via-cyan-400 hover:to-pink-400 text-white font-black text-xl text-center rounded-2xl shadow-[0_10px_50px_-15px_rgba(168,85,247,0.4)] transform hover:-translate-y-1 transition-all duration-300">
                  <span className="flex items-center justify-center gap-3">
                    ⚡ QUERO HACKEAR MEU ESTADO INTERNO
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.a>

                <div className="grid grid-cols-3 gap-4 mt-10 text-[11px] md:text-xs text-slate-500">
                  <div className="flex flex-col items-center gap-1.5 text-center">
                    <Lock className="w-4 h-4 text-purple-400/60" />
                    <span className="font-semibold">Compra Segura</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 text-center">
                    <ShieldCheck className="w-4 h-4 text-cyan-400/60" />
                    <span className="font-semibold">Garantia 7 dias</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 text-center">
                    <Eye className="w-4 h-4 text-pink-400/60" />
                    <span className="font-semibold">Acesso Imediato</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            7. COMO USAR
        ═══════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-32 px-4 bg-gradient-to-b from-neutral-950/30 to-black">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-emerald-500/20 rounded-full bg-emerald-500/5">
                <Play className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300 font-bold text-[10px] tracking-[0.2em] uppercase">Como operar o sistema</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white">
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">5 passos.</span> Todo dia.
              </h2>
            </motion.div>

            <div className="relative">
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-cyan-500/50 to-emerald-500/50" />
              <div className="space-y-8">
                {steps.map((step, idx) => (
                  <motion.div key={idx} {...stagger} transition={{ delay: idx * 0.12 }} className="flex items-center gap-6 pl-2">
                    <div className="relative z-10 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border-2 bg-black flex-shrink-0" style={{ borderColor: step.color, boxShadow: `0 0 20px ${step.color}30` }}>
                      <span className="text-xs md:text-sm font-black" style={{ color: step.color }}>{step.num}</span>
                    </div>
                    <p className="text-lg md:text-xl font-bold text-white">{step.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            FAQ
        ═══════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-32 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-white">Perguntas frequentes</h2>
            </motion.div>
            <motion.div {...fadeInUp}>
              {faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-white/10 last:border-b-0">
                  <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-center justify-between py-6 text-left group">
                    <span className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors pr-8">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-purple-400 flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                        <p className="pb-6 text-slate-400 leading-relaxed font-medium">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            GARANTIA
        ═══════════════════════════════════════════════════ */}
        <section className="relative py-20 px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div {...fadeInUp} className="text-center p-10 md:p-14 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-emerald-500/[0.06] blur-[80px] rounded-full -mt-[100px] pointer-events-none" />
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-purple-500/15 to-emerald-500/10 rounded-full relative z-10" style={{ boxShadow: '0 0 30px rgba(168,85,247,0.15)' }}>
                <ShieldCheck className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                Garantia Incondicional de <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">7 Dias</span>
              </h3>
              <p className="text-slate-400 leading-relaxed mb-8 max-w-lg mx-auto">
                Você tem 7 dias completos para testar o protocolo. Se não sentir diferença, devolvemos <span className="text-white font-bold">100% do seu investimento</span>. Sem perguntas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            8. CTA FINAL
        ═══════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-32 px-4 bg-gradient-to-b from-black via-purple-950/10 to-black">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/[0.08] blur-[150px] rounded-full pointer-events-none" />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                Pare de lutar contra o reflexo. <br /><span className="shimmer-multi">Reprograme a fonte.</span>
              </h2>
              <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
                Seu ambiente responde ao padrão que você sustenta. <span className="text-white font-bold">Ajuste o núcleo</span> e mude a resposta do sistema.
              </p>
              <motion.a href="https://pay.hotmart.com/PLACEHOLDER" target="_blank" rel="noopener noreferrer" animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="group inline-flex items-center justify-center gap-3 px-12 py-6 bg-gradient-to-r from-purple-600 via-cyan-500 to-pink-500 hover:from-purple-500 hover:via-cyan-400 hover:to-pink-400 text-white font-black text-xl rounded-2xl shadow-[0_0_60px_-12px_rgba(168,85,247,0.5),0_0_100px_-20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_100px_-15px_rgba(168,85,247,0.6)] transform hover:-translate-y-1 transition-all duration-300">
                <span>⚡ QUERO HACKEAR MEU ESTADO INTERNO</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-10 bg-black border-t border-purple-500/10 text-center">
        <p className="text-slate-600 text-sm">&copy; {new Date().getFullYear()} Syncronix. Todos os direitos reservados.</p>
        <p className="text-slate-700 text-xs mt-2">Este produto não garante resultados. Resultados dependem da aplicação individual.</p>
      </footer>
    </div>
  );
};

export default EnergyHack;
