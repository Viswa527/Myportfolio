import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faJs,
  faReact,
  faAngular,
  faNodeJs,
  faGit,
  faHtml5,
  faCss3Alt,
  faPython,
  faJava,
} from '@fortawesome/free-brands-svg-icons'
import {
  faCube,
  faChartLine,
  faTools,
  faCode,
  faDesktop,
  faNetworkWired,
  faDatabase,
  faCloud,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons'
import './skills.css'

const skills = {
  programmingLanguages: {
    main: { name: 'Programming Languages', icon: faCode, color: '#3372FF' },
    items: [
      { name: 'JavaScript ES6', icon: faJs, color: '#F7DF1E' },
      { name: 'TypeScript', icon: faJs, color: '#007ACC' },
      { name: 'HTML', icon: faHtml5, color: '#E34F26' },
      { name: 'CSS', icon: faCss3Alt, color: '#1572B6' },
      { name: 'PL/SQL', icon: faDatabase, color: '#D33682' },
      { name: 'Python', icon: faPython, color: '#306998' },
      { name: 'Java', icon: faJava, color: '#FF9F33' },
    ],
  },
  frontEndDevelopment: {
    main: { name: 'Front-End Development', icon: faDesktop, color: '#FF9F33' },
    items: [
      { name: 'React', icon: faReact, color: '#61DAFB' },
      { name: 'Angular', icon: faAngular, color: '#DD0031' },
      { name: 'Redux', icon: faJs, color: '#764ABC' },
      { name: 'AG Grids', icon: faJs, color: '#FF6F61' },
      { name: 'Material UI', icon: faJs, color: '#0081CB' },
      { name: 'Tailwind', icon: faJs, color: '#38B2AC' },
    ],
  },
  backEndDevelopment: {
    main: {
      name: 'Back-End Development',
      icon: faNetworkWired,
      color: '#339933',
    },
    items: [
      { name: 'Node.js', icon: faNodeJs, color: '#339933' },
      { name: 'Nest.js', icon: faNodeJs, color: '#E0234E' },
      { name: 'ExpressJs', icon: faJs, color: '#000000' },
      { name: 'REST APIs', icon: faReact, color: '#00A8E8' },
      { name: 'GraphQL', icon: faJs, color: '#E10098' },
    ],
  },
  testing: {
    main: { name: 'Testing', icon: faTools, color: '#F08080' },
    items: [
      { name: 'Jest', icon: faJs, color: '#C21325' },
      { name: 'Cypress', icon: faJs, color: '#17202A' },
      { name: 'Enzyme', icon: faJs, color: '#00A8E8' },
    ],
  },
  databases: {
    main: { name: 'Databases', icon: faDatabase, color: '#F05032' },
    items: [
      { name: 'MongoDB', icon: faReact, color: '#4DB33D' },
      { name: 'Oracle', icon: faReact, color: '#F80000' },
      { name: 'MySQL', icon: faReact, color: '#4479A1' },
      { name: 'Relational Databases', icon: faReact, color: '#4479A1' },
    ],
  },
  cloudAndDevOps: {
    main: { name: 'Cloud & DevOps', icon: faCloud, color: '#4479A1' },
    items: [
      { name: 'Azure Data Factory', icon: faCube, color: '#0078D4' },
      { name: 'Azure Data Lake Gen2', icon: faCube, color: '#0078D4' },
      { name: 'Azure Data Bricks', icon: faCube, color: '#E23337' },
      { name: 'Azure Synapse Analytics', icon: faCube, color: '#0078D4' },
    ],
  },
  dataAndBusinessIntelligence: {
    main: {
      name: 'Data & Business Intelligence',
      icon: faChartLine,
      color: '#F7DF1E',
    },
    items: [
      { name: 'Power BI', icon: faJs, color: '#F2C811' },
      { name: 'Tableau', icon: faJs, color: '#E97627' },
      { name: 'Pentaho', icon: faJs, color: '#0078D4' },
    ],
  },
  versionControlAndCollaboration: {
    main: {
      name: 'Version Control & Collaboration',
      icon: faCodeBranch,
      color: '#F05032',
    },
    items: [
      { name: 'Git', icon: faGit, color: '#F05032' },
      { name: 'Bit Bucket', icon: faJs, color: '#0052CC' },
      { name: 'JIRA', icon: faJs, color: '#0052CC' },
    ],
  },
}

const Skills = () => {
  return (
    <section id="skills" className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {Object.keys(skills).map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center relative group"
            >
              <div
                className="text-6xl mb-4 icon-animate"
                style={{ color: skills[category].main.color }}
              >
                <FontAwesomeIcon icon={skills[category].main.icon} />
              </div>
              <p className="text-lg font-semibold">
                {skills[category].main.name}
              </p>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 hidden group-hover:block bg-white text-black p-2 rounded shadow-lg tooltip-content">
                {skills[category].items.map((skill, index) => (
                  <div key={index} className="tooltip-item">
                    <FontAwesomeIcon
                      icon={skill.icon}
                      style={{ color: skill.color }}
                    />
                    <p>{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
