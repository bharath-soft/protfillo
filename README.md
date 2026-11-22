# Bharath T — Interactive Developer Portfolio

A responsive React + Vite portfolio with a dark-first visual system, light/dark toggle, Motion animations, project filters and detail dialogs, internship timeline, resume download, and a validated contact form.

## Requirements
- Node.js 20.19+ (or a current supported LTS)
- npm

## Run locally
```bash
npm install
cp .env.example .env
npm run dev
```
Open the local URL printed by Vite.

## Connect the contact form (required before launch)
1. Create a form at [Formspree](https://formspree.io/).
2. Copy its endpoint (for example `https://formspree.io/f/xxxxxxxx`).
3. Put it in `.env` as `VITE_FORMSPREE_ENDPOINT=...`.
4. Restart the dev server and submit a test message.

Without this configuration the form intentionally shows a clear setup message instead of pretending to send mail. Keep the endpoint out of source control if you use a private form configuration; Vite client environment variables are public at runtime, so use Formspree's domain restrictions/spam controls or replace it with a server-side function for stronger abuse protection.

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Framework preset: **Vite**; build command: `npm run build`; output directory: `dist`.
4. Add `VITE_FORMSPREE_ENDPOINT` in Vercel Project Settings → Environment Variables.
5. Deploy.

`vercel.json` includes an SPA rewrite for client-side navigation.

## Personalize before publishing
- Add an approved profile photograph to `public/assets/` and replace the initials avatar in `src/App.jsx` if desired.
- Add genuine project screenshots to `public/assets/` and replace the CSS project previews in `ProjectVisual`.
- Add only verified GitHub/live-demo URLs to `src/data/portfolio.js` (`github` and `demo`). Empty links are intentionally not rendered as working buttons.
- Add original certificate images/PDFs once available; the current page explicitly avoids fake certificate previews.
- Review the internship list in `src/data/portfolio.js`. The current resume lists Brioworkx, while the portfolio brief also supplied IBM Cognos, Cytronix and Cholix entries. The timeline includes those supplied entries and flags the overlapping June 2026 dates for confirmation.
- Confirm the Vehicle Service & Maintenance Tracker status before describing it as completed.

## Structure
```text
src/
  data/portfolio.js   # Profile, skills, projects and experience content
  App.jsx             # Sections, interactions and reusable UI pieces
  main.jsx            # React entry point
  styles.css          # Responsive design system and component styles
public/assets/
  resume-bharath-t.pdf
```

## Notes
- Skill cards list areas of exposure; they do not invent proficiency percentages.
- Project cards do not invent repository or demo URLs.
- Contact form requires a configured delivery endpoint.
- Theme preference is stored in localStorage.
- `prefers-reduced-motion` is respected; semantic headings, labels, focus styles and accessible button names are included.
