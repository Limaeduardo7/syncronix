import { useEffect, useState } from "react";
import {
  Activity,
  ArrowRight,
  Brain,
  ChevronDown,
  Clock,
  Cpu,
  Eye,
  Headphones,
  Lock,
  Play,
  Radio,
  Shield,
  ShieldCheck,
  Sparkles,
  Waves,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import PurchaseNotifications from "@/components/quantum-key/PurchaseNotifications";
import LiveViewers from "@/components/quantum-key/LiveViewers";
import CountdownTimer from "@/components/gestao-inteligente/CountdownTimer";
import SEO from "@/components/quantum-key/SEO";
import { brazilianPurchaseNotifications } from "@/components/quantum-key/notificationsData";
import LandingFooter from "@/components/alma-livre/Footer";
import SpotlightCard from "@/components/react-bits/SpotlightCard";
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

const benefits = [
  { title: "Clareza executiva ao acordar", icon: <Brain className="w-6 h-6" />, color: "#8000FF" },
  { title: "Redução de ruído mental", icon: <Radio className="w-6 h-6" />, color: "#48FF00" },
  { title: "Foco inabalável ao longo do dia", icon: <Cpu className="w-6 h-6" />, color: "#8000FF" },
  { title: "Estabilidade emocional sob pressão", icon: <Shield className="w-6 h-6" />, color: "#48FF00" },
  { title: "Sensação de controle interno", icon: <Activity className="w-6 h-6" />, color: "#8000FF" },
  { title: "Presença e autoridade natural", icon: <Sparkles className="w-6 h-6" />, color: "#48FF00" },
];

const offerItems = [
  {
    title: "O Manual Energy Hack (PDF)",
    desc: "A ciência limpa e direta para assumir o controle da sua neuropercepção e energia corporal.",
    icon: <Brain className="w-8 h-8" />,
    color: "#8000FF",
  },
  {
    title: "Áudio 8D de Indução (Exclusivo)",
    desc: "A ferramenta sonora imersiva para alinhar seu estado interno à realidade que você quer manifestar.",
    icon: <Headphones className="w-8 h-8" />,
    color: "#48FF00",
  },
  {
    title: "O Protocolo Matinal",
    desc: "Como usar o sistema em menos de 10 minutos diários para garantir o máximo de elevação da sua energia.",
    icon: <Clock className="w-8 h-8" />,
    color: "#8000FF",
  },
];

const bonusItems = [
  "Framework Operacional da Realidade",
  "Diagnóstico de desalinhamento pessoal",
];

const steps = [
  { num: "01", label: "Acorde", color: "#8000FF" },
  { num: "02", label: "Coloque os fones", color: "#48FF00" },
  { num: "03", label: "Dê play", color: "#8000FF" },
  { num: "04", label: "Reconfigure seu estado", color: "#48FF00" },
  { num: "05", label: "Entre no dia em outro padrão", color: "#8000FF" },
];

const faqs = [
  {
    q: "Isso é meditação guiada?",
    a: "Não. O Energy Hack utiliza engenharia sonora 8D com estímulo bilateral, uma abordagem técnica e neuroperceptiva, sem misticismo ou visualizações.",
  },
  {
    q: "Quanto tempo leva para sentir resultado?",
    a: "A maioria dos usuários relata mudança perceptível no estado interno já na primeira sessão. Resultados acumulativos aparecem nos primeiros 7 dias de uso consistente.",
  },
  {
    q: "Preciso de fones de ouvido?",
    a: "Sim. A tecnologia 8D exige fones para o estímulo bilateral funcionar corretamente. Qualquer fone serve.",
  },
  {
    q: "E se não funcionar para mim?",
    a: "Você tem 7 dias de garantia incondicional. Se não sentir diferença, devolvemos 100% do seu investimento sem perguntas.",
  },
];

const EnergyHack = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black font-sans text-slate-200 selection:bg-purple-500/30 selection:text-purple-200">
      <SEO
        title="ENERGY HACK - Reprograme Sua Frequência Basal | Syncronix"
        description="Protocolo de reconfiguração neural com áudio 8D. Reprograme sua frequência basal, silencie o ruído mental e assuma o comando do seu estado interno em menos de 10 minutos por dia."
        keywords="energy hack, reconfiguração neural, áudio 8D, frequência basal, foco mental, protocolo matinal, estado interno, neuropercepção, modelagem neuroperceptiva"
        ogImage="/energy%20hack/ENERGY%20HACK%20LOGO%20BLACK.png"
        canonical="https://syncronix.co/energy-hack"
      />

      <style>{`
        @keyframes float-orb { 0%,100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-40px) scale(1.1); } }
        @keyframes float-orb-r { 0%,100% { transform: translateY(0) scale(1.05); } 50% { transform: translateY(30px) scale(0.95); } }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes border-cycle { 0%,100% { border-color: rgba(128,0,255,0.58); } 50% { border-color: rgba(72,255,0,0.58); } }
        @keyframes energy-pulse { 0%,100% { box-shadow: 0 0 28px rgba(128,0,255,0.34), 0 0 80px rgba(72,255,0,0.18); } 50% { box-shadow: 0 0 54px rgba(128,0,255,0.52), 0 0 120px rgba(72,255,0,0.28); } }
        @keyframes grid-scroll { 0% { background-position: 0 0; } 100% { background-position: 0 60px; } }
        .shimmer-multi { background: linear-gradient(110deg, #8000FF, #48FF00, #8000FF, #48FF00, #8000FF); background-size: 200% 100%; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: shimmer 4s ease-in-out infinite; }
        .shimmer-bg { background: linear-gradient(110deg, #8000FF, #48FF00, #8000FF, #48FF00, #8000FF); background-size: 200% 100%; animation: shimmer 4s ease-in-out infinite; }
        .aurora-border { animation: border-cycle 6s ease-in-out infinite; }
        .energy-card { animation: energy-pulse 4s ease-in-out infinite; }
        .grid-bg { background-image: linear-gradient(rgba(168,85,247,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.03) 1px, transparent 1px); background-size: 60px 60px; animation: grid-scroll 8s linear infinite; }
      `}</style>

      <PurchaseNotifications purchaseText="acabou de adquirir o Energy Hack!" justNowText="comprou agora" notifications={brazilianPurchaseNotifications} />

      <main className="relative flex-1">
        <div className="pointer-events-none fixed inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(128,0,255,0.14)_0%,transparent_60%)]" />
          <div className="absolute inset-0 grid-bg" />
          <div className="absolute left-[3%] top-[5%] h-[600px] w-[600px] rounded-full bg-violet-600/[0.16] blur-[150px]" style={{ animation: "float-orb 14s ease-in-out infinite" }} />
          <div className="absolute right-[3%] top-[25%] h-[500px] w-[500px] rounded-full bg-lime-400/[0.1] blur-[130px]" style={{ animation: "float-orb-r 16s ease-in-out infinite" }} />
        </div>

        <section className="relative px-4 pb-20 pt-6 md:pb-28 md:pt-10">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-violet-600/[0.18] blur-[180px]" />
          <div className="relative z-30 mb-8 text-center md:mb-12">
            <CountdownTimer />
          </div>

          <div className="relative z-20 mx-auto max-w-6xl">
            <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }} className="relative w-full flex-shrink-0 md:w-1/2">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600/25 via-violet-500/18 to-lime-400/18 blur-[60px]" />
                <img src="/energy%20hack/ENERGY%20HACK%20LOGO%20BLACK.png" alt="Energy Hack Logo" className="relative z-10 mx-auto w-full max-w-[85vw] rounded-2xl drop-shadow-[0_0_50px_rgba(128,0,255,0.45)] md:max-w-full md:rounded-3xl" />
              </motion.div>

              <div className="w-full text-center md:w-1/2 md:text-left">
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="aurora-border mb-6 inline-flex items-center gap-2.5 rounded-full border border-violet-500/35 bg-violet-500/8 px-5 py-2.5 backdrop-blur-sm">
                  <Waves className="h-4 w-4 text-lime-300" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-lime-200 md:text-xs">Sistema de Reconfiguração Neural</span>
                </motion.div>

                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="mb-5 text-2xl font-black leading-[1.15] tracking-tight text-white md:text-3xl lg:text-4xl">
                  <span className="mb-2 block text-lg font-bold text-slate-300 md:text-xl lg:text-2xl">
                    <SplitText text="A realidade externa é um reflexo exato do seu estado interno. E você está prestes a hackear o código-fonte." className="justify-center md:justify-start" />
                  </span>
                </motion.h1>

                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }} className="mb-8 text-sm font-medium leading-relaxed text-slate-400 md:text-lg">
                  <em>Reconfigure o núcleo da sua mente, alterando a energia que você emite e veja a realidade responder ao seu novo padrão energético, perceptivo, cinestésico e comportamental.</em>
                </motion.p>

                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.8 }} className="flex flex-col items-center gap-4 md:items-start">
                  <motion.a href="#oferta" animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="shimmer-bg group inline-flex items-center justify-center gap-3 rounded-2xl px-8 py-5 text-sm font-black text-slate-950 shadow-[0_0_55px_-10px_rgba(217,70,239,0.65),0_0_95px_-18px_rgba(34,211,238,0.4)] transition-all duration-300 hover:-translate-y-1 hover:brightness-110 hover:shadow-[0_0_95px_-12px_rgba(163,230,53,0.45)] md:px-12 md:text-lg">
                    <span>QUERO HACKEAR MEU ESTADO INTERNO AGORA</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                  <span className="flex items-center gap-2 text-xs font-medium text-slate-500 md:text-sm">
                    <Lock className="h-3.5 w-3.5" /> Acesso imediato · Garantia de 7 dias
                  </span>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-6 flex justify-center md:justify-start">
                  <LiveViewers text="pessoas estão nesta página agora" color="purple" variant="hero" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative px-4 py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <motion.div {...fadeInUp} className="mb-16 text-center">
              <h2 className="mb-8 text-3xl font-black leading-tight text-white md:text-5xl">
                <DecryptedText text="O Erro de Forçar o Ambiente" className="not-italic text-3xl font-black md:text-5xl" />
              </h2>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-2">
              <SpotlightCard spotlightColor="rgba(168,85,247,0.15)" className="p-8 md:p-10">
                <p className="text-lg leading-relaxed text-slate-300">
                  Esqueça a tentativa frustrada de mudar o mundo ao seu redor na força bruta. Se você vive apagando incêndios, estagnado ou atraindo o mesmo padrão de problemas, o erro não está no ambiente. <span className="font-bold text-purple-400">Está na sua frequência basal.</span>
                </p>
              </SpotlightCard>
              <SpotlightCard spotlightColor="rgba(6,182,212,0.15)" className="p-8 md:p-10">
                <p className="text-lg leading-relaxed text-slate-300">
                  A sociedade te ensinou a lutar contra o reflexo no espelho. Nós vamos te ensinar a <span className="font-bold text-cyan-400">reconfigurar o núcleo.</span>
                </p>
              </SpotlightCard>
            </div>
          </div>
        </section>

        <section className="relative bg-gradient-to-b from-neutral-950/40 to-black px-4 py-24 md:py-32">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.06] blur-[120px]" />
          <div className="relative mx-auto max-w-4xl">
            <motion.div {...fadeInUp} className="mb-16 text-center">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 shadow-[0_0_30px_rgba(72,255,0,0.12)]">
                <Cpu className="h-4 w-4 text-lime-300" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime-200">Engenharia de Estado Interno</span>
              </div>
              <h2 className="mb-6 text-3xl font-black text-white md:text-5xl">Apresentamos o <span className="shimmer-multi">ENERGY HACK: Método de Modelagem Neuroperceptiva.</span></h2>
              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-400">Junto ao manual de bio-otimização em PDF, você recebe o motor central desta transformação: a <span className="font-bold text-white">Faixa de Áudio 8D de Reconfiguração Matinal.</span></p>
            </motion.div>

            <SpotlightCard spotlightColor="rgba(72,255,0,0.18)" className="energy-card p-8 md:p-12">
              <div className="text-center">
                <Headphones className="mx-auto mb-6 h-12 w-12 text-lime-300" style={{ filter: "drop-shadow(0 0 20px rgba(72,255,0,0.45))" }} />
                <h3 className="mb-4 text-2xl font-black text-white md:text-3xl">Quando você acorda e coloca os fones, começa a configuração cirúrgica do seu estado interior</h3>
                <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400">Quando você acorda e coloca os fones de ouvido, não está apenas ouvindo som. A engenharia sonora espacial viaja pelos seus dois hemisférios cerebrais, criando um isolamento absoluto e induzindo a configuração cirúrgica do seu estado interior profundo.</p>
              </div>
            </SpotlightCard>
          </div>
        </section>

        <section className="relative px-4 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div {...fadeInUp}>
              <h2 className="mb-10 text-3xl font-black leading-tight text-white md:text-5xl">Magnetizando o <span className="bg-gradient-to-r from-violet-400 to-lime-300 bg-clip-text text-transparent">Alto Nível</span></h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">O segredo da modelagem de energia é este: a vida que você vive é o eco da sua fisiologia. O que nós induzimos neste áudio é a arquitetura mental e sensorial exata para que a sua realidade externa seja obrigada a refletir o que você deseja.</p>
            </motion.div>
            <motion.div {...fadeInUp} className="my-12 flex items-center justify-center gap-3">
              <div className="h-px max-w-[100px] flex-1 bg-gradient-to-r from-transparent via-violet-500/50 to-lime-400/50" />
              <Zap className="h-6 w-6 text-lime-300" />
              <div className="h-px max-w-[100px] flex-1 bg-gradient-to-l from-transparent via-lime-400/50 to-violet-500/50" />
            </motion.div>
            <motion.p {...fadeInUp} className="text-2xl font-black text-white md:text-3xl">Ao elevar a sua frequência logo nos primeiros minutos do dia, você deixa de reagir ao caos e passa a magnetizar uma vida de alto nível, com <span className="bg-gradient-to-r from-violet-400 to-lime-300 bg-clip-text text-transparent">clareza executiva, foco inabalável e autoridade natural.</span></motion.p>
            <motion.p {...fadeInUp} className="mx-auto mt-8 max-w-3xl text-lg font-semibold leading-relaxed text-slate-300 md:text-xl">Pare de levar os obstáculos para o pessoal. Seja estratégico. Pare de inserir moldes errados no sistema. Ajuste seu input visceral agora e a máquina trabalhará obrigatoriamente a seu favor.</motion.p>
          </div>
        </section>

        <section className="relative bg-gradient-to-b from-neutral-950/30 to-black px-4 py-24 md:py-32">
          <div className="mx-auto max-w-5xl">
            <motion.div {...fadeInUp} className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-black text-white md:text-5xl">O que muda quando o <span className="shimmer-multi">padrão interno</span> sobe</h2>
            </motion.div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, idx) => (
                <motion.div key={idx} {...stagger} transition={{ delay: idx * 0.1 }}>
                  <SpotlightCard spotlightColor={`${benefit.color}25`} className="h-full p-8 transition-transform duration-500 hover:-translate-y-2">
                    <div className="mb-5 w-fit rounded-xl p-3" style={{ backgroundColor: `${benefit.color}15`, color: benefit.color }}>{benefit.icon}</div>
                    <h3 className="text-lg font-black text-white">{benefit.title}</h3>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative bg-gradient-to-b from-neutral-950/30 to-black px-4 py-24 md:py-32">
          <div className="mx-auto max-w-3xl">
            <motion.div {...fadeInUp} className="mb-16 text-center">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/5 px-4 py-2"><Play className="h-4 w-4 text-lime-300" /><span className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime-200">Como operar o sistema</span></div>
              <h2 className="text-3xl font-black text-white md:text-5xl"><span className="bg-gradient-to-r from-violet-400 to-lime-300 bg-clip-text text-transparent">5 passos.</span> Todo dia.</h2>
            </motion.div>
            <div className="relative">
              <div className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-violet-500/50 via-lime-400/50 to-violet-500/50 md:left-8" />
              <div className="space-y-8">
                {steps.map((step, idx) => (
                  <motion.div key={idx} {...stagger} transition={{ delay: idx * 0.12 }} className="flex items-center gap-6 pl-2">
                    <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 bg-black md:h-14 md:w-14" style={{ borderColor: step.color, boxShadow: `0 0 20px ${step.color}30` }}>
                      <span className="text-xs font-black md:text-sm" style={{ color: step.color }}>{step.num}</span>
                    </div>
                    <p className="text-lg font-bold text-white md:text-xl">{step.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="oferta" className="relative scroll-mt-10 px-4 py-24 md:py-32">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.1] blur-[150px]" />
          <div className="relative z-10 mx-auto max-w-lg">
            <motion.div {...fadeInUp} className="mb-12 text-center">
              <div className="aurora-border mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-2">
                <Sparkles className="h-4 w-4 text-violet-300" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-200">O que você recebe hoje</span>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="mb-12 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/22 via-violet-400/16 to-lime-400/18 blur-[40px]" />
                <img src="/energy%20hack/Image_in_phone_202604021212.jpeg" alt="Energy Hack - Produto" className="relative z-10 w-56 rounded-2xl border-2 border-violet-400/25 shadow-[0_0_70px_-18px_rgba(128,0,255,0.35)] md:w-72" />
              </div>
            </motion.div>

            <div className="mb-10 space-y-4">
              {offerItems.map((item, idx) => (
                <motion.div key={idx} {...stagger} transition={{ delay: idx * 0.1 }}>
                  <SpotlightCard spotlightColor={`${item.color}20`} className="flex items-start gap-4 p-6">
                    <div className="flex-shrink-0 rounded-xl p-3" style={{ backgroundColor: `${item.color}15`, color: item.color }}>{item.icon}</div>
                    <div>
                      <h3 className="mb-1 text-lg font-black text-white">{item.title}</h3>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeInUp} className="aurora-border relative overflow-hidden rounded-[2rem] border-2 bg-gradient-to-b from-neutral-950 to-neutral-950/50 p-8 md:p-12" style={{ boxShadow: "0 0 90px -18px rgba(128,0,255,0.35), 0 0 120px -28px rgba(72,255,0,0.2), inset 0 0 60px rgba(0,0,0,0.4)" }}>
              <div className="relative z-10 text-center">
                <div className="mb-8 rounded-2xl border border-white/[0.06] bg-white/[0.03] py-8">
                  <p className="mb-2 text-2xl font-bold text-red-500/60 line-through">R$ 47,90</p>
                  <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">por apenas</p>
                  <p className="text-6xl font-black leading-none tracking-tighter text-white md:text-7xl">R$ 19<span className="bg-gradient-to-r from-violet-400 to-lime-300 bg-clip-text text-4xl text-transparent">,90</span></p>
                  <p className="mt-3 bg-gradient-to-r from-violet-400 to-lime-300 bg-clip-text text-lg font-black tracking-wide text-transparent">ou 2x de R$ 10,47</p>
                  <p className="mt-2 text-sm font-medium text-slate-500">acesso imediato e vitalício</p>
                </div>

                <motion.a href="https://pay.hotmart.com/J95022753E?checkoutMode=10" target="_blank" rel="noopener noreferrer" animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="shimmer-bg group block w-full rounded-2xl px-8 py-6 text-center text-xl font-black text-slate-950 shadow-[0_12px_60px_-12px_rgba(217,70,239,0.45)] transition-all duration-300 hover:-translate-y-1 hover:brightness-110">
                  <span className="flex items-center justify-center gap-3">QUERO HACKEAR MEU ESTADO INTERNO AGORA<ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" /></span>
                </motion.a>

                <div className="mt-8 rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.04] p-5 text-left">
                  <p className="mb-4 text-[11px] font-black uppercase tracking-[0.2em] text-lime-200">
                    Bônus incluídos hoje
                  </p>
                  <div className="space-y-3">
                    {bonusItems.map((bonus) => (
                      <div key={bonus} className="flex items-center gap-3">
                        <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-lime-400/25 bg-lime-400/10">
                          <ShieldCheck className="h-4 w-4 text-lime-300" />
                        </div>
                        <span className="text-sm font-semibold text-slate-100 md:text-base">{bonus}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-4 text-[11px] text-slate-500 md:text-xs">
                  <div className="flex flex-col items-center gap-1.5 text-center"><Lock className="h-4 w-4 text-purple-400/60" /><span className="font-semibold">Compra Segura</span></div>
                  <div className="flex flex-col items-center gap-1.5 text-center"><ShieldCheck className="h-4 w-4 text-lime-300/70" /><span className="font-semibold">Garantia 7 dias</span></div>
                  <div className="flex flex-col items-center gap-1.5 text-center"><Eye className="h-4 w-4 text-violet-300/70" /><span className="font-semibold">Acesso Imediato</span></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative px-4 py-24 md:py-32">
          <div className="mx-auto max-w-3xl">
            <motion.div {...fadeInUp} className="mb-16 text-center"><h2 className="text-3xl font-black text-white md:text-5xl">Perguntas frequentes</h2></motion.div>
            <motion.div {...fadeInUp}>
              {faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-white/10 last:border-b-0">
                  <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="group flex w-full items-center justify-between py-6 text-left">
                    <span className="pr-8 text-lg font-bold text-white transition-colors group-hover:text-lime-300">{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 flex-shrink-0 text-purple-400 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                        <p className="pb-6 font-medium leading-relaxed text-slate-400">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="relative px-4 py-20">
          <div className="mx-auto max-w-3xl">
            <motion.div {...fadeInUp} className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-transparent p-10 text-center md:p-14">
              <div className="relative z-10 mx-auto mb-8 h-32 w-32 md:h-36 md:w-36">
                <img
                  src="/garantia-7-dias_(1).png"
                  alt="Garantia de 7 dias"
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="mb-6 text-2xl font-black text-white md:text-3xl">
                Garantia <span className="font-black text-purple-400">7 Dias</span> Incondicional
              </h3>
              <div className="mx-auto mb-8 max-w-2xl space-y-4 text-base leading-relaxed text-slate-300 md:text-lg">
                <p>
                  Você tem <span className="font-bold text-purple-400">7 dias completos</span> para acessar o material,
                  testar o protocolo com calma e sentir na prática como a mudança do seu estado interno impacta sua execução diária.
                  Se ao final desse período perceber que o Energy Hack não fez sentido para você, devolvemos
                  <span className="font-bold text-purple-400"> 100% do seu investimento</span>.
                </p>
                <p>
                  Sem burocracia, sem atrito e sem perguntas desnecessárias. A proposta é simples:
                  você entra, testa por conta própria e decide com clareza se este é o sistema certo
                  para recalibrar sua frequência basal.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-6 md:flex-row">
                <div className="flex items-center justify-center gap-3">
                  <Clock className="h-6 w-6 text-purple-400" />
                  <span className="text-sm text-gray-300">7 dias para testar</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <ShieldCheck className="h-6 w-6 text-purple-400" />
                  <span className="text-sm text-gray-300">Reembolso sem perguntas</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative bg-gradient-to-b from-black via-purple-950/10 to-black px-4 py-24 md:py-32">
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <motion.div {...fadeInUp}>
              <h2 className="mb-6 text-3xl font-black leading-tight text-white md:text-5xl">Não lute contra o sistema. <br /><span className="shimmer-multi">Modele a raiz dele.</span></h2>
              <p className="mx-auto mb-12 max-w-2xl text-lg text-slate-400">Coloque os fones, dê o play e force a realidade a se curvar ao seu novo padrão energético.</p>
              <motion.a href="https://pay.hotmart.com/J95022753E?checkoutMode=10" target="_blank" rel="noopener noreferrer" animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="shimmer-bg group inline-flex items-center justify-center gap-3 rounded-2xl px-12 py-6 text-xl font-black text-slate-950 shadow-[0_0_70px_-10px_rgba(217,70,239,0.55),0_0_110px_-16px_rgba(34,211,238,0.35)] transition-all duration-300 hover:-translate-y-1 hover:brightness-110 hover:shadow-[0_0_110px_-12px_rgba(163,230,53,0.4)]">
                <span>QUERO HACKEAR MEU ESTADO INTERNO AGORA</span>
                <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
};

export default EnergyHack;

