import { contactLinks } from "../data/site";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <Reveal>
      <footer
        id="contact"
        className="grid grid-cols-1 gap-6 px-6 pt-24 pb-16 md:grid-cols-[44px_minmax(0,1fr)] md:gap-12 md:px-16 md:pt-24 md:pb-[72px]"
      >
        {/* The 44px track lines this label up with the project numbers; the
            label itself runs on into the 48px gutter rather than wrapping. */}
        <span className="font-mono text-[11px] whitespace-nowrap tracking-[0.16em] uppercase text-ink/50">
          Say hi
        </span>
        <div className="flex min-w-0 flex-wrap items-baseline gap-x-[22.4px] gap-y-3 text-[15px]">
          {contactLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="border-b border-transparent pb-0.5 text-ink transition-colors duration-150 ease-out hover:border-ink/40"
            >
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </Reveal>
  );
}
