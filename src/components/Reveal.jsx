import { useEffect, useRef, useState } from "react";

/**
 * Fades and lifts children in the first time they scroll into view, once.
 * Defaults to shown, so the observer only ever has to hide what's still
 * off-screen — content never depends on JS to become visible.
 */
export default function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(
    () => typeof IntersectionObserver === "undefined"
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    // Already in view on mount (e.g. a short page, or the first project row
    // sitting just below the fold) — show it immediately, no fade needed.
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
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
