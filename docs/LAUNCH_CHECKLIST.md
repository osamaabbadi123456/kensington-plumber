# Launch Checklist

## Truth and representation

- [x] Business truth pack created from confirmed facts
- [x] Initial claims register created
- [ ] Review every future public claim against the register
- [x] Confirm the site clearly represents an enquiry / lead-generation model (source audit and README, 2026-08-25)
- [x] Confirm no fake address, reviews, team, experience, accreditation, Gas Safe, price, response-time, 24/7, guarantee, or job-count claims (claims register, business check and route audit, 2026-08-25)

## Technical baseline

- [x] Existing git state inspected and preserved
- [x] `npm run lint` passes (2026-08-24)
- [x] `npm run build` passes (2026-08-24)
- [x] TypeScript passes as part of `next build` (2026-08-24)
- [x] Add/run a dedicated typecheck script: `npm run check:types` (2026-08-24)
- [x] Add/run Chromium browser smoke tests: `npm run test:smoke` (2026-08-24; desktop and 390px mobile)
- [x] Remove or implement all broken internal route links in the reviewed homepage/navigation scope
- [x] Add static internal-link and route-reachability audit: `npm run check:links` (2026-08-24)
- [x] Add source-level SEO route/canonical/sitemap audit: `npm run check:seo` (2026-08-24)
- [x] Add public business contact consistency audit: `npm run check:business` (2026-08-24)
- [x] Add sitemap/robots handling for public canonical URLs (2026-08-24)
- [x] Custom 404 page added with Home, Services, and Plumbing Problems links

## Contact and conversion

- [x] Repository WhatsApp number matches `447405955956`
- [x] Repository email matches `info@plumberkensington.co.uk`
- [x] Current WhatsApp messages are URL-encoded centrally
- [x] Add a transparent WhatsApp/email contact page with Kensington/W8-only routing copy (2026-08-24)
- [x] Add Contact to primary navigation and shared enquiry CTAs (2026-08-24)
- [ ] Manually test WhatsApp links on a real device before launch
- [ ] Manually test the `/contact` WhatsApp and email links on a real device before launch
- [ ] Verify email mailbox delivery before launch
- [x] Ensure enquiry copy promises no unverified response or outcome (claims register, contact-flow decision and route audit, 2026-08-25)

## UX and accessibility

- [x] Replace corrupted Hero emoji with Lucide/local SVG icons
- [x] Add visible `:focus-visible` states to interactive controls and links
- [x] Review responsive layouts and overflow safeguards at 360px, tablet, and desktop breakpoints in code
- [x] Review mobile navigation panel sizing, scrolling, close controls, and WhatsApp visibility in code
- [x] Visual QA accepted by owner confirmation; not repeated in the technical SEO batch
- [ ] Verify colour contrast and reduced-motion behaviour in a browser audit
- [x] Add Playwright Chromium smoke coverage as a separate command; it is intentionally not part of fast `npm run verify` (2026-08-24)
- [ ] Complete a full accessibility audit; current browser coverage is a smoke check, not WCAG certification
- [ ] Ensure future image cards preserve important subjects

## SEO and content

- [x] Perform evidence-based live search research (Kensington/London SERP research completed 2026-08-23 and local-area review 2026-08-24)
- [x] Give every current indexable page a unique title, description, H1, and canonical (2026-08-24)
- [x] Toilet repair and tap repair have unique title, description, H1, and canonical
- [x] Bathroom plumbing and shower repair have unique title, description, H1, and canonical
- [x] Four problem pages have unique title, description, H1, canonical and service routing
- [x] Plumbing Problems hub links to all four implemented symptom pages
- [x] Three advice pages have unique title, description, H1, canonical and visible routes from the Advice hub
- [x] Confirm W8 targeting is natural and centrally configured (`siteConfig.location.primaryPostcode`, homepage/areas copy and route audit, 2026-08-25)
- [x] Research local area intent and keep Kensington/W8 consolidated until neighbouring coverage is explicitly confirmed (2026-08-24)
- [x] Keep `/areas` as a confirmed-scope hub rather than a postcode or doorway-page index (2026-08-24)
- [x] Prevent indexing of thin, duplicate, placeholder, or nonexistent routes (`publicRoutes.json`, sitemap/SEO audit, route audit and content-similarity review, 2026-08-25)
- [x] Validate structured data against the truth pack before adding it: only WebSite/Organization publisher, Service, visible BreadcrumbList and advice WebPage schemas are used (2026-08-24)
- [x] Run public-content city contamination check for Wolverhampton, Camden and Brent (2026-08-24)

## Release controls

- [x] Review the final diff and preserve unrelated user edits (2026-08-25; no accidental deletions or generated files identified; bootstrap deletion was explicitly authorised)
- [x] Add free repository quality workflow for pull requests and pushes to `main` (2026-08-24)
- [x] Run the local full verification command: `npm run verify` (2026-08-24)
- [x] Complete a source-level pre-launch route and content-similarity audit (2026-08-24)
- [x] Create a deliberate image plan without adding stock or fabricated job imagery (2026-08-24)
- [x] Replace the generic README with project-specific release and truth guidance (2026-08-24)
- [x] Confirm generated Playwright, Next and local-log paths are ignored; no generated files are staged (2026-08-24)
- [ ] Run and record a repeatable Lighthouse audit when a compatible local or deployed production browser target is available
- [x] Complete pre-launch QA and record results under `reports/` (`pre-launch-route-audit.md`, `content-similarity.md` and Lighthouse availability note, 2026-08-25)
- [ ] Obtain explicit owner approval before any deployment, publication, push, or DNS change

## Actual remaining pre-production checks

| Check | Classification | Evidence / next action |
| --- | --- | --- |
| Real-device WhatsApp test | Preview blocker | Confirm the visible CTA opens the confirmed `447405955956` destination without sending an unintended message. |
| Contact email/mailbox delivery test | Production blocker | Confirm `info@plumberkensington.co.uk` receives a controlled test before launch. |
| Lighthouse | Production blocker | Run a repeatable audit against a compatible local or deployed production target; no score is currently claimed. |
| Live canonical/robots/sitemap verification | Production blocker | Validate the authorised live host, canonical domain, `/robots.txt` and `/sitemap.xml` after publication preparation. |
| Full accessibility audit | Optional enhancement | Current focus, labels, overflow and navigation smoke checks pass; a complete WCAG audit remains valuable but is not claimed. |
| Image enhancements from `IMAGE_PLAN.md` | Optional enhancement | No launch-blocking image requirement exists; add only deliberate, subject-safe assets in a later approved batch. |
