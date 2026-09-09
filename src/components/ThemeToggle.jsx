import { useEffect, useState } from "react";

/**
 * Dark ⇄ cream. The theme is resolved before first paint by the inline
 * script in index.html; this only reads what that decided and writes back.
 * Resolving it here instead would flash the dark ground on cream reloads.
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
      // Storage blocked. Toggling still works, it just isn't remembered.
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
