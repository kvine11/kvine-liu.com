/** The small uppercase mono label that heads a band, with a short leading rule. */
export default function Eyebrow({ children, className = "" }) {
  return (
    <div
      className={`flex items-center gap-3 font-mono text-[11px] tracking-[0.16em] text-ink/50 uppercase ${className}`}
    >
      <span className="block h-px w-7 bg-ink/25" />
      <span>{children}</span>
    </div>
  );
}
