/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#ebad21",
          goldHover: "#f2b632",
          goldInk: "#8f6400",
          goldTint: "#fdf4de",
          navy: "#03113a",
          navyDeep: "#020b27",
          navyCard: "#051951",
          charcoal: "#2f313c",
          slate: "#3f414f",
          text: "#4a4d5c",
          muted: "#646776",
          line: "#e5e6eb",
          lightBg: "#f8fafc",
          cardBg: "#ffffff",
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'premium': '0 20px 40px -15px rgba(3, 17, 58, 0.08)',
        'premium-hover': '0 25px 50px -12px rgba(235, 173, 33, 0.2)',
        'dark-glow': '0 20px 50px -10px rgba(235, 173, 33, 0.15)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}