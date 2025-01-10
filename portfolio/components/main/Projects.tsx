"use client";

import React, { useState, useEffect } from 'react'
import ProjectCard from '../sub/ProjectCard'
import ProjectDetailsModal from '../sub/ProjectDetailsModal'
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp } from '@/utils/motion';

interface Project {
  src: string;
  title: string;
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
    <div className='relative flex flex-col items-center justify-center py-20 overflow-hidden'>
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <motion.h1 
        variants={fadeInUp(0.3)}
        initial="hidden"
        animate="visible"
        className='text-[40px] font-bold text-cyber-neon cyber-text mb-12'
      >
        Projects
      </motion.h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-10'>
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeIn((index + 2) * 0.1)}
            initial="hidden"
            animate="visible"
          >
            <ProjectCard
              src={project.src}
              title={project.title}
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
