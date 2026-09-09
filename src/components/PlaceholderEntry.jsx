/** An unfilled slot — held open, deliberately quiet. */
export default function PlaceholderEntry({ number }) {
  return (
    <div className="grid grid-cols-1 items-baseline gap-4 py-8 md:grid-cols-[44px_minmax(0,1fr)] md:gap-12">
      <span className="font-mono text-xs text-ink/32">{number}</span>
      <div className="flex items-baseline justify-between gap-[16.8px]">
        <span className="text-[26px] font-light text-ink/40">Coming soon</span>
        <span className="font-mono text-[11px] tracking-[0.14em] text-ink/32 uppercase">
          In progress
        </span>
      </div>
    </div>
  );
}
