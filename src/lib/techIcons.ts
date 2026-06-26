export const techIconMap = {
  // Web / JS
  "React.js": "/React.js.svg",
  "Next.js": "/Next.js.svg",
  "Node.js": "/Node.js.svg",
  "Express.js": "/Express.js.svg",
  Bun: "/Bun.svg",
  Deno: "/Deno.svg",
  AWS: "/AWS.svg",

  // Core
  HTML5: "/HTML5.svg",
  CSS3: "/CSS3.svg",
  PostgreSQL: "/PostgresSQL.svg",
  MySQL: "/MySQL.svg",
  PHP: "/PHP.svg",

  // Apple
  Swift: "/Swift.svg",

  // Version Control
  GitHub: "/GitHub.svg",
  BitBucket: "/BitBucket.svg",

  // Social
  LinkedIn: "/LinkedIn.svg",

  // Organizations
  "Xerox Corporation": "/xerox.svg",
  "Excellus BlueCross BlueShield": "/excellus.svg",
} as const satisfies Record<string, `/${string}`>;

export type TechIconKey = keyof typeof techIconMap;

export const FALLBACK_TECH_ICON: (typeof techIconMap)[TechIconKey] =
  techIconMap["Next.js"];

export function getTechIcon(tech: TechIconKey) {
  return techIconMap[tech];
}
