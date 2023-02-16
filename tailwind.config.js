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
      basteleur : ['Basteleur'],
      cantique: ['Cantique'],
      sans: ['Arial']
   },
   colors: {
    green: '#39B615',
    white: "#FFFFFF",
    back: '#FFFFFF',
    main: '#000000',
    accent: "#FF3737"
   }
  },
  plugins: [],
};