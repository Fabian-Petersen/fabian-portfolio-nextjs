import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center text-[1.8rem] md:text-[2rem] logo ml-[1rem] md:ml-[3rem] h-full  text-white tracking-wide">
      <Link href="/">
        <p className="dark:text-white text-gray-600 font-greatvibes tracking-wider">
          <span className="font-bold text-primaryColor text-[2.1rem] md:text-[2.5rem]">
            F
          </span>
          abian
        </p>
      </Link>
    </div>
  );
};

export default Logo;
