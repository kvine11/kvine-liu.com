import ThemeToggle from "./ThemeToggle";
import { navLinks } from "../data/site";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-end gap-[16.8px] px-6 py-[26px] md:px-16">
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-[13px] text-ink/60 transition-colors duration-150 hover:text-ink"
        >
          {link.label}
        </a>
      ))}

      {/* A hairline sets the toggle apart from the section links — it moves
          you around the page; they move you through it. */}
      <span aria-hidden="true" className="h-3 w-px bg-ink/20" />
      <ThemeToggle />
    </nav>
  );
}
