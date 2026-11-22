
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

## Connect the contact form

1. Create a form at https://formspree.io/.
2. Copy your form endpoint.
3. Add it to `.env`:

```env
VITE_FORMSPREE_ENDPOINT=your_form_endpoint
```

4. Restart the development server and test the contact form.

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository into Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Add your environment variables.
7. Deploy.

## Project Structure

```text
src/
  data/portfolio.js
  App.jsx
  main.jsx
  styles.css

public/
  assets/
    resume-bharath-t.pdf
```

## Features

- Responsive portfolio design
- Dark and light theme
- Interactive animations
- Project filtering and details
- Skills and experience sections
- Resume download
- Contact form
- Responsive mobile navigation

## Notes

- Project links should point to verified GitHub repositories or live demos.
- Contact form requires a configured delivery endpoint.
- Theme preference is stored in localStorage.
- Reduced-motion preferences are respected.
