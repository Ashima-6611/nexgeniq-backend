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
          purple: "#9b5de5",
          blue: "#3a86ff",
          cyan: "#64c8ff",
          dark: "#0a0a2e",
          deep: "#0d1b4b",
        }
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'orbit': 'orbit 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #64c8ff, 0 0 10px #64c8ff' },
          '100%': { boxShadow: '0 0 20px #3a86ff, 0 0 40px #3a86ff' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(150px) rotate(-360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundImage: {
        'neural-grid': "url('/assets/grid.svg')",
      }
    },
  },
  plugins: [],
}
