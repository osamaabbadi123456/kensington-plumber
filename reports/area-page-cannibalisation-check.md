# Area-page cannibalisation check

Checked locally: 2026-08-27, after the final local-area targeting reset.

## Canonical ownership

| Canonical owner | Primary local intent | Boundary control |
| --- | --- | --- |
| `/` | plumber Kensington; plumber W8; general Kensington plumbing enquiry | The homepage remains the only Kensington/W8 owner. There is no `/areas/kensington`, postcode-only page, street page or local alias. |
| `/areas/south-kensington` | plumber South Kensington | Uses South Kensington/SW7 context, a room-and-fixture entry point and selected existing routes. |
| `/areas/west-kensington` | plumber West Kensington | Uses West Kensington/W14 context and a pipework/toilet distinction. |
| `/areas/north-kensington` | plumber North Kensington | Uses North Kensington/W10 context; it does not take Ladbroke Grove ownership. |
| `/areas/earls-court` | plumber Earl's Court | Uses Earl's Court/SW5 context and water-from-above safety routing. |
| `/areas/notting-hill` | plumber Notting Hill | Uses Notting Hill/W11 context and fitting-led discovery. |
| `/areas/holland-park` | plumber Holland Park | Uses Holland Park's W8/W11 overlap with an explicit homepage-W8 boundary. |

## Page-system controls

- Each area page follows the same visitor-predictable order: local introduction and postcode context; local angle; existing service choices; existing symptom choices; enquiry details; transparent builder/WhatsApp CTA; nearby confirmed areas.
- Shared order is intentional information architecture, not a location-name swap. `app/_data/areaPages.ts` controls different introductions, angles, postcode wording, selected service/problem routes and detail prompts for each page.
- Every route uses a visible breadcrumb, unique metadata/canonical and only real internal destinations.
- The areas hub presents Kensington/W8 as the current primary focus, then the six confirmed learning routes, then one guided enquiry action. It does not list research-only names.
- Area pages state neither a local office nor guaranteed availability, attendance, dispatch, response time, price or local job history.

## Names intentionally not targeted

Ladbroke Grove, Brompton and Barons Court are research-only: local-intent signals do not override the lack of owner-confirmed coverage and the overlap with current routes. Kensington Olympia, Kensington High Street and Gloucester Road are not page targets because their search treatment is venue/road or existing-Kensington context rather than a low-overlap local enquiry need.

## Result

No duplicate canonical target or inappropriate local-owner overlap was found. Kensington/W8 remains consolidated on the homepage, and the six confirmed area pages retain deliberately narrow, distinct owners.
