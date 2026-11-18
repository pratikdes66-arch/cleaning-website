# CleanCanada demo site

```bash
npm install
npx shadcn@latest add button card tabs accordion sheet slider radio-group checkbox input textarea label badge
npm run dev
```

- **Images:** all images live in `public/images/` (see `cleancanada-image-prompts.csv` for the filenames). Replace a file with the same name to swap it. Missing files fall back to a blank placeholder. Unused extra: `cleaner-kitchen.jpg`.
- **Colors:** edit the CSS variables at the top of `src/index.css`.
- **Content:** everything editable lives in `src/data/`. Pricing logic is in `src/data/pricing.ts`.
