import { useEffect, useState } from "react";

/**
 * Switches the ground between dark and cream.
 *
 * A switch rather than a pictogram, which is the distinction that keeps it
 * inside the no-graphic-marks rule: a sun/moon glyph would be an image
 * standing in for a word, and the only one on the site. A track and a knob
 * aren't a picture of anything — they're a control showing its own
 * position, which is also why this needs no label to be legible.
 *
 * Built from the same tokens as everything else: ink at two alphas, the
 * full radius, no fill and no colour. `role="switch"` + `aria-checked` is
 * the honest semantic — it's a two-state control, and "Cream mode" is a
 * thing that is either on or off.
 *
 * The theme itself is resolved before first paint by the inline script in
 * index.html; this only reads what that decided and writes back. Doing it
 * here instead would flash the dark ground on every cream reload.
 */
export default function ThemeToggle() {
  const [isCream, setIsCream] = useState(false);

  useEffect(() => {
    setIsCream(document.documentElement.dataset.theme === "light");
  }, []);

  const toggle = () => {
    const next = isCream ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    setIsCream(!isCream);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private browsing, or storage disabled. The toggle still works for
      // this visit; it just won't be remembered on the next one.
    }
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isCream}
      aria-label="Cream mode"
      onClick={toggle}
      className={`group relative h-[14px] w-[26px] flex-none rounded-full border transition-colors duration-200 ease-out ${
        isCream ? "border-ink/45" : "border-ink/25 hover:border-ink/40"
      }`}
    >
      <span
        aria-hidden="true"
        className={`absolute top-1/2 left-[2px] h-2 w-2 -translate-y-1/2 rounded-full transition-all duration-200 ease-out ${
          isCream
            ? "translate-x-[12px] bg-ink/85"
            : "translate-x-0 bg-ink/55 group-hover:bg-ink/75"
        }`}
      />
    </button>
  );
}
