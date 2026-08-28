# SEO execution roadmap

Status: pre-launch strategy, prepared 2026-08-27. It is built from the evidence labels and controls in the deep research reports. It does not authorise coverage expansion, pricing, availability claims, new public URLs or contact with third parties.

## Operating rules for every stage

- Keep the confirmed public scope at **Kensington / W8 only**.
- Retain the enquiry / lead-generation model. Do not promise acceptance, dispatch, attendance, availability, response time, same-day work or an outcome.
- Do not add address, review, team, experience, Gas Safe/accreditation, price, guarantee or job-count claims without recorded evidence and owner approval.
- Treat search terms as input, not instructions to create a page. The canonical owners in `reports/deep-intent-clusters.csv` are the control.
- Log every public change (date, URL, intent, what changed, reason, evidence, expected measure) before releasing it.

## Pre-launch — high-confidence only

| Action | Owner confirmation needed? | Success check |
| --- | --- | --- |
| Complete real-device WhatsApp and email tests; record outcomes without sending false enquiries | Yes, access to the owner-controlled devices/mailbox | Link opens correctly; authorised mailbox receives a genuine test; no response promise added |
| Validate production canonical, robots and sitemap only after an authorised preview/live URL exists | Yes, preview/deploy authority | `https://plumberkensington.co.uk/robots.txt`, sitemap and canonical responses are correct |
| Connect Google Search Console and Bing Webmaster Tools with owner-controlled verified access | Yes, domain-property access | Ownership verified; sitemap submitted once; no spam URL submission |
| Keep the current 31 indexable-route inventory and noindex none only where architecturally intended | No code change unless a verified issue is found | `npm run verify` and the source route audit remain green |
| Create a change log / baseline capture | No | Record date, route count, initial sitemap URLs and zero-data baseline |

Do **not** change titles, create `cistern-not-filling`, `overflow-pipe-leaking`, pipe-repair, pricing or additional area pages in this stage.

## First 7 days after authorised publication

| Monitoring task | What to measure | What not to conclude yet |
| --- | --- | --- |
| Index coverage | Submitted vs indexed canonical URLs, exclusions, crawl errors | Early non-indexing is not evidence a page needs rewriting |
| Sitemap/robots | Fetch result and canonical host | Do not resubmit repeatedly or add URLs not in the inventory |
| Search Console query baseline | Queries, impressions, page/query associations, country/device filters where available | Do not infer a stable keyword ranking from a few impressions |
| Bing baseline | URL discovery/index status and obvious crawl issues | Do not treat Bing data as interchangeable with Google data |
| Contact flow | Owner-recorded WhatsApp/email functioning, with no personal data copied into reports | Do not use a single enquiry as conversion-rate evidence |
| Technical health | `npm run verify` after every intentional code/content change | Do not add browser tests to fast verify unless stability is demonstrated |

## Days 8–30 — controlled enhancement

1. **Review existing route query clusters first.** Compare Search Console impressions against the canonical map before expanding content.
2. **Prioritise low-risk existing page improvements** only if an observed cluster matches the current owner:
   - Leak Repair: source/location clarification.
   - Toilet Repair / Toilet Keeps Running: clear cistern state terminology.
   - Tap Repair: concise symptom-to-detail aid.
   - Ceiling problem/advice: safety-first check clarity.
   - Glossary: only definitions that help current pages; use reviewed authoritative sources.
3. **Review image decisions separately.** No visual asset is needed for launch. If owner approves a later asset batch, follow `docs/IMAGE_PLAN.md` and `docs/IMAGE_PLAN_V2.md`, record licence/source, then run the route-specific visual QA.
4. **Build citation quality before outreach.** Use authoritative external references where a future advice/glossary statement needs them. Do not ask for links, create directory profiles, or imply affiliation without operating-entity proof.

### Day 8–30 action threshold

Make one controlled existing-page change only when all are true:

