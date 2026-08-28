# Local-area opportunity deep dive V2

Status: research only. Checked 2026-08-27 from UK web-result observations. **Every area below is NOT AUTHORISED UNTIL COVERAGE CONFIRMED.** A distinct SERP, an exact-match competitor or a directory result is not evidence that Plumber Kensington covers that area, has a local office, or should publish a location URL.

## Ranking framework

Rank reflects only the *apparent distinctness of search intent and potential for a genuinely useful future page if coverage is confirmed*. It does not rank service quality, demand volume or business priority; verified volume/CPC/KD is `UNAVAILABLE`.

| Rank | Area | Distinct SERP / local evidence observed | Example observed competitors / result types | Likely query families | Overlap with Kensington/W8 | Potential page uniqueness if authorised | Doorway-page risk | Future decision |
| ---: | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | South Kensington | Yes — dedicated service/location result observed | [FastFix London South Kensington](https://www.fastfixlondon.com/plumbing/south-kensington), directories and broad London providers | plumber, emergency plumber, leak repair, blocked toilet | High | Could explain confirmed coverage boundaries and route to existing service/symptom pages, but only with honest local value | High if it becomes a Kensington text swap | RESEARCH LATER — NOT AUTHORISED |
| 2 | West Kensington | Yes — direct W14 local competitor page inspected | [Kensington.biz](https://www.kensington.biz/), W14-oriented provider results | plumber, emergency, toilet/tap repair | High; W14 differs from W8 | Potentially strong specificity, but it is outside confirmed scope and must not be implied | Very high; a postcode-style landing page would be misleading | DO NOT BUILD UNTIL COVERAGE CONFIRMED |
| 3 | Earl’s Court | Directional distinct West/Central London result set, but direct exact-area page evidence was weaker in this pass | Adjacent local/national pages; geographic SERP noise observed | plumber, emergency, blocked toilet | Medium-high | Could only be meaningful after direct SERP re-check and coverage confirmation | High | RESEARCH LATER — NOT AUTHORISED |
| 4 | Notting Hill | Yes — exact-area domain and directory page observed | [Plumbing Notting Hill](https://www.plumbingnottinghill.co.uk/), [Checkatrade Notting Hill](https://www.checkatrade.com/Search/Plumber/in/Notting-Hill), Able Group | plumber, emergency, leak repair | Medium; still separate local intent | Potentially distinct, but outside current scope | Very high; exact-match competitors make cloning tempting | DO NOT BUILD UNTIL COVERAGE CONFIRMED |
| 5 | North Kensington | Yes — exact-area provider output observed | [Top Central Heating North Kensington](https://www.topcentralheating.co.uk/north-kensington/plumbing-heating/plumbers), local provider results | plumber, shower repair, general plumbing | High | Needs proof that it has a distinct visitor journey beyond generic Kensington | High | RESEARCH LATER — NOT AUTHORISED |
| 6 | Holland Park | Directional locality overlap; direct exact-area result evidence was less clear than other areas in this pass | Nearby Notting Hill/directory overlap | plumber, bathroom plumber, leak repair | High | Weak until a future direct SERP review identifies a useful truthful local angle | Very high | DO NOT SPLIT NOW — NOT AUTHORISED |

## Area-by-area notes

### South Kensington — rank 1

- **Observation:** a dedicated South Kensington plumbing page from FastFix London appeared in the researched results. This indicates competitors treat the place as a query modifier.
- **Overlap:** strong with generic Kensington; a page would cannibalise the homepage unless it contains confirmed, unique scope and service-routing value.
- **If later authorised:** research which nearby places actually fall within the confirmed lead-routing scope, then test whether an area page can answer a question the Kensington homepage cannot. It should not claim a South Kensington address, response time, team or jobs.

### West Kensington — rank 2

- **Observation:** [Kensington.biz](https://www.kensington.biz/) directly targets “West Kensington, W14”; it was inspected as a local competitor and has strong locality presentation.
- **Overlap / risk:** W14 is not W8. Publishing here before scope confirmation would contradict the current truth pack.
- **If later authorised:** first document exact coverage and owner-approved wording. A future page would need its own real purpose, not blocks copied from `/areas`.

### Earl’s Court — rank 3

- **Observation:** adjacent-area and national provider output appeared, but the captured evidence was not strong enough to establish a direct exact-match SERP pattern.
- **Decision:** research later only. It must not be listed as covered now.

### Notting Hill — rank 4

- **Observation:** an exact local domain and a Checkatrade locality directory were visible. This is an independent local-intent signal, not coverage evidence.
- **Risk:** exact-match competitor pages make a shallow “place-name swap” especially likely. Do not build one without factual local use.

### North Kensington — rank 5

- **Observation:** an exact-area plumber provider page appeared. Results include broader heating/plumbing language that is outside verified capability.
- **Decision:** research later only. A hypothetical page must never borrow heating/gas/trading claims from competitors.

### Holland Park — rank 6

- **Observation:** result set was more geographically overlapping/noisy in this pass. Direct evidence for a differentiated organic content opportunity was weaker.
- **Decision:** do not split without a future re-check, owner scope confirmation and a defined non-doorway benefit.

## Controls that remain in force

- Homepage owns broad Kensington / W8 intent; do not make `/areas/w8`.
- `/areas` remains an explanation of the confirmed Kensington/W8 scope, not an index of potential locations.
- No neighbouring area should appear in public navigation, schema, sitemap, contact promises or title metadata before explicit owner confirmation.
- A later area page should need all of: confirmed coverage, distinct SERP evidence, a unique visitor task, non-duplicated copy, and useful links to real existing routes.
