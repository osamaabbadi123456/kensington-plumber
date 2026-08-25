# Plumber Kensington

`plumberkensington.co.uk` is a local plumbing enquiry / lead-generation website for Kensington, London. The confirmed public scope is Kensington with W8 as the primary postcode intent.

## Stack

- Next.js 16 App Router
- React 19 and TypeScript
- Lucide React icons
- Tailwind CSS 4 import with project CSS in `app/globals.css`
- Playwright Chromium smoke tests

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000` for local development. A production-style local server can be started with `npm run build` followed by `npm run start`.

## QA commands

```bash
npm run verify
npm run test:smoke
```

`verify` runs contamination, business-contact, internal-link, SEO-route, lint, TypeScript and production-build checks. `test:smoke` runs the separate Chromium desktop/mobile browser suite against the local production build.

## Truth and claims

Public copy must use natural British English and represent an enquiry / lead-generation model, not a fabricated plumbing company. Do not add an address, reviews, team, years of experience, accreditations, Gas Safe claims, insurance, prices, response times, 24/7 claims, guarantees or job counts without explicit verification. Keep public geographic scope to Kensington/W8; neighbouring coverage remains unconfirmed.

Confirmed contact details:

- WhatsApp: `+44 7405 955956` (`447405955956`)
- Email: `info@plumberkensington.co.uk`

## Key project documents

- [Project ledger](docs/PROJECT_LEDGER.md)
- [Business truth pack](docs/BUSINESS_TRUTH_PACK.md)
- [Claims register](docs/CLAIMS_REGISTER.md)
- [SEO research](docs/SEO_RESEARCH.md)
- [Keyword URL map](docs/KEYWORD_URL_MAP.csv)
- [Image plan](docs/IMAGE_PLAN.md)
- [Launch checklist](docs/LAUNCH_CHECKLIST.md)

Do not deploy to production, change DNS, publish, or push repository changes without owner approval. Keep any preview or release recoverable so an authorised rollback remains possible.
