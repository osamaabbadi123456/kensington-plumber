# Mobile Lighthouse stability baseline

Checked locally: 2026-08-28. Lighthouse 12.8.2 ran against a dedicated local production server with production-indexing simulation enabled. Raw JSON output was kept only in the system temporary directory. Each completed audit produced a valid report; Lighthouse then reported a Windows `EBUSY` error while deleting its own temporary Chrome profile. That cleanup error did not change the captured metrics.

This is a local throttled-browser measurement, not a deployed-host result.

## Before the mobile delivery fix

| Run | Performance | LCP | FCP | TBT | CLS | Speed Index |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | 84 | 2.801 s | 1.308 s | 464 ms | 0 | 2.372 s |
| 2 | 87 | 2.738 s | 1.308 s | 382 ms | 0 | 2.319 s |
| 3 | 86 | 2.738 s | 1.292 s | 386 ms | 0 | 2.296 s |
| 4 | 82 | 2.937 s | 1.337 s | 516 ms | 0 | 2.321 s |
| 5 | 85 | 2.784 s | 1.341 s | 434 ms | 0 | 2.316 s |
| **Min / max / median** | **82 / 87 / 85** | **2.738 / 2.937 / 2.784 s** | **1.292 / 1.341 / 1.308 s** | **382 / 516 / 434 ms** | **0 / 0 / 0** | **2.296 / 2.372 / 2.319 s** |

Accessibility, Best Practices and SEO were 100 in all five runs.

## Verified LCP and delivery findings

- **Route:** `/` at the mobile 390px profile.
- **LCP element:** `section.hero-section > div.site-shell > div.hero-content > h1` — “Plumbing problem in Kensington? Build a clearer enquiry.”
- **Type:** text; it has no image, logo or other downloadable LCP asset, so resource load delay and load time are both zero.
- **Dominant phase:** text render delay. The audit’s element-render insight was about 1.2 seconds in representative runs; the full LCP breakdown also attributes the remaining LCP time to render delay, not a resource.
- **Fonts:** the app uses the local system stack (`Arial, Helvetica, sans-serif`); no font files or external font origin were requested.
- **Third parties:** none were requested.
- **Above-the-fold image check:** the monogram AVIF transferred 4.8 KiB. Before the fix, the horizontal wordmark also transferred about 23 KiB at 390px despite being hidden by the `max-width: 1210px` CSS rule.
- **CSS / JS evidence:** the representative report recorded roughly 16 KiB of render-blocking CSS, a 71.7 KiB framework chunk with about 29.6 KiB flagged unused, and main-thread work dominated by style/layout and script evaluation. These are the remaining measurable causes of text render delay; no low-risk source change isolated a larger removable cost.

## Change made

`app/_components/BrandMark.tsx` now supplies the horizontal wordmark sources only from 1211px upwards. The mobile fallback is a one-pixel transparent image because the wordmark is already visually hidden at that breakpoint. Desktop AVIF/WebP selection and visible layout remain unchanged.

## After the mobile delivery fix

| Run | Performance | LCP | FCP | TBT | CLS | Speed Index |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | 87 | 2.701 s | 1.353 s | 365 ms | 0 | 2.333 s |
| 2 | 87 | 2.758 s | 1.342 s | 366 ms | 0 | 2.333 s |
| 3 | 86 | 2.758 s | 1.350 s | 386 ms | 0 | 2.358 s |
| 4 | 88 | 2.648 s | 1.361 s | 364 ms | 0 | 2.327 s |
| 5 | 88 | 2.772 s | 1.330 s | 330 ms | 0 | 2.335 s |
| **Min / max / median** | **86 / 88 / 87** | **2.648 / 2.772 / 2.758 s** | **1.330 / 1.361 / 1.350 s** | **330 / 386 / 365 ms** | **0 / 0 / 0** | **2.327 / 2.358 / 2.333 s** |

Accessibility, Best Practices and SEO again remained 100 in all five runs. The final network audit confirms that only the 4.8 KiB monogram asset is requested from `/brand/` at 390px; the hidden wordmark is no longer downloaded.

## Decision

**REAL_PERFORMANCE_BLOCKER_REMAINS** for the local mobile threshold: the median improved from 85 to 87 and run-to-run range narrowed, but it does not meet the requested 93 minimum. The residual bottleneck is repeatable main-thread text-render delay under Lighthouse CPU emulation, not image sizing, fonts, third-party code, layout shift or an SEO defect. Do not make a riskier UX or architecture change solely to chase the local score. Repeat this five-run protocol against an authorised idle preview or canonical production host before treating it as a release gate.
