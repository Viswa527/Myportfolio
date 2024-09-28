import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUniversity, faMapMarkerAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Fade } from 'react-awesome-reveal';
import './Education.css';
import { education, education_text, gpa_text } from '../../Static/static';

const Education = () => {
  return (
    <>
     <span class="anchor" id="education"></span>
    <section id="education" className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">{education_text}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <Fade key={index}>
              <div className="education-item p-6 bg-white shadow-md rounded relative overflow-hidden">
                <div className="bg-animation"></div>
                <div className="bg-overlay">
                  <FontAwesomeIcon icon={faGraduationCap} className="absolute top-4 right-4 text-4xl text-gray-300" />
                  <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                  <p className="text-lg mb-2"><FontAwesomeIcon icon={faUniversity} className="mr-2 text-blue-600" />{edu.institution}</p>
                  <p className="text-md mb-2"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-red-600" />{edu.location}</p>
                  <p className="text-md mb-2"><FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-green-600" />Class of {edu.graduationYear}</p>
                  <p className="text-md mb-2"><strong>{gpa_text}:</strong> {edu.gpa}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Education;
