import React from 'react';
import { useLocation } from 'react-router-dom';
import LiquidBackground from './LiquidBackground/LiquidBackground';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="relative min-h-screen">
      {!isHomePage && <LiquidBackground />}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;