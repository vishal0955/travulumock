type ButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string; // allow custom overrides
};




const Button: React.FC<ButtonProps> = ({ label, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex justify-center items-center
        px-4 py-[6px]
        text-white font-nunito font-bold text-[16px] md:text-[18px]
        rounded-lg
        bg-gradient-to-t from-[#F25C54] to-[#FF914D]
        w-fit
        ${className}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
