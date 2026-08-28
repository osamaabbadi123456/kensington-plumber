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
- [x] Re-run final local source/build verification for the 31-route inventory (2026-08-27)
- [x] Remove or implement all broken internal route links in the reviewed homepage/navigation scope
- [x] Add static internal-link and route-reachability audit: `npm run check:links` (2026-08-24)
- [x] Add source-level SEO route/canonical/sitemap audit: `npm run check:seo` (2026-08-24)
- [x] Add public business contact consistency audit: `npm run check:business` (2026-08-24)
- [x] Add sitemap/robots handling for public canonical URLs (2026-08-24)
- [x] Add truthful Privacy, Terms and Cookies routes with footer links and registered canonical URLs (2026-08-27)
- [x] Add Netlify preview-only noindex/robots protection while retaining production indexing (source checked 2026-08-27; validate on an authorised preview later)
- [x] Add six owner-confirmed area learning pages while keeping Kensington/W8 on the homepage and preventing postcode doorway pages (2026-08-27)
- [x] Replace default card-to-contact routes with relevant existing-page anchors for pipework, basin/sink, water-pressure and radiator/heating contexts (2026-08-27)
- [x] Complete visual QA for the controlled 31-route area architecture at 390px, 768px and 1440px; route-level smoke coverage passed with 72 tests and 4 intentional viewport skips (2026-08-27)
- [x] Custom 404 page added with Home, Services, and Plumbing Problems links

## Contact and conversion

- [x] Repository WhatsApp number matches `447405955956`
- [x] Repository email matches `info@plumberkensington.co.uk`
- [x] Current WhatsApp messages are URL-encoded centrally
- [x] Add a transparent WhatsApp/email contact page with Kensington/W8-only routing copy (2026-08-24)
- [x] Add Contact to primary navigation and shared enquiry CTAs (2026-08-24)
- [x] Add a guided enquiry builder that creates transparent WhatsApp and email drafts without backend submission, photo upload or availability promises (2026-08-25)
- [x] Upgrade the enquiry builder with enquiry-only location choices, contextual non-diagnostic follow-ups and clearer urgency language (2026-08-25)
- [x] Add a mobile-only global conversion dock with a guided-builder path, confirmed WhatsApp number, safe-area spacing and mobile-nav layering (2026-08-26)
- [x] Add controlled detail-page builder deep links and safe known-problem prefill; unknown values leave the builder unselected (2026-08-26)
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
- [x] Complete a lightweight visual/CRO uplift using the existing PK wordmark, CSS and Lucide icons; no fabricated trust assets or images added (2026-08-25)
- [x] Repair cream-hero note-card contrast and visually inspect the affected cream service/advice routes at desktop and 390px mobile (2026-08-25)
- [x] Replace the placeholder-style PK block with a local SVG mark and add a matching `app/icon.svg` site icon (2026-08-25)
- [ ] Verify colour contrast and reduced-motion behaviour in a browser audit
- [x] Add a global `prefers-reduced-motion` safeguard for smooth scrolling, animations and transitions (2026-08-27)
- [x] Exercise the reduced-motion safeguard in Chromium smoke coverage on desktop and mobile (2026-08-27)
- [x] Add Playwright Chromium smoke coverage as a separate command; it is intentionally not part of fast `npm run verify` (2026-08-24)
- [x] Extend Chromium smoke coverage to the published glossary, site-wide footer, confirmed footer contact routes and mobile overflow checks (2026-08-26)
- [x] Extend smoke coverage for mobile conversion actions, controlled builder prefill, footer/dock clearance and absence of the Next development indicator in production smoke output (2026-08-26)
- [ ] Complete a full accessibility audit; current browser coverage is a smoke check, not WCAG certification
- [x] Integrate the approved illustrative visual pack with responsive AVIF/WebP delivery, intrinsic dimensions and `contain` treatment so important subjects are not blindly cropped (2026-08-27)

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
- [x] Record owner-confirmed enquiry coverage for Kensington/W8, South Kensington, West Kensington, Earl's Court, Notting Hill, North Kensington and Holland Park; keep the areas as one controlled hub rather than doorway pages (2026-08-27)
- [x] Complete the final fresh local-area review: retain the six owner-confirmed routes, keep Kensington/W8 on the homepage, and leave Ladbroke Grove, Brompton and Barons Court research-only (2026-08-27; `reports/final-local-area-targeting.md`)
- [x] Keep `/areas` as a confirmed-scope hub rather than a postcode or doorway-page index (2026-08-24)
- [x] Prevent indexing of thin, duplicate, placeholder, or nonexistent routes (`publicRoutes.json`, sitemap/SEO audit, route audit and content-similarity review, 2026-08-25)
- [x] Validate structured data against the truth pack before adding it: only WebSite/Organization publisher, Service, visible BreadcrumbList and reviewed resource WebPage schemas are used (2026-08-26)
- [x] Run public-content city contamination check for Wolverhampton, Camden and Brent (2026-08-24)
- [x] Review the three live advice guides and add fixed, evidence-backed “Last reviewed” labels plus matching `dateModified` schema (2026-08-25)
- [x] Create an unpublished UK/London plumbing-cost research report with exact third-party figures and a publication decision matrix; no public price figures or price page added (2026-08-26)
- [x] Publish a reviewed plumbing glossary index with no individual term URLs, DIY repair sequences or unsupported service claims (2026-08-26)
- [x] Add a site-wide footer with transparent Kensington/W8 enquiry-model wording, live internal resources and confirmed contact routes only (2026-08-26)
- [x] Centralise contextual detail-page link relationships with a three-link maximum and record the audit in `reports/internal-linking-audit.md` (2026-08-26)
- [x] Label hub destinations as a detail route, existing guidance or guided enquiry; preserve header-safe routing anchors (2026-08-27)

