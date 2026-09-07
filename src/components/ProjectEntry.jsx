/**
 * One filled project row: number, title block, and the links stacked below
 * it. Text-only — no logo, no color accent. Hover feedback is an indent
 * shift plus the year label brightening from ink/45 to ink/75.
 */
export default function ProjectEntry({ number, title, description, links }) {
  return (
    // One column on phones; number + content from md up. No lg-only third
    // column — links always sit stacked under the title.
    <div className="grid grid-cols-1 items-start gap-4 py-11 md:grid-cols-[44px_minmax(0,1fr)] md:gap-12">
      <span className="pt-2.5 font-mono text-xs text-ink/45">{number}</span>

      <div className="min-w-0">
        <h2 className="m-0 text-[34px] font-normal tracking-[-0.03em]">
          {title}
        </h2>
        <p className="mt-[11.2px] mb-0 max-w-[520px] text-[15px] leading-[1.6] font-light text-ink/65">
          {description}
        </p>

        <div className="mt-8 flex min-w-0 flex-col">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={`group flex items-baseline gap-[11.2px] py-[15px] text-ink transition-all duration-150 ease-out hover:pl-3 ${
                i < links.length - 1 ? "border-b border-divider" : ""
              }`}
            >
              <span className="w-10 flex-none font-mono text-xs text-ink/45 transition-colors group-hover:text-ink/75">
                {link.year}
              </span>
              <span className="mr-auto text-[17px]">{link.label}</span>
              <span className="text-[13px] opacity-55">↗</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
