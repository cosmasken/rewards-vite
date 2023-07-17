/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      header: '#333333',
      content: '#666666',
      textblue: '#003FE0',
      footerbg : '#0C0439',
      footertextcolor: '#D3CCF6',
      loginBtnColor: '#0036F533',
      white: '#FFFFFF',
      black: '#000000',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
  },
  extend: {
    backgroundImage: theme => ({
     'hero-pattern': "url('/src/assets/svg/hero.png')",
    })
  }
  },
  plugins: [],
}

