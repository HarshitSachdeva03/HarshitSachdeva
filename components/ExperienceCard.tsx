import React from 'react';
import type { ExperienceItem } from '../types';

interface ExperienceCardProps {
  item: ExperienceItem;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ item }) => {
  return (
    <div className="bg-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row gap-6">
      {item.logoUrl && (
        <div className="flex-shrink-0">
          <img src={item.logoUrl} alt={`${item.company} logo`} className="w-16 h-16 rounded-md object-contain bg-light-text p-1" />
        </div>
      )}
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-accent mb-1">{item.role}</h3>
        <p className="text-md font-medium text-light-text mb-1">{item.company}</p>
        <p className="text-sm text-muted-text mb-3">{item.duration}</p>
        <ul className="list-disc list-inside space-y-1 text-muted-text text-sm">
          {item.descriptionPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
