// The component is used to create buttons in the app by passing in the various props to create the button

interface ButtonProps {
  className: string;
  onClick: () => void;
  label: string;
}

const Button = ({ className, onClick, label }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
