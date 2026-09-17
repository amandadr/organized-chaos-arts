import type { ComponentPropsWithoutRef, ReactNode } from "react";

type TextLinkProps = ComponentPropsWithoutRef<"a"> & {
  children: ReactNode;
};

export function TextLink({ children, style, ...props }: TextLinkProps) {
  return (
    <a
      {...props}
      style={{
        color: "var(--color-link)",
        fontWeight: 500,
        textUnderlineOffset: "0.2em",
        ...style,
      }}
    >
      {children}
    </a>
  );
}
