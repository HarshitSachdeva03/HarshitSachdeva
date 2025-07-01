import React from 'react';
import type { AcademicDetail } from '../types'; // Using AcademicDetail type

interface EducationCardProps {
  item: AcademicDetail;
}

const EducationCard: React.FC<EducationCardProps> = ({ item }) => {
  return (
    <div className="bg-primary p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-lg font-semibold text-accent">{item.degree}</h3>
      <p className="text-sm font-medium text-light-text">{item.institute}</p>
      <p className="text-xs text-muted-text mt-1">{item.year} | {item.grade}</p>
    </div>
  );
};

export default EducationCard;
