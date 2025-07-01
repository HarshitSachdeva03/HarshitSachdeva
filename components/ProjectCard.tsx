import React from 'react';
import type { Project } from '../types';
import { GitHubIcon, ExternalLinkIcon } from './icons';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-secondary rounded-lg shadow-xl overflow-hidden flex flex-col h-full hover:transform hover:-translate-y-1 transition-all duration-300">
      {project.imageUrl && (
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-accent mb-2">{project.title}</h3>
        <p className="text-sm text-light-text mb-1"><span className="font-medium">Category:</span> {project.category}</p>
        {project.advisor && <p className="text-sm text-light-text mb-1"><span className="font-medium">Advisor:</span> {project.advisor}</p>}
        <p className="text-xs text-muted-text mb-3">{project.duration}</p>
        
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-text mb-4 flex-grow">
          {project.descriptionPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        {project.techStack && project.techStack.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-light-text mb-1">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span key={index} className="text-xs bg-primary text-accent px-2 py-1 rounded-full shadow-sm">{tech}</span>
              ))}
            </div>
          </div>
        )}
        
        <div className="mt-auto flex space-x-3 items-center pt-3 border-t border-primary">
          {project.repoLink && (
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-muted-text hover:text-accent transition-colors" aria-label="GitHub Repository">
              <GitHubIcon className="w-5 h-5" />
            </a>
          )}
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-muted-text hover:text-accent transition-colors" aria-label="Live Demo">
              <ExternalLinkIcon className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
