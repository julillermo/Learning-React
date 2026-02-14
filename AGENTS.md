# AGENTS

## Purpose

- Use this file as the quick reference when you return to the learning-react workspace via AI chat.
- Feel free to tweak AGENTS.md files the next time you hit a blocker—modify/delete as needed to unblock future requests.
- Feel free to create a app/project specific AGENTS.md file to add granulity of control for specific apps/projects.

## Tech stack

- Root orchestrates a pnpm workspace; the active app lives in `active/learn-react-2026-v19`.
- `learn-react-2026-v19` is a Vite + React 19 + TypeScript app with vanilla-extract CSS and ESLint.

## What’s here

- `active/learn-react-2026-v19/src/main.tsx` bootstraps the app and mounts `<App />`.
- `App.tsx` holds the page registry, theme toggle, and wires up `Sidebar` + `PageArea` components.
- `components/` contains shared UI pieces (e.g., `PageArea.tsx`) styled via vanilla-extract (`*.css.ts`).
- `pages/` keeps the sample views (`Home`, `HooksPlayground`, `FetchDemo`, etc.) that switch inside `PageArea`.
- `types/` centralizes shared TypeScript types for sidebar pages and theme modes.
- `index.css` toggles global baseline styles for light/dark themes (see `document.body.dataset.theme`).

## Quick commands

- `pnpm --filter=learn-react-2026-v19 dev` → start the dev server.
- `pnpm --filter=learn-react-2026-v19 build` → compile + bundle via Vite (plus `tsc -b`).
- `pnpm --filter=learn-react-2026-v19 lint` → run ESLint.

## When in doubt

- Describe what you want to tweak (layout, data fetching, styling) and mention the relevant page/component.
- Point to files in `active/learn-react-2026-v19/src` when asking for changes; it’s the live code.
- Use the theme toggle logic in `App.tsx` as the reference for dataset-driven styling.
