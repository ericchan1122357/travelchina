/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/homepage/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'china-red': '#c41e3a',
        'jade-green': '#00a86b',
        'celadon-blue': '#2f95a7',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in forwards',
        'fade-in-delay': 'fadeIn 1s ease-in 0.5s forwards',
        'fade-in-delay-2': 'fadeIn 1s ease-in 1s forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}; 