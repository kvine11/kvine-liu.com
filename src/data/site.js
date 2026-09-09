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
export const bands = [
  {
    id: "work",
    name: "Projects",
    range: "2024 — 2026",
    entries: [
      {
        title: "FRC Programming",
        meta: "Team 2714 BBQ · Programming Captain · 2022–2026",
        description:
          "Autonomous robot code across three seasons — state machines, pose estimation, system identification.",
        tags: ["WPILib", "Command-Based", "Limelight"],
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
        description:
          "A mental health platform for teens: self-assessments, guided journals, a coping toolkit, an AI chatbot.",
        tags: ["React", "Supabase", "Framer Motion"],
        links: [
          {
            year: "2025",
            label: "Live site",
            href: "https://vkmyth.github.io/YouthWell/",
          },
        ],
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
        meta: "Rove Miles (YC24) · Harvard TECH Internship · 2025",
        description:
          "Searched synthetic GDS and NDC airline routings depth-first for the redemption with the highest value per mile.",
        tags: ["Python", "SQLite", "Figma"],
      },
      {
        title: "Li-Ion Battery Degradation",
        meta: "UT Dallas · TAST STEM-BRIDGE · 2024",
        description:
          "LSTM models predicting state-of-health and state-of-charge on NASA's prognostic battery data, 0.335% RMSE over MLP baselines.",
        tags: ["TensorFlow", "Keras", "LSTM"],
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
