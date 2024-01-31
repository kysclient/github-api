import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button {...props} className={`py-2 rounded-full px-8 bg-main-accent hover:bg-main-accent/70 transition duration-200 text-[#1c1c1f] text-sm md:text-xl font-medium ${className}`}>
      {children}
    </button>
  );
};
