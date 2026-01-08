/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        brand: {
          orange: '#c2410c',
          yellow: '#b45309',
          green: '#15803d',
          sky: '#0369a1',
          blue: '#1e40af',
        },
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          900: '#1e3a8a',
        },
        accent: {
          50: '#fff7ed',
          600: '#ea580c',
        }
      }
    },
  },
  plugins: [],
}