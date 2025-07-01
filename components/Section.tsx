import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16">
          <span className="text-accent">{title.split(' ')[0]}</span>
          {title.split(' ').length > 1 && <span className="text-light-text"> {title.split(' ').slice(1).join(' ')}</span>}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
