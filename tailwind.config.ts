import type { Config } from "tailwindcss";
// import HomeBGHex from "./public/backgroundHexSVG/HomeBGHex.tsx";

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
      fontSize: {
        clamp: "clamp(1rem, 8vw + 0.5rem, 3rem)",
      },
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
      height: {
        dvh: "100dvh",
      },
      gridTemplateColumns: {
        gallery: "repeat(auto-fill, minmax(350px, 1fr))",
        contact: "10rem, 1fr",
      },
      colors: {
        primaryColor: "#e43f5a",
        bgDark: "#050f1a",
        bgLight: "#eff5f5",
        facebookGray: "#eff2f5",
        fontLight: "#ededed",
        //bgDark:#050f1a,
      },
      backgroundImage: {
        // aboutURL: "url(`${abourtURL}`)",
        // homeBGImage: `url('${HomeBGHex}')`,
      },
    },
    before: {
      beforeDefault: {
        content: "",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      greatvibes: ["Great Vibes", "cursive"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
