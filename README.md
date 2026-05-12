## Premium Developer Portfolio

Production-ready portfolio built with:

- Next.js (App Router) + React + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide icons
- Vercel-ready contact form (Resend optional)

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Project structure

Key folders:

- `app/`: Next.js routes, API routes
- `components/`: UI + sections
- `constants/`: portfolio content and navigation
- `hooks/`: reusable client hooks (active section highlighting, etc.)
- `lib/`: utilities + schema validation
- `types/`: shared TypeScript types
- `public/`: images, avatars, `resume.pdf`

Update your content in `constants/portfolio.ts`.

## Contact form (works locally + in production)

The form POSTs to `app/api/contact/route.ts`.

- **Without env vars**: it still returns success and logs the message server-side (useful for local dev).
- **With Resend**: it sends a real email on Vercel.

### Required env vars (for email sending)

Create `.env.local`:

```bash
RESEND_API_KEY=your_key
CONTACT_TO=you@yourdomain.com
CONTACT_FROM="Portfolio <onboarding@resend.dev>" # optional
NEXT_PUBLIC_SITE_URL=http://localhost:3000       # optional (used for metadataBase)
```

## Deploy to Vercel

- Push to GitHub
- Import repo in Vercel
- Set env vars (optional for email)
- Deploy

## Notes

- Replace `public/resume.pdf` with your real resume PDF.
- Replace placeholder profile links in `constants/portfolio.ts`.

---

Built for premium UI/UX + recruiter-proof case studies.
