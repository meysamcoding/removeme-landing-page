import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`mx-auto max-w-[1374px] px-6 ${className}`}>
      {children}
    </div>
  );
};

export default Container;