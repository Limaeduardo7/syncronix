import { useEffect, useState } from "react";
import { ArrowRight, Lock, Target, Zap, Activity, Cpu, ShieldCheck, Clock, CheckCircle, AlertTriangle, Eye, ChevronDown, Flame, Brain, Gem, X, Check, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PurchaseNotifications from "@/components/quantum-key/PurchaseNotifications";
import LiveViewers from "@/components/quantum-key/LiveViewers";
import CountdownTimer from "@/components/gestao-inteligente/CountdownTimer";
import { brazilianPurchaseNotifications } from "@/components/quantum-key/notificationsData";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.7 }
};

const stagger = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
};

/* ── Floating Particles Background ── */
const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    background: i % 3 === 0 ? '#f59e0b' : i % 3 === 1 ? '#8b5cf6' : '#06b6d4',
                    boxShadow: i % 3 === 0 ? '0 0 8px #f59e0b' : i % 3 === 1 ? '0 0 8px #8b5cf6' : '0 0 8px #06b6d4',
                }}
                animate={{
                    y: [0, -30, 0],
                    x: [0, Math.random() * 20 - 10, 0],
                    opacity: [0.2, 0.8, 0.2],
                    scale: [1, 1.5, 1],
                }}
                transition={{
                    duration: 3 + Math.random() * 4,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                    ease: "easeInOut",
                }}
            />
        ))}
    </div>
);

/* ── Glowing Orb ── */
const GlowingOrb = ({ color, size, top, left, delay = 0 }: { color: string; size: string; top: string; left: string; delay?: number }) => (
    <motion.div
        className={`absolute ${size} rounded-full pointer-events-none blur-[100px]`}
        style={{ top, left, background: color }}
        animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
        }}
        transition={{
            duration: 5,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
        }}
    />
);

/* ── Animated Counter ── */
const AnimatedNumber = ({ value }: { value: number }) => {
    const [display, setDisplay] = useState(0);
    useEffect(() => {
        let start = 0;
        const step = value / 40;
        const id = setInterval(() => {
            start += step;
            if (start >= value) { setDisplay(value); clearInterval(id); }
            else setDisplay(Math.floor(start));
        }, 30);
        return () => clearInterval(id);
    }, [value]);
    return <span>{display.toLocaleString("pt-BR")}</span>;
};

