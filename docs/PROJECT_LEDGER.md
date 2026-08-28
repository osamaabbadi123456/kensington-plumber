# Project Ledger

## Current stage

Final pre-launch hardening: controlled six-area architecture, anchor-first routing, completed local QA and preview preparation.

Latest local review: 2026-08-27 (Asia/Amman).

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
- Homepage structure: `Header`, `Hero`, guided `EnquiryBuilder`, `ProblemSelector`, and `ServicesPreview`.
- Components: `Header`, `Hero`, `EnquiryBuilder`, `MobileNav`, `ProblemSelector`, `ServicesPreview`, `HubPage`, and a local SVG `WhatsAppIcon`.
- Data/utilities: `siteConfig`, `contentMap`, `designTokens`, `absoluteUrl`, and `getWhatsAppUrl`.
- Responsive CSS and mobile navigation. The menu is a client component using React state, a Lucide Menu/X control, a viewport-safe scrollable panel, a backdrop close control, explicit close-on-link behaviour, and navigation links from `siteConfig`.
- WhatsApp links are generated centrally from `siteConfig.contact.whatsapp.baseUrl`; current header and hero links use encoded, prefilled enquiry messages and safe external-link attributes.
- Hub routes now exist for `services`, `plumbing-problems`, `areas`, `plumbing-advice`, and `about`; further service/problem/article pages remain intentionally deferred.
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
- `app/sitemap.ts` maintains the 31 real canonical indexable routes without invented `lastModified` values.
- Reusable JSON-LD covers the WebSite and its publisher entity, visible BreadcrumbLists, the seven existing service pages, and the three advice WebPages. It deliberately omits LocalBusiness, address, reviews, ratings, hours, pricing, service-radius, accreditation and availability claims.
- The metadata audit added route-level canonicals to the five indexable hubs that previously inherited the home canonical. All public indexable pages now have a unique title, description, H1 and canonical resolved through `https://plumberkensington.co.uk`.
- A dependency-free `npm run check:contamination` script checks public `app`/`content` source for accidental Wolverhampton, Camden or Brent references.
- `app/_data/publicRoutes.json` is the single source of truth for the 31 current indexable public routes and feeds `app/sitemap.ts`.
- Dependency-free QA scripts now audit static internal links, public business-contact consistency, the route/metadata/canonical/sitemap inventory, and TypeScript independently of the Next build.
- `npm run verify` runs contamination, business, links, SEO, lint, type checking and one production build in that order.
- `.github/workflows/quality.yml` runs `npm ci` and `npm run verify` for pull requests and pushes to `main`, without secrets, external APIs or deployment steps.
- Live research reviewed primary local, urgent, service, commercial and boiler query families for Kensington, London, UK on 2026-08-23.
- Research records competitor domains/pages, intent overlap, evidence strength, content opportunities, official source categories and cannibalisation risks.
- Live area SERP research first found separate search treatment for several neighbouring districts. Following owner confirmation on 2026-08-27, six distinct neighbouring-area learning routes were implemented without adding a Kensington/W8 duplicate route.
- `/areas` now states the controlled confirmed coverage, links only to the six implemented area pages, and does not act as a postcode or doorway index.
- `/contact` now provides WhatsApp and email enquiry routes, a practical enquiry-details checklist, and transparent routing language that does not promise availability, dispatch or a visit.
- The homepage now places a lightweight guided enquiry builder directly below the hero, while `/contact` offers the same message-building path in a contact-specific context. It creates a local WhatsApp or email draft only; it has no backend, booking flow or photo upload.
- The visual/CRO uplift strengthens the existing PK wordmark, hero hierarchy, responsive CTA treatment, section rhythm and shared card polish without images, third-party scripts or fabricated trust assets.
- Builder V3 keeps canonical/local targeting on Kensington/W8 while allowing enquiry-location choices for nearby London districts and an optional other-area field. These are explicitly enquiry details only, not coverage, availability, booking or area-page claims.
- Builder V3 includes one short, symptom-specific follow-up only after a problem type is selected. The answer appears in the local WhatsApp/email draft; it is not a diagnostic result or backend submission.
- The root contrast bug was caused by translucent white note text inherited by `.service-hero-note` and `.toilet-symptom-badge` on cream service heroes. Cream-specific selectors now provide dark text, burgundy icons, visible borders and light card backgrounds while dark heroes retain their white treatment.
- The PK mark is now a local reusable SVG with a subtle pipe/water cue, and `app/icon.svg` supplies the corresponding modern site icon. No external branding package or fabricated corporate identity was added.
- All three existing advice guides were reviewed on 2026-08-25. `app/_data/contentFreshness.ts` stores the actual fixed review date, topic and description; the pages show “Last reviewed” and their safe WebPage schema now uses that same `dateModified` value.
- The homepage now reads central freshness metadata to show genuinely reviewed guides in a “Recently reviewed plumbing guides” section, followed by a compact resource path to Advice, the Glossary and the reviewed-guide section. It has no public cost-guide link.
- Final local visual review evidence is retained in `reports/visual-review/` at 1440x900 and 390x844. The only verified refinement was a balanced four-card desktop layout for the Recently Reviewed section; no new illustrations or images were needed.
- `/plumbing-glossary` is a reviewed, indexable resource page with grouped plain-English terms, visible breadcrumbs, canonical metadata, WebPage and BreadcrumbList schema, and links only to current relevant routes. It does not publish DIY repair sequences or individual term URLs.
- A reusable site-wide footer now provides transparent Kensington/W8 model wording, primary navigation, resource links, WhatsApp and email without an address, trust badges or availability claims.
- Internal-only UK/London cost research is recorded in `reports/plumbing-cost-research.md` and the exact-figure V2 report in `reports/plumbing-cost-research-v2.md`; no price has been published. The V2 publication decision matrix keeps every family unpublished pending owner review.
- Main navigation and shared hub/detail CTAs now expose contact details without changing the confirmed Kensington/W8 scope.
- A mobile-only fixed conversion dock now appears across public routes at 760px and below. It keeps guided enquiry building and direct WhatsApp available while respecting iPhone safe areas, the mobile navigation overlay and footer spacing.
- Detail-page final CTAs now preserve direct WhatsApp while offering the canonical guided-builder destination. Known page contexts prefill only a controlled relevant problem option through `/contact?problem=…#build-enquiry`; unknown values safely leave the selection empty.
- `app/_data/internalLinks.ts` centralises contextual detail-page links, builder-prefill keys and mobile-dock labels. Hubs remain card-led, and the complete rationale is recorded in `reports/internal-linking-audit.md`.
- A live low-volume keyword opportunity review on 2026-08-26 records only directional UK/London SERP evidence because neither Keyword Planner nor Search Console data was available. It keeps the homepage as the Kensington/W8 owner, prioritises existing leak, toilet, tap, shower and ceiling-water routes, and does not fabricate volume, difficulty or forecast data. See `reports/keyword-opportunity-low-volume.md`.
- A route-by-route title and meta-description audit on 2026-08-26 made existing metadata more intent-specific while retaining truthful enquiry wording, canonical URLs and the current freshness data. See `reports/title-meta-ctr-audit.md`.
- Area-query research confirms separate search treatment for neighbouring district terms. Owner confirmation now covers six areas, each represented by one distinct learning page; no other nearby-area or postcode page is authorised. See `reports/area-page-opportunity.md` and `reports/area-page-cannibalisation-check.md`.
- `docs/IMAGE_PLAN_V2.md` maps safe, optional visual directions for existing routes and two research-only future candidates. No images were added and no image is launch-blocking.
- The black “N” seen in a prior local mobile screenshot is not application markup: production-build smoke output has no `nextjs-portal` development indicator. The logo, BrandMark and `app/icon.svg` were intentionally not changed in this batch.
- Playwright smoke coverage runs against the local production build on Chromium desktop (1440x900) and Chromium mobile (390x844). It covers ten representative public routes plus a deliberate 404 route.
- The smoke suite checks successful page responses, one H1, horizontal overflow, critical console/page errors, visible/correct WhatsApp links, contact email, representative internal navigation, keyboard-focusable desktop navigation, mobile-menu state/closing behaviour, accessible names for visible controls, image `alt` attributes and useful 404 content.
- The fast source/build command remains `npm run verify`; browser smoke tests stay separate as `npm run test:smoke` because they require a local production build and Chromium.
- A full source audit of all 21 public routes found clear page purposes, one primary intent per route, appropriate metadata/canonicals, useful navigation and no unsupported claims or thin placeholder routes. See `reports/pre-launch-route-audit.md`.
- A content-similarity review found no excessive body-copy duplication across the seven service, four problem and three advice pages. Intentional symptom/service overlap is documented in `reports/content-similarity.md`.
- The homepage service preview now links implemented Leak Repair, Blocked Toilet, Bathroom Plumbing and Shower Repair cards directly to their matching detail pages; unbuilt cards still use the services hub.
- No real content images are currently required for launch. `docs/IMAGE_PLAN.md` records only deliberate later candidates and safe implementation rules.
- There is no launch-blocking image requirement; `docs/IMAGE_PLAN.md` remains a later enhancement plan and no images were added in the release-hygiene batch.
- A local Lighthouse baseline is recorded with temporary tooling and Playwright Chromium; no permanent dependency was added. See `reports/lighthouse/README.md` and `reports/lighthouse/summary.md`.
- Launch checklist reconciliation on 2026-08-25 marked evidence-backed research, W8 configuration, indexing controls, truth-safe enquiry copy, report-backed pre-launch QA and the authorised final diff review as complete. Live contact tests, deployed-host checks and owner approval remain open.
- `kensington_codex_bootstrap/` was reviewed and removed on 2026-08-25. It contained only historical instructions, duplicate truth/docs and a superseded baseline script; no production source or unique current project data was deleted.
- Deep pre-launch SEO research (2026-08-27) now records a 249-query universe, 53 observed organic-result entries across 43 priority SERPs, canonical intent clusters, scored opportunity profiles, competitor patterns, current-page gaps, CTR/title hypotheses, visual briefs, area controls, and earned-link research. It is strategy only: no public route, page body, image, metadata, canonical, price, or coverage claim changed.
- The owner-supplied visual pack was integrated on 2026-08-27 without changing public route, SEO or business-truth architecture. Source masters live under `assets/source/kensington-final-visual-pack/`; lightweight AVIF/WebP derivatives serve the header branding, homepage enquiry visual and seven approved existing-route visuals. The pack is illustrative only, not evidence of a real job, property, team or attendance.
- Coverage confirmation updated on 2026-08-27: Kensington/W8, South Kensington, West Kensington, Earl's Court, Notting Hill, North Kensington and Holland Park are confirmed enquiry-coverage areas. The homepage and `/areas` show only this controlled list; the six neighbouring areas now route to distinct learning pages while Kensington/W8 remains on the homepage.
- `app/_data/areaCoverage.ts` controls accepted location query values and builder options. Invalid `location` values are ignored; cards without existing page owners now use controlled `problem` prefills rather than dead-end routes. Pricing remains pending owner confirmation, and heating/boiler categories remain enquiry-only without Gas Safe, certification or availability claims.
- Final title/meta review on 2026-08-27 kept all current route metadata except `/areas` and `/about`, whose prior Kensington/W8-only scope wording could imply the newly confirmed areas were not covered. See `reports/final-title-meta-review.md`.
- The approved PK icon now supplies `app/favicon.ico` (16/32/64px), `app/icon.png` (512px) and `app/apple-icon.png` (180px). The owner-supplied wide brand is the static Open Graph and Twitter image. No image is launch-blocking beyond these safely integrated brand assets; `docs/IMAGE_PLAN.md` and `docs/IMAGE_PLAN_V2.md` remain enhancement references.
- Three factual legal-information routes now exist: `/privacy`, `/terms` and `/cookies`. They explain the current enquiry-routing model, third-party contact channels and the absence of application analytics/advertising scripts without inventing a controller, address, retention period or compliance position.
- The shared footer now has named Privacy, Terms and Cookies links. Smoke coverage checks those destinations alongside the existing contact routes.
- A Netlify preview guard now marks every Netlify deployment `noindex, nofollow` and returns disallow-all robots rules until the owner-controlled `NETLIFY_PUBLIC_INDEXING=true` launch variable is set. Canonicals remain on the public domain.
- The global reduced-motion preference now also shortens CSS animations and transitions and disables smooth scrolling. This is a targeted safeguard, not a WCAG certification.
- `reports/OWNER_REAL_DEVICE_TEST.md` records the twelve owner-only phone/mailbox checks as OWNER PENDING. `reports/lighthouse/README.md` records the local baseline and its production-host limitation.
- Six confirmed-area pages now exist for South Kensington, West Kensington, Earl's Court, Notting Hill, North Kensington and Holland Park. Their local intents are separate from the homepage's Kensington/W8 owner, and their unique page briefs, similarity review and cannibalisation controls are recorded in `reports/area-page-uniqueness-audit.md` and `reports/area-page-cannibalisation-check.md`.
- The Areas hub and homepage now send confirmed neighbouring-area cards to learning pages rather than straight to Contact. Each area page has its own controlled location-prefilled enquiry action.
- The Services and Plumbing Problems hubs now use stable existing-page anchors for pipework, basin/sink, low-flow/water-pressure and radiator/heating enquiry context. No pipe-repair or low-water-pressure SEO page was created.

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
- `npm run lint`: PASS (2026-08-25; enquiry-builder implementation).
- `npm run verify`: PASS (2026-08-25; visual/CRO uplift, 21 registered routes).
- `npm run test:smoke`: PASS (2026-08-25; 30 passed, 2 intentional skips; includes structured enquiry-message coverage on desktop and mobile Chromium).
- `npm run verify`: PASS (2026-08-26; Builder V3, contrast, content-freshness, icon and resource modules).
- `npm run test:smoke`: PASS (2026-08-26; 34 passed, 2 intentional skips across desktop and mobile Chromium; covers Builder V3 location, other-area, contextual-message and advice-freshness behaviour).
- `npm run verify`: PASS (2026-08-26; glossary, footer, exact-figure internal research V2 and 22-route inventory).
- `npm run test:smoke`: PASS (2026-08-26; 40 passed, 2 intentional skips across desktop and mobile Chromium; glossary, footer, one H1, internal links and mobile-overflow coverage included).
- `npm run verify`: PASS (2026-08-26; final visual-review CSS refinement and screenshot pack).
- `npm run test:smoke`: PASS (2026-08-26; final visual-review regression check across desktop and mobile Chromium).
- `npm run verify`: PASS (2026-08-26; mobile conversion dock, controlled builder routing and central internal-link map).
- `npm run test:smoke`: PASS (2026-08-26; 46 passed, 4 intentional cross-viewport skips; mobile dock, footer clearance, prefill and production-overlay checks included).
- `npm run verify`: PASS (2026-08-26; low-volume opportunity and metadata CTR batch; 22 indexable routes).
- `npm run test:smoke`: PASS (2026-08-26; 46 passed, 4 intentional cross-viewport skips across desktop and mobile Chromium after a stale local development listener was stopped).
- Visual asset QA: PASS (2026-08-27; all nine requested routes checked at 1440px, 768px and 390px for loaded visuals and horizontal overflow; header, mobile navigation, conversion dock and footer were captured locally).
- `npm run verify`: PASS (2026-08-27; contamination, contact/business, internal-link, SEO, lint, typecheck and production build checks after visual-asset integration).
- `npm run test:smoke`: PASS (2026-08-27; 46 Chromium assertions passed and 4 viewport-specific assertions were intentionally skipped after visual-asset integration; the completed local runner left its `next start` child process open and that verified local process was then closed).
- Area/card routing QA: PASS (2026-08-27; controlled known/unknown location prefill and full-card hub/area routing covered in Chromium smoke tests; visual QA covered `/`, `/areas`, `/services`, `/plumbing-problems`, `/contact`, Leak Repair and Tap Repair at 1440px, 768px and 390px).
- `npm run verify`: PASS (2026-08-27; final confirmed-area and card-routing batch, 22 indexable routes).
- `npm run test:smoke`: PASS (2026-08-27; 50 assertions passed and 4 cross-viewport assertions were intentionally skipped; the local test-server child was closed after the completed run).
- Final pre-launch hardening checks: `npm run verify` PASS (2026-08-27; 25 canonical public routes); `npm run test:smoke` PASS (2026-08-27; 58 assertions passed and 4 cross-viewport assertions intentionally skipped). The final visual capture passed on 10 routes at 390px, 768px and 1440px, including the three legal routes.
- Confirmed-area architecture checks: `npm run verify` PASS (2026-08-27; 31 canonical routes, 67 source files checked for reachability); `npm run test:smoke` PASS (2026-08-27; 72 Chromium tests passed and 4 intentional viewport-specific skips). Visual QA passed for 17 requested routes at 390px, 768px and 1440px. The smoke wrapper now owns and closes its local production server on Windows.
- Final local architecture/UX QA: PASS (2026-08-28; `npm run verify` passed for 31 canonical routes, `npm run test:smoke` passed with 76 Chromium tests and 4 intentional viewport-specific skips, and visual capture passed for 17 routes at 390px, 768px and 1440px). The smoke runner owns `next start` on dedicated port 3401 and closes only that spawned process; the visual runner uses its own temporary port. Header-safe anchors for pipework, basin/sink, water pressure, radiator/heating and the enquiry builder were checked from other routes.
- Local Lighthouse: PASS (2026-08-28; temporary Lighthouse 12.8.2 against a dedicated local production server: mobile 96 Performance / 100 Accessibility / 100 Best Practices / 100 SEO, desktop 100 in all four categories). LCP, CLS and TBT are recorded in `reports/lighthouse/summary.md`; no permanent dependency was added.
- Visual inspection: PASS (2026-08-25; local Chromium at 1440px desktop and 390px mobile; homepage, Toilet Repair and Advice inspected with no observed contrast regression or horizontal overflow).
- Pre-launch content/contact/truth audit: PASS (2026-08-24; confirmed domain, email, WhatsApp number and Kensington/W8-only public scope).

