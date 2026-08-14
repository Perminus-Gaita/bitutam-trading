# Bitutam International — Trading, Procurement & Supply — project memory

## What this is

Marketing site for the **trading / procurement / supply** business: construction materials, bitumen,
solar equipment, general merchandising.
Live at https://bitutam-trading.vercel.app · repo `Perminus-Gaita/bitutam-trading`.

There is a **sister site** for a completely different Bitutam business — cleaning, gardening and
landscaping — at https://bitutam-cleaning.vercel.app (`Perminus-Gaita/bitutam-cleaning`). The two
companies share a name and contact details but nothing else. Do not merge them.

## Source of truth

Built from `~/Documents/Bitutam/Bitutam_International_Company_Profile_Editable.docx`.
All body copy is verbatim from that document.

To re-extract the copy, unzip the docx and strip tags from `word/document.xml` — there is no PDF
equivalent for this business (the sibling PDF in that folder is the *cleaning* company's profile).

## Design decisions

- Deliberately **not** the cleaning site's green. Industrial palette: ink `#0f1417`,
  charcoal `#1a2126`, amber `#e9a13b`, bone `#f5f3ef`. The two sites should stay visually distinct
  so they aren't mistaken for one business.
- Fonts: Oswald (display, uppercase) + Inter (body).
- Single long-form page with anchor nav, following the document's section order: hero → proposition
  → introduction → background/vision/values → target market → services → products → process →
  portfolio → why choose → cost approach → contact.

## Content substitutions (important)

The source document was a template full of `[Insert]` placeholders. Where they were filled:

- **Contact block** — the document had `[Insert company phone number]`, `[Insert company email]`,
  `[Insert physical or postal address]`, `[Insert website and social handles]`. On the user's
  instruction these were carried over from the *cleaning* company's profile:
  `+254 700 123 456`, `info@bitutam.co.ke`, `www.bitutam.co.ke`, Nairobi Kenya.
  **The phone number looks like a dummy.** Flagged to the user, not yet confirmed.
- **Cost-structure table** — the document's `[Insert]` amount cells render as "Per quotation".
- **Project references** — the document says specific client names "can be inserted here where
  disclosure is appropriate". Rendered as "available on request". No client names are claimed
  anywhere on the site, deliberately.

## Imagery

26 images in `public/img/`, **all license-free stock (Unsplash)** — the source document contained no
images at all.

Known gap: there are **no product-specific photographs** of cement, ballast, building blocks or
bitumen, which are the headline products. Those sections currently use general construction,
warehouse and logistics imagery. Replace with real product/site photography when the client
provides it.

When sourcing more stock: Unsplash photo IDs cannot be recalled reliably — roughly a third of any
guessed batch returns an unrelated image (a pug, UN flags, a wine bottle). Always download a batch,
build a contact sheet, and look at it before committing anything to the repo.

## Gotchas

- Next.js image optimization is slow on a cold cache — a first-load screenshot will show blank
  images for ~10 seconds. Warm with
  `curl "localhost:PORT/_next/image?url=%2Fimg%2FNAME.jpg&w=1920&q=75"` before screenshotting.
- Playwright `fullPage` screenshots render the `fixed` header wherever it sat at capture time, which
  can look like the nav is overlapping the H1. It isn't — verify with a viewport-sized shot at
  `scrollY === 0` before "fixing" a non-bug.
- Pinned to `next@15.5.23`, not `15.5.4` — the latter has CVE-2025-66478.
- `gh repo create --push` fails in this environment (`git: 'remote-https' is not a git command`).
  Push separately with:
  `git -c credential.helper='!f(){ echo username=x-access-token; echo "password=$(gh auth token)"; };f' push`

## Deployment

Vercel project `bitutam-trading` (`prj_3StzBNnTlP66qoPusJIq891tEqht`), team `gaitas-projects`.
Push to `main` → production deploy. Vercel Authentication is disabled, so the URL is public.
