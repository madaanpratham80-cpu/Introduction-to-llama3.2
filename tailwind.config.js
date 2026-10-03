/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Playfair Display"', 'serif'],
      serif: ['"Playfair Display"', 'serif'],
      mono: ['"Playfair Display"', 'serif'],
      display: ['"Playfair Display"', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
