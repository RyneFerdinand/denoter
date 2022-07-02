module.exports = {
  darkMode: "class",
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        highlight: "#1D9BF0",
        warn: "#DC2626",
        light: {
          back: "#F0F2F5",
          main: "#FFFFFF",
          negative: "#000000",
        },
        dark: {
          back: "#242526",
          main: "#18191A",
          negative: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
