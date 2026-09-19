import clsx from "clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "ochre" | "inverse";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  children: ReactNode;
};

const variantClass: Record<ButtonVariant, string> = {
  primary: "oca-btn oca-btn-primary",
  secondary: "oca-btn oca-btn-secondary",
  ghost: "oca-btn oca-btn-ghost",
  ochre: "oca-btn oca-btn-ochre",
  inverse: "oca-btn oca-btn-inverse",
};

export function Button({
  variant = "primary",
  children,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(variantClass[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
