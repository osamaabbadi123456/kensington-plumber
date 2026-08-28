# Lighthouse audit status

Checked on 2026-08-27.

Lighthouse could not be run in this workspace: there is no installed `lighthouse` package or CLI. Playwright's locally downloaded Chromium is available for the existing smoke tests, but it does not provide Lighthouse auditing by itself. Installing Lighthouse is outside this no-new-packages batch.

No Performance, Accessibility, Best Practices, SEO, LCP, CLS, TBT or INP-proxy scores have been recorded for mobile or desktop. Installing and configuring Lighthouse was intentionally deferred rather than adding a tool or fabricating a score. It must remain separate from `npm run verify` if added later.
