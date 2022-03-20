module.exports = {
  content: [
    './src/site/*.njk',
    './src/site/**/*.njk',
    './src/site/**/**/*.njk',
    './src/site/**/**/**/*.njk'
  ],
  theme: {
  extend: {},
  plugins: [require('@tailwindcss/typography'), 
            require('@tailwindcss/forms'),
            ]
  }
}