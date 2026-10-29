/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: {
          900: '#150D0A',
          800: '#201A17',
          700: '#2B1B16', // Primary Espresso brown
          600: '#3D2720',
          500: '#5C3828', // Coffee brown
          400: '#7A4C36',
        },
        caramel: {
          DEFAULT: '#B9824B',
          light: '#D49D6A',
          dark: '#966332',
          accent: '#C8935D',
        },
        cream: {
          DEFAULT: '#F6F0E6',
          light: '#FAF6F0',
          soft: '#FFFCF7', // Warm white
          dark: '#E8DEC8',
        },
        charcoal: '#201A17',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'coffee': '0 20px 40px -15px rgba(43, 27, 22, 0.15)',
        'coffee-lg': '0 30px 60px -15px rgba(43, 27, 22, 0.25)',
        'caramel-glow': '0 10px 25px -5px rgba(185, 130, 75, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
