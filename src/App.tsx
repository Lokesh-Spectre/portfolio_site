import React, { useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Github, Linkedin, ChevronDown } from 'lucide-react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ExpertisePage from './pages/ExpertisePage';
import TechStackPage from './pages/TechStackPage';
import ProjectsPage from './pages/ProjectsPage';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/expertise" element={<ExpertisePage />} />
        <Route path="/tech-stack" element={<TechStackPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </>
  );
}

export default App;