import React, { useState } from 'react';
import './Experience.css';
import { experiences } from '../../Static/static';

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleReadMoreClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
     <span class="anchor" id="experience"></span>
    <section id="experience" className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <img src={exp.image} alt={`${exp.company} logo`} className="card-image" width='200'/>
              <div className="card-content">
                <h3 className="card-title">{exp.company}</h3>
                <p className="card-role">{exp.role}</p>
                <p className="card-duration">{exp.duration}</p>
                <p className="card-location">{exp.location}</p>
                {expandedIndex === index && (
                  exp.responsibilities.map((resp,index)=>(
                    <p className="card-responsibilities">{resp}</p>
                  ))
                  
                )}  
                <button 
                  className="read-more-btn" 
                  onClick={() => handleReadMoreClick(index)}
                >
                  {expandedIndex === index ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Experience;
