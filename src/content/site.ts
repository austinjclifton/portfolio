export const site = {
  name: "Austin Clifton",
  title: "Software Developer",
  tagline:
    "I build accessible software across web and mobile platforms, with a focus on organized architecture, efficient performance, and real-world impact.",
  email: "austinjclifton@proton.me",

  social: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/austinjclifton/",
      icon: "/linkedin.svg",
    },
    {
      label: "GitHub",
      href: "https://github.com/austinjclifton",
      icon: "/GitHub.svg",
    },
  ],

  nav: [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ],

  skillsJavaScript: [
    { name: "React.js", icon: "/React.js.svg" },
    { name: "Next.js", icon: "/Next.js.svg" },
    { name: "Node.js", icon: "/Node.js.svg" },
    { name: "Express.js", icon: "/Express.js.svg" },
    { name: "Bun", icon: "/Bun.svg" },
    { name: "Deno", icon: "/Deno.svg" },
  ],

  skillsOther: [
    { name: "HTML5", icon: "/HTML5.svg" },
    { name: "CSS3", icon: "/CSS3.svg" },
    { name: "PostgreSQL", icon: "/PostgresSQL.svg" },
    { name: "MySQL", icon: "/MySQL.svg" },
    { name: "PHP", icon: "/PHP.svg" },
    { name: "Swift", icon: "/Swift.svg" },
    { name: "GitHub", icon: "/GitHub.svg" },
    { name: "BitBucket", icon: "/BitBucket.svg" },
  ],

  experience: [
    {
      range: "Aug 2021 — May 2026 (expected)",
      role: "Bachelor of Science, Web and Mobile Computing",
      company: "Rochester Institute of Technology (RIT)",
      icon: "/rit.svg",
      bullets: [
        "Pursuing a bachelor’s degree in Web and Mobile Computing, with a minor in Geographic Information Systems (GIS), focusing on software engineering, data structures and algorithms, database design, and systems programming."
      ],
      tags: ["Education", "Web and Mobile Computing", "Geographic Information Systems"],
      techStack: []
    },
    {
      range: "May 2025 — Aug 2025",
      role: "Software Developer Intern",
      company: "Xerox Corporation",
      icon: "/xerox.svg",
      bullets: [
        "Worked on a macOS Swift client application delivering UI parity with a widely used legacy product.",
        "Designed and implemented a new end-user license agreement (EULA) system.",
        "Improved accessibility support across the application, aligning features with WCAG 2.2 guidelines for assistive technologies.",
      ],
      tags: ["Accessibility", "UI Engineering", "Client Applications"],
      techStack: ["Swift", "BitBucket"],
    },
    {
      range: "Jun 2023 — Aug 2023",
      role: "Software Engineering Intern",
      company: "Excellus BlueCross BlueShield",
      icon: "/bluecross.png",
      bullets: [
        "Developed an internal Workday Q&A chatbot deployed as a Microsoft Teams application.",
        "Built a Node.js backend integrating OpenAI-powered responses with enterprise REST APIs.",
        "Connected Azure Databricks data sources to deliver dynamic, context-aware answers to employees.",
      ],
      tags: ["Internal Tools", "AI Integration"],
      techStack: ["Node.js", "GitHub"],
    },
  ],

  projects: [
    {
      name: "Beehive Monitoring System",
      description:
        "An end-to-end IoT system for monitoring beehive health, streaming temperature data from sensor-equipped hives to a web dashboard used by beekeepers to track hive conditions over time.",
      href: "#",
      tags: ["In Progress", "IoT"],
      techStack: ["Next.js", "MySQL", "GitHub"],
    },
    {
      name: "IceBox",
      description:
        "An iOS app that allows users to store, organize, and play audio files from their device. Built with SwiftUI and a strong focus on clean architecture, local persistence, and a polished playback experience.",
      href: "#",
      tags: ["iOS", "SwiftData", "Audio/Media"],
      techStack: ["Swift"],
    },
    {
      name: "PokerGame",
      description:
        "A secure multiplayer heads-up poker web application featuring user authentication, persistent game state, strict turn enforcement, and real-time chat.",
      href: "#",
      tags: ["Full Stack", "WebSockets",  "Multiplayer"],
      techStack: ["React.js", "PHP", "MySQL"],
    },
    {
      name: "Foodie",
      description:
        "An interactive iOS app that integrates the Yelp API, enabling users to explore and filter restaurants based on cuisine, rating, distance, and personal preferences.",
      href: "#",
      tags: ["iOS", "API Integration", "Location Services"],
      techStack: ["Swift"],
    },
  ],
} as const;
