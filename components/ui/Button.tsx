import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  children: ReactNode;
};

const variantStyles: Record<ButtonVariant, CSSProperties> = {
  primary: {
    background: "var(--color-brand-cool)",
    color: "var(--color-text-inverse)",
    borderColor: "var(--color-brand-cool)",
  },
  secondary: {
    background: "var(--color-surface)",
    color: "var(--color-text)",
    borderColor: "var(--color-border-strong)",
  },
  ghost: {
    background: "transparent",
    color: "var(--color-text)",
    borderColor: "transparent",
  },
};

export function Button({
  variant = "primary",
  children,
  style,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      {...props}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--space-xs)",
        minHeight: "2.75rem",
        paddingInline: "var(--space-lg)",
        paddingBlock: "var(--space-sm)",
        borderWidth: "var(--border-width)",
        borderStyle: "solid",
        borderRadius: "var(--radius-md)",
        fontFamily: "var(--font-family-sans)",
        fontSize: "var(--text-button-size)",
        fontWeight: "var(--text-button-weight)",
        lineHeight: "var(--text-button-line)",
        cursor: props.disabled ? "not-allowed" : "pointer",
        opacity: props.disabled ? 0.6 : 1,
        ...variantStyles[variant],
        ...style,
      }}
    >
      {children}
    </button>
  );
}
