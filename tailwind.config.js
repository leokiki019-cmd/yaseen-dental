/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dental: {
          dark: "#1A1A1A",
          charcoal: "#2D2D2D",
          gold: "#D4A843",
          goldLight: "#F0D68A",
          goldDark: "#B8922E",
          warmCream: "#FAF7F0",
          warmWhite: "#F5F0E8",
          white: "#FFFFFF",
          greenWhatsapp: "#25D366",
          greenHover: "#20BA5A",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
