import BandHeading from "./BandHeading";
import FadingRule from "./FadingRule";
import ProjectEntry from "./ProjectEntry";
import PlaceholderEntry from "./PlaceholderEntry";
import Reveal from "./Reveal";
import { bands } from "../data/site";

/**
 * Both work bands, rendered from `bands` in site.js. Everything stays on
 * one page: with a handful of entries, splitting Projects and Research onto
 * separate routes would give two thin pages and cost a router plus
 * SPA-fallback host config. The split that will actually earn its keep
 * later is a per-entry case study (/work/<slug>), not a per-category route
 * — and that one leaves these two bands exactly as they are.
 *
 * Numbering restarts inside each band and is derived from position, so
 * adding an entry to site.js doesn't mean renumbering the ones after it.
 */
export default function Projects() {
  return (
    <>
      {bands.map((band, bandIndex) => (
        <section
          key={band.id}
          id={band.id}
          className={`px-6 md:px-16 ${bandIndex > 0 ? "pt-[104px]" : ""}`}
        >
          <BandHeading name={band.name} range={band.range} />

          <FadingRule />

          {/* Each entry fades/lifts into view once as it's scrolled to. A
              rule closes every entry, including the last. An entry with no
              title is still an open slot. */}
          {band.entries.map((entry, i) => {
            const number = String(i + 1).padStart(2, "0");
            return (
              <Reveal key={entry.title ?? `${band.id}-${number}`}>
                {entry.title ? (
                  <ProjectEntry {...entry} number={number} />
                ) : (
                  <PlaceholderEntry number={number} />
                )}
                <FadingRule />
              </Reveal>
            );
          })}
        </section>
      ))}
    </>
  );
}
