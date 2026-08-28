# CTR / title study V2

Status: research only, checked 2026-08-27. This document does **not** change any title, description, canonical or schema.

## Evidence and limits

- Current titles are taken from the route metadata in the repository at review time.
- Competitor-title patterns come from live observed results captured in `reports/deep-serp-observations.csv`; result order, PAA, AI answers and exact CTR are **UNAVAILABLE**.
- There is no Search Console data yet. A title change before impressions and query mix are known has an avoidable regression risk.
- “Proposed alternative” is an option to test after data exists, not a request to edit metadata now.

## Patterns observed

| Pattern | Observation | Decision for this project |
| --- | --- | --- |
| Exact service + location | Local commercial competitors frequently use it, e.g. “Local Plumber in Kensington” and “Tap Repair London”. | Current service titles already use clear service + Kensington wording. Keep for now. |
| Question / symptom title | National guides commonly use exact question or symptom, especially toilet, ceiling and overflow queries. | Current problem/advice titles lead with the symptom/question and are appropriately concise. |
| Action / benefit language | Competitors often add “fixed”, availability, urgency or price promises. | Do not use; it could imply a service result, availability or a commercial fact not verified. |
| W8 in title | W8 can be useful, but it increases length and creates a risk of forced location repetition. | Keep W8 in page copy/description where natural; do not create or retitle around a W8-only promise without GSC evidence. |
| Dates / years | Observed primarily on editorial cost guides. | Not relevant to evergreen service/problem content; do not add a year for superficial freshness. |
| Long clickbait titles | Several commercial guides stack claims and qualifying phrases. | Avoid truncation and unsupported sales claims. |

## Route-level review

| Route | Current title | Relevant observed title pattern | Possible later alternative | Why it might improve CTR | Risk | Decision now |
| --- | --- | --- | --- | --- | --- | --- |
| `/services/emergency-plumber` | Emergency Plumbing in Kensington | “Emergency Plumber Kensington” pages pair the phrase with availability promises | Emergency Plumbing Enquiries in Kensington | Could clarify enquiry model in a branded query mix | May weaken direct commercial phrasing or sound less immediately relevant | KEEP |
| `/services/leak-repair` | Leak Repair in Kensington | Direct service + location; ceiling guides use question phrasing | Leak Repair for Visible Water Leaks in Kensington | May distinguish from hidden/general leak pages if GSC shows a visible-leak cluster | Longer and may exclude hidden-leak relevance | KEEP |
| `/services/blocked-toilet` | Blocked Toilet in Kensington | Exact symptom/service phrasing; some guides add “unblocking” | Blocked Toilet: Describe the Symptoms in Kensington | Could reinforce the enquiry detail role | Removes succinct exact-match style and adds no verified benefit | KEEP |
| `/services/toilet-repair` | Toilet Repair in Kensington | Commercial pages add “flush” / “cistern” fault terms | Toilet Repair for Flush and Cistern Faults | Could better filter blocked-toilet intent | Longer and risks overfitting before query evidence | KEEP |
| `/services/tap-repair` | Tap Repair in Kensington | “Leaking & Dripping Taps” is a frequent pattern | Tap Repair for Dripping and Leaking Taps | May match a proven symptom cluster later | Narrower than stiff/noisy/one-tap-flow scope | KEEP |
| `/services/bathroom-plumbing` | Bathroom Plumbing in Kensington | Broad room-level commercial phrasing | Bathroom Plumbing Enquiries in Kensington | Could make the lead-routing model explicit | “Enquiries” may reduce relevance for a user seeking fixture terms | KEEP |
| `/services/shower-repair` | Shower Repair in Kensington | Symptom SERPs often add hot/cold, pressure or leaking terms | Shower Repair for Leaks, Flow and Temperature Issues | May improve breadth if GSC query mix is fragmented | Could over-lengthen / compete with the problem route | KEEP |
| `/plumbing-problems/water-coming-through-ceiling` | Water Coming Through Your Ceiling | Exact question/symptom-first guide titles | What to Do When Water Comes Through Your Ceiling | Strong question match if visitors enter via advice queries | Would collide more closely with the dedicated advice page | KEEP |
| `/plumbing-problems/toilet-wont-flush` | Toilet Won't Flush: Fault or Blockage? | Question plus cause distinction appears frequently | Toilet Won't Flush? Fault or Blockage Signs | Could add “signs” only if query data supports it | Minor rewrite with no present data basis | KEEP |
| `/plumbing-problems/toilet-keeps-running` | Toilet Keeps Running: Cistern Fault Signs | Exact symptom + cause/page phrasing | Toilet Keeps Running? Cistern Filling Signs | Could reflect an observed query variant | Adds a question format already supplied by the advice architecture | KEEP |
| `/plumbing-problems/shower-going-hot-and-cold` | Shower Going Hot and Cold | Exact symptom questions dominate | Why Is My Shower Going Hot and Cold? | Strong information query phrasing | Would overpromise causal explanation and compete with Shower Repair | KEEP |
| `/plumbing-advice/what-to-do-if-water-is-coming-through-your-ceiling` | Ceiling Leak: What to Do Safely | Guides use “water leaking from ceiling” / “what to do” | What to Do if Water Comes Through Your Ceiling | Exact long-tail match | Highly similar to current symptom problem title; could blur two routes | KEEP |
| `/plumbing-advice/blocked-toilet-or-broken-flush` | Blocked Toilet or Broken Flush? | Comparison-question format is distinctive in this cluster | Is It a Blocked Toilet or Broken Flush? | May better reflect natural spoken query wording | Longer and no data supports the change | KEEP |
| `/plumbing-advice/what-details-to-send-for-a-plumbing-enquiry` | How to Describe a Plumbing Problem | Generic checklist/contact wording appears in support content | What Details to Send in a Plumbing Enquiry | Exact task phrase | Current title is broader and useful to problem-led searches | KEEP |

## When a title test becomes justified

Do not use position alone. After launch and Search Console connection:

1. Wait until a route has a meaningful query/impression sample over at least 28 days; prefer 90 days for low-volume local terms.
2. Consider one change only when a specific query family has material impressions, a consistently low CTR relative to its own average position, and a more precise title can be made without changing intent ownership.
3. Log the exact before/after title, date, query group, impression/CTR baseline and planned review date. Do not change title and page body simultaneously.
4. Reassess after a comparable period. Revert only when a clear sustained adverse trend is observed; do not react to daily noise.

## Titles deliberately excluded from experimentation

- Any title requiring 24/7, rapid arrival, “fixed”, price, guarantee, reviews, years, accreditation, team or availability language.
- A W8-only page title that suggests a distinct W8 URL or an unconfirmed physical/local presence.
- Adjacent-area titles before coverage is explicitly confirmed.
- Price-title concepts; price content remains internal research only.
