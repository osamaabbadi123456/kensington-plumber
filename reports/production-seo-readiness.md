# Production SEO readiness

Checked locally: 2026-08-28. This report separates the protected Netlify preview from the owner-authorised production-indexing simulation. It does not authorise a production deployment, DNS change or preview indexing.

## Preview-only Lighthouse SEO failure

The Netlify preview returns `noindex, nofollow` and a disallow-all `robots.txt` by design. Lighthouse therefore marks the page as blocked from indexing, which reduces its SEO score to approximately 69. This is an intentional preview safeguard, not a production SEO defect. It must remain active until the owner authorises the canonical-domain launch and enables the owner-controlled indexing variable.

| Preview audit | Result | Classification | Action |
| --- | --- | --- | --- |
| Page is blocked from indexing | Fails by design | Preview-only failure | Preserve `noindex, nofollow` and disallow-all robots rules. |
| Canonical points to `https://plumberkensington.co.uk` | Pass | Production-ready | Keep canonical host unchanged. |
| Preview sitemap is available | Pass | Technical reference only | It contains canonical-domain URLs; preview robots deliberately does not advertise it. |

## Production-indexing simulation

Local production mode is tested with `NETLIFY=true`, `CONTEXT=production` and `NETLIFY_PUBLIC_INDEXING=true`. This is the explicit condition that switches the repository from preview protection to indexable production metadata.

The local production build must show:

- `index, follow` metadata;
- canonical URLs on `https://plumberkensington.co.uk`;
- allow-all robots rules with the canonical sitemap;
- the 32 registered canonical URLs in the sitemap;
- one title, one meta description and a mobile viewport per page;
- only the existing truth-safe JSON-LD types: WebSite, Organization publisher, Service, BreadcrumbList and WebPage.

## Production target

The relevant target is production-mode Lighthouse SEO of at least 98, not the protected preview score. The local production simulation recorded SEO 100 on mobile and desktop; see `reports/lighthouse/summary.md` for the separate mobile-performance variance. A deployed canonical-domain check remains required before any production decision.

## Remaining production-only checks

- Owner real-device WhatsApp and email/mailbox tests.
- Explicit approval of the canonical-domain deployment and indexing variable.
- Live canonical, robots, sitemap and contact-route validation after authorised publication.
- Search Console and Bing verification only with owner-controlled access.
