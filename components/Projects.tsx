import React from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants';
import type { Project } from '../types';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="My Projects" className="bg-primary">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project: Project, index: number) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      {PROJECTS.length === 0 && (
        <p className="text-center text-muted-text">More projects coming soon!</p>
      )}
    </Section>
  );
};

export default Projects;
