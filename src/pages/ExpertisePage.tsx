import React from 'react';
import { Terminal, Cpu, Monitor } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ExpertisePage: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (tags: string[]) => {
    navigate(`/projects?tags=${tags.join(',')}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50/30 pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Areas of Expertise</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div 
            onClick={() => handleCardClick(['Node.js', 'Express', 'NestJS', 'API'])}
            className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <Terminal className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-blue-900">Backend Development</h3>
            <p className="text-blue-800/80">
              Experienced in building scalable APIs with NestJS and Express, using modern ORMs like Prisma and Sequelize.
            </p>
          </div>
          <div 
            onClick={() => handleCardClick(['ESP32', 'FreeRTOS', 'IoT', 'MQTT'])}
            className="p-8 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl border border-violet-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <Cpu className="w-12 h-12 text-violet-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-violet-900">Embedded Systems</h3>
            <p className="text-violet-800/80">
              Proficient in Arduino and ESP-IDF development, with hands-on experience in FreeRTOS-based applications.
            </p>
          </div>
          <div 
            onClick={() => handleCardClick(['Qt', 'Python', 'Desktop'])}
            className="p-8 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border border-indigo-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <Monitor className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-indigo-900">Desktop Applications</h3>
            <p className="text-indigo-800/80">
              Developed cross-platform applications using Qt framework with Python.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertisePage;