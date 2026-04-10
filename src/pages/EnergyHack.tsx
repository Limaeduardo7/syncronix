import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Zap, Brain, Activity, Radio, Headphones, Play, ArrowRight,
    Sparkles, Target, Waves, Cpu, Eye, Lock, ShieldCheck,
    CheckCircle2, Hexagon, Atom, Binary, Power,
    Package, BookOpen, Sunrise, Terminal, AlarmClock
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   ENERGY HACK — Interface de Reconfiguração Neuroperceptiva
   ═══════════════════════════════════════════════════════════════ */

/* ── Animated Grid Background ── */
const CyberGrid = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
                backgroundImage: `linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)`,
                backgroundSize: '60px 60px',
                maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 80%)',
            }}
        />
        <motion.div
            className="absolute inset-0"
            style={{
                backgroundImage: `linear-gradient(rgba(6,182,212,0.15) 1px, transparent 1px)`,
                backgroundSize: '100% 4px',
            }}
            animate={{ backgroundPositionY: ["0px", "100px"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
    </div>
);

/* ── Energy Particles ── */
const EnergyParticles = ({ count = 30 }: { count?: number }) => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(count)].map((_, i) => {
            const colors = ['#a855f7', '#06b6d4', '#d946ef', '#22d3ee', '#84cc16'];
            const color = colors[i % colors.length];
            return (
                <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: `${1 + Math.random() * 2}px`,
                        height: `${1 + Math.random() * 2}px`,
                        background: color,
                        boxShadow: `0 0 ${8 + Math.random() * 12}px ${color}`,
                    }}
                    animate={{
                        y: [0, -60 - Math.random() * 40, 0],
                        x: [0, Math.random() * 40 - 20, 0],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1.5, 0.5],
                    }}
                    transition={{
                        duration: 4 + Math.random() * 6,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "easeInOut",
                    }}
                />
            );
        })}
    </div>
);

/* ── Pulsing Orb ── */
const NeonOrb = ({ color, size, top, left, delay = 0 }: {
    color: string; size: string; top: string; left: string; delay?: number;
}) => (
    <motion.div
        className={`absolute ${size} rounded-full pointer-events-none blur-[120px]`}
        style={{ top, left, background: color }}
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.3, 1] }}
        transition={{ duration: 6, repeat: Infinity, delay, ease: "easeInOut" }}
    />
);

