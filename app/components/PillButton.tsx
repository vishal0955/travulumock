"use client";

type PillProps = {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string; 
  bgColor?: string;     // Tailwind class e.g. "bg-green-100"
  textColor?: string;   // Tailwind class e.g. "text-green-700"
};

const PillButton: React.FC<PillProps> = ({
  text,
  icon,
  onClick,
  className = "",
  bgColor = "bg-green-100",
  textColor = "text-green-700",
}) => {

  const mergedClasses = `
    flex items-center gap-1 px-3 py-1.5 rounded-full cursor-pointer
    ${bgColor} ${textColor} ${className}
  `;

  return (
    <div className={mergedClasses} onClick={onClick}>
      {icon && <span className="mr-1">{icon}</span>}
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
};

export default PillButton;