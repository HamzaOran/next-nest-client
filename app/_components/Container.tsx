// components/Container.tsx

import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="max-w-5xl mx-auto ">{children}</div>;
};

export default Container;
