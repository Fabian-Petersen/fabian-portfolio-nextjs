// $ This component only renders the skills icons from the skillsdata.ts file
// $ The props are destructured from the "MySkills.tsx" file

type SkillCardProps = {
  image?: string | undefined;
  name?: string | undefined;
  language?: string | undefined;
};

const SkillCard = ({ image, name }: SkillCardProps) => {
  return (
    <div className="flex gap-8 justify-center items-center w-full p-4 bg-slate-100 rounded-[1rem] shadow-md shadow-slate-300 dark:text-fontDark dark:shadow-fontDark">
      <div className="flex flex-col gap-4 justify-center items-center">
        <img
          className="size-10 sm:size-16 hover:scale-105 hover:cursor-pointer"
          src={image}
          alt="html"
        />
        <p
          className={`${name == "html" || name == "css" ? "uppercase" : "capitalize"} text-clampBodyText`}
        >
          {name}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
