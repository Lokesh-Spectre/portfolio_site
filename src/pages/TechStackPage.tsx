import React from 'react';
import TechStack from '../components/TechStack';

const TechStackPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50/30 pt-24">
      <div className="max-w-4xl mx-auto">
        {/* <h1 className="text-4xl font-bold text-gray-900 mb-12 px-4">Tech Stack</h1> */}
        <TechStack />
      </div>
    </div>
  );
};

export default TechStackPage;