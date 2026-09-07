/**
 * A quiet, fixed backdrop: one soft radial gradient lightening the area
 * behind the hero, falling back to flat ground everywhere else. Replaces
 * the old drifting-blob / cursor-glow / halftone treatment — same idea of
 * ambient depth, none of the motion or color.
 */
export default function Ground({ children }) {
  return (
    <div className="relative isolate overflow-hidden bg-bg">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(120% 60% at 28% 0%, color-mix(in srgb, var(--color-ink) 6%, transparent), transparent 62%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
