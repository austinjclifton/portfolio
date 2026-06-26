// src/content/content.ts

import type { TechIconKey } from "@/lib/techIcons";

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
  name: TechIconKey;
  icon: `/${string}`;
};

export type ExperienceItem = {
  range: string;
  role: string;
  company: string;
  icon?: string;
  glow?: boolean;
  bullets?: readonly string[];
  tags: readonly string[];
  techStack: readonly TechIconKey[];
};

export type ProjectItem = {
  name: string;
  description: string;
  href: string;
  linkLabel: "Live site" | "Project site" | "Web demo" | "Source";
  glow?: boolean;
  details: readonly string[];
  tags: readonly string[];
  techStack: readonly TechIconKey[];
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
  title: "Full-Stack Software Engineer",
  tagline:
    "Born & raised in Rochester, NY.\nAvid golfer.\nDie-hard Buffalo Sabres fan.",
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
    "I'm a software developer focused on building practical web and mobile applications. I enjoy working across the stack, from backend architecture and data models to responsive, accessible interfaces.",
    "I regularly work with web and mobile technologies and I'm comfortable deploying, debugging, and maintaining systems beyond the initial build.",
    "My experience includes developing real-time multiplayer applications, IoT monitoring platforms, AI-powered chatbots, macOS client applications, and media-focused mobile apps.",
    "At Excellus BCBS, I built an internal Workday Q&A chatbot for Microsoft Teams. At Xerox, I contributed to a client-facing macOS application for print device and supply management. Outside those roles, I've built iOS applications and RESTful web services.",
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
      range: "Aug 2021 — May 2026",
      role: "Bachelor of Science, Web and Mobile Computing",
      company: "Rochester Institute of Technology (RIT)",
      icon: "/rit.svg",
      glow: true,
      bullets: [
        "Completed a bachelor’s degree in Web and Mobile Computing with a minor in Geographic Information Systems (GIS), with coursework spanning application development, data structures and algorithms, database design, and systems programming.",
      ],
      tags: [
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
        "Implemented macOS Swift UI updates for a client application that needed parity with a legacy product.",
        "Built a new end-user license agreement (EULA) flow for presenting and accepting license terms inside the app.",
        "Improved accessibility behavior for macOS UI flows, with attention to WCAG 2.2 expectations and assistive-technology support.",
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
        "Built an internal Workday Q&A chatbot deployed as a Microsoft Teams application.",
        "Implemented a Node.js backend that connected OpenAI-powered responses with enterprise REST APIs.",
        "Integrated Azure Databricks-backed data sources so answers could use dynamic internal context.",
      ],
      tags: ["Internship", "Internal Tools", "AI Integration"],
      techStack: ["Node.js", "GitHub"],
    },
  ],

  projects: [
    {
      name: "World Cup Challenge",
      description:
        "A React and Node tournament prediction app that combines World Cup match data, standings, and persisted picks in a PostgreSQL-backed dashboard.",
      href: "https://worldcupchallenge.live",
      linkLabel: "Live site",
      details: [
        "Built prediction and results views around changing tournament data instead of static project content.",
        "Used Node.js, PostgreSQL, and AWS in the stack to support ingestion, persistence, and deployment.",
      ],
      tags: ["Prediction Workflow", "Real-Time Data", "Cloud Deployment"],
      techStack: ["Node.js", "React.js", "PostgreSQL", "AWS"],
    },
    {
      name: "Beehive Monitoring System",
      description:
        "A full-stack IoT monitoring app that streams sensor temperature readings into a MySQL-backed dashboard for reviewing hive conditions over time.",
      href: "https://beekeepr.live",
      linkLabel: "Live site",
      glow: false,
      details: [
        "Built an Express and Node API layer for receiving sensor readings and serving dashboard data.",
        "Stored readings with hive and timestamp context so the dashboard could review conditions over time.",
      ],
      tags: ["IoT Monitoring", "Sensor Data", "Data Visualization"],
      techStack: ["Express.js", "Node.js", "React.js", "MySQL", "GitHub"],
    },
    {
      name: "PokerGame",
      description:
        "An authenticated heads-up poker web app with persistent game state, server-enforced turns, WebSocket updates, and real-time chat.",
      href: "https://pokergame.studio",
      linkLabel: "Live site",
      details: [
        "Implemented authentication, turn enforcement, and persistent state so multiplayer sessions had server-side rules.",
        "Added WebSocket-based updates and chat for live table interaction.",
      ],
      tags: ["Authentication", "Persistent Game State", "WebSockets"],
      techStack: ["React.js", "Node.js", "PHP", "MySQL"],
    },
    {
      name: "TrackVault",
      description:
        "A SwiftUI iOS audio library for importing, organizing, storing, and playing local audio files with SwiftData-backed persistence.",
      href: "https://trackvault.vercel.app/",
      linkLabel: "Project site",
      details: [
        "Built import, organization, and playback flows around audio files stored on-device.",
        "Kept import, library state, and playback concerns separated so the SwiftUI views stayed focused on presentation.",
      ],
      tags: ["iOS", "SwiftData", "Local Audio"],
      techStack: ["Swift"],
    },
    {
      name: "Foodie",
      description:
        "A Swift iOS restaurant discovery app that integrates Yelp data with filtering by cuisine, rating, distance, and location preferences.",
      href: "https://github.com/austinjclifton/Foodie",
      linkLabel: "Source",
      details: [
        "Integrated Yelp API data into a native Swift search and filtering experience.",
        "Connected Yelp search results to user-controlled filters for cuisine, rating, distance, and location.",
      ],
      tags: ["iOS", "Yelp API", "Location Filters"],
      techStack: ["Swift"],
    },
  ],
} as const;
