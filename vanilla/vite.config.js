import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    filenameHashing: false,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        offers: resolve(__dirname, "./offers/index.html"),
        calculator: resolve(__dirname, "./calculator/index.html"),
        indicators: resolve(__dirname, "./indicators/index.html"),
        contact: resolve(__dirname, "./contact/index.html"),
        faq: resolve(__dirname, "./faq/index.html"),
        challenge: resolve(__dirname, "./challenge/index.html"),
      },
      output: {
        entryFileNames: "assets/[name].js", // Adjust the output format if needed
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});
