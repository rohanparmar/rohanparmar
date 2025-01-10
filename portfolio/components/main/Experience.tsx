"use client";

import React from 'react';
import ExperienceCard from '../sub/ExperienceCard';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp } from '@/utils/motion';

const Experience = () => {
  return (
    <div className='relative flex flex-col items-center justify-center'>
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#17151e]">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(to_right,#FF008033_1px,transparent_1px),linear-gradient(to_bottom,#FF008033_1px,transparent_1px)]" style={{ backgroundSize: '24px 24px' }} />
        </div>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00E6E615] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF008010] to-transparent" />
      </div>
      
      {/* Header */}
      <div className='relative mb-10 md:mb-20 px-4 md:px-0'>
        <motion.div 
          variants={fadeInUp(0.3)}
          initial="hidden"
          animate="visible"
          className='flex items-center gap-2 md:gap-4'
        >
          <div className='w-10 md:w-20 h-1 bg-gradient-to-r from-[#FF0080] to-transparent' />
          <h1 className='text-[28px] md:text-[40px] font-bold text-[#FF0080] tracking-wider'>EXPERIENCE</h1>
          <div className='w-10 md:w-20 h-1 bg-gradient-to-l from-[#FF0080] to-transparent' />
        </motion.div>
        <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 md:w-32 h-1 bg-gradient-to-r from-transparent via-[#00E6E6] to-transparent' />
      </div>

      {/* Content container */}
      <div className='w-full max-w-[1200px] mx-auto px-4 md:px-8'>
        {/* Experience cards */}
        <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-20 gap-y-16 px-10 relative max-w-[1600px] mx-auto'>
          <motion.div
            variants={fadeIn(0.4)}
            initial="hidden"
            animate="visible"
            className='flex justify-center'
          >
            <ExperienceCard
              company='PayAmigo'
              role='Machine Learning Engineer Intern'
              description='Working on developing and implementing machine learning models for fraud detection and risk assessment in financial transactions. Collaborating with the data science team to improve model accuracy and efficiency.'
              date='July 2024 - Present'
              location='Vancouver, BC, Canada'
            />
          </motion.div>

          <motion.div
            variants={fadeIn(0.5)}
            initial="hidden"
            animate="visible"
            className='flex justify-center'
          >
            <ExperienceCard
              company='Workday'
              role='Software Engineer Intern'
              description='Developed and maintained enterprise-level software solutions. Worked on improving system performance and implementing new features for the platform.'
              date='May 2023 - December 2023'
              location='Vancouver, BC, Canada'
            />
          </motion.div>

          <motion.div
            variants={fadeIn(0.6)}
            initial="hidden"
            animate="visible"
            className='flex justify-center'
          >
            <ExperienceCard
              company='Government of India'
              role='Software Engineer Intern'
              description='Contributed to the development of government digital infrastructure projects. Focused on creating efficient and scalable solutions for public services.'
              date='April 2019 - December 2019'
              location='New Delhi, Delhi, India'
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
