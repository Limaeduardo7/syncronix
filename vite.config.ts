import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import million from "million/compiler";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    million.vite({ auto: true }),
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    minify: "esbuild",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (
              id.includes('embla-carousel') ||
              id.includes('yet-another-react-lightbox')
            ) {
              return 'algoritmo-shared';
            }

            if (id.includes('react-router-dom') || id.includes('/react/') || id.includes('/react-dom/')) {
              return 'react-vendor';
            }

            if (id.includes('framer-motion')) {
              return 'framer-motion';
            }

            if (
              id.includes('@radix-ui') ||
              id.includes('lucide-react')
            ) {
              return 'ui-vendor';
            }

            if (
              id.includes('@tsparticles/react') ||
              id.includes('@tsparticles/engine') ||
              id.includes('@tsparticles/slim')
            ) {
              return 'particles';
            }

            if (id.includes('@tanstack/react-query')) {
              return 'query';
            }
          }

          if (
            id.includes('src/components/quantum-key/notificationsData') ||
            id.includes('src/components/quantum-key/PurchaseNotifications') ||
            id.includes('src/components/quantum-key/LiveViewers') ||
            id.includes('src/components/gestao-inteligente/CountdownTimer')
          ) {
            return 'algoritmo-shared';
          }
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
    ],
    exclude: ['@tsparticles/react', '@tsparticles/engine', '@tsparticles/slim'],
  },
}));
