// $ The component is used to create buttons in the app by passing in the various props to create the button
import { useFormStatus } from "react-dom";

// Check out useFormStatus explanation from John Smilga on React Forms, section 10, lecture 32

interface ButtonProps {
  className?: string;
  buttonLabel: string;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
}

const Button = ({ className, buttonLabel, type, onClick }: ButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <button className={className} type={type} onClick={onClick}>
      {buttonLabel}
    </button>
  );
};

export default Button;
