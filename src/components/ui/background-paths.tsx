"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        d: `M${50 + i * 80 * position} ${50 + i * 40} Q${200 + i * 60 * position} ${150 + i * 50} ${400 + i * 80 * position} ${100 + i * 30} T${600 + i * 100 * position} ${200 + i * 60}`,
        width: 1 + i * 0.2,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full"
                viewBox="0 0 800 600"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="#a900ff"
                        strokeWidth={path.width}
                        strokeOpacity={0.3 + path.id * 0.05}
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{
                            pathLength: [0, 1, 0],
                            strokeOpacity: [0.2, 0.6, 0.2],
                        }}
                        transition={{
                            duration: 8 + i * 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            delay: i * 0.5,
                        }}
                    />
                ))}
                
                {/* Additional decorative elements */}
                {Array.from({ length: 20 }).map((_, i) => (
                    <motion.circle
                        key={`circle-${i}`}
                        cx={100 + (i * 35)}
                        cy={300 + Math.sin(i) * 50}
                        r={2 + Math.cos(i) * 1}
                        fill="#a900ff"
                        initial={{ opacity: 0.1 }}
                        animate={{
                            opacity: [0.1, 0.6, 0.1],
                            r: [1, 4, 1],
                        }}
                        transition={{
                            duration: 3 + i * 0.2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.1,
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Background Paths",
    showContent = true,
}: {
    title?: string;
    showContent?: boolean;
}) {
    const words = title.split(" ");

    return (
        <div className="relative w-full h-full overflow-hidden">
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            {showContent && (
                <div className="relative z-10 container mx-auto px-4 md:px-6 text-center min-h-screen flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
                            {words.map((word, wordIndex) => (
                                <span
                                    key={wordIndex}
                                    className="inline-block mr-4 last:mr-0"
                                >
                                    {word.split("").map((letter, letterIndex) => (
                                        <motion.span
                                            key={`${wordIndex}-${letterIndex}`}
                                            initial={{ y: 100, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{
                                                delay:
                                                    wordIndex * 0.1 +
                                                    letterIndex * 0.03,
                                                type: "spring",
                                                stiffness: 150,
                                                damping: 25,
                                            }}
                                            className="inline-block text-transparent bg-clip-text 
                                            bg-gradient-to-r from-neutral-900 to-neutral-700/80 
                                            dark:from-white dark:to-white/80"
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </span>
                            ))}
                        </h1>

                        <div
                            className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 
                            dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg 
                            overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <Button
                                variant="ghost"
                                className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
                                bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 
                                text-black dark:text-white transition-all duration-300 
                                group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10
                                hover:shadow-md dark:hover:shadow-neutral-800/50"
                            >
                                <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                    Discover Excellence
                                </span>
                                <span
                                    className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                                    transition-all duration-300"
                                >
                                    →
                                </span>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
}