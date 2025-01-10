import React from 'react'
import Image from 'next/image';

interface Props {
  src: string;
  title: string;
  shortDescription: string;
  description: string;
  link: string;
  skills: string[];
  onClick: () => void;
}

// Function to get a color for a skill tag
const getSkillColor = (index: number): { text: string, border: string, bg: string } => {
  const colors = [
    { text: '#00E6E6', border: '#00E6E6', bg: '#00E6E610' }, // Cyan
    { text: '#C6FE01', border: '#C6FE01', bg: '#C6FE0110' }, // Green
    { text: '#FF0080', border: '#FF0080', bg: '#FF008010' }, // Pink
    { text: '#FF3333', border: '#FF3333', bg: '#FF333310' }, // Red
    { text: '#FFD700', border: '#FFD700', bg: '#FFD70010' }, // Gold
    { text: '#00FF9F', border: '#00FF9F', bg: '#00FF9F10' }, // Mint
  ];
  return colors[index % colors.length];
};

const ProjectCard = ({ src, title, shortDescription, description, link, skills, onClick }: Props) => {
  return (
    <div className='relative w-full max-w-[400px] h-[400px] md:h-[500px]'>
      {/* Left color bar */}
      <div className='absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#00E6E6] via-[#C6FE01] to-[#00E6E6]' />
      
      {/* Main card */}
      <div className='relative ml-1 h-full bg-gradient-to-br from-[#1a1f2e] to-[#17151e] border border-[#00E6E6]/30 p-4 md:p-6'>
        {/* Top section with image/demo */}
        <div className='relative h-36 md:h-48 mb-3 md:mb-4 border border-[#00E6E6]/30 overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-t from-[#1a1f2e] to-transparent z-10' />
          <Image
            src={src}
            alt={title}
            fill
            className='object-cover'
          />
        </div>

        {/* Title */}
        <h3 className='text-[#00E6E6] text-xl md:text-2xl font-medium tracking-wider mb-3 md:mb-4'>{title}</h3>

        {/* Tech stack tags */}
        <div className='flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4 max-h-[80px] md:max-h-[100px] overflow-y-auto pr-2 custom-scrollbar'>
          {skills.map((skill, index) => {
            const colors = getSkillColor(index);
            return (
              <div 
                key={index}
                className='flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-sm'
                style={{
                  backgroundColor: colors.bg,
                  border: `1px solid ${colors.border}30`,
                }}
              >
                <span 
                  className='w-1 md:w-1.5 h-1 md:h-1.5 rounded-full'
                  style={{ backgroundColor: colors.border }}
                />
                <span 
                  className='text-xs md:text-sm'
                  style={{ color: colors.text }}
                >
                  {skill}
                </span>
              </div>
            );
          })}
        </div>

        {/* Description */}
        <p className='text-white/80 text-xs md:text-sm mb-4 md:mb-6 line-clamp-3'>{shortDescription}</p>

        {/* Action buttons */}
        <div className='absolute bottom-6 left-6 right-6 flex gap-4'>
          <button 
            onClick={onClick}
            className='flex-1 px-4 py-2 bg-[#00E6E6]/10 text-[#00E6E6] border border-[#00E6E6]/50 hover:bg-[#00E6E6]/20 transition-colors duration-300'
          >
            DETAILS
          </button>
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className='flex-1 px-4 py-2 bg-[#C6FE01]/10 text-[#C6FE01] border border-[#C6FE01]/50 hover:bg-[#C6FE01]/20 transition-colors duration-300'
            onClick={e => e.stopPropagation()}
          >
            VIEW PROJECT
          </a>
        </div>

        {/* Decorative elements */}
        <div className='absolute top-0 right-0 w-32 h-1 bg-gradient-to-r from-[#00E6E6] to-transparent' />
        <div className='absolute top-0 right-0 w-1 h-32 bg-gradient-to-b from-[#00E6E6] to-transparent' />
        <div className='absolute bottom-0 left-32 w-32 h-1 bg-gradient-to-r from-[#C6FE01] to-transparent' />
      </div>
    </div>
  )
}

export default ProjectCard;
