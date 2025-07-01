import React from 'react';
import Section from './Section';
import { ABOUT_ME_TEXT_PARAGRAPHS, ACADEMIC_DETAILS, ACHIEVEMENTS, COURSES_DONE } from '../constants';
import type { AcademicDetail, Achievement, Course } from '../types';
import EducationCard from './EducationCard'; // Assuming EducationCard is suitable for academic details

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me" className="bg-secondary">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-3 space-y-6 text-lg text-muted-text">
          {ABOUT_ME_TEXT_PARAGRAPHS.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">{paragraph}</p>
          ))}
        </div>
        <div className="md:col-span-2 space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-light-text mb-4">Education</h3>
            <div className="space-y-4">
              {ACADEMIC_DETAILS.map((detail: AcademicDetail, index: number) => (
                <EducationCard key={index} item={detail} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-semibold text-center text-light-text mb-8">Key Achievements</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((achievement: Achievement, index: number) => (
            <div key={index} className="bg-primary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-accent mb-2">{achievement.title}</h4>
              <p className="text-sm text-muted-text">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-16">
        <h3 className="text-2xl font-semibold text-center text-light-text mb-8">Relevant Coursework</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {COURSES_DONE.map((course: Course, index: number) => (
            <span key={index} className="bg-primary text-accent text-sm font-medium px-3 py-1.5 rounded-full shadow-md">
              {course.name}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
