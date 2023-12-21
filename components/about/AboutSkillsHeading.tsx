// $ This component renders the headings for the skills section from the skillsdata.ts file

import * as React from "react";

type AboutSkillsHeadingProps = {
  category: string;
};

const AboutSkillsHeading = (props: AboutSkillsHeadingProps) => {
  const { category } = props;

  return (
    <div>
      <h3
        className="uppercase"
        // custom={id}
        // variants={skillsHeading}
        // initial="initialState"
        // animate="animateState"
      >
        {category}
      </h3>
    </div>
  );
};

export default AboutSkillsHeading;
