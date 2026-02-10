import React, { useEffect, useState } from "react";
import { m, AnimatePresence } from "framer-motion";

const LoadingOverlay = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Hide loader when the page is fully loaded or after a timeout
        const handleLoad = () => {
            // Small delay to ensure smooth transition
            setTimeout(() => setLoading(false), 800);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <m.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
                >
                    <div className="relative">
                        {/* Pulsing ring */}
                        <m.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute inset-0 rounded-full bg-white/20 blur-xl"
                        />

                        {/* The Logo */}
                        <m.div
                            animate={{
                                rotateY: [0, 360],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="relative z-10 w-24 h-24 md:w-32 md:h-32"
                        >
                            <img
                                src="/HEXACRONIX-ADESIVO-300x300.webp"
                                alt="Loading..."
                                className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                            />
                        </m.div>
                    </div>
                </m.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingOverlay;
