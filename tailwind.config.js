/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, #cbd5e1, #64748b)', // Correct syntax for radial gradient
      },
  
      colors: {
        customPurple: '#4d3f78',
        customPurpleDark: '#2e2548',
      },
      fontFamily: {
        customFont: ['Sniglet', 'Roboto', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      backdropBlur: ['hover', 'focus'],
    },
  },
  plugins: [],
};