import React from 'react';
import { Github, Linkedin, Mail, Terminal, Database, Cpu, Monitor, ChevronDown } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import TechStack from './components/TechStack';

function App() {
  const projects = [
    {
      "title": "QuickDisplay",
      "description":"A versatile LED matrix clock that can show system metrics, notifications, or custom data from a Linux PC. Its MQTT API enables seamless integration with other applications, making it a dynamic desktop companion.",
      "tags": ["ESP32", "MAX7219", "ESP IDF","FreeRTOS", "IoT", "MQTT"],
      "githubUrl": "https://github.com/Lokesh-Spectre/quickDisplay", 
      "type": "Embedded"
    },{
      "title": "JEE-Mains-Score-Calsee",
      "description": "A tool to calculate and analyze JEE-Mains scores using the official answer key before results are released.",
      "tags": ["Python", "Automation", "Exam Score Calculator"],
      "githubUrl": "https://github.com/Lokesh-Spectre/JEE-Mains-Score-Calsee", 
      "type": "Utility"
    },{
      "title": "EZpass",
      "description": "An open-source password manager with a Qt-based GUI and a Chrome extension for autofilling credentials. Uses strong encryption for secure storage.",
      "tags": ["Python", "Qt", "Cryptography", "Chrome Extension", "Security","JavaScript"],
      "githubUrl": "#", 
      "type": "Desktop"
    },{
      "title": "ASCII_ART_KEYBOARD",
      "description": "A creative typing experience that transforms every keystroke into stylized 5x5 ASCII art, bringing a unique flair to chat rooms and text inputs everywhere.",
      "tags": ["ASCII Art", "Keyboard Automation", "pynput", "Creative Typing"],
      "githubUrl": "https://github.com/Lokesh-Spectre/ASCII_ART_KEYBOARD", 
      "type": "Utility"
    },{
      "title": "cosmoDash",
      "description": "A sleek and customizable homepage for your home server, built with React and Node.js. Easily manage and access self-hosted services from one place.",
      "tags": ["React", "Node.js", "Express", "Dashboard", "Self-Hosting"],
      "githubUrl": "https://github.com/Lokesh-Spectre/cosmoDash", 
      "type": "Web"
    },{
      "title": "Celestial Catalogue",
      "description": "A retro-style, menu-driven program for exploring stars and constellations. Find celestial objects, their properties, and view visible constellations from your location in real time.",
      "tags": ["Python", "Astronomy", "Data Visualization", "Retro UI"],
      "githubUrl": "https://github.com/Lokesh-Spectre/celestial_catalogue",
      "type": "Utility"
    }
    
];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col justify-center relative bg-gradient-to-br from-blue-50 to-indigo-50 px-4">
        <div className="max-w-4xl mx-auto w-full">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="text-indigo-600">LOKESHWARAN P</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl">
            A second-year Computer Science student passionate about backend development,
            embedded systems, and creating efficient software solutions.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/Lokesh-Spectre" className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
              <Github size={20} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/lokeshwaran-prithivirajan-25a22128b" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-gray-400" />
        </div>
      </header>

      {/* Expertise Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Areas of Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-blue-50 rounded-lg">
              <Terminal className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p className="text-gray-600">
                Experienced in building scalable APIs with NestJS and Express, using modern ORMs like Prisma and Sequelize.
              </p>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg">
              <Cpu className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Embedded Systems</h3>
              <p className="text-gray-600">
                Proficient in Arduino and ESP-IDF development, with hands-on experience in FreeRTOS-based applications.
              </p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <Monitor className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Desktop Applications</h3>
              <p className="text-gray-600">
                Developed cross-platform applications using Qt framework with Python.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>© 2024 LOKESHWARAN P. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;