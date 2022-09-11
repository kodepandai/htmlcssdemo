/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        tertiary: "var(--bg-tertiary)",
        accent: "rgb(var(--bg-accent)/var(--tw-bg-opacity))",
        gray: {
          900: "rgb(var(--bg-gray-900)/var(--tw-bg-opacity))",
        },
      },
      colors: {
        primary: "var(--c-primary)",
        secondary: "var(--c-secondary)",
        accent: "var(--c-accent)",
        gray: {
          50: "Var(--c-gray-50)",
          100: "var(--c-gray-100)",
          200: "var(--c-gray-200)",
          300: "var(--c-gray-300)",
          800: "var(--c-gray-800)",
        },
        red: {
          DEFAULT: "var(--c-red)",
        },
        disabled: "var(--c-disabled)",
      },
      fontFamily: {
        sans: "var(--font-sans)",
      },
      fontSize: {
        title: "var(--size-title)",
        subtitle: "var(--size-subtitle)",
      },
      boxShadow: {
        DEFAULT: "var(--shadow-default)",
      },
    },
  },
  plugins: [],
};
