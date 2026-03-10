export const portfolioConfig = {
  name: "John Doe",
  title: "Full-Stack Developer",
  subtitle: "I build awesome:",
  typingWords: ["Web Apps", "APIs", "Experiences", "Solutions"],
  pronouns: "he/him",
  location: "Paris, France",
  bio: "Hi! I'm a passionate full-stack developer who loves building elegant, performant web applications. I thrive on turning complex problems into simple, beautiful solutions and I'm always eager to learn new technologies.",
  profileImage: "/profile.svg",
  cvFile: "/cv.pdf",

  contacts: {
    email: "john.doe@example.com",
    phone: "+33 6 12 34 56 78",
    social: "@johndoe",
    github: "https://github.com/johndoe",
    linkedin: "https://www.linkedin.com/in/johndoe",
  },

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "CV", href: "#cv" },
    { label: "Contact", href: "#contact" },
  ],

  experience: [
    {
      role: "Senior Full-Stack Developer",
      company: "TechCorp",
      location: "Paris, France",
      startDate: "Jan 2023",
      endDate: "Present",
      tasks: [
        "Led development of a micro-services architecture serving 100k+ users",
        "Built real-time dashboards with Next.js and WebSocket integration",
        "Mentored a team of 4 junior developers on best practices",
        "Reduced API response times by 60% through query optimization",
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "StartupXYZ",
      location: "Lyon, France",
      startDate: "Mar 2021",
      endDate: "Dec 2022",
      tasks: [
        "Developed and maintained a SaaS platform using React and Node.js",
        "Implemented CI/CD pipelines reducing deployment time by 75%",
        "Designed and built RESTful APIs consumed by mobile and web clients",
        "Integrated third-party payment and analytics services",
      ],
    },
    {
      role: "Junior Developer",
      company: "WebAgency",
      location: "Paris, France",
      startDate: "Sep 2019",
      endDate: "Feb 2021",
      tasks: [
        "Built responsive websites for 20+ clients using modern frameworks",
        "Collaborated with designers to implement pixel-perfect UIs",
        "Maintained legacy PHP applications and migrated them to React",
      ],
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
      degree: "Master of Computer Science",
      honors: "With Honours",
      school: "University of Paris",
      startDate: "Sep 2017",
      endDate: "Jun 2019",
    },
    {
      degree: "Bachelor of Computer Science",
      honors: "",
      school: "University of Lyon",
      startDate: "Sep 2014",
      endDate: "Jun 2017",
    },
  ],

  courses: [
    { name: "Advanced React Patterns", provider: "Frontend Masters", year: "2023" },
    { name: "System Design", provider: "Educative", year: "2022" },
    { name: "AWS Solutions Architect", provider: "AWS Training", year: "2021" },
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
