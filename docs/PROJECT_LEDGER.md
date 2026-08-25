# Project Ledger

## Current stage

Pre-launch local audit, performance review and image/content inventory.

Inspection date: 2026-08-24 (Asia/Amman).

## Confirmed project facts

- Site: Plumber Kensington
- Domain: https://plumberkensington.co.uk
- Location: Kensington, London
- Primary local intent: W8
- Model: local plumbing enquiry / lead-generation website; it must not be represented as a fabricated plumbing company
- WhatsApp: +44 7405 955956 (`447405955956`)
- Email: info@plumberkensington.co.uk
- Public language: natural British English

## Repository baseline

- Node.js: v22.18.0
- npm: 10.9.3
- Next.js: 16.3.1
- React / React DOM: 19.2.8
- Styling: Tailwind CSS 4 import plus project CSS in `app/globals.css`
- TypeScript: strict, no-emit configuration
- Scripts: `dev`, `build`, `start`, `lint`, `check:contamination`, `check:business`, `check:links`, `check:seo`, `check:types`, `test:e2e`, `test:e2e:mobile`, `test:smoke`, and `verify`
- Browser E2E: `@playwright/test` 1.62.1 with locally installed Chromium
- Git was already dirty before this work. Existing modified files and untracked scaffolding were preserved.

## What already exists

- App Router root layout with canonical site metadata, Open Graph data, index/follow robots settings, and safe WebSite/Organization publisher JSON-LD.
- Implemented public routes: `/`, `/services`, `/plumbing-problems`, `/areas`, `/plumbing-advice`, and `/about`, plus a custom `app/not-found.tsx`.
- Homepage structure: `Header`, `Hero`, `ProblemSelector`, and `ServicesPreview`.
- Components: `Header`, `Hero`, `MobileNav`, `ProblemSelector`, `ServicesPreview`, `HubPage`, and a local SVG `WhatsAppIcon`.
- Data/utilities: `siteConfig`, `contentMap`, `designTokens`, `absoluteUrl`, and `getWhatsAppUrl`.
- Responsive CSS and mobile navigation. The menu is a client component using React state, a Lucide Menu/X control, a viewport-safe scrollable panel, a backdrop close control, explicit close-on-link behaviour, and navigation links from `siteConfig`.
- WhatsApp links are generated centrally from `siteConfig.contact.whatsapp.baseUrl`; current header and hero links use encoded, prefilled enquiry messages and safe external-link attributes.
- Hub routes now exist for `services`, `plumbing-problems`, `areas`, `plumbing-advice`, and `about`; individual service/problem/area/article pages remain intentionally deferred.
- Three verified-scope service detail routes now exist: `/services/emergency-plumber`, `/services/leak-repair`, and `/services/blocked-toilet`.
- The three detail pages use shared breadcrumbs, related-link, section-wrapper, and enquiry CTA primitives, while keeping distinct page-specific body structures.
- Two additional service detail routes now exist: `/services/toilet-repair` and `/services/tap-repair`.
- Toilet repair explicitly owns flush/cistern/running/leak faults, while blocked-toilet owns blockage/rising-water symptoms. Tap repair owns single-tap faults and does not claim whole-home pressure diagnosis.
- Two further service detail routes now exist: `/services/bathroom-plumbing` and `/services/shower-repair`.
- Bathroom plumbing owns the room-level fixture context; shower repair owns shower-specific temperature, pressure, leak, drainage and fitting symptoms.
- Four symptom-led problem routes now exist: `/plumbing-problems/water-coming-through-ceiling`, `/plumbing-problems/toilet-wont-flush`, `/plumbing-problems/toilet-keeps-running`, and `/plumbing-problems/shower-going-hot-and-cold`.
- Problem pages use answer-first copy, safe immediate steps, enquiry-detail prompts and service routing without becoming generic advice articles.
- The Plumbing Problems hub now links directly to all four implemented symptom pages; other symptom cards remain hub-level until their detail pages are approved.
- Three advice routes now exist: `/plumbing-advice/what-to-do-if-water-is-coming-through-your-ceiling`, `/plumbing-advice/blocked-toilet-or-broken-flush`, and `/plumbing-advice/what-details-to-send-for-a-plumbing-enquiry`.
- The Plumbing Advice hub now links directly to all three implemented advice pages; the remaining card is a general send-the-enquiry prompt.
- `app/robots.ts` allows public crawling and references the canonical sitemap.
- `app/sitemap.ts` maintains the 21 real canonical indexable routes without invented `lastModified` values.
- Reusable JSON-LD covers the WebSite and its publisher entity, visible BreadcrumbLists, the seven existing service pages, and the three advice WebPages. It deliberately omits LocalBusiness, address, reviews, ratings, hours, pricing, service-radius, accreditation and availability claims.
- The metadata audit added route-level canonicals to the five indexable hubs that previously inherited the home canonical. All public indexable pages now have a unique title, description, H1 and canonical resolved through `https://plumberkensington.co.uk`.
- A dependency-free `npm run check:contamination` script checks public `app`/`content` source for accidental Wolverhampton, Camden or Brent references.
- `app/_data/publicRoutes.json` is the single source of truth for the 21 current indexable public routes and feeds `app/sitemap.ts`.
- Dependency-free QA scripts now audit static internal links, public business-contact consistency, the route/metadata/canonical/sitemap inventory, and TypeScript independently of the Next build.
- `npm run verify` runs contamination, business, links, SEO, lint, type checking and one production build in that order.
- `.github/workflows/quality.yml` runs `npm ci` and `npm run verify` for pull requests and pushes to `main`, without secrets, external APIs or deployment steps.
- Live research reviewed primary local, urgent, service, commercial and boiler query families for Kensington, London, UK on 2026-08-23.
- Research records competitor domains/pages, intent overlap, evidence strength, content opportunities, official source categories and cannibalisation risks.
- Live area SERP research on 2026-08-24 found separate search treatment for several neighbouring districts, but the business truth only confirms Kensington, London and W8. No unconfirmed coverage pages were published.
- `/areas` now states the confirmed Kensington/W8 scope plainly and routes visitors to existing service and symptom hubs without acting as a doorway index.
- `/contact` now provides WhatsApp and email enquiry routes, a practical enquiry-details checklist, and transparent routing language that does not promise availability, dispatch or a visit.
- Main navigation and shared hub/detail CTAs now expose contact details without changing the confirmed Kensington/W8 scope.
- Playwright smoke coverage runs against the local production build on Chromium desktop (1440x900) and Chromium mobile (390x844). It covers ten representative public routes plus a deliberate 404 route.
- The smoke suite checks successful page responses, one H1, horizontal overflow, critical console/page errors, visible/correct WhatsApp links, contact email, representative internal navigation, keyboard-focusable desktop navigation, mobile-menu state/closing behaviour, accessible names for visible controls, image `alt` attributes and useful 404 content.
- The fast source/build command remains `npm run verify`; browser smoke tests stay separate as `npm run test:smoke` because they require a local production build and Chromium.
- A full source audit of all 21 public routes found clear page purposes, one primary intent per route, appropriate metadata/canonicals, useful navigation and no unsupported claims or thin placeholder routes. See `reports/pre-launch-route-audit.md`.
- A content-similarity review found no excessive body-copy duplication across the seven service, four problem and three advice pages. Intentional symptom/service overlap is documented in `reports/content-similarity.md`.
- The homepage service preview now links implemented Leak Repair, Blocked Toilet, Bathroom Plumbing and Shower Repair cards directly to their matching detail pages; unbuilt cards still use the services hub.
- No real content images are currently required for launch. `docs/IMAGE_PLAN.md` records only deliberate later candidates and safe implementation rules.
- There is no launch-blocking image requirement; `docs/IMAGE_PLAN.md` remains a later enhancement plan and no images were added in the release-hygiene batch.
- Lighthouse was unavailable locally: no installed Lighthouse CLI/package and no locally discoverable Chrome executable. No synthetic scores were recorded; see `reports/lighthouse/README.md`.
- Launch checklist reconciliation on 2026-08-25 marked evidence-backed research, W8 configuration, indexing controls, truth-safe enquiry copy, report-backed pre-launch QA and the authorised final diff review as complete. Live contact tests, deployed-host checks and owner approval remain open.
- `kensington_codex_bootstrap/` was reviewed and removed on 2026-08-25. It contained only historical instructions, duplicate truth/docs and a superseded baseline script; no production source or unique current project data was deleted.

