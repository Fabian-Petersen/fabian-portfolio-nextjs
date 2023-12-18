import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      darkMode: "class",

      keyframes: {
        openNavBar: {
          "0%": { transform: "translate-x-[-100%]" },
          "100%": { transform: "translate-x-0" },
        },
        closeNavBar: {
          "0%": { transform: "translate-x-[0]" },
          "100%": { transform: "translate-x-[-100%]" },
        },
      },

      colors: {
        primaryColor: "#e43f5a",
        bgDark: "#050f1a",
        bgLight: "#eff5f5",
        fontLight: "#ededed",
        //bgDark:#050f1a,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      greatvibes: ["Great Vibes", "cursive"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
