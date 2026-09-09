# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kevin Liu's personal portfolio — a single-page site built with **React and Tailwind CSS**. It is a static front end: no backend, no API, no data fetching.

The current direction (as of the September 2026 redesign) departs from the earlier "Portfolio Redesign" Claude Design project entirely — 3a "Live ground" and the artboards before it (2a Minimalist, 1a Press, 1b Terminal, 1c Gallery) are all superseded. The site is a deliberately minimal, text-first, single-color (neutral-only) direction: no accent color, no logo/graphic marks. Ambient motion came back in the live-ground pass — narrowly, on ink only. See "Design System" and "The Ground" below for the current rules.

## Project Structure

- `index.html` — the Vite entry shell only. It holds `<div id="root">`, the Google Fonts link, and the inline theme script. Don't add page markup here. The theme script is the one deliberate exception and has to stay inline and first: anything deferred resolves after first paint, which means a cream-mode reload flashes the dark ground.
- `src/main.jsx` — mounts `<App />`.
- `src/App.jsx` — page composition and the 840px container.
- `src/index.css` — Tailwind import, the `@theme` block that registers the design tokens (a true-neutral grayscale system — see "Design System" below), and the ground/heading animation layer (`.ground-drift`, `.ground-cursor`, `.ground-grain`, `.band-letter` plus their keyframes). Those live in CSS rather than as utilities because they're multi-stop gradients and keyframes.
- `src/components/` — `Ground` (the three-layer live backdrop), `NavBar`, `ThemeToggle`, `Hero`, `Projects`, `BandHeading`, `ProjectEntry`, `PlaceholderEntry`, `Contact`, `Eyebrow`, `FadingRule`, `Reveal` (scroll-in fade/lift, used by `Projects` and `Contact`).
- `src/data/site.js` — **all page copy and links.** Editing the site's content means editing this file, not the components. `bands` is designed to grow: add an entry with `title`/`meta`/`description`/`tags` (and optionally `links`) to either band and it renders automatically, no component changes needed. Numbering is derived from position, so inserting an entry never means renumbering the ones after it.
- `public/assets/` — static assets, served from the site root (`/assets/...`). Holds `bbq-ink.svg`, currently **unreferenced** — the current direction is text-only, no logo. Left in place rather than deleted in case a future direction brings a graphic mark back. Note this shares a name with Vite's own output dir, so a build lands both `bbq-ink.svg` and the hashed bundles in `dist/assets/` — harmless, since bundle names are content-hashed and can't collide.

## Commands

- `npm run dev` — Vite dev server with hot reload.
- `npm run build` — static production build into `dist/`.
- `npm run preview` — serve the built output.
- `npm run format` — Prettier over `js/jsx/css/html`.

## Design System

The tokens in `src/index.css` are a true-neutral grayscale system — **no accent color anywhere, and no warm cast either.** The ground ran warm for a while (`#151310` under `#f6f4ef`, a brown-black under a warm off-white); the wide-tracked band headings and the outlined tag chips both read colder than that, which is what made the pairing feel off. It is now `#0f0f0f` / `#f4f4f4`, neutral on both ends, so grain and drift are the only things breaking up the field. Hierarchy and interactive state come entirely from `ink` at different opacities, plus type size, weight, and spacing.

