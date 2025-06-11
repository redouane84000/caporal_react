/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spicy-red': '#FF4B2B',
        'grilled-orange': '#FFB800',
        'crispy-white': '#FFFFFF',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            a: {
              color: '#FF4B2B',
              '&:hover': {
                color: '#FFB800',
              },
            },
          },
        },
      },
      screens: {
        'mobile': {'max': '375px'},
        'desktop': {'min': '376px'},
      },
      animation: {
        'flame': 'flame 2s ease-in-out infinite',
        'grill': 'grill 1.5s ease-in-out infinite',
      },
      keyframes: {
        flame: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        grill: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
} 