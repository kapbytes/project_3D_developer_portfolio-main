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
    title: "Web Development",
    icon: web,
  },
  {
    title: "Search Engine Optimization",
    icon: mobile,
  },
  {
    title: "Shopify Development",
    icon: backend,
  },
  {
    title: "Digital Marketing",
    icon: creator,
  },
];

const technologies = [
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
    title: "Building an SEO Foundation",
    company_name: "Google Search",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March - 2017",
    points: [
      'Started in 2017, our company quickly recognized the importance of Search Engine Optimization (SEO) for online businesses. We successfully helped dozens of clients to rank higher on search engine results pages, boosting their visibility and increasing organic website traffic. Our SEO strategies are tailored for each client, with a focus on relevant keyword optimization, high-quality content, and a strong link-building strategy.'
    ],
  },
  {
    title: "Stepping into Shopify Development",
    company_name: "Shopify Inc",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "August - 2018",
    points: [
      'Seeing the growing demand for ecommerce solutions, in 2018, we expanded our services to include Shopify Development. Our team of skilled developers built user-friendly, optimized, and visually appealing online stores for businesses looking to sell products online. We have helped clients to smoothly transition their businesses to Shopify, managing everything from store setup to customization and maintenance.'
    ],
  },
  {
    title: "Branching Out into Digital Marketing",
    company_name: "",
    icon: tesla,
    iconBg: "#383E56",
    date: "June - 2019",
    points: [
       'Recognizing the immense potential of digital platforms for business growth, we branched out into Digital Marketing in 2019. We now offer a comprehensive suite of digital marketing services, including social media marketing, email marketing, pay-per-click advertising, and content marketing. Our digital marketing strategies are data-driven and targeted, ensuring maximum reach, engagement, and return on investment for our clients.'
    ],
  },
  {
    title: "Expanding with Web Development",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "In 2020, we added Web Development to our service portfolio. We have since built and revamped numerous websites, focusing on responsive design, user experience, and site speed. Our web development services have helped businesses to establish a strong online presence, improve their brand image, and drive customer engagement. As of 2023, we continue to deliver high-quality SEO, Shopify Development, Digital Marketing, and Web Development services, constantly evolving and adapting to meet our client's needs and market trends."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working with KapBytes has been a game-changer for us. Their team's expertise in SEO helped us increase our organic website traffic by 150% in just six months. Their commitment to delivering results is truly commendable. We highly recommend their services to anyone looking to boost their online presence.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "The Shopify store that this team developed for us exceeded our expectations. The store is not only visually appealing but also user-friendly and has dramatically increased our sales. The team's professionalism and timely communication made the process smooth and enjoyable. I look forward to continuing our work with them in the future.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "We enlisted the IT company's services for a complete overhaul of our website, and the results have been nothing short of phenomenal. The new site is fast, responsive, and has significantly improved our user experience. Their understanding of web development and their keen eye for detail sets them apart from other providers. I couldn't be happier with their work and heartily recommend their services.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
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
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