## Baseline results

- `npm run lint`: PASS (exit code 0; no reported warnings or errors).
- `npm run build`: PASS (exit code 0).
- Production compilation: PASS.
- TypeScript check performed by `next build`: PASS.
- Static route output after this follow-up includes the three new advice routes alongside the existing service, problem, hub and recovery routes.
- `npm run check:contamination`: PASS (2026-08-24; no prohibited city references in `app`/`content`).
- `npm run lint`: PASS (2026-08-24; no reported warnings or errors).
- `npm run build`: PASS (2026-08-24; generated `/robots.txt` and `/sitemap.xml` alongside all public routes).
- `npm run verify`: PASS (2026-08-24; contact-flow update passed contamination, business, links, SEO, lint, typecheck and production build).
- Dedicated typecheck: PASS through `npm run check:types` (2026-08-24).
- `npm run test:smoke`: PASS (2026-08-24; Chromium desktop and mobile smoke coverage).
- `npm run verify`: PASS (2026-08-25; contamination, business, links, SEO, lint, typecheck and production build).
- `npm run test:smoke`: PASS (2026-08-25; 28 passed, 2 intentional skips across Chromium desktop and 390px mobile).
- Pre-launch content/contact/truth audit: PASS (2026-08-24; confirmed domain, email, WhatsApp number and Kensington/W8-only public scope).

## Problems found

- Remaining individual service/problem/article/area pages are intentionally deferred; only the three requested advice pages were added in this batch.
- Search output did not expose reliable volume, CPC, difficulty, backlinks, exact positions, Local Pack, PAA, video or AI answer data; none was fabricated.
- Visual review is recorded as completed and acceptable on owner confirmation; it was not repeated in this batch.
- W8 is stored centrally as `siteConfig.location.primaryPostcode`.
- Source checks still cannot evaluate every dynamic expression, redirect chain or production-host behaviour. Browser smoke coverage is intentionally compact: it is Chromium-only, does not test external WhatsApp/email delivery, and is not a full accessibility audit or measured performance score. Individual service/problem/area/article detail pages remain intentionally deferred.
- Area SERPs alone do not prove this site's coverage. South Kensington, North Kensington, West Kensington, Earl's Court, Holland Park and Notting Hill remain research-only until the owner confirms an appropriate lead scope.
- A local Lighthouse score is not available yet. Any future performance measurement must use a repeatable local or deployed production audit rather than an invented score.

## Next safest implementation step

Next safest step: complete the preview-blocking real-device WhatsApp check, then obtain owner approval before any production-only contact, Lighthouse and live-host validations.
