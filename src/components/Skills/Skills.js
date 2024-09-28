import React from 'react';
import 'devicon/devicon.min.css'; 
import './skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faCode,
  faDatabase,
  faMicrochip,
  faTools} from '@fortawesome/free-solid-svg-icons'; 
import MicroservicesIcon from '../../assets/mico1.png'; 
import SnowflakeIcon from '../../assets/snowflake.png';
import EclipseIcon from '../../assets/eclipse.png';
import IntelliJIcon from '../../assets/intelji.png';
import MockitoIcon from '../../assets/mockito.png';
import SpringIcon from '../../assets/spring.png';
import S3Icon from '../../assets/S3.svg';
import LambdaIcon from '../../assets/Lambda.svg';
import SNSIcon from '../../assets/SNS.svg';
import EC2Icon from '../../assets/ec2.svg';
import SpringSecutiyIcon from '../../assets/springsecutiy.png';
import JunitIcon from '../../assets/junit.png';
import PythonIcon from '../../assets/python.png';
import SftpIcon from '../../assets/sftp.png'; 

const skills = {
  programmingLanguages: {
    main: { name: 'Programming Languages', icon: faCode, color: '#FF9F33' },
    items: [
      { name: 'Java', icon: 'devicon-java-plain colored', color: '#FF9F33' },
      { name: 'Python', icon: PythonIcon, color: '#FFD43B' },

    ],
  },
  frameworksAndLibraries: {
    main: { name: 'Frameworks & Libraries', icon: faMicrochip, color: '#6DB33F' },
    items: [
      { name: 'Spring Boot', icon: SpringIcon, color: '#6DB33F' },
      { name: 'Spring MVC', icon: 'devicon-spring-plain colored', color: '#6DB33F' },
      { name: 'Spring Security', icon: SpringSecutiyIcon, color: '#6DB33F' },
      { name: 'Hibernate', icon: 'devicon-hibernate-plain colored', color: '#59666C' },
      { name: 'Swagger', icon: 'devicon-swagger-plain colored', color: '#85EA2D' },
    ],
  },
  cloudAndDevOps: {
    main: { name: 'Cloud & DevOps', icon: faCloud, color: '#02ccfe' },
    items: [
      { name: 'AWS EC2', icon: EC2Icon, color: '#FF9900' },
      { name: 'AWS S3', icon: S3Icon, color: '#FF9900' },
      { name: 'AWS Lambda', icon: LambdaIcon, color: '#FF99000' },
      { name: 'AWS SNS', icon: SNSIcon, color: '#FF9900' },
      { name: 'Docker', icon: 'devicon-docker-plain colored', color: '#2496ED' },
      { name: 'Kubernetes', icon: 'devicon-kubernetes-plain colored', color: '#326CE5' },
    ],
  },
  databases: {
    main: { name: 'Databases', icon: faDatabase, color: '#F05032' },
    items: [
      { name: 'MySQL', icon: 'devicon-mysql-plain colored', color: '#4479A1' },
      { name: 'Snowflake', icon: SnowflakeIcon, color: '#29B5E8' }, // Use imported image here
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored', color: '#336791' },
    ],
  },
  toolsAndPlatforms: {
    main: { name: 'Tools & Platforms', icon: faTools, color: '#1171a4' },
    items: [
      { name: 'Maven', icon: 'devicon-maven-plain', color: '#C71A36' },
      { name: 'Microservices', icon: MicroservicesIcon, color: '#FF9F33' }, // Using image for Microservices
      { name: 'JIRA', icon: 'devicon-jira-plain colored', color: '#0052CC' },
      { name: 'Eclipse', icon: EclipseIcon, color: '#2C2255' },
      { name: 'IntelliJ IDEA', icon: IntelliJIcon, color: '#000000' },
      { name: 'SFTP', icon: SftpIcon, color: '#FCC624' },
    ],
  },
  testing: {
    main: { name: 'Testing', icon: faTools, color: '#F08080' },
    items: [
      { name: 'JUnit', icon: JunitIcon, color: '#C21325' },
      { name: 'Mockito', icon: MockitoIcon, color: '#17202A' },
    ],
  },
};

