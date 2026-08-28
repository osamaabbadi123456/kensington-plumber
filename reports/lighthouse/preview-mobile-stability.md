# Netlify preview Lighthouse stability

Checked: 2026-08-28. Target: `https://plumberkensington.netlify.app/` after commit `011c57ee27ba4e12df8575b2a2f30b1d08abb2bf` was confirmed live through the new `/services/radiator-heating` route.

## Method

- Lighthouse 12.8.2 using the locally installed Playwright Chromium binary.
- Five sequential mobile audits with Lighthouse's default mobile configuration; no runs were parallelised.
- One desktop audit with `--preset=desktop`.
- Raw JSON reports were written only to the local temporary directory and are not repository artefacts.

## Mobile runs

| Run | Performance | LCP | FCP | TBT | CLS | Speed Index | Accessibility | Best Practices | SEO |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | 99 | 1.764 s | 1.352 s | 76 ms | 0.000 | 2.333 s | 100 | 100 | 69 |
| 2 | 99 | 1.601 s | 1.165 s | 73 ms | 0.004 | 1.978 s | 100 | 100 | 69 |
| 3 | 97 | 1.961 s | 1.099 s | 152 ms | 0.000 | 2.466 s | 100 | 100 | 69 |
| 4 | 97 | 1.316 s | 1.202 s | 194 ms | 0.004 | 1.804 s | 100 | 100 | 69 |
| 5 | 87 | 2.242 s | 1.536 s | 355 ms | 0.000 | 4.147 s | 100 | 100 | 69 |

| Metric | Minimum | Maximum | Median |
| --- | ---: | ---: | ---: |
| Performance | 87 | 99 | 97 |
| LCP | 1.316 s | 2.242 s | 1.764 s |
| FCP | 1.099 s | 1.536 s | 1.202 s |
| TBT | 73 ms | 355 ms | 152 ms |
| CLS | 0.000 | 0.004 | 0.000 |
| Speed Index | 1.804 s | 4.147 s | 2.333 s |

## Desktop

| Performance | Accessibility | Best Practices | SEO | LCP | FCP | TBT | CLS |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 100 | 100 | 100 | 69 | 0.469 s | 0.320 s | 5 ms | 0.000 |

## Interpretation

- The preview meets `RELEASE_READY_PERFORMANCE`: its five-run mobile median is 97, above the 90 threshold; LCP remains below 3 s and CLS is effectively zero.
- The fifth mobile run is a normal slower outlier, not a release-blocking median regression. Its metrics still meet the LCP and layout-stability thresholds.
- Preview SEO 69 is intentional: this protected preview uses `noindex, nofollow` and a disallow-all `robots.txt`. It must not be compared with the authorised production-indexing simulation's SEO score.
- No trace investigation or source change was needed because the median did not fall below 85.

## Preview indexing safeguards verified

- Root page returns `noindex, nofollow`.
- Canonical remains `https://plumberkensington.co.uk`.
- `https://plumberkensington.netlify.app/robots.txt` returns `User-Agent: *` and `Disallow: /`.

These are preview-only results, not a production-domain measurement. No production deployment, DNS change, sitemap submission or search-console connection was performed.
