import { useCallback, useEffect, useRef, useState } from "react";

/**
 * The 3a "live ground": three slow accent blobs drifting behind the page,
 * plus a glow that follows the cursor. Everything is pushed through an 8px
 * halftone dot mask (`dot-screen`), which is what keeps it from looking like
 * a generic soft blur — the gradients read as a fine print screen instead.
 *
 * Children render above it all on z-10. `isolate` keeps the blend and stacking
 * contained so the glow can't leak over the rest of the document.
 */
export default function LiveGround({ children }) {
  const root = useRef(null);
  // Start the glow off where the design parks it, so the first paint before
  // any pointer movement matches the artboard.
  const [glow, setGlow] = useState({ x: 700, y: 260 });
  const frame = useRef(0);

  const onPointerMove = useCallback((e) => {
    const el = root.current;
    if (!el) return;
    // Coalesce to one update per frame — mousemove fires far more often
    // than we can usefully repaint a 620px blurred gradient.
    if (frame.current) return;
    const { clientX, clientY } = e;
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      const r = el.getBoundingClientRect();
      setGlow({ x: clientX - r.left, y: clientY - r.top });
    });
  }, []);

  useEffect(
    () => () => frame.current && cancelAnimationFrame(frame.current),
    []
  );

  return (
    <div
      ref={root}
      onPointerMove={onPointerMove}
      className="relative isolate overflow-hidden bg-bg"
    >
      {/* The drifting blobs. contrast() hardens the blurred edges so the dot
          mask has something with enough falloff to bite into. */}
      <div
        aria-hidden="true"
        className="dot-screen pointer-events-none absolute -inset-[20%] z-0 opacity-60 [filter:blur(52px)_contrast(1.45)]"
      >
        <div className="absolute top-[2%] left-[2%] h-[58%] w-[52%] animate-drift-a rounded-full bg-[radial-gradient(circle,var(--color-accent-700),transparent_64%)]" />
        <div className="absolute top-[18%] right-0 h-[50%] w-[46%] animate-drift-b rounded-full bg-[radial-gradient(circle,var(--color-section),transparent_66%)]" />
        <div className="absolute bottom-0 left-[20%] h-[46%] w-[58%] animate-drift-c rounded-full bg-[radial-gradient(circle,var(--color-accent-800),transparent_68%)]" />
      </div>

      {/* Vignette — pulls the ground back to solid at the edges so the glow
          stays a centre-weighted event and the type keeps its contrast. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(80%_62%_at_36%_30%,transparent_0%,color-mix(in_srgb,var(--color-bg)_80%,transparent)_52%,var(--color-bg)_86%)]"
      />

      {/* Cursor glow. */}
      <div
        aria-hidden="true"
        className="dot-screen pointer-events-none absolute z-0 -mt-[310px] -ml-[310px] h-[620px] w-[620px] bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-accent)_30%,transparent),transparent_62%)] [filter:blur(10px)]"
        style={{ left: `${glow.x}px`, top: `${glow.y}px` }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