/* ── FAQ Accordion ── */
const FAQ = ({ q, a }: { q: string; a: string }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-white/[0.06] last:border-b-0">
            <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-6 text-left group">
                <span className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors pr-8">{q}</span>
                <ChevronDown className={`w-5 h-5 text-violet-400 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                        <p className="pb-6 text-slate-400 leading-relaxed font-medium">{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const AlgoritmoDoUniverso = () => {
    useEffect(() => {
        document.title = "O Algoritmo do Universo | O Manual Definitivo da Realidade";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#050510] text-slate-200 flex flex-col font-sans selection:bg-violet-500/30 selection:text-violet-200">
            <PurchaseNotifications
                purchaseText="acabou de adquirir O Algoritmo!"
                justNowText="comprou agora"
                notifications={brazilianPurchaseNotifications}
            />

            <main className="flex-1 relative overflow-x-hidden">
                {/* ═══ GLOBAL BACKGROUND ═══ */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.08)_0%,transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(245,158,11,0.05)_0%,transparent_40%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_60%,rgba(6,182,212,0.04)_0%,transparent_40%)]" />
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />
                </div>

                {/* ═══════════════════════════════════════════════════════════
            COUNTDOWN TIMER — Top of page
        ═══════════════════════════════════════════════════════════ */}
                <section className="relative pt-6 pb-2 px-4 bg-[#050510] text-center z-30">
                    <CountdownTimer />
                </section>

                {/* ═══════════════════════════════════════════════════════════
            HERO — Bloco 1: A Quebra de Padrão
        ═══════════════════════════════════════════════════════════ */}
                <section className="relative min-h-[90vh] flex items-center justify-center px-4 pt-10 pb-16">
                    {/* Hero glows - multi-color */}
                    <GlowingOrb color="rgba(139,92,246,0.15)" size="w-[600px] h-[400px]" top="-10%" left="30%" delay={0} />
                    <GlowingOrb color="rgba(245,158,11,0.1)" size="w-[500px] h-[300px]" top="20%" left="60%" delay={2} />
                    <GlowingOrb color="rgba(6,182,212,0.08)" size="w-[400px] h-[300px]" top="40%" left="10%" delay={4} />
                    <FloatingParticles />
                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050510] to-transparent pointer-events-none z-10" />

                    <div className="relative z-20 max-w-5xl mx-auto text-center">
                        {/* Pre-headline badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2.5 px-5 py-2.5 mb-10 border border-violet-500/30 rounded-full bg-violet-500/10 backdrop-blur-sm"
                        >
                            <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                                <AlertTriangle className="w-4 h-4 text-violet-400" />
                            </motion.div>
                            <span className="text-violet-300 font-bold text-[10px] md:text-xs tracking-[0.15em] uppercase">
                                Aviso: O que você está prestes a ler invalida 99% do que te ensinaram
                            </span>
                        </motion.div>

                        {/* Main headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-[1.1] tracking-tight"
                        >
                            <span className="relative inline-block">
                                <motion.span
                                    className="bg-gradient-to-r from-violet-300 via-amber-300 to-cyan-300 bg-clip-text text-transparent bg-[length:200%_auto]"
                                    animate={{ backgroundPosition: ["0% center", "200% center"] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                >
                                    O ALGORITMO
                                </motion.span>
                            </span>
                            <br />
                            <span className="relative inline-block mt-2">
                                <motion.span
                                    className="bg-gradient-to-r from-amber-200 via-violet-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto]"
                                    animate={{ backgroundPosition: ["200% center", "0% center"] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                >
                                    DO UNIVERSO
                                </motion.span>
                                <motion.span
                                    className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-violet-500/0 via-amber-500 to-violet-500/0 rounded-full"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 1, delay: 1 }}
                                />
                            </span>
                        </motion.h1>

                        {/* Hero visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="my-10 flex justify-center"
                        >
                            <div className="relative">
                                <motion.div
                                    className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-violet-500/20 via-amber-500/20 to-cyan-500/20 blur-xl"
                                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                />
                                <img src="/univ-gif-1.gif" alt="" className="relative w-64 md:w-80 rounded-3xl opacity-85 shadow-[0_0_80px_-15px_rgba(139,92,246,0.4)]" />
                            </div>
                        </motion.div>

                        {/* Sub-headline */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-2xl text-slate-400 mb-14 max-w-3xl mx-auto leading-relaxed font-medium"
                        >
                            Descubra o sistema mecânico, frio e impecável por trás da realidade. O manual definitivo para parar de implorar por resultados e começar a{" "}
                            <span className="bg-gradient-to-r from-amber-400 to-violet-400 bg-clip-text text-transparent font-bold">operar a máquina ao seu favor.</span>
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-col items-center gap-5"
                        >
                            <motion.a
                                href="#oferta"
                                animate={{ scale: [1, 1.03, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="group relative inline-flex items-center justify-center gap-3 px-10 md:px-14 py-5 md:py-6 bg-gradient-to-r from-amber-500 via-amber-500 to-violet-500 hover:from-amber-400 hover:via-amber-500 hover:to-violet-400 text-slate-950 font-black text-base md:text-xl rounded-2xl shadow-[0_0_50px_-12px_rgba(139,92,246,0.4),0_0_50px_-12px_rgba(245,158,11,0.3)] hover:shadow-[0_0_80px_-15px_rgba(139,92,246,0.5),0_0_80px_-15px_rgba(245,158,11,0.4)] transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    animate={{ x: ["-100%", "100%"] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                />
                                <span className="relative z-10">QUERO ACESSAR O ALGORITMO</span>
                                <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                            <span className="text-slate-500 text-sm font-medium flex items-center gap-2">
                                <Lock className="w-3.5 h-3.5" /> Acesso imediato · Garantia de 7 dias
                            </span>
                        </motion.div>

                        {/* Live Viewers */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-8 flex justify-center"
                        >
                            <LiveViewers text="pessoas estão nesta página agora" color="yellow" />
                        </motion.div>

                        {/* Scroll indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="mt-20"
                        >
                            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex flex-col items-center gap-2 text-slate-600">
                                <span className="text-xs font-medium uppercase tracking-widest">Continue lendo</span>
                                <ChevronDown className="w-5 h-5" />
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════
            SOCIAL PROOF — Credibility Strip
        ═══════════════════════════════════════════════════════════ */}
                <section className="relative py-8 border-y border-violet-500/10 bg-gradient-to-r from-violet-950/20 via-[#050510] to-amber-950/20">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center">
                            {[
                                { num: 2847, label: "Cópias vendidas" },
                                { num: 4.9, label: "Avaliação média", suffix: "/5" },
                                { num: 98, label: "Taxa de satisfação", suffix: "%" },
                                { num: 7, label: "Dias de Garantia" },
                            ].map((stat, idx) => (
                                <motion.div key={idx} {...stagger} transition={{ delay: idx * 0.1 }}>
                                    <p className="text-2xl md:text-3xl font-black bg-gradient-to-r from-amber-400 to-violet-400 bg-clip-text text-transparent">
                                        {typeof stat.num === "number" && stat.num > 100 ? <AnimatedNumber value={stat.num} /> : stat.num}
                                        {stat.suffix && <span className="text-lg bg-gradient-to-r from-amber-400 to-violet-400 bg-clip-text text-transparent">{stat.suffix}</span>}
                                    </p>
                                    <p className="text-xs md:text-sm text-slate-500 font-semibold mt-1 uppercase tracking-wider">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════
            NARRATIVA DE VALIDAÇÃO — Bloco 2
        ═══════════════════════════════════════════════════════════ */}
                <section className="relative py-24 md:py-32 px-4">
                    <div className="max-w-3xl mx-auto">
                        <motion.div {...fadeInUp} className="space-y-10 text-lg md:text-xl text-slate-300 leading-[1.9]">
                            {/* Section visual */}
                            <motion.div {...fadeInUp} className="flex justify-center mb-10">
                                <img src="/univ-img-2.jpg" alt="" className="w-48 md:w-56 rounded-2xl opacity-70 border border-white/10 shadow-lg" />
                            </motion.div>

                            <p className="first-letter:text-6xl first-letter:font-black first-letter:text-amber-500 first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                                Você provavelmente se considera uma pessoa boa. Você trabalha duro, tenta fazer as coisas do jeito certo e, em algum nível, espera que a vida perceba o seu esforço.
                            </p>

                            {/* Dramatic callout */}
                            <motion.div
                                {...fadeInUp}
                                className="relative py-10 my-16"
                            >
                                <motion.div
                                    className="absolute left-0 top-0 w-1.5 h-full rounded-full"
                                    style={{ background: "linear-gradient(to bottom, #8b5cf6, #f59e0b, transparent)" }}
                                    animate={{ opacity: [0.6, 1, 0.6] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <p className="text-white font-black text-3xl md:text-5xl pl-8 leading-[1.2]">
                                    Mas os resultados não batem com o seu sacrifício.
                                </p>
                            </motion.div>

                            <p>
                                O desgaste mental aumenta. A frustração se torna rotina. E a pergunta que ecoa na sua cabeça no fim do dia é sempre a mesma:
                            </p>

                            <motion.div {...fadeInUp} className="flex justify-center my-6">
                                <img src="/univ-gif-3.gif" alt="" className="w-52 md:w-64 rounded-2xl opacity-75 shadow-[0_0_40px_-10px_rgba(245,158,11,0.2)]" />
                            </motion.div>

                            <motion.p
                                {...fadeInUp}
                                className="text-center text-2xl md:text-3xl text-amber-200 italic font-medium py-8"
                            >
                                "O que eu estou fazendo de errado?
                                <br />Por que parece tão fácil para os outros?"
                            </motion.p>

                            <motion.div {...fadeInUp} className="text-center py-10">
                                <p className="text-amber-500 font-black text-2xl md:text-3xl mb-4">
                                    A resposta vai doer, mas vai te libertar:
                                </p>
                                <p className="text-white font-black text-3xl md:text-4xl">
                                    Você está operando sob uma mentira.
                                </p>
                            </motion.div>

                            <p>
                                Ensinaram a você que o universo é um juiz emocional. Que ele recompensa o suor, a moralidade e as histórias de superação. Mas a realidade <span className="text-white font-bold">não opera por mérito</span>. Ela não sente pena. Ela não avalia a sua índole.
                            </p>

                            {/* Glassmorphism quote card */}
                            <motion.div
                                {...fadeInUp}
                                className="relative p-10 rounded-3xl bg-gradient-to-br from-violet-500/[0.08] to-amber-500/[0.04] border border-violet-500/20 backdrop-blur-xl mt-16 overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-40 h-40 bg-violet-500/15 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none" />
                                <div className="relative z-10">
                                    <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                                        <Gem className="w-8 h-8 text-violet-400/60 mb-4" />
                                    </motion.div>
                                    <p className="text-white text-xl md:text-2xl font-bold leading-relaxed">
                                        "A realidade é um sistema mecânico e impessoal. E enquanto você tentar convencer a máquina com emoções, continuará sendo esmagado pelas engrenagens."
                                    </p>
                                </div>
                            </motion.div>

                            {/* Visual after quote */}
                            <motion.div {...fadeInUp} className="flex justify-center mt-12">
                                <img src="/univ-gif-4.gif" alt="" className="w-56 md:w-72 rounded-3xl opacity-70 shadow-[0_0_50px_-12px_rgba(245,158,11,0.25)]" />
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════
            MECANISMO — Bloco 3: Anatomia da Máquina
        ═══════════════════════════════════════════════════════════ */}
                <section className="relative py-24 md:py-32 px-4 bg-gradient-to-b from-violet-950/20 via-[#050510] to-[#050510]">
                    {/* Section glows */}
                    <GlowingOrb color="rgba(139,92,246,0.1)" size="w-[500px] h-[500px]" top="20%" left="20%" delay={1} />
                    <GlowingOrb color="rgba(245,158,11,0.08)" size="w-[400px] h-[400px]" top="50%" left="60%" delay={3} />
                    <FloatingParticles />
                    <div className="relative max-w-6xl mx-auto">
                        <motion.div {...fadeInUp} className="text-center mb-20">
                            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-violet-500/30 rounded-full bg-violet-500/10">
                                <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
                                    <Cpu className="w-4 h-4 text-violet-400" />
                                </motion.div>
                                <span className="text-violet-300 font-bold text-[10px] tracking-[0.2em] uppercase">Decodificação do sistema</span>
                            </div>
                            <h2 className="text-3xl md:text-6xl font-black text-white mb-8 leading-tight">
                                Foi para decodificar esse sistema que
                                <br />
                                <span className="relative inline-block mt-2">
                                    <span className="bg-gradient-to-r from-violet-300 via-amber-400 to-cyan-300 bg-clip-text text-transparent">O Algoritmo do Universo</span>
                                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500/0 via-amber-500/80 to-violet-500/0" />
                                </span>
                                {" "}foi criado.
                            </h2>
                            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                                Este não é um material de autoajuda fofa. É um <span className="text-white font-bold">mapa pragmático e direto ao ponto</span>. Ele quebra a ilusão da "justiça cósmica" e entrega em suas mãos o painel de controle da realidade.
                            </p>
                            <p className="text-lg text-slate-500 mt-6 max-w-3xl mx-auto italic">
                                Você vai entender, de uma vez por todas, que a sua dor e o seu cansaço não são punições divinas ou falta de sorte. São apenas diagnósticos mecânicos de desalinhamento.
                            </p>
                        </motion.div>

                        {/* Mechanism visual */}
                        <motion.div {...fadeInUp} className="flex justify-center mb-16">
                            <img src="/univ-img-5.jpg" alt="" className="w-52 md:w-64 rounded-2xl opacity-70 border border-amber-500/10 shadow-[0_0_40px_-10px_rgba(245,158,11,0.15)]" />
                        </motion.div>

                        {/* 3 Pillar Cards — with numbering and visual hierarchy */}
                        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                            {[
                                {
                                    num: "01",
                                    title: "O Funil",
                                    subtitle: "INPUT",
                                    desc: "O seu único ponto de controle absoluto. Aprenda por que o sistema ignora a sua \"embalagem\" e reage apenas à sua \"matéria\" — o seu estado interno bruto.",
                                    icon: <Target className="w-7 h-7" />
                                },
                                {
                                    num: "02",
                                    title: "As Engrenagens",
                                    subtitle: "PROCESSAMENTO",
                                    desc: "A caixa-preta onde as leis imutáveis operam. Descubra como essa prensa invisível funciona, replicando e multiplicando a forma exata daquilo que você insere — sem julgamentos.",
                                    icon: <Zap className="w-7 h-7" />
                                },
                                {
                                    num: "03",
                                    title: "A Esteira",
                                    subtitle: "OUTPUT",
                                    desc: "O fim da ansiedade. Entenda por que o tempo não é o seu inimigo, mas um filtro de segurança. A latência na manifestação dos seus resultados não é uma falha, é física.",
                                    icon: <Activity className="w-7 h-7" />
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    {...stagger}
                                    transition={{ delay: 0.15 * idx, duration: 0.6 }}
                                    className={`group relative p-8 md:p-10 rounded-3xl border transition-all duration-500 hover:-translate-y-2 overflow-hidden ${idx === 0 ? 'bg-gradient-to-b from-violet-500/[0.08] to-transparent border-violet-500/10 hover:border-violet-500/30 hover:shadow-[0_20px_60px_-20px_rgba(139,92,246,0.2)]' : idx === 1 ? 'bg-gradient-to-b from-amber-500/[0.08] to-transparent border-amber-500/10 hover:border-amber-500/30 hover:shadow-[0_20px_60px_-20px_rgba(245,158,11,0.2)]' : 'bg-gradient-to-b from-cyan-500/[0.08] to-transparent border-cyan-500/10 hover:border-cyan-500/30 hover:shadow-[0_20px_60px_-20px_rgba(6,182,212,0.2)]'}`}
                                >
                                    {/* Step number */}
                                    <span className={`absolute top-6 right-8 text-[5rem] font-black leading-none select-none transition-colors duration-500 ${idx === 0 ? 'text-violet-500/[0.05] group-hover:text-violet-500/[0.1]' : idx === 1 ? 'text-amber-500/[0.05] group-hover:text-amber-500/[0.1]' : 'text-cyan-500/[0.05] group-hover:text-cyan-500/[0.1]'}`}>{item.num}</span>
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className={`p-3 rounded-xl transition-colors ${idx === 0 ? 'bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20' : idx === 1 ? 'bg-amber-500/10 text-amber-500 group-hover:bg-amber-500/20' : 'bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20'}`}>
                                                {item.icon}
                                            </div>
                                            <div>
                                                <p className={`text-[10px] font-bold tracking-[0.2em] uppercase ${idx === 0 ? 'text-violet-400/70' : idx === 1 ? 'text-amber-500/70' : 'text-cyan-400/70'}`}>{item.subtitle}</p>
                                                <h3 className="text-xl font-black text-white">{item.title}</h3>
                                            </div>
                                        </div>
                                        <p className="text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Flow diagram */}
                        <motion.div {...fadeInUp} className="hidden md:flex items-center justify-center gap-4 mt-12 text-slate-600">
                            <span className="px-4 py-2 rounded-lg bg-violet-500/10 border border-violet-500/20 text-sm font-bold text-violet-300">SEU INPUT</span>
                            <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                                <ArrowRight className="w-5 h-5 text-amber-500" />
                            </motion.div>
                            <span className="px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-sm font-bold text-amber-400">PROCESSAMENTO</span>
                            <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}>
                                <ArrowRight className="w-5 h-5 text-cyan-400" />
                            </motion.div>
                            <span className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-sm font-bold text-cyan-300">SEU RESULTADO</span>
                        </motion.div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════
            MUDANÇA DE PARADIGMA — Bloco 4
        ═══════════════════════════════════════════════════════════ */}
                <section className="relative py-24 md:py-32 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div {...fadeInUp}>
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-10 leading-tight">
                                Pare de tentar controlar o <span className="text-amber-500">"como"</span> as coisas devem acontecer.
                            </h2>
                            <p className="text-lg md:text-xl text-slate-400 mb-6 max-w-2xl mx-auto">
                                Cada vez que você injeta dúvidas, ansiedade e controle excessivo no seu processo, você contamina o resultado e <span className="bg-gradient-to-r from-amber-400 to-violet-400 bg-clip-text text-transparent font-bold">trava as engrenagens</span> da sua própria vida.
                            </p>
                        </motion.div>

                        {/* Paradigm visual */}
                        <motion.div {...fadeInUp} className="flex justify-center my-10">
                            <img src="/univ-img-6.jpg" alt="" className="w-48 md:w-60 rounded-2xl opacity-70 border border-white/10 shadow-lg" />
                        </motion.div>

                        {/* Visual separator */}
                        <motion.div {...fadeInUp} className="flex items-center justify-center gap-3 my-16">
                            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-violet-500/50" />
                            <motion.div animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity }}>
                                <Flame className="w-6 h-6 text-amber-500" />
                            </motion.div>
                            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-amber-500/50" />
                        </motion.div>

                        <motion.div {...fadeInUp}>
                            <p className="text-2xl md:text-4xl font-black text-white mb-6 leading-tight">
                                O Algoritmo do Universo vai te ensinar a
                            </p>
                            <motion.p
                                className="text-3xl md:text-5xl font-black mb-12 uppercase tracking-wide bg-gradient-to-r from-violet-400 via-amber-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto]"
                                animate={{ backgroundPosition: ["0% center", "200% center"] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            >
                                Engenharia do Preenchimento.
                            </motion.p>
                            <p className="text-lg md:text-xl text-slate-400 mb-16 max-w-2xl mx-auto">
                                Elimine os espaços vazios e as contradições internas. Garanta um fluxo ininterrupto e lógico de realizações.
                            </p>
                        </motion.div>

                        {/* Benefit pills */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
                            {[
                                "Sem rituais exaustivos.",
                                "Sem precisar \"pensar positivo\".",
                                "Apenas alinhamento mecânico.",
                                "Frio e altamente eficaz."
                            ].map((text, idx) => (
                                <motion.div
                                    key={idx}
                                    {...stagger}
                                    transition={{ delay: idx * 0.08 }}
                                    className={`flex items-center gap-3 p-5 rounded-2xl bg-white/[0.04] border transition-all group ${idx % 2 === 0 ? 'border-violet-500/10 hover:border-violet-500/40' : 'border-amber-500/10 hover:border-amber-500/40'}`}
                                >
                                    <motion.div
                                        className={`w-2 h-2 rounded-full ${idx % 2 === 0 ? 'bg-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.6)]' : 'bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.6)]'}`}
                                        animate={{ scale: [1, 1.5, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                                    />
                                    <span className="text-white font-bold text-base">{text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════
            ANTES vs DEPOIS — Novo bloco de persuasão
        ═══════════════════════════════════════════════════════════ */}
                <section className="relative py-24 md:py-32 px-4 bg-gradient-to-b from-[#050510] via-violet-950/10 to-[#050510]">
                    <FloatingParticles />
                    <div className="max-w-5xl mx-auto relative z-10">
                        <motion.div {...fadeInUp} className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                                A diferença é <span className="bg-gradient-to-r from-amber-500 to-violet-500 bg-clip-text text-transparent">brutal.</span>
                            </h2>
                            <p className="text-slate-400 text-lg">O que muda quando você para de implorar e começa a operar.</p>
                            <motion.div {...fadeInUp} className="flex justify-center mt-10">
                                <img src="/univ-gif-7.gif" alt="" className="w-56 md:w-72 rounded-3xl opacity-75 shadow-[0_0_50px_-12px_rgba(245,158,11,0.2)]" />
                            </motion.div>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                            {/* ANTES */}
                            <motion.div {...fadeInUp} className="p-8 md:p-10 rounded-3xl bg-red-500/[0.04] border border-red-500/10">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-2 rounded-lg bg-red-500/10"><X className="w-5 h-5 text-red-400" /></div>
                                    <h3 className="text-xl font-black text-red-400 uppercase tracking-wider">Antes do Algoritmo</h3>
                                </div>
                                <ul className="space-y-5">
                                    {[
                                        "Trabalha duro mas os resultados não vêm",
                                        "Frustração e cansaço mental constantes",
                                        "Sensação de injustiça e falta de sorte",
                                        "Tentativas aleatórias sem método",
                                        "Ansiedade por não controlar o futuro",
                                        "Depende de motivação para agir"
                                    ].map((t, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-400">
                                            <X className="w-4 h-4 text-red-500/60 mt-1 flex-shrink-0" />
                                            <span className="font-medium">{t}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* DEPOIS */}
                            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="p-8 md:p-10 rounded-3xl bg-amber-500/[0.04] border border-amber-500/10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                                <div className="flex items-center gap-3 mb-8 relative z-10">
                                    <div className="p-2 rounded-lg bg-amber-500/10"><Check className="w-5 h-5 text-amber-400" /></div>
                                    <h3 className="text-xl font-black text-amber-400 uppercase tracking-wider">Depois do Algoritmo</h3>
                                </div>
                                <ul className="space-y-5 relative z-10">
                                    {[
                                        "Opera com clareza mecânica e direção",
                                        "Alinhamento interno gera resultados reais",
                                        "Entende que não é injusto — era desalinhado",
                                        "Método pragmático e replicável",
                                        "Latência não é ansiedade — é processo",
                                        "Age por lógica, não por emoção"
                                    ].map((t, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-300">
                                            <Check className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                                            <span className="font-medium">{t}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════
            CTA INTERMEDIÁRIO — Bloco de urgência
        ═══════════════════════════════════════════════════════════ */}
                <section className="relative py-20 px-4 bg-gradient-to-r from-violet-500/[0.04] via-amber-500/[0.03] to-cyan-500/[0.04] border-y border-violet-500/10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div {...fadeInUp}>
                            <p className="text-2xl md:text-4xl font-black text-white mb-6">
                                Chegou a hora de parar de levar os obstáculos da vida <span className="text-amber-500">para o lado pessoal.</span>
                            </p>
                            <p className="text-lg text-slate-400 mb-10">
                                O universo não está contra você. Você apenas não tinha o manual de instruções. <span className="text-white font-bold">Até agora.</span>
                            </p>
                            <motion.div {...fadeInUp} className="flex justify-center mb-10">
                                <img src="/univ-gif-8.gif" alt="" className="w-52 md:w-64 rounded-2xl opacity-75 shadow-[0_0_40px_-10px_rgba(245,158,11,0.25)]" />
                            </motion.div>
                            <motion.a
                                href="#oferta"
                                animate={{ scale: [1, 1.03, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="group relative inline-flex items-center justify-center gap-3 px-12 py-5 bg-gradient-to-r from-amber-500 via-amber-500 to-violet-500 hover:from-amber-400 hover:via-amber-500 hover:to-violet-400 text-slate-950 font-black text-lg rounded-2xl shadow-[0_0_50px_-12px_rgba(139,92,246,0.3),0_0_50px_-12px_rgba(245,158,11,0.3)] hover:shadow-[0_0_80px_-15px_rgba(139,92,246,0.4),0_0_80px_-15px_rgba(245,158,11,0.4)] transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    animate={{ x: ["-100%", "100%"] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                />
                                <span className="relative z-10">QUERO O MANUAL AGORA</span>
                                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                        </motion.div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════
            OFERTA PRINCIPAL — Bloco 5
        ═══════════════════════════════════════════════════════════ */}
                <section id="oferta" className="relative py-24 md:py-32 px-4 scroll-mt-10 bg-gradient-to-b from-[#050510] via-violet-950/15 to-[#050510]">
                    {/* Glows */}
                    <GlowingOrb color="rgba(139,92,246,0.12)" size="w-[400px] h-[400px]" top="30%" left="20%" delay={0} />
                    <GlowingOrb color="rgba(245,158,11,0.1)" size="w-[400px] h-[400px]" top="40%" left="60%" delay={2.5} />
                    <FloatingParticles />

                    <div className="relative max-w-lg mx-auto z-10">
                        <motion.div {...fadeInUp} className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                                Assuma o controle. <span className="bg-gradient-to-r from-amber-500 to-violet-500 bg-clip-text text-transparent">Agora.</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            {...fadeInUp}
                            transition={{ delay: 0.1 }}
                            className="relative p-8 md:p-12 rounded-[2rem] bg-gradient-to-b from-violet-950/40 to-neutral-950/50 border-2 border-violet-500/20 shadow-[0_0_100px_-30px_rgba(139,92,246,0.2),0_0_60px_-20px_rgba(245,158,11,0.15)] overflow-hidden"
                        >
                            {/* Top glow */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[200px] bg-violet-500/10 blur-[80px] rounded-full -mt-[100px] pointer-events-none" />
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[150px] bg-amber-500/8 blur-[60px] rounded-full -mb-[75px] pointer-events-none" />

                            <div className="relative z-10">
                                {/* Offer visual */}
                                <div className="flex justify-center mb-8">
                                    <img src="/univ-gif-10.gif" alt="" className="w-44 md:w-56 rounded-2xl opacity-80 shadow-[0_0_40px_-10px_rgba(245,158,11,0.3)]" />
                                </div>

                                {/* Product name */}
                                <div className="text-center mb-10">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 border border-violet-500/30 rounded-full bg-violet-500/10">
                                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                                            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                                        </motion.div>
                                        <span className="text-violet-300 font-bold text-[10px] tracking-[0.15em] uppercase">Oferta Especial</span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-black text-white">
                                        O ALGORITMO DO UNIVERSO
                                    </h3>
                                </div>

                                {/* What's included */}
                                <div className="space-y-3 mb-10 text-left">
                                    {[
                                        "E-book completo: O Algoritmo do Universo",
                                        "Framework Funil → Engrenagens → Esteira",
                                        "Diagnóstico de desalinhamento pessoal",
                                        "Guia de preenchimento de lacunas internas",
                                        "Acesso vitalício e atualizações futuras"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-slate-300">
                                            <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                                            <span className="font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Pricing */}
                                <div className="text-center mb-10 py-8 rounded-2xl bg-gradient-to-b from-violet-500/[0.05] to-white/[0.02] border border-violet-500/10">
                                    <p className="text-red-500/60 line-through text-2xl font-bold mb-2">
                                        R$ 97,00
                                    </p>
                                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">por apenas</p>
                                    <p className="text-6xl md:text-7xl font-black text-white tracking-tighter leading-none">
                                        R$ 29<span className="text-4xl text-amber-500">,90</span>
                                    </p>
                                    <p className="text-amber-500 font-black text-lg mt-3 tracking-wide">
                                        ou 4x de R$ 8,14
                                    </p>
                                    <p className="text-slate-500 font-medium text-sm mt-2">acesso imediato e vitalício</p>
                                </div>



                                {/* CTA Button */}
                                <motion.a
                                    href="https://pay.hotmart.com/P104196723Q"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    animate={{ scale: [1, 1.02, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="group relative block w-full px-8 py-6 bg-gradient-to-r from-amber-500 via-amber-500 to-violet-500 hover:from-amber-400 hover:via-amber-500 hover:to-violet-400 text-slate-950 font-black text-xl text-center rounded-2xl shadow-[0_10px_50px_-15px_rgba(139,92,246,0.4),0_10px_50px_-15px_rgba(245,158,11,0.3)] transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                                        animate={{ x: ["-100%", "100%"] }}
                                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
                                    />
                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        👉 QUERO ACESSAR O ALGORITMO
                                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </motion.a>

                                {/* Trust badges */}
                                <div className="grid grid-cols-3 gap-4 mt-10 text-[11px] md:text-xs text-slate-500">
                                    <div className="flex flex-col items-center gap-1.5 text-center">
                                        <Lock className="w-4 h-4 text-violet-400/60" />
                                        <span className="font-semibold">Compra Segura</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1.5 text-center">
                                        <ShieldCheck className="w-4 h-4 text-amber-500/60" />
                                        <span className="font-semibold">Garantia 7 dias</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1.5 text-center">
                                        <Eye className="w-4 h-4 text-cyan-400/60" />
                                        <span className="font-semibold">Acesso Imediato</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════
            FAQ — Quebra de objeções (movido para após a oferta)
        ═══════════════════════════════════════════════════════════ */}
                <section className="relative py-24 md:py-32 px-4 bg-gradient-to-b from-[#050510] via-violet-950/10 to-[#050510]">
                    <GlowingOrb color="rgba(6,182,212,0.06)" size="w-[400px] h-[300px]" top="30%" left="70%" delay={1} />
                    <div className="max-w-3xl mx-auto relative z-10">
                        <motion.div {...fadeInUp} className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-violet-500/20 rounded-full bg-violet-500/10">
                                <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                                    <Brain className="w-4 h-4 text-violet-400" />
                                </motion.div>
                                <span className="text-violet-300 font-bold text-[10px] tracking-[0.2em] uppercase">Objeções eliminadas</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-10">
                                Perguntas que a sua mente <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">vai fazer</span>
                            </h2>
                            <motion.div {...fadeInUp} className="flex justify-center">
                                <div className="relative">
                                    <motion.div
                                        className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-violet-500/15 via-amber-500/15 to-cyan-500/15 blur-lg"
                                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    />
                                    <img src="/univ-gif-9.gif" alt="" className="relative w-52 md:w-64 rounded-2xl opacity-70 shadow-[0_0_40px_-10px_rgba(139,92,246,0.25)]" />
                                </div>
                            </motion.div>
                        </motion.div>
                        <motion.div {...fadeInUp} className="divide-y divide-white/[0.06]">
                            <FAQ q="Isso é mais um livro de autoajuda?" a="Não. 'O Algoritmo do Universo' utiliza uma linguagem técnica e mecânica intencionalmente. Aqui não há visualizações criativas, mantras ou 'pensamento positivo'. É um diagnóstico pragmático do sistema que governa os seus resultados — e um manual operacional para você manipulá-lo." />
                            <FAQ q="Preciso acreditar em algo específico para funcionar?" a="Pelo contrário. O material foi desenhado para funcionar independente das suas crenças. Ele trata a realidade como um sistema operacional: não importa se você 'acredita' na gravidade — ela funciona de qualquer forma. O Algoritmo opera com a mesma lógica." />
                            <FAQ q="R$ 29,90 parece barato demais. Qual é o truque?" a="Não há truque. O preço é uma decisão estratégica: queremos que o maior número possível de pessoas adultas tenham acesso a este conhecimento. O valor do conteúdo dentro do material é infinitamente superior ao preço cobrado. A pergunta é: quanto custa mais um ano operando sob uma mentira?" />
                            <FAQ q="E se eu não gostar?" a="Você está coberto por 7 dias de garantia incondicional. Se o material não fizer sentido para você por qualquer motivo, basta solicitar o reembolso. Zero burocracia." />
                            <FAQ q="É um livro digital?" a="Sim. O Algoritmo do Universo é um e-book. Após a compra, você recebe acesso imediato ao conteúdo. Leia no celular, tablet ou computador — onde e quando quiser." />
                        </motion.div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════
            GARANTIA — Seção dedicada dark-mode
        ═══════════════════════════════════════════════════════════ */}
                <section className="relative py-20 px-4">
                    <div className="max-w-2xl mx-auto">
                        <motion.div {...fadeInUp} className="text-center p-10 md:p-14 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06]">
                            <div className="flex justify-center mb-8">
                                <img src="/univ-gif-11.gif" alt="" className="w-44 md:w-56 rounded-2xl opacity-75 shadow-[0_0_40px_-10px_rgba(245,158,11,0.2)]" />
                            </div>
                            <motion.div
                                className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-violet-500/20 to-amber-500/10 rounded-full"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <ShieldCheck className="w-10 h-10 text-violet-400" />
                            </motion.div>
                            <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                                Garantia Incondicional de <span className="bg-gradient-to-r from-amber-500 to-violet-500 bg-clip-text text-transparent">7 Dias</span>
                            </h3>
                            <p className="text-slate-400 leading-relaxed mb-8 max-w-lg mx-auto">
                                Você tem 7 dias completos para ler, aplicar e testar o conteúdo. Se por qualquer razão sentir que não é para você, devolvemos <span className="text-white font-bold">100% do seu investimento</span>. Sem perguntas, sem burocracia.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <div className="flex items-center gap-2 justify-center text-slate-400">
                                    <Clock className="w-5 h-5 text-amber-500/60" />
                                    <span className="text-sm font-medium">7 dias para experimentar</span>
                                </div>
                                <div className="flex items-center gap-2 justify-center text-slate-400">
                                    <CheckCircle className="w-5 h-5 text-amber-500/60" />
                                    <span className="text-sm font-medium">Reembolso sem perguntas</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════
            NOTA PARA OS CÉTICOS — Bloco 6
        ═══════════════════════════════════════════════════════════ */}
                <section className="relative py-20 px-4 border-t border-white/5">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div {...fadeInUp}>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 border border-red-500/20 rounded-full bg-red-500/5">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                <span className="text-red-400/70 font-bold text-[10px] uppercase tracking-[0.2em]">Nota Final</span>
                            </div>
                            <p className="text-slate-600 text-sm italic leading-relaxed max-w-2xl mx-auto">
                                "Se você está procurando tapinhas nas costas ou validação para o seu vitimismo, feche esta página. Este material foi escrito para mentes adultas que preferem a verdade crua que funciona à mentira doce que paralisa. A escolha é sua."
                            </p>
                        </motion.div>
                    </div>
                </section>
            </main>

            {/* FOOTER */}
            <footer className="py-10 bg-[#050510] border-t border-violet-500/10 text-center">
                <p className="text-slate-600 text-sm">&copy; {new Date().getFullYear()} Syncronix. Todos os direitos reservados.</p>
                <p className="text-slate-700 text-xs mt-2">Este produto não garante resultados. Resultados dependem da aplicação individual.</p>
            </footer>
        </div>
    );
};

export default AlgoritmoDoUniverso;
