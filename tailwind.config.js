/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', 
  theme: {
    colors: {
      grisOscuro: '#2A2A2A',
      dorado: '#D4AF37',
      doradoClaro: '#FFD700',
      grisClaro: '#C0C0C0',
      customWhite: '#FFFFFF', // Asegúrate de que este sea blanco puro
      dark: '#1A1A1A',
      light: '#F8F8F8', 
      // Agregar colores por defecto para todos los modos
      white: '#FFFFFF', // Blanco puro
      black: '#000000', // Negro puro
      transparent: 'transparent',
      current: 'currentColor',
    },
    fontFamily: {
      display: ['Playfair Display', 'serif'],
      body: ['Roboto', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
