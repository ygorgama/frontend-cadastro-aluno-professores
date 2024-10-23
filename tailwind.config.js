/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
       'home-page': "url('/public/img/background.jpg')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

