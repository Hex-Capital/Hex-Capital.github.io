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

- **`index.html`** — Hero section, portfolio grid (10 company cards with hover overlays), footer. Also contains a temporary background-switcher toolbar (marked "remove before deploy") for comparing constellation animation variants.
- **`style.css`** — Dark theme (`#091626`), CSS Grid portfolio layout (3 → 2 → 1 columns at 1024px/600px breakpoints), hover overlay transitions. Body starts `opacity: 0` and fades in once JS initializes.
- **`constellation.js`** — Animated canvas background. IIFE-wrapped particle system using `requestAnimationFrame`. Handles DPR scaling and responsive particle count (scales with viewport area). This is the default loaded by `index.html`.

## Constellation Background System

Five interchangeable versions (`constellation.js` + `constellation-v1.js` through `v4.js`) sharing identical structure but with different tuning constants (particle count, speed, connection distance, color, opacity). The switcher UI in `index.html` hot-swaps them by removing/re-adding the `<script>` tag and clearing the canvas.

Key tunable parameters in each file:
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

## Pre-Deploy Checklist

- Remove the background switcher UI (the `#bg-switcher` div and `loadBg` script block in `index.html`)
- Delete unused `constellation-v*.js` files once a final version is chosen
