# Carina — Systems & Automation Portfolio

A premium, responsive portfolio positioning Carina as a **Systems & Automation Builder**. The experience uses an editorial red-and-white visual system, motion-led workflow diagrams, project case studies, screenshot galleries, accessible fallbacks, and reduced-motion support.

## Stack

React, TypeScript, Vite, Tailwind CSS, Framer Motion, GSAP, Lucide React, and React Router.

## Setup

```bash
npm install
npm run dev
```

Create an optimized production bundle with `npm run build` and inspect it with `npm run preview`.

## Content editing

- Project copy and metadata: `src/data/projects.ts`
- Skills: `src/data/skills.ts`
- Profile and contact links: `src/data/profile.ts`
- Certificate metadata: `src/data/certificates.ts`

Blank profile values intentionally hide unavailable contact buttons.

## Screenshots and certificates

Add `.png`, `.jpg`, `.jpeg`, or `.webp` project screenshots to these folders:

- QR Timesheet: `src/assets/projects/qr-timesheet/`
- Expense Tracker: `src/assets/projects/expense-tracker/`
- E-Learning: `src/assets/projects/elearning/`
- Automation: `src/assets/projects/automation/`
- Certificates: `src/assets/certificates/`

Use naturally sortable names such as `01.png`, `02.png`, `03.png`, and `04.png`. Vite's `import.meta.glob` automatically discovers project screenshots at build time, so no manual imports are required. Until images are supplied, premium interface placeholders appear instead of broken images. Add certificate metadata and imported image paths in `src/data/certificates.ts`.

## Deployment

The project is ready for Vercel with install command `npm install`, build command `npm run build`, and output directory `dist`. `vercel.json` rewrites nested React Router routes to `index.html`, allowing direct case-study URL refreshes.
