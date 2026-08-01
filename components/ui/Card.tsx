import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-brand-blue-100 bg-white p-6 shadow-soft transition-shadow duration-300 shadow-soft-hover sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
