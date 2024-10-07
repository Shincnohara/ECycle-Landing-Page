/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        play: ["Playwrite DE Grund", "cursive"],
        kalam: ['kalam', 'cursive'],
      },
      screens: {
        'widescreen': { 'raw' : '(min-aspect-ratio: 3/2)'},
        'tallscreen': { 'raw' : '(min-aspect-ratio: 13/20)'},
      },
      keyframes: {
        'moveline' : {
          '0%' : { height: '0%'},
          '100%' : { height: '100%'},
        },
        'movedown' : {
          '0%' : { opacity: '1', transform: 'translateY(-30px)' },
          '100%' : { opacity: '1', transform: 'translateY(0px)' },
        }
      },
      animation: {
        'moveline' : 'moveline 3s linear forwards',
        'movedown' : 'movedown 1s linear forwards'
      },
    },
  },
  plugins: [],
}

