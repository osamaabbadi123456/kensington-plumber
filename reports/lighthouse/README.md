# Lighthouse audit status

Checked locally on 2026-08-28 against the production build. Lighthouse 12.8.2 was run temporarily through `npx` with the locally installed Playwright Chromium; it was not added as a project dependency or to `npm run verify`.

| Form factor | Performance | Accessibility | Best Practices | SEO | LCP | CLS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Mobile | 96 | 100 | 100 | 100 | 2.6 s | 0 |
| Desktop | 100 | 100 | 100 | 100 | 0.6 s | 0 |

The detailed local reports are `mobile.html`, `mobile.json`, `desktop.html`, `desktop.json` and `summary.md` in this directory. These are local baseline results, not production-host measurements. A preview/live audit remains required before authorising production.

Keep Lighthouse separate from `npm run verify`. Static source checks cover route inventory, literal internal links, business contact consistency, canonicals and TypeScript; browser smoke coverage covers the representative rendered paths. Dynamic links, third-party delivery and production-host behaviour still need their appropriate checks.
