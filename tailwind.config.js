/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // 👈 important: tell Tailwind to scan React files
  ],
  theme: {
    extend: {},
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      mdlg: "900px", // 👈 your custom breakpoint
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
