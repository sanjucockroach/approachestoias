---
name: Approaches to IAS
description: A professional, trust-first website for an IAS/CSE coaching services company. Clean light canvas, single blue accent from the brand logo, technical precision radius, and a subtle 3D hero that frames the headline without competing.

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
  success: "#00AA44"
  warning: "#FF6600"
  on-primary: "#ffffff"

typography:
  display-xl:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -2.8px
  display-lg:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -2px
  display-md:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -1px
  body-lg:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0px
  body-md:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0px
  body-sm:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  caption:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.04em
  button:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 0.01em

rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  pill: 9999px
  # Project grammar: technical precision — 4px everywhere.
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
  duration: "0.33s"
  easing: "cubic-bezier(0.22, 1, 0.36, 1)"
---

## 1. Visual Theme & Atmosphere

A bright, credible, precision-built surface for a coaching-services company. The light canvas and single blue accent communicate trust and clarity; generous whitespace and negative tracking on headlines give a premium, editorial feel. Depth comes from a subtle 3D hero cluster and a surface ladder of hairline-bordered cards — no decorative drop shadows.

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| primary | #0047CC | CTAs, focus rings, text links, key numbers — the ONLY accent |
| primary-hover | #0039A8 | button hover / active states |
| primary-focus | #0066FF | focus outline |
| canvas | #ffffff | page background |
| canvas-soft | #fafafa | alternating section bands |
| surface-1 | #f5f5f7 | cards, panels |
| surface-2 | #e8e8ed | pressed / nested surfaces |
| ink | #0a0a0a | primary text |
| ink-muted | #4a4a4a | secondary text |
| ink-subtle | #737373 | captions, meta |
| hairline | #e5e5e5 | borders, dividers |
| hairline-strong | #c2c2c2 | emphasized borders |
| success | #00AA44 | positive indicators only |
| warning | #FF6600 | limited alerts only (from logo, never decorative) |
| on-primary | #ffffff | text on primary buttons |

## 3. Typography Rules

| Role | Size | Weight | Line Height | Letter-Spacing |
|---|---|---|---|---|
| Hero display | 56px / 40px mobile | 700 | 1.05 | -2.8px / -2px mobile |
| Section heading | 40px / 32px mobile | 700 | 1.1 | -2px / -1.2px mobile |
| Card title | 28px | 600 | 1.2 | -1px |
| Lead body | 18px | 400 | 1.6 | 0 |
| Body | 16px | 400 | 1.6 | 0 |
| Small body | 14px | 400 | 1.5 | 0 |
| Caption / label | 12px | 500 | 1.4 | 0.04em |
| Button | 14px | 600 | 1.0 | 0.01em |

All text uses Inter. Display text is tightly tracked; body text is neutral.

## 4. Component Stylings

**Primary button**
- bg: primary, text: on-primary
- padding: 12px 24px
- radius: 4px
- font: button
- hover: bg primary-hover, translateY(-1px)
- active: scale(0.98)
- focus: 2px outline primary-focus, offset 2px

**Secondary button**
- bg: canvas, text: ink
- border: 1px hairline
- padding: 12px 24px
- radius: 4px
- hover: bg surface-1

**Card**
- bg: surface-1
- border: 1px hairline
- radius: 4px
- padding: 24px
- hover: translateY(-2px), border hairline-strong

**Eyebrow pill**
- bg: surface-1
- text: primary
- border: 1px hairline
- radius: 4px
- padding: 6px 12px
- font: caption

**Navbar**
- bg: canvas with 80% opacity + blur when scrolled
- border-bottom: 1px hairline
- height: 64px
- logo left, links center, CTA right

**Footer**
- bg: surface-1
- border-top: 1px hairline
- padding: 48px 24px
- text: ink-muted

## 5. Layout Principles

- Max content width: 1200px, centered.
- Section padding: 128px vertical desktop, 80px mobile.
- Grid: 12-column; common patterns: 2-col (1fr 1fr), 3-col (1fr 1fr 1fr), 4-col for feature cards.
- Horizontal page padding: 24px desktop, 16px mobile.
- Hero: centered text over a subtle 3D scene; 3D floats at the edges, center clear.
- Left-align body content; center only hero and narrow CTAs.

## 6. Depth & Elevation

**Surface ladder** (no drop shadows):
- canvas #ffffff
- surface-1 #f5f5f7
- surface-2 #e8e8ed
- Divided by 1px hairline borders.

The 3D hero provides atmospheric depth; no UI shadows are needed.

## 7. Do's and Don'ts

**Do**
- Use primary blue ONLY for CTAs, links, focus, and key numbers.
- Use negative letter-spacing on every display headline.
- Use 4px radius for every component.
- Keep body text left-aligned.
- Provide prefers-reduced-motion fallbacks for the 3D hero.
- Use semantic HTML and 44px+ touch targets.
- Make every image have descriptive alt text.
- Keep the sticky footer at the bottom with mt-auto.

**Don't**
- Use orange or green from the logo as UI accents.
- Add a second accent color "for variety."
- Use gradient buttons or gradient text.
- Add drop shadows on cards or buttons.
- Mix rounded pills with sharp rects.
- Auto-rotate anything.
- Center long paragraphs of body text.
- Use true black (#000000) — ink is #0a0a0a.

## 8. Responsive Behavior

- Mobile-first: 390px → 768px → 1024px → 1440px+.
- Touch targets: minimum 44px height for buttons and links.
- Hero: 3D scene may simplify or hide on mobile; headline stacks.
- Cards: 1 column on mobile, 2 on tablet, 3–4 on desktop.
- Navbar: hamburger menu below 768px (or collapsed links).
- Section padding: 80px vertical on mobile.
- Hero display: 40px mobile / 56px desktop.

## 9. Agent Prompt Guide

When building components, pass these constraints every time:
- "Light canvas (#ffffff), single accent #0047CC, ink #0a0a0a."
- "All buttons and cards use 4px border radius; no pills."
- "Display type has negative letter-spacing; body is neutral."
- "No drop shadows; use surface ladder and hairline borders."
- "3D hero floats at the edges; center stays clear for text."
- "Every image needs alt text; every interactive element needs focus state."
- "Prefers-reduced-motion must disable the 3D animation."
- "Footer is sticky with mt-auto and respects env(safe-area-inset-bottom)."
