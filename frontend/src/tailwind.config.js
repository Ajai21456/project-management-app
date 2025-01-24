module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all JS/JSX/TS/TSX files in the src folder
  ],
  theme: {
    extend: {
      // Custom colors
      colors: {
        primary: '#3B82F6', // Blue
        secondary: '#10B981', // Green
        danger: '#EF4444', // Red
        warning: '#F59E0B', // Yellow
        success: '#10B981', // Green
        info: '#3B82F6', // Blue
      },
      // Custom fonts
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Use Inter as the default sans-serif font
      },
      // Custom spacing
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
      // Custom breakpoints
      screens: {
        xs: '480px', // Extra small screens
        sm: '640px', // Small screens
        md: '768px', // Medium screens
        lg: '1024px', // Large screens
        xl: '1280px', // Extra large screens
      },
    },
  },
  plugins: [],
};
