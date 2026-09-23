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
          navy: '#0F172A',
          indigo: '#1E1B4B',
          deep: '#312E81',
          primary: '#4338CA',
          light: '#6366F1',
          softBlue: '#38BDF8',
          sky: '#E0F2FE',
          violet: '#8B5CF6',
          lavender: '#F5F3FF',
          lavenderBorder: '#DDD6FE',
          mint: '#10B981',
          mintLight: '#ECFDF5',
          cyan: '#06B6D4',
          surface: '#FFFFFF',
          bg: '#F8FAFC',
          card: '#FFFFFF',
        }
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(30, 27, 75, 0.06), 0 2px 6px -1px rgba(30, 27, 75, 0.04)',
        'card': '0 10px 30px -4px rgba(30, 27, 75, 0.08), 0 4px 10px -2px rgba(30, 27, 75, 0.03)',
        'float': '0 20px 40px -6px rgba(49, 46, 129, 0.12), 0 8px 16px -4px rgba(49, 46, 129, 0.06)',
        'glow': '0 0 25px rgba(99, 102, 241, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'breathe': 'breathe 19s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '21%': { transform: 'scale(1.4)' }, // 4s inhale (4/19 = 21%)
          '58%': { transform: 'scale(1.4)' }, // 7s hold (11/19 = 58%)
          '100%': { transform: 'scale(1)' },  // 8s exhale
        }
      }
    },
  },
  plugins: [],
}
