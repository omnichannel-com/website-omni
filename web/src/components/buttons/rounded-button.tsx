import React from "react";

interface ButtonProps {
  text: string;
  variant?: "primary" | "gradient" | "ghost" | "text";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  customClass?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  size = "md",
  icon,
  customClass = "",
  onClick,
}) => {
  const base =
    "inline-flex items-center gap-3 font-display font-bold transition-all duration-ocx-fast cursor-pointer";

  const sizeClasses = {
    sm: "text-xs px-5 py-2.5 rounded-ocx-md",
    md: "text-sm px-8 py-4 rounded-ocx-lg",
    lg: "text-base px-10 py-5 rounded-ocx-lg",
  };

  const variantClasses = {
    primary:
      "bg-ocx-dark-blue text-white hover:bg-ocx-dark-blue-90 shadow-ocx-md",
    gradient:
      "bg-ocx-gradient text-white hover:shadow-ocx-glow",
    ghost:
      "bg-transparent text-ocx-fg-primary border-2 border-ocx-fg-primary hover:bg-ocx-fg-primary/5",
    text: "bg-transparent text-ocx-bright-blue hover:text-ocx-fg-primary px-0 py-2",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${sizeClasses[size]} ${variantClasses[variant]} ${customClass}`}
    >
      {icon && <span className="w-5 h-5 flex items-center justify-center">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
