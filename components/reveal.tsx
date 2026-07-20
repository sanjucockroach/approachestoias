import type { ComponentPropsWithoutRef, ReactNode } from "react";

type RevealProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
  delay?: number;
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  style,
  ...props
}: RevealProps) {
  return (
    <div
      className={`reveal ${className}`}
      style={{
        ...style,
        "--reveal-stagger": `${Math.min(delay, 0.12) * 40}px`,
      } as React.CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
}
