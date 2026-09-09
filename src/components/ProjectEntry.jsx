/**
 * One filled entry: number, title block, and — when there are any — the
 * links stacked below it. Text-only, no color accent.
 *
 * `meta` is the mono context line under the title (org · role · year). It's
 * what lets an entry stand without links at all: the research band's
 * repositories are private, so those rows end after the tags, and without
 * the context line a title would be left floating with nothing to anchor
 * it. Every entry carries one, so the rhythm holds across both bands.
 *
 * `tags` render as small outlined chips. They were a dot-separated mono
 * line for a long time, on the reasoning that a chip would be the one bit
 * of "accent" the system doesn't have anywhere else — that still holds for
 * a *colored* chip, which is why these are a neutral outline over a 5% ink
 * fill. If they need to be louder, raise the fill; don't reach for a hue.
 *
 * Hover feedback is an indent shift plus the year label brightening.
 */
export default function ProjectEntry({
  number,
  title,
  meta,
  description,
  tags,
  links,
}) {
  const hasLinks = links && links.length > 0;

  return (
    // One column on phones; number + content from md up. No lg-only third
    // column — links always sit stacked under the title.
    <div
      className={`grid grid-cols-1 items-start gap-4 md:grid-cols-[44px_minmax(0,1fr)] md:gap-12 ${
        hasLinks ? "py-11" : "py-9"
      }`}
    >
      <span className="pt-2.5 font-mono text-xs text-ink/48">{number}</span>

      <div className="min-w-0">
        <h3 className="m-0 text-[34px] font-normal tracking-[-0.03em]">
          {title}
        </h3>

        {meta && (
          <p className="mt-3 mb-0 font-mono text-[11px] tracking-[0.1em] text-ink/48 uppercase">
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
                <span className="w-10 flex-none font-mono text-xs text-ink/48 transition-colors group-hover:text-ink/75">
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
