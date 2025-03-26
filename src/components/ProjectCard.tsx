import React from 'react';
import { Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  type: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  githubUrl,
  type
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-all border border-indigo-50">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-medium">
          {type}
        </span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={githubUrl}
        className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-800 transition-colors font-medium"
      >
        <Github size={20} />
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectCard;