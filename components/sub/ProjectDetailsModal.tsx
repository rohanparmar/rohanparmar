"use client";

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/motion';

interface Props {
  src: string;
  title: string;
  shortDescription: string;
  description: string;
  link: string;
  skills: string[];
  onClose: () => void;
}

const ProjectDetailsModal = ({ src, title, description, link, onClose }: Props) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4'
    >
      <motion.div 
        variants={fadeInUp(0.3)}
        initial="hidden"
        animate="visible"
        className='relative w-full max-w-4xl max-h-[90vh] overflow-y-auto'
      >
        {/* Left color bar */}
        <div className='absolute left-0 top-0 w-1 h-full bg-[#00E6E6]' />
        
        {/* Main modal content */}
        <div className='relative ml-1 bg-[#171616] border border-[#00E6E6]/50'>
          {/* Close button - moved inside and made sticky */}
          <div className='sticky top-0 z-10 flex justify-end bg-[#171616] border-b border-[#00E6E6]/50'>
            <button 
              onClick={onClose} 
              className='px-4 py-2 text-[#00E6E6] hover:bg-[#00E6E6]/10 transition-colors duration-300 text-sm md:text-base'
            >
              CLOSE [×]
            </button>
          </div>

          <div className='p-4 md:p-6 space-y-4 md:space-y-6'>
            {/* Header */}
            <div className='flex flex-col md:flex-row justify-between items-start border-b border-[#00E6E6]/20 pb-4'>
              <div>
                <h1 className='text-2xl md:text-3xl font-bold text-[#00E6E6] tracking-wider mb-2'>{title}</h1>
                <a 
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-[#C6FE01] hover:brightness-110 transition-all duration-300 text-sm md:text-base'
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Main content */}
            <div className='space-y-4'>
              {/* Image */}
              <div className='relative h-48 md:h-[300px] border border-[#00E6E6]/20'>
                <Image 
                  src={src} 
                  alt={title} 
                  fill
                  className='object-cover'
                />
              </div>

              {/* Description */}
              <div className='relative'>
                <div className='absolute -left-3 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[#00E6E6] to-transparent' />
                <div className='text-white/80 text-sm md:text-lg leading-relaxed pl-4 whitespace-pre-line'>
                  {description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectDetailsModal;
