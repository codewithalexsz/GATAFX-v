import { resolve } from "path";

export default {
  build: {
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
    },
  },
};
