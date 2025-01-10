import React from 'react';
import { Badge } from "@/components/ui/badge";

interface Props {
  company: string;
  role?: string;
  description: string;
  date?: string;
  location?: string;
}

const ExperienceCard = ({ company, role, description, date, location }: Props) => {
  return (
    <div className='relative w-full max-w-[400px] mx-auto'>
      <div className='relative bg-gradient-to-br from-[#1a1f2e] to-[#17151e] border border-[#FF0080]/30 p-4 md:p-6'>
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
        <div className='relative'>
          <div className='absolute -left-3 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[#FF0080] to-transparent' />
          <p className='text-white/80 text-xs md:text-sm leading-relaxed pl-4'>{description}</p>
        </div>

        {/* Decorative elements */}
        <div className='absolute top-0 right-0 w-20 md:w-32 h-1 bg-gradient-to-r from-[#00E6E6] to-transparent' />
        <div className='absolute top-0 right-0 w-1 h-20 md:h-32 bg-gradient-to-b from-[#00E6E6] to-transparent' />
        <div className='absolute bottom-0 left-20 md:left-32 w-20 md:w-32 h-1 bg-gradient-to-r from-[#FF0080] to-transparent' />

        {/* Status indicator */}
        <div className='absolute bottom-4 md:bottom-6 right-4 md:right-6 flex items-center gap-2 md:gap-3'>
          <div className='w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-[#C6FE01] animate-pulse' />
          <span className='text-[#C6FE01] text-xs md:text-sm tracking-wider'>ACTIVE</span>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
