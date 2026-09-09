import BandHeading from "./BandHeading";
import FadingRule from "./FadingRule";
import ProjectEntry from "./ProjectEntry";
import PlaceholderEntry from "./PlaceholderEntry";
import Reveal from "./Reveal";
import { bands } from "../data/site";

/**
 * Both work bands, rendered from `bands` in site.js. Numbering restarts per
 * band and is derived from position, so adding an entry never means
 * renumbering the ones after it.
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

          {/* A rule closes every entry, including the last. */}
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
