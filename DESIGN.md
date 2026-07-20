---
name: Approaches to IAS
description: An academic product gallery for a UPSC coaching infrastructure company. Museum-like staging, a single cobalt interface accent, precise typography, and restrained 3D geometry turn an operational offer into a coherent brand system.

colors:
  primary: "#0047CC"
  primary-hover: "#0039A8"
  primary-focus: "#0066FF"
  canvas: "#ffffff"
  canvas-soft: "#fafafa"
  surface-1: "#f5f5f7"
  surface-2: "#e8e8ed"
  ink: "#0a0a0a"
  ink-muted: "#4a4a4a"
  ink-subtle: "#737373"
  hairline: "#e5e5e5"
  hairline-strong: "#c2c2c2"
  on-primary: "#ffffff"

typography:
  display-xl:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 56px
    fontWeight: 650
    lineHeight: 1.05
    letterSpacing: -2.8px
  display-lg:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 40px
    fontWeight: 650
    lineHeight: 1.1
    letterSpacing: -2px
  display-md:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 32px
    fontWeight: 620
    lineHeight: 1.15
    letterSpacing: -2px
  body-lg:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.65
  body-md:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5

rounded:
  default: 4px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
  section: 128px

motion:
  quick: "140ms"
  interface: "180ms"
  entrance: "600ms"
  easing: "cubic-bezier(0.23, 1, 0.32, 1)"
---

## 1. Brand identity

The logo combines a blue triangle, orange circle, and green block. Their meaning is expressed through hierarchy, not a multi-colour interface:

- Blue communicates trust, administration, focus, and civic seriousness. It is the only interface accent.
- Orange communicates energy and ambition. It remains inside the logo only.
- Green communicates progress and positive outcomes. It remains inside the logo only.
- Triangle, circle, and block form the spatial vocabulary. They reappear as blue or neutral geometry in the 3D hero and gallery illustrations.

This preserves logo recognition while keeping the application credible, consistent, and calm.

## 2. Visual direction

The site behaves like an academic product gallery. Each service or product is staged with generous whitespace, an editorial explanation, and one restrained geometric visual. The influence of the Apple reference is compositional rather than imitative:

- full-width neutral gallery bands;
- centered hero and page introductions;
- near-invisible translucent navigation;
- large, tightly tracked display type;
- functional motion and quiet material depth;
- disciplined copy with one idea per stage.

Apple-specific conventions that conflict with the project are not used. There are no pill controls, true-black surfaces, dark product tiles, multiple radius scales, decorative gradients, or interface shadows.

## 3. Colour roles

| Token | Role |
|---|---|
| `#0047CC` | CTAs, text links, focus, key numerals, line illustration |
| `#0039A8` | CTA hover |
| `#0066FF` | focus outline |
| `#ffffff` | primary canvas |
| `#fafafa` | barely visible canvas variation |
| `#f5f5f7` | gallery stage and footer |
| `#e8e8ed` | nested neutral objects |
| `#0a0a0a` | primary ink |
| `#4a4a4a` | supporting copy |
| `#737373` | tertiary labels |
| `#e5e5e5` | hairline borders |

Orange and green must not appear in CSS, components, charts, status badges, illustrations, or CTAs. They are permitted only inside the source logo artwork.

## 4. Typography

- Inter across the product.
- Hero display: 40px mobile to 56px desktop, weight 650, line-height 1.05, tracking -2.8px.
- Section display: 32px mobile to 40px desktop, weight 650, line-height 1.1, tracking -2px.
- Lead copy: 17px to 18px, line-height 1.65.
- Display lines are balanced. Long explanatory copy remains left-aligned.
- Eyebrows are concise navigation cues, never decorative pills.

## 5. Layout

- Maximum content width: 1200px.
- Page gutters: 16px mobile, 24px desktop.
- Section spacing: 80px mobile, 128px desktop.
- Hero: centered copy; 3D geometry stays at the edges and leaves the reading field clear.
- Detail pages: centered introduction followed by alternating two-column gallery bands.
- Capabilities, principles, proof, and contact options use rows rather than card grids.
- The footer remains at the bottom through the root flex layout.

## 6. Components

- Buttons: 4px radius, 44px minimum height, blue primary or hairline secondary.
- Navbar: 64px, translucent white, one hairline, compact label and CTA.
- Gallery visual: neutral stage, 4px frame, blue line or numeral, decorative orbital circle.
- Lists: open rows separated by hairlines, with a 4px lateral hover response on fine pointers.
- Cards are exceptional, not the default layout unit.
- No drop shadows. Depth comes from surface changes, overlap, material lighting inside WebGL, and hairlines.

## 7. Motion and accessibility

- Pointer-down response is immediate and reversible.
- Interface transitions stay between 140ms and 220ms.
- Page-load marketing entrances may run up to 760ms.
- Section reveals animate only opacity and transform.
- The 3D group responds subtly to pointer position and does not auto-rotate.
- `prefers-reduced-motion` replaces WebGL with a static geometric composition and disables entrances.
- `prefers-reduced-transparency` removes backdrop blur.
- Interactive targets are at least 44px and have visible focus states.

## 8. Content and conversion

- Every page presents the primary WhatsApp pathway.
- Trust is conveyed through specific operating principles, not invented statistics.
- Headlines state the outcome; supporting copy explains the system.
- Each stage has one obvious next action.
- Contact routes are WhatsApp, email, and Telegram. No backend or simulated form.

## 9. Non-negotiables

- One UI accent: `#0047CC`.
- One radius: 4px.
- No true black.
- No orange or green UI accent.
- No gradient button or gradient text.
- No drop shadows.
- No auto-rotating 3D.
- Static HTML for every route.
- All images require alt text.
- Mobile 390px and desktop 1440px must be verified before shipping.
