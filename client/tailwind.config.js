module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        light: {
          back: "#F0F2F5",
          highlight: "#1D9BF0",
          main: "#FFFFFF",
          negative: "#18191A",
        },
      },
    },
  },
  plugins: [],
};
