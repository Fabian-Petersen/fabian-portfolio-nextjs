import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center logo ml-[3rem] h-full text-white tracking-wide">
      <Link href="/">
        <p className="dark:text-white text-gray-700 font-greatvibes tracking-wider text-[2.5rem] md:text-[3rem]">
          <span className="font-bold text-primaryColor text-[2.1rem] md:text-[2.5rem]">
            F
          </span>
          abian
          <span className="text-primaryColor">.</span>
          <span>.</span>
          <span>.</span>
        </p>
      </Link>
    </div>
  );
};

export default Logo;
