module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#172c2f",
        secondary: "#214140",
        title: "#2e9d50",
      },
      height: {
        99: "calc(100vh - 92px)",
        98: "calc(100% - 4rem)",
      },
      fontFamily: {
        number: ["Inconsolata"],
      },
      backgroundImage: {
        banner: "url('./Assets/Banner.JPG')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
