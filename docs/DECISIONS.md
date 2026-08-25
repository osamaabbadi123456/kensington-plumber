# Decisions

## D019 — Bootstrap folder disposition

`kensington_codex_bootstrap/` was historical bootstrap material rather than active application source. Its truth packs, checklists and project guidance were superseded by the root `docs/`, `scripts/`, `tests/` and current project rules; its baseline PowerShell script was superseded by the dependency-free QA scripts. The reviewed duplicate folder was removed on 2026-08-25, with active root source, documentation, scripts and tests preserved.

## D018 — Release hygiene and rollback gate

Keep generated Next/Playwright output and local debug files outside version control. Before any authorised preview or production publication, record the release/build identifier and retain a recoverable previous version with an agreed rollback path. This batch does not authorise deployment, publishing, repository push or DNS changes.

## D017 — Image and local performance audit

Keep the present low-image launch approach unless a planned image adds real comprehension or trust without implying a real local job, team, vehicle or premises. When a later image is approved, reserve its dimensions, choose crop-safe positioning, lazy-load below-fold assets and use `priority` only for a verified LCP image. Keep Lighthouse separate from `npm run verify`; do not report performance scores unless a repeatable compatible audit actually produced them.

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
