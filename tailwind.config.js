/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

export default {
 content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/flowbite/**/*.js",
  flowbite.content(),
 ],
 theme: {
  extend: {
   fontFamily: {
    urbanist: ["Urbanist", "sans-serif"],
   },
   colors: {
    "background-white": "#E9F5FF",
    "primary-blue": "#0077B6",
    "accent-orange": "#F4A261",
    "dark-navy": "#1B263B", 
    "soft-gray": "#2C2C2C", 
   },
   screens: {
    xs: "400px",
    sm: "620px",
    md: "730px",
   },
  },
 },
 plugins: [flowbite.plugin()],
};