const Skills = () => {
  return (<>
  <span class="anchor" id="skills"></span>
    <section  className="py-12 bg-gray-100 skill-container">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {Object.keys(skills).map((category, index) => (
            <div key={index} className="flex flex-col items-center relative group">
              <div className="text-6xl mb-4 icon-animate" style={{ color: skills[category].main.color }}>
                <FontAwesomeIcon icon={skills[category].main.icon} />
              </div>
              <p className="text-lg font-semibold">{skills[category].main.name}</p>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 hidden group-hover:block bg-white text-black p-2 rounded shadow-lg tooltip-content">
                {skills[category].items.map((skill, index) => (
                  <div key={index} className="tooltip-item flex items-center">
                    {skill.name === 'Microservices' ? (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        style={{ width: '24px', height: '24px' }} // Adjust the size as needed
                      />
                    ) : skill.name === 'Snowflake' ? ( // Check for Snowflake here
                      <img
                        src={SnowflakeIcon} // Use imported image
                        alt={skill.name}
                        style={{ width: '24px', height: '24px' }} // Adjust the size as needed
                      />
                    ): skill.name === 'Eclipse' ? ( // Check for Snowflake here
                      <img
                        src={EclipseIcon} // Use imported image
                        alt={skill.name}
                        style={{ width: '24px', height: '24px' }} // Adjust the size as needed
                      />
                    ): skill.name === 'IntelliJ IDEA' ? ( // Check for Snowflake here
                      <img
                        src={IntelliJIcon} // Use imported image
                        alt={skill.name}
                        style={{ width: '24px', height: '24px' }} // Adjust the size as needed
                      />
                    ): skill.name === 'SFTP' ? ( // Check for Snowflake here
                      <img
                        src={SftpIcon} // Use imported image
                        alt={skill.name}
                        style={{ width: '24px', height: '24px' }} // Adjust the size as needed
                      />
                    ): skill.name === 'Mockito' ? ( // Check for Snowflake here
                      <img
                        src={MockitoIcon} // Use imported image
                        alt={skill.name}
                        style={{ width: '24px', height: '24px' }} // Adjust the size as needed
                      />
                    ): skill.name === 'Spring Boot' ? ( // Check for Snowflake here
                      <img
                        src={SpringIcon} // Use imported image
                        alt={skill.name}
                        style={{ width: '24px', height: '24px' }} // Adjust the size as needed
                      />
                    ): skill.name === 'Spring Security' ? ( // Check for Snowflake here
                      <img
                        src={SpringSecutiyIcon} // Use imported image
                        alt={skill.name}
                        style={{ width: '24px', height: '24px' }} // Adjust the size as needed
                      />
                    ) : skill.name === 'AWS EC2' ? ( // Check for Snowflake here
                      <img
                        src={EC2Icon} // Use imported image
                        alt={skill.name}
                        style={{ width: '24px', height: '24px' }} // Adjust the size as needed
                      />
                    ): skill.name === 'AWS S3' ? ( // Check for Snowflake here
                      <img
                        src={S3Icon} // Use imported image
                        alt={skill.name}
                        style={{ width: '24px', height: '24px' }} // Adjust the size as needed
                      />
                    ): skill.name === 'AWS SNS' ? ( // Check for Snowflake here
                      <img
                        src={SNSIcon} // Use imported image
                        alt={skill.name}
                        style={{ width: '24px', height: '24px' }} // Adjust the size as needed
                      />
                    ): skill.name === 'AWS Lambda' ? ( // Check for Snowflake here
                      <img
                        src={LambdaIcon} // Use imported image
                        alt={skill.name}
                        style={{ width: '24px', height: '24px' }} // Adjust the size as needed
                      />
                    ): skill.name === 'Python' ? ( // Check for Snowflake here
                      <img
                        src={PythonIcon} // Use imported image
                        alt={skill.name}
                        style={{ width: '24px', height: '24px' }} // Adjust the size as needed
                      />
                    ): skill.name === 'JUnit' ? ( // Check for Snowflake here
                      <img
                        src={JunitIcon} // Use imported image
                        alt={skill.name}
                        style={{ width: '24px', height: '24px' }} // Adjust the size as needed
                      />
                    ): (
                      <i className={skill.icon} style={{ color: skill.color }}></i> // Render Devicon for others
                    )}
                    <p className="ml-2">{skill.name}</p> {/* Added margin for spacing */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section></>
  );
};

export default Skills;
