module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "app.vue"
  ],
  theme: {
    fontFamily: {
      brand: ['lustucrust']
   },
   colors: {
    green: '#39B615'
   }
  },
  plugins: [],
};