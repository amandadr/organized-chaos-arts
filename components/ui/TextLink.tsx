import type { ComponentPropsWithoutRef, ReactNode } from "react";

type TextLinkProps = ComponentPropsWithoutRef<"a"> & {
  children: ReactNode;
};

export function TextLink({ children, className, ...props }: TextLinkProps) {
  return (
    <a {...props} className={["oca-inline-link", className].filter(Boolean).join(" ")}>
      {children}
    </a>
  );
}
