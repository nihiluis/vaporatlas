module.exports = {
  theme: {
    fontFamily: {
      display: ["Mulish", "sans-serif"],
      serif: [
        'Playfair\\ Display',
        ...defaultTheme.fontFamily.serif,
      ],
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
