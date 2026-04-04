import { useEffect, useState } from "react";
import { ArrowRight, Lock, Target, Zap, Activity, Cpu, ShieldCheck, Clock, CheckCircle, AlertTriangle, Eye, ChevronDown, Flame, Brain, Gem, X, Check, ZoomIn, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "@/components/quantum-key/SEO";
import PurchaseNotifications from "@/components/quantum-key/PurchaseNotifications";
import LiveViewers from "@/components/quantum-key/LiveViewers";
import CountdownTimer from "@/components/gestao-inteligente/CountdownTimer";
import LandingFooter from "@/components/quantum-key/es/Footer";
import { brazilianPurchaseNotifications } from "@/components/quantum-key/notificationsData";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Lightbox from "yet-another-react-lightbox";
import LightboxZoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const SUMARIO_IMAGES = [
  "/images/algoritmo-universo/sumario-01.jpg",
  "/images/algoritmo-universo/sumario-02.jpg",
  "/images/algoritmo-universo/sumario-03.jpg",
  "/images/algoritmo-universo/sumario-04.jpg",
  "/images/algoritmo-universo/sumario-05.jpg",
];
const sumarioSlides = SUMARIO_IMAGES.map((src) => ({ src }));

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
    return <span>{display.toLocaleString("es-ES")}</span>;
};

