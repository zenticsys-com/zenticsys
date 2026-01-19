import { cn } from "@/components/ui/utils";
import React from "react";

type PropsType = React.ComponentProps<"button"> & {
  text: string;
  icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  iconPlacement?: "before" | "after";
};

const ZtsButton: React.FC<PropsType> = ({
  text,
  icon,
  iconPlacement,
  className,
  type = "button",
  ...rest
}) => {
  return (
    <button
      type={type}
      {...rest}
      className={cn(
        "px-5 py-2.5 flex items-center gap-2  border transition duration-300 border-[#d5d7da] font-semibold shadow cursor-pointer justify-center",
        iconPlacement === "after" && "flex-row-reverse",
        className,
      )}
    >
      {icon && React.cloneElement(icon)}
      <span>{text}</span>
    </button>
  );
};

export default ZtsButton;
