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
      },
    },
  },
<<<<<<< HEAD
  plugins: [
    require('flowbite/plugin') // Add the flowbite plugin
  ],
=======
  plugins: [],
>>>>>>> 6b2260df002b2b354243293596db52d3c95be11e
}
