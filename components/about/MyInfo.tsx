// import { motion } from "framer-motion";
// import aboutVariants from "../../app/animations/aboutAnimate";

// const [aboutInfo] = aboutVariants;

const MyInfo = () => {
  return (
    <div>
      <p
        className="text-gray-600 font-medium dark:text-white text-[0.8rem] md:text-[1rem] leading-[1.7rem] tracking-wide py-4"
        // variants={aboutInfo}
        // initial="initialState"
        // animate="animateState"
      >
        My journey began as a chemical engineer, during which I was involved in
        several software implementation projects with TotalEnergies. This
        experience sparked my interest in app development, and I eventually
        transitioned into a dedicated React Developer, a role I am incredibly
        passionate about today.
        <br />
        <br />
        As a developer, I am enthusiastic about learning new technologies and
        working on thrilling projects. Here is a list of technologies I have had
        the opportunity to work with so far, and I am continuously expanding my
        skill set.
      </p>
    </div>
  );
};

export default MyInfo;
