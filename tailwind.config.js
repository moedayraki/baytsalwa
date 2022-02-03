const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['gulim', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        baytLightGreen: '#DFE9DE',
        baytBeige: '#EDEDEB',
        baytSoil: '#BCBCBA',
        baytDarkestGreen: '#738D8A'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
