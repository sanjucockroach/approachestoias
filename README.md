# Approaches to IAS

A static, SEO-ready website for **Approaches to IAS** — a services company for IAS coaching academies.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript 5
- Tailwind CSS 4
- React Three Fiber (3D hero)

## Development

```bash
npm install
npm run dev
```

## Quality gates

```bash
npm run lint      # eslint
npx tsc --noEmit  # type check
npm run build     # static export to /dist
```

## SEO

- `dist/index.html` — static HTML for the home page
- `dist/sitemap.xml`
- `dist/robots.txt`
- `dist/manifest.webmanifest`
- `dist/icon.png` and `dist/apple-icon.png`
- OpenGraph / Twitter metadata and JSON-LD in `app/layout.tsx`

## Deployment

This is a static export. Push to GitHub and import into Vercel. No backend or env vars required.

```bash
git add .
git commit -m "feat: initial website"
git push origin main
```

Then deploy the `dist` folder (or let Vercel run `npm run build`).
