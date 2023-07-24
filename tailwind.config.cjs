/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        "windows-grey": "#c0c0c0",
        "windows-border": "#f4f4f4",
      },
    },
  },

  plugins: [],
};

module.exports = config;
