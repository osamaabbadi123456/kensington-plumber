# Deep opportunity scoring model

Status: DIRECTIONAL scoring, checked 2026-08-27. This is an opportunity prioritisation method, **not** a prediction of rankings, traffic, volume, CPC, conversion rate or revenue. Exact keyword metrics are `UNVERIFIED` / `UNAVAILABLE` unless a public source explicitly exposes them; none was used in this model.

## Application to the full 249-query universe

Every query in `reports/deep-keyword-universe.csv` has one `family` and one `current_or_proposed_owner`. The score profiles below apply to every matching row in that source-of-truth universe. Where a query family contains different ownership (for example toilet symptoms), its owner determines the profile. This is intentionally cluster-first: variants do not earn new URLs merely by being written differently.

**Formula:**

`intent clarity (15) + confirmed-truth fit (15) + visible-SERP weakness (20) + existing-site ability (15) + commercial/enquiry value (15) + unique-content opportunity (10) + internal-link fit (5) + visual opportunity (5) − cannibalisation (20) − unsupported-claim risk (30) − area uncertainty (30)`

| Scoring profile (matches universe rows) | Intent | Truth | SERP | Existing | Value | Unique | Internal | Visual | Cannib. | Claim | Area | Score /100 | Interpretation |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Homepage broad Kensington/W8 owner (`/`) | 14 | 15 | 9 | 13 | 13 | 4 | 5 | 2 | -3 | 0 | 0 | 72 | Improve existing homepage clarity only; no W8 alias. |
| Services hub (`/services`) | 12 | 15 | 8 | 14 | 12 | 4 | 5 | 2 | -2 | 0 | 0 | 70 | Maintain a useful commercial navigation owner. |
| Emergency service | 14 | 13 | 8 | 13 | 15 | 5 | 5 | 3 | -4 | -8 | 0 | 64 | Valuable but competitor availability language cannot be copied. |
| Leak Repair owner | 15 | 15 | 13 | 14 | 14 | 8 | 5 | 5 | -2 | 0 | 0 | 87 | Highest safe existing-page opportunity: clear location/symptom additions are possible. |
| Pipe-repair research-only variant | 12 | 12 | 8 | 9 | 12 | 5 | 4 | 2 | -15 | -4 | 0 | 45 | Too close to Leak Repair for a new route. |
| Ceiling symptom owner | 15 | 15 | 12 | 14 | 14 | 7 | 5 | 5 | -3 | 0 | 0 | 84 | Strong safety/symptom journey; optimise its current owner only. |
| Ceiling advice owner | 15 | 15 | 11 | 14 | 10 | 7 | 5 | 5 | -4 | 0 | 0 | 78 | Strong information support; avoid duplicating the problem route. |
| Overflow-pipe candidate | 15 | 11 | 14 | 8 | 10 | 8 | 4 | 4 | -11 | -10 | 0 | 53 | Dedicated intent exists, but source ambiguity makes this GSC-gated. |
| Blocked Toilet owner | 15 | 15 | 11 | 14 | 15 | 6 | 5 | 5 | -3 | 0 | 0 | 83 | Existing page has strong ownership; add depth rather than a new page. |
| Toilet-won’t-flush problem owner | 15 | 15 | 12 | 14 | 13 | 7 | 5 | 5 | -4 | 0 | 0 | 82 | Clear immediate decision intent. |
| Toilet Repair service owner | 14 | 15 | 12 | 14 | 14 | 8 | 5 | 5 | -4 | 0 | 0 | 83 | Filling/flush boundaries can improve without route expansion. |
| Running-toilet problem owner | 15 | 15 | 13 | 14 | 12 | 8 | 5 | 4 | -4 | 0 | 0 | 82 | Strong symptom match and relevant internal route. |
| Cistern-not-filling candidate | 15 | 14 | 14 | 8 | 12 | 9 | 4 | 4 | -13 | 0 | 0 | 67 | Distinct phrasing, but current Toilet Repair overlap means build only after GSC evidence. |
| Tap Repair owner | 14 | 15 | 13 | 14 | 14 | 8 | 5 | 4 | -3 | 0 | 0 | 84 | Strong cluster to deepen with a compact symptom decision aid. |
| One-tap low-flow supporting term | 12 | 12 | 8 | 11 | 8 | 4 | 4 | 2 | -6 | -15 | 0 | 40 | Keep constrained; broad pressure supply claims are risky. |
| Broad water-supply query | 13 | 5 | 8 | 2 | 9 | 3 | 1 | 1 | -5 | -25 | 0 | 12 | Do not target; truth/scope mismatch dominates. |
| Shower Repair service owner | 14 | 13 | 12 | 14 | 13 | 7 | 5 | 4 | -3 | -5 | 0 | 74 | Improve current route; do not claim boiler/gas work. |
| Shower hot/cold problem owner | 15 | 12 | 13 | 14 | 12 | 7 | 5 | 4 | -4 | -8 | 0 | 70 | Good symptom page; retain heating boundary. |
| Bathroom Plumbing owner | 12 | 15 | 8 | 13 | 11 | 6 | 5 | 3 | -4 | 0 | 0 | 69 | Room/fixture clarity over broader project claims. |
| Sink/drain supporting term | 12 | 9 | 9 | 7 | 8 | 4 | 2 | 2 | -7 | -12 | 0 | 34 | Drainage/DIY scope makes a new page unsuitable. |
| Glossary term owner | 13 | 14 | 10 | 13 | 5 | 7 | 5 | 3 | -3 | 0 | 0 | 67 | Add / refine only as useful definitions, not term-page expansion. |
| Enquiry-details advice owner | 14 | 15 | 10 | 15 | 10 | 6 | 5 | 3 | -2 | 0 | 0 | 76 | Useful cross-route support and conversion clarity. |
| Toilet comparison advice owner | 15 | 15 | 11 | 14 | 10 | 7 | 5 | 5 | -4 | 0 | 0 | 78 | Strong decision aid; keep as one comparison URL. |
| Price research-only | 14 | 2 | 12 | 0 | 10 | 5 | 0 | 1 | -2 | -28 | 0 | 14 | Do not publish pricing while it is unauthorised and non-local. |
| Any unconfirmed area query | 13 | 1 | 10 | 0 | 12 | 5 | 0 | 2 | -5 | 0 | -30 | 8 | Research signal only; no page/metadata/navigation use. |

## Why the highest scores are high

- **Leak Repair (87):** distinct source-led commercial/diagnostic enquiry intent, multiple supporting query variants, useful connections to ceiling symptom/advice and a high-value visual decision aid. It remains a page-expansion score—not a claim that the page will rank.
- **Ceiling symptom (84), Tap Repair (84), Blocked Toilet (83), Toilet Repair (83), Toilet-won’t-flush (82), Running toilet (82):** each has a clear visitor task and a current canonical owner. The score rewards low-risk clarification of an existing page, not creation of duplicate routes.
- **Cistern not filling (67):** its positive signals are reduced substantially for overlap with Toilet Repair; it is deliberately below the “build soon” threshold.

## Decision bands

| Score band | Meaning |
| --- | --- |
| 75–100 | Existing-page or controlled-support opportunity suitable for a later high-confidence implementation batch, subject to truth-pack review. |
| 60–74 | Worth monitoring or light expansion; do not automatically create a new URL. |
| 40–59 | Supporting-term / GSC-gated territory; preserve current ownership. |
| 0–39 | Do not target or research only; the constraint penalty outweighs relevance. |
