import React from 'react';
import ExperienceCard from '../sub/ExperienceCard';

const Experience = () => {
  return (
    <div className='flex flex-col items-center justify-center py-4 -mt-10' id="work-experience">
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-4'>
        Experience
      </h1>
      <div className='h-full w-full flex flex-col items-center gap-10 px-10 md:flex-row md:justify-center'>
        <ExperienceCard
          company='PayAmigo'
          role='Machine Learning Engineer Intern'
          description='Machine Learning Engineer Intern'
          date='July 2024 - Present'
          location='Vancouver, BC, Canada'
        />
        <ExperienceCard
          company='Workday'
          role='Software Engineer Intern'
          description='Software  Engineer Intern'
          date='May 2023 - December 2023'
          location='Vancouver, BC, Canada'
        />
        <ExperienceCard
          company='Government of India'
          role='Software Engineer Intern'
          description='Software Engineer Intern'
          date='April 2019 - December 2019'
          location='New Delhi, Delhi, India'
        />
      </div>
    </div>
  );
}

export default Experience;
