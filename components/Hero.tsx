import React from 'react';
import { PROFILE_NAME, PROFILE_HEADLINE, SOCIAL_LINKS } from '../constants';
import { DownloadIcon } from './icons';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://picsum.photos/seed/hero-bg/1920/1080')" }}>
      <div className="absolute inset-0 bg-primary opacity-70"></div>
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-20 animate-fade-in-up">
        <img 
          src="/profile.jpg"
          alt={PROFILE_NAME}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-8 border-4 border-accent shadow-xl" 
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
          <span className="text-light-text">{PROFILE_NAME.split(' ')[0]} </span> 
          <span className="text-accent">{PROFILE_NAME.split(' ').slice(1).join(' ')}</span>
        </h1>
        <p className="text-xl sm:text-2xl text-muted-text mb-8 max-w-xl mx-auto">
          {PROFILE_HEADLINE}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="https://drive.google.com/file/d/1jdUBfQFYKZyTmLdaAD48b9QzObxBCQw-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-dark-text bg-accent hover:bg-sky-500 transition-colors shadow-lg transform hover:scale-105"
          >
            <DownloadIcon className="w-5 h-5 mr-2" />
            Download CV
          </a>
          <div className="flex space-x-4">
            {SOCIAL_LINKS.slice(0,2).map((social) => ( // Show first 2 prominent social links
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-text hover:text-accent transition-colors p-2 bg-secondary rounded-full shadow-md transform hover:scale-110"
                aria-label={social.name}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
