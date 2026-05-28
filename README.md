# Comunidades Aliadas Tomando Acción

Spanish-first bilingual nonprofit website built with React + Vite.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL printed in your terminal (default: http://localhost:5173).

## Scripts

- `npm run dev` — start the local dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build locally

## Tech

- React 18 + Vite 5
- No backend, no database, no auth — purely static / client-side
- Bilingual (ES / EN) toggle in the header, Spanish as the default language
- Fonts: Fraunces (display serif) + Inter (body sans), via Google Fonts
- Palette: deep agricultural green + gold/wheat + cream

## Project structure

```
src/
  components/   # Header, Hero, Mission, Programs, Impact, Events, Donate, GetInvolved, Footer
  data/         # Bilingual content
  hooks/        # useLanguage, useScrollReveal, useCounter
  styles/       # globals.css (palette, typography, layout)
  App.jsx
  main.jsx
```

## Notes

Placeholder image sections (`.placeholder-image`) are styled blocks waiting on real photography. Swap them for `<img>` tags when assets are ready.
