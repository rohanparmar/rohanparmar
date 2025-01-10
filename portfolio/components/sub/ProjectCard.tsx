import React from 'react'
import Image from 'next/image';

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
  skills: string[];
  onClick: () => void;
}

const ProjectCard = ({ src, title, description, link, skills, onClick }: Props) => {
  return (
    <div 
      onClick={onClick} 
      className='cyber-panel relative overflow-hidden w-72 h-96 group hover:shadow-neon-strong transition-all duration-300 cursor-pointer'
    >
      <div className='absolute -inset-1 bg-cyber-neon opacity-10 blur group-hover:opacity-20 transition-opacity duration-300' />
      
      <div className='relative p-6 h-full flex flex-col z-10'>
        <h1 className='text-2xl font-bold text-cyber-neon mb-4'>{title}</h1>
        
        <div className='flex flex-wrap gap-2 mb-4'>
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className='bg-cyber-dark border border-cyber-neon text-cyber-neon text-xs font-bold px-2 py-1 rounded-sm'
            >
              {skill}
            </span>
          ))}
        </div>
        
        <p className='text-cyber-white/80 flex-grow'>{description}</p>
      </div>

      <div className='absolute top-0 left-0 w-full h-1 bg-cyber-neon shadow-neon opacity-50 group-hover:opacity-100 transition-opacity duration-300' />
      <div className='absolute bottom-0 left-0 w-full h-1 bg-cyber-neon shadow-neon opacity-50 group-hover:opacity-100 transition-opacity duration-300' />
    </div>
  )
}

export default ProjectCard;
