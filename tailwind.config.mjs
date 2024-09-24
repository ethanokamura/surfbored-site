/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: ['./src/**/*.{astro,html}'],
  darkMode: 'class',
	theme: {
		extend: {
      colors: {
        'text': '#1a1a1a',
        'text2': '#7e8286',
        'text3': '#8f8f8f',
        'background': '#ffffff',
        'accent': '#e5e8ea',
        'primary': '#8875e0',
        
        'darktext': '#e1e6f0',
        'darktext2': '#969eb0',
        'darktext3': '#666e7d',
        'darkbackground': '#10141a',
        'darkaccent': '#1d2530',
        'darkprimary': '#61AFEF',
      },
      dropShadow: {
        black: [
          "0px 0px 15px #000000"
        ],
        grey: [
          "0px 0px 15px #bdbdbd"
        ],
      },
      fontFamily: {
        rubik: 'rubik',
      },
      animation: {
        title: "title 1.5s infinite",
        typing: "typing 2s steps(40)",
        blink: "blink 0.75s infinite"
      },
      keyframes: {
        typing: {
          from: {
            width: "0",
            visibility: "hidden"
          },
          to: {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            opacity: "0%"
          },
          "100%": {
            opacity: "100%"
          }
        }
      }
    },
	},
	plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
          'animate-delay': (value) => ({
            animationDelay: value,
          }),
          'opacity': (value) => ({
            opacity: value,
          }),
        },
        { values: theme('textShadow') },
        { values: theme('transitionDelay') },
        { values: theme('opacity') }
      )
    }),
  ],
}
