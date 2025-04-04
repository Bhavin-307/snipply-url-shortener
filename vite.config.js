import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import compression from "vite-plugin-compression";
import tailwindcss from "@tailwindcss/vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    compression({
      algorithm: "gzip", // Use Gzip compression
      ext: ".gz", // Output file extension
      threshold: 1024, // Compress files larger than 1KB
      deleteOriginalAssets: false, // Keep original files
    }),
    compression({
      algorithm: "brotliCompress", // Enable Brotli compression (better than Gzip)
      ext: ".br",
      threshold: 1024,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext", // Optimize for modern browsers
    minify: "terser", // Minify JS/CSS for better performance
    terserOptions: {
      compress: { drop_console: true },
    },
    assetsInlineLimit: 4096, // Optimize inline assets
    rollupOptions: {
      treeshake: true,
    },
  },
});
