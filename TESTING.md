# Testing

100% test coverage is the key to great vibe coding. Tests let you move fast, trust your instincts, and ship with confidence — without them, vibe coding is just yolo coding. With tests, it's a superpower.

## Stack

- **Vitest 5.0.0** is the runner. It reads `vite.config.js`, so tests go through the same React transform as `npm run dev`.
- **React Testing Library 16.3.3** renders components and queries them the way a visitor would: by role, accessible name, and text.
- **jsdom 30.0.1** is the browser environment.
- **@testing-library/jest-dom 7.0.1** adds DOM matchers, loaded once in `test/setup.js`.

## Running

- `npm test` runs the suite once. This is what CI runs (`.github/workflows/test.yml`).
- `npx vitest` runs it in watch mode.

## Layers

- **Unit:** one component's behavior, with props built inside the test. See `test/ProjectEntry.test.jsx` and `test/ThemeToggle.test.jsx`.
- **Integration:** a composed section rendered with fixture data mocked in for `src/data/site.js`. See `test/Projects.test.jsx`. Mock the data module so a test pins a rule (numbering, link shapes) rather than today's copy.
- **Smoke:** `npm run build` has to succeed. There is no server to smoke-test.
- **E2E:** none. Visual and interaction checks run through `/design-review` and `/qa` against `npm run dev`.

## Conventions

- Tests live in `test/`, named `<Component>.test.jsx`, and import from `../src/...`.
- Import `describe`, `it`, `expect` and `vi` from `vitest` explicitly. Globals are off.
- Call `cleanup` in `afterEach`, and reset anything a test put on `document` or in `localStorage`.
- Query by role and accessible name first and by text second. Never query by class name: classes are design, and a design change shouldn't break a test.
- Test what the page promises (which entry shape gets which links, how entries are numbered, that the theme choice persists), not how it's styled.
