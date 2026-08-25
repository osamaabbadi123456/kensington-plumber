# Image plan

No new images are added by this plan. The current icon-and-information-card approach is deliberate and avoids imagery that could imply a real plumber, office, vehicle or completed local job.

## Implementation rules for a later approved image batch

- Prefer a local, licensed WebP or AVIF asset with explicit intrinsic dimensions. Use `next/image` or an equally dimensioned implementation to reserve space and avoid layout shift.
- Lazy-load below-the-fold imagery. Give `priority` only to a real LCP image that is above the fold and materially improves the page.
- Use an aspect-ratio wrapper and a reviewed `object-position`; never crop the actual fault, fixture, water path or safety context blindly.
- Do not use fake engineer portraits, branded vans, local job photography or before/after claims. Generic illustration or licensed stock must be presented as illustrative, not evidence of work performed.

| Route | Section | Image purpose and suggested subject | Ratio / responsive behaviour | Fit and safe area | Priority | Alt-text intent | Preferred source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | Hero | No real photo at launch. The existing enquiry visual already explains the route. Later, consider a simple non-branded illustration of a room, fixture and message flow. | 4:3 desktop; hide or stack beneath copy on mobile. | `contain` for a diagram; keep the room, fixture and message labels inside the central 80%. | Optional | Describe the enquiry flow only if it conveys information; otherwise decorative. | Custom diagram or local SVG. |
| `/` | Problem and service discovery cards | No image needed; Lucide icons are clearer, faster and more consistent at card scale. | N/A | N/A | No image | N/A | No image. |
| `/services/leak-repair` | Visible versus hidden leak | A neutral diagram showing a visible fitting leak and a water mark away from the source could clarify the distinction. | 3:2; full-width inside the section, stack after copy on mobile. | `contain`; preserve both source and visible-effect callouts. | Later | Explain visible source versus visible effect. | Custom diagram. |
| `/services/emergency-plumber` | Urgent situations | No photo at launch; safety copy should stay primary. A calm, generic water-spread diagram may be useful later. | 16:9 desktop; below first safety message on mobile. | `contain`; retain water path and electrical warning area. | Optional | Illustrative water-spread safety context. | Custom diagram. |
| `/services/bathroom-plumbing` | Fixture selector | A neutral bathroom-fixture illustration can support basin, bath, shower and toilet selection without suggesting a job was completed. | 4:3; beside selector on desktop, below on mobile. | `contain`; keep each labelled fixture in view. | Later | Identify bathroom fixture groups. | Custom illustration. |
| `/services/shower-repair` | Shower symptom choices | A close, unbranded shower-control/fitting image may help identify controls, hose, tray and leak locations. | 3:2; below hero on mobile. | `cover` only with tested `object-position`; retain controls and tray edge. | Later | Illustrative shower controls and fittings. | Licensed stock or custom illustration. |
| `/plumbing-problems/water-coming-through-ceiling` | Immediate safety steps | A simple ceiling-water/electrics decision diagram could reinforce the safe-distance message. | 16:9; after answer-first copy, full width on mobile. | `contain`; keep ceiling, light/socket warning and safe standing area visible. | Later | Illustrate water near a ceiling and electrical-safety caution. | Custom diagram. |
| `/plumbing-advice/what-to-do-if-water-is-coming-through-your-ceiling` | Safe checks | Same subject as the symptom route but use a checklist diagram rather than duplicate art. | 4:3; below first answer on mobile. | `contain`; preserve each numbered check. | Optional | Show safe observation points, not repair actions. | Custom diagram. |
| `/plumbing-advice/blocked-toilet-or-broken-flush` | Blocked-versus-flush comparison | A two-column toilet/cistern decision diagram may speed comprehension. | 1:1 or 4:3; below comparison on mobile. | `contain`; preserve both branches and warning state. | Optional | Compare rising-water signs with flush/cistern signs. | Custom diagram. |
| `/plumbing-advice/what-details-to-send-for-a-plumbing-enquiry` | Enquiry checklist | A small message-template diagram can support the five details without pretending to show a real customer conversation. | 4:3; below checklist on mobile. | `contain`; retain all checklist labels. | Optional | Show the information to include in an enquiry. | Custom diagram or local SVG. |

Other current pages do not need an image before launch. Useful copy, cards and direct route selection are more valuable than decorative imagery there.
