/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/flowbite-react/**/*.js', // Include flowbite-react
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#D6E6F2',  // Light blue color
        customDark: '#303841',  // Dark color
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, rgba(215,222,92,1) 19%, rgba(255,255,255,1) 87%)',
        'custom-bg': "url('./assets/images/backImage.jpg')",
      },

    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      'ssm' : '300px',
    }
  },
  plugins: [
    require('flowbite/plugin') // Add the flowbite plugin
  ],
}
