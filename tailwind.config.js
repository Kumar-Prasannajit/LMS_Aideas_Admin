/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B6EF5",
      },
      borderRadius: {
        card: "20px",
        badge: "20px",
        button: "10px",
      },
      boxShadow: {
        soft: "0px 10px 25px rgba(0,0,0,0.06)",
        card: "0px 6px 16px rgba(0,0,0,0.04)",
        stat: "0px 6px 16px rgba(0,0,0,0.195)",
      },
    },
  },
  plugins: [],
}
