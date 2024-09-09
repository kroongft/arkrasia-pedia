import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    {
      pattern: /bg-gradient-to-tl/,
    },
    {
      pattern: /from-(고급|희귀|영웅|전설|유물|고대|에스더)/,
    },
    {
      pattern: /to-default/,
    },
  ],
  theme: {
    gradientColorStops: (theme) => ({
      ...theme('colors'),
    }),
    extend: {
      colors: {
        default: '#3d3325',
        에스더: '#2faba8',
        고대: '#dcc999',
        유물: '#a24006',
        전설: '#9e5f04',
        영웅: '#480d5d',
        희귀: '#113d5d',
        고급: '#304911',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}

export default config
