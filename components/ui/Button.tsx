import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-brand-navy-700 text-white hover:bg-brand-navy-900 shadow-soft shadow-soft-hover",
  secondary:
    "bg-white text-brand-navy-700 border border-brand-blue-300 hover:bg-brand-blue-50 shadow-soft shadow-soft-hover",
  ghost: "text-brand-navy-700 hover:bg-brand-blue-50",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 sm:text-base ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
