# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kevin Liu's personal portfolio — a single-page site built with **React and Tailwind CSS**. It is a static front end: no backend, no API, no data fetching.

The current direction (as of the September 2026 redesign) departs from the earlier "Portfolio Redesign" Claude Design project entirely — 3a "Live ground" and the artboards before it (2a Minimalist, 1a Press, 1b Terminal, 1c Gallery) are all superseded. The site is now a deliberately minimal, text-first, single-color (neutral-only) direction: no accent color, no logo/graphic marks, no ambient motion. See "Design System" and "The Ground" below for the current rules.

## Project Structure

- `index.html` — the Vite entry shell only. It holds `<div id="root">` and the Google Fonts link; there is no page content in it. Don't add markup here.
- `src/main.jsx` — mounts `<App />`.
- `src/App.jsx` — page composition and the 840px container.
- `src/index.css` — Tailwind import plus the `@theme` block that registers the design tokens (a warm-neutral grayscale system — see "Design System" below).
- `src/components/` — `Ground` (the static backdrop gradient), `NavBar`, `Hero`, `Projects`, `ProjectEntry`, `PlaceholderEntry`, `Contact`, `Eyebrow`, `FadingRule`, `Reveal` (scroll-in fade/lift, used by `Projects` and `Contact`).
- `src/data/site.js` — **all page copy and links.** Editing the site's content means editing this file, not the components. `projects` is designed to grow — add entries with `number`/`title`/`description`/`links` and they render automatically, no component changes needed.
- `public/assets/` — static assets, served from the site root (`/assets/...`). Holds `bbq-ink.svg`, currently **unreferenced** — the current direction is text-only, no logo. Left in place rather than deleted in case a future direction brings a graphic mark back. Note this shares a name with Vite's own output dir, so a build lands both `bbq-ink.svg` and the hashed bundles in `dist/assets/` — harmless, since bundle names are content-hashed and can't collide.

## Commands

- `npm run dev` — Vite dev server with hot reload.
- `npm run build` — static production build into `dist/`.
- `npm run preview` — serve the built output.
- `npm run format` — Prettier over `js/jsx/css/html`.

## Design System

The tokens in `src/index.css` are a warm-neutral grayscale system — **no accent color anywhere.** Hierarchy and interactive state come entirely from `ink` at different opacities, plus type size, weight, and spacing.

- **Take colors, fonts and radii from the tokens** (`text-ink`, `bg-bg`, `border-divider`, `rounded-md`). Don't hard-code a hex a token already carries.
- **There is no `--color-accent`.** Muted text, dividers, and hover states are all the ink token at reduced alpha — `text-ink/65`, `text-ink/45`, `border-ink/40` on hover. If a change seems to call for introducing a color, it almost certainly doesn't — reach for a different opacity step instead.
- **Rules fade to transparent** over 48px at each end — that's the `FadingRule` component. Use it rather than a plain border for freestanding rules (this survived the redesign; it wasn't part of what read as generic).
- **Headings stay light.** Hierarchy is size and space; don't bolden past weight 500. The h1 runs at `clamp(52px,11vw,92px)` / weight 300 / `-0.05em`, body copy at weight 300.
- **Two typefaces, by role.** Schibsted Grotesk (`font-sans`) for everything readable; JetBrains Mono (`font-mono`) for the small uppercase labels only — eyebrow, project numbers, years, section headers, "Say hi", "In progress". This is a utility/caption face, not decoration, which is why it survived the move to text-only.
- **No logo, no graphic marks.** The FRC/BBQ mark that used to sit in the Projects entry is gone — text only. See "The BBQ Logo" below if that ever changes.
- Keyboard focus is a 2px `ink` ring, set once in `index.css`. Don't restyle it per component. (Not an accent-color decision — focus indication is a functional state, not branding, so it stays even though the accent color is gone.)

## The Ground

`Ground` (`src/components/Ground.jsx`) wraps the whole page and paints a single, fully static backdrop: one soft radial gradient (`color-mix(in srgb, var(--color-ink) 6%, transparent)`) lightening the area behind the hero, fading to flat `--color-bg` everywhere else. `pointer-events-none` and `aria-hidden`, content sits above it on `z-10`.

