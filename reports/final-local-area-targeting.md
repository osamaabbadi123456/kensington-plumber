# Final local-area targeting decision

Checked: 2026-08-27. This is a fresh, local-intent review for the already authorised coverage set. It records search-result observations, not keyword-tool data or a promise that a plumbing professional is available in an area.

## Method and limits

- Queries were checked with Kensington, London, UK context. Results from places named Kensington outside London were excluded.
- The review considered recognised-area treatment, independent/local-service results, directories, commercial intent, overlap with the homepage and whether the owner has confirmed coverage.
- Exact search volume, CPC, keyword difficulty, backlink data, rankings, Local Pack composition, People Also Ask, video and AI-answer data were not reliably available in this pass. They are **unavailable**, not estimated.
- Competitor pages are evidence that a query is treated as local intent; their claims about offices, attendance, prices, accreditations, reviews or availability are not adopted.
- Scores are a decision aid rather than a prediction of traffic or ranking performance.

## Scoring model

| Factor | Maximum | What it tests |
| --- | ---: | --- |
| Recognised local entity | 20 | Whether search results treat the name as a distinct London place query. |
| Local SERP evidence | 20 | Dedicated independent, directory or marketplace result treatment. |
| Intent distinctness | 15 | Separation from the Kensington/W8 homepage owner and other area pages. |
| Commercial usefulness | 15 | Whether the query is clearly an enquiry/service-search journey. |
| Unique local-content angle | 10 | A useful enquiry-routing angle without inventing local history or jobs. |
| Internal-link usefulness | 5 | Whether existing service/problem routes give a visitor a meaningful next step. |
| Confirmed coverage / truth | 10 | Explicit owner-confirmed coverage only. |
| Low doorway / cannibalisation risk | 5 | Ability to keep the page distinct without postcode or name-swap duplication. |

## Query and SERP observations

| Query family | Observed treatment | Decision relevance |
| --- | --- | --- |
| `plumber Kensington`, `plumber W8` | Strong primary local commercial intent; competitor and directory results use Kensington/W8 together. | The homepage remains the single canonical owner. No `/areas/kensington` or `/areas/w8` page. |
| `plumber South Kensington`, `plumber South Kensington SW7` | Distinct South Kensington pages and directory/marketplace treatment. | Supports one SW7-area learning route after coverage confirmation. |
| `plumber West Kensington`, `plumber West Kensington W14` | Distinct W14-focused service and marketplace treatment. | Supports a separate West Kensington route, distinct from the homepage. |
| `plumber North Kensington`, `plumber North Kensington W10` | Dedicated North Kensington service pages appeared, including issue-specific variants. | Supports a W10 route; it should not be replaced by the nearby Ladbroke Grove name. |
| `plumber Earl's Court`, `emergency plumber Earl's Court` | Strong exact local-service and directory treatment. | Supports one SW5 route; urgent wording must remain safety/routing-only. |
| `plumber Notting Hill`, `plumber Notting Hill W11` | Strong independent, directory and marketplace location treatment. | Supports one W11 route with a fitting-led local angle. |
| `plumber Holland Park`, `plumber Holland Park W11` | Dedicated location-service treatment, with expected W8/W11 overlap. | Supports one route only if its homepage-W8 boundary is explicit. |

## Area decision matrix

| Area | Proposed URL | Score / 100 | Classification | Why |
| --- | --- | ---: | --- | --- |
| Kensington / W8 | `/` | 100 | HOMEPAGE OWNER | Primary local commercial intent. A separate area or postcode URL would duplicate the homepage. |
| South Kensington | `/areas/south-kensington` | 92 | KEEP | Strong exact area treatment, confirmed coverage and a useful room/fixture enquiry angle. |
| West Kensington | `/areas/west-kensington` | 91 | KEEP | Strong W14 treatment, confirmed coverage and a pipework/toilet route distinction. |
| North Kensington | `/areas/north-kensington` | 88 | KEEP | Strong enough W10 local treatment and confirmed coverage; distinct from the Ladbroke Grove candidate. |
| Earl's Court | `/areas/earls-court` | 93 | KEEP | Strong exact intent and confirmed coverage; water-from-above safety routing is useful without claiming response availability. |
| Notting Hill | `/areas/notting-hill` | 93 | KEEP | Strong exact intent and confirmed coverage; a fitting-led entry point avoids a generic city-name swap. |
| Holland Park | `/areas/holland-park` | 89 | KEEP | Distinct local treatment and confirmed coverage, with an explicit W8/W11 overlap boundary. |
| Ladbroke Grove | None | 81 | RESEARCH LATER | Genuine standalone local treatment, but coverage is not confirmed and it overlaps the W10/W11 set already represented. |
| Brompton | None | 73 | RESEARCH LATER | Exact results exist, but postcode contexts overlap SW3/SW5/SW7 and coverage is not confirmed. |
| Barons Court | None | 62 | RESEARCH LATER | Recognised area but less consistent exact plumbing treatment; it also risks W14/West Kensington overlap. |
| Kensington Olympia / Olympia | None | 50 | DO NOT SPLIT | Search treatment attaches it to West Kensington/W14 or the venue/station context rather than a distinct enquiry need. |
| Kensington High Street | None | 43 | DO NOT SPLIT | A road-level modifier within Kensington/W8; it would duplicate the homepage owner. |
| Gloucester Road | None | 34 | DO NOT SPLIT | Mainly road/station context, not sufficient distinct local plumbing intent or coverage evidence. |

