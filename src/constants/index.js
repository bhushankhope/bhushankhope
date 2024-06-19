import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  foody,
  chirpchat,
  nile,
  logobk,
  angular,
  hra
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    route: 'resume',
    title: 'Resume'
  }
];

const services = [
  {
    title: "Software Developer",
    icon: creator,
  },
  {
    title: "Front End Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  }
];

const technologies = [
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Human Atlas",
    description:
      "A NSF Funded Biomedical Visualization application.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "zod",
        color: "pink-text-gradient",
      },
    ],
    image: hra,
    source_code_link: "https://github.com/cns-iu/humanatlas.io",
    live_link: 'https://humanatlas.io/'
  },
  {
    name: "Foody",
    description:
      "A React 18 based food delivery user interface showcasing React and Redux fundamentals.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: foody,
    source_code_link: "https://github.com/bhushankhope/learn-react",
    live_link: 'https://foody-bk.netlify.app/'
  },
  {
    name: "Chirp Chat",
    description:
      "An innovative social media platform facilitating seamless user connection and collaborative content generation.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: chirpchat,
    source_code_link: "https://github.com/bhushankhope/chirp-chat",
    live_link: 'https://chirp-chat-cc.vercel.app/'
  },
  {
    name: "StreamCrew",
    description:
      "An on-demand video streaming service that allows multiple users to stream videos together.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "rabbitmq",
        color: "green-text-gradient",
      },
      {
        name: "redis",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "orange-text-gradient",
      },
    ],
    image: 'https://user-images.githubusercontent.com/21334871/235218389-b49621ba-7dad-4e06-83be-3847147382aa.png',
    source_code_link: "https://github.com/bhushankhope/StreamCrew",
  },
  {
    name: "Nile",
    description:
      "A full stack delivery management application using React, Flask and MySQL.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      }
    ],
    image: nile,
    source_code_link: "https://github.iu.edu/bkhope/CSCI-P565-Fall22-Nile",
  },
];

const socials = [
  {
    bgc: '#F6F3FF',
    borderColor: '#7C3AED',
    filename: 'site',
    label: 'bk.com',
    link: 'https://www.bhushankhope.com',
    reqd: true
  },
  {
    bgc: '#F1F8FF',
    filename: 'linkedin',
    borderColor: '#0A66C2',
    label: 'bhushankhope',
    link: 'https://www.linkedin.com/in/bhushankhope/',
    reqd: true
  },
  {
    bgc: '#F6F3FF',
    filename: 'github',
    borderColor: '#222222',
    label: 'bhushankhope',
    link: 'https://github.com/bhushankhope',
    reqd: true
  }
];

const cnsSkills = ['Angular', 'Angular Material', 'Javascript', 'Typescript', 'Jest']

const accentureSkills = ['React', 'Javascript', 'Jest', 'React Testing Library']

const cnsExperience = [
  'Led the development of a responsive user interface for an NSF-Funded biomedical visualization project, resulting in a 29% increase in user engagement.',
  'Successfully designed and employed 12+ reusable and high-performance user interface components using Angular Material, resulting in a significant 18% reduction in development time while enhancing the overall user experience.',
  'Successfully attained 93% code coverage for Angular components by using Jest.',
  'Created Zod objects and employed the Zod-to-JSON library to facilitate YAML file validation through the exported JSON schema.',
  'This resulted in a flawless 100% reduction in developmental errors, ensuring robust data validation.',
  'Architected and managed a CI/CD pipeline that reduced software deployment times by 30% and increased project efficiency.'
];

const accentureExperience = [
  'Crafted a responsive web application using React.js and JavaScript, leading to a 23% enhancement in user satisfaction.',
  'Engineered 2 efficient and reusable functional components, resulting in an impressive 18% reduction in code redundancy.',
  'Worked closely with UI/UX designers to translate design into code resulting in a 23% improvement in user satisfaction.',
  'Formulated comprehensive unit tests employing Jest, yielding an outstanding 85% code coverage, ensuring the robustness and reliability of the code.',
  'Participated in code reviews, 20+ sprint sessions as part of agile methodology fostering improvement in team productivity.'
]

const foodySkills = ['React', 'Javascript', 'Tailwind CSS', 'React-Redux'];

const foodyPoints = [
  'Engineered a React 18 based food delivery application, showcasing React fundamentals and Tailwind CSS for UI design.',
  'Created over 10 components, custom hooks, higher-order components, and controlled components within project.',
  'Used React Redux and Redux Toolkit to establish and manage the store and slices.'
]

const chirpChatSkills = ['React', 'NextJS', 'MongoDB', 'TypeScript', 'Tailwind CSS'];

const chirpChatPoints = [
  'Programmed ChirpChat, an innovative social media platform facilitating seamless user connection and collaborative content generation using NextJS.',
  'Crafted 3 mongoose models to optimize data storage, establish schema relationships, and streamline data handling process.',
  'Devised and integrated 15+ user data management functionalities, harnessing the power of MongoDB and Mongoose.'
];

const streamCrewSkills = ['Angular', 'Python', 'RabbitMQ', 'Redis']

const streamCrewPoints = [
  'Developed StreamCrew, an on-demand video streaming service that allows multiple users to stream videos together leveraging edge computing to provide a highly scalable, distributed architecture for the system.',
  'Implemented 5+ REST and socket-based APIs using Python and FastAPI on the backend.',
  'Established connections between client and server using WebSocket, used RabbitMQ to facilitate operations among multiple users and fetched and stored content in Redis cache to distribute it to users.',
  'Encoded streaming content using DASH protocol on AWS Elemental MediaConvert and stored it in an AWS S3 bucket.'
]

const languages = ['Java', 'C#', 'Python', 'JavaScript (ES6+)', 'SQL', 'HTML', 'CSS', 'Bootstrap', 'TypeScript', 'C++', 'Typescript']
const frameworks = ['Angular', 'React', 'Spring-boot', 'Flask', 'Django', 'Angular Material', 'REST', 'Mongoose']
const dbCloud = ['MySQL', 'PostgreSQL', 'MongoDB', 'AWS']
const tools = ['Redux Toolkit', 'React-Redux', 'GIT', 'Docker', 'Jira']

const iuCourses = ['Applied Algorithms', 'Applied Distributed Systems', 'Software Engineering', 'Database Design', 'Computer Networks'];
const sppuCourses = ['Web Technology', 'Operating System', 'Object-Oriented Programming', 'Cloud Computing', 'Data Structures'];
export { services, technologies, experiences, testimonials, projects, socials, cnsSkills, accentureSkills, cnsExperience, accentureExperience, foodySkills, foodyPoints, chirpChatSkills, chirpChatPoints, streamCrewSkills, streamCrewPoints, languages, frameworks, dbCloud, tools, iuCourses, sppuCourses };
