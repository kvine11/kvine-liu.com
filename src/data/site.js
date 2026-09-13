// All the page copy lives here so the components stay about layout.
// Editing the site is editing this file.

export const profile = {
  greeting: "Hi, I'm",
  name: "Kevin Liu",
  location: "Los Angeles · UCLA",
  bio: "a freshman at UCLA studying CS and Engineering. I'm currently exploring AI, machine learning, and robotics.",
};

// Two bands on one page. Add an entry to either `entries` array and it
// renders; numbering comes from position. An entry with no `title` is an
// open slot.
//
// `year` sits at the right of the title row, on every entry. `meta` is the
// context line under the title (org · role) — it's what lets an entry stand
// with no links, as the research ones do. Leave it out when there's no org.
//
// Links: `href` makes the title the link (one destination); `links` gives
// each destination its own labelled row. Neither is fine.
export const bands = [
  {
    id: "work",
    name: "Projects",
    entries: [
      {
        title: "FRC Programming",
        year: "2024 — 2026",
        meta: "Team 2714 BBQ · Programming Captain",
        description: "Autonomous robot code across three competition seasons.",
        tags: ["WPILib", "AdvantageKit", "Limelight"],
        links: [
          {
            year: "2026",
            label: "Rebuilt",
            href: "https://github.com/FRC2714/BBQ-Rebuilt-2026",
          },
          {
            year: "2025",
            label: "Reefscape",
            href: "https://github.com/FRC2714/Reefscape-2025",
          },
          {
            year: "2024",
            label: "Crescendo",
            href: "https://github.com/FRC2714/Crescendo-2024",
          },
        ],
      },
      {
        title: "YouthWell",
        year: "2025",
        meta: "Code4Hope Hackathon · Top 10 of 250+ teams",
        description: "A mental health platform for teens.",
        tags: ["React", "JavaScript"],
        href: "https://vkmyth.github.io/YouthWell/",
      },
      {
        title: "Calorie Tracker",
        year: "2026",
        description: "A personal macro tracker.",
        tags: ["Java", "Spring Boot", "PostgreSQL"],
        href: "https://github.com/kvine11/calorie-tracker",
      },
    ],
  },
  {
    id: "research",
    name: "Research",
    entries: [
      {
        title: "Rewards Redemption Optimizer",
        year: "2025",
        meta: "Rove Miles (YC24) · Harvard Ventures Tech",
        description:
          "GDS and NDC airline distribution research for a rewards redemption optimizer.",
        tags: ["Python", "SQLite", "HTML"],
      },
      {
        title: "Li-Ion Battery Degradation",
        year: "2024",
        meta: "UT Dallas · Advised by Prof.Yanwen Xu",
        description:
          "Battery degradation analysis using machine learning to optimize battery management system fluctuations.",
        tags: ["Python", "Keras", "TensorFlow"],
      },
    ],
  },
];

export const contactLinks = [
  { label: "kvine.2714@gmail.com", href: "mailto:kvine.2714@gmail.com" },
  { label: "GitHub", href: "https://github.com/kvine11" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kvine-liu/" },
];

export const navLinks = [
  { label: "Projects", href: "#work" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];
