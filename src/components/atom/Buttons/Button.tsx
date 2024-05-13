import React, { ReactNode } from "react";
import clsx from "clsx";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "primaryArrow"
  | "secondaryArrow"
  | "default";

export interface ButtonProps {
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
}

export function Button({
  variant = "primary",
  children,
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const buttonClasses = clsx(className, {
    "primary-cta__button": variant === "primary" || variant === "default",
    "secondary-cta__button": variant === "secondary",
    "primary-arrow-cta__button": variant === "primaryArrow",
    "secondary-arrow-cta__button": variant === "secondaryArrow",
  });

  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      type={type}
    >
      {!!children && <span className="peer font-medium">{children}</span>}
    </button>
  );
}
