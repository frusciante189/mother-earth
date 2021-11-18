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
        99: "calc(100% - 4.75rem)",
        98: "calc(100% - 4rem)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
