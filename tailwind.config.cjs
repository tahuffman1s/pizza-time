/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        "windows-grey": "#c0c0c0",
      },
    },
  },

  plugins: [],
};

module.exports = config;
