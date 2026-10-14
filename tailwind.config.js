/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#080B12',
          surface: '#0D111C',
          card: '#111726',
          cardHover: '#161F33',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(79, 140, 255, 0.35)',
          muted: '#8A94A6',
          subtle: '#1E293B',
        },
        electric: {
          DEFAULT: '#4F8CFF',
          hover: '#3B79F2',
          light: '#72A4FF',
          glow: 'rgba(79, 140, 255, 0.2)',
        },
        cyan: {
          accent: '#22D3EE',
          subtle: '#06B6D4',
          glow: 'rgba(34, 211, 238, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(79, 140, 255, 0.15)',
        'glow-md': '0 0 25px -5px rgba(79, 140, 255, 0.25)',
        'glow-cyan': '0 0 20px -5px rgba(34, 211, 238, 0.2)',
        'card-subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
