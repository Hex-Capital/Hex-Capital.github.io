# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hex Capital is a static venture capital portfolio site hosted on GitHub Pages at `hex-capital.com`. There are no build tools, dependencies, or frameworks — it's pure HTML/CSS/vanilla JS served directly.

## Running Locally

Any static file server works:
```
python -m http.server 8000
npx http-server
```
Then open `http://localhost:8000`. There is no build step.

## Deployment

Push to `master` on `Hex-Capital/Hex-Capital.github.io` — GitHub Pages auto-deploys. The `CNAME` file maps the custom domain `hex-capital.com`.

## Architecture

Single-page site with three files:

- **`index.html`** — Hero section, portfolio grid (10 company cards with hover overlays), footer.
- **`style.css`** — Dark theme (`#091626`), CSS Grid portfolio layout (3 → 2 → 1 columns at 1024px/600px breakpoints), hover overlay transitions. Body starts `opacity: 0` and fades in once JS initializes.
- **`constellation.js`** — Animated canvas background. IIFE-wrapped particle system using `requestAnimationFrame`. Handles DPR scaling and responsive particle count (scales with viewport area). This is the default loaded by `index.html`.

## Constellation Background

`constellation.js` is an IIFE-wrapped particle system using `requestAnimationFrame`. Key tunable parameters:
- `MAX_PARTICLES` / area divisor — density
- `CONNECT_DIST` — max line distance between particles
- `SPEED` — particle velocity
- `DOT_RADIUS` / `LINE_WIDTH` — visual weight
- `COLOR` — RGB array, line/dot opacity multipliers

## Portfolio Cards

Each card in the `.portfolio-grid` is an `<a>` linking to the company's site, containing a logo image and a `.card-overlay` with name/description that appears on hover (always visible on mobile). Logos are PNG files in `/logos/`.

## Logo Formatting Guidelines

### Format & File
- PNG with transparent background (no solid/colored backgrounds)
- Filename: lowercase kebab-case — `company-name.png` in the `logos/` directory
- Target file size: under 30KB (compress with TinyPNG or similar if needed)

### Colors
- All text in the logo must be white (for visibility on the dark `#091626` background)
- Icon/symbol portions may retain their original brand color (e.g. Databricks diamond, Gamma logo mark)

### Dimensions
- Landscape orientation, roughly 3:1 to 7:1 aspect ratio
- Recommended height: ~150-250px (renders at max 72px CSS height; 2x minimum for retina)
- Recommended width: 500-1200px
- Crop all excess transparent space around the logo tightly

### Legibility Check
- Verify the logo is legible at 72px tall (desktop) and ~60px tall (mobile)

## YCRank Subfolder (`/ycrank/`)

An AI-powered YC startup evaluation dashboard, accessible at `hex-capital.com/ycrank`. The source project lives at [AnkurPrograms/ycrank](https://github.com/AnkurPrograms/ycrank). See that repo for full project documentation.

### Key points for this deployment:

- **Stack**: Alpine.js + Tailwind CSS (CDN), Marked.js for markdown rendering. No build step.
- **Auth**: Client-side login (`login.html`) using scrypt password hashing against hashed credentials in `config.json`. Sessions stored in `sessionStorage`.
- **Static mode**: Runs with `"static": true` in `config.json` — all data served as JSON files, no backend API needed. Council chat and email features are disabled in static mode.
- **Data**: `ycrank/data/` contains batch manifests, persona definitions, company JSON files, and markdown memos/evals.
- **SEO**: Meta tag `noindex, nofollow` and `robots.txt` blocks `/ycrank/` from crawlers.
- **Isolation**: Completely independent from the main portfolio site — no shared code, separate styling (warm dark theme vs. cool dark theme).
