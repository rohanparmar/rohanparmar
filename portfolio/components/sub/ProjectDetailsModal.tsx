import React from 'react'
import Image from 'next/image';

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
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-6 rounded-lg shadow-lg relative max-w-lg w-full'>
        <button onClick={onClose} className='absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl'>
          &times;
        </button>
        <h1 className='text-2xl font-semibold'>{title}</h1>
        <div className='flex flex-wrap mt-2'>
          {skills.map((skill, index) => (
            <span key={index} className='bg-purple-600 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded'>
              {skill}
            </span>
          ))}
        </div>
        <Image src={src} alt={title} width={500} height={500} className='mt-4 rounded-lg' />
        <p className='mt-4'>{description}</p>
        <a href={link} className='text-blue-500 hover:underline mt-4 inline-block' target='_blank' rel='noopener noreferrer'>View Project</a>
      </div>
    </div>
  );
}

export default ProjectDetailsModal;
