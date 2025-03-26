// src\pages\ExpertisePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Terminal,
  Cpu,
  Monitor,
  Brain,
  Database,
  Cloud,
  Award,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

const ExpertisePage: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (tags: string[]) => {
    navigate(`/projects?tags=${tags.join(',')}`);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const skills = [
    'JavaScript', 'TypeScript', 'Python', 'C/C++', 'React',
    'Node.js', 'NestJS', 'ESP32', 'FreeRTOS', 'MQTT',
    'PostgreSQL', 'Redis', 'Docker', 'Linux', 'Git'
  ];

  const timeline = [
    {
      year: '2018',
      event: 'Embedded Systems (Hobby)',
      description: 'Started with Arduino Uno, Nano, and ESP32; built several DIY projects.'
    },
    {
      year: '2020',
      event: 'Python & Linux',
      description: 'Mastered Python; developed desktop applications and utilities using Qt; learned Linux system administration.'
    },
    {
      year: '2022',
      event: 'Python Desktop Development',
      description: 'Built multiple desktop applications and automation tools using Python and PyQt for enhanced user interfaces.'
    },
    {
      year: '2023',
      event: 'Full Stack Development',
      description: 'Built scalable web applications with React and Node.js.'
    },
    {
      year: '2024',
      event: 'IoT Solutions',
      description: 'Developed enterprise IoT monitoring systems.'
    }
  ];
  
  const certifications = [
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024'
    },
    {
      title: 'Professional Scrum Master I',
      issuer: 'Scrum.org',
      date: '2023'
    }
  ];

  const exploringSkills = [
    { name: 'Embedded Frameworks', description: 'Exploring STMicroelectronics CubeIDE and other alternatives' },
    { name: 'Backend Frameworks', description: 'Diving deeper into advanced backend technologies' },
    { name: 'PyTorch ML', description: 'Experimenting with deep learning models and AI applications' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50/30 pt-24">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 mb-16"
      >
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Areas of Expertise</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Specialized in creating robust solutions across multiple domains, from embedded systems
          to scalable cloud applications.
        </p>
      </motion.div>

      {/* Core Skills */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-4 mb-24"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">Core Technologies</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              variants={item}
              className="px-4 py-2 bg-white rounded-full text-indigo-600 font-medium shadow-sm hover:shadow-md transition-shadow"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Main Expertise Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-4 mb-24"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            variants={item}
            onClick={() => handleCardClick(['Node.js', 'Express', 'NestJS', 'API'])}
            className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-indigo-50"
          >
            <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
              <Terminal className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Backend Development</h3>
            <p className="text-gray-600 mb-6">
              Building scalable APIs and microservices with NestJS, Express, and modern ORMs.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'NestJS', 'PostgreSQL'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={item}
            onClick={() => handleCardClick(['ESP32', 'FreeRTOS', 'IoT', 'MQTT'])}
            className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-indigo-50"
          >
            <div className="h-12 w-12 bg-violet-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-violet-600 transition-colors">
              <Cpu className="w-6 h-6 text-violet-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Embedded Systems</h3>
            <p className="text-gray-600 mb-6">
              Developing IoT solutions with ESP32, FreeRTOS, and real-time applications.
            </p>
            <div className="flex flex-wrap gap-2">
              {['ESP32', 'FreeRTOS', 'MQTT'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-violet-50 text-violet-600 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={item}
            onClick={() => handleCardClick(['Qt', 'Python', 'Desktop'])}
            className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-indigo-50"
          >
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
              <Monitor className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Desktop Applications</h3>
            <p className="text-gray-600 mb-6">
              Creating cross-platform applications with Qt and Python.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Qt', 'Python', 'SQLite'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Timeline Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto px-4 mb-24"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">Journey Timeline</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-indigo-200"></div>
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="ml-12 mb-8 relative"
            >
              <div className="absolute -left-12 top-0 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">{item.year}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{item.event}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Certifications Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto px-4 mb-24"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">Certifications & Achievements</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 bg-white rounded-xl shadow-md border border-indigo-50"
            >
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-indigo-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">{cert.title}</h3>
                  <p className="text-gray-600">{cert.issuer}</p>
                  <p className="text-sm text-gray-500">{cert.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Exploring Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto px-4 mb-24"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">
          <span className="flex items-center gap-2">
            What I'm Exploring
            <Sparkles className="w-5 h-5 text-yellow-500" />
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {exploringSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 bg-gradient-to-br from-indigo-50 to-violet-50 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                {skill.name}
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-gray-600 text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ExpertisePage;