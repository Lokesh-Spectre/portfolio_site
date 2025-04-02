import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Code, Server, Cpu, PenTool as Tool, Database, Search, X, ArrowRight, Monitor } from 'lucide-react';

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

const categoryIcons = {
  Backend: <Server className="w-6 h-6" />,
  Embedded: <Cpu className="w-6 h-6" />,
  Desktop: <Monitor className="w-6 h-6" />,
  "Tools & Others": <Tool className="w-6 h-6" />
};

const categoryColors = {
  Backend: 'from-blue-50 to-indigo-50 text-blue-600',
  Embedded: 'from-violet-50 to-purple-50 text-violet-600',
  Desktop: 'from-emerald-50 to-teal-50 text-emerald-600',
  "Tools & Others": 'from-amber-50 to-yellow-50 text-amber-600'
};

interface TechnologyDetail {
  name: string;
  description: string;
  projects: string[];
}

const TechStackPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Example technology details (you can expand this)
  const technologyDetails: Record<string, TechnologyDetail> = {
    "NestJS": {
      name: "NestJS",
      description: "Progressive Node.js framework for building efficient and scalable server-side applications",
      projects: ["Guardian Eye", "IoT Dashboard"]
    },
    "ESP-IDF": {
      name: "ESP-IDF",
      description: "Official development framework for ESP32 microcontrollers",
      projects: ["QuickDisplay", "Smart Home Hub"]
    },
    "Qt Framework": {
      name: "Qt Framework",
      description: "Cross-platform application development framework",
      projects: ["EZpass", "Desktop Analytics"]
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50/30 pt-24 px-4 pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Tech Stack</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            A comprehensive overview of the technologies I work with, from backend development to embedded systems.
          </p>
        </motion.div>

        {/* Category Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 mb-12 md:grid-cols-2 lg:grid-cols-4"
        >
          {Object.entries(technologies).map(([category, techs]) => (
            <motion.div
              key={category}
              variants={item}
              className={`bg-gradient-to-br ${categoryColors[category]} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
              onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
            >
              <div className="flex items-center gap-3 mb-4">
                {categoryIcons[category]}
                <h3 className="text-lg font-semibold">{category}</h3>
              </div>
              <div className="h-32 overflow-y-auto pr-2" style={{
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(156, 163, 175, 0.5) transparent',
              }}>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Search Section */}
        <div className="sticky top-20 z-10 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm mb-8">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search technologies..."
              className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Detailed Tech Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {Object.entries(technologies)
            .filter(([category]) => !selectedCategory || category === selectedCategory)
            .flatMap(([category, techs]) =>
              techs
                .filter(tech => 
                  tech.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map(tech => (
                  <motion.div
                    key={tech}
                    variants={item}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech}</h3>
                    <p className="text-sm text-gray-500 mb-2">{category}</p>
                    {technologyDetails[tech] && (
                      <>
                        <p className="text-gray-600 mb-4">{technologyDetails[tech].description}</p>
                        <div className="flex flex-wrap gap-2">
                          {technologyDetails[tech].projects.map(project => (
                            <span
                              key={project}
                              className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded-md text-sm"
                            >
                              {project}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </motion.div>
                ))
            )}
        </motion.div>
      </div>
    </div>
  );
};

export default TechStackPage;