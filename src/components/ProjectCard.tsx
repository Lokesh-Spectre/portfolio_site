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
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
          {type}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={githubUrl}
        className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
      >
        <Github size={20} />
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectCard;