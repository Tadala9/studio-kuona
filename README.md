# Studio Kuona

The portfolio website for Studio Kuona, built with [Astro](https://astro.build). The full brief is in `CLAUDE.md`.

## Where things live

| What | Where |
|---|---|
| Photos and renders | `src/images/` |
| One file per project | `src/content/projects/` |
| Homepage | `src/pages/index.astro` |
| Project page layout (shared by all projects) | `src/pages/work/[slug].astro` |
| Colours and type | `src/styles/global.css` |

## Swapping in the real images

The images in `src/images/` are sand-coloured placeholders. To replace one, drop the real file into `src/images/` with **exactly the same name** (for example `lakeshore-setting.jpg`), overwriting the placeholder. The site makes the web-sized WebP versions for you.

## Adding a project

1. Put its images in `src/images/`.
2. Copy one of the files in `src/content/projects/`, rename it (the file name becomes the web address, e.g. `new-project.md` → `/work/new-project`), and change the text and image names.
3. Set `order` to decide where it appears on the homepage and in the "Next project" loop.

## Running it on a computer

```
npm install      # once, to download Astro
npm run dev      # live preview at http://localhost:4321
npm run build    # makes the finished site in the dist/ folder
```

Vercel runs `npm run build` itself every time a change is pushed to GitHub.
