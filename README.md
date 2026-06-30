# Sujie LIU / 刘素洁

An initial Next.js and Tailwind portfolio site for a quiet literary archive.

## Structure

- `app/` - route pages for Home, Works, Archive, Biography, and Contact
- `components/` - shared layout and literary list components
- `data/` - editable site metadata, works, and archive entries
- `.github/workflows/pages.yml` - static export workflow for GitHub Pages

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
