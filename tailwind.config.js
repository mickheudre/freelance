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
    extend: {
      fontFamily: {
        basteleur : ['Basteleur'],
        cantique: ['Cantique'],
        sans: ['Arial'],
        serif: ['Frank Ruhl Libre', 'serif']
      },
      colors: {
        back: '#e7ecef',
        main: '#08415c',
        accent: "#f05d5e",
      },
      borderWidth: {
        '3': '3px',
      }
    }
    
  },
  plugins: [],
};