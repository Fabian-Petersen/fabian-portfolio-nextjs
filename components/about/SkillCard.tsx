// $ This component only renders the skills icons from the skillsdata.ts file
// $ The props are destructured from the "MySkills.tsx" file

interface SkillCardProps {
  image: string;
  name: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ image, name }) => {
  return (
    <div className="flex gap-8">
      <div className="flex flex-col gap-4 items-center justify-center">
        <img className="w-16 h-16 hover:scale-105" src={image} alt="html" />
        <p className="capitalize">{name}</p>
      </div>
    </div>
  );
};

export default SkillCard;
