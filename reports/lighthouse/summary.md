# Local Lighthouse summary

Checked locally: 2026-08-28. Lighthouse 12.8.2 was run temporarily through `npx` against the local production build on a dedicated, test-owned port. It is not a deployed-host measurement and no permanent Lighthouse dependency was added.

| Profile | Performance | Accessibility | Best Practices | SEO | LCP | CLS | TBT |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Mobile | 96 | 100 | 100 | 100 | 2.6 s | 0 | 120 ms |
| Desktop | 100 | 100 | 100 | 100 | 0.6 s | 0 | 0 ms |

## Reports

- `mobile.html` and `mobile.json`
- `desktop.html` and `desktop.json`

## Verified follow-up fixes

- Darkened the shared muted-text token slightly so explanatory text clears the Lighthouse contrast threshold on the cream backgrounds.
- Set the light area-coverage section's inherited foreground colour explicitly to the dark text token.
- Updated visible WhatsApp and enquiry CTA accessible names so they include their visible labels.
- Added responsive sizes and a fallback `srcSet` to the desktop wordmark. The final audits selected the 480px AVIF wordmark rather than the 1086px master; the mobile audit loaded AVIF assets and no PNG master.

## Remaining audit context

- The mobile run estimates a small amount of framework JavaScript as unused, while TBT remains 120 ms. No safe source-level reduction was identified in this batch.
- The desktop image-delivery insight estimates about 10 KiB possible logo savings. It is not a serious issue and the responsive source now selects the small AVIF rendition.
- These scores do not claim WCAG conformance or predict Netlify/CDN performance. Preview and production-host checks remain separate release steps.
