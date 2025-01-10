import React from 'react';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";

interface Props {
  src?: string;
  company: string;
  role?: string;
  description: string;
  date?: string;
  location?: string;
}

const ExperienceCard = ({ src, company, role, description, date, location }: Props) => {
  return (
    <div className='cyber-panel relative overflow-hidden w-80 h-96 group hover:shadow-neon-strong transition-all duration-300'> 
      <div className='absolute -inset-1 bg-cyber-neon opacity-10 blur group-hover:opacity-20 transition-opacity duration-300' />
      
      <div className='relative p-6 h-full flex flex-col justify-between z-10'>
        <div>
          <h1 className='text-2xl font-bold text-cyber-neon mb-3'>{company}</h1>
          {role && (
            <div className='cyber-border px-3 py-1 inline-block mb-3'>
              <p className='text-cyber-white'>{role}</p>
            </div>
          )}
          {date && (
            <div className='mb-3'>
              <Badge className='bg-cyber-dark border border-cyber-neon text-cyber-neon'>{date}</Badge>
            </div>
          )}
          <p className='text-cyber-white/80'>{description}</p>
        </div>
        
        {location && (
          <div className='mt-auto'>
            <Badge className='bg-cyber-dark border border-cyber-neon text-cyber-neon'>{location}</Badge>
          </div>
        )}
      </div>

      <div className='absolute top-0 left-0 w-full h-1 bg-cyber-neon shadow-neon opacity-50 group-hover:opacity-100 transition-opacity duration-300' />
      <div className='absolute bottom-0 left-0 w-full h-1 bg-cyber-neon shadow-neon opacity-50 group-hover:opacity-100 transition-opacity duration-300' />
    </div>
  );
}

export default ExperienceCard;
