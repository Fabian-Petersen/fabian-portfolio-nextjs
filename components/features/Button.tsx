// $ The component is used to create buttons in the app by passing in the various props to create the button

interface ButtonProps {
  className?: string;
  buttonLabel: string;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
}

const Button = ({ className, buttonLabel, type, onClick }: ButtonProps) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {buttonLabel}
    </button>
  );
};

export default Button;
