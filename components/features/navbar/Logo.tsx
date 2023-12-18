import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center text-[1.8rem] md:text-[2rem] logo ml-[1rem] md:ml-[3rem] h-full  text-white tracking-wide">
      <Link href="/">
        <p className="dark:text-white text-gray-600 font-greatvibes">
          Fabian<span className="text-primaryColor">.</span>
        </p>
      </Link>
    </div>
  );
};

export default Logo;
