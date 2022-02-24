const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    extend: {
      fontFamily: {
        ...fontFamily,
        sans: [
          "\"Cabin\"",
          // The below fonts are taken from the sans class in Tailwind CSS
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji"
        ]
      }
    },

  },
  plugins: [],
};
