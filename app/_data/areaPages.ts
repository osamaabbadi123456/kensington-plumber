import type { CoveredAreaKey } from "./areaCoverage";

export type AreaRouteLink = {
  title: string;
  detail: string;
  href: string;
};

export type AreaPageDefinition = {
  key: Exclude<CoveredAreaKey, "kensington-w8">;
  name: string;
  postcode: string;
  path: string;
  postcodeContext: string;
  intro: string;
  angleTitle: string;
  angle: string;
  services: AreaRouteLink[];
  problems: AreaRouteLink[];
  details: string[];
  relatedAreas: Array<{ label: string; href: string }>;
};

export const areaPages: Record<Exclude<CoveredAreaKey, "kensington-w8">, AreaPageDefinition> = {
  "south-kensington": {
    key: "south-kensington",
    name: "South Kensington",
    postcode: "SW7",
    path: "/areas/south-kensington",
    postcodeContext: "South Kensington is commonly associated with the SW7 postcode district. Include the actual postcode if you know it.",
    intro: "Use this page when a plumbing issue is in South Kensington and you want to identify a useful starting route before sending the details. Begin with the affected room and fixture rather than trying to name a diagnosis.",
    angleTitle: "Start with the room and fixture",
    angle: "For a bathroom, basin, tap or toilet concern, saying what was in use when the symptom appeared can make the enquiry clearer. A photo of the fitting and surrounding area can help where it is safe to take one.",
    services: [
      { title: "Leak repair", detail: "For visible water, dampness or a fitting that is leaking.", href: "/services/leak-repair" },
      { title: "Bathroom plumbing", detail: "For a basin, bath, shower, toilet or bathroom fixture context.", href: "/services/bathroom-plumbing" },
      { title: "Toilet repair", detail: "For a flush, cistern or running-water fault rather than a blockage.", href: "/services/toilet-repair" },
    ],
    problems: [
      { title: "Water through a ceiling", detail: "Safety-first help where water is appearing below another room.", href: "/plumbing-problems/water-coming-through-ceiling" },
    ],
    details: ["South Kensington postcode or nearby location", "Room and affected fixture", "What changed when it was used", "A safe, useful photo if available"],
    relatedAreas: [{ label: "Earl's Court", href: "/areas/earls-court" }, { label: "Kensington / W8", href: "/#area-coverage-home-title" }],
  },
  "west-kensington": {
    key: "west-kensington",
    name: "West Kensington",
    postcode: "W14",
    path: "/areas/west-kensington",
    postcodeContext: "West Kensington is commonly associated with W14. Include the actual postcode and the room where the problem is visible.",
    intro: "For a West Kensington plumbing enquiry, the useful first distinction is whether the issue is a visible leak, a toilet symptom or a bathroom fixture concern. The routes below help describe that difference without assuming the cause.",
    angleTitle: "Separate pipework from a toilet symptom",
    angle: "A wet joint or exposed connection belongs with leak and pipework context. Rising water or waste that does not clear belongs with a blocked-toilet symptom. A flush or cistern fault has its own toilet-repair route.",
    services: [
      { title: "Leak repair", detail: "For water around an exposed pipe, valve, joint or fitting.", href: "/services/leak-repair#pipework" },
      { title: "Blocked toilet", detail: "For slow drainage, rising water or a suspected blockage.", href: "/services/blocked-toilet" },
      { title: "Bathroom plumbing", detail: "For a basin, bath, shower or other bathroom fixture.", href: "/services/bathroom-plumbing" },
    ],
    problems: [
      { title: "Toilet will not flush", detail: "Compare a flush/cistern fault with signs of a blockage.", href: "/plumbing-problems/toilet-wont-flush" },
    ],
    details: ["West Kensington postcode", "Whether water is visible or a toilet is affected", "One fixture or several", "When the symptom first appeared"],
    relatedAreas: [{ label: "Earl's Court", href: "/areas/earls-court" }, { label: "Holland Park", href: "/areas/holland-park" }],
  },
  "earls-court": {
    key: "earls-court",
    name: "Earl's Court",
    postcode: "SW5",
    path: "/areas/earls-court",
    postcodeContext: "Earl's Court is commonly associated with SW5. Include the actual postcode and, where water is appearing from above, the room above or nearby.",
    intro: "This Earl's Court route is designed for visitors who can see the effect of a plumbing issue but are not sure where the source is. It is particularly useful to distinguish water appearing through a ceiling from a toilet or bathroom fixture symptom.",
    angleTitle: "Describe where water appears first",
    angle: "The first visible point is not always the source. If water is near lights or sockets, treat safety as the first priority; otherwise, note the rooms above and below, nearby fixtures and whether the water changes when something is used.",
    services: [
      { title: "Leak repair", detail: "For visible or less obvious plumbing leaks and their likely context.", href: "/services/leak-repair" },
      { title: "Emergency plumbing", detail: "For urgent plumbing situations, with safe first steps and no availability promise.", href: "/services/emergency-plumber" },
    ],
    problems: [
      { title: "Water through a ceiling", detail: "Start with safety and capture the room/location details.", href: "/plumbing-problems/water-coming-through-ceiling" },
      { title: "Ceiling-water advice", detail: "A separate safety-first guide before sending an enquiry.", href: "/plumbing-advice/what-to-do-if-water-is-coming-through-your-ceiling" },
    ],
    details: ["Earl's Court postcode or nearby location", "Which room the water is in", "The room above or adjacent fixture if known", "Photos from a safe position"],
    relatedAreas: [{ label: "South Kensington", href: "/areas/south-kensington" }, { label: "West Kensington", href: "/areas/west-kensington" }],
  },
  "notting-hill": {
    key: "notting-hill",
    name: "Notting Hill",
    postcode: "W11",
    path: "/areas/notting-hill",
    postcodeContext: "Notting Hill is commonly associated with W11. Include the actual postcode, room and affected fitting when you send the enquiry.",
    intro: "For a Notting Hill plumbing enquiry, begin with the fitting you can see: a tap, shower, basin, bath or visible leak. This avoids treating a room-level issue as a generic fault and helps route the enquiry to the most relevant existing page.",
    angleTitle: "Make the fitting the starting point",
    angle: "A single dripping or stiff tap is different from a shower-only temperature or flow symptom. Water around a basin, waste or connection can be described as bathroom plumbing without assuming whether the cause is inside the fixture or nearby pipework.",
    services: [
      { title: "Tap repair", detail: "For a dripping, stiff, noisy or poorly closing kitchen or bathroom tap.", href: "/services/tap-repair" },
      { title: "Bathroom plumbing", detail: "For a basin, bath, shower, toilet or visible bathroom leak.", href: "/services/bathroom-plumbing#basin-sink" },
      { title: "Shower repair", detail: "For shower-specific temperature, flow, leak or fitting symptoms.", href: "/services/shower-repair" },
    ],
    problems: [
      { title: "Shower going hot and cold", detail: "A symptom route for changing shower temperature or flow.", href: "/plumbing-problems/shower-going-hot-and-cold" },
    ],
    details: ["Notting Hill postcode", "Tap, shower, basin or bathroom fixture", "Where the water or weak flow is visible", "A close and wider photo if useful"],
    relatedAreas: [{ label: "North Kensington", href: "/areas/north-kensington" }, { label: "Holland Park", href: "/areas/holland-park" }],
  },
  "north-kensington": {
    key: "north-kensington",
    name: "North Kensington",
    postcode: "W10",
    path: "/areas/north-kensington",
    postcodeContext: "North Kensington is commonly associated with W10. Include the actual postcode because location detail is useful for routing an enquiry.",
    intro: "Use this North Kensington page when you have a visible plumbing symptom and want to choose between a fixture fault, a leak or a toilet issue. The point is to make the enquiry clearer, not to diagnose the plumbing from a webpage.",
    angleTitle: "Choose the clearest visible symptom",
    angle: "A running toilet, a tap that will not close and water around a pipework connection each need different details. If the symptom is unclear, send the location, fixture and what changed rather than selecting a service at random.",
    services: [
      { title: "Toilet repair", detail: "For flush, cistern, filling or running-water faults that are not blockages.", href: "/services/toilet-repair" },
      { title: "Tap repair", detail: "For a single tap issue rather than a whole-property supply concern.", href: "/services/tap-repair" },
      { title: "Leak repair", detail: "For exposed pipework, visible fittings or water appearing unexpectedly.", href: "/services/leak-repair#pipework" },
    ],
    problems: [
      { title: "Toilet keeps running", detail: "Identify a cistern that continues filling or running into the pan.", href: "/plumbing-problems/toilet-keeps-running" },
    ],
    details: ["North Kensington postcode", "Fixture or visible pipework affected", "Whether one fixture or more than one is affected", "What happens when the fitting is used"],
    relatedAreas: [{ label: "Notting Hill", href: "/areas/notting-hill" }, { label: "Holland Park", href: "/areas/holland-park" }],
  },
  "holland-park": {
    key: "holland-park",
    name: "Holland Park",
    postcode: "W8 / W11",
    path: "/areas/holland-park",
    postcodeContext: "Holland Park can overlap W8 and W11 postcode context. Include the actual postcode so the enquiry has a clear location without treating this page as a duplicate Kensington page.",
    intro: "This Holland Park page is for a confirmed-area enquiry with a clear issue route, while the homepage remains the owner of general Kensington and W8 intent. Start with the symptom or room that is affected, then build the enquiry with the local postcode.",
    angleTitle: "Use the postcode to keep the location clear",
    angle: "Where an area can sit across more than one postcode context, the most useful local detail is the actual postcode plus the room and fitting. This is more helpful than assuming that a Holland Park issue should follow the general Kensington route.",
    services: [
      { title: "Leak repair", detail: "For visible water, pipework, fittings or dampness that needs context.", href: "/services/leak-repair" },
      { title: "Shower repair", detail: "For shower-only temperature, flow, leak or control symptoms.", href: "/services/shower-repair" },
      { title: "Bathroom plumbing", detail: "For room-level basin, bath, shower, toilet or bathroom fixture concerns.", href: "/services/bathroom-plumbing" },
    ],
    problems: [
      { title: "Toilet keeps running", detail: "For ongoing cistern flow or refilling behaviour.", href: "/plumbing-problems/toilet-keeps-running" },
    ],
    details: ["Holland Park postcode, including W8 or W11 if known", "Affected room and fixture", "Visible leak, change in flow or cistern behaviour", "When it started and any safe photo"],
    relatedAreas: [{ label: "Notting Hill", href: "/areas/notting-hill" }, { label: "West Kensington", href: "/areas/west-kensington" }],
  },
};
