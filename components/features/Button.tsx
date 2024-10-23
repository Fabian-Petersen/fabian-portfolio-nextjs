// $ The component is used to create buttons in the app by passing in the various props to create the button

interface ButtonProps {
  className: string;
  buttonLabel: string;
  type?: "submit" | "button" | "reset";
}

const Button = ({ className, buttonLabel, type }: ButtonProps) => {
  return (
    <button className={className} type={type}>
      {buttonLabel}
    </button>
  );
};

export default Button;
