/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scaling: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '20%': { transform: 'scale(5)', opacity: '1' },
          '100%': { transform: 'scale(5)', opacity: '0' },
        },
      },
      animation: {
        scaling: 'scaling 10s forwards',
      },
    },
  },
  plugins: [],
}