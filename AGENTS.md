# AGENTS.md — Hard Constraints

Source of truth: `DESIGN.md`. These rules are non-negotiable.

## Brand

- Name: **Approaches to IAS**
- Tagline: **UPSC and Beyond**
- Domain: IAS / CSE coaching services and products.
- Logo colors: blue, orange, green. **Only the blue is used as a UI accent.**

## Design discipline

- One accent: `#0047CC`. Used for CTAs, links, focus, key numbers only.
- Canvas: `#ffffff`. Ink: `#0a0a0a`.
- One radius grammar: **4px** for all components (buttons, cards, inputs, pills/eyebrows). No `rounded-full` or `rounded-[9999px]` for UI.
- Negative letter-spacing on display text: `-2.8px` to `-2px`.
- No drop shadows. Use surface ladder (`canvas → surface-1 → surface-2`) and hairline borders (`#e5e5e5`).
- No gradient buttons or gradient text.
- No true black (`#000000`).
- No orange or green UI accents.

## Tech stack

- Next.js 16 App Router, React 19, TypeScript 5 strict, Tailwind CSS 4.
- `use client` only for browser APIs / hooks / 3D.
- No backend. Static export. Orders/inquiries route to WhatsApp or mailto.
- Images live in `/public/images/`.
- `npm` for deploy lifecycle; commit `package-lock.json`; no `bun.lock`.

## SEO / deployment

- Every route must have HTML output (static export).
- `app/sitemap.ts` → `/sitemap.xml`.
- `app/robots.ts` → `/robots.txt`.
- `app/manifest.ts` → `/manifest.webmanifest`.
- `app/icon.png` and `app/apple-icon.png`.
- OpenGraph and Twitter metadata in `layout.tsx`.
- JSON-LD in `layout.tsx`.

## Quality gates

Nothing ships until all pass:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

- 0 console errors in browser.
- Mobile (390px) and desktop (1440px) verified.
- Sticky footer sticks to bottom.
- `prefers-reduced-motion` disables the 3D hero animation.
- All images have alt text.
- Touch targets ≥ 44px.

## Project structure

```
app/
  layout.tsx      # root + fonts + metadata + JSON-LD
  page.tsx        # home route
  globals.css     # tokens + animations
  sitemap.ts
  robots.ts
  manifest.ts
  icon.png
  apple-icon.png
components/
  navbar.tsx
  hero-scene.tsx  # 3D client component
  footer.tsx
  sections/
    hero.tsx
    services.tsx
    products.tsx
    contact.tsx
public/
  images/
```
