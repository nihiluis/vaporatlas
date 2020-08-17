module.exports = {
  purge: ['./src/components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      display: ["Mulish", "sans-serif"],
      body: ["Mulish", "sans-serif"],
    },
    extend: {
      colors: {
        cyan: "#9cdbff",
      },
      margin: {
        "96": "24rem",
        "128": "32rem",
      },
    },
  },
  variants: {
    opacity: ["responsive", "hover"],
  },
}
