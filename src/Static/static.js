import rakutenLogo from "../assets/rakuten.png";
import avizvaLogo from "../assets/avizva.png";
import merkleLogo from "../assets/merkle.svg";

export const userName = 'Viswarupachari Kammari';
export const userRoles = 'Backend Developer | Java Developer';
export const userDescription = `I am a seasoned Java developer with more than four years of experience as a Backend Developer in the IT industry. My focus areas have been Java, Spring Boot, and Hibernate. Apart from being technically sound, I possess outstanding leadership, communication, and problem-solving skills. I have delivered excellent results in fast-paced environments with proven success. I am a dedicated individual, motivated, and always eager to expand my knowledge while contributing to the growth of the organization. With excellent collaboration skills with cross-functional teams and a constant passion for improvement, I am confident of making a big impact.`;

export const education_text = 'Education';
export const gpa_text = 'GPA';

export const certifications = [
  {
    title: "AWS",
    issuer: "Udemy Certified",
    date: "July 2023",
    certificateURL:
      "https://drive.google.com/file/d/1mtfasFFF2Gpf5vTgSkc8Rg8yGluf-_xA/view?usp=sharing",
  },
  {
    title: "Java and Python",
    issuer: "ABC - Technology Training & Upskilling",
    date: "May 2024",
    certificateURL: "https://drive.google.com/file/d/1fjDTtzYdDPO5QgxS_6-WT-4-VnfdGZfN/view?usp=sharing",
  }
];

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "SSN Engineering College, afflicated by JNTUK",
    location: "Ongole,Prakasham,A.P,India",
    graduationYear: 2019,
    gpa: "73.99",
  },
  {
    degree: "Intermediate (M.P.C)",
    institution: "Basi reddy memorial junior college",
    location: "Nandikotkur,Kurnool,A.P,India",
    graduationYear: 2015,
    gpa: "74.00",
  },
  {
      degree: "S.S.C",
      institution: "Jeevan Jyothi E.M High school",
      location: "Nandikotkur,Kurnool,A.P,India",
      graduationYear: 2013,
      gpa: "9.3",
    },
];

export const experiences = [
  {
    company: "Rakuten Symphony",
    location: "Indore, M.P , India",
    role: "Java Developer",
    duration: "Sep 2020 - Aug 2022",
    image: rakutenLogo,
    responsibilities: [
      `Zadara is on cloud storage system which can store files using AWS interfaces and have many
       functionalities like create a bucket, upload files, retrieve, delete , retention and so on. To maintain all the data for
       the user.Access on-demand, enterprise-grade compute, networking and storage designed to handle any workload,
       anywhere – on-premises, hybrid, multi-cloud and at the edge.`,
       `Virtual-Inventory is a software system that can be used to store the virtual data like mobile number
        information, sim card information and the bank details. It will maintain the allocation of the numbers and sim
        cards.Secured and instant access to network inventory data from mobile device improves the way of
        executing site surveys and keeping physical site information data up to date`,
        `We have developed a dashboard which represents the data based on the analysis on project.we have used
         power BI to achieve some table representation makeing the tables and designs on custom based.And also implemented
         apache Nifi for automating the data flow from raw db to filtered db in snowflake.`
    ],
  },
  {
    company: "AVIZVA Solutions Pvt. Ltd",
    location: "Indore,M.P, India",
    role: "Senior Software Developer",
    duration: "Aug 2022 - Sep 2023",
    image: avizvaLogo,
    responsibilities: [
      `A portal is a web-based platform that collects information from different sources into a single user
       interfaceand presents users with the most relevant information for their context. Over time, simple web portals have
       evolvedinto portal platforms that support digital customer experience initiatives`,
       `The problem portals tried to solve in the early days of the internet was content discovery. In the face of the
       vast amount of information available online, the easiest way for the average user to discover information was through
       a human-curated content hub, known as a portal. Portals could display selected content in order to provide a custom
       experience for users.`,
    ],
  },
  {
    company: "Merkle Inspire",
    location: "Bangalore, Karnataka, India",
    role: "Senior Software Engineer",
    duration: "Sep 2023 - Present",
    image: merkleLogo,
    responsibilities: [
      `Data will be optimized and provide the results based on the user requirement,We have developed the UI for
       this story for selecting the data from the raw huge data to make the client cost cut and perform more effiecent.`,
       `For optimization we have gone through lot of tools for optimiing the data like JOptimizer,pulp,pymo,pyomo tools for
       optimizing and fetch data.`,
    ],
  },
];

export const projects = [
    {
      title: 'BSS -Zadara System',
      description: `Zadara is on cloud storage system which can store files using AWS interfaces and have many
                    functionalities like create a bucket, upload files, retrieve, delete , retention and so on. To maintain all the data for
                    the user.Access on-demand, enterprise-grade compute, networking and storage designed to handle any workload,
                    anywhere – on-premises, hybrid, multi-cloud and at the edge.`
    },
    {
      title: 'BSS-Virtual-Inventory',
      description: `Virtual-Inventory is a software system that can be used to store the virtual data like mobile number
                    information, sim card information and the bank details. It will maintain the allocation of the numbers and sim
                    cards.Secured and instant access to network inventory data from mobile device improves the way of
                    executing site surveys and keeping physical site information data up to date.`
    },
    {
      title: 'AT&T-Wireline',
      description:`We have developed a dashboard which represents the data based on the analysis on project.we have used
                   power BI to achieve some table representation makeing the tables and designs on custom based.And also implemented
                   apache Nifi for automating the data flow from raw db to filtered db in snowflake`
    },
    {
      title: 'Argus - Config-Portal',
      description: `A portal is a web-based platform that collects information from different sources into a single user
                    interfaceand presents users with the most relevant information for their context. Over time, simple web portals have
                    evolvedinto portal platforms that support digital customer experience initiatives
                    The problem portals tried to solve in the early days of the internet was content discovery. In the face of the
                    vast amount of information available online, the easiest way for the average user to discover information was through
                    a human-curated content hub, known as a portal. Portals could display selected content in order to provide a custom
                    experience for users`
    },
    {
       title: 'DFS-Optimizer',
       description: `Data will be optimized and provide the results based on the user requirement,We have developed the UI for
                     this story for selecting the data from the raw huge data to make the client cost cut and perform more effiecent.For
                     optimization we have gone through lot of tools for optimiing the data like JOptimizer,pulp,pymo,pyomo tools for
                     optimizing and fetch data.`,
    }
  ];
  
