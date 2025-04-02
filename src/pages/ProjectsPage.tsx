// src\pages\ProjectsPage.tsx
import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';

export const projects = [
  {
    "title": "QuickDisplay",
    "description":"A versatile LED matrix clock that can show system metrics, notifications, or custom data from a Linux PC. Its MQTT API enables seamless integration with other applications, making it a dynamic desktop companion.",
    "tags": ["ESP32", "MAX7219", "ESP IDF","FreeRTOS", "IoT", "MQTT"],
    "githubUrl": "https://github.com/Lokesh-Spectre/quickDisplay", 
    "type": "Embedded"
  },
  {
    "title": "JEE-Mains-Score-Calsee",
    "description": "A tool to calculate and analyze JEE-Mains scores using the official answer key before results are released.",
    "tags": ["Python", "Automation", "Exam Score Calculator"],
    "githubUrl": "https://github.com/Lokesh-Spectre/JEE-Mains-Score-Calsee", 
    "type": "Utility"
  },
  {
    "title": "EZpass",
    "description": "An open-source password manager with a Qt-based GUI and a Chrome extension for autofilling credentials. Uses strong encryption for secure storage.",
    "tags": ["Python", "Qt", "Cryptography", "Chrome Extension", "Security","JavaScript"],
    "githubUrl": "#", 
    "type": "Desktop"
  },
  {
    "title": "ASCII_ART_KEYBOARD",
    "description": "A creative typing experience that transforms every keystroke into stylized 5x5 ASCII art, bringing a unique flair to chat rooms and text inputs everywhere.",
    "tags": ["ASCII Art", "Keyboard Automation", "pynput", "Creative Typing"],
    "githubUrl": "https://github.com/Lokesh-Spectre/ASCII_ART_KEYBOARD", 
    "type": "Utility"
  },
  {
    "title": "cosmoDash",
    "description": "A sleek and customizable homepage for your home server, built with React and Node.js. Easily manage and access self-hosted services from one place.",
    "tags": ["React", "Node.js", "Express", "Dashboard", "Self-Hosting"],
    "githubUrl": "https://github.com/Lokesh-Spectre/cosmoDash", 
    "type": "Web"
  },
  {
    "title": "Celestial Catalogue",
    "description": "A retro-style, menu-driven program for exploring stars and constellations. Find celestial objects, their properties, and view visible constellations from your location in real time.",
    "tags": ["Python", "Astronomy", "Data Visualization", "Retro UI"],
    "githubUrl": "https://github.com/Lokesh-Spectre/celestial_catalogue",
    "type": "Utility"
  }
];

const ProjectsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedTags, setSelectedTags] = useState<string[]>(
    searchParams.get('tags')?.split(',').filter(Boolean) || []
  );

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tags = params.get('tags')?.split(',').filter(Boolean) || [];
    setSelectedTags(tags);
  }, [location]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value) {
      searchParams.set('search', value);
    } else {
      searchParams.delete('search');
    }
    setSearchParams(searchParams);
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => {
      const newTags = prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag];
      
      if (newTags.length > 0) {
        searchParams.set('tags', newTags.join(','));
      } else {
        searchParams.delete('tags');
      }
      setSearchParams(searchParams);
      return newTags;
    });
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTags([]);
    setSearchParams({});
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = searchTerm === '' || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesTags = selectedTags.length === 0 ||
      selectedTags.some(tag => project.tags.includes(tag));

    return matchesSearch && matchesTags;
  });

  const allTags = Array.from(
    new Set(projects.flatMap(project => project.tags))
  ).sort();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50/30 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Featured Projects</h1>
          {(searchTerm || selectedTags.length > 0) && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              <X size={20} />
              Clear filters
            </button>
          )}
        </div>

        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search projects by name, description, or tags..."
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Filter by tags:</h2>
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedTags.includes(tag)
                    ? 'bg-indigo-600 text-white'
                    : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
          {filteredProjects.length === 0 && (
            <div className="col-span-2 text-center py-12 text-gray-500">
              No projects found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;