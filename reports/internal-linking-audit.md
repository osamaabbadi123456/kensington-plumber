# Internal linking audit

Checked locally: 2026-08-27. This audit covers the contextual links shown on existing detail pages and the controlled learning routes added for the six confirmed neighbouring areas. Header, footer, breadcrumbs and final enquiry actions are excluded from the maximum of three contextual content links per page.

## Controlled source

`app/_data/internalLinks.ts` is the source for displayed detail-page contextual links, known builder prefill values and page-aware mobile-dock WhatsApp messages. `app/_data/areaPages.ts` is the controlled source for the six distinct area-page route choices; `app/_data/areaCoverage.ts` supplies the confirmed coverage labels and their learning destinations. The Services and Problems hubs use a deliberate card-destination taxonomy rather than repeated related-link blocks.

| Route | Content family | Primary intent | Contextual links shown | Why the links are useful | Builder route available? | Direct WhatsApp available? | Repetition / cannibalisation risk |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `/services/emergency-plumber` | Service | Urgent plumbing situation | Ceiling-water problem; ceiling-water advice | Helps a visitor identify and make safe a water-from-above situation. | Yes, generic | Yes | Low; no availability promise added. |
| `/services/leak-repair` | Service | Visible or hidden water leak | Ceiling-water problem; ceiling-water advice; glossary | Separates a visible leak from its ceiling symptom and explains useful terms. | Yes, `leak` | Yes | Low; each destination has a distinct role. |
| `/services/blocked-toilet` | Service | Blocked toilet symptoms | Toilet-won't-flush problem; blockage-versus-flush advice; glossary | Clarifies the drainage/cistern distinction and useful terminology. | Yes, `blocked-toilet` | Yes | Low; does not take ownership of toilet-repair faults. |
| `/services/toilet-repair` | Service | Flush and cistern faults | Running-toilet problem; glossary | The existing blocked-toilet inline decision link plus these two routes stays within three contextual links. | Yes, `toilet` | Yes | Low; the blocked-toilet boundary remains explicit. |
| `/services/tap-repair` | Service | Single tap fault | Enquiry-details advice; glossary | Helps describe a tap without broadening into whole-property pressure. | Yes, `tap` | Yes | Low; no unrelated problem page is forced. |
| `/services/bathroom-plumbing` | Service | Bathroom fixture / room context | Shower-temperature problem; enquiry-details advice; glossary | Gives a fixture-led visitor a specific symptom, message and term route. | Yes, `bathroom` | Yes | Low; shower repair remains the specific shower route. |
| `/services/shower-repair` | Service | Shower-specific fault | Shower-temperature problem; enquiry-details advice | Supports the specific shower symptom and clearer description. | Yes, `shower` | Yes | Low; no boiler or gas route is introduced. |
| `/plumbing-problems/water-coming-through-ceiling` | Problem | Water through ceiling | Leak repair; ceiling-water advice; glossary | Leads from symptom to service, safety advice and simple terminology. | Yes, `leak` | Yes | Low; service and advice pages remain different formats. |
| `/plumbing-problems/toilet-wont-flush` | Problem | Toilet will not flush | Blocked-versus-flush advice | Two existing inline service decisions plus this advice link stay within three contextual links. | Yes, `toilet` | Yes | Low; no duplicate toilet service ownership. |
| `/plumbing-problems/toilet-keeps-running` | Problem | Toilet keeps running | Toilet repair; blocked-versus-flush advice; glossary | Routes a cistern behaviour symptom to the correct owner and terms. | Yes, `toilet` | Yes | Low; it does not become a blockage page. |
| `/plumbing-problems/shower-going-hot-and-cold` | Problem | Shower temperature changes | Enquiry-details advice | Existing inline shower-repair and bathroom-plumbing decisions plus this advice link stay within three contextual links. | Yes, `shower` | Yes | Low; no boiler-service claim is added. |
| `/plumbing-advice/what-to-do-if-water-is-coming-through-your-ceiling` | Advice | Ceiling-water safety steps | Ceiling-water problem; leak repair; glossary | Guides from safe action to a symptom/service route without duplicating either. | Yes, `leak` | Yes | Low; advice stays support content. |
| `/plumbing-advice/blocked-toilet-or-broken-flush` | Advice | Blockage versus flush fault | Toilet-won't-flush problem; toilet repair; glossary | Gives a reader a symptom, service and term route. | Yes, `toilet` | Yes | Low; blocked toilet remains covered in the comparison. |
| `/plumbing-advice/what-details-to-send-for-a-plumbing-enquiry` | Advice | Clear enquiry wording | Problems hub; services hub; glossary | Preserves its general scope instead of forcing an unrelated symptom. | Yes, generic | Yes | Low; hub links are navigation aids, not detail-page competition. |

