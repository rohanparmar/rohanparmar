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
    <div onClick={onClick} className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer'>
      <div className='relative p-4'>
        <h1 className='text-2xl font font-semibold text-white'>{title}</h1>
        <div className='flex flex-wrap mt-2'>
          {skills.map((skill, index) => (
            <span key={index} className='bg-purple-600 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded'>
              {skill}
            </span>
          ))}
        </div>
        <p className='mt-2 text-gray-300'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard;
