import { ReactNode } from 'react';

type PageContainerProps = {
  contentCenter?: boolean;
  children: ReactNode;
};

const PageContainer = ({ contentCenter, children }: PageContainerProps) => {
  return (
    <div
      className={`${contentCenter ? 'justify-center items-center' : ''} w-screen relative flex flex-col max-w-screen min-h-screen`}
    >
      {children}
    </div>
  );
};

export default PageContainer;
