// $ This component only renders the skills icons from the skillsdata.ts file
// $ The props are destructured from the "MySkills.tsx" file

interface SkillCardProps {
  image?: string | undefined;
  name?: string | undefined;
  language?: string | undefined;
}

const SkillCard = ({ image, name }: SkillCardProps) => {
  return (
    <div className="flex gap-8 align-middle justify-start">
      <div className="flex flex-col gap-4 items-center justify-center">
        <img
          className="w-10 h-10 sm:w-16 sm:h-16 hover:scale-105 hover:cursor-pointer"
          src={image}
          alt="html"
        />
        <p className="uppercase tracking-widest text-sm md:text-md">{name}</p>
      </div>
    </div>
  );
};

export default SkillCard;
