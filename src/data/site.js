// All the page copy lives here so the components stay about layout.
// Editing the site is editing this file.

export const profile = {
  name: "Kevin Liu",
  location: "Los Angeles · UCLA",
  bio: "I am a freshman at UCLA studying CS + Engineering. I am currently interested in software development, robotics, and AI.",
};

export const projectsRange = "2024 — 2026";

export const projects = [
  {
    number: "01",
    title: "FRC Programming",
    description: "Robot Code for Crescendo, Reefscape, and Rebuilt",
    // The design puts the Team 2714 BBQ logo beside this title. That image
    // only ever existed as a paste inside the Claude Design project, so it
    // isn't in this repo. To restore it: save the 200x200 PNG to
    // public/images/team-2714-bbq.png and uncomment the line below.
    // logo: { src: "/images/team-2714-bbq.png", alt: "FRC Team 2714 BBQ" },
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
  // Placeholders — give one of these a title/description/links to fill a slot.
  { number: "02" },
  { number: "03" },
];

export const contactLinks = [
  { label: "kvine.2714@gmail.com", href: "mailto:kvine.2714@gmail.com" },
  { label: "GitHub", href: "https://github.com/kvine11" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kvine-liu/" },
];

export const navLinks = [
  { label: "Projects", href: "#work" },
  { label: "Contact", href: "#contact" },
];
