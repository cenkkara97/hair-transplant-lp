/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "var(--color-primary)",
          dark: "var(--color-primary-dark)",
          light: "var(--color-primary-light)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          dark: "var(--color-secondary-dark)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
        },
        success: {
          DEFAULT: "var(--color-success)",
        },
        warning: {
          DEFAULT: "var(--color-warning)",
        },
        dark: {
          DEFAULT: "var(--color-dark)",
          darker: "var(--color-darker)",
        },
        light: {
          DEFAULT: "var(--color-light)",
        },
        gray: {
          DEFAULT: "var(--color-gray)",
          light: "var(--color-gray-light)",
          dark: "var(--color-gray-dark)",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-secondary": "var(--gradient-secondary)",
        "gradient-dark": "var(--gradient-dark)",
        "gradient-glow": "var(--gradient-glow)",
      },
      boxShadow: {
        custom: "0 10px 30px rgba(0, 0, 0, 0.3)",
        primary: "0 10px 30px rgba(14, 165, 233, 0.2)",
        glow: "0 0 15px rgba(14, 165, 233, 0.5)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

