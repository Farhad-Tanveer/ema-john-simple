/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1C2B35",

          secondary: "#FFE0B3",

          accent: "#e0cc69",

          neutral: "#2B2730",

          "base-100": "#E4E2E9",

          info: "#55B7EC",

          success: "#68DEBB",

          warning: "#EDC645",

          error: "#F50A45",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
