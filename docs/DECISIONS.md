# Decisions

## D029 — Deterministic local smoke-server ownership

`npm run test:smoke` uses `scripts/run-smoke.mjs` to start and own a temporary local production server before launching Playwright. The wrapper closes that exact server when testing ends, preventing a stale local listener from being mistaken for the current build on Windows. This changes test-process hygiene only; browser coverage remains separate from `npm run verify`.

## D028 — Confirmed-area learning pages and anchor-first routing

After owner confirmation and fresh local SERP review, publish exactly six canonical confirmed-area pages: South Kensington, West Kensington, Earl's Court, Notting Hill, North Kensington and Holland Park. Keep the homepage as the sole owner of general Kensington/W8 intent; do not create `/areas/kensington`, a W8 page or postcode variants. Each area page must use its own local intent, postcode-context boundary, service/problem selection and content order, while retaining transparent enquiry-routing language. Use existing page anchors for overlapping pipework, basin/sink, water-pressure and radiator/heating enquiries instead of creating thin service pages or routing every card directly to Contact. The only justified direct-to-builder card is “Not sure”, because it explicitly says a diagnosis is not required.

## D027 — Preview indexing safety and legal information routes

The three lightweight legal-information routes (`/privacy`, `/terms` and `/cookies`) are canonical, indexable production pages because they describe the current enquiry-routing model and no unverified legal identity, address, retention period or compliance certification. The footer exposes them with named links. For Netlify only, `NETLIFY=true` with a non-`production` `CONTEXT` makes root metadata `noindex, nofollow` and serves a disallow-all `robots.txt` without a sitemap reference. Production retains index/follow crawling and the canonical domain from `siteConfig`; relative canonical paths continue to resolve to `https://plumberkensington.co.uk`. This is source-level protection only and must be verified on an authorised preview before production release.

## D025 — Mobile conversion dock and contextual enquiry routing

Use one compact mobile-only conversion dock on every public route. It offers a guided-builder route and a direct WhatsApp route, sits below the mobile-navigation overlay, honours safe-area insets and keeps footer content clear with mobile footer spacing. The homepage links to its local builder; all other pages use `/contact#build-enquiry`, with a controlled known-problem query only where a detail-page context supports it. `app/_data/internalLinks.ts` owns these prefill values, the limited related-link choices and page-aware dock messages. Unknown query values must produce an unselected builder state. The logo, BrandMark and site icon are intentionally unchanged in this batch.

## D024 — Final visual review and screenshot evidence

Use a local production build and Chromium to capture a compact owner-review screenshot pack at 1440x900 and 390x844 under `reports/visual-review/`. Make only verified presentation changes and add no stock, generated or decorative imagery where the existing branded UI compositions already communicate the content clearly. The final review balanced the four-card "Recently reviewed" desktop grid; no illustration was warranted. These files are local QA evidence only, not evidence of deployed-host behaviour, contact delivery or measured performance.

## D023 — Glossary, footer and price-publication boundary

Publish one review-dated glossary index only, rather than individual term pages. Keep it Server Component based and use compact grouped cards linking only to real routes. Add the footer once in the root layout so every public route has consistent resources and truth-safe contact details. Preserve the researched exact figures in an internal report only: a third-party UK/London guide or provider rate is not this website’s price, availability or quote. No price page, tariff, schema or price CTA may be published without separate owner approval and a fresh editorial decision.

## D022 — Manual content freshness only

Advice review dates are stored as explicit, fixed values in `app/_data/contentFreshness.ts`. A date is added or changed only after a real review of that guide; it is visible on the matching page, reused by the homepage module and passed to WebPage `dateModified` schema. The system currently covers only the three reviewed advice guides and must not become a build-time timestamp or a decorative freshness claim.

## D021 — Enquiry-location and contextual follow-up boundaries

Builder V3 may offer nearby London district names as a visitor's enquiry location, but they are neither confirmed coverage nor SEO targets. It includes a short contextual answer prompt to improve a visitor's message, not to diagnose a problem. The message remains a local WhatsApp or `mailto:` draft and does not submit data, upload files, confirm availability, dispatch anyone or create a booking.