/* ── FAQ Accordion ── */
const FAQ = ({ q, a }: { q: string; a: string }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-white/10 last:border-b-0">
            <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-6 text-left group">
                <span className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors pr-8">{q}</span>
                <ChevronDown className={`w-5 h-5 text-purple-400 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
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

const AlgoritmoDoUniversoES = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3500, stopOnInteraction: false })]);
    const [lightboxIndex, setLightboxIndex] = useState(-1);

    useEffect(() => {
        document.title = "EL ALGORITMO DEL UNIVERSO";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-black text-slate-200 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
            <SEO
                title="El Algoritmo del Universo | El manual definitivo de la realidad"
                description="Descubre el sistema mecánico detrás de la realidad y accede al e-book El Algoritmo del Universo para operar la máquina a tu favor."
                keywords="algoritmo del universo, ebook, realidad, desarrollo personal, alineación, resultados, manual de la realidad, syncronix"
                ogImage="https://syncronix.co/algoritmo-book-main.jpg"
                canonical="https://syncronix.co/ebook-el-algoritmo-del-universo"
                lang="es"
            />
            {/* Global CSS animations */}
            <style>{`
                @keyframes float-orb { 0%,100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-40px) scale(1.1); } }
                @keyframes float-orb-reverse { 0%,100% { transform: translateY(0) scale(1.05); } 50% { transform: translateY(30px) scale(0.95); } }
                @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
                @keyframes pulse-glow { 0%,100% { opacity: 0.4; } 50% { opacity: 0.8; } }
                @keyframes scanline { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }
                @keyframes color-shift { 0%,100% { filter: hue-rotate(0deg); } 50% { filter: hue-rotate(30deg); } }
                @keyframes aurora { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
                @keyframes border-glow { 0%,100% { border-color: rgba(168,85,247,0.3); } 33% { border-color: rgba(6,182,212,0.3); } 66% { border-color: rgba(245,158,11,0.3); } }
                .shimmer-text { background: linear-gradient(110deg, #f59e0b 0%, #a855f7 25%, #06b6d4 50%, #a855f7 75%, #f59e0b 100%); background-size: 200% 100%; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: shimmer 4s ease-in-out infinite; }
                .glow-border { box-shadow: 0 0 15px rgba(168,85,247,0.25), 0 0 40px rgba(6,182,212,0.15), 0 0 60px rgba(245,158,11,0.1), inset 0 0 30px rgba(0,0,0,0.5); }
                .neon-multi { text-shadow: 0 0 10px rgba(168,85,247,0.5), 0 0 40px rgba(6,182,212,0.3), 0 0 80px rgba(245,158,11,0.2); }
                .aurora-border { animation: border-glow 6s ease-in-out infinite; }
                .aurora-bg { background: linear-gradient(135deg, rgba(168,85,247,0.08), rgba(6,182,212,0.06), rgba(245,158,11,0.08), rgba(16,185,129,0.06)); background-size: 300% 300%; animation: aurora 8s ease-in-out infinite; }
            `}</style>
            <PurchaseNotifications
                purchaseText="acaba de comprar El Algoritmo"
                justNowText="compró ahora"
                notifications={brazilianPurchaseNotifications}
            />

            <main className="flex-1 relative overflow-x-hidden">
                {/* ═══ GLOBAL BACKGROUND — Animated Orbs + Grid ═══ */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.06)_0%,transparent_60%)]" />
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />
                    {/* Floating orbs */}
                    <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-purple-600/[0.07] rounded-full blur-[120px]" style={{ animation: 'float-orb 12s ease-in-out infinite' }} />
                    <div className="absolute top-[30%] right-[5%] w-[450px] h-[450px] bg-cyan-500/[0.06] rounded-full blur-[100px]" style={{ animation: 'float-orb-reverse 15s ease-in-out infinite' }} />
                    <div className="absolute bottom-[20%] left-[15%] w-[400px] h-[400px] bg-emerald-500/[0.05] rounded-full blur-[100px]" style={{ animation: 'float-orb 18s ease-in-out infinite 3s' }} />
                    <div className="absolute top-[60%] right-[20%] w-[350px] h-[350px] bg-rose-500/[0.05] rounded-full blur-[80px]" style={{ animation: 'float-orb-reverse 14s ease-in-out infinite 2s' }} />
                    <div className="absolute top-[80%] left-[40%] w-[300px] h-[300px] bg-blue-500/[0.04] rounded-full blur-[110px]" style={{ animation: 'float-orb 16s ease-in-out infinite 5s' }} />
                </div>

                {/* ═══════════════════════════════════════════════════════════
            COUNTDOWN TIMER — Top of page
        ═══════════════════════════════════════════════════════════ */}
                <section className="relative pt-6 pb-2 px-4 bg-black text-center z-30">
                    <CountdownTimer
                        offerEndsText="Esta oferta termina en:"
                        minutesLabel="Min"
                        secondsLabel="Seg"
                        expiredTitle="¡TIEMPO AGOTADO!"
                        expiredDescription="Esta es tu ultima oportunidad. Es ahora o nunca."
                    />
                </section>

                {/* ═══════════════════════════════════════════════════════════
            HERO — Bloco 1: A Quebra de Padrão
        ═══════════════════════════════════════════════════════════ */}
                <section className="relative min-h-[90vh] flex items-center justify-center px-4 pt-10 pb-16">
                    {/* Hero multi-color glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-purple-600/[0.1] blur-[150px] rounded-full pointer-events-none" />
                    <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-cyan-500/[0.08] blur-[150px] rounded-full pointer-events-none" style={{ animation: 'pulse-glow 6s ease-in-out infinite' }} />
                    <div className="absolute top-[5%] right-[10%] w-[400px] h-[400px] bg-rose-500/[0.06] blur-[120px] rounded-full pointer-events-none" style={{ animation: 'pulse-glow 8s ease-in-out infinite 2s' }} />
                    <div className="absolute bottom-[20%] left-[30%] w-[300px] h-[300px] bg-emerald-500/[0.05] blur-[100px] rounded-full pointer-events-none" style={{ animation: 'pulse-glow 10s ease-in-out infinite 4s' }} />
                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

                    <div className="relative z-20 max-w-5xl mx-auto text-center">
                        {/* Pre-headline badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2.5 px-5 py-2.5 mb-10 border border-purple-500/30 rounded-full bg-purple-500/5 backdrop-blur-sm aurora-border"
                        >
                            <AlertTriangle className="w-4 h-4 text-cyan-400" />
                            <span className="text-cyan-300 font-bold text-[10px] md:text-xs tracking-[0.15em] uppercase">
                                Advertencia: lo que estás a punto de leer invalida el 99% de lo que te enseñaron
                            </span>
                        </motion.div>

                        {/* Main headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 text-white leading-[1.1] tracking-tight"
                        >
                            <span className="relative inline-block mt-2">
                                <span className="shimmer-text">
                                    EL ALGORITMO DEL UNIVERSO
                                </span>
                                <motion.span
                                    className="absolute -bottom-3 left-0 w-full h-1.5 rounded-full"
                                    style={{ background: 'linear-gradient(90deg, transparent, #a855f7, #06b6d4, #f59e0b, #10b981, #a855f7, transparent)' }}
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 1.2, delay: 0.8 }}
                                />
                            </span>
                        </motion.h1>

                        {/* Hero VSL */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="my-10 w-full max-w-2xl mx-auto"
                        >
                            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-purple-500/30 glow-border aurora-border">
                                {/* Scanline effect */}
                                <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden opacity-[0.03]">
                                    <div className="w-full h-1/2 bg-gradient-to-b from-white/0 via-white to-white/0" style={{ animation: 'scanline 4s linear infinite' }} />
                                </div>
                                <iframe
                                    src="https://www.youtube.com/embed/3vJ7Z23rXSg?rel=0&modestbranding=1"
                                    title="El Algoritmo del Universo"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0 w-full h-full"
                                />
                            </div>
                        </motion.div>

                        {/* Sub-headline */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-2xl text-slate-400 mb-14 max-w-3xl mx-auto leading-relaxed font-medium"
                        >
                            Descubre el sistema mecánico, frío e impecable detrás de la realidad. El manual definitivo para dejar de suplicar por resultados y empezar a{" "}
                            <span className="text-cyan-400 font-bold">operar la máquina a tu favor.</span>
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
                                className="group inline-flex items-center justify-center gap-3 px-10 md:px-14 py-5 md:py-6 bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-500 hover:from-purple-500 hover:via-cyan-400 hover:to-emerald-400 text-white font-black text-base md:text-xl rounded-2xl shadow-[0_0_50px_-12px_rgba(168,85,247,0.4),0_0_80px_-20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_80px_-15px_rgba(168,85,247,0.5),0_0_120px_-20px_rgba(6,182,212,0.4)] transform hover:-translate-y-1 transition-all duration-300"
                            >
                                <span>QUIERO ACCEDER AL ALGORITMO</span>
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                            <span className="text-slate-500 text-sm font-medium flex items-center gap-2">
                                <Lock className="w-3.5 h-3.5" /> Acceso inmediato · Garantía de 7 días
                            </span>
                        </motion.div>

                        {/* Live Viewers */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-8 flex justify-center"
                        >
                            <LiveViewers text="personas están en esta página ahora" color="yellow" />
                        </motion.div>

                        {/* Scroll indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="mt-20"
                        >
                            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex flex-col items-center gap-2 text-slate-600">
                                <span className="text-xs font-medium uppercase tracking-widest">Sigue leyendo</span>
                                <ChevronDown className="w-5 h-5" />
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════
            SOCIAL PROOF — Credibility Strip
        ═══════════════════════════════════════════════════════════ */}
                <section className="relative py-8 border-y border-white/5 bg-neutral-950/30">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center">
                            {[
                                { num: 2847, label: "Copias vendidas" },
                                { num: 4.9, label: "Valoración media", suffix: "/5" },
                                { num: 98, label: "Tasa de satisfacción", suffix: "%" },
                                { num: 7, label: "Días de garantía" },
                            ].map((stat, idx) => (
                                <motion.div key={idx} {...stagger} transition={{ delay: idx * 0.1 }}>
                                    <p className="text-2xl md:text-3xl font-black" style={{ color: ['#a855f7','#06b6d4','#10b981','#f59e0b'][idx] }}>
                                        {typeof stat.num === "number" && stat.num > 100 ? <AnimatedNumber value={stat.num} /> : stat.num}
                                        {stat.suffix && <span className="text-lg" style={{ color: ['#c084fc','#22d3ee','#34d399','#fbbf24'][idx] }}>{stat.suffix}</span>}
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
                            <p className="first-letter:text-6xl first-letter:font-black first-letter:text-purple-400 first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                                Probablemente te consideras una buena persona. Trabajas duro, intentas hacer las cosas correctamente y, en algún nivel, esperas que la vida note tu esfuerzo.
                            </p>

                            {/* Dramatic callout */}
                            <motion.div
                                {...fadeInUp}
                                className="relative py-10 my-16"
                            >
                                <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent rounded-full" />
                                <p className="text-white font-black text-3xl md:text-5xl pl-8 leading-[1.2]">
                                    Pero los resultados no coinciden con tu sacrificio.
                                </p>
                            </motion.div>

                            <p>
                                El desgaste mental aumenta. La frustración se vuelve rutina. Y la pregunta que resuena en tu cabeza al final del día es siempre la misma:
                            </p>

                            <motion.p
                                {...fadeInUp}
                                className="text-center text-2xl md:text-3xl text-cyan-200 italic font-medium py-8"
                            >
                                "¿Qué estoy haciendo mal?
                                <br />¿Por qué parece tan fácil para los demás?"
                            </motion.p>

                            <motion.div {...fadeInUp} className="text-center py-10">
                                <p className="text-purple-400 font-black text-2xl md:text-3xl mb-4">
                                    Y la respuesta es que...
                                </p>
                            </motion.div>

                            <p>
                                Te enseñaron que el universo es un juez emocional. Que recompensa el esfuerzo, la moralidad y las historias de superación. Pero la realidad <span className="text-white font-bold">no opera por mérito</span>. No siente pena. No evalúa tu carácter.
                            </p>

                            {/* Glassmorphism quote card */}
                            <motion.div
                                {...fadeInUp}
                                className="relative p-10 rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 backdrop-blur-xl mt-16 overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none" />
                                <div className="relative z-10">
                                    <Gem className="w-8 h-8 text-cyan-400/50 mb-4" />
                                    <p className="text-white text-xl md:text-2xl font-bold leading-relaxed">
                                        "La realidad es un sistema mecánico e impersonal. Y mientras intentes convencer a la máquina con emociones, seguirás siendo aplastado por sus engranajes."
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════
            SUMÁRIO VISUAL — Carrossel de páginas do e-book
        ═══════════════════════════════════════════════════════════ */}
                <section className="relative py-24 md:py-32 px-4 bg-gradient-to-b from-black via-neutral-950/30 to-black overflow-hidden">
                    <div className="max-w-5xl mx-auto">
                        <motion.div {...fadeInUp} className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-cyan-500/20 rounded-full bg-cyan-500/5">
                                <BookOpen className="w-4 h-4 text-cyan-400" />
                                <span className="text-cyan-300 font-bold text-[10px] tracking-[0.2em] uppercase">Dentro del e-book</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                                Lo que vas a encontrar <span className="text-cyan-400">dentro</span>
                            </h2>
                            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                                Páginas diseñadas para decodificar el sistema de la realidad con infografías mecánicas de alta definición.
                            </p>
                        </motion.div>

                        <motion.div {...fadeInUp}>
                            <div className="embla overflow-hidden rounded-2xl border-2 border-cyan-500/20 shadow-[0_0_60px_-20px_rgba(6,182,212,0.2)] bg-neutral-950 aurora-border" ref={emblaRef}>
                                <div className="flex touch-pan-y">
                                    {SUMARIO_IMAGES.map((src, idx) => (
                                        <div
                                            className="flex-[0_0_100%] min-w-0 relative h-[500px] sm:h-[650px] md:h-[750px] flex items-center justify-center bg-black p-4 md:p-8 cursor-zoom-in group"
                                            key={idx}
                                            onClick={() => setLightboxIndex(idx)}
                                        >
                                            {/* Blurred background */}
                                            <div
                                                className="absolute inset-0 bg-cover bg-center blur-3xl opacity-20 pointer-events-none"
                                                style={{ backgroundImage: `url(${src})` }}
                                            />
                                            <img
                                                src={src}
                                                alt={`Página ${idx + 1} de El Algoritmo del Universo`}
                                                className="relative z-10 max-h-full w-auto object-contain rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                                                <div className="bg-black/60 p-4 rounded-full backdrop-blur-sm border border-cyan-500/20">
                                                    <ZoomIn className="w-8 h-8 text-cyan-400" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Carousel dots */}
                            <div className="flex justify-center gap-2 mt-6">
                                {SUMARIO_IMAGES.map((_, idx) => (
                                    <div key={idx} className="w-2 h-2 rounded-full bg-white/20" />
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <Lightbox
                        index={lightboxIndex}
                        open={lightboxIndex >= 0}
                        close={() => setLightboxIndex(-1)}
                        slides={sumarioSlides}
                        plugins={[LightboxZoom]}
                        animation={{ fade: 300 }}
                        carousel={{ finite: false }}
                        styles={{
                            container: { backgroundColor: "rgba(0, 0, 0, 0.97)" },
                        }}
                    />
                </section>

                {/* ═══════════════════════════════════════════════════════════
            MECANISMO — Bloco 3: Anatomia da Máquina
        ═══════════════════════════════════════════════════════════ */}
                <section className="relative py-24 md:py-32 px-4 bg-gradient-to-b from-neutral-950/40 to-black">
                    {/* Multi-color section glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/[0.06] blur-[120px] rounded-full pointer-events-none" />
                    <div className="absolute top-[30%] left-[5%] w-[400px] h-[400px] bg-purple-600/[0.07] blur-[100px] rounded-full pointer-events-none" style={{ animation: 'float-orb 10s ease-in-out infinite' }} />
                    <div className="absolute bottom-[20%] right-[5%] w-[350px] h-[350px] bg-cyan-500/[0.06] blur-[80px] rounded-full pointer-events-none" style={{ animation: 'float-orb-reverse 12s ease-in-out infinite' }} />
                    <div className="absolute top-[60%] left-[50%] w-[250px] h-[250px] bg-rose-500/[0.04] blur-[90px] rounded-full pointer-events-none" style={{ animation: 'float-orb 14s ease-in-out infinite 3s' }} />
                    <div className="relative max-w-6xl mx-auto">
                        <motion.div {...fadeInUp} className="text-center mb-20">
                            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-emerald-500/20 rounded-full bg-emerald-500/5">
                                <Cpu className="w-4 h-4 text-emerald-400" />
                                <span className="text-emerald-300 font-bold text-[10px] tracking-[0.2em] uppercase">Decodificación del sistema</span>
                            </div>
                            <h2 className="text-3xl md:text-6xl font-black text-white mb-8 leading-tight">
                                Fue para decodificar este sistema que
                                <br />
                                <span className="relative inline-block mt-2">
                                    <span className="bg-gradient-to-r from-emerald-300 via-cyan-400 to-purple-400 bg-clip-text text-transparent">El Algoritmo del Universo</span>
                                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500/0 via-cyan-500/80 to-purple-500/0" />
                                </span>
                                {" "}fue creado.
                            </h2>
                            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                                Este no es un material de autoayuda suave. Es un <span className="text-white font-bold">mapa pragmático y directo</span>. Rompe la ilusión de la "justicia cósmica" y pone en tus manos el panel de control de la realidad.
                            </p>
                            <p className="text-lg text-slate-500 mt-6 max-w-3xl mx-auto">
                                Vas a entender, de una vez por todas, que tu dolor y tu cansancio no son castigos divinos ni mala suerte. Son apenas diagnósticos mecánicos de desalineación.
                            </p>
                        </motion.div>

                        {/* AI Core visual */}
                        <motion.div {...fadeInUp} className="flex justify-center mb-16">
                            <img src="https://i.pinimg.com/originals/32/c3/a7/32c3a75b9d47ea321c108dc076708640.gif" alt="" className="w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-xl border border-white/10 opacity-80" />
                        </motion.div>

                        {/* 3 Pillar Cards — with numbering and visual hierarchy */}
                        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                            {[
                                {
                                    num: "01",
                                    title: "El Embudo",
                                    subtitle: "INPUT",
                                    desc: "Tu único punto de control absoluto. Aprende por qué el sistema ignora tu \"envoltorio\" y reacciona solo a tu \"materia prima\": tu estado interno.",
                                    icon: <Target className="w-7 h-7" />
                                },
                                {
                                    num: "02",
                                    title: "Los Engranajes",
                                    subtitle: "PROCESAMIENTO",
                                    desc: "La caja negra donde operan las leyes inmutables. Descubre cómo funciona esta prensa invisible, replicando y multiplicando la forma exacta de lo que introduces, sin juicios.",
                                    icon: <Zap className="w-7 h-7" />
                                },
                                {
                                    num: "03",
                                    title: "La Cinta",
                                    subtitle: "OUTPUT",
                                    desc: "El fin de la ansiedad. Entiende por qué el tiempo no es tu enemigo, sino un filtro de seguridad. La latencia en la manifestación de tus resultados no es una falla, es física.",
                                    icon: <Activity className="w-7 h-7" />
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    {...stagger}
                                    transition={{ delay: 0.15 * idx, duration: 0.6 }}
                                    className={`group relative p-8 md:p-10 rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.06] transition-all duration-500 hover:-translate-y-2 ${idx === 0 ? 'hover:border-purple-500/30 hover:shadow-[0_20px_60px_-20px_rgba(168,85,247,0.2)]' : idx === 1 ? 'hover:border-cyan-500/30 hover:shadow-[0_20px_60px_-20px_rgba(6,182,212,0.2)]' : 'hover:border-emerald-500/30 hover:shadow-[0_20px_60px_-20px_rgba(16,185,129,0.2)]'}`}
                                >
                                    {/* Step number */}
                                    <span className={`absolute top-6 right-8 text-[5rem] font-black text-white/[0.03] leading-none select-none transition-colors duration-500 ${idx === 0 ? 'group-hover:text-purple-500/[0.08]' : idx === 1 ? 'group-hover:text-cyan-500/[0.08]' : 'group-hover:text-emerald-500/[0.08]'}`}>{item.num}</span>
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className={`p-3 rounded-xl transition-colors ${idx === 0 ? 'bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20' : idx === 1 ? 'bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20' : 'bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20'}`}>
                                                {item.icon}
                                            </div>
                                            <div>
                                                <p className={`text-[10px] font-bold tracking-[0.2em] uppercase ${idx === 0 ? 'text-purple-400/70' : idx === 1 ? 'text-cyan-400/70' : 'text-emerald-400/70'}`}>{item.subtitle}</p>
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
                            <span className="px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-sm font-bold text-purple-300">TU INPUT</span>
                            <ArrowRight className="w-5 h-5 text-cyan-400" />
                            <span className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-sm font-bold text-cyan-300">PROCESAMIENTO</span>
                            <ArrowRight className="w-5 h-5 text-emerald-400" />
                            <span className="px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-sm font-bold text-emerald-300">TU RESULTADO</span>
                        </motion.div>

                        {/* Circular monitors room visual */}
                        <motion.div {...fadeInUp} className="flex justify-center mt-16">
                            <img src="https://i.pinimg.com/originals/a0/61/22/a061226b0125b9a410e609136198d3db.gif" alt="" className="w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-xl border border-white/10 opacity-80" />
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
                                Deja de intentar controlar <span className="text-rose-400">"cómo"</span> deben suceder las cosas.
                            </h2>
                            <p className="text-lg md:text-xl text-slate-400 mb-6 max-w-2xl mx-auto">
                                Cada vez que inyectas dudas, ansiedad y control excesivo en tu proceso, contaminas el resultado y <span className="text-white font-bold">atascas los engranajes</span> de tu propia vida.
                            </p>
                        </motion.div>

                        {/* Visual separator */}
                        <motion.div {...fadeInUp} className="flex items-center justify-center gap-3 my-16">
                            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent via-purple-500/50 to-cyan-500/50" />
                            <Flame className="w-6 h-6 text-rose-400" />
                            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent via-cyan-500/50 to-emerald-500/50" />
                        </motion.div>

                        <motion.div {...fadeInUp}>
                            <p className="text-2xl md:text-4xl font-black text-white mb-6 leading-tight">
                                El Algoritmo del Universo va a enseñarte
                            </p>
                            <p className="text-3xl md:text-5xl font-black mb-12 uppercase tracking-wide neon-multi" style={{ background: 'linear-gradient(135deg, #a855f7, #06b6d4, #10b981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                Ingeniería del Relleno.
                            </p>

                            {/* Brain scan interfaces visual */}
                            <motion.div {...fadeInUp} className="flex justify-center my-12">
                                <img src="https://i.pinimg.com/736x/4d/0b/5b/4d0b5bb1d2ad4b818fed90ff68da35dd.jpg" alt="" className="w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-xl border border-white/10 opacity-80" />
                            </motion.div>

                            <p className="text-lg md:text-xl text-slate-400 mb-16 max-w-2xl mx-auto">
                                Elimina los espacios vacíos y las contradicciones internas. Garantiza un flujo ininterrumpido y lógico de resultados.
                            </p>
                        </motion.div>

                        {/* Benefit pills */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
                            {[
                                "Sin rituales agotadores.",
                                "Sin necesidad de \"pensar positivo\".",
                                "Solo alineación mecánica.",
                                "Frío y altamente eficaz."
                            ].map((text, idx) => (
                                <motion.div
                                    key={idx}
                                    {...stagger}
                                    transition={{ delay: idx * 0.08 }}
                                    className={`flex items-center gap-3 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] transition-all group ${idx === 0 ? 'hover:border-purple-500/40' : idx === 1 ? 'hover:border-cyan-500/40' : idx === 2 ? 'hover:border-emerald-500/40' : 'hover:border-rose-500/40'}`}
                                >
                                    <div className={`w-2 h-2 rounded-full transition-shadow ${idx === 0 ? 'bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.6)]' : idx === 1 ? 'bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.6)]' : idx === 2 ? 'bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)]' : 'bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.6)]'}`} />
                                    <span className="text-white font-bold text-base">{text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════
            ANTES vs DEPOIS — Novo bloco de persuasão
        ═══════════════════════════════════════════════════════════ */}
                <section className="relative py-24 md:py-32 px-4 bg-gradient-to-b from-neutral-950/30 to-black">
                    <div className="max-w-5xl mx-auto">
                        <motion.div {...fadeInUp} className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                                La diferencia es <span className="bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent">brutal.</span>
                            </h2>
                            <p className="text-slate-400 text-lg">Lo que cambia cuando dejas de suplicar y empiezas a operar.</p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                            {/* ANTES */}
                            <motion.div {...fadeInUp} className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-red-500/[0.06] to-red-900/[0.02] border border-red-500/15 shadow-[0_0_40px_-20px_rgba(239,68,68,0.15)]">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-2 rounded-lg bg-red-500/10"><X className="w-5 h-5 text-red-400" /></div>
                                    <h3 className="text-xl font-black text-red-400 uppercase tracking-wider">Antes del Algoritmo</h3>
                                </div>
                                <ul className="space-y-5">
                                    {[
                                        "Trabajas duro pero los resultados no llegan",
                                        "Frustración y cansancio mental constantes",
                                        "Sensación de injusticia y mala suerte",
                                        "Intentos aleatorios sin método",
                                        "Ansiedad por no controlar el futuro",
                                        "Dependes de la motivación para actuar"
                                    ].map((t, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-400">
                                            <X className="w-4 h-4 text-red-500/60 mt-1 flex-shrink-0" />
                                            <span className="font-medium">{t}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* DEPOIS */}
                            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-amber-500/[0.06] to-amber-900/[0.02] border border-amber-500/15 shadow-[0_0_40px_-20px_rgba(245,158,11,0.2)] relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                                <div className="flex items-center gap-3 mb-8 relative z-10">
                                    <div className="p-2 rounded-lg bg-amber-500/10"><Check className="w-5 h-5 text-amber-400" /></div>
                                    <h3 className="text-xl font-black text-amber-400 uppercase tracking-wider">Después del Algoritmo</h3>
                                </div>
                                <ul className="space-y-5 relative z-10">
                                    {[
                                        "Operas con claridad mecánica y dirección",
                                        "La alineación interna genera resultados reales",
                                        "Entiendes que no era injusto, estaba desalineado",
                                        "Método pragmático y replicable",
                                        "La latencia no es ansiedad, es proceso",
                                        "Actúas por lógica, no por emoción"
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
                <section className="relative py-20 px-4 aurora-bg border-y border-purple-500/10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div {...fadeInUp}>
                            {/* Pixel-art factory visual */}
                            <div className="flex justify-center mb-10">
                                <img src="https://i.pinimg.com/originals/94/fb/73/94fb7368115c0945caa6f7b7c576821d.gif" alt="" className="w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-xl border border-white/10 opacity-80" />
                            </div>
                            <p className="text-2xl md:text-4xl font-black text-white mb-6">
                                Llegó la hora de dejar de tomar los obstáculos de la vida <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">como algo personal.</span>
                            </p>
                            <p className="text-lg text-slate-400 mb-10">
                                El universo no está contra ti. Simplemente no tenías el manual de instrucciones. <span className="text-white font-bold">Hasta ahora.</span>
                            </p>
                            <motion.a
                                href="#oferta"
                                animate={{ scale: [1, 1.03, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="group inline-flex items-center justify-center gap-3 px-12 py-5 bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-500 hover:from-purple-500 hover:via-cyan-400 hover:to-emerald-400 text-white font-black text-lg rounded-2xl shadow-[0_0_50px_-12px_rgba(168,85,247,0.4),0_0_60px_-15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_80px_-15px_rgba(168,85,247,0.5)] transform hover:-translate-y-1 transition-all duration-300"
                            >
                                <span>QUIERO EL MANUAL AHORA</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                        </motion.div>
                    </div>
                </section>


                {/* ═══════════════════════════════════════════════════════════
            OFERTA PRINCIPAL — Bloco 5
        ═══════════════════════════════════════════════════════════ */}
                <section id="oferta" className="relative py-24 md:py-32 px-4 scroll-mt-10 bg-gradient-to-b from-black via-neutral-950/20 to-black">
                    {/* Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/[0.08] blur-[150px] rounded-full pointer-events-none" />
                    <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] bg-cyan-500/[0.06] blur-[100px] rounded-full pointer-events-none" style={{ animation: 'float-orb 10s ease-in-out infinite' }} />

                    <div className="relative max-w-lg mx-auto z-10">
                        {/* Cosmic spherical engine visual */}
                        <motion.div {...fadeInUp} className="flex justify-center mb-10">
                            <img src="https://i.pinimg.com/originals/68/15/33/6815337ea6d3f02664a1dc631624b8fb.gif" alt="" className="w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-xl border border-white/10 opacity-80" />
                        </motion.div>

                        <motion.div {...fadeInUp} className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                                Assuma o controle. <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Agora.</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            {...fadeInUp}
                            transition={{ delay: 0.1 }}
                            className="relative p-8 md:p-12 rounded-[2rem] bg-gradient-to-b from-neutral-950 to-neutral-950/50 border-2 overflow-hidden aurora-border"
                            style={{ boxShadow: '0 0 80px -20px rgba(168,85,247,0.3), 0 0 100px -30px rgba(6,182,212,0.2), 0 0 120px -40px rgba(16,185,129,0.15), inset 0 0 60px rgba(0,0,0,0.4)' }}
                        >
                            {/* Animated corner accents */}
                            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-purple-500/40 rounded-tl-[2rem] pointer-events-none" style={{ animation: 'pulse-glow 3s ease-in-out infinite' }} />
                            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-500/30 rounded-tr-[2rem] pointer-events-none" style={{ animation: 'pulse-glow 3s ease-in-out infinite 1s' }} />
                            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-emerald-500/30 rounded-bl-[2rem] pointer-events-none" style={{ animation: 'pulse-glow 3s ease-in-out infinite 2s' }} />
                            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-rose-500/30 rounded-br-[2rem] pointer-events-none" style={{ animation: 'pulse-glow 3s ease-in-out infinite 1.5s' }} />

                            <div className="relative z-10">
                                {/* Product name */}
                                <div className="text-center mb-10">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 border border-purple-500/30 rounded-full bg-purple-500/5 aurora-border">
                                        <Flame className="w-3.5 h-3.5 text-purple-400" />
                                        <span className="text-purple-300 font-bold text-[10px] tracking-[0.15em] uppercase">Oferta Especial</span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-black text-white">
                                        EL ALGORITMO DEL UNIVERSO
                                    </h3>
                                </div>

                                <div className="mb-10 flex justify-center">
                                    <img
                                        src="/algoritmo/capa esp (2).png"
                                        alt="Mockup del ebook El Algoritmo del Universo"
                                        className="max-w-full h-auto rounded-2xl drop-shadow-[0_20px_40px_rgba(245,158,11,0.18)]"
                                    />
                                </div>

                                {/* What's included */}
                                <div className="space-y-3 mb-10 text-left">
                                    {[
                                        "E-book completo: El Algoritmo del Universo",
                                        "Framework Operacional de la Realidad",
                                        "Diagnóstico de desalineación personal",
                                        "Acceso vitalicio y futuras actualizaciones"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-slate-300">
                                            <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: ['#a855f7','#06b6d4','#10b981','#f59e0b'][idx] }} />
                                            <span className="font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Pricing */}
                                <div className="text-center mb-10 py-8 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                                    <p className="text-red-500/60 line-through text-2xl font-bold mb-2">
                                        R$ 97,00
                                    </p>
                                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">por solo</p>
                                    <p className="text-6xl md:text-7xl font-black text-white tracking-tighter leading-none">
                                        R$ 29<span className="text-4xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">,90</span>
                                    </p>
                                    <p className="font-black text-lg mt-3 tracking-wide bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                        o 4 cuotas de R$ 8,14
                                    </p>
                                    <p className="text-slate-500 font-medium text-sm mt-2">acceso inmediato y vitalicio</p>
                                </div>



                                {/* CTA Button */}
                                <motion.a
                                    href="https://pay.hotmart.com/X104746819H?checkoutMode=10"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    animate={{ scale: [1, 1.02, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="group block w-full px-8 py-6 bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-500 hover:from-purple-500 hover:via-cyan-400 hover:to-emerald-400 text-white font-black text-xl text-center rounded-2xl shadow-[0_10px_50px_-15px_rgba(168,85,247,0.4),0_10px_80px_-20px_rgba(6,182,212,0.3)] transform hover:-translate-y-1 transition-all duration-300"
                                >
                                    <span className="flex items-center justify-center gap-3">
                                        👉 QUIERO ACCEDER AL ALGORITMO
                                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </motion.a>

                                {/* Trust badges */}
                                <div className="grid grid-cols-3 gap-4 mt-10 text-[11px] md:text-xs text-slate-500">
                                    <div className="flex flex-col items-center gap-1.5 text-center">
                                        <Lock className="w-4 h-4 text-purple-400/60" />
                                        <span className="font-semibold">Compra Segura</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1.5 text-center">
                                        <ShieldCheck className="w-4 h-4 text-cyan-400/60" />
                                        <span className="font-semibold">Garantía de 7 días</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1.5 text-center">
                                        <Eye className="w-4 h-4 text-emerald-400/60" />
                                        <span className="font-semibold">Acceso Inmediato</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════
            FAQ — Quebra de objeções
        ═══════════════════════════════════════════════════════════ */}
                <section className="relative py-24 md:py-32 px-4">
                    <div className="max-w-3xl mx-auto">
                        <motion.div {...fadeInUp} className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-rose-500/20 rounded-full bg-rose-500/5">
                                <Brain className="w-4 h-4 text-rose-400" />
                                <span className="text-rose-300 font-bold text-[10px] tracking-[0.2em] uppercase">Objeciones eliminadas</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-white">
                                Preguntas que tu mente va a hacer
                            </h2>
                            {/* Terminal code scrolling visual */}
                            <motion.div {...fadeInUp} className="flex justify-center mt-8">
                                <img src="https://i.pinimg.com/originals/79/16/68/7916682c5b1910d5c54127d5ff15b0c5.gif" alt="" className="w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-xl border border-white/10 opacity-80" />
                            </motion.div>
                        </motion.div>
                        <motion.div {...fadeInUp}>
                            <FAQ q="¿Es este otro libro de autoayuda?" a="No. El Algoritmo del Universo utiliza un lenguaje técnico y mecánico de forma intencional. Aquí no hay visualizaciones creativas, mantras ni 'pensamiento positivo'. Es un diagnóstico pragmático del sistema que gobierna tus resultados y un manual operativo para manipularlo." />
                            <FAQ q="¿Necesito creer en algo específico para que funcione?" a="Al contrario. El material fue diseñado para funcionar independientemente de tus creencias. Trata la realidad como un sistema operativo: no importa si 'crees' en la gravedad, funciona de todos modos. El Algoritmo opera con la misma lógica." />
                            <FAQ q="R$29,90 parece demasiado barato. ¿Cuál es el truco?" a="No hay truco. El precio es una decisión estratégica: queremos que la mayor cantidad posible de adultos tenga acceso a este conocimiento. El valor del contenido es infinitamente mayor que el precio cobrado. La pregunta real es: ¿cuánto te cuesta otro año operando bajo una mentira?" />
                            <FAQ q="¿Y si no me gusta?" a="Estás cubierto por una garantía incondicional de 7 días. Si el material no tiene sentido para ti por cualquier motivo, solo pide el reembolso. Cero burocracia." />
                            <FAQ q="¿Es un libro digital?" a="Sí. El Algoritmo del Universo es un e-book. Después de la compra, recibes acceso inmediato al contenido. Léelo en el móvil, la tablet o el ordenador, cuando quieras." />
                        </motion.div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════
            GARANTIA — Seção dedicada dark-mode
        ═══════════════════════════════════════════════════════════ */}
                <section className="relative py-20 px-4">
                    <div className="relative z-10 max-w-3xl mx-auto text-center">
                        <motion.div
                            {...fadeInUp}
                            className="bg-white/10 p-8 md:p-12 rounded-2xl border border-purple-300/20 backdrop-blur-sm"
                        >
                            <div className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 flex items-center justify-center">
                                <img
                                    src="/garantia-7-dias_(1).png"
                                    alt="Garantía de 7 días"
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <h2 className="text-3xl md:text-4xl font-black mb-6 text-white">
                                Garantía <span className="text-purple-400 font-black">de 7 Días</span> Incondicional
                            </h2>

                            <div className="space-y-4 text-lg text-gray-200 leading-relaxed mb-8">
                                <p>
                                    Tienes <span className="text-purple-400 font-bold">7 días completos</span> para acceder al material,
                                    leerlo con calma y probar la lógica del contenido en la práctica. Si al final de ese período sientes
                                    que el libro no es para ti, devolvemos <span className="text-purple-400 font-bold">el 100% de tu inversión</span>.
                                </p>
                                <p>
                                    Sin preguntas, sin burocracia y sin fricción. La propuesta es simple: entras,
                                    analizas el contenido por tu cuenta y decides con claridad si este es el manual que faltaba
                                    para reorganizar tu operación interna.
                                </p>
                            </div>

                            <div className="flex flex-col md:flex-row justify-center gap-6">
                                <div className="flex items-center gap-3 justify-center">
                                    <Clock className="w-6 h-6 text-purple-400" />
                                    <span className="text-sm text-gray-300">
                                        7 días para probar
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 justify-center">
                                    <CheckCircle className="w-6 h-6 text-purple-400" />
                                    <span className="text-sm text-gray-300">
                                        Reembolso sin preguntas
                                    </span>
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
                            {/* Mechanical eye scanning visual */}
                            <motion.div {...fadeInUp} className="flex justify-center mb-10">
                                <img src="https://i.pinimg.com/originals/0e/3c/38/0e3c38f49ac9e74119382b06c5b256d1.gif" alt="" className="w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-xl border border-white/10 opacity-80" />
                            </motion.div>

                            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 border border-red-500/20 rounded-full bg-red-500/5">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                <span className="text-red-400/70 font-bold text-[10px] uppercase tracking-[0.2em]">Nota Final</span>
                            </div>
                            <p className="text-slate-600 text-sm italic leading-relaxed max-w-2xl mx-auto">
                                "Si estás buscando palmadas en la espalda o validación para tu victimismo, cierra esta página. Este material fue escrito para mentes adultas que prefieren la verdad cruda que funciona a la mentira dulce que paraliza. La elección es tuya."
                            </p>
                        </motion.div>
                    </div>
                </section>
            </main>

            <LandingFooter />
        </div>
    );
};

export default AlgoritmoDoUniversoES;
