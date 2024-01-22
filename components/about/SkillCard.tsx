// $ This component only renders the skills icons from the skillsdata.ts file
// $ The props are destructured from the "MySkills.tsx" file

import Link from "next/link";

interface SkillCardProps {
  image: string | undefined;
  name: string | undefined;
  link: string | undefined;
}

const SkillCard = ({ image, name, link }: SkillCardProps) => {
  return (
    <Link href={`/about/${link}`}>
      <div className="flex gap-8">
        <div className="flex flex-col gap-4 items-center justify-center">
          <img
            className="w-16 h-16 hover:scale-105 hover:cursor-pointer"
            src={image}
            alt="html"
          />
          <p className="capitalize tracking-wider">{name}</p>
        </div>
      </div>
    </Link>
  );
};

export default SkillCard;
