/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/flowbite-react/**/*.js', // Include flowbite-react
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-50%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUpLeft: {
          '0%': { transform: 'translateY(50%)', opacity: '0' },
          '50%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(0) translateX(-30%)', opacity: '1' },
        },
        slideUpRight: {
          '0%': { transform: 'translateY(50%)', opacity: '0' },
          '50%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(0) translateX(35%)', opacity: '1' },
        },
        popOutZoom: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.1)', opacity: '1' },
        },
      },
    animation: {
      slideIn: 'slideIn 1s ease-out',
      slideInsecond : 'slideIn 1s ease-out',
      fadeIn: 'fadeIn 1.5s ease-in-out',
      slideUp: 'slideUp 2s ease-out',
      slideUpLeft: 'slideUpLeft 1.5s ease-in-out forwards',
      slideUpRight: 'slideUpRight 1.5s ease-in-out forwards',
      popOutZoom: 'popOutZoom 5s',
    },
      colors: {
        customBlue: '#D6E6F2', // Light blue color
        customDark: '#303841', // Dark color
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, rgba(215,222,92,1) 19%, rgba(255,255,255,1) 87%)',
        'custom-bg': "url('./assets/images/backImage.jpg')",
      },
    },
  },
  plugins: [
    require('flowbite/plugin') // Add the flowbite plugin
  ],
};
