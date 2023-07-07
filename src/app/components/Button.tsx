import { ReactNode, memo } from "react";
import { twMerge } from "tailwind-merge";

type ButtonComponentProps = {
  id: string;
  type?: "button" | "submit" | "reset";
  label?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
  iconAdornment?: JSX.Element;
};

const ButtonComponent = ({
  id,
  label,
  type = "button",
  disabled = false,
  onClick,
  className,
  children,
  iconAdornment,
}: ButtonComponentProps) => {
  return (
    <button
      id={id}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={twMerge(
        "text-3xl rounded-xl backdrop-blur bg-violet-700/30 flex flex-col justify-center items-center",
        "hover:bg-violet-700/80 active:bg-violet-700 transition-colors duration-200 focus:outline-none",
        className
      )}
    >
      {iconAdornment && <span className="absolute left-0 flex items-center pl-3">{iconAdornment}</span>}
      {children ? children : label}
    </button>
  );
};

export default memo(ButtonComponent);
