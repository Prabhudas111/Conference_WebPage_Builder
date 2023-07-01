/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".main-banner": {
            background: "url(https://bdcoder.com/html/ict/images/bg/1.jpg)",
            "background-repeat": "no-repeat",
            "background-position": "center",
            "background-size": "cover",
            width: "100%",
            position: "relative",
            "z-index": "1!important",
            display: "block",
            "font-family": "'PT Sans', sans-serif",
            "font-size": "15px",
            "font-weight": "400",
            "line-height": "26px",
            color: "#4c4c4c",
          },
          ".main-banner::before": {
            content: '""',
            position: "absolute",
            left: "0",
            top: "0",
            "z-index": "-1",
            width: "100%",
            height: "100%",
            background:
              "url(https://bdcoder.com/html/ict/images/bg/pattern.png)",
            "background-repeat": "repeat",
            "background-color": "rgba(0, 0, 0, 0.3)",
          },
        },
        ["before"]
      );
    },
  ],
};
