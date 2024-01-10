/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};

// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch