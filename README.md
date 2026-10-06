# mac.dev

Portfolio for John Marco Condino. Next.js (App Router) + TypeScript + SCSS, animated with GSAP and smooth-scrolled with Lenis.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck  # TypeScript only
```

## Where things live

| Path                           | What it holds                                                                                                                                            |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/data/content.ts`          | All text: name, email, links, skills, services, experience, **projects**                                                                                 |
| `src/components/`              | One component per section (`Hero`, `SkillsStrip`, `About`, `Services`, `Parallax`, `Projects`, `Experience`, `Contact`) plus `Cursor` and `SmoothScroll` |
| `src/lib/gsap.ts`              | Registers GSAP, ScrollTrigger and `useGSAP` once; exports the reduced-motion query                                                                       |
| `src/styles/`                  | SCSS partials, one per section, with shared tokens in `_variables.scss`                                                                                  |
| `public/images/john-marco.jpg` | Hero portrait                                                                                                                                            |

## Adding a project

Add an entry to `projects` in `src/data/content.ts`. Set `mockup` to `landing`, `dashboard` or `mobile`, and add `href` to make "View project" a link.

## Motion

Every animation runs inside `gsap.matchMedia()` and is skipped when the visitor has "Reduce motion" turned on. The liquid cursor only runs with a mouse.
