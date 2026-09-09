// All the page copy lives here so the components stay about layout.
// Editing the site is editing this file.

export const profile = {
  name: "Kevin Liu",
  location: "Los Angeles · UCLA",
  bio: "I am a freshman at UCLA studying CS + Engineering. I am currently interested in software development, robotics, and AI.",
};

// Two bands on one page. Add an entry to either `entries` array and it
// renders — numbering is derived from position, so nothing after it needs
// renumbering. An entry with no `title` renders as an open slot.
//
// Every entry carries `meta`: the mono context line under the title, org ·
// role · year. It's what lets an entry stand with no links at all, which is
// the normal case in the research band — those repositories are private.
//
// Two link shapes, and the entry picks one:
//   `href`  — the entry *is* the thing. Title becomes the link, arrow rides
//             beside it. Use when there's one destination (YouthWell).
//   `links` — the entry collects several destinations, so they need labels
//             and years of their own (FRC's three seasons).
// An entry with neither just ends after its tags.
export const bands = [
  {
    id: "work",
    name: "Projects",
    range: "2024 — 2026",
    entries: [
      {
        title: "FRC Programming",
        meta: "Team 2714 BBQ · Programming Captain · 2022–2026",
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
        meta: "Code4Hope Hackathon · Top 10 of 250+ teams · 2025",
        description: "A mental health platform for teens.",
        tags: ["React", "JavaScript", "Landbot"],
        href: "https://vkmyth.github.io/YouthWell/",
      },
    ],
  },
  {
    id: "research",
    name: "Research",
    range: "2024 — 2025",
    entries: [
      {
        title: "Rewards Redemption Optimizer",
        meta: "Rove Miles (YC24) · Harvard Ventures Tech · 2025",
        description:
          "GDS and NDC airline distribution research for a reward redemption optimizer.",
        tags: ["Python", "SQLite", "HTML"],
      },
      {
        title: "Li-Ion Battery Degradation",
        meta: "UT Dallas · Advised by Prof. Yanwen Xu · 2024",
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
