import { useEffect } from "react";

/**
 * Three fixed layers under the page: a slow drift, a pool trailing the
 * cursor, and grain over both. Fixed rather than absolute, so the page
 * scrolls over the ground instead of dragging it along.
 *
 * See "The Ground" in CLAUDE.md before changing any of it.
 */
export default function Ground({ children }) {
  useEffect(() => {
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
      // 0.045 lands the pool ~a second behind the pointer. That lag is the
      // point — raise it and this becomes a spotlight.
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
