# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kevin Liu's personal portfolio — a single-page site built with **React and Tailwind CSS**. It is a static front end: no backend, no API, no data fetching.

The design comes from the "Portfolio Redesign" Claude Design project (artboard **2a**, the Nocturne round-2 direction). The other three artboards in that project (1a Press, 1b Terminal, 1c Gallery) were earlier explorations and are not implemented.

## Project Structure

- `index.html` — the Vite entry shell only. It holds `<div id="root">` and the Google Fonts link; there is no page content in it. Don't add markup here.
- `src/main.jsx` — mounts `<App />`.
- `src/App.jsx` — page composition and the 1180px container.
- `src/index.css` — Tailwind import plus the `@theme` block that registers the Nocturne design tokens.
- `src/components/` — `NavBar`, `Hero`, `Projects`, `ProjectEntry`, `PlaceholderEntry`, `Contact`, `Eyebrow`, `FadingRule`.
- `src/data/site.js` — **all page copy and links.** Editing the site's content means editing this file, not the components.
- `public/assets/` — static assets, served from the site root (`/assets/...`). Holds `bbq.svg` and nothing else; keep it that way. Note this shares a name with Vite's own output dir, so a build lands both `bbq.svg` and the hashed bundles in `dist/assets/` — harmless, since bundle names are content-hashed and can't collide.

## Commands

- `npm run dev` — Vite dev server with hot reload.
- `npm run build` — static production build into `dist/`.
- `npm run preview` — serve the built output.
- `npm run format` — Prettier over `js/jsx/css/html`.

## Design System — Nocturne

The tokens in `src/index.css` are lifted from the design system's `styles.css`. Follow its rules:

- **Take colors, fonts and radii from the tokens** (`text-ink`, `text-accent`, `bg-bg`, `border-divider`, `rounded-md`). Don't hard-code a hex a token already carries.
- Muted text is the ink token at reduced alpha — `text-ink/55`, `text-ink/45` — standing in for the system's `color-mix()` calls.
- **Accent is a line, not a flood.** `#9184d9` appears in hairlines, hover states and small marks. Never fill a large area with it.
- **Rules fade to transparent** over 48px at each end — that's the `FadingRule` component. Use it rather than a plain border for freestanding rules.
- **Headings stay light.** Hierarchy is size and space; don't bolden past weight 500.
- Keyboard focus is the themed 2px accent ring, set once in `index.css`. Don't restyle it per component.

## Layout Notes

The design was drawn at 1180px wide. Breakpoints stage down from it:

- Below `md` — everything stacks to one column.
- `md` (768px) — the 44px number column appears; project links sit under the title.
- `lg` (1024px) — the design's full three-column project row.

## The BBQ Logo

`public/assets/bbq.svg` is the Team 2714 mark: a white Texas silhouette behind black "2714 BBQ" type and an orange `#F05A28` flame. On the dark ground it goes through Nocturne's image treatment in `ProjectEntry`:

`mix-blend-lighten` + `filter: invert(1) hue-rotate(180deg) brightness(0.92)`

- `lighten` drops everything darker than the page, so the white silhouette falls away and only the wordmark reads — this is the system's stated doctrine for imagery.
- `invert(1)` lifts the black type to light ink.
- `hue-rotate(180deg)` puts back the brand orange, which `invert` alone turns blue.

The negative `-mr-4 -ml-1` pulls in the dead space the now-invisible silhouette still occupies in the SVG's bounding box, so the gap to the heading reads as designed. If the logo is ever swapped, re-check all four of these together.

## Version Control

- Tracked in git, pushed to a private GitHub repo: `kvine11/Personal-Portfolio` (https://github.com/kvine11/Personal-Portfolio).
- `CLAUDE.local.md` and `.claude/settings.local.json` are intentionally git-ignored — personal/local-only files.
- The user uses **GitHub Desktop** day-to-day rather than the terminal: edit files → review Changes in GitHub Desktop → write commit message → Commit to main → Push origin.

## Next Steps

- Two project slots (`02`, `03`) are placeholders in `src/data/site.js`. Give one a `title`, `description` and `links` to fill it.
- The old `github.svg`, `linkedin.svg` and `me.jpeg` were removed from `public/assets/` — the 2a design uses text contact links and no photo. They remain in git history if ever wanted back.
