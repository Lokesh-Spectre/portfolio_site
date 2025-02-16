import React from 'react';
import { Database } from 'lucide-react';

const TechStack: React.FC = () => {
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

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Tech Stack</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-indigo-600" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
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