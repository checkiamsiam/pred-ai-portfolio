import { cn } from "@/utils/cn";
import React from "react";

const Button = ({ children, transparent = false }: { children: React.ReactNode; transparent?: boolean }) => {
  return (
    <button
      className={cn(
        "min-h-11 min-w-36 px-5  rounded-full flex justify-center items-center hover:animate-pulse ",
        transparent ? "border-2 border-foreground" : "bg-foreground"
      )}
    >
      <span className={cn(transparent ? "text-foreground" : "text-background")}>{children}</span>
    </button>
  );
};

export default Button;
