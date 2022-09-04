/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        accent: "rgb(var(--bg-accent)/var(--tw-bg-opacity))",
      },
      colors: {
        primary: "var(--c-primary)",
        secondary: "var(--c-secondary)",
        accent: "var(--c-accent)",
        gray: {
          100: "var(--c-gray-100)",
          800: "var(--c-gray-800)",
        },
      },
      fontFamily: {
        sans: "var(--font-sans)",
      },
      fontSize: {
        title: "32px",
      },
      boxShadow: {
        DEFAULT: "var(--shadow-default)",
      },
    },
  },
  plugins: [],
};
