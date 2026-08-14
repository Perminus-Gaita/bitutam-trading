# Bitutam International — Trading, Procurement & Supply

Marketing site for **Bitutam International**, a Kenya-based general merchandising and supply business
covering construction materials, bitumen, solar equipment and general merchandise.

Built from the company profile document (`Bitutam_International_Company_Profile_Editable.docx`).

## Stack

- [Next.js 15](https://nextjs.org) (App Router, static prerender)
- [Tailwind CSS v4](https://tailwindcss.com)
- `next/image` with AVIF/WebP output
- Oswald + Inter via `next/font`

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Structure

```
app/
  layout.tsx     metadata, fonts, favicon
  page.tsx       all page sections
  globals.css    design tokens + Tailwind
components/
  nav.tsx        sticky header w/ mobile menu
  icons.tsx      inline SVG icon set
public/img/      26 photographs
```

## Brand

| Token | Value | Use |
| --- | --- | --- |
| Ink | `#0f1417` | Primary dark, headings |
| Charcoal | `#1a2126` | Secondary dark sections |
| Amber | `#e9a13b` | CTAs, numerals, accents |
| Bone | `#f5f3ef` | Alternating section backgrounds |

Deliberately distinct from the sister site (Bitutam International Cleaning Services), which uses the
green brand palette from its own profile deck.

## Content notes

- Copy is taken verbatim from the company profile document.
- The source document had `[Insert]` placeholders for all contact details. The values used here
  (`+254 700 123 456`, `info@bitutam.co.ke`, Nairobi) were carried over from the sister company's
  profile. **The phone number looks like a placeholder** — confirm before promoting the site.
- The cost-structure table renders "Per quotation" in place of the document's `[Insert]` cells.
- All photography is license-free stock (Unsplash). The source document contained no images. There
  are no product-specific shots of cement, ballast, blocks or bitumen — those sections currently use
  general construction, warehouse and logistics imagery. Swap in real product/site photography when
  available.

## Deployment

Deployed on Vercel. Pushing to `main` triggers a production deployment.
