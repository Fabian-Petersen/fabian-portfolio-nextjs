import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center logo ml-[1rem] md:ml-[3rem] h-full text-[1rem] md:text-[2rem] text-white tracking-wide">
      <Link href="/">
        <p className="dark:text-white text-fontLightTheme font-greatVibes">
          Fabian<span className="text-primaryColor">.</span>
        </p>
      </Link>
    </div>
  );
};

export default Logo;
