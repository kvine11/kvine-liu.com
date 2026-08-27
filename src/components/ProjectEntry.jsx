/**
 * One filled project row: number, title block, and the list of repo links.
 * Links slide right and pick up the accent on hover.
 */
export default function ProjectEntry({
  number,
  title,
  description,
  logo,
  links,
}) {
  return (
    // One column on phones; number + content from md; the design's full
    // three-column split only once there's room for it (lg).
    <div className="grid grid-cols-1 items-start gap-8 py-11 md:grid-cols-[44px_minmax(0,1fr)] md:gap-12 lg:grid-cols-[44px_minmax(0,1fr)_minmax(0,1fr)]">
      <span className="pt-2.5 font-mono text-xs text-ink/45">{number}</span>

      <div className="min-w-0">
        <div className="flex items-center gap-[16.8px]">
          {logo && (
            <img
              src={logo.src}
              alt={logo.alt}
              /* bbq-ink.svg is pre-recolored to the ground — the Texas
                 silhouette is painted #161826 so it reads as a faint shape
                 over #0d0a14, the type is ink, the flame keeps its orange.
                 No filter or blend mode: the artwork already fits. */
              className="-ml-1 h-[72px] w-auto flex-none object-contain"
            />
          )}
          <h2 className="m-0 text-[34px] font-normal tracking-[-0.03em]">
            {title}
          </h2>
        </div>
        <p className="mt-[11.2px] mb-0 text-[15px] leading-[1.6] font-light text-ink/65">
          {description}
        </p>
      </div>

      {/* Sits under the title at md, beside it at lg. */}
      <div className="flex min-w-0 flex-col md:col-start-2 lg:col-start-3 lg:row-start-1">
        {links.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={`group flex items-baseline gap-[11.2px] py-[15px] text-ink transition-all duration-150 ease-out hover:pl-3 hover:text-accent ${
              i < links.length - 1 ? "border-b border-divider" : ""
            }`}
          >
            <span className="w-10 flex-none font-mono text-xs text-ink/45 transition-colors group-hover:text-accent/70">
              {link.year}
            </span>
            <span className="mr-auto text-[17px]">{link.label}</span>
            <span className="text-[13px] opacity-55">↗</span>
          </a>
        ))}
      </div>
    </div>
  );
}
