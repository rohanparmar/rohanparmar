"use client";

import React, { useEffect, useState } from 'react';
import { RxGithubLogo, RxLinkedinLogo } from 'react-icons/rx'; // Ensure you have the necessary package for these icons

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

  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
      <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
        <a href='#about-me' className='h-auto w-auto flex flex-row items-center'>
          <span className="font-bold ml-[10px] hidden md:block text-gray-300"> Rohan Parmar</span>
        </a>
        <div className='absolute left-1/2 transform -translate-x-1/2'>
          <div className='flex items-center justify-between w-[500px] h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200'>
            {['about-me', 'work-experience', 'projects'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`cursor-pointer relative ${
                  activeSection === section ? 'text-white' : 'text-gray-200'
                }`}
              >
                {section.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-white transition-all duration-300 ${
                    activeSection === section ? 'opacity-100' : 'opacity-0'
                  }`}
                ></span>
              </a>
            ))}
          </div>
        </div>
        <div className='flex flex-row gap-5'>
          <a href='https://github.com' className='flex flex-row items-center mx-[15px] cursor-pointer text-white'>
            <RxGithubLogo className='h-5 w-5 text-white' />
            <span className='text-[15px] ml-[6px]'>Github</span>
          </a>
          <a href='https://linkedin.com' className='flex flex-row items-center mx-[15px] cursor-pointer text-white'>
            <RxLinkedinLogo className='h-5 w-5 text-white' />
            <span className='text-[15px] ml-[6px]'>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
