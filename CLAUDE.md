# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kevin Liu's personal portfolio — a single-page site built with **React and Tailwind CSS**. It is a static front end: no backend, no API, no data fetching.

The design comes from the "Portfolio Redesign" Claude Design project, artboard **3a** — "Live ground", the round-3 direction. Earlier artboards in that project (2a Minimalist, 1a Press, 1b Terminal, 1c Gallery) are superseded explorations and are not implemented. If the design project gains a round-4 artboard, that becomes the target.

## Project Structure

- `index.html` — the Vite entry shell only. It holds `<div id="root">` and the Google Fonts link; there is no page content in it. Don't add markup here.
- `src/main.jsx` — mounts `<App />`.
- `src/App.jsx` — page composition and the 1180px container.
- `src/index.css` — Tailwind import plus the `@theme` block that registers the Nocturne design tokens.
- `src/components/` — `LiveGround` (the animated backdrop), `NavBar`, `Hero`, `Projects`, `ProjectEntry`, `PlaceholderEntry`, `Contact`, `Eyebrow`, `FadingRule`.
- `src/data/site.js` — **all page copy and links.** Editing the site's content means editing this file, not the components.
- `public/assets/` — static assets, served from the site root (`/assets/...`). Holds `bbq-ink.svg` and nothing else; keep it that way. Note this shares a name with Vite's own output dir, so a build lands both `bbq-ink.svg` and the hashed bundles in `dist/assets/` — harmless, since bundle names are content-hashed and can't collide.

## Commands

- `npm run dev` — Vite dev server with hot reload.
- `npm run build` — static production build into `dist/`.
- `npm run preview` — serve the built output.
- `npm run format` — Prettier over `js/jsx/css/html`.

## Design System — Nocturne

The tokens in `src/index.css` are lifted from the design system's `styles.css`. Follow its rules:

- **Take colors, fonts and radii from the tokens** (`text-ink`, `text-accent`, `bg-bg`, `border-divider`, `rounded-md`). Don't hard-code a hex a token already carries.
- Muted text is the ink token at reduced alpha — `text-ink/55`, `text-ink/45` — standing in for the system's `color-mix()` calls.
- **Accent is a line or a glow, not a flood.** `#9184d9` appears in hairlines, hover states, small marks, and the diffuse background glow. Never fill a solid area with it.
- **Rules fade to transparent** over 48px at each end — that's the `FadingRule` component. Use it rather than a plain border for freestanding rules.
- **Headings stay light.** Hierarchy is size and space; don't bolden past weight 500. 3a runs the h1 at 92px / weight 300 / `-0.05em`, and body copy at weight 300.
- **Two typefaces, by role.** Schibsted Grotesk (`font-sans`) for everything readable; JetBrains Mono (`font-mono`) for the small uppercase labels only — eyebrow, project numbers, years, section headers, "Say hi", "In progress".
- Keyboard focus is the themed 2px accent ring, set once in `index.css`. Don't restyle it per component.

## The Live Ground

`LiveGround` wraps the whole page and paints 3a's animated backdrop. Four stacked layers, all `pointer-events-none` and `aria-hidden`, with content above on `z-10`:

1. **Three drifting blobs** — accent-700, `--color-section` indigo, accent-800 — on 26s/34s/30s loops (`animate-drift-*`, keyframes in `index.css`). Offset periods so the cycle never reads as a loop. `blur(52px) contrast(1.45)`: the contrast hardens the blurred falloff so the mask has an edge to bite into.
2. **A vignette** pulling the ground back to solid `--color-bg` at the edges, keeping type contrast intact.
3. **A cursor-tracked glow** — 620px, accent at 30%. Pointer moves are coalesced to one `requestAnimationFrame` update; without that throttle it repaints a large blurred gradient on every `mousemove`.
4. `isolation: isolate` + `overflow-hidden` on the root contain the stacking context and clip the blobs, which are deliberately inset `-20%` beyond the frame.

The `dot-screen` utility (also `index.css`) masks layers 1 and 3 through a repeating 8px dot grid. **This is the signature of the direction** — it turns soft gradients into a fine halftone screen rather than a generic blur. Masking has no Tailwind utility, hence the custom `@utility`.

Under `prefers-reduced-motion` the global rule in `index.css` freezes the drift; the cursor glow stays, since it's direct response to input rather than ambient motion.

## Layout Notes

The design was drawn at 1180px wide. Breakpoints stage down from it:

- Below `md` — everything stacks to one column.
- `md` (768px) — the 44px number column appears; project links sit under the title.
- `lg` (1024px) — the design's full three-column project row.

## The BBQ Logo

`public/assets/bbq-ink.svg` is the Team 2714 mark, **pre-recolored to the ground** — no CSS filter or blend mode, which is what 3a changed about it. The fills, in document order:

- Texas silhouette → `#161826`, a touch lighter than the `#0d0a14` ground, so it reads as a faint shape rather than a white slab.
- The "2714 BBQ" type → `#e9e9ed`, the ink token.
- The flame → `#F05A28`, the team's orange, untouched.

It was generated from the original `bbq.svg` (black type on a white silhouette) by substituting those eight fills; the path data is byte-identical. The earlier 2a approach — `mix-blend-lighten` plus `invert(1) hue-rotate(180deg)` — is gone, and with it the need for `hue-rotate` to rescue the orange from `invert`. If the logo is ever re-exported, recolor the fills rather than reaching for filters.

## Version Control

- Tracked in git, pushed to a private GitHub repo: `kvine11/Personal-Portfolio` (https://github.com/kvine11/Personal-Portfolio).
- `CLAUDE.local.md` and `.claude/settings.local.json` are intentionally git-ignored — personal/local-only files.
- The user uses **GitHub Desktop** day-to-day rather than the terminal: edit files → review Changes in GitHub Desktop → write commit message → Commit to main → Push origin.

## Next Steps

- Two project slots (`02`, `03`) are placeholders in `src/data/site.js`. Give one a `title`, `description` and `links` to fill it.
- `github.svg`, `linkedin.svg`, `me.jpeg` and the original `bbq.svg` were removed from `public/assets/` — 3a uses text contact links, no photo, and only the pre-recolored logo. All remain in git history if wanted back.
