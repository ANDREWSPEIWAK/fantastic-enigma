/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0F0F10',
        'surface-dark': '#1B1B1D',
        'border-dark-1': '#2A2A2D',
        'border-dark-2': '#3A3A3D',
        'light-card': '#E8E6DF',
        'divider-on-light': '#CFCCC4',
        ink: '#111111',
        'muted-on-light': '#555555',
        text: '#FFFFFF',
        lime: '#C9D98A',
        violet: '#5B3FF0',
        yellow: '#FDC55E',
        coral: '#EB5A52',
        plum: '#523E80',
      },
      borderRadius: {
        '32': '32px',
        '28': '28px',
        '24': '24px',
        '22': '22px',
        '20': '20px',
        '14': '14px',
        'pill': '14px',
      },
      fontFamily: {
        display: ['"Unbounded"', 'sans-serif'],
        body: ['"Manrope"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', '"SF Mono"', 'monospace'],
      },
      spacing: {
        '18': '72px',
      },
    },
  },
  plugins: [],
}