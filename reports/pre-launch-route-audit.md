# Pre-launch route audit

Checked from source on 2026-08-24. `npm run check:seo`, `npm run check:links` and `npm run check:business` provide the mechanical checks; this review confirms the page purpose and route-specific copy.

All 21 routes have one clear primary intent, an appropriate H1 (directly in the route or supplied by the route's shared page component), useful internal navigation, and an enquiry route where commercial or contact intent makes it appropriate. Source metadata has a unique title, description and canonical for every indexable route. No thin placeholder pages, missing detail links or unsupported business claims were found.

| Route | Primary intent / H1 | Audit result |
| --- | --- | --- |
| `/` | Kensington plumbing enquiry — “Plumbing problem in Kensington? Start with what you can see.” | Clear symptom-to-enquiry start; WhatsApp CTA and discovery links present. |
| `/services` | Service selection — “Choose the service that best matches your enquiry.” | Seven implemented services link directly; future topics remain non-links. |
| `/services/emergency-plumber` | Urgent plumbing enquiry | Safety-first and does not promise availability. |
| `/services/leak-repair` | Visible or hidden leak enquiry | Distinct source/effect and damage-limitation guidance. |
| `/services/blocked-toilet` | Blockage-led toilet enquiry | Clearly separated from flush/cistern faults. |
| `/services/toilet-repair` | Flush, cistern and running-water faults | Clearly excludes blockage-led symptoms. |
| `/services/tap-repair` | Single-tap fault enquiry | Clearly excludes wider supply or pressure diagnosis. |
| `/services/bathroom-plumbing` | Room-level bathroom plumbing enquiry | Routes specific shower, toilet, tap and leak symptoms onward. |
| `/services/shower-repair` | Shower-specific fault enquiry | Separates shower symptoms from wider hot-water or boiler claims. |
| `/plumbing-problems` | Symptom selection — “What is happening?” | Four implemented symptom routes are direct; remaining unbuilt topics are not links. |
| `/plumbing-problems/water-coming-through-ceiling` | Ceiling-leak symptom | Safety, room context and service routing are clear. |
| `/plumbing-problems/toilet-wont-flush` | Flush failure symptom | Separates a flush fault from rising-water blockage signs. |
| `/plumbing-problems/toilet-keeps-running` | Running cistern symptom | Distinct cistern-behaviour route, not a blockage page. |
| `/plumbing-problems/shower-going-hot-and-cold` | Temperature-fluctuation symptom | Keeps boiler/gas scope out of the page. |
| `/plumbing-advice` | Practical pre-enquiry guidance | Three guides are direct; generic enquiry prompt stays hub-level. |
| `/plumbing-advice/what-to-do-if-water-is-coming-through-your-ceiling` | Ceiling-water safety advice | Advice framing is distinct from the symptom route. |
| `/plumbing-advice/blocked-toilet-or-broken-flush` | Toilet decision advice | Clear blockage-versus-flush comparison and useful onward links. |
| `/plumbing-advice/what-details-to-send-for-a-plumbing-enquiry` | Enquiry-writing advice | Specific checklist purpose, not a service claim. |
| `/areas` | Confirmed Kensington/W8 scope | Explicitly avoids unconfirmed neighbouring-area coverage. |
| `/about` | Website and lead-generation model | Explains representation without company-style claims. |
| `/contact` | Contact and enquiry details | WhatsApp/email and routing transparency are clear. |

## Targeted improvement made

The homepage service preview now links its four implemented topics directly to `/services/leak-repair`, `/services/blocked-toilet`, `/services/bathroom-plumbing` and `/services/shower-repair`. This reduces an unnecessary step between discovery and the matching service page. Unbuilt Pipe Repair and Heating Plumbing cards remain routed to the services hub.
