import * as React from "react";
import { cn } from "@/components/ui/utils";

type ButtonVariant = "default" | "outline" | "ghost";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: string;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "default",
      size,
      className,
      children,
      type = "button",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        {...props}
        className={cn(
          /**- base -**/
          "inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition disabled:pointer-events-none disabled:opacity-50",
          /**- variants -**/
          variant === "default" && "bg-[#ef3d23] text-white hover:bg-[#d63420]",

          variant === "outline" &&
            "border border-[#d5d7da] text-cv-gray-500 hover:bg-gray-100",

          variant === "ghost" && "text-cv-gray-500 hover:bg-gray-100",

          className
        )}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
