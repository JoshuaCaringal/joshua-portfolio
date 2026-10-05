# Carina — Systems & Automation Portfolio

A premium, screenshot-first portfolio positioning Carina as a **Systems & Automation Builder**. The experience presents practical business systems, workflow automation, dashboards, and internal tools through a red, white, and near-black editorial interface.

## Tech stack

- React + TypeScript + Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- React Router

## Local development

```bash
npm install
npm run dev
```

Create a production build with `npm run build`, then inspect it with `npm run preview`.

## Editing content

- Projects and case-study copy: `src/data/projects.ts`
- Skills: `src/data/skills.ts`
- Profile/contact links: `src/data/profile.ts`
- Certificate metadata: `src/data/certificates.ts`

Empty email and LinkedIn values are intentionally hidden. Add the appropriate URL/value to show those contact actions.

## Project screenshots

Add `.png`, `.jpg`, `.jpeg`, or `.webp` files to the matching directory:

- QR Timesheet: `src/assets/projects/qr-timesheet/`
- Expense Tracker: `src/assets/projects/expense-tracker/`
- E-Learning: `src/assets/projects/elearning/`
- Automation: `src/assets/projects/automation/`

Use naturally sortable names such as `01.png`, `02.png`, `03.png`, and `04.png`. Vite's `import.meta.glob` automatically discovers and loads supported files; no manual imports are required. Designed interface placeholders appear when no screenshots exist.

## Certificates

Store certificate images in `src/assets/certificates/`, then add their imported image URL and metadata in `src/data/certificates.ts`. Cards display designed document placeholders until images are added.

## Deployment

The repository is Vercel-ready:

- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`

`vercel.json` rewrites all routes to `index.html`, so direct visits to project case-study URLs work with React Router. Connect this repository to Vercel and use branch/PR Preview Deployments for review.
