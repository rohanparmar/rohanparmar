"use client";

import React, { useEffect, useState } from 'react';
import { RxGithubLogo, RxLinkedinLogo } from 'react-icons/rx';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about-me', 'work-experience', 'projects'];
      let foundSection = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 65) {
          foundSection = section;
        }
      }

      setActiveSection(foundSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      variants={fadeIn(0.2)}
      initial="hidden"
      animate="visible"
      className='w-full h-[65px] fixed top-0 z-50 bg-cyber-dark/80 backdrop-blur-md border-b border-cyber-neon/20'
    >
      <div className='w-full h-full flex flex-row items-center justify-between m-auto px-10'>
        <a 
          href='#about-me' 
          className='h-auto w-auto flex flex-row items-center' 
          onClick={() => handleLinkClick('about-me')}
        >
          <span className="font-bold text-xl text-cyber-neon hover:shadow-neon transition-all duration-300">
            Rohan Parmar
          </span>
        </a>

        <div className='absolute left-1/2 transform -translate-x-1/2'>
          <nav className='flex items-center justify-between w-[500px] h-auto px-6 py-2 rounded-full bg-cyber-dark/50 border border-cyber-neon/30'>
            {['about-me', 'work-experience', 'projects'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(section);
                }}
                className={`cursor-pointer relative px-4 py-1 transition-all duration-300 ${
                  activeSection === section 
                    ? 'text-cyber-neon shadow-neon' 
                    : 'text-cyber-white hover:text-cyber-neon'
                }`}
              >
                {section.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                {activeSection === section && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-cyber-neon shadow-neon"></span>
                )}
              </a>
            ))}
          </nav>
        </div>

        <div className='flex flex-row gap-6'>
          <a 
            href='https://github.com' 
            className='flex items-center gap-2 text-cyber-white hover:text-cyber-neon transition-colors duration-300'
            target="_blank"
            rel="noopener noreferrer"
          >
            <RxGithubLogo className='h-5 w-5' />
            <span className='text-sm font-medium'>Github</span>
          </a>
          <a 
            href='https://linkedin.com' 
            className='flex items-center gap-2 text-cyber-white hover:text-cyber-neon transition-colors duration-300'
            target="_blank"
            rel="noopener noreferrer"
          >
            <RxLinkedinLogo className='h-5 w-5' />
            <span className='text-sm font-medium'>LinkedIn</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
