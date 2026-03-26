import { image, img } from "framer-motion/client";
import { Github } from "lucide-react";
import { title } from "process";

export const portfolioConfig = {
  name: "Khouloud Mrabtini",
  title: "Développeuse Full-Stack",
  subtitle: "I build awesome:",
  typingWords: ["Web Apps", "APIs", "Experiences", "Solutions"],
  pronouns: "she/her",
  location: "Paris, France",
  bio: "Développeuse full-stack passionnée, je crée des applications web élégantes et performantes. J'aime transformer des problèmes complexes en solutions simples et intuitives, et je suis toujours en quête de nouvelles technologies à explorer.",
  _profileImage: "/khoukha.jpg",
  get profileImage() {
    return this._profileImage;
  },
  set profileImage(value) {
    this._profileImage = value;
  },
  cvFile: "/cv.pdf",

  contacts: {
    email: "mrabtinikhouloud@gmail.com",
    phone: "+33 6 60 06 73 80",
    social: "@khouloudmrabtini",
    github: "https://github.com/QKM24",
    linkedin: "https://www.linkedin.com/in/khouloud-mrabtini-9480b2274/",
  },

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "CV", href: "#cv" },
    { label: "Contact", href: "#contact" },
  ],

  experience: [
    {
      role: "Full-Stack Developer",
      company: "Fiverr",
      location: "Paris, France",
      startDate: "2024",
      endDate: "2026",
      tasks: [
      "Design and development of full stack websites and web applications in PHP and MySQL. Creation of dynamic interfaces using HTML, CSS, JavaScript, and React.",
      "Implementation of back-end features (CRUD, data management, authentication) with MVC architecture structuring.",
      "Version control with Git and Docker environment setup to ensure project portability."
      ],
    },
    {
      role: "STAGE DE DEVELOPPEUR WEB",
      company: "Future Plumbing",
      location: "Nice, France",
      startDate: "Jun 2024",
      endDate: " Aug 2024",
      tasks: [
      "Participation in the development of a complete web application with front-end and back-end separation.",
      "Development of business logic features in PHP and MySQL database management.",
      "Integration of interactive interfaces in JavaScript and form security implementation.",
      "Performing tests, debugging, and evolutive maintenance."
      ],
    },
  ],

projects: [
    {
      title: "Swipe",
      description: "Application de mode seconde mains style Tinder, permettant aux utilisateurs de faire du shopping de manière ludique et interactive.",
      stack: ["React.js", "Node.js", "MongoDB", "TypeScript"],
      github: "https://github.com/QKM24/swipe",
      demo:"",
      status: "En cours de développement",
    },
    {
      title: "Portfolio",
      description: "Mon portfolio personnel, conçu pour présenter mes compétences, expériences et projets de manière élégante et professionnelle.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/QKM24/portfolio",
      demo: "",
      status: "Terminé",
    },
    {
      title: "Mymoni",
    description: "Application de gestion de budget avec une identité visuelle féminine et dynamique. Suivi des dépenses, revenus et objectifs financiers.",
    stack: ["React.js", "Tailwind CSS", "Firebase"],
    github: "https://github.com/QKM24",
    demo: "",
    status: "Terminé",
    },
    ],

  skills: {
    soft: [
      "Team Leadership",
      "Problem Solving",
      "Communication",
      "Adaptability",
      "Critical Thinking",
      "Time Management",
    ],
    hard: [
      "TypeScript",
      "React / Next.js",
      "Node.js",
      "Python",
      "PostgreSQL",
      "Docker",
      "AWS",
      "GraphQL",
      "REST APIs",
      "Git",
      "CI/CD",
      "Tailwind CSS",
    ],
  },

  education: [
    {
      degree: "Bachelor of engineering web",
      honors: "",
      school: "Esgi",
      startDate: "Jan 2026",
      endDate: "Jan 2027",
    },
    {
      degree: "HND of Web Development",
      honors: "",
      school: "Studi",
      startDate: "Sep 2023",
      endDate: "Jun 2025",
    },
  ],

  courses: [
    { name: "Advanced React Patterns", provider: "Frontend Masters", year: "2024" },
    { name: "System Design", provider: "Educative", year: "2024" },
    { name: "Power BI", provider: "Microsoft", year: "2025" },
  ],

  programs: [
    { name: "VS Code", icon: "Code" },
    { name: "Figma", icon: "Figma" },
    { name: "Docker", icon: "Container" },
    { name: "GitHub", icon: "Github" },
    { name: "Terminal", icon: "Terminal" },
  ],

  languages: [
    { language: "English", level: "C1" },
    { language: "French", level: "Native" },
  ],
};

export type PortfolioConfig = typeof portfolioConfig;
