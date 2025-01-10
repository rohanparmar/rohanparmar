"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/motion';

interface Props {
  company: string;
  role?: string;
  description: string;
  date?: string;
  location?: string;
  onClose: () => void;
}

const ExperienceDetailsModal = ({ company, role, description, date, location, onClose }: Props) => {
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
        <div className='absolute left-0 top-0 w-1 h-full bg-[#FF0080]' />
        
        {/* Main modal content */}
        <div className='relative ml-1 bg-[#171616] border border-[#FF0080]/50'>
          {/* Close button - moved inside and made sticky */}
          <div className='sticky top-0 z-10 flex justify-end bg-[#171616] border-b border-[#FF0080]/50'>
            <button 
              onClick={onClose} 
              className='px-4 py-2 text-[#FF0080] hover:bg-[#FF0080]/10 transition-colors duration-300 text-sm md:text-base'
            >
              CLOSE [×]
            </button>
          </div>

          <div className='p-4 md:p-6 space-y-4 md:space-y-6'>
            {/* Header */}
            <div className='flex flex-col md:flex-row justify-between items-start border-b border-[#FF0080]/20 pb-4'>
              <div>
                <h1 className='text-2xl md:text-3xl font-bold text-[#FF0080] tracking-wider mb-2'>{company}</h1>
                <h2 className='text-xl text-[#00E6E6] tracking-wide'>{role}</h2>
              </div>
              <div className='flex flex-col items-end mt-4 md:mt-0'>
                <div className='text-white/60 text-sm md:text-base'>{date}</div>
                <div className='text-white/60 text-sm md:text-base'>{location}</div>
              </div>
            </div>

            {/* Main content */}
            <div className='space-y-4'>
              {/* Description */}
              <div className='relative'>
                <div className='absolute -left-3 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[#FF0080] to-transparent' />
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

export default ExperienceDetailsModal; 