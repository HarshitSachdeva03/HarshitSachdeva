import React from 'react';
import Section from './Section';
import EducationCard from './EducationCard';
import { ACADEMIC_DETAILS } from '../constants';
import type { AcademicDetail } from '../types';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education History" className="bg-secondary">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ACADEMIC_DETAILS.map((item: AcademicDetail, index: number) => (
          <EducationCard key={index} item={item} />
        ))}
      </div>
    </Section>
  );
};

export default Education;
