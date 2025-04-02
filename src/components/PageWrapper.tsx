import React from 'react';
import { useLocation } from 'react-router-dom';
import LiquidBackground from './LiquidBackground/LiquidBackground';
import Footer from './Footer';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      {!isHomePage && <LiquidBackground />}
      <div className="flex-grow flex flex-col">
        <main className="flex-grow relative">
          {children}

        </main>
        {!isHomePage && (
          <div className="relative">
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
};

export default PageWrapper;