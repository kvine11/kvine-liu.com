# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Project Overview

This is a personal HTML/CSS learning project. It is not a production codebase — the goal is to learn and experiment with HTML and CSS fundamentals.

## Project Structure

- `index.html` — single HTML page demonstrating HTML/CSS concepts (currently: document structure, meta tags, images, headings, paragraphs, float layout). Uses an inline `<style>` block.
- `about.html` — secondary practice page linked from `index.html`.
- `website.html` — work-in-progress personal portfolio page (name, bio, projects, contact section). Uses an inline `<style>` block. This is the main page being actively developed right now.
- `images/` — image assets used across the pages.
- `.vscode/settings.json` — VS Code Live Preview pointed at `index.html`; also configures format-on-save with Prettier.
- `package.json` / `.prettierrc` / `.prettierignore` — Prettier added purely as a formatting tool (not a build system). Run `npm run format` to format all `.html`/`.css` files.

## Tooling

- No build system or framework — plain HTML and CSS only.
- Prettier is installed as a dev dependency for code formatting (`npm run format`), with matching VS Code format-on-save settings. This does not change the vanilla HTML/CSS nature of the project.
- Preview via VS Code Live Preview extension.

## Version Control

- This project is tracked in git and pushed to a private GitHub repo: `kvine11/Personal-Portfolio` (https://github.com/kvine11/Personal-Portfolio).
- `Codex.local.md` and `.Codex/settings.local.json` are intentionally git-ignored — they're personal/local-only files, not meant to be pushed.
- The user is using **GitHub Desktop** as their day-to-day git client (rather than the terminal) — add the local repo via "File → Add Local Repository," then the normal flow is: edit files → review Changes in GitHub Desktop → write commit message → Commit to main → Push origin.

## Working in This Repo

- Edit the relevant `.html` file directly — changes are visible immediately via Live Preview.
- There is no compilation step.
- This is a learning environment, so prefer clear, well-commented examples over terse code.
- Keep styling inline per-page (`<style>` in `<head>`) unless asked to extract to a shared stylesheet — this matches the current convention across `index.html` and `website.html`.

## website.html — Status & Next Steps

`website.html` is the in-progress personal site. Current state:
- Name (`h1`) and bio section are in place.
- Projects section lists FRC Programming with real GitHub links (Crescendo, Reefscape, Rebuilt repos); two more project slots are still `TBD`.
- Contact section (Email, GitHub, LinkedIn) currently uses placeholder `TBD Link` hrefs and plain text links — no real URLs or icons yet.

Planned improvements (see inline `<!-- TODO -->` comments in the file too):
- Add real links for Email, GitHub, and LinkedIn in the Contact section.
- Add icon images next to each Contact link (e.g. small GitHub/LinkedIn/email icons) instead of plain text links.
- Decide whether to bring the profile picture (`<img>`) back into the page — it was removed during a recent edit and the page currently has no photo.
- Fill in the two remaining `TBD` project entries.
