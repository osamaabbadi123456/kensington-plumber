# Final SERP copy V3

Checked locally: 2026-08-28. This is a pre-production copy audit only. The Netlify preview remains intentionally `noindex, nofollow`; its Lighthouse SEO result is not used to judge this production-ready metadata.

## Template decision

The root title template is now `%s` rather than appending the brand to every route. This prevents repetitive results such as a page title followed by `| Plumber Kensington` a second time. The homepage carries the full brand-led title; commercial and area routes lead with the service or place.

## Updated commercial, problem, advice and area copy

| Route | Old title | New title | Title length (approx.) | Old description direction | New description direction | Description length (approx.) | Primary intent / reason |
| --- | --- | --- | ---: | --- | --- | ---: | --- |
| `/` | Plumber Kensington \| Plumbing Enquiries in W8 | Plumber Kensington \| Leaks, Toilets, Taps & Showers in W8 | 59 | Administrative site-model wording | Problem-led WhatsApp/email next action | 145 | Primary local plumbing intent |
| `/services` | Plumbing Services in Kensington | Plumbing Services Kensington \| Leaks, Toilets, Taps & More | 58 | Service-route wording | Browse real service categories | 143 | Commercial hub |
| `/services/emergency-plumber` | Emergency Plumbing in Kensington | Emergency Plumber Kensington \| Urgent Plumbing Problems | 56 | Safe first-step emphasis | Urgent symptom and safe detail action | 133 | Urgent plumbing, no availability claim |
| `/services/leak-repair` | Leak Repair in Kensington | Leak Repair Kensington \| Pipes, Fittings & Water Leaks | 55 | Describe a leak | Visible source/effect and request action | 139 | Leak repair |
| `/services/blocked-toilet` | Blocked Toilet in Kensington | Blocked Toilet Kensington \| Rising or Slow-Clearing Toilet | 61 | Symptom description | Rising/slow-clearing comparison | 133 | Blockage intent |
| `/services/toilet-repair` | Toilet Repair in Kensington | Toilet Repair Kensington \| Flush & Cistern Faults | 51 | Fault distinction | Flush/running/filling symptom action | 128 | Cistern and flush faults |
| `/services/tap-repair` | Tap Repair in Kensington | Tap Repair Kensington \| Dripping, Leaking & Stiff Taps | 56 | Tap behaviour | Visible fitting and water context | 125 | Single-tap fault |
| `/services/bathroom-plumbing` | Bathroom Plumbing in Kensington | Bathroom Plumbing Kensington \| Basins, Toilets, Baths & Showers | 64 | Room/fixture description | Fixture-led bathroom problem action | 139 | Bathroom-level plumbing |
| `/services/shower-repair` | Shower Repair in Kensington | Shower Repair Kensington \| Leaks, Flow & Temperature Problems | 61 | Shower symptom description | Temperature/flow/leak comparison | 124 | Shower-only fault |
| `/services/radiator-heating` | New | Radiator & Heating Plumbing Kensington | 38 | New route | Radiator/valve/pipework symptom action | 138 | Bounded radiator plumbing intent |
| `/plumbing-problems` | Plumbing Problems in Kensington | Plumbing Problems Kensington \| Find the Right Next Step | 58 | Start with symptom | Problem-led route selection | 127 | Symptom hub |
| `/plumbing-problems/water-coming-through-ceiling` | Water Coming Through Your Ceiling | Water Coming Through Ceiling \| Safe Steps in Kensington | 57 | Safety/details | Safety, room and photo action | 140 | Ceiling-water symptom |
| `/plumbing-problems/toilet-wont-flush` | Toilet Won't Flush: Fault or Blockage? | Toilet Won't Flush \| Fault or Blockage? | 38 | Comparison wording | Fault-versus-blockage next step | 126 | Flush symptom |
| `/plumbing-problems/toilet-keeps-running` | Toilet Keeps Running: Cistern Fault Signs | Toilet Keeps Running \| Cistern Fault Signs | 41 | Cistern signs | Continuing-fill behaviour action | 129 | Running cistern symptom |
| `/plumbing-problems/shower-going-hot-and-cold` | Shower Going Hot and Cold | Shower Going Hot and Cold \| Temperature & Flow | 47 | Pattern/flow detail | Temperature and fitting route | 137 | Shower-temperature symptom |
| `/plumbing-advice` | Plumbing Advice: Clear Next Steps | Plumbing Advice Kensington \| Clear, Safe Next Steps | 54 | Advice/enquiry wording | Practical advice and existing routes | 137 | Advice hub |
| `/plumbing-advice/what-to-do-if-water-is-coming-through-your-ceiling` | Ceiling Leak: What to Do Safely | Ceiling Leak \| What to Do Safely | 32 | Kensington enquiry mention | Safety-first actions and photos | 136 | Ceiling safety advice |
| `/plumbing-advice/blocked-toilet-or-broken-flush` | Blocked Toilet or Broken Flush? | Blocked Toilet or Broken Flush? | 31 | Keep | Clear symptoms and next step | 132 | Toilet comparison advice |
| `/plumbing-advice/what-details-to-send-for-a-plumbing-enquiry` | How to Describe a Plumbing Problem | How to Describe a Plumbing Problem | 35 | Keep | Practical request checklist | 132 | Enquiry-detail advice |
| `/plumbing-glossary` | Plumbing Glossary: Plain-English Terms | Plumbing Glossary \| Plain-English Terms | 39 | Keep plain-English intent | Common terms and useful routes | 139 | Glossary resource |
| `/areas` | Covered Areas for Plumbing Enquiries | Plumbers in Kensington & Nearby Areas | 37 | Coverage administration | Place-led route discovery | 137 | Area hub |
| `/areas/south-kensington` | Plumber in South Kensington | Plumber South Kensington \| Leaks, Toilets & Taps | 49 | General local enquiry | Area plus main visitor paths | 129 | South Kensington / SW7 |
| `/areas/west-kensington` | Plumber in West Kensington | Plumber West Kensington \| Pipework, Toilets & Bathrooms | 58 | General local enquiry | Area plus visible symptom choices | 131 | West Kensington / W14 |
| `/areas/earls-court` | Plumber in Earl's Court | Plumber Earl's Court \| Leaks, Ceilings & Toilets | 51 | General local enquiry | Area plus water-visible-first route | 132 | Earl's Court / SW5 |
| `/areas/notting-hill` | Plumber in Notting Hill | Plumber Notting Hill \| Taps, Bathrooms & Showers | 53 | General local enquiry | Area plus fitting-led route | 141 | Notting Hill / W11 |
| `/areas/north-kensington` | Plumber in North Kensington | Plumber North Kensington \| Toilets, Taps & Pipework | 57 | General local enquiry | Area plus visible-symptom route | 145 | North Kensington / W10 |
| `/areas/holland-park` | Plumber in Holland Park | Plumber Holland Park \| Leaks, Showers & Toilets | 54 | General local enquiry | Area plus postcode-led route | 135 | Holland Park / W8–W11 |
| `/about` | How This Enquiry Website Works | About Plumber Kensington \| How the Site Helps | 46 | Site-model wording | Clear practical site role | 132 | About / trust context |
| `/contact` | Contact for Plumbing Enquiries | Contact Plumber Kensington \| WhatsApp or Email | 48 | Enquiry-led wording | Direct contact method and useful details | 138 | Contact intent |

## Kept legal-information copy

| Route | Title | Title length (approx.) | Description | Description length (approx.) | Reason |
| --- | --- | ---: | --- | ---: | --- |
| `/privacy` | Privacy Information | 19 | How this plumbing enquiry website handles information you choose to send through WhatsApp or email. | 98 | Legal-information intent is already accurate. |
| `/terms` | Website Terms | 13 | Website terms for Plumber Kensington and the use of its plumbing enquiry information. | 87 | Legal-information intent is already accurate. |
| `/cookies` | Cookie Information | 18 | Cookie information for the current Plumber Kensington website, which has no analytics or advertising scripts. | 109 | Legal-information intent is already accurate. |

## Guardrails retained

- No title or description contains 24/7, same-day, response-time, guarantee, price, review, team, Gas Safe or accreditation claims.
- Area titles own their named location only; the homepage remains the Kensington/W8 canonical owner.
- The lead-generation model remains visible in appropriate page and legal copy, but no longer leads commercial snippets repeatedly.
- Length is an editorial target rather than a promise of how any search engine will display a snippet; final browser-head values are checked by the metadata audit.
