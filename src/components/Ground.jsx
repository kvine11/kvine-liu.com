import { useEffect } from "react";

/**
 * The backdrop, in three fixed layers: a slow drift, a pool that trails the
 * cursor, and grain over both. Fixed rather than absolute, so the page
 * scrolls over the ground instead of dragging it along — which is also what
 * keeps the hero pool anchored now that the page runs to two full bands.
 *
 * This is a deliberate, narrow return of motion after the static gradient,
 * not a restoration of the old "Live Ground". The differences are the whole
 * point: ink only (no color), 64s (not seconds), 3–8% (not visible as
 * shapes), grain (not a halftone dot-mask), and a cursor pool that lags
 * rather than tracks. If it ever starts reading as templated again, the
 * cursor layer is the first thing to cut.
 *
 * All three layers are pointer-events-none and aria-hidden; content sits
 * above them on z-10.
 */
export default function Ground({ children }) {
  useEffect(() => {
    // Damping is the design, not a tuning detail: at 0.045 per frame the
    // pool arrives roughly a second behind the pointer, which is what makes
    // it read as ambient light rather than a spotlight. Skipped entirely
    // without a hover-capable pointer, so it never runs on touch.
    if (typeof window === "undefined" || !window.matchMedia) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover)").matches) return;

    const root = document.documentElement;
    let targetX = window.innerWidth * 0.5;
    let targetY = window.innerHeight * 0.2;
    let x = targetX;
    let y = targetY;
    let frame = 0;

    const onMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const loop = () => {
      x += (targetX - x) * 0.045;
      y += (targetY - y) * 0.045;
      root.style.setProperty("--mx", `${x.toFixed(1)}px`);
      root.style.setProperty("--my", `${y.toFixed(1)}px`);
      frame = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    frame = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
      root.style.removeProperty("--mx");
      root.style.removeProperty("--my");
    };
  }, []);

  return (
    <div className="relative isolate bg-bg">
      <div
        aria-hidden="true"
        className="ground-drift pointer-events-none fixed inset-0 z-0"
      />
      <div
        aria-hidden="true"
        className="ground-cursor pointer-events-none fixed inset-0 z-[1]"
      />
      <div
        aria-hidden="true"
        className="ground-grain pointer-events-none fixed inset-0 z-[2]"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
