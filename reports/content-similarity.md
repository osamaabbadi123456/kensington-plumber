# Content similarity review

Checked from source on 2026-08-24. Header, navigation, breadcrumbs, shared enquiry CTA text and contact boilerplate were excluded. The review covers the seven service pages, four problem pages and three advice pages, with cross-type comparisons included where user intent overlaps.

| Page A | Page B | Risk | Reason | Action taken / No action required |
| --- | --- | --- | --- | --- |
| `/services/toilet-repair` | `/services/blocked-toilet` | Low | Both concern toilets, but one owns flush/cistern faults and the other owns rising water, drainage and blockage signs. Their decision sections, body order and related routes differ. | No action required. |
| `/services/bathroom-plumbing` | `/services/shower-repair` | Low | Bathroom Plumbing is room/fixture-led; Shower Repair is symptom/fitting-led and has its own temperature/pressure boundary. | No action required. |
| `/services/emergency-plumber` | `/services/leak-repair` | Low | Both include safe damage-limitation wording, but emergency content defines urgency while leak content distinguishes source from visible effect. | No action required. |
| `/plumbing-problems/toilet-wont-flush` | `/plumbing-problems/toilet-keeps-running` | Low | Both refer to cistern behaviour, but the former is a fault-or-blockage decision; the latter follows running/refilling patterns and water waste. | No action required. |
| `/plumbing-problems/shower-going-hot-and-cold` | `/services/shower-repair` | Moderate but intentional | The symptom page explains the immediate temperature pattern and routes onward; the service page covers the wider shower-fault set. | No action required; internal linking makes the hierarchy explicit. |
| `/plumbing-problems/water-coming-through-ceiling` | `/plumbing-advice/what-to-do-if-water-is-coming-through-your-ceiling` | Moderate but intentional | Both must give the same safety-first essentials. The problem page focuses on triage and a service route; the advice page is a safe-check checklist. | No action required. |
| `/plumbing-advice/blocked-toilet-or-broken-flush` | `/plumbing-problems/toilet-wont-flush` | Low | The advice page compares two categories; the problem page captures a specific immediate symptom and routes it. | No action required. |
| `/plumbing-advice/what-details-to-send-for-a-plumbing-enquiry` | service and problem detail pages | Low | The advice page owns the reusable enquiry-writing checklist; detail pages ask only for issue-specific evidence. | No action required. |

## Conclusion

No pair has clearly excessive meaningful-body duplication or a templated structure that warrants rewriting. The repeated safety and enquiry language is deliberate, short and necessary for the affected intent.
