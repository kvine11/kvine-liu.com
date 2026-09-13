import ThemeToggle from "./ThemeToggle";
import { navLinks } from "../data/site";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-end gap-[16.8px] px-6 py-[26px] md:px-16">
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          // The ::after strip pads the tap target to 44px tall without
          // moving the text or stretching the focus ring.
          className="relative text-[13px] text-nav transition-colors duration-150 after:absolute after:inset-x-0 after:-inset-y-3 hover:text-ink"
        >
          {link.label}
        </a>
      ))}

      {/* Hairline sets the toggle apart from the section links. */}
      <span aria-hidden="true" className="h-3 w-px bg-ink/20" />
      <ThemeToggle />
    </nav>
  );
}
