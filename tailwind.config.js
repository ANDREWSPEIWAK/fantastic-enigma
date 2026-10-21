/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        iron: {
          deep: '#121212',
          DEFAULT: '#1a1a1a',
          card: '#222222',
        },
        aqua: '#FBC85F',
        rust: '#EE5A55',
        heat: '#EE5A55',
        cream: '#E8E6E1',
        muted: '#C9C0A6',
        faint: '#555',
        border: '#3a3a3a',
        surface: '#1a1a1a',
        purple: '#5B45F0',
        green: '#C9DB8A',
        'dark-purple': '#4F3F7F',
        gold: '#FBC85F',
      },
      borderRadius: {
        xl: '32px',
        '2xl': '28px',
        full: '9999px',
      },
      fontFamily: {
        display: ['"Unbounded"', 'sans-serif'],
        body: ['"Manrope"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', '"SF Mono"', 'monospace'],
      },
      fontSize: {
        'tnum': ['0.875rem', { fontVariationSettings: '"tnum" on' }],
      },
    },
  },
  plugins: [],
}