## Candidate evidence log

The following pages were inspected as directional SERP evidence. They are not endorsements and their commercial claims are not copied.

- South Kensington: [Checkatrade](https://www.checkatrade.com/Search/Plumber/in/South-Kensington), [MyBuilder](https://www.mybuilder.com/plumbing/plumber-tradespeople/south-kensington), [South Kensington Plumbers](https://www.plumbersouthkensington.co.uk/), [Yell](https://www.yell.com/s/plumbers-south%2Bkensington-south%2Bwest%2Blondon.html).
- West Kensington: [Kensington Plumbing Services](https://www.kensington.biz/), [MyBuilder](https://www.mybuilder.com/plumbing/plumber-tradespeople/west-kensington), [Leak and pipework result](https://www.kensington.biz/leaks-pipework).
- North Kensington: [Plumb London](https://www.plumblondon.com/plumber/north-kensington/), [Thames Plumber](https://thamesplumber.com/plumber/north-kensington-w10/), [Top Central Heating](https://www.topcentralheating.co.uk/north-kensington/plumbing-heating/plumbers).
- Earl's Court: [Checkatrade](https://www.checkatrade.com/Search/Plumber/in/Earls-Court), [Plumbing Earl's Court](https://www.plumbingearlscourt.co.uk/), [Yell](https://www.yell.com/s/plumbers-earls%2Bcourt-south%2Bwest%2Blondon.html).
- Notting Hill: [Plumbing Notting Hill](https://www.plumbingnottinghill.co.uk/), [Notting Hill Plumber](https://nottinghillplumber.co.uk/).
- Holland Park: [Holland Park Plumbing](https://hollandparkplumbing.co.uk/), [Yell](https://www.yell.com/biz/the-holland-park-plumbers-london-10675897/).
- Ladbroke Grove research-only candidate: [Hampstead On Demand](https://www.hampsteadondemand.co.uk/plumber/ladbroke-grove/), [CS Services](https://www.csservicesuk.co.uk/london/ladbroke-grove/plumbing), [Yell](https://www.yell.com/s/plumbers-ladbroke%2Bgrove-west%2Blondon.html).
- Brompton research-only candidate: [Max Plumbers](https://www.maxplumbers.co.uk/brompton), [MyBuilder](https://www.mybuilder.com/plumbing/plumber-tradespeople/brompton).
- Barons Court research-only candidate: [Plumber Market](https://www.plumbermarket.co.uk/barons-court).

## Final URL set and controls

The final local architecture is one homepage owner plus six owner-confirmed, indexable area routes:

1. `/` — Kensington / W8 primary local-intent owner.
2. `/areas/south-kensington` — South Kensington / SW7.
3. `/areas/west-kensington` — West Kensington / W14.
4. `/areas/north-kensington` — North Kensington / W10.
5. `/areas/earls-court` — Earl's Court / SW5.
6. `/areas/notting-hill` — Notting Hill / W11.
7. `/areas/holland-park` — Holland Park / W8/W11 context.

No existing area route is removed or replaced in this review. The stronger research-only Ladbroke Grove candidate is intentionally not added: owner-confirmed scope and low-overlap utility are both required. The other candidates are not pages, hidden aliases or sitemap entries.

Each area page now follows one shared, visitor-predictable structure: area introduction and postcode context; a concise local enquiry angle; selected service routes; selected symptom routes; useful details to send; a transparent enquiry CTA; and nearby confirmed-area navigation. The copy, selected routes, postcode context and local angle are unique data inputs. This is a controlled information system, not random section reordering or a location-name template.

## Cannibalisation result

- Kensington/W8 stays only on `/`; there is no area or postcode duplicate.
- Every area page uses its own place name as the local qualifier, an explicit postcode boundary and a different service/problem selection.
- Holland Park states its W8/W11 overlap and points visitors with general Kensington/W8 intent back to the homepage.
- No current page targets Ladbroke Grove, Brompton, Barons Court, Olympia, Kensington High Street or Gloucester Road as if it were covered.
- Area pages are learning-and-routing pages: they do not claim a local office, local jobs, a team, availability, dispatch, price or response time.

## Result

The existing six authorised area routes are the strongest final set under the current coverage truth. No new area page, postcode page, route removal or sitemap change is justified by this review.
