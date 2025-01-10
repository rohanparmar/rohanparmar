"use client";

import React from 'react';
import ExperienceCard from '../sub/ExperienceCard';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp } from '@/utils/motion';

const Experience = () => {
  return (
    <div className='relative flex flex-col items-center justify-center py-20 overflow-hidden' id="work-experience">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <motion.h1 
        variants={fadeInUp(0.3)}
        initial="hidden"
        animate="visible"
        className='text-[40px] font-bold text-cyber-neon cyber-text mb-12'
      >
        Experience
      </motion.h1>

      <div className='h-full w-full flex flex-col items-center gap-10 px-10 md:flex-row md:justify-center'>
        <motion.div
          variants={fadeIn(0.4)}
          initial="hidden"
          animate="visible"
        >
          <ExperienceCard
            company='PayAmigo'
            role='Machine Learning Engineer Intern'
            description='Machine Learning Engineer Intern'
            date='July 2024 - Present'
            location='Vancouver, BC, Canada'
          />
        </motion.div>

        <motion.div
          variants={fadeIn(0.5)}
          initial="hidden"
          animate="visible"
        >
          <ExperienceCard
            company='Workday'
            role='Software Engineer Intern'
            description='Software Engineer Intern'
            date='May 2023 - December 2023'
            location='Vancouver, BC, Canada'
          />
        </motion.div>

        <motion.div
          variants={fadeIn(0.6)}
          initial="hidden"
          animate="visible"
        >
          <ExperienceCard
            company='Government of India'
            role='Software Engineer Intern'
            description='Software Engineer Intern'
            date='April 2019 - December 2019'
            location='New Delhi, Delhi, India'
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Experience;