## D020 — Guided enquiry builder and visual CRO uplift

Use one small Client Component for the interactive enquiry builder and keep its parent pages and all other page content as Server Components. The builder creates a previewed WhatsApp or `mailto:` draft from user-selected details only; it does not submit to a backend, upload photos, confirm a booking, or promise attendance. Kensington and W8 remain the default/confirmed choices; an optional nearby-area field explicitly says coverage is not confirmed. The visual uplift uses existing CSS, Lucide icons and the PK wordmark rather than images, trackers, third-party widgets or fabricated trust signals.

## D019 — Bootstrap folder disposition

`kensington_codex_bootstrap/` was historical bootstrap material rather than active application source. Its truth packs, checklists and project guidance were superseded by the root `docs/`, `scripts/`, `tests/` and current project rules; its baseline PowerShell script was superseded by the dependency-free QA scripts. The reviewed duplicate folder was removed on 2026-08-25, with active root source, documentation, scripts and tests preserved.

## D018 — Release hygiene and rollback gate

Keep generated Next/Playwright output and local debug files outside version control. Before any authorised preview or production publication, record the release/build identifier and retain a recoverable previous version with an agreed rollback path. This batch does not authorise deployment, publishing, repository push or DNS changes.

## D017 — Image and local performance audit

Keep the present low-image launch approach unless a planned image adds real comprehension or trust without implying a real local job, team, vehicle or premises. When a later image is approved, reserve its dimensions, choose crop-safe positioning, lazy-load below-fold assets and use `priority` only for a verified LCP image. Keep Lighthouse separate from `npm run verify`; do not report performance scores unless a repeatable compatible audit actually produced them.

## D018 — Approved visual-pack delivery

Keep owner-supplied visual masters outside the public delivery path in `assets/source/kensington-final-visual-pack/`. Serve only responsive AVIF/WebP derivatives through a small server-rendered `<picture>` primitive, with intrinsic dimensions, lazy loading and `object-fit: contain`; do not use a fixed crop. Use the supplied PK mark for the compact brand/icon family, the horizontal wordmark where desktop header space permits, and the supplied wide brand as static social imagery. These are illustrative assets only and must not be described as real local work, property, attendance or proof of capability.

## D016 — Browser smoke-test scope

Use `@playwright/test` with Chromium only for lightweight local smoke coverage of the production build. Run desktop at 1440x900 and mobile at 390x844. Keep `npm run verify` source/build-focused and run browser coverage separately with `npm run test:smoke`; this avoids making the standard verification command depend on a downloaded browser. The suite is a regression smoke check, not a complete accessibility, cross-browser, external-contact-delivery or performance-measurement programme.

## D001 — Phase 0 scope

Inspect and document the existing project, then run safe baseline checks. Do not rewrite the site during this phase.

## D002 — Business representation

Represent the site as a local plumbing enquiry / lead-generation website, not as a fabricated plumbing company.

## D003 — Truth standard

Only owner-confirmed facts and facts directly verified in the repository may enter public copy or structured data. Unverified commercial claims remain prohibited.

## D004 — Language and location

Use natural British English. Kensington, London is the location and W8 is the primary local intent.

## D005 — UI icons

Use Lucide or local SVG icons. Keyboard emoji must not be the primary UI icon system.

## D006 — Images

Select image fit and position per asset so meaningful subjects remain visible; do not apply blind cropping to image cards.

## D007 — Delivery constraints

Keep the site lightweight and mobile-first. Do not deploy, publish, push, change DNS, spend money, or use paid APIs without explicit later authorisation.

## D008 — Existing work

Preserve the dirty worktree and all pre-existing edits. Phase 0 adds documentation only.

## D009 — First service detail architecture

The first three service pages share only small primitives: breadcrumbs, section wrappers, related links, and enquiry CTA. Each page owns a different information structure tailored to its service intent; do not mass-template future detail pages without preserving that distinction.

## D010 — Phase 1/2 research guardrails

Live SERP observations are directional evidence only. Record unavailable search-feature and keyword-tool fields as unavailable; never infer volume, rankings, Local Pack, PAA, AI answers, CPC, difficulty or backlinks. Keep Kensington/W8 intent consolidated unless a genuinely distinct, verified user need warrants a new canonical URL.

