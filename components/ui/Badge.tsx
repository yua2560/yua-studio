import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-brand-purple-100 px-3 py-1 text-xs font-medium text-brand-navy-700 ${className}`}
    >
      {children}
    </span>
  );
}
