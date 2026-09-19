import Link from "next/link";
import clsx from "clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ochre" | "ghost" | "inverse";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "children" | "className">;

const variants: Record<Variant, string> = {
  primary: "oca-btn oca-btn-primary",
  secondary: "oca-btn oca-btn-secondary",
  ochre: "oca-btn oca-btn-ochre",
  ghost: "oca-btn oca-btn-ghost",
  inverse: "oca-btn oca-btn-inverse",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link href={href} className={clsx(variants[variant], className)} {...props}>
      {children}
    </Link>
  );
}