## Problems found

- Further individual service/problem/article pages and any unapproved area pages are intentionally deferred.
- Search output did not expose reliable volume, CPC, difficulty, backlinks, exact positions, Local Pack, PAA, video or AI answer data; none was fabricated.
- Visual review is recorded as completed and acceptable on owner confirmation; it was not repeated in this batch.
- W8 is stored centrally as `siteConfig.location.primaryPostcode`.
- Source checks still cannot evaluate every dynamic expression, redirect chain or production-host behaviour. Browser smoke coverage is intentionally compact: it is Chromium-only, does not test external WhatsApp/email delivery, and is not a full accessibility audit or measured performance score. Further service/problem/article pages and any unapproved area pages remain intentionally deferred.
- Confirmed nearby coverage is controlled centrally in `app/_data/areaCoverage.ts`; it authorises only the six implemented area learning pages and does not authorise local-office wording or coverage outside the approved list.
- The local Lighthouse baseline is not a production-host measurement. Any production decision still requires a repeatable authorised preview/live audit.
- Nearby London district names in Builder V3 are enquiry-location inputs. Only the six owner-confirmed areas may also appear as public coverage claims or dedicated area pages; no other location may be expanded without separate owner confirmation and research.
- The published advice freshness system currently covers exactly three manually reviewed advice guides. It is not an automatic publishing-date system.
- Pricing evidence is heterogeneous across UK cost guides and London provider rate pages. It remains unsuitable for public price claims until an owner-approved editorial review.
- Keyword volume and Search Console data remain unavailable locally. This batch's prioritisation is directional SERP evidence, not a traffic forecast.
- `cistern not filling` and `overflow pipe leaking` are research candidates only. They need distinct Search Console evidence and an owner-approved intent brief before any new URL is considered; `pipe repair` remains a supporting Leak Repair topic.
- A local Lighthouse baseline is now recorded, but a deployed preview/production-host audit is still required before a production decision. The temporary `npx` run did not add Lighthouse to the repository dependencies.
- The confirmed-area implementation increases the current public canonical inventory from 25 to 31 routes. Its requested visual and browser-smoke checks are complete; Lighthouse remains separate from fast verification and needs an authorised preview/live measurement before production.
- No launch-blocking image is required. `docs/IMAGE_PLAN.md` and `docs/IMAGE_PLAN_V2.md` remain later enhancement plans; no image was added during the final local QA.

## Next safest implementation step

Next safest step: complete the authorised GitHub/Netlify preview release checks, then have the owner inspect the preview and complete real-device contact checks before any production decision. No production publication is authorised.
