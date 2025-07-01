import React from 'react';
import Section from './Section';
import { PROFILE_EMAIL, SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch" className="bg-primary">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-lg text-muted-text mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing.
          Feel free to reach out!
        </p>
        <a
          href={`mailto:${PROFILE_EMAIL}`}
          className="inline-block px-8 py-4 bg-accent text-dark-text text-lg font-semibold rounded-lg shadow-lg hover:bg-sky-500 transition-colors transform hover:scale-105 mb-10"
        >
          Say Hello
        </a>
        <div className="flex justify-center space-x-6">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-text hover:text-accent transition-colors"
              aria-label={social.name}
            >
              <social.icon className="w-8 h-8" />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Contact;
