import { useEffect, useRef, useState } from "react";

/**
 * A band's heading: name set large and wide-tracked, year range at right.
 * Letters stagger in once it scrolls into view — same observer contract as
 * Reveal, so nothing depends on JS to become visible.
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
      {/* Split per-letter for the stagger, so the name lives on aria-label
          rather than being reassembled from spans. */}
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
