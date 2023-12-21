// import { Button } from "flowbite-react";
import Link from "next/link";

// Use interface to define the type of the props.
interface CTAButtonProps {
  title: string;
}

const CTAButton = ({ title }: CTAButtonProps) => {
  return (
    <div>
      <Link href="/projects">
        <button className="text-[0.7rem] p-2 md:p-3 bg-blue-500 hover:bg-blue-600 hover:shadow-lg hover:translate-y-[1px] rounded-full text-gray-200 uppercase tracking-widest">
          {title}
        </button>
      </Link>
    </div>
  );
};

export default CTAButton;
