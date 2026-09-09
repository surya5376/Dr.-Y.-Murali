/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { colors: { primary: '#163447', secondary: '#2D9C9C', accent: '#FF6B35', neutral: { DEFAULT: '#F5F7FA', light: '#FFFFFF', dark: '#14232D' } }, fontFamily: { sans: ['Inter', 'Manrope', 'ui-sans-serif', 'system-ui'] } } },
  plugins: [],
};
