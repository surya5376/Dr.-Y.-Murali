// src/components/ui/Button.tsx
import React from "react";

type ButtonVariant = "primary" | "secondary" | "navy" | "teal" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  asChild = false,
  ...rest
}) => {
  const sizeClasses =
    size === "lg"
      ? "px-6 py-3.5 text-base rounded-lg shadow-sm"
      : size === "sm"
      ? "px-3.5 py-1.5 text-xs rounded-md"
      : "px-5 py-2.5 text-sm rounded-lg shadow-sm";

  const variantClasses =
    variant === "primary"
      ? "bg-[#FF6B35] text-white hover:bg-[#e85924] shadow-sm hover:shadow focus-visible:ring-[#FF6B35]"
      : variant === "navy"
      ? "bg-[#163447] text-white hover:bg-[#0f2432] focus-visible:ring-[#163447]"
      : variant === "teal"
      ? "bg-[#2D9C9C] text-white hover:bg-[#248181] focus-visible:ring-[#2D9C9C]"
      : variant === "ghost"
      ? "text-[#163447] hover:bg-[#F5F7FA] shadow-none focus-visible:ring-[#163447]"
      : variant === "outline"
      ? "bg-transparent border border-current shadow-none"
      : "bg-white text-[#163447] border border-[#163447]/20 hover:bg-[#F5F7FA] hover:border-[#163447]/40 focus-visible:ring-[#163447]";

  const combinedClasses = `${baseStyles} ${sizeClasses} ${variantClasses} ${className}`.trim();

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<{ className?: string }>, {
      className: `${combinedClasses} ${(children.props as { className?: string }).className || ""}`.trim(),
    });
  }

  return (
    <button className={combinedClasses} {...rest}>
      {children}
    </button>
  );
};
