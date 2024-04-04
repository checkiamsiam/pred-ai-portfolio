import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";

const Button = ({
  children,
  transparent = false,
  onClick,
  href,
}: {
  children: React.ReactNode;
  transparent?: boolean;
  onClick?: () => void;
  href?: string;
}) => {
  return (
    <>
      {!href ? (
        <button
          onClick={onClick}
          className={cn(
            "min-h-11 min-w-36 px-5  rounded-full flex justify-center items-center hover:animate-pulse ",
            transparent ? "border-2 border-foreground" : "bg-foreground"
          )}
        >
          <span className={cn(transparent ? "text-foreground" : "text-background")}>{children}</span>
        </button>
      ) : (
        <Link
          href={href}
          onClick={onClick}
          className={cn(
            "min-h-11 min-w-36 px-5  rounded-full flex justify-center items-center hover:animate-pulse ",
            transparent ? "border-2 border-foreground" : "bg-foreground"
          )}
        >
          <span className={cn(transparent ? "text-foreground" : "text-background")}>{children}</span>
        </Link>
      )}
    </>
  );
};

export default Button;
