/**
 * One filled entry: number, title with year at right, meta line,
 * description, tags, links.
 *
 * `href` makes the title itself the link. `links` renders a labelled row
 * per destination. An entry with neither ends after its tags — the research
 * entries have private repos, so that's the normal case, not a gap.
 */
export default function ProjectEntry({
  number,
  title,
  year,
  meta,
  description,
  tags,
  href,
  links,
}) {
  const hasLinks = links && links.length > 0;

  return (
    <div
      className={`grid grid-cols-1 items-start gap-4 md:grid-cols-[44px_minmax(0,1fr)] md:gap-12 ${
        hasLinks ? "py-11" : "py-9"
      }`}
    >
      <span className="pt-2.5 font-mono text-xs text-label">{number}</span>

      <div className="min-w-0">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="m-0 min-w-0 text-[clamp(26px,7vw,34px)] font-normal tracking-[-0.03em]">
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-baseline gap-3 text-ink transition-all duration-150 ease-out hover:pl-3"
              >
                {title}
                <span
                  aria-hidden="true"
                  className="text-[15px] opacity-55 transition-opacity duration-150 ease-out group-hover:opacity-100"
                >
                  ↗
                </span>
              </a>
            ) : (
              title
            )}
          </h3>
          {year && (
            <span className="flex-none font-mono text-[11px] tracking-[0.16em] whitespace-nowrap text-label uppercase">
              {year}
            </span>
          )}
        </div>

        {meta && (
          <p className="mt-3 mb-0 font-mono text-[11px] tracking-[0.1em] text-label uppercase">
            {meta}
          </p>
        )}

        <p className="mt-3.5 mb-0 max-w-[520px] text-[15px] leading-[1.6] font-light text-ink/68">
          {description}
        </p>

        {tags && tags.length > 0 && (
          <ul className="mt-[18px] mb-0 flex list-none flex-wrap gap-[7px] p-0">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-ink/16 bg-ink/5 px-2.5 py-[5px] font-mono text-[10.5px] leading-none tracking-[0.09em] text-ink/68 uppercase transition-colors duration-150 hover:border-ink/35 hover:text-ink"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        {hasLinks && (
          <div className="mt-[30px] flex min-w-0 flex-col">
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
                <span className="w-10 flex-none font-mono text-xs text-label transition-colors group-hover:text-ink/75">
                  {link.year}
                </span>
                <span className="mr-auto text-[17px]">{link.label}</span>
                <span className="text-[13px] opacity-55">↗</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
