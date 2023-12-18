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
      colors: {
        primaryColor: "#e43f5a",
        // theme === "dark" ? "rgba(5, 15, 26, 1)" : "rgba(239, 245, 245, 1)"
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
