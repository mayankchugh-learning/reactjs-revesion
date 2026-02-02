# Copilot instructions for this repository ✅

## Project snapshot (big picture)
- This is a tiny static sample site. Key files:
  - `second/index.html` — the single HTML page served to the browser
  - `second/script.js` — plain JavaScript that manipulates the DOM (e.g., `document.createElement`, `appendChild`)
- There is no build system, no package.json, and no tests present.
- The repo name hints at React, but there is currently no React code—do not assume React is installed or used unless the user asks.

## How to run / validate changes 🔧
- Local testing: open `second/index.html` in a browser or use a static server (VS Code Live Server, `python -m http.server`, or similar).
- Confirm DOM changes by opening DevTools and checking the Console for `console.log` output (see `script.js`).

> Note: If you plan to introduce tooling (webpack, CRA, Vite), ask the repo owner before adding package files. There is no existing package manager context.

## Editing patterns & conventions 🔍
- Keep changes minimal and explicit: modify `second/script.js` to alter page behavior and `second/index.html` to reference new scripts/assets.
- Examples to follow:
  - Adding a heading: follow the existing pattern of `var h1 = document.createElement('h1'); h1.innerHTML = '...'; document.body.appendChild(h1);`
  - Scripts are referenced with `<script src="script.js"></script>` at the end of `body`—preserve this simple loading order.

## When making larger changes 🚩
- If adding frameworks or build tools (React, bundlers, linters), create a clear migration plan and get confirmation from the maintainer. Add a `README` update explaining the new workflow.
- Add a `package.json` only after confirming the desired package manager and scripts. Document install/run/test commands in `README.md`.

## PR and commit guidance ✅
- Small, focused PRs are preferred. Example commit message style: `feat: add banner to index.html` or `fix: log message typo in script.js`.
- Include a short description and testing instructions in the PR body (e.g., "Open `second/index.html` and verify header text").

## What NOT to assume ❗
- Do not assume tests, CI config, or dependency management exists.
- Do not change project structure (add `src/`, `public/`, etc.) without confirming direction with the maintainer.

## Questions the agent should ask the user 💬
- "Do you want to keep this as a static example or migrate to a React/build tool setup?"
- "If adding tooling, which package manager and scripts should I add?"

---
If you want, I can further tailor this to include a suggested `package.json` and short migration checklist for adding React or a bundler. Would you like that? 💡