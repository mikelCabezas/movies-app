/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}'],
  },
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend:
    {
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}