- Search Console shows an identifiable, intent-consistent query group over at least 28 days.
- The proposed addition improves comprehension or enquiry detail, not just keyword repetition.
- The addition does not steal ownership from another current route.
- Claims Register and Business Truth Pack allow every statement.
- A baseline and review date are written down.

## Days 31–60 — data-led refinement

| Decision | Minimum evidence | Action |
| --- | --- | --- |
| Adjust a title | 28-day sample with an identifiable query group, low CTR relative to the route’s own average position, and a more precise truth-safe alternative | Test one title at a time; record pre-change values and wait a comparable period |
| Add an FAQ / short section | Repeated related query impressions or user-contact questions that fall within existing owner intent | Add to the existing route, then check links/metadata/copy review |
| Consider `/plumbing-problems/cistern-not-filling` | Repeated distinct cistern-not-filling impressions/clicks that do not get served well by Toilet Repair or Running Toilet | Write an intent brief and cannibalisation plan; owner approves before implementation |
| Consider `/plumbing-problems/overflow-pipe-leaking` | Distinct repeated impressions plus a safe non-boiler/non-heating content boundary | Require an explicit scope note and internal-link purpose before implementation |
| Consider pipe repair | Evidence that users distinguish it from Leak Repair and a page can be commercially/safely different | Default remains merge into Leak Repair; do not create by default |

Do not react to daily or weekly fluctuation, one-off queries, incognito searches or rank-tracker screenshots alone.

## Days 61–90 — disciplined expansion only

- Use page-level query data to decide whether one candidate page clears the new-page threshold in `reports/existing-page-gap-analysis.md`.
- Consider a maximum of one new problem page at a time, then monitor it before planning another.
- Do not expand location coverage beyond the current six owner-confirmed area routes without fresh owner confirmation, a repeated decision matrix and a low-overlap utility case. W8 stays consolidated with the homepage/areas hub.
- Review only legitimate earned-link routes. A directory, profile or association reference needs proof of eligibility and must reflect the lead-generation model honestly. Citation sources are not automatic outreach targets.

## Measurements and escalation thresholds

| Signal | Threshold for action | Safe action | Do not do |
| --- | --- | --- | --- |
| Indexing | A canonical current route remains excluded after reasonable crawl time and technical checks | Inspect Search Console reason, rendered canonical, robots and internal links | Duplicate the route, change canonical ownership, or submit spam URLs |
| Query mismatch | Material impressions are for a different intent than the route owner | Improve internal routing or add a clarifying section if within scope | Stuff the target query or create an overlap page |
| CTR opportunity | Sustained lower CTR for a stable query/position cluster over at least 28 days | Test one truthful title/description revision with a recorded baseline | Claim an outcome, add clickbait or test several variables at once |
| New-page candidate | Distinct query cluster has repeated impressions, current page is a poor fit and no current route should own it | Draft an intent brief + cannibalisation check + owner review | Build a page from a single keyword or competitor URL |
| Area expansion | Owner confirms actual coverage *and* research finds a unique visitor need | Repeat area decision matrix and create one page only if all gates pass | Create area/postcode variants or list areas as covered |
| Content quality | Staff/owner notices a claim not backed by truth pack | Correct it promptly; update Claims Register | Add unsupported proof signals to compete with rivals |

## Review cadence

- Weekly for the first month: index/coverage and contact-flow health.
- Monthly after that: query clusters, affected routes, and one change hypothesis at a time.
- Quarterly: revalidate external sources used in advice/glossary content and decide whether the price/area research remains internal only.

## Source reports

- `reports/deep-keyword-universe.csv`
- `reports/deep-serp-observations.csv`
- `reports/deep-intent-clusters.csv`
- `reports/deep-opportunity-scoring.md`
- `reports/existing-page-gap-analysis.md`
- `reports/SEO_OPPORTUNITY_BOARD.md`
- `reports/earned-link-opportunities.md`
