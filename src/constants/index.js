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
  // meta,
  // starbucks,
  punicaapp,
  // tesla,
  // shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  cSharp,
  punica,
  bookStore,
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
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C#",
    icon: cSharp,
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
    name: "Three JS",
    icon: threejs,
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
    company_name: "PUNICA App",
    icon: punicaapp,
    iconBg: "#383E56",
    date: "May 2022 - June 2024",
    points: [
      "Developed a dynamic, user-friendly dashboard using ReactJS to monitor employee attendance and display company events, birthdays, courses, announcements, and statistics.",
      "Created customizable, responsive, and reusable form components used everywhere around the website.",
      "Collaborated with designers, utilizing ion code optimization to implement user-friendly UI components and improve the overall user experience.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Worked closely with backend developers to integrate RESTful APIs",
      "Conducted thorough code reviews, delivering actionable feedback that directly enhanced code quality and improved bug resolution speed by an average of 25% across the development team’s projects.",
      "Worked in an agile environment and participated in sprint and daily standup meetings to enhance work efficiency and ensure project success.",
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
    name: "Punica App",
    description:
      "A web-based platform that streamlines work-related activities, enabling users to book time-offs, request compensations, and stay informed about company events.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: punica,
    source_code_link: "https://punica.app/",
  },
  {
    name: "Ai Aided Bookstore",
    description:
      "An e-commerce platform that allows users to buy books with a chatbot powered by ChatGPT and VoiceFlow. The chatbot helps users find the books they are looking for.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "mern_stack",
        color: "green-text-gradient",
      },
    ],
    image: bookStore,
    source_code_link: "https://github.com/ahmad-hanafi1/GradProject-backend",
  },
  // {
  //   name: "Taksi App",
  //   description:
  //     "Two fully functional apps for aiding the connection between taxi drivers and clients. Both of which will be available in 2025 and will operate in the region of Northern Cyprus.",
  //   tags: [
  //     {
  //       name: "react_native",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "material_3",
  //       color: "yellow-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
