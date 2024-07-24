import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            Projects
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
            <ProjectCard
                src='/project1.png'
                title='Project 1'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus nec nunc.'
            />
            <ProjectCard
                src='/project1.png'
                title='Project 1'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus nec nunc.'
            />
            <ProjectCard
                src='/project1.png'
                title='Project 1'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus nec nunc.'
            />
            <ProjectCard
                src='/project1.png'
                title='Project 1'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus nec nunc.'
            />
        </div>

    </div>
  )
}

export default Projects