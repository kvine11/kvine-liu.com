import { useEffect, useRef, useState } from "react";

/**
 * A band's heading: the name set large, light and wide-tracked, with the
 * year range as a small mono label on the right.
 *
 * The tracking is the point. The h1 runs tight at -0.05em; setting the band
 * names at +0.1em means the two are doing opposite things, and the contrast
 * is what gives the sections presence without a heavier weight. Don't
 * bolden these to make them louder — open them further.
 *
 * Letters stagger in, but only once the heading is actually in view. Same
 * observer contract as Reveal: default to shown when IntersectionObserver
 * is missing, and show immediately if it's already on screen at mount, so
 * nothing depends on JS for content that would otherwise be visible.
 */
export default function BandHeading({ name, range }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(
    () => typeof IntersectionObserver === "undefined"
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex items-baseline justify-between pb-[22px]">
      {/* The visible text is split per-letter for the stagger, so the name
          is carried on the heading's aria-label rather than left to a
          screen reader to reassemble from spans. */}
      <h2
        aria-label={name}
        className="text-[clamp(28px,6vw,38px)] leading-none font-light tracking-[0.1em] text-ink/90 uppercase"
      >
        {Array.from(name).map((char, i) => (
          <span
            key={`${char}-${i}`}
            aria-hidden="true"
            className={shown ? "band-letter" : "inline-block opacity-0"}
            style={shown ? { animationDelay: `${i * 38}ms` } : undefined}
          >
            {char === " " ? " " : char}
          </span>
        ))}
      </h2>
      <span className="flex-none font-mono text-[11px] tracking-[0.16em] whitespace-nowrap text-ink/48 uppercase">
        {range}
      </span>
    </div>
  );
}
