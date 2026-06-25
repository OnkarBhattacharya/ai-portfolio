# AI Solutions Portfolio

A React + TypeScript single-page application (SPA) for an AI solutions/portfolio website, backed by a small Express server for production static serving.

## Features

- Modern UI built with **React**, **TypeScript**, **Tailwind CSS**, and **Radix UI** components
- Client-side routing using **wouter** (`/` and `/contact`)
- Production server renders the built SPA from `dist/public`
- Includes configuration hooks for analytics and (when enabled) Manus debug tooling

## Tech Stack

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS, Radix UI, lucide-react, wouter
- **Backend (prod serving):** Express
- **Tooling:** pnpm, esbuild (used in build script), Prettier, TypeScript `tsc --noEmit`

## Project Structure

- `docs/`
  - `ideas.md`: Design/UX notes.

- `client/`

  - `src/` React app (pages, components, contexts, hooks)
  - `index.html` Vite entry HTML (analytics script placeholder)
- `server/`
  - `index.ts` Express server that serves the built client
- `shared/`
  - shared constants/utilities used across the project
- `dist/public/`
  - build output (created by `vite build`)

## Local Development

### 1) Install

```bash
pnpm install
```

### 2) Run dev server

```bash
pnpm dev
```

Notes:
- Vite runs from `client/`.
- The dev script uses `vite --host`.

### 3) Production build

```bash
pnpm build
```

What it does:
- Builds the frontend with Vite into `dist/public`
- Bundles `server/index.ts` with esbuild into `dist/`

### 4) Start production server

```bash
pnpm start
```

### 5) Preview the production build

```bash
pnpm preview
```

## Scripts

From the root `package.json`:

- `pnpm dev` — `vite --host`
- `pnpm build` — `vite build && esbuild server/index.ts ... --outdir=dist`
- `pnpm build:static` — `vite build`
- `pnpm start` — `NODE_ENV=production node dist/index.js`
- `pnpm preview` — `vite preview --host`
- `pnpm check` — `tsc --noEmit`
- `pnpm format` — `prettier --write .`

## Configuration Notes

### Analytics (Umami placeholder)


`client/index.html` includes an Umami script tag using placeholders:

- `%VITE_ANALYTICS_ENDPOINT%`
- `%VITE_ANALYTICS_WEBSITE_ID%`

To enable analytics in your environment, set the corresponding Vite env vars (prefix `VITE_`).

## Checking / CI-like Validation


Run:

```bash
pnpm check
```

## License

MIT

