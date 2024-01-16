// $ The component is used to create buttons in the app by passing in the various props to create the button

interface ButtonProps {
  className: string;
  onClick?: () => void;
  buttonLabel: string;
  type?: "submit" | "button" | "reset";
}

const Button = ({ className, onClick, buttonLabel, type }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {buttonLabel}
    </button>
  );
};

export default Button;
