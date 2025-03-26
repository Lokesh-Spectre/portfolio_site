import React from 'react';
import { Database } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TechStack: React.FC = () => {
  const navigate = useNavigate();

  const technologies = {
    "Backend": [
      "NestJS",
      "ExpressJS",
      "PostgreSQL",
      "MariaDB",
      "Sqlite",
      "Prisma",
      "Sequelize",
      "TypeScript",
      "Node.js",
      "OAuth2 & JWT",
      "Digital Ocean"
    ],
    "Embedded": [
      "Arduino",
      "ESP-IDF",
      "ESPressif",
      "STMicroelectronics",
      "FreeRTOS",
      "C/C++",
      "MQTT"
    ],
    "Desktop": [
      "Qt Framework",
      "Python",
      "SQLite",
      "Cross-platform Development"
    ],
    "Tools & Others": [
      "Git",
      "Docker",
      "Linux",
      "Postman",
      "pgAdmin",
      "Prisma",
      "Nginx"
    ]
  };

  const handleCardClick = (category: string, techs: string[]) => {
    const relevantTags = techs.filter(tech => 
      tech !== 'Cross-platform Development' && 
      !tech.includes('&') &&
      tech !== 'Git' &&
      tech !== 'Docker' &&
      tech !== 'Linux' &&
      tech !== 'Postman' &&
      tech !== 'pgAdmin' &&
      tech !== 'Nginx'
    );
    navigate(`/projects?tags=${relevantTags.join(',')}`);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-50/50 to-violet-50/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center relative">
          <span className="relative inline-block">
            Tech Stack
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-indigo-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(technologies).map(([category, techs]) => (
            <div 
              key={category}
              onClick={() => handleCardClick(category, techs)}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-indigo-50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-100 hover:border-indigo-200 hover:transform hover:-translate-y-1 cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-violet-900">
                <Database className="w-5 h-5 text-violet-600 transition-transform duration-300 group-hover:rotate-180" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-indigo-50 to-violet-50 text-indigo-700 rounded-lg text-sm font-medium transition-all duration-300 hover:from-indigo-100 hover:to-violet-100 hover:shadow-md hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;