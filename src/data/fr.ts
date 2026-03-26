export const fr = {
  title: "Développeuse Full-Stack",
  subtitle: "Je crée :",
  typingWords: ["Des Apps Web", "Des APIs", "Des Expériences", "Des Solutions"],
  pronouns: "elle",
  bio: "Passionnée par le développement web, j'aime créer des applications élégantes et performantes. Je transforme des problèmes complexes en solutions simples et belles, toujours curieuse d'apprendre de nouvelles technologies.",
  navLinks: [
    { label: "À propos", href: "#about" },
    { label: "Expérience", href: "#experience" },
    { label: "Projets", href: "#projects" },
    { label: "Compétences", href: "#skills" },
    { label: "Formation", href: "#education" },
    { label: "CV", href: "#cv" },
    { label: "Contact", href: "#contact" },
  ],
  experience: [
    {
      role: "Développeuse Full-Stack",
      company: "Fiverr",
      location: "France",
      startDate: "2024",
      endDate: "2026",
      tasks: [
        "Conception et développement de sites et applications web full stack en PHP et MySQL. Création d'interfaces dynamiques avec HTML, CSS, JavaScript et React.",
        "Mise en place de fonctionnalités back-end (CRUD, gestion des données, authentification) avec architecture MVC.",
        "Gestion de versions avec Git et configuration d'environnements Docker pour la portabilité des projets.",
      ],
    },
    {
      role: "Stage Développeur Web",
      company: "Future Plumbing",
      location: "Nice, France",
      startDate: "Juin 2024",
      endDate: "Août 2024",
      tasks: [
        "Participation au développement d'une application web complète avec séparation front-end et back-end.",
        "Développement de fonctionnalités métier en PHP et gestion de base de données MySQL.",
        "Intégration d'interfaces interactives en JavaScript et mise en place de la sécurité des formulaires.",
        "Réalisation de tests, débogage et maintenance évolutive.",
      ],
    },
  ],
  projects: [
    {
      title: "Swipe",
      description: "Application de mode seconde main style Tinder, permettant aux utilisateurs de faire du shopping de manière ludique et interactive.",
      status: "En cours",
    },
    {
      title: "Portfolio",
      description: "Mon portfolio personnel, conçu pour présenter mes compétences, expériences et projets de manière élégante et professionnelle.",
      status: "Terminé",
    },
    {
      title: "Mymoni",
      description: "Application de gestion de budget avec une identité visuelle féminine et dynamique. Suivi des dépenses, revenus et objectifs financiers.",
      status: "Terminé",
    },
  ],
  skills: {
    soft: ["Leadership", "Résolution de problèmes", "Communication", "Adaptabilité", "Esprit critique", "Gestion du temps"],
  },
  education: [
    { degree: "Bachelor Ingénierie Web", school: "ESGI", startDate: "Jan 2026", endDate: "Jan 2027" },
    { degree: "BTS Développement Web", school: "Studi", startDate: "Sep 2023", endDate: "Juin 2025" },
  ],
  courses: [
    { name: "Modèles React Avancés", provider: "Frontend Masters", year: "2024" },
    { name: "Conception de Systèmes", provider: "Educative", year: "2024" },
    { name: "Power BI", provider: "Microsoft", year: "2025" },
  ],
  languages: [
    { language: "Anglais", level: "C1" },
    { language: "Français", level: "Natif" },
  ],
  buttons: {
    downloadCV: "Télécharger CV",
    contact: "Me Contacter",
    cvSection: "Obtenir mon CV",
    cvDesc: "Entrez votre email pour recevoir un code de vérification et télécharger mon CV.",
  },
};

export type Lang = typeof fr;