- **Take colors, fonts and radii from the tokens** (`text-ink`, `bg-bg`, `border-divider`, `rounded-md`). Don't hard-code a hex a token already carries.
- **There is no `--color-accent`.** Muted text, dividers, and hover states are all the ink token at reduced alpha — `text-ink/65`, `text-ink/45`, `border-ink/40` on hover. If a change seems to call for introducing a color, it almost certainly doesn't — reach for a different opacity step instead.
- **Rules fade to transparent** over 48px at each end — that's the `FadingRule` component. Use it rather than a plain border for freestanding rules (this survived the redesign; it wasn't part of what read as generic).
- **Headings stay light.** Hierarchy is size, space, and _tracking_; don't bolden past weight 500. The h1 is two spans in one heading — a quiet greeting at `clamp(18px,3.6vw,26px)` / `ink/55` sitting over the name at `clamp(46px,9vw,72px)` / `-0.045em`, both weight 300. Body copy is weight 300. The name used to run to 92px and did all the talking, which left no room for anything to precede it; it came down so the greeting could sit above it and still clear the 38px band headings.
- **Tracking is doing real work now.** The h1 name is tight (`-0.045em`); the band headings (`BandHeading`) are open (`+0.1em`, uppercase, weight 300, `clamp(28px,6vw,38px)`). The contrast between the two is what gives the sections presence. If a band heading needs to be louder, open it further — don't bolden it.
- **Tags are outlined chips**, not a dot-separated line: `rounded-md`, `border-ink/16`, `bg-ink/5`, `text-ink/68`. The old reasoning against chips — that one would be the only "accent" in the system — still holds for a _colored_ chip, which is why the box is a neutral outline. If they need more presence, raise the fill; don't reach for a hue.
- **Two link shapes, and an entry picks one.** `href` on the entry means the entry _is_ the thing: the title becomes the link and the arrow rides beside it, because a single destination doesn't need a labelled row restating the title (YouthWell). `links` means the entry collects several destinations that each need a year and label of their own (FRC's three seasons). An entry with neither ends after its tags. Don't give a single-destination entry a `links` array just for symmetry — the whole point is that the two read differently.
- **Every entry carries a `meta` line** (mono, uppercase, `ink/48`) under its title: org · role · year, three slots. It's what lets an entry stand with no links at all, which is the normal case in the research band. Don't drop it to save a line, and don't add a fourth slot — where a fact doesn't fit, swap it against the one it beats (UTD dropped "TAST STEM-BRIDGE" to carry "Advised by Prof. Yanwen Xu").
- **The meta line is a label face, so keep prose out of it.** It holds categorical facts — institutions, roles, years, results. A person's name set in 11px mono uppercase at `0.1em` reads as a database field and is genuinely hard to pick out of the surrounding label; if something reads as a sentence rather than a tag, it belongs in the description instead. The advisor is the deliberate exception, kept in the line because it's a credential.
- **Two typefaces, by role.** Schibsted Grotesk (`font-sans`) for everything readable, including the band headings; JetBrains Mono (`font-mono`) for the small uppercase labels only — eyebrow, entry numbers, years, `meta` context lines, tag chips, band year ranges, "Say hi", "In progress". This is a utility/caption face, not decoration, which is why it survived the move to text-only.
- **No logo, no graphic marks.** The FRC/BBQ mark that used to sit in the Projects entry is gone — text only. See "The BBQ Logo" below if that ever changes.
- Keyboard focus is a 2px `ink` ring, set once in `index.css`. Don't restyle it per component. (Not an accent-color decision — focus indication is a functional state, not branding, so it stays even though the accent color is gone.)

## Theme

Two grounds, one system. Dark is the default; cream is `:root[data-theme="light"]` overriding the same three tokens in `index.css`. **It is not a second palette** — still ink-on-ground at varying alpha, still no accent, and every `ink/NN` in the codebase works unchanged in both. Adding a color for one mode would break both.

