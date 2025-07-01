import React from 'react';
import Section from './Section';
import ExperienceCard from './ExperienceCard';
import { EXPERIENCE_ITEMS } from '../constants';
import type { ExperienceItem } from '../types';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Work Experience">
      <div className="space-y-8">
        {EXPERIENCE_ITEMS.map((item: ExperienceItem, index: number) => (
          <ExperienceCard key={index} item={item} />
        ))}
      </div>
       {EXPERIENCE_ITEMS.length === 0 && (
          <p className="text-center text-muted-text">No professional experience listed yet. Currently seeking opportunities!</p>
        )}
    </Section>
  );
};

export default Experience;
