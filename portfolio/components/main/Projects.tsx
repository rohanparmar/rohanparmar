"use client";

import React, { useState, useEffect } from 'react'
import ProjectCard from '../sub/ProjectCard'
import ProjectDetailsModal from '../sub/ProjectDetailsModal'

const Projects = () => {
  const [projectData, setProjectData] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('/projects.json');
      const data = await response.json();
      setProjectData(data);
    };
    fetchProjects();
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  }

  const handleCloseModal = () => {
    setSelectedProject(null);
  }

  return (
    <div className='flex flex-col items-center justify-center py-20'>
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        Projects
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-10'>
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
            link={project.link}
            skills={project.skills}
            onClick={() => handleProjectClick(project)}
          />
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
