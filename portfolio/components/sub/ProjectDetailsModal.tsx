"use client";

import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp } from '@/utils/motion';

interface Props {
  src: string;
  title: string;
  shortDescription: string;
  description: string;
  link: string;
  skills: string[];
  onClose: () => void;
}

const ProjectDetailsModal = ({ src, title, shortDescription, description, link, skills, onClose }: Props) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm'
    >
      <motion.div 
        variants={fadeInUp(0.3)}
        initial="hidden"
        animate="visible"
        className='relative max-w-4xl w-full mx-4'
      >
        {/* Left color bar */}
        <div className='absolute left-0 top-0 w-1 h-full bg-[#C6FE01]' />
        
        {/* Main modal content */}
        <div className='relative ml-1 bg-[#171616] border border-[#C6FE01]/50'>
          {/* Close button */}
          <button 
            onClick={onClose} 
            className='absolute -top-12 right-0 px-4 py-2 bg-[#171616] text-[#C6FE01] border border-[#C6FE01]/50 hover:bg-[#C6FE01]/10 transition-colors duration-300'
          >
            CLOSE
          </button>

          <div className='p-6 space-y-6'>
            {/* Header */}
            <div className='flex justify-between items-start border-b border-[#C6FE01]/20 pb-4'>
              <h1 className='text-3xl font-bold text-[#C6FE01] tracking-wider'>{title}</h1>
              <div className='flex items-center space-x-4'>
                <div className='text-right'>
                  <div className='text-white/60 text-sm'>TYPE</div>
                  <div className='text-[#C6FE01]'>PROJECT</div>
                </div>
                <div className='text-right'>
                  <div className='text-white/60 text-sm'>STACK</div>
                  <div className='text-[#C6FE01]'>{skills.length}</div>
                </div>
              </div>
            </div>

            {/* Main content grid */}
            <div className='grid grid-cols-5 gap-6'>
              {/* Left column - Image and description */}
              <div className='col-span-3 space-y-4'>
                <div className='relative h-[300px] border border-[#C6FE01]/20'>
                  <Image 
                    src={src} 
                    alt={title} 
                    fill
                    className='object-cover'
                  />
                </div>
                <p className='text-white/80 text-lg leading-relaxed'>{description}</p>
              </div>

              {/* Right column - Tech stack and stats */}
              <div className='col-span-2 space-y-6'>
                {/* Tech stack section */}
                <div>
                  <h3 className='text-[#C6FE01] text-lg mb-3'>TECH STACK</h3>
                  <div className='grid grid-cols-2 gap-2'>
                    {skills.map((skill, index) => (
                      <div 
                        key={index}
                        className='flex items-center space-x-2 p-2 bg-[#C6FE01]/5 border border-[#C6FE01]/20'
                      >
                        <span className='w-2 h-2 bg-[#C6FE01]' />
                        <span className='text-white/90'>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats section */}
                <div>
                  <h3 className='text-[#C6FE01] text-lg mb-3'>STATS</h3>
                  <div className='space-y-2'>
                    <div className='flex justify-between items-center p-2 border-b border-[#C6FE01]/20'>
                      <span className='text-white/60'>Complexity</span>
                      <div className='flex space-x-1'>
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-4 h-1 ${i < 3 ? 'bg-[#C6FE01]' : 'bg-[#C6FE01]/20'}`} 
                          />
                        ))}
                      </div>
                    </div>
                    <div className='flex justify-between items-center p-2 border-b border-[#C6FE01]/20'>
                      <span className='text-white/60'>Development Time</span>
                      <div className='flex space-x-1'>
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-4 h-1 ${i < 4 ? 'bg-[#C6FE01]' : 'bg-[#C6FE01]/20'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action button */}
                <a 
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='block w-full text-center px-6 py-3 bg-[#C6FE01]/10 text-[#C6FE01] border border-[#C6FE01]/50 hover:bg-[#C6FE01]/20 transition-colors duration-300'
                >
                  VIEW PROJECT
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectDetailsModal;
