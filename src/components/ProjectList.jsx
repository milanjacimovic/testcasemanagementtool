import React, { useState, useEffect } from 'react';
import ProjectForm from './ProjectForm';
import AddTestCase from './AddTestCase';
import AddNewProjectButton from './AddNewProjectButton';

const ProjectList = ({ filteredTestCases, setFilteredTestCases, showProjects, setShowProjects, selectedProject, setSelectedProject, projects, setProjects, testCases, setTestCases }) => {

  const handleDelete = (id) => {
    setProjects((prevProjects) => prevProjects.filter(project => project.id !== id));
  }

  const handleUpdate = (id, newName) => {
    setProjects(prevProjects =>
      prevProjects.map(project =>
        project.id === id ? { ...project, name: newName } : project
      )
    )
  }

  return (
    <div className="flex justify-center px-4 sm:px-8">
      <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
        {/* Add New Project Button */}
        <div className="flex justify-center pt-12 mb-8">
          <AddNewProjectButton projects={projects} setProjects={setProjects} />
        </div>

        {/* Project List */}
        <div className="flex flex-col gap-5">
          {projects.map(project => (
            <ProjectForm
              filteredTestCases={filteredTestCases}
              setFilteredTestCases={setFilteredTestCases}
              key={project.id}
              id={project.id}
              showProjects={showProjects}
              setShowProjects={setShowProjects}
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
              name={project.name}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
              testCases={testCases}
              setTestCases={setTestCases}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
