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
        sans: ['Inter'],
        serif: ['Frank Ruhl Libre', 'serif']
      },
      colors: {
        back: '#D9D9D9',
        main: '#1E1E1E',
        accent: "#f05d5e",
      },
      borderWidth: {
        '3': '3px',
      }
    }
    
  },
  plugins: [],
};