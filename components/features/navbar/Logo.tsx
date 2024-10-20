import Link from "next/link";

type LogoProps = {
  isScrolled: boolean;
};

const Logo = ({ isScrolled }: LogoProps) => {
  return (
    <div className="flex items-center logo ml-[3rem] h-full text-white tracking-wide">
      <p className="dark:text-white text-gray-700 font-greatvibes tracking-wider text-[2.5rem] md:text-[1.8rem]">
        <span
          className={`font-bold text-primaryColor ${
            isScrolled && "text-[2rem]"
          } md:text-[2.5rem]`}
        >
          F
        </span>
        abian
        <span className="text-primaryColor">.</span>
        <span>.</span>
        <span>.</span>
      </p>
    </div>
  );
};

export default Logo;
