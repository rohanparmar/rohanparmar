"use client";

import React, { useState, useEffect } from 'react'
import ProjectCard from '../sub/ProjectCard'
import ProjectDetailsModal from '../sub/ProjectDetailsModal'
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp } from '@/utils/motion';

interface Project {
  src: string;
  title: string;
  shortDescription: string;
  description: string;
  link: string;
  skills: string[];
}

const Projects = () => {
  const [projectData, setProjectData] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('/projects.json');
      const data = await response.json();
      setProjectData(data);
    };
    fetchProjects();
  }, []);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  }

  const handleCloseModal = () => {
    setSelectedProject(null);
  }

  return (
    <div className='relative flex flex-col items-center justify-center'>
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#17151e]">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(to_right,#00E6E633_1px,transparent_1px),linear-gradient(to_bottom,#00E6E633_1px,transparent_1px)]" style={{ backgroundSize: '24px 24px' }} />
        </div>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF000015] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00E6E610] to-transparent" />
      </div>

      {/* Header */}
      <div className='relative mb-10 md:mb-20 px-4 md:px-0'>
        <motion.div 
          variants={fadeInUp(0.3)}
          initial="hidden"
          animate="visible"
          className='flex items-center gap-2 md:gap-4'
        >
          <div className='w-10 md:w-20 h-1 bg-gradient-to-r from-[#00E6E6] to-transparent' />
          <h1 className='text-[28px] md:text-[40px] font-bold text-[#00E6E6] tracking-wider'>PROJECTS</h1>
          <div className='w-10 md:w-20 h-1 bg-gradient-to-l from-[#00E6E6] to-transparent' />
        </motion.div>
        <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 md:w-32 h-1 bg-gradient-to-r from-transparent via-[#C6FE01] to-transparent' />
      </div>

      {/* Projects grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-20 gap-y-8 md:gap-y-16 px-4 md:px-10 relative max-w-[1600px] mx-auto'>
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeIn((index + 2) * 0.1)}
            initial="hidden"
            animate="visible"
            className='flex justify-center'
          >
            <ProjectCard
              src={project.src}
              title={project.title}
              shortDescription={project.shortDescription}
              description={project.description}
              link={project.link}
              skills={project.skills}
              onClick={() => handleProjectClick(project)}
            />
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <ProjectDetailsModal
          src={selectedProject.src}
          title={selectedProject.title}
          shortDescription={selectedProject.shortDescription}
          description={selectedProject.description}
          link={selectedProject.link}
          skills={selectedProject.skills}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default Projects;
