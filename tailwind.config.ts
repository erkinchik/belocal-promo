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
        beige: {
          light: '#C2C5AA',
          DEFAULT: '#B6AD90',
          medium: '#A68A64',
          dark: '#936639',
          darker: '#7F4F24',
          darkest: '#582F0E',
        },
        olive: {
          light: '#A4AC86',
          DEFAULT: '#656D4A',
          dark: '#414833',
          darker: '#333D29',
        },
        gray: {
          darkest: '#191919',
          dark: '#4D4D4D',
          light: '#B5B5B5',
          lightest: '#ECECEC',
        },
      },
    },
  },
  plugins: [],
}
export default config

