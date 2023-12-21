import CTAButton from "./CTAButton";

const HomeMainContent = () => {
  return (
    <article className="grid h-full place-content-center w-full px-[1.5rem] sm:px-[2.5rem] text-gray-600 dark:text-white tracking-wider col-start-2 col-end-3 ">
      <div
        className="text-primaryColor w-20 h-4 border-b-4 mb-4 border-primaryColor"
        // variants={animateLine}
      ></div>
      <h3 className="text-[1rem] md:text-[1.2rem] lg:text-[1.25rem] tracking-wide">
        Hi, my name is
      </h3>
      <h1 className="tracking-[0.095em] text-[1.8rem] md:text-[3rem] lg:text-[4rem] font-bold mb-6">
        <span className="text-primaryColor">Fabian </span>Petersen
      </h1>
      <p className="text-[1rem] tracking-wider md:text-[1.2rem] lg:text-[1.25rem] leading-2 normal-case mb-8">
        Welcome to my official portfolio website showcasing my work as a
        <span className="text-primaryColor"> Front End Developer.</span>
      </p>
      <CTAButton title="My Projects" />
    </article>
  );
};

export default HomeMainContent;
