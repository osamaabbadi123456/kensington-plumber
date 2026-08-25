# Preview release notes

Checked: 2026-08-25

## Current inventory

- 21 public indexable routes are registered in `app/_data/publicRoutes.json`.
- Seven service detail pages are implemented: Emergency Plumber, Leak Repair, Blocked Toilet, Toilet Repair, Tap Repair, Bathroom Plumbing and Shower Repair.
- Four plumbing-problem detail pages are implemented: Water Coming Through the Ceiling, Toilet Will Not Flush, Toilet Keeps Running and Shower Going Hot and Cold.
- Three advice detail pages are implemented: Water Coming Through Your Ceiling, Blocked Toilet or Broken Flush, and What Details to Send for a Plumbing Enquiry.
- Hubs are available for Services, Plumbing Problems, Plumbing Advice and the confirmed Kensington/W8 Areas scope, plus About and Contact.

## Completed foundations

- Canonical metadata, `robots.ts`, `sitemap.ts` and safe structured data are implemented.
- Source QA covers contamination, business contact consistency, internal links, SEO route inventory, lint, TypeScript and production build.
- Playwright smoke coverage passes on Chromium desktop (1440×900) and mobile (390×844): 28 tests passed with 2 project-specific skips.
- Route, content-similarity, performance-source and image-plan reviews are recorded in `reports/` and `docs/IMAGE_PLAN.md`.
- The reviewed duplicate `kensington_codex_bootstrap/` folder was removed; active root source, documentation, scripts and tests were preserved.

## Known limitations

- Lighthouse was not available locally, so no performance or accessibility scores are claimed.
- Browser smoke tests do not send WhatsApp messages or email, and are not a full WCAG audit or cross-browser suite.
- Production host behaviour, redirects and deployed asset delivery remain unverified.
- Neighbouring-area coverage remains unconfirmed; the public scope is Kensington/W8 only.

## Checks still required before production

- Test the live WhatsApp and email routes manually on a real device without sending unintended content.
- Run a repeatable Lighthouse audit against a compatible local or deployed production target.
- Validate canonical URLs, `robots.txt` and `sitemap.xml` on the live host.
- Confirm the final contact mailbox and authorised production configuration.

## Release and rollback

Production is **not authorised**. Any future preview or production release requires explicit owner approval, a recorded version/build identifier, and a recoverable previous version with an agreed rollback path before publication. Do not deploy, push, publish, or change DNS as part of this repository state.
