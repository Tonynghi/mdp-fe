import { ReactNode } from 'react';

type HeadingProps = {
  children: ReactNode;
  className?: string;
};

export const H1 = ({ children, className }: HeadingProps) => {
  return <h1 className={`${className} text-4xl font-bold `}>{children}</h1>;
};
