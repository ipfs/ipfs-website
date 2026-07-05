# IPFS Website

The marketing site for IPFS, built with [Astro](https://astro.build), React, and Tailwind CSS.

## Project structure

```text
site/
├── public/              # Static assets (images, fonts, favicons)
├── src/
│   ├── components/      # Astro and React components
│   ├── data/            # Content data (use cases, testimonials, etc.)
│   ├── layouts/         # Page layouts
│   ├── pages/           # File-based routes
│   └── styles/          # Global styles and Tailwind setup
├── astro.config.mjs
└── package.json
```

Pages live in `src/pages/`; each `.astro` or `.md` file becomes a route.

## Requirements

- Node.js >= 22.12.0
- pnpm

## Commands

Run from the project root:

| Command           | Action                                        |
| :---------------- | :-------------------------------------------- |
| `pnpm install`    | Install dependencies                          |
| `pnpm dev`        | Start the dev server at `localhost:4321`      |
| `pnpm build`      | Build the production site to `./dist/`        |
| `pnpm preview`    | Preview the production build locally          |
| `pnpm astro ...`  | Run Astro CLI commands (`add`, `check`, etc.) |
