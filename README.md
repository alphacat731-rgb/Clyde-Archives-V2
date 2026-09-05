# Clyde Archives

Static GitHub Pages version of the Clyde Archives UI.

## What it does

- Keeps the Discord/Base44-style visual design.
- Searches Openverse and Wikimedia Commons from the browser.
- Expands Clyde/Discord queries for better community-art matches.
- Ranks Clyde/Discord/furry/anthro matches higher.
- Filters obvious mature/explicit terms from search results.
- Includes a full-size lightbox and source links.

## GitHub Pages

Upload `index.html`, `app.js`, `data.js`, and `style.css` to the repo root, then enable GitHub Pages from **Settings → Pages → Deploy from a branch → main → /(root)**.

Openverse supports anonymous image searches via its public API; its search uses titles, descriptions and tags. Wikimedia Commons is queried through its public MediaWiki API.
