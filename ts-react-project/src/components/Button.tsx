interface ButtonProps {
  label: string;
  handleClick: () => void;
  isDisable: boolean;
}

const Button = ({ label, handleClick, isDisable }: ButtonProps) => {
  return (
    <button onClick={() => handleClick()} disabled={isDisable}>
      {label}
    </button>
  );
};

export default Button;
