# Jaeseong Choe — Personal Website

Personal academic portfolio of **Jaeseong Choe (최재성)**, a computational
communication researcher. The site presents a short bio, peer‑reviewed
publications, and selected research/engineering projects, each with its own
detail page.

🔗 **Live:** https://jaeseongchoe.vercel.app

## Tech Stack

- [Next.js 16](https://nextjs.org/) (Pages Router) + [React 19](https://react.dev/)
- CSS Modules for component styles, plain CSS for global styles
- [AOS](https://michalsnik.github.io/aos/) for scroll animations
- [`react-icons`](https://react-icons.github.io/react-icons/) for iconography
- [`@vercel/og`](https://vercel.com/docs/functions/og-image-generation) for
  dynamically generated Open Graph images
- Google Analytics via [`@next/third-parties`](https://nextjs.org/docs/app/guides/third-party-libraries)
- Deployed on [Vercel](https://vercel.com/)

## Getting Started

Requires Node.js `>= 20.9.0`.

```bash
npm install
npm run dev      # start the dev server at http://localhost:3000
```

### Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the local development server   |
| `npm run build` | Production build                     |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Run ESLint (`eslint-config-next`)    |

### Environment Variables

Set these in `.env.local` (and in the Vercel project settings):

| Variable                       | Purpose                                                        |
| ------------------------------ | ------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`         | Canonical origin; overrides the default per environment       |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID`| Google Analytics measurement ID (analytics is skipped if unset) |

## Project Structure

```text
jaeseong-choe/
├── next.config.mjs          # Security headers, CSP, noindex for preview deploys
├── public/
│   ├── cv.pdf
│   ├── favicon.svg
│   └── robots.txt
└── src/
    ├── components/          # About, Header, Navbar, Publication, Projects, Footer
    ├── data/
    │   └── site.js          # Single source of truth: metadata, publications, projects
    ├── pages/
    │   ├── _app.js
    │   ├── _document.js
    │   ├── index.js         # Home page + JSON-LD structured data
    │   ├── api/og.jsx       # Open Graph image endpoint
    │   ├── publications/[slug].js
    │   ├── projects/[slug].js
    │   └── sitemap.xml.js   # Server-rendered sitemap
    └── styles/              # Global and detail-page styles
```

## Content

All page content lives in [`src/data/site.js`](src/data/site.js). Adding a
publication or project there automatically creates its detail page, sitemap
entry, and structured‑data node — no component changes required.

## SEO

- Per‑page canonical URLs, Open Graph, and Twitter Card metadata
- `schema.org` JSON‑LD graph (`Person`, `WebSite`, `ScholarlyArticle`)
- Generated `sitemap.xml` and static `robots.txt`
- Non‑production Vercel deployments send `X-Robots-Tag: noindex` and are kept
  out of search indexes

## License

Source code is released under the [MIT License](LICENSE).

Personal content — the bio, CV, publication text, and likeness of Jaeseong
Choe — is **not** covered by that license and remains all rights reserved.
Please don't redeploy this site as your own.
