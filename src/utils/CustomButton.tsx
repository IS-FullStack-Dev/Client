import React, { FC, MouseEvent } from "react";

interface CustomButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  className: string;
}

const CustomButton: FC<CustomButtonProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <button className={`custom-button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;