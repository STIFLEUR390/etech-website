/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          // BLEU (Confiance, Télécom, B2B, Structure)
          blue: {
            DEFAULT: '#0A2540',
            primary: '#0066FF',
            light: '#E6F0FF',
          },
          // VERT (Innovation, Meta WhatsApp, Succès, Envoi instantané)
          green: {
            DEFAULT: '#10B981',
            emerald: '#059669',
            accent: '#25D366',
            light: '#E6F9F0',
          },
          // NEUTRES
          dark: '#0F172A',
          slate: '#475569',
          lightBg: '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(10, 37, 64, 0.05)',
        'glass-lg': '0 8px 32px 0 rgba(10, 37, 64, 0.1)',
        'brand': '0 4px 14px 0 rgba(0, 102, 255, 0.15)',
        'brand-green': '0 4px 14px 0 rgba(16, 185, 129, 0.15)',
      },
      backdropBlur: {
        'glass': '16px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