This replaces the previous "Live Ground" — three drifting colored blobs, a cursor-tracked glow, and a halftone dot-mask. That system is gone entirely: no animation, no color, no texture. The gradient is the one place any ambient depth exists at all; it does not move, respond to the cursor, or use a second color. If motion or texture ever comes back here, it should be reintroduced deliberately and sparingly, not restored wholesale — the previous version is what read as generic/templated, not the concept of a backdrop itself.

## Scroll Reveal

`Reveal` (`src/components/Reveal.jsx`) fades and lifts (`translate-y-3` → `translate-y-0`, `opacity-0` → `100`) its children into view the first time they cross into the viewport, via `IntersectionObserver`, then leaves them alone — no replay. Used by `Projects` (wraps each project entry) and `Contact` (wraps the footer).

Defaults to `shown = true` if `IntersectionObserver` is unsupported, and immediately shows anything already in view on mount — nothing depends on JS running before first paint for content that would otherwise be visible. `prefers-reduced-motion` is handled globally in `index.css` (it zeroes all transition/animation durations), so `Reveal` needs no reduced-motion logic of its own.

Deliberately **not** applied to `Hero` — the first thing a user sees on load shouldn't fade in; `Reveal` is for content encountered by scrolling, which is exactly why it matters more as more projects get added to `site.js`.

## Layout Notes

The container is 840px (`App.jsx`) — narrower than the original 1180px draft, closer to a text document than a landing page. Breakpoints:

- Below `md` — everything stacks to one column.
- `md` (768px) and up — the 44px number column appears next to project/contact content; links stack below the title within that column.
- There is no `lg`-only layout change. The earlier three-column project row (number / title / links side by side) is gone — links always sit stacked under the title, at every viewport. Don't reintroduce a wider split without discussing it first; the stacked form is a deliberate simplification, not a placeholder.

## The BBQ Logo

**Currently unreferenced.** The site is text-only as of the current direction — no component renders this. Left in `public/assets/` rather than deleted in case a future direction wants a graphic mark again; the notes below describe the asset as it exists on disk, not anything currently on the page.

`public/assets/bbq-ink.svg` is the Team 2714 mark, **pre-recolored to the (former) ground** — no CSS filter or blend mode. The fills, in document order:

- Texas silhouette → `#161826`, a touch lighter than the `#0d0a14` ground, so it reads as a faint shape rather than a white slab.
- The "2714 BBQ" type → `#e9e9ed`, the ink token.
- The flame → `#F05A28`, the team's orange, untouched.

It was generated from the original `bbq.svg` (black type on a white silhouette) by substituting those eight fills; the path data is byte-identical. The earlier 2a approach — `mix-blend-lighten` plus `invert(1) hue-rotate(180deg)` — is gone, and with it the need for `hue-rotate` to rescue the orange from `invert`. If the logo is ever re-exported, recolor the fills rather than reaching for filters.

## Version Control

- Tracked in git, pushed to a private GitHub repo: `kvine11/Personal-Portfolio` (https://github.com/kvine11/Personal-Portfolio).
- `CLAUDE.local.md` and `.claude/settings.local.json` are intentionally git-ignored — personal/local-only files.
- The user uses **GitHub Desktop** day-to-day rather than the terminal: edit files → review Changes in GitHub Desktop → write commit message → Commit to main → Push origin.

## Next Steps

- Two project slots (`02`, `03`) are still placeholders in `src/data/site.js`. More real projects are expected soon — give a slot a `title`, `description` and `links` to fill it; the numbered-list layout and `Reveal` animation are built to keep working as entries are added, no component changes needed for more of the same shape (a title/description/links project).
- If a future addition isn't shaped like a project (e.g. an "Experience" or "Skills" section, not just another list entry), that's a layout decision to make deliberately, not to force into the Projects list — bring it up before building it.
- `github.svg`, `linkedin.svg`, `me.jpeg` and the original `bbq.svg` were removed from `public/assets/` earlier and remain in git history if wanted back.
