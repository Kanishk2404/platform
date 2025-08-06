/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#00ffff',
        'dark-bg': '#000000',
        'dark-secondary': '#1a1a1a',
      },
      fontFamily: {
        'cyber': ['Arial', 'Helvetica', 'sans-serif'],
      },
      animation: {
        'typewriter-blink': 'typewriterBlink 1s infinite',
        'fade-in': 'fadeIn 1s ease-in-out forwards',
      },
      keyframes: {
        typewriterBlink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
}
