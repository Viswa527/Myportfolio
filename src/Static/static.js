import untLogo from "../assets/unt.png";
import cognizantLogo from "../assets/cognizantLogo.png";
import archimazaLogo from "../assets/ArchimazeLogo.jpeg";
import vinxLogo from "../assets/vinxLogo.jpeg";

export const userName = 'Vishnu Vardhan Reddy Sudireddy';
export const userRoles = 'UI Developer | Full-Stack Developer';
export const userDescription = `I am a passionate UI and Full-Stack Developer with extensive
            experience in creating dynamic and user-centric web applications. My
            expertise spans across modern technologies such as React, Angular,
            and Node.js, enabling me to build scalable and efficient solutions.
            I thrive in collaborative environments and am dedicated to
            delivering high-quality software that meets user needs and drives
            business success.`;

export const education_text = 'Education';
export const gpa_text = 'GPA';

export const certifications = [
  {
    title: "Azure Data Fundamentals",
    issuer: "Microsoft Certified",
    date: "May 2024",
    certificateURL:
      "https://learn.microsoft.com/en-us/users/vishnuvardhanreddysudireddy-5688/credentials/f968fa09b83d7fe3?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
  {
    title: "SQL Advanced",
    issuer: "Hacker Rank",
    date: "May 2024",
    certificateURL: "https://www.hackerrank.com/certificates/0624bc9802aa",
  },
  {
    title: "Javascript",
    issuer: "Hacker Rank",
    date: "May 2024",
    certificateURL: "https://www.hackerrank.com/certificates/bd4f429e042b",
  },
  {
    title: "Generative AI Certified Professional",
    issuer: "Oracle",
    date:"July 2024",
    certificateURL: 'Oracle'
  }
];

export const education = [
  {
    degree: "B.Tech in Electronics and Communication Engineering",
    institution: "Jawaharlal Nehru Technological University",
    location: "Hyderabad, India",
    graduationYear: 2020,
    gpa: "3.5/4.0",
  },
  {
    degree: "MS in Data Engineering",
    institution: "University of North Texas",
    location: "Denton, TX, USA",
    graduationYear: 2024,
    gpa: "3.91/4.0",
  },
];

export const experiences = [
  {
    company: "University of North Texas",
    location: "Denton, Texas, USA",
    role: "Full-Stack Developer",
    duration: "Aug 2023 - Mar 2024",
    image: untLogo,
    responsibilities: [
      `Developed and maintained Clark Bakery’s online ordering and management platform using React, Material UI,
resulting in a 30% increase in user engagement and a significant reduction in user-reported issues.`,
      `Designed and implemented database solutions with MySQL improving query performance by 25% and optimizing
indexing and schema design for faster data retrieval and storage efficiency. Integrated backend APIs with frontend
components, enhancing system performance by 20% and enhanced customer satisfaction.`,
      `Employed best practices improving code quality and TDD practices with Jest and React Testing Libraries. Collaborated
with marketing, sales, and customer support to ensure the platform met business needs, achieving project success rate.`,
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    location: "Hyderabad, India",
    role: "Full Stack Developer",
    duration: "Dec 2020 - Oct 2022",
    image: cognizantLogo,
    responsibilities: [
      `Developed and expanded architectural frameworks using Micro-Frontend Architecture with Module Federation,
enhancing performance, and cutting maintenance costs by 20%. Standardized reusable components and implemented
robust data grid functionalities, boosting productivity, and reducing operational overhead by 15%.`,

      `Leveraged Azure Data Factory and Synapse for ETL processes, optimizing data workflows and reducing processing
times by 30%. Improved data integrity and analytics capabilities by integrating Azure Data Lake and Power BI.`,

      `Adopted TDD with React Testing Library, engaged in Agile workflows, and managed source code with Git on
Bitbucket, resulting in 25% faster delivery cycles and improved team efficiency.`,

      `Mentored 4 junior developers and oversaw QA teams, ensuring adherence to processes and improving project delivery
timelines by 20%. Collaborated with non-technical professionals, achieving a high client satisfaction rate.`,
    ],
  },
  {
    company: "Vinx Technology Solutions",
    location: "Hyderabad, India",
    role: "IoT and ML Intern",
    duration: "May 2019 - Jun 2019",
    image: vinxLogo,
    responsibilities: [
      `Designed and developed a comprehensive home automation system by integrating IoT devices and sensors, enabling
real-time monitoring and control to enhance home efficiency and security. Collaborated with cross-functional teams
to ensure seamless integration of hardware and software components.`,
      `Built an interactive and user-friendly webpage using React and Redux, focusing on responsive design and seamless
user experience for managing home automation tasks. Implemented advanced state management, optimized
performance, and enhanced UI/UX through intuitive controls and interactive elements. Conducted user testing and
gathered feedback to refine the interface.`,
    ],
  },
  {
    company: "Archimaze",
    location: "Hyderabad, India", // Update with actual location
    role: "Unity 3D Intern",
    duration: "Sept 2018 - Jan 2019",
    image: archimazaLogo,
    responsibilities: [
      `Developed AR and VR applications using Unity 3D and successfully integrated AR applications into a React-based
UI, enhancing the interactive user experience. Conducted extensive testing and debugging to ensure application
stability and performance.`,
      `Collaborated with the design team to implement intuitive and user-friendly interfaces. Utilized version control systems
(e.g., Git) to manage code and track progress.`,
    ],
  },
];

export const projects = [
    {
      title: 'Charging Station Load Analysis and Prediction',
      description: `
      As the number of electric vehicles (EVs) on the road continues to grow, the demand for charging stations is increasing, placing a significant burden on the electrical system. To address this challenge, it is essential to conduct thorough load analysis and prediction for charging stations. This research focuses on creating models that can accurately anticipate the energy consumption patterns of charging stations. The primary goal is to enable grid operators to better control electricity supply and optimize the energy usage of charging stations, reducing costs and alleviating strain on the power grid. Accurate load analysis and forecasting are crucial for the transition to a more sustainable and efficient transportation system.`,
      githubLink: 'https://github.com/vr-23/big-data-data-science/tree/main/project-automobile-charging-station-load-analysis-prediction',
    },
    {
      title: 'My Portfolio',
      description: 'A UI Application build using ReactJs, Tailwind and deployed on netlify',
      githubLink: 'https://github.com/vr-23/portfolio',
    },
    {
      title: 'Predict Car Price Using Natural Language Processing',
      description: 'This project leverages Natural Language Processing (NLP) and Machine Learning to predict car prices accurately. By utilizing a Random Forest Regressor, the model is trained on a rich dataset from Kaggle, containing car details such as make, model, year, mileage, and more. The project incorporates audio-to-text conversion and sentiment analysis to enhance user experience, allowing users to input car details verbally. Achieving an impressive R-squared score of 0.95, this innovative approach simplifies the car selling process, providing reliable price predictions and streamlining interactions with car sellers and buyers.',
      githubLink: 'https://github.com/vr-23/natural_language_processing/tree/main/NLP%20-%20project%20-%20car%20price%20prediction',
    },
    {
      title: 'Personal Email Categorizer',
      description: 'In the rapidly digitalizing world, managing the surge of emails has become a significant challenge. The "Personal Email Categorizer" project addresses this by using supervised machine learning algorithms like Random Forest, Naïve Bayes, SVM, and Gradient Boosting to automatically classify emails based on their content. Utilizing a sample dataset from Gmail, the project achieved a high accuracy of 94.46% with the SVM linear model. This solution helps individuals maintain organized inboxes by automatically sorting important emails from the unnecessary ones. Future scope includes extending the categorizer to other email clients and personalized content extraction.',
      githubLink: 'https://github.com/vr-23/mlproject/tree/main',
    }
  ];
  