/* ── Hero Energy Core ── */
const EnergyCore = () => (
    <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
        {/* Outer rotating ring */}
        <motion.div
            className="absolute inset-0 rounded-full border-2 border-violet-500/30"
            style={{ borderStyle: 'dashed' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        {/* Middle ring */}
        <motion.div
            className="absolute inset-8 rounded-full border border-cyan-400/40"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]" />
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-fuchsia-400 shadow-[0_0_15px_#d946ef]" />
        </motion.div>
        {/* Inner ring */}
        <motion.div
            className="absolute inset-16 rounded-full border border-fuchsia-500/50"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
            <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_15px_#a855f7]" />
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_15px_#84cc16]" />
        </motion.div>
        {/* Core */}
        <motion.div
            className="absolute inset-24 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500"
            animate={{
                scale: [1, 1.15, 1],
                boxShadow: [
                    "0 0 60px rgba(168,85,247,0.6), 0 0 100px rgba(217,70,239,0.4)",
                    "0 0 100px rgba(34,211,238,0.8), 0 0 150px rgba(168,85,247,0.6)",
                    "0 0 60px rgba(168,85,247,0.6), 0 0 100px rgba(217,70,239,0.4)",
                ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
            <div className="absolute inset-0 rounded-full bg-white/20 blur-xl" />
            <div className="absolute inset-4 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center">
                <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                    <Atom className="w-12 h-12 md:w-16 md:h-16 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
                </motion.div>
            </div>
        </motion.div>
        {/* Frequency waves */}
        {[...Array(3)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute inset-0 rounded-full border border-violet-400/20"
                animate={{ scale: [1, 1.5, 2], opacity: [0.6, 0.3, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 1, ease: "easeOut" }}
            />
        ))}
    </div>
);

/* ── Glassmorphism Card ── */
const GlassCard = ({ children, className = "", glowColor = "violet" }: {
    children: React.ReactNode; className?: string; glowColor?: string;
}) => {
    const glowMap: Record<string, string> = {
        violet: "from-violet-500/20 to-fuchsia-500/10 border-violet-500/30",
        cyan: "from-cyan-500/20 to-violet-500/10 border-cyan-500/30",
        fuchsia: "from-fuchsia-500/20 to-cyan-500/10 border-fuchsia-500/30",
        lime: "from-lime-500/20 to-cyan-500/10 border-lime-500/30",
    };
    return (
        <div className={`relative rounded-3xl bg-gradient-to-br ${glowMap[glowColor]} backdrop-blur-xl border p-8 overflow-hidden ${className}`}>
            <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />
            {children}
        </div>
    );
};

const EnergyHack = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    useEffect(() => {
        document.title = "Energy Hack | Reconfiguração Neuroperceptiva";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-fuchsia-500/40 selection:text-white overflow-x-hidden">
            {/* ═══ GLOBAL VANTABLACK BG ═══ */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-black" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15)_0%,transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(217,70,239,0.1)_0%,transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.08)_0%,transparent_50%)]" />
            </div>

            <main className="relative z-10">
                {/* ═══════════════════════════════════════════════════════════
                   HERO — Núcleo Energético
                   ═══════════════════════════════════════════════════════════ */}
                <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 py-20">
                    <CyberGrid />
                    <NeonOrb color="rgba(139,92,246,0.4)" size="w-[500px] h-[500px]" top="-10%" left="20%" delay={0} />
                    <NeonOrb color="rgba(217,70,239,0.3)" size="w-[400px] h-[400px]" top="40%" left="60%" delay={2} />
                    <NeonOrb color="rgba(6,182,212,0.3)" size="w-[400px] h-[400px]" top="60%" left="10%" delay={4} />
                    <EnergyParticles count={40} />

                    <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-6xl mx-auto text-center">
                        {/* System badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center gap-3 px-5 py-2.5 mb-12 rounded-full border border-fuchsia-500/40 bg-fuchsia-500/5 backdrop-blur-md"
                        >
                            <motion.div
                                className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_10px_#84cc16]"
                                animate={{ opacity: [1, 0.3, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                            <span className="text-fuchsia-300 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">
                                SYSTEM://NEURO_RECONFIG.ACTIVE
                            </span>
                        </motion.div>

                        {/* Energy Core */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, delay: 0.2 }}
                            className="mb-16"
                        >
                            <EnergyCore />
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.5 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1] tracking-tight max-w-5xl mx-auto"
                        >
                            A realidade externa é um reflexo exato do seu{" "}
                            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">estado interno</span>.
                            <br />
                            E você está prestes a{" "}
                            <motion.span
                                className="inline-block bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto]"
                                animate={{ backgroundPosition: ["0% center", "200% center"] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            >
                                hackear o código-fonte.
                            </motion.span>
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="text-base md:text-xl text-slate-400 mb-14 max-w-3xl mx-auto leading-relaxed font-medium"
                        >
                            Reprograme sua frequência basal, silencie o ruído interno e assuma o comando da realidade que responde ao seu padrão.
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="flex flex-col items-center gap-6"
                        >
                            <motion.a
                                href="#oferta"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                animate={{
                                    boxShadow: [
                                        "0 0 40px rgba(6,182,212,0.5), 0 0 80px rgba(139,92,246,0.3)",
                                        "0 0 60px rgba(6,182,212,0.7), 0 0 120px rgba(217,70,239,0.4)",
                                        "0 0 40px rgba(6,182,212,0.5), 0 0 80px rgba(139,92,246,0.3)",
                                    ],
                                }}
                                transition={{ boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
                                className="group relative inline-flex items-center justify-center gap-3 px-10 md:px-14 py-5 md:py-6 bg-gradient-to-r from-cyan-500 via-violet-600 to-fuchsia-500 text-white font-black text-base md:text-lg uppercase tracking-wider rounded-2xl overflow-hidden border border-white/10"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                    animate={{ x: ["-200%", "200%"] }}
                                    transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
                                />
                                <Power className="relative z-10 w-5 h-5" />
                                <span className="relative z-10">Quero hackear meu estado interno agora</span>
                                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                            <p className="text-slate-500 text-xs md:text-sm font-mono flex items-center gap-2 uppercase tracking-widest">
                                <Lock className="w-3 h-3" /> Acesso instantâneo · Protocolo verificado
                            </p>
                        </motion.div>
                    </motion.div>
                </section>

                {/* ═══════════════════════════════════════════════════════════
                   2. QUEBRA DE PARADIGMA
                   ═══════════════════════════════════════════════════════════ */}
                <section className="relative py-32 px-4">
                    <CyberGrid />
                    <NeonOrb color="rgba(217,70,239,0.2)" size="w-[500px] h-[500px]" top="20%" left="50%" delay={1} />
                    <div className="relative max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-violet-500/30 bg-violet-500/5 backdrop-blur-md">
                                <Eye className="w-4 h-4 text-violet-400" />
                                <span className="text-violet-300 font-mono text-[10px] tracking-[0.25em] uppercase font-bold">
                                    DIAGNÓSTICO_001
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                                O erro <span className="bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">nunca esteve</span>
                                <br />no ambiente.
                            </h2>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                <GlassCard glowColor="violet">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="p-3 rounded-xl bg-violet-500/20 border border-violet-500/30">
                                            <Binary className="w-6 h-6 text-violet-300" />
                                        </div>
                                        <div className="text-violet-400 font-mono text-xs tracking-widest uppercase mt-2">CONDICIONAMENTO</div>
                                    </div>
                                    <p className="text-slate-300 text-lg leading-relaxed">
                                        Você foi condicionado a <span className="text-white font-bold">lutar contra o reflexo</span>. A reagir ao caos. A tentar controlar o externo na força. Mas a realidade não responde ao esforço bruto.
                                    </p>
                                    <p className="text-slate-300 text-lg leading-relaxed mt-4">
                                        Ela responde ao <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent font-bold">padrão interno</span> que você sustenta.
                                    </p>
                                </GlassCard>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.15 }}
                            >
                                <GlassCard glowColor="fuchsia">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="p-3 rounded-xl bg-fuchsia-500/20 border border-fuchsia-500/30">
                                            <Hexagon className="w-6 h-6 text-fuchsia-300" />
                                        </div>
                                        <div className="text-fuchsia-400 font-mono text-xs tracking-widest uppercase mt-2">DIAGNÓSTICO</div>
                                    </div>
                                    <p className="text-slate-300 text-lg leading-relaxed">
                                        Se sua vida repete os mesmos obstáculos, o problema <span className="text-white font-bold">não está no cenário</span>.
                                    </p>
                                    <p className="text-slate-300 text-lg leading-relaxed mt-4">
                                        Está na <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent font-bold">configuração basal</span> que governa sua percepção.
                                    </p>
                                </GlassCard>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════
                   3. MECANISMO
                   ═══════════════════════════════════════════════════════════ */}
                <section className="relative py-32 px-4 bg-gradient-to-b from-transparent via-violet-950/20 to-transparent">
                    <NeonOrb color="rgba(34,211,238,0.25)" size="w-[600px] h-[400px]" top="10%" left="20%" delay={2} />
                    <NeonOrb color="rgba(217,70,239,0.2)" size="w-[500px] h-[500px]" top="40%" left="60%" delay={4} />
                    <EnergyParticles count={25} />

                    <div className="relative max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-md">
                                <Cpu className="w-4 h-4 text-cyan-400" />
                                <span className="text-cyan-300 font-mono text-[10px] tracking-[0.25em] uppercase font-bold">PROTOCOLO_CORE</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                                <span className="bg-gradient-to-r from-cyan-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Energy Hack:</span>
                                <br />Método de Modelagem Neuroperceptiva
                            </h2>
                            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                                Um protocolo de reconfiguração interna projetado para modular percepção, foco e estado mental nos primeiros minutos do dia.
                            </p>
                        </motion.div>

                        {/* Sub-block: 8D */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <GlassCard glowColor="cyan" className="md:p-12">
                                {/* Animated wave visual */}
                                <div className="relative mb-10 h-32 flex items-center justify-center overflow-hidden rounded-2xl bg-black/40 border border-cyan-500/20">
                                    <div className="absolute inset-0 flex items-center justify-center gap-1">
                                        {[...Array(60)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="w-1 rounded-full bg-gradient-to-t from-cyan-500 via-violet-500 to-fuchsia-500"
                                                animate={{
                                                    height: [
                                                        `${10 + Math.random() * 30}%`,
                                                        `${30 + Math.random() * 60}%`,
                                                        `${10 + Math.random() * 30}%`,
                                                    ],
                                                }}
                                                transition={{
                                                    duration: 1 + Math.random(),
                                                    repeat: Infinity,
                                                    delay: i * 0.05,
                                                    ease: "easeInOut",
                                                }}
                                                style={{ boxShadow: '0 0 8px rgba(168,85,247,0.6)' }}
                                            />
                                        ))}
                                    </div>
                                    <div className="absolute top-3 left-4 flex items-center gap-2 z-10">
                                        <div className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
                                        <span className="text-cyan-300 font-mono text-[10px] tracking-widest uppercase">FAIXA_8D.RUNNING</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-3 rounded-xl bg-cyan-500/20 border border-cyan-500/30">
                                        <Headphones className="w-6 h-6 text-cyan-300" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-black text-white mb-1">A Faixa 8D</h3>
                                        <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase">MOTOR CENTRAL DO SISTEMA</p>
                                    </div>
                                </div>
                                <p className="text-slate-300 text-lg leading-relaxed">
                                    Engenharia sonora espacial com <span className="text-white font-bold">estímulo bilateral</span> para indução de foco, isolamento cognitivo e alinhamento interno.
                                </p>
                            </GlassCard>
                        </motion.div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════
                   4. CONCEITO CENTRAL
                   ═══════════════════════════════════════════════════════════ */}
                <section className="relative py-32 px-4">
                    <CyberGrid />
                    <NeonOrb color="rgba(132,204,22,0.15)" size="w-[500px] h-[500px]" top="20%" left="30%" delay={3} />
                    <div className="relative max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-lime-500/30 bg-lime-500/5 backdrop-blur-md">
                                <Activity className="w-4 h-4 text-lime-400" />
                                <span className="text-lime-300 font-mono text-[10px] tracking-[0.25em] uppercase font-bold">PRINCÍPIO_FUNDAMENTAL</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-12 leading-tight">
                                A vida que você vive é o{" "}
                                <span className="bg-gradient-to-r from-lime-300 via-cyan-400 to-violet-400 bg-clip-text text-transparent">eco da sua fisiologia.</span>
                            </h2>

                            <div className="space-y-8 text-lg md:text-xl text-slate-300 leading-relaxed">
                                <p>
                                    Seu nível de ação é <span className="text-white font-bold">limitado pela qualidade do seu estado interno</span>. Quando sua energia está fragmentada, sua percepção distorce. Quando está calibrada, sua realidade responde em outro nível.
                                </p>

                                <div className="relative py-10 my-12 px-8 rounded-2xl border-l-4 border-fuchsia-500 bg-gradient-to-r from-fuchsia-500/10 to-transparent backdrop-blur-md">
                                    <p className="text-2xl md:text-3xl font-black text-white leading-tight">
                                        Você deixa de reagir ao ambiente
                                        <br />
                                        <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">e passa a operar acima dele.</span>
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════
                   5. BENEFÍCIOS
                   ═══════════════════════════════════════════════════════════ */}
                <section className="relative py-32 px-4 bg-gradient-to-b from-transparent via-fuchsia-950/15 to-transparent">
                    <NeonOrb color="rgba(217,70,239,0.25)" size="w-[600px] h-[400px]" top="10%" left="50%" delay={2} />
                    <EnergyParticles count={30} />

                    <div className="relative max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/5 backdrop-blur-md">
                                <Sparkles className="w-4 h-4 text-fuchsia-400" />
                                <span className="text-fuchsia-300 font-mono text-[10px] tracking-[0.25em] uppercase font-bold">OUTPUT_VARIABLES</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black leading-tight">
                                O que muda quando o
                                <br />
                                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">padrão interno sobe</span>
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: <Brain className="w-6 h-6" />, title: "Clareza executiva ao acordar", color: "violet" },
                                { icon: <Waves className="w-6 h-6" />, title: "Redução de ruído mental", color: "cyan" },
                                { icon: <Target className="w-6 h-6" />, title: "Foco contínuo ao longo do dia", color: "fuchsia" },
                                { icon: <ShieldCheck className="w-6 h-6" />, title: "Estabilidade emocional sob pressão", color: "lime" },
                                { icon: <Power className="w-6 h-6" />, title: "Sensação de controle interno", color: "violet" },
                                { icon: <Eye className="w-6 h-6" />, title: "Presença e autoridade perceptiva", color: "cyan" },
                            ].map((b, idx) => {
                                const colorMap: Record<string, { border: string; bg: string; text: string; shadow: string }> = {
                                    violet: { border: "border-violet-500/20 hover:border-violet-500/60", bg: "bg-violet-500/10", text: "text-violet-300", shadow: "hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.6)]" },
                                    cyan: { border: "border-cyan-500/20 hover:border-cyan-500/60", bg: "bg-cyan-500/10", text: "text-cyan-300", shadow: "hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.6)]" },
                                    fuchsia: { border: "border-fuchsia-500/20 hover:border-fuchsia-500/60", bg: "bg-fuchsia-500/10", text: "text-fuchsia-300", shadow: "hover:shadow-[0_0_40px_-10px_rgba(217,70,239,0.6)]" },
                                    lime: { border: "border-lime-500/20 hover:border-lime-500/60", bg: "bg-lime-500/10", text: "text-lime-300", shadow: "hover:shadow-[0_0_40px_-10px_rgba(132,204,22,0.6)]" },
                                };
                                const c = colorMap[b.color];
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: idx * 0.08 }}
                                        whileHover={{ y: -6 }}
                                        className={`group relative p-8 rounded-2xl backdrop-blur-md bg-white/[0.02] border ${c.border} ${c.shadow} transition-all duration-500 overflow-hidden`}
                                    >
                                        <div className={`absolute top-0 right-0 w-32 h-32 ${c.bg} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                        <div className="relative z-10">
                                            <div className={`inline-flex p-3 rounded-xl ${c.bg} ${c.text} mb-4 border ${c.border.split(' ')[0]}`}>
                                                {b.icon}
                                            </div>
                                            <p className="text-white font-bold text-lg leading-tight">{b.title}</p>
                                        </div>
                                        <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-white/40 transition-all`} />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════
                   6. OFERTA
                   ═══════════════════════════════════════════════════════════ */}
                <section id="oferta" className="relative py-32 px-4">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-20"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-lime-500/30 bg-lime-500/5 backdrop-blur-md">
                                <Package className="w-4 h-4 text-lime-400" />
                                <span className="text-lime-300 font-mono text-[10px] tracking-[0.25em] uppercase font-bold">DELIVERY_PACKAGE</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black leading-tight">
                                O que você{" "}
                                <span className="bg-gradient-to-r from-lime-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                                    recebe hoje
                                </span>
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                            {[
                                {
                                    icon: <BookOpen className="w-8 h-8" />,
                                    tag: "ARQUIVO_01",
                                    title: "Manual Energy Hack",
                                    format: "PDF",
                                    desc: "O manual completo do protocolo de reconfiguração neuroperceptiva. Fundamentos, técnicas e aplicações para dominar seu estado interno.",
                                    color: "violet",
                                },
                                {
                                    icon: <Headphones className="w-8 h-8" />,
                                    tag: "ARQUIVO_02",
                                    title: "Áudio 8D de Reconfiguração Matinal",
                                    format: "ÁUDIO",
                                    desc: "Faixa de reconfiguração com tecnologia de áudio 8D. Ativa padrões neurais de foco e presença nos primeiros minutos do dia.",
                                    color: "cyan",
                                },
                                {
                                    icon: <Sunrise className="w-8 h-8" />,
                                    tag: "ARQUIVO_03",
                                    title: "Protocolo Matinal",
                                    format: "GUIA",
                                    desc: "Sequência passo a passo para integrar o Energy Hack à sua rotina. 7 minutos que definem a qualidade de todo o seu dia.",
                                    color: "fuchsia",
                                },
                            ].map((item, idx) => {
                                const colorMap: Record<string, { border: string; bg: string; text: string; glow: string; tag: string }> = {
                                    violet: {
                                        border: "border-violet-500/30",
                                        bg: "bg-gradient-to-br from-violet-500/10 to-violet-900/5",
                                        text: "text-violet-300",
                                        glow: "shadow-[0_0_60px_-10px_rgba(139,92,246,0.5)]",
                                        tag: "border-violet-500/30 bg-violet-500/10 text-violet-300",
                                    },
                                    cyan: {
                                        border: "border-cyan-500/30",
                                        bg: "bg-gradient-to-br from-cyan-500/10 to-cyan-900/5",
                                        text: "text-cyan-300",
                                        glow: "shadow-[0_0_60px_-10px_rgba(6,182,212,0.5)]",
                                        tag: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
                                    },
                                    fuchsia: {
                                        border: "border-fuchsia-500/30",
                                        bg: "bg-gradient-to-br from-fuchsia-500/10 to-fuchsia-900/5",
                                        text: "text-fuchsia-300",
                                        glow: "shadow-[0_0_60px_-10px_rgba(217,70,239,0.5)]",
                                        tag: "border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300",
                                    },
                                };
                                const c = colorMap[item.color];
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: idx * 0.15 }}
                                        className={`relative p-8 rounded-3xl backdrop-blur-xl ${c.bg} border ${c.border} ${c.glow} overflow-hidden`}
                                    >
                                        {/* Holographic shimmer */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-white/[0.03] pointer-events-none" />
                                        <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent`} />

                                        <div className="relative z-10">
                                            <div className="flex items-start justify-between mb-6">
                                                <div className={`p-3 rounded-2xl ${c.bg} border ${c.border} ${c.text}`}>
                                                    {item.icon}
                                                </div>
                                                <div className="flex flex-col items-end gap-2">
                                                    <span className={`text-[9px] font-mono tracking-[0.2em] px-2 py-1 rounded border ${c.tag} uppercase`}>
                                                        {item.tag}
                                                    </span>
                                                    <span className={`text-[9px] font-mono tracking-[0.2em] px-2 py-1 rounded border ${c.tag} uppercase opacity-70`}>
                                                        {item.format}
                                                    </span>
                                                </div>
                                            </div>
                                            <h3 className={`text-xl font-black mb-3 ${c.text}`}>{item.title}</h3>
                                            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Price block */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative max-w-xl mx-auto p-10 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-violet-500/10 via-fuchsia-500/5 to-cyan-500/10 border border-white/10 shadow-[0_0_80px_-20px_rgba(139,92,246,0.4)] overflow-hidden text-center"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-white/[0.02] pointer-events-none" />
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />

                            <div className="relative z-10">
                                <p className="text-slate-500 font-mono text-xs tracking-[0.3em] uppercase mb-4">INVESTIMENTO_TOTAL</p>
                                <div className="flex items-center justify-center gap-4 mb-2">
                                    <span className="text-slate-600 line-through text-xl font-mono">R$ 97,00</span>
                                    <span className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                                        R$ 27,00
                                    </span>
                                </div>
                                <p className="text-slate-500 text-sm mb-8 font-mono">pagamento único · acesso vitalício</p>

                                <motion.a
                                    href="#"
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.97 }}
                                    animate={{
                                        boxShadow: [
                                            "0 0 40px rgba(6,182,212,0.4), 0 0 80px rgba(139,92,246,0.2)",
                                            "0 0 60px rgba(6,182,212,0.6), 0 0 100px rgba(217,70,239,0.3)",
                                            "0 0 40px rgba(6,182,212,0.4), 0 0 80px rgba(139,92,246,0.2)",
                                        ],
                                    }}
                                    transition={{ boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
                                    className="group relative inline-flex items-center justify-center gap-3 w-full py-5 bg-gradient-to-r from-cyan-500 via-violet-600 to-fuchsia-500 text-white font-black text-base uppercase tracking-wider rounded-2xl overflow-hidden border border-white/10"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                                        animate={{ x: ["-200%", "200%"] }}
                                        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5 }}
                                    />
                                    <Power className="relative z-10 w-5 h-5" />
                                    <span className="relative z-10">Quero hackear meu estado interno agora</span>
                                    <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.a>

                                <p className="text-slate-600 text-xs font-mono mt-5 flex items-center justify-center gap-2">
                                    <Lock className="w-3 h-3" /> Pagamento seguro · Acesso imediato após confirmação
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════
                   7. USO — Como operar o sistema
                   ═══════════════════════════════════════════════════════════ */}
                <section className="relative py-32 px-4 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-20"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-violet-500/30 bg-violet-500/5 backdrop-blur-md">
                                <Terminal className="w-4 h-4 text-violet-400" />
                                <span className="text-violet-300 font-mono text-[10px] tracking-[0.25em] uppercase font-bold">EXECUTION_PROTOCOL</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black leading-tight">
                                Como{" "}
                                <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                                    operar o sistema
                                </span>
                            </h2>
                        </motion.div>

                        <div className="relative">
                            {/* Vertical line */}
                            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/0 via-cyan-500/40 to-fuchsia-500/0 md:-translate-x-px" />

                            {[
                                { step: "01", icon: <AlarmClock className="w-5 h-5" />, title: "Acorde", desc: "Antes de pegar o celular. Antes de checar notificações. Antes de reagir ao mundo externo.", color: "violet" },
                                { step: "02", icon: <Headphones className="w-5 h-5" />, title: "Coloque os fones", desc: "Fones no ouvido. Olhos fechados. Posição confortável — sentado ou deitado.", color: "cyan" },
                                { step: "03", icon: <Play className="w-5 h-5" />, title: "Dê play", desc: "Ative a Faixa 8D de Reconfiguração Matinal. 7 minutos. Deixe o áudio trabalhar.", color: "fuchsia" },
                                { step: "04", icon: <Brain className="w-5 h-5" />, title: "Reconfigure seu estado", desc: "O protocolo neuroperceptivo entra em ação. Seu sistema nervoso recebe o novo padrão de input.", color: "lime" },
                                { step: "05", icon: <Zap className="w-5 h-5" />, title: "Entre no dia em outro padrão", desc: "Clareza. Foco. Presença. Você não começa o dia reagindo — você começa em estado de domínio.", color: "violet" },
                            ].map((step, idx) => {
                                const colorMap: Record<string, { dot: string; text: string; border: string; bg: string }> = {
                                    violet: { dot: "bg-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.8)]", text: "text-violet-300", border: "border-violet-500/30", bg: "bg-violet-500/5" },
                                    cyan: { dot: "bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.8)]", text: "text-cyan-300", border: "border-cyan-500/30", bg: "bg-cyan-500/5" },
                                    fuchsia: { dot: "bg-fuchsia-500 shadow-[0_0_20px_rgba(217,70,239,0.8)]", text: "text-fuchsia-300", border: "border-fuchsia-500/30", bg: "bg-fuchsia-500/5" },
                                    lime: { dot: "bg-lime-500 shadow-[0_0_20px_rgba(132,204,22,0.8)]", text: "text-lime-300", border: "border-lime-500/30", bg: "bg-lime-500/5" },
                                };
                                const c = colorMap[step.color];
                                const isRight = idx % 2 === 0;
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: isRight ? -30 : 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                                        className={`relative flex items-center gap-6 mb-10 ${isRight ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
                                    >
                                        {/* Dot on line */}
                                        <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full z-10 -translate-x-1.5">
                                            <div className={`w-4 h-4 rounded-full ${c.dot}`} />
                                        </div>

                                        {/* Card */}
                                        <div className={`ml-20 md:ml-0 ${isRight ? "md:mr-[calc(50%+2rem)]" : "md:ml-[calc(50%+2rem)]"} flex-1 p-6 rounded-2xl backdrop-blur-md ${c.bg} border ${c.border}`}>
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className={`font-mono text-[10px] tracking-[0.2em] ${c.text} opacity-60`}>{step.step}</span>
                                                <div className={`${c.text}`}>{step.icon}</div>
                                                <h3 className={`font-black text-lg ${c.text}`}>{step.title}</h3>
                                            </div>
                                            <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════
                   8. CTA FINAL
                   ═══════════════════════════════════════════════════════════ */}
                <section className="relative py-40 px-4 overflow-hidden">
                    {/* Background glow */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[120px]" />
                        <div className="absolute w-[400px] h-[400px] rounded-full bg-cyan-600/8 blur-[100px]" />
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 mb-12 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/5 backdrop-blur-md">
                                <motion.div
                                    className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_10px_#84cc16]"
                                    animate={{ opacity: [1, 0.3, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                                <span className="text-fuchsia-300 font-mono text-[10px] tracking-[0.3em] uppercase font-bold">FINAL_CALL</span>
                            </div>

                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
                                Pare de lutar{" "}
                                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                                    contra o reflexo.
                                </span>
                                <br />
                                <span className="text-white">Reprograme a fonte.</span>
                            </h2>

                            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed">
                                O mundo externo vai continuar sendo o que é. A variável que você pode hackear é interna.
                            </p>

                            <motion.a
                                href="#oferta"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                animate={{
                                    boxShadow: [
                                        "0 0 50px rgba(6,182,212,0.5), 0 0 100px rgba(139,92,246,0.3)",
                                        "0 0 70px rgba(6,182,212,0.7), 0 0 140px rgba(217,70,239,0.4)",
                                        "0 0 50px rgba(6,182,212,0.5), 0 0 100px rgba(139,92,246,0.3)",
                                    ],
                                }}
                                transition={{ boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
                                className="group relative inline-flex items-center justify-center gap-3 px-12 md:px-16 py-6 md:py-7 bg-gradient-to-r from-cyan-500 via-violet-600 to-fuchsia-500 text-white font-black text-lg uppercase tracking-wider rounded-2xl overflow-hidden border border-white/10"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                                    animate={{ x: ["-200%", "200%"] }}
                                    transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5 }}
                                />
                                <Power className="relative z-10 w-6 h-6" />
                                <span className="relative z-10">Quero hackear meu estado interno agora</span>
                                <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </motion.a>

                            <p className="text-slate-600 text-xs font-mono mt-6 flex items-center justify-center gap-2">
                                <Lock className="w-3 h-3" /> Acesso instantâneo · Protocolo verificado
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="relative border-t border-white/5 py-10 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-slate-700 font-mono text-[10px] tracking-[0.3em] uppercase">
                            ENERGY HACK © {new Date().getFullYear()} · SISTEMA DE RECONFIGURAÇÃO NEUROPERCEPTIVA
                        </p>
                    </div>
                </footer>

            </main>
        </div>
    );
}

export default EnergyHack;
