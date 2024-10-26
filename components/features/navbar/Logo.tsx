import Link from "next/link";

type LogoProps = {
  isScrolled: boolean;
  variant?: "navbar" | "footer";
};

const Logo = ({ isScrolled, variant }: LogoProps) => {
  const isNavbar = variant === "navbar";
  return (
    <div
      className={
        isNavbar
          ? "flex items-center logo ml-[3rem] h-full tracking-wide"
          : " flex pt-4 w-full h-full"
      }
    >
      <p className="dark:text-white text-gray-700 font-greatvibes tracking-wider text-[2.5rem] md:text-[1.8rem]">
        <span
          className={`font-bold text-primaryColor ${
            isScrolled && "text-[2rem]"
          } md:text-[2.5rem]`}
        >
          P
        </span>
        ortfolio
        <span className="text-primaryColor">.</span>
        <span>.</span>
        <span>.</span>
      </p>
    </div>
  );
};

export default Logo;
