"use client";
// $ This component only renders the background image of the home page. Similar components are used for all other pages.

// $ Import the custom hook that provides the background color and stroke color.
import useBackgroundColorHook from "../useBackgroundColorHook";

const HomeBGHex = () => {
  const { fillColor, strokeColor } = useBackgroundColorHook();

  const url: string = `data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='100%' height='100%' preserveAspectRatio='none' viewBox='0 0 100% 100%'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1170%26quot%3b)' fill='none'%3e%3crect width='100%' height='100%' x='0' y='0' fill='${fillColor}'%3e%3c/rect%3e%3cpath d='M6.58 -71.85L78.46 -30.35L78.46 52.65L6.58 94.15L-65.3 52.65L-65.3 -30.35zM6.58 675.15L78.46 716.65L78.46 799.65L6.58 841.15L-65.3 799.65L-65.3 716.65zM222.23 550.65L294.11 592.15L294.11 675.15L222.23 716.65L150.34 675.15L150.34 592.15zM294.11 -71.85L365.99 -30.35L365.99 52.65L294.11 94.15L222.23 52.65L222.23 -30.35zM294.11 426.15L365.99 467.65L365.99 550.65L294.11 592.15L222.23 550.65L222.23 467.65zM509.76 301.65L581.64 343.15L581.64 426.15L509.76 467.65L437.87 426.15L437.87 343.15zM437.87 426.15L509.76 467.65L509.76 550.65L437.87 592.15L365.99 550.65L365.99 467.65zM581.64 -71.85L653.52 -30.35L653.52 52.65L581.64 94.15L509.76 52.65L509.76 -30.35zM581.64 426.15L653.52 467.65L653.52 550.65L581.64 592.15L509.76 550.65L509.76 467.65zM653.52 550.65L725.4 592.15L725.4 675.15L653.52 716.65L581.64 675.15L581.64 592.15zM725.4 -71.85L797.28 -30.35L797.28 52.65L725.4 94.15L653.52 52.65L653.52 -30.35zM797.28 550.65L869.17 592.15L869.17 675.15L797.28 716.65L725.4 675.15L725.4 592.15zM797.28 799.65L869.17 841.15L869.17 924.15L797.28 965.65L725.4 924.15L725.4 841.15zM869.17 -71.85L941.05 -30.35L941.05 52.65L869.17 94.15L797.28 52.65L797.28 -30.35zM941.05 52.65L1012.93 94.15L1012.93 177.15L941.05 218.65L869.17 177.15L869.17 94.15zM869.17 426.15L941.05 467.65L941.05 550.65L869.17 592.15L797.28 550.65L797.28 467.65zM941.05 799.65L1012.93 841.15L1012.93 924.15L941.05 965.65L869.17 924.15L869.17 841.15zM1012.93 426.15L1084.81 467.65L1084.81 550.65L1012.93 592.15L941.05 550.65L941.05 467.65zM1084.81 799.65L1156.69 841.15L1156.69 924.15L1084.81 965.65L1012.93 924.15L1012.93 841.15zM1156.69 177.15L1228.58 218.65L1228.58 301.65L1156.69 343.15L1084.81 301.65L1084.81 218.65zM1156.69 426.15L1228.58 467.65L1228.58 550.65L1156.69 592.15L1084.81 550.65L1084.81 467.65zM1372.34 52.65L1444.22 94.15L1444.22 177.15L1372.34 218.65L1300.46 177.15L1300.46 94.15zM1300.46 177.15L1372.34 218.65L1372.34 301.65L1300.46 343.15L1228.58 301.65L1228.58 218.65z' stroke='${strokeColor}' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1170'%3e%3crect width='100%' height='100%' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e`;

  return (
    <div className="absolute top-0 left-0 z-[-100] h-full w-full bg-cover bg-center">
      <img className="w-full h-full" src={url} alt="backgroundImage" />
    </div>
  );
};

export default HomeBGHex;
