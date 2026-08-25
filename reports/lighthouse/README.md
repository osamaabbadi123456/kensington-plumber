# Lighthouse audit status

Checked on 2026-08-24.

Lighthouse could not be run reliably in this workspace: there is no installed `lighthouse` package or CLI, and no locally discoverable Chrome/Chromium executable for Lighthouse to control. Playwright's downloaded Chromium supports the existing smoke tests but does not provide Lighthouse auditing by itself.

No Performance, Accessibility, Best Practices, SEO, LCP, CLS, TBT or INP-proxy scores have been recorded. Installing and configuring Lighthouse was intentionally deferred rather than adding a slow tool or fabricating a score. It must remain separate from `npm run verify` if added later.
