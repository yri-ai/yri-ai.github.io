# Repository Guidelines

## Project Structure & Module Organization
This site is a single-page static build served directly from `index.html` with inline CSS and JavaScript. The `CNAME` file keeps the custom `yri.ai` domain working—do not delete it. Organize future assets inside clearly named directories (for example, `assets/images/` or `scripts/`) and reference them with relative paths so GitHub Pages can resolve them.

## Build, Test, and Development Commands
No framework build is required; GitHub Pages serves the committed HTML verbatim. For local preview, run `python3 -m http.server 8080` in the repo root and open `http://localhost:8080`. Use `npx prettier@latest index.html --write` if you introduce multi-file HTML/CSS to keep formatting consistent.

## Coding Style & Naming Conventions
Favor semantic HTML5 elements, two-space indentation, and keep typography/colors defined in the root CSS variables that already exist in `index.html`. Name additional sections with hyphenated IDs (e.g., `id="current-focus"`) so navigation anchors stay predictable. When adding assets, use lowercase kebab-case filenames (`deal-signal-chart.png`).

## Testing Guidelines
There is no automated test suite. Manually validate changes in at least two browsers (Chromium + WebKit/Safari) and on mobile viewport widths using responsive dev tools. Confirm external links such as `https://github.com/yri-ai/DealSignals/blob/main/Methodology.md` resolve correctly, and rerun `python3 -m http.server` to verify no 404s occur before pushing.

## Commit & Pull Request Guidelines
Existing history uses short, imperative commits (e.g., `Hide journal and add social links`). Follow that pattern, group related edits together, and describe visible changes plus any dependency updates. Pull requests should include: summary of changes, screenshots or screencasts if UI shifts, confirmation that local preview passed, and linked issues when available.

## Security & Configuration Tips
Never commit API keys or analytics tokens; place future secrets in GitHub repository variables if needed. Changing the domain requires updating both `CNAME` and the GitHub Pages settings. After editing outbound links, double-check HTTPS targets to avoid mixed-content warnings once deployed.
