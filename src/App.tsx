import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ExpertisePage from './pages/ExpertisePage';
import TechStackPage from './pages/TechStackPage';
import ProjectsPage from './pages/ProjectsPage';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import PageWrapper from './components/PageWrapper';

function App() {
  return (
    <PageWrapper>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/expertise" element={<ExpertisePage />} />
        <Route path="/tech-stack" element={<TechStackPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </PageWrapper>
  );
}

export default App;