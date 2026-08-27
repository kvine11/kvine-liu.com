/**
 * The small uppercase mono label that heads each band. `accent` swaps in the
 * blurple and prefixes the short solid accent mark the system allows.
 */
export default function Eyebrow({ children, accent = false, className = "" }) {
  return (
    <div
      className={`flex items-center gap-3 font-mono text-[11px] tracking-[0.16em] uppercase ${
        accent ? "text-accent" : "text-ink/50"
      } ${className}`}
    >
      {accent && <span className="block h-px w-7 bg-accent" />}
      <span>{children}</span>
    </div>
  );
}
