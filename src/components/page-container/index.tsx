import { ReactNode } from 'react';

import Header from './header';

type PageContainerProps = {
  contentCenter?: boolean;
  children: ReactNode;
  hasHeader?: boolean;
  background?: string;
};

const PageContainer = ({
  contentCenter,
  hasHeader,
  children,
  background,
}: PageContainerProps) => {
  return (
    <div
      className={`${contentCenter ? 'justify-center items-center' : ''} bg-primary-300 w-screen relative flex flex-col max-w-screen min-h-screen`}
    >
      {background && (
        <img
          alt="login background"
          src={background}
          className="w-full h-full absolute z-0 bg-cover bg-center"
        />
      )}
      {hasHeader && <Header />}
      <div className={`${hasHeader ? '' : ''} px-20 relative flex`}>
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
