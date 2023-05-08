/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        neuFace: ["neutralFace","ui-monospace"],
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}
