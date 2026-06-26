# Austin Clifton Portfolio

Personal portfolio site for Austin Clifton, built with Next.js, React, TypeScript, and Tailwind CSS. The site presents professional experience, selected projects, technical focus areas, and contact links in a compact single-page layout.

## Stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS
- Vercel Analytics and Speed Insights

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality Checks

Run the full local verification suite:

```bash
npm run check
```

Individual checks are also available:

```bash
npm run lint
npm run typecheck
npm run build
npm run format
```

## Project Structure

```text
src/app/          Next.js route and root metadata
src/components/   Reusable UI components for sections, cards, tags, and navigation
src/content/      Portfolio copy and project data
src/lib/          Small shared utilities and typed tech icon registry
src/styles/       Global Tailwind styles, theme tokens, and animation utilities
src/utils/        Client-side scroll and reveal behavior
public/           Static icons and image assets
```

## Implementation Notes

- Portfolio content is centralized in `src/content/content.ts` so copy changes do not require touching layout code.
- Tech stack icons are resolved through a typed registry in `src/lib/techIcons.ts` to avoid invalid image sources at runtime.
- The page is statically rendered by Next.js and enhanced with small client-side observers for section highlighting and reveal animations.
- Metadata is configured in `src/app/layout.tsx` for clearer search and social previews.

## Deployment

The app is configured for Vercel. A production build can be verified locally with:

```bash
npm run build
```
