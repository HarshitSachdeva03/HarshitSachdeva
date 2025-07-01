import React from 'react';
import Section from './Section';
import { SKILLS_DATA } from '../constants';
import type { Skill } from '../types';

const Skills: React.FC = () => {
  const groupedSkills = SKILLS_DATA.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <Section id="skills" title="Technical Skills" className="bg-secondary">
      <div className="space-y-12">
        {Object.entries(groupedSkills).map(([category, skillsInCategory]) => (
          <div key={category}>
            <h3 className="text-2xl font-semibold text-light-text mb-6 text-center md:text-left">{category}</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
              {skillsInCategory.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-primary text-accent px-4 py-2 rounded-lg shadow-md text-sm font-medium hover:bg-sky-700 hover:text-light-text transition-all duration-300 cursor-default"
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
