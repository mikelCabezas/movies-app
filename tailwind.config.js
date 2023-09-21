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
    letterSpacing: {
      '1': '0em',
      '2': '0.025em',
      '3': '0.04em',
      '4': '0.05em',
      '5': '0.75em',
      '6': '1em',
    },
  },
  plugins: [],
}

