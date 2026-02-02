# Copilot Instructions for this repo ✅

## Quick summary
- This is a minimal **Vite + React** single-page app (SPA). Use `npm run dev` for local HMR-driven development and `npm run build` to create a production `dist` bundle.

## Big picture / Architecture 🔧
- Entry: `index.html` loads `src/main.jsx`, which mounts the React app into `<div id="root">`.
- UI: React functional components in `src/` (.jsx files). Example primary component: `src/App.jsx`.
- Assets: two kinds
  - `src/assets/*` — import via relative path (e.g., `import reactLogo from './assets/react.svg'`).
  - `public/*` — served as root static files and imported with a leading slash (e.g., `import viteLogo from '/vite.svg'`).
- Build output: `vite build` -> `dist/` (ignored by ESLint via config).

## Key developer workflows (commands) ▶️
- Install deps: `npm install` (project uses npm/yarn/pnpm interchangeably; examples use `npm`).
- Start dev server (HMR): `npm run dev` (usually at `http://localhost:5173`).
- Build for production: `npm run build` (creates `dist/`).
- Preview production build: `npm run preview` (serves `dist/` locally).
- Lint: `npm run lint` (runs `eslint .` using the project's flat config).

## Project-specific conventions & patterns 📐
- Files use `.jsx` for React files (no TypeScript in this template).
- ESLint configuration: `eslint.config.js` (flat config). Important rules:
  - `globalIgnores(['dist'])` — ignore build output.
  - `rules['no-unused-vars']` uses `varsIgnorePattern: '^[A-Z_]'` — variables that begin with an uppercase letter or underscore are ignored (useful for component names, constants, or intentionally unused vars).
- Vite plugin: `@vitejs/plugin-react` present in `vite.config.js` for fast refresh and JSX support.

## Integration points & external deps 🔗
- Core runtime: `react`, `react-dom`.
- Dev tooling: `vite`, `@vitejs/plugin-react`, `eslint` and plugins (`eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`).
- No server-side code or external backend configured in this repo — everything is client-side.

## Examples that matter (copyable) 💡
- HMR quick test: edit `src/App.jsx`, save, and confirm the browser updates without full reload.
- Importing assets:
  - From `src`: `import reactLogo from './assets/react.svg'`
  - From `public`: `import viteLogo from '/vite.svg'` (leading `/` pins to the `public` root)
- Lint locally: `npm run lint` — fix issues or add rule exceptions in `eslint.config.js` if a pattern is project-accepted.

## Known gaps & notes ⚠️
- No unit/integration tests or CI workflows are present. If adding tests, follow the Vite + React conventions (e.g., Vitest or Jest) and add a `test` script and CI job.
- No TypeScript configured (project uses JS + `.jsx`). If converting to TypeScript, add `typescript`, update `eslint.config.js`, and follow the Vite TS template.

---

If anything above is unclear or you want more details (tests, CI, or TypeScript migration notes), tell me which area to expand and I will iterate. ✨