## D011 — Boiler and commercial scope

Boiler/gas and commercial plumbing queries show market demand, but competitor claims do not verify this project’s capability. Boiler pages remain research-only. Commercial plumbing remains conditional until the business model and lead scope are explicitly confirmed.

## D012 — Technical SEO and schema scope

Maintain `robots.ts` and `sitemap.ts` from the verified live route set, using the canonical URL in `siteConfig` and no fabricated modification dates. Reusable JSON-LD may describe the website and its publisher entity, existing service-page topics, visible breadcrumbs and advice WebPages. Do not use LocalBusiness, address, ratings, reviews, hours, pricing, guarantees, service radius, accreditations or availability fields unless separately verified in the business truth pack.

## D013 — Automated QA scope

Keep QA dependency-free while static source analysis can cover route inventory, literal internal links, business contact consistency, canonicals and TypeScript. `app/_data/publicRoutes.json` is the shared source for sitemap and route checks. Treat dynamic links, rendered metadata, redirects and browser behaviour as limitations of these source checks; do not imply browser coverage until an approved E2E dependency is introduced.

## D014 — Area-page evidence and coverage gate

Kensington and W8 remain the single confirmed geographic scope and canonical local intent. A neighbouring-area SERP can justify later research, but it does not verify that this lead-generation site covers that district. Do not publish a neighbouring area URL until the owner explicitly confirms appropriate coverage and the page can add utility beyond the homepage and `/areas`; do not create a standalone W8 page without materially stronger evidence.

## D015 — Contact-flow transparency

Use WhatsApp and email as enquiry channels, with consistent wording such as “Send a plumbing enquiry” and “Send the details”. Contact copy may explain that an enquiry can be routed to a plumbing professional covering Kensington/W8, but must not promise acceptance, availability, dispatch, response time or a confirmed visit. Keep `Contact` in the primary navigation and provide it as a secondary path from shared hub and detail CTAs.

## D026 — Confirmed coverage and controlled enquiry prefill

On 2026-08-27 the owner confirmed coverage for Kensington/W8, South Kensington, West Kensington, Earl's Court, Notting Hill, North Kensington and Holland Park. This permits factual coverage wording and controlled area choices in the enquiry flow, but does not authorise separate area SEO pages, local-office wording, availability promises or coverage beyond that list. `app/_data/areaCoverage.ts` is the sole allowed location-key map: only its keys can prefill `/contact#build-enquiry`; unknown values resolve to the normal safe default. Pricing remains unpublished. Gas/boiler-related categories remain enquiry-only and must not imply Gas Safe registration, certification or availability.

## D027 — Final local-area ownership and card destinations

The 2026-08-27 final local review retains the existing six owner-confirmed area routes and makes no addition, removal, alias or postcode page. The homepage is the sole canonical owner of Kensington/W8. Every area route uses the same predictable sequence—postcode-aware local introduction, local enquiry angle, selected service routes, selected symptom routes, enquiry details, transparent CTA and nearby confirmed areas—while its copy and route choices remain unique. Keep Ladbroke Grove, Brompton and Barons Court research-only until coverage and low-overlap utility are separately confirmed; do not target Olympia, Kensington High Street or Gloucester Road as pages.

Hubs must label route destinations consistently: dedicated routes use `View service` or `View problem`; existing on-page/detail guidance uses `Read guidance`; the guided contact path uses `Build enquiry`. This vocabulary is a routing aid, not an availability, booking or dispatch promise. Fixed-header anchor destinations require a visible scroll margin.

## D028 — Netlify preview indexing gate

Netlify’s `CONTEXT=production` identifies a main-branch build, not owner approval for the `netlify.app` hostname to be indexed. All Netlify deployments therefore remain noindex by default. Indexing can be enabled only through the owner-controlled `NETLIFY_PUBLIC_INDEXING=true` build variable after the public launch and canonical-domain approval. This keeps preview canonicals on `https://plumberkensington.co.uk` while preventing preview indexing.
