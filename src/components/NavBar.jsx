import { navLinks } from "../data/site";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-end gap-[16.8px] px-6 py-[26px] md:px-16">
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
