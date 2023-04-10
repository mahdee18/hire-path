/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  themes: [
    {
      mytheme: {

        "primary": "#c3fca6",

        "secondary": "#ba1e1b",

        "accent": "#9d8ce2",

        "neutral": "#322B3B",

        "base-100": "#EDEDED",

        "info": "#78A9F2",

        "success": "#2ED6AC",

        "warning": "#FBB104",

        "error": "#F25050",
      },
    },
  ],

  plugins: [require("daisyui")],
}

