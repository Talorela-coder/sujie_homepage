# Sujie LIU / 刘素洁

An initial Next.js and Tailwind portfolio site for a quiet literary archive.

## Structure

- `app/` - route pages for Home, Works, Archive, Biography, and Contact
- `components/` - shared layout and literary list components
- `data/` - editable site metadata, works, source folders, and archive entries
- `.github/workflows/pages.yml` - static export workflow for GitHub Pages

## Adding Work

Raw `.docx` and `.pdf` files can be archived under the matching `sources/`
folder, for example `data/poems/sources/`.

The website itself reads TypeScript content entries:

- poems: `data/poems/`
- fiction: `data/fictions/`
- essays: `data/essays/`
- letters: `data/letters/`
- travel notes: `data/travel-notes/`

Add a new entry file in the right folder, export it from that folder's
`index.ts`, and it will appear in `Works`. Full text is shown on the detail page
at `/works/<category>/<slug>/`.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The site is configured with `output: "export"` in `next.config.mjs`, so `next build` produces a static `out/` directory suitable for GitHub Pages.