## Release controls

- [x] Review the final diff and preserve unrelated user edits (2026-08-25; no accidental deletions or generated files identified; bootstrap deletion was explicitly authorised)
- [x] Add free repository quality workflow for pull requests and pushes to `main` (2026-08-24)
- [x] Run the local full verification command: `npm run verify` (2026-08-24)
- [x] Complete a source-level pre-launch route and content-similarity audit (2026-08-24)
- [x] Create a deliberate image plan without adding stock or fabricated job imagery (2026-08-24)
- [x] Integrate owner-supplied brand/icons and seven approved comprehension visuals; source masters remain separate from delivery derivatives and do not substantiate any business claim (2026-08-27)
- [x] Replace the generic README with project-specific release and truth guidance (2026-08-24)
- [x] Confirm generated Playwright, Next and local-log paths are ignored; no generated files are staged (2026-08-24)
- [x] Record the owner-only phone/mailbox test checklist without falsely marking it passed (2026-08-27)
- [x] Capture the final requested local visual routes at 390px, 768px and 1440px, including legal pages, footer links, logo, dock and area/enquiry controls (2026-08-28; 17 routes, with header-safe anchor and card-destination checks)
- [x] Run and record a repeatable local Lighthouse audit (2026-08-28; mobile 96/100/100/100 and desktop 100/100/100/100; see `reports/lighthouse/summary.md`)
- [x] Complete pre-launch QA and record results under `reports/` (`pre-launch-route-audit.md`, `content-similarity.md` and Lighthouse availability note, 2026-08-25)
- [ ] Obtain explicit owner approval before any deployment, publication, push, or DNS change

## Actual remaining pre-production checks

| Check | Classification | Evidence / next action |
| --- | --- | --- |
| Real-device WhatsApp test | Preview blocker | Confirm the visible CTA opens the confirmed `447405955956` destination without sending an unintended message. |
| Contact email/mailbox delivery test | Production blocker | Confirm `info@plumberkensington.co.uk` receives a controlled test before launch. |
| Lighthouse | Production blocker | Local baseline is recorded; repeat the audit against the authorised preview or production host before a production decision. |
| Live canonical/robots/sitemap verification | Production blocker | Validate the authorised live host, canonical domain, `/robots.txt` and `/sitemap.xml` after publication preparation. |
| Full accessibility audit | Optional enhancement | Current focus, labels, overflow and navigation smoke checks pass; a complete WCAG audit remains valuable but is not claimed. |
| Image enhancements from `IMAGE_PLAN.md` | Optional enhancement | No launch-blocking image requirement exists; add only deliberate, subject-safe assets in a later approved batch. |

## Release sequence after explicit owner approval

- [ ] A. Commit the reviewed current local changes.
- [ ] B. Push `main`.
- [ ] C. Verify GitHub CI.
- [ ] D. Update the Netlify preview.
- [ ] E. Test the preview, including its noindex behaviour.
- [ ] F. Obtain explicit owner approval for production.
- [ ] G. Deploy production and confirm the authorised domain.
- [ ] H. Verify `/robots.txt`, `/sitemap.xml`, canonicals, favicon, Open Graph image, legal pages and WhatsApp/email routes.
- [ ] I. Connect Google Search Console using owner-controlled verified access.
- [ ] J. Connect Bing Webmaster Tools using owner-controlled verified access.
- [ ] K. Submit the sitemap once.
- [ ] L. Capture the Day-0 baseline.

`PRICING_PENDING_OWNER_CONFIRMATION` and `GAS_SAFE_PROOF_PENDING` remain explicit business-data blockers. No public prices, Gas Safe registration claim or boiler/gas qualification claim may be added until a separate approved evidence batch.
