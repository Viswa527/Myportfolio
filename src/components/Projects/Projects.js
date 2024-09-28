import React, { useState } from 'react';
import './Projects.css'; // Import your CSS file for styling
import { projects } from '../../Static/static'; // Adjust the import path as needed

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
         <span class="anchor" id="projects"></span>
    <section id="projects" className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="accordion">
          {projects.map((project, index) => (
            <div key={index} className="accordion-item">
              <div className="accordion-header" onClick={() => handleToggle(index)}>
                <h3 className="accordion-title">{project.title}</h3>
                <button className="toggle-btn">
                  {expandedIndex === index ? '▲' : '▼'}
                </button>
              </div>
              {expandedIndex === index && (
                <div className="accordion-content">
                  <p>{project.description}</p>
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                      View on GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Projects;
