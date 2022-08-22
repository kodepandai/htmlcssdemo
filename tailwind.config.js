/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        accent: "var(--bg-accent)",
      },
      colors: {
        primary: "var(--c-primary)",
        secondary: "var(--c-secondary)",
        accent: "var(--c-accent)",
      },
      fontFamily: {
        sans: "var(--font-sans)",
      },
    },
  },
  plugins: [],
};
