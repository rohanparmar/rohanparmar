"use client";

import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp } from '@/utils/motion';

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
  skills: string[];
  onClose: () => void;
}

const ProjectDetailsModal = ({ src, title, description, link, skills, onClose }: Props) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed inset-0 z-50 flex items-center justify-center bg-cyber-black/70 backdrop-blur-sm'
    >
      <motion.div 
        variants={fadeInUp(0.3)}
        initial="hidden"
        animate="visible"
        className='cyber-panel relative max-w-3xl w-full mx-4'
      >
        <div className='absolute -inset-1 bg-cyber-neon opacity-10 blur-lg' />
        
        <button 
          onClick={onClose} 
          className='absolute -top-12 right-0 cyber-button'
        >
          Close
        </button>

        <div className='relative z-10 space-y-6'>
          <h1 className='text-3xl font-bold text-cyber-neon mb-4'>{title}</h1>
          
          <div className='flex flex-wrap gap-2'>
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className='bg-cyber-dark border border-cyber-neon text-cyber-neon text-sm font-bold px-3 py-1 rounded-sm'
              >
                {skill}
              </span>
            ))}
          </div>

          <div className='relative h-64 sm:h-96 w-full overflow-hidden cyber-border'>
            <Image 
              src={src} 
              alt={title} 
              fill
              className='object-cover'
            />
          </div>

          <p className='text-cyber-white/90 text-lg leading-relaxed'>{description}</p>

          <a 
            href={link} 
            className='cyber-button inline-block'
            target='_blank' 
            rel='noopener noreferrer'
          >
            View Project
          </a>
        </div>

        <div className='absolute top-0 left-0 w-full h-1 bg-cyber-neon shadow-neon' />
        <div className='absolute bottom-0 left-0 w-full h-1 bg-cyber-neon shadow-neon' />
      </motion.div>
    </motion.div>
  );
}

export default ProjectDetailsModal;
