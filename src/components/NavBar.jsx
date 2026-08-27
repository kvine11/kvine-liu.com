import { navLinks, profile } from "../data/site";

export default function NavBar() {
  return (
    <nav className="flex items-center gap-[16.8px] px-6 py-[26px] md:px-16">
      <span className="mr-auto text-[15px] font-medium">{profile.name}</span>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-[13px] text-ink/60 transition-colors duration-150 hover:text-accent"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
