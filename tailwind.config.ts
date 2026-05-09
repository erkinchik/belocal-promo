import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0353A4',
          deep: '#023E7D',
          ink: '#012558',
          50: '#EEF3FA',
          100: '#DCE7F4',
          200: '#C0D5EE',
          300: '#7CB1E8',
        },
        ink: {
          DEFAULT: '#191919',
          2: '#3A3A3A',
          3: '#6B6B6B',
        },
        paper: {
          DEFAULT: '#FAFAF7',
          2: '#F2F1EC',
        },
        accent: {
          amber: '#F2A93B',
          mint: '#22C07F',
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['var(--font-instrument-serif)', 'serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
      },
      borderColor: {
        line: 'rgba(25,25,25,0.10)',
        'line-strong': 'rgba(25,25,25,0.18)',
      },
      backgroundColor: {
        line: 'rgba(25,25,25,0.10)',
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'pulse-ring': 'pulseRing 1.8s infinite',
        blink: 'blink 1.2s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(242,169,59,.55)' },
          '70%': { boxShadow: '0 0 0 8px rgba(242,169,59,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(242,169,59,0)' },
        },
        blink: {
          '0%,80%,100%': { opacity: '0.25' },
          '40%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
