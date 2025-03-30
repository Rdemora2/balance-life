import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { compression } from "vite-plugin-compression2";
import { visualizer } from "rollup-plugin-visualizer";
import { splitVendorChunkPlugin } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    ViteImageOptimizer({
      png: {
        quality: 70,
        compressionLevel: 9,
      },
      jpeg: {
        quality: 70,
      },
      jpg: {
        quality: 70,
      },
      webp: {
        quality: 70,
      },
      avif: {
        quality: 70,
      },
    }),
    compression({
      algorithm: "gzip",
      filename: "[name].gz",
      threshold: 1024,
      deleteOriginalAssets: false,
    }),
    compression({
      algorithm: "brotliCompress",
      filename: "[name].br",
      threshold: 1024,
      deleteOriginalAssets: false,
    }),
    visualizer({
      filename: "dist/stats.html",
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "framer-motion"],
    exclude: ["lucide-react"],
  },
  build: {
    target: "esnext",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      mangle: true,
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom")) {
              return "vendor-react";
            }
            if (id.includes("react-router-dom")) {
              return "vendor-router";
            }
            if (id.includes("framer-motion")) {
              return "vendor-ui";
            }
            if (id.includes("lucide-react")) {
              return "vendor-icons";
            }
          }
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    sourcemap: false,
    reportCompressedSize: false,
  },
  server: {
    open: true,
  },
});