- **Resolution order:** stored choice → `prefers-color-scheme` → dark. The inline script in `index.html` settles this before first paint; `ThemeToggle` only reads what it decided and writes back to `localStorage` (wrapped in try/catch — private browsing just means the choice isn't remembered).
- **The toggle is a switch, not a pictogram** — a 26×14 track with a knob, built from ink at two alphas and `rounded-full`. That distinction is what keeps it inside the no-graphic-marks rule: a sun/moon glyph would be an image standing in for a word, and the only one on the site; a track and a knob aren't a picture of anything, they're a control showing its own position. Which is also why it carries no visible label. Semantics are `role="switch"` + `aria-checked` with `aria-label="Cream mode"` — it's a two-state control, and cream mode is a thing that is either on or off.
- **What genuinely inverts is what the ground is _doing_.** In cream the drift pools lighten toward white rather than darkening — a pool of ink drifting across pale paper reads as a stain. One low ink pool stays for depth.
- **Grain has to switch to `multiply` on cream.** Screened over pale ground it washes out entirely, and the texture is the whole reason the ground reads as material rather than a gradient.

## The Ground

`Ground` (`src/components/Ground.jsx`) wraps the whole page and paints three **fixed** layers beneath it. Fixed, not absolute: the page scrolls _over_ the ground rather than dragging it along. All three are `pointer-events-none` and `aria-hidden`; content sits above them on `z-10`.

1. **Drift** (`.ground-drift`) — four ink-only radial pools on a 64s `ease-in-out alternate` cycle, 3–8% ink. 64s is deliberately past the point where you can catch it moving: the ground is somewhere else than when you landed, without ever having appeared to travel.
2. **Cursor** (`.ground-cursor`) — one more pool at `var(--mx)`/`var(--my)`, which `Ground` sets from a rAF loop damped at **0.045 per frame**. That damping is the design, not a tuning detail: the pool arrives roughly a second behind the pointer, which is what makes it read as ambient light rather than a spotlight. Skipped entirely without `(hover: hover)`, so it never runs on touch.
3. **Grain** (`.ground-grain`) — one inline SVG `feTurbulence` tile at 4.2%, shifting on a 6-step loop. Cheapest thing on the page and the one doing the most work: it's what separates "material" from "a CSS gradient". No network request.

**Why this isn't the old Live Ground.** A previous version — three drifting _colored_ blobs, a cursor-tracked glow, and a halftone dot-mask — was torn out for reading generic/templated. This is a deliberate, narrow return of motion, and it differs on every axis that made that one generic: ink only (no second hue), 64s (not seconds), 3–8% (never visible as shapes), grain (not halftone dots), and a cursor pool that lags rather than tracks. Keep it that way. If it ever starts reading as templated again, **cut the cursor layer first** — it's the most expendable and the closest to the old behavior.

The earlier static gradient this replaced sized itself as `120% 60%` of the wrapper, which is the full _document_ height — so every entry added to the page smeared the hero glow further into a vague wash. Anything painted here should be sized in px or anchored to the viewport, never as a percentage of a document whose length keeps changing.

## Scroll Reveal

`Reveal` (`src/components/Reveal.jsx`) fades and lifts (`translate-y-3` → `translate-y-0`, `opacity-0` → `100`) its children into view the first time they cross into the viewport, via `IntersectionObserver`, then leaves them alone — no replay. Used by `Projects` (wraps each project entry) and `Contact` (wraps the footer).

Defaults to `shown = true` if `IntersectionObserver` is unsupported, and immediately shows anything already in view on mount — nothing depends on JS running before first paint for content that would otherwise be visible. `prefers-reduced-motion` is handled globally in `index.css` (it zeroes all transition/animation durations), so `Reveal` needs no reduced-motion logic of its own.

`BandHeading` implements the same observer contract independently (same defaults, same early-exit when already on screen) to stagger its letters in, rather than wrapping in `Reveal` — it needs to add a class per letter, not fade a block.

Deliberately **not** applied to `Hero` — the first thing a user sees on load shouldn't fade in; `Reveal` is for content encountered by scrolling, which is exactly why it matters more as more projects get added to `site.js`.

## Layout Notes

The container is 840px (`App.jsx`) — narrower than the original 1180px draft, closer to a text document than a landing page.

**One page, two bands.** `Projects` renders every band in `site.js` (`Projects`, then `Research`), separated by 104px. Splitting them onto separate routes was considered and rejected: with a handful of entries it gives two thin pages and costs a router plus SPA-fallback host config, and the single-scroll document form is the concept. The split that will earn its keep later is a **per-entry case study** (`/work/<slug>`) when an entry deserves 800 words — and that one leaves both bands exactly as they are. Don't split by category.

Breakpoints:

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

- **Tags are user-specified, not inferred.** The current sets were given directly and supersede anything the resume implies (YouthWell is React / JavaScript / Landbot, not the Supabase / Framer Motion the resume lists). Don't "correct" them against another source.
- **Descriptions follow "mechanism first, then the concrete result"** and stay to one or two lines. They also shouldn't repeat a tag — FRC's description dropped "pose estimation" when that became a tag. Still expected to get another pass; that's content work in `site.js`, no component changes.
- Both bands are full. Adding an entry is a `site.js` edit: `title`, `meta`, `description`, `tags`, and `links` only if there's something public to link. `PlaceholderEntry` still renders any entry without a `title`, so an open slot is `{}`.
- **Not every entry has links, by design.** The research band's repositories are private, so those entries carry no `links` key at all and `ProjectEntry` guards on it. Don't add a link that points at nothing to make a row look complete — the `meta` line is what carries the entry.
- If a future addition isn't shaped like an entry (e.g. a "Skills" section, not another row in a band), that's a layout decision to make deliberately, not to force into a band — bring it up before building it.
- `github.svg`, `linkedin.svg`, `me.jpeg` and the original `bbq.svg` were removed from `public/assets/` earlier and remain in git history if wanted back.
