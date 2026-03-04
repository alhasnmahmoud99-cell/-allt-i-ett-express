/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B4D3E',
          light: '#2EAA73',
          'ultra-light': '#E8F5EE',
        },
        accent: '#F4C542',
        background: '#F8FAF9',
        surface: '#FFFFFF',
        text: {
          primary: '#0D1F17',
          secondary: '#4A6358',
        },
        border: '#DDE8E2',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      borderRadius: {
        card: '20px',
        btn: '12px',
      },
      boxShadow: {
        soft: '0 8px 40px rgba(27,77,62,0.12)',
      },
      spacing: {
        0: '0px',
        0.5: '4px',
        1: '8px',
        1.5: '12px',
        2: '16px',
        2.5: '20px',
        3: '24px',
        3.5: '28px',
        4: '32px',
        5: '40px',
        6: '48px',
        7: '56px',
        8: '64px',
        9: '72px',
        10: '80px',
      },
      maxWidth: {
        container: '1280px',
      },
      screens: {
        xs: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      animation: {
        'pulse-soft': 'pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scroll': 'scroll 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'scroll': {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