## Confirmed-area learning routes

| Route | Local angle | Controlled routes shown | Enquiry action | Cannibalisation control |
| --- | --- | --- | --- | --- |
| `/areas/south-kensington` | Room and fixture context | Leak Repair, Bathroom Plumbing, Toilet Repair; ceiling-water and tap symptoms | South Kensington prefilled builder and direct WhatsApp | Kensington/W8 stays on the homepage; no address, local-job or availability wording. |
| `/areas/west-kensington` | Pipework versus toilet symptoms | Leak Repair pipework anchor, Blocked Toilet, Bathroom Plumbing; flush and pressure symptom routes | West Kensington prefilled builder and direct WhatsApp | Owns W14 enquiry context only; it does not create a pipe-repair URL. |
| `/areas/earls-court` | Source and water-from-above context | Leak Repair, Emergency Plumbing, Blocked Toilet; ceiling symptom and safety advice | Earl's Court prefilled builder and direct WhatsApp | Owns SW5 enquiry context only; urgent wording does not promise attendance. |
| `/areas/notting-hill` | Fitting and fixture context | Tap Repair, Bathroom Plumbing basin/sink anchor, Shower Repair; tap and shower symptoms | Notting Hill prefilled builder and direct WhatsApp | Owns W11 enquiry context only; it does not claim drainage or pressure diagnosis. |
| `/areas/north-kensington` | Visible-symptom context | Toilet Repair, Tap Repair, Leak Repair pipework anchor; running-toilet and tap routes | North Kensington prefilled builder and direct WhatsApp | Owns W10 enquiry context only; toilet-fault and blockage owners remain separate. |
| `/areas/holland-park` | Detail-first context | Leak Repair, Shower Repair, Bathroom Plumbing basin/sink anchor; ceiling-water and shower symptoms | Holland Park prefilled builder and direct WhatsApp | Uses W8/W11 context carefully; it does not duplicate the homepage's primary W8 owner. |

## Pages intentionally left alone

- `/services`, `/plumbing-problems` and `/plumbing-advice` use page-card navigation and do not need another related-link module.
- `/areas` is a controlled confirmed-scope hub that links only to the six implemented neighbouring-area learning routes; Kensington/W8 links back to the homepage rather than a duplicate area URL.
- `/about` and `/contact` already have direct navigation and enquiry routes; `/contact` is the canonical builder destination.
- The glossary keeps its term-level links and only changes its closing action to the canonical builder destination.

## Orphans and repetition controls

- No orphan-like public route was found: `npm run check:links` verifies every registered route is reached by a literal internal link in the app source.
- `/plumbing-glossary` is intentionally a repeated contextual destination where a term helps a visitor describe the issue. It is limited to related fitting/fault families and uses varied descriptive anchor text.
- `/contact#build-enquiry` is intentionally repeated only as the guided conversion destination. Detail pages retain their direct WhatsApp action, avoiding a forced single-path journey.
- No contextual block links to non-existing routes, future area pages, pricing content or boiler/gas content. Hub anchor destinations keep pipework, basin/sink, water-pressure and radiator/heating contexts on existing routes.

## Final hub destination system

| Hub area | Detail destination | Guidance destination | Enquiry destination |
| --- | --- | --- | --- |
| Homepage services | Seven cards link directly to the seven implemented service pages. | None in the primary card group. | A separate builder path remains available below the decision flow. |
| Homepage problems | Four cards link directly to the four implemented problem pages. | None in the primary card group. | One distinct `Build enquiry` card handles an unlisted symptom. |
| Services hub | Seven primary cards use `View service` and point only to live service pages. | Pipework, basin/sink and radiator/heating use `Read guidance` and existing anchors/routes. | The shared hub enquiry panel remains a secondary contact path. |
| Problems hub | Four primary cards use `View problem` and point only to live symptom pages. | Water pressure, pipework and basin/sink use `Read guidance`; Tap Repair is labelled `View service`. | The distinct navy `Build enquiry` card routes an uncertain symptom to the builder. |
| Areas hub | Area cards use `View area` for the six confirmed area routes; Kensington/W8 is labelled `Current area` and returns to the homepage. | Service/problem cards provide a safe starting route. | One `Build enquiry` action goes to `/contact#build-enquiry`. |

All anchor targets use a `scroll-margin-top` of at least 100px to clear the fixed header. The labels describe the destination only; they do not promise diagnosis, booking, dispatch, availability or an outcome.
