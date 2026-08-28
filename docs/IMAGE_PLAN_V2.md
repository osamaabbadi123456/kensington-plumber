# Image plan V2 — evidence-led visual direction

Status: planning only. No image is added by this batch. Images are not launch-blocking for the current site; `docs/IMAGE_PLAN.md` remains the original practical implementation reference.

## Rules before any image is used

- Use only owner-supplied, commissioned or clearly licensed assets with a recorded source and licence.
- Do not create or use imagery that implies a team, engineer attendance, a physical office, a completed local job, certification, response time, review or guarantee that cannot be verified.
- Do not use generic stock imagery as proof of local work, and do not show recognisable homes, residents or plates without appropriate permission.
- Preserve the subject with responsive crops (`object-position` and appropriately sized source assets); do not use a fixed crop that hides a leak, fitting or safety detail.
- Keep images optional and performance-budgeted. Prefer a single purposeful visual to repeated decorative cards.

## Current-route opportunities

| Route / route family | Visitor question | Safe visual direction | Asset / treatment | Avoid | Priority |
| --- | --- | --- | --- | --- | --- |
| `/` | “How do I start an enquiry?” | Abstract plumbing-line illustration or clear enquiry-flow graphic. | Lightweight local SVG; no person or premises implied. | Vans, uniformed teams, claimed local jobs. | Medium |
| `/services/leak-repair` | “Where is the water appearing?” | Diagram-style close-up of labelled safe locations: ceiling, visible fitting, bathroom fixture. | Local SVG or licensed non-identifying detail photograph. | Dramatic flood scenes or a fake repair in progress. | High |
| `/services/blocked-toilet` and toilet pages | “Is this blocked or a cistern/flush fault?” | Simple split diagram of bowl-water versus cistern/flush mechanism. | Local SVG with plain labels. | Unsanitary or alarmist imagery. | High |
| `/services/tap-repair` | “What part is leaking or stiff?” | Clean close-up diagram of a kitchen/basin tap, spout, base and isolation valve context. | Local SVG or properly licensed fitting photo. | Product endorsements or fabricated repair outcome. | Medium |
| `/services/shower-repair` and shower problem | “Is the issue temperature, flow, leak or drainage?” | Four-symptom illustrated panel using existing icon language. | Local SVG/icons, not a stock bathroom scene. | Boiler controls or gas-work implications. | Medium |
| Ceiling-water problem/advice | “What can I do safely now?” | Safety-first decision graphic: avoid electrics, photograph, note rooms. | Local SVG; no DIY repair sequence. | Water near exposed electrics or risky action imagery. | High |
| `/plumbing-glossary` | “What does this plumbing term mean?” | Small, consistent technical line diagrams for stop tap, cistern, trap and isolation valve. | Local SVG per term, added only as terms are reviewed. | Dense diagrams that function as DIY instructions. | Medium |
| `/contact` | “What details should I send?” | Compact checklist / photo framing illustration. | Local SVG; descriptive, not a chat screenshot with invented messages. | Claims of immediate routing or a named engineer. | Low |
| Future `cistern-not-filling` candidate | “Which cistern symptom matters?” | Cross-section-style cistern component illustration. | Local SVG, after the page itself is approved. | Repair steps or brand-specific parts. | Research only |
| Future `overflow-pipe-leaking` candidate | “Where is the overflow and what should I note?” | Neutral external/visible-overflow location diagram. | Local SVG, after the page itself is approved. | A real or fictional Kensington property. | Research only |

## Operational checklist for a later image batch

1. Record the asset source, licence, subject and route in the image inventory before adding it.
2. Add useful `alt` text only when the visual conveys content not already present in adjacent text; decorative SVGs should be hidden from assistive technology.
3. Set explicit dimensions or aspect ratios to reduce layout shift.
4. Test the crop at 390px, 768px and desktop before accepting an image card.
5. Run `npm run verify` and `npm run test:smoke`; perform an additional visual check only for routes that receive an image.
