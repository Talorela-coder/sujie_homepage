# Content Folders

Use one folder per writing type.

- `data/poems/`
- `data/fictions/`
- `data/essays/`
- `data/letters/`
- `data/travel-notes/`

Each folder has an `index.ts` file that exports the entries shown on the website.
Put original `.docx` or `.pdf` files in that folder's `sources/` subfolder. Source
files are archival inputs; the static website reads the matching `.ts` content
entry, not the binary Word/PDF file directly.
