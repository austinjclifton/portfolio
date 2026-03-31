// src/content/content.ts

export type NavSection = {
  id: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon?: string;
};

export type Skill = {
  name: string;
  icon: string;
};

export type ExperienceItem = {
  range: string;
  role: string;
  company: string;
  icon?: string;
  glow?: boolean;
  bullets?: readonly string[];
  tags: readonly string[];
  techStack: readonly string[];
};

export type ProjectItem = {
  name: string;
  description: string;
  href: string;
  glow?: boolean;
  tags: readonly string[];
  techStack: readonly string[];
};

export type SiteContent = {
  name: string;
  title: string;
  tagline: string;
  email: string;
  social: readonly SocialLink[];
  nav: readonly NavSection[];
  aboutParagraphs: readonly string[];
  footerText: string;
  skillsJavaScript: readonly Skill[];
  skillsOther: readonly Skill[];
  experience: readonly ExperienceItem[];
  projects: readonly ProjectItem[];
};

export const site: SiteContent = {
  name: "Austin Clifton",
  title: "Software Developer",
  tagline:
    "Born & raised in Rochester, NY.\nAvid golfer.\nDie-hard Buffalo Sabres fan.\nAlways learning, always building.",
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

  aboutParagraphs: [
    "I'm a software developer with an interest in solving complex challenges. I enjoy working across the stack, from designing backend architecture and data models to implementing responsive and accessible UIs.",
    "I regularly work with web and mobile technologies and I'm comfortable deploying, debugging, and maintaining these systems in production environments.",
    "My experience includes developing real-time multiplayer applications, IoT monitoring platforms, AI-powered chatbots, macOS client applications, and media-focused mobile apps.",
    "Previously, I worked with Excellus BCBS to develop an chatbot for internal teams, and supported Xerox in building a client-facing application for print device and supply management. I've personally worked with developing a variety of iOS applications as well as secure, RESTful web services and APIs.",
  ],

  footerText: "Built with Next.js + Tailwind. Deployed on Vercel.",

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
      glow: true,
      bullets: [
        "Pursuing a bachelor’s degree in Web and Mobile Computing, with a minor in Geographic Information Systems (GIS), focusing on application development, data structures and algorithms, database design, and systems programming.",
      ],
      tags: [
        "Active",
        "Education",
        "Web and Mobile Computing",
        "Geographic Information Systems",
      ],
      techStack: [],
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
      tags: [
        "Internship",
        "Accessibility",
        "UI Engineering",
        "Client Applications",
      ],
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
      tags: ["Internship", "Internal Tools", "AI Integration"],
      techStack: ["Node.js", "GitHub"],
    },
  ],

  projects: [
    {
      name: "Beehive Monitoring System",
      description:
        "An end-to-end IoT system for monitoring beehive health, streaming temperature data from sensor-equipped hives to a web dashboard used by beekeepers to track hive conditions over time.",
      href: "https://github.com/austinjclifton/Asheville",
      glow: true,
      tags: ["Active", "IoT", "Real-Time Data Ingestion", "Data Visualization"],
      techStack: ["Express.js", "Node.js", "React.js", "MySQL", "GitHub"],
    },
    {
      name: "PokerGame",
      description:
        "A secure multiplayer heads-up poker web application featuring user authentication, persistent game state, strict turn enforcement, and real-time chat.",
      href: "https://pokergame.studio",
      tags: ["Turn-Based Game", "WebSockets", "Multiplayer"],
      techStack: ["React.js", "Node.js", "PHP", "MySQL"],
    },
    {
      name: "TrackVault",
      description:
        "An iOS app that allows users to store, organize, and play audio files from their device. Built with SwiftUI and a strong focus on clean architecture, local persistence, and a polished playback experience.",
      href: "#projects",
      tags: ["iOS", "SwiftData", "Audio/Media"],
      techStack: ["Swift"],
    },
    {
      name: "Foodie",
      description:
        "An interactive iOS app that integrates the Yelp API, enabling users to explore and filter restaurants based on cuisine, rating, distance, and personal preferences.",
      href: "#projects",
      tags: ["iOS", "API Integration", "Location Services"],
      techStack: ["Swift"],
    },
  ],
} as const;
