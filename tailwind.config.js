/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens:{
      'tablet':'571px',
      'desktop':'1024px'
    },
    colors:{
      'primary':'#e2cc00',
      'secondary':'#111111',
      'white':'#ffffff'
    },
    fontFamily:{
      serif:['Georgia','Times New Roman','serif'],
      cookie:['Cookie', 'cursive']
    },
    height:{
      'tablet':'max-content',
      'desktop':'10dvh'
    },
    minHeight:{
      'header-responsive':'10dvh'
    },
    padding:{
      'responsive':'0 2dw 0 2dw',
      'tablet':'0 1dw 0 1dw',
      'desktop':'0 10dvw 0 10dvw'
    },
    extend: {
      boxShadow:{
        'form-shadow':'0 0 0 0.2rem #e2cc00'
      },
      gap:{
        '10':'10px'
      },
      gridTemplateColumns:{
        'head-responsive':'1fr 0fr 3fr',
        'head-tablet':'2fr 2fr 4fr',
        'head-desktop':'0.2fr 3fr 2fr',
        'footer-responsive':'1fr 0fr 4fr',
        'footer-tablet':'2fr 0fr 2fr',
        'footer-desktop':'1fr 1fr 1fr'
      },
      margin:{
        'responsive':'10px',
        'tablet':'20px'
      }
    },

  },
  plugins: [],
}

