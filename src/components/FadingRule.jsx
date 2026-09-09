/**
 * A rule that fades to transparent over 48px at each end rather than
 * stopping cleanly. No Tailwind utility for a four-stop gradient, hence the
 * style object.
 */
export default function FadingRule() {
  return (
    <div
      aria-hidden="true"
      className="h-px"
      style={{
        background:
          "linear-gradient(to right, transparent, var(--color-divider) 48px, var(--color-divider) calc(100% - 48px), transparent)",
      }}
    />
  );
}
