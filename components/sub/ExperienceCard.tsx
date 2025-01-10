import React from 'react';

interface Props {
  company: string;
  role?: string;
  shortDescription: string;
  description: string;
  date?: string;
  location?: string;
  onClick: () => void;
}

const ExperienceCard = ({ company, role, shortDescription, description, date, location, onClick }: Props) => {
  return (
    <div className='relative w-full max-w-[400px] h-[400px] md:h-[500px]'>
      {/* Left color bar */}
      <div className='absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#FF0080] via-[#00E6E6] to-[#FF0080]' />
      
      {/* Main card */}
      <div className='relative ml-1 h-full bg-gradient-to-br from-[#1a1f2e] to-[#17151e] border border-[#FF0080]/30 p-4 md:p-6'>
        {/* Company and Role */}
        <div className='mb-3 md:mb-4'>
          <h3 className='text-[#FF0080] text-xl md:text-2xl font-medium tracking-wider mb-1 md:mb-2'>{company}</h3>
          <p className='text-[#00E6E6] text-sm md:text-base font-medium'>{role}</p>
        </div>

        {/* Date and Location */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-6'>
          <div className='text-white/60 text-xs md:text-sm mb-1 md:mb-0'>{date}</div>
          <div className='text-white/60 text-xs md:text-sm'>{location}</div>
        </div>

        {/* Description */}
        <div className='relative flex-grow overflow-y-auto custom-scrollbar'>
          <div className='absolute -left-3 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[#FF0080] to-transparent' />
          <div className='text-white/80 text-xs md:text-sm leading-relaxed pl-4 whitespace-pre-line'>
            {description}
          </div>
        </div>

        {/* Action buttons */}
        <div className='mt-4'>
          <button 
            onClick={onClick}
            className='w-full px-4 py-2 bg-[#FF0080]/10 text-[#FF0080] border border-[#FF0080]/50 hover:bg-[#FF0080]/20 transition-colors duration-300'
          >
            DETAILS
          </button>
        </div>

        {/* Decorative elements */}
        <div className='absolute top-0 right-0 w-32 h-1 bg-gradient-to-r from-[#FF0080] to-transparent' />
        <div className='absolute top-0 right-0 w-1 h-32 bg-gradient-to-b from-[#FF0080] to-transparent' />
        <div className='absolute bottom-0 left-32 w-32 h-1 bg-gradient-to-r from-[#00E6E6] to-transparent' />
      </div>
    </div>
  );
}

export default ExperienceCard;
