module.exports = {
  mode: 'jit',
  purge: {
  
      content: [
                './src/site/*.njk',
                './src/site/**/*.njk',
                './src/site/**/**/*.njk',
                './src/site/**/**/**/*.njk'
                ],
      safelist:
                [
                  '',
                  
                ]
 
              },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
      backgroundColor: ['responsive', 'hover', 'focus', 'focus-within', 'active'],
      borderColor: ['focus', 'hover', 'active'],
    extend: {
      fill: ['hover', 'focus', 'active'],
      textDecoration: ['active'],
      },
  },
  plugins: [require('@tailwindcss/typography')
  ],
}