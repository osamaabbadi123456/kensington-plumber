export type ContextualLink = {
  href: string;
  label: string;
  description: string;
};

type BuilderProblemKey =
  | "leak"
  | "blocked-toilet"
  | "toilet"
  | "tap"
  | "shower"
  | "bathroom"
  | "pipe"
  | "heating"
  | "pressure"
  | "sink"
  | "other";

type DetailPageContext = {
  family: "service" | "problem" | "advice" | "area";
  intent: string;
  builderProblem?: BuilderProblemKey;
  builderLocation?: CoveredAreaKey;
  dockLabel: string;
  contextualLinks: ContextualLink[];
};

export const builderProblemOptions: Record<BuilderProblemKey, string> = {
  leak: "Leak / water leak",
  "blocked-toilet": "Blocked toilet",
  toilet: "Toilet flush / cistern problem",
  tap: "Tap problem",
  shower: "Shower problem",
  bathroom: "Bathroom plumbing",
  pipe: "Burst or leaking pipe",
  heating: "Radiator / heating plumbing",
  pressure: "No water / low pressure",
  sink: "Sink / basin problem",
  other: "Other plumbing issue",
};

const pageContexts: Record<string, DetailPageContext> = {
  "/services/emergency-plumber": {
    family: "service",
    intent: "Urgent plumbing situation",
    dockLabel: "Emergency plumbing",
    contextualLinks: [
      { href: "/plumbing-problems/water-coming-through-ceiling", label: "Water coming through the ceiling", description: "For a leak appearing from above or through a ceiling." },
      { href: "/plumbing-advice/what-to-do-if-water-is-coming-through-your-ceiling", label: "Ceiling water advice", description: "Safety-first steps before sending the details." },
    ],
  },
  "/services/leak-repair": {
    family: "service",
    intent: "Visible or hidden water leak",
    builderProblem: "leak",
    dockLabel: "Leak Repair",
    contextualLinks: [
      { href: "/plumbing-problems/water-coming-through-ceiling", label: "Water coming through the ceiling", description: "For a leak showing through a ceiling or from a room above." },
      { href: "/plumbing-advice/what-to-do-if-water-is-coming-through-your-ceiling", label: "What to do about ceiling water", description: "A safety-first guide for water appearing from above." },
      { href: "/plumbing-glossary", label: "Plumbing glossary", description: "Plain-English terms such as stop tap, flexi hose and compression fitting." },
    ],
  },
  "/services/blocked-toilet": {
    family: "service",
    intent: "Blocked toilet symptoms",
    builderProblem: "blocked-toilet",
    dockLabel: "Blocked Toilet",
    contextualLinks: [
      { href: "/plumbing-problems/toilet-wont-flush", label: "Toilet will not flush", description: "Compare a rising-water blockage with a flush or cistern fault." },
      { href: "/plumbing-advice/blocked-toilet-or-broken-flush", label: "Blocked toilet or broken flush", description: "A short guide to the key difference before you send an enquiry." },
      { href: "/plumbing-glossary", label: "Plumbing glossary", description: "Understand terms such as soil pipe and cistern without DIY instructions." },
    ],
  },
  "/services/toilet-repair": {
    family: "service",
    intent: "Flush and cistern faults",
    builderProblem: "toilet",
    dockLabel: "Toilet Repair",
    contextualLinks: [
      { href: "/plumbing-problems/toilet-keeps-running", label: "Toilet keeps running", description: "A symptom guide for ongoing cistern flow or refilling." },
      { href: "/plumbing-glossary", label: "Plumbing glossary", description: "See plain-English explanations of cistern and fill-valve terms." },
    ],
  },
  "/services/tap-repair": {
    family: "service",
    intent: "Single tap fault",
    builderProblem: "tap",
    dockLabel: "Tap Repair",
    contextualLinks: [
      { href: "/plumbing-advice/what-details-to-send-for-a-plumbing-enquiry", label: "What details to send", description: "A simple checklist for describing the tap and its visible symptom." },
      { href: "/plumbing-glossary", label: "Plumbing glossary", description: "Useful terms include mixer tap and isolation valve." },
    ],
  },
  "/services/bathroom-plumbing": {
    family: "service",
    intent: "Bathroom fixture and room-level plumbing",
    builderProblem: "bathroom",
    dockLabel: "Bathroom Plumbing",
    contextualLinks: [
      { href: "/plumbing-problems/shower-going-hot-and-cold", label: "Shower going hot and cold", description: "For a shower-specific temperature or flow symptom." },
      { href: "/plumbing-advice/what-details-to-send-for-a-plumbing-enquiry", label: "What details to send", description: "A quick structure for describing the room, fixture and visible change." },
      { href: "/plumbing-glossary", label: "Plumbing glossary", description: "Plain-English bathroom terms such as trap and waste pipe." },
    ],
  },
  "/services/shower-repair": {
    family: "service",
    intent: "Shower-specific fault",
    builderProblem: "shower",
    dockLabel: "Shower Repair",
    contextualLinks: [
      { href: "/plumbing-problems/shower-going-hot-and-cold", label: "Shower going hot and cold", description: "A symptom guide for changing temperature or flow at the shower." },
      { href: "/plumbing-advice/what-details-to-send-for-a-plumbing-enquiry", label: "What details to send", description: "Use a short checklist for the controls, pressure, leak or drainage symptom." },
    ],
  },
  "/plumbing-problems/water-coming-through-ceiling": {
    family: "problem",
    intent: "Water through a ceiling",
    builderProblem: "leak",
    dockLabel: "Ceiling water problem",
    contextualLinks: [
      { href: "/services/leak-repair", label: "Leak repair", description: "The service route for visible or hidden plumbing leaks." },
      { href: "/plumbing-advice/what-to-do-if-water-is-coming-through-your-ceiling", label: "Ceiling water advice", description: "Safety-first actions and useful details to photograph." },
      { href: "/plumbing-glossary", label: "Plumbing glossary", description: "Plain-English terms that can help describe pipework or fittings." },
    ],
  },
  "/plumbing-problems/toilet-wont-flush": {
    family: "problem",
    intent: "Toilet will not flush",
    builderProblem: "toilet",
    dockLabel: "Toilet will not flush",
    contextualLinks: [
      { href: "/plumbing-advice/blocked-toilet-or-broken-flush", label: "Blocked toilet or broken flush", description: "Compare blockage symptoms with a flush mechanism issue." },
    ],
  },
  "/plumbing-problems/toilet-keeps-running": {
    family: "problem",
    intent: "Toilet keeps running",
    builderProblem: "toilet",
    dockLabel: "Running toilet",
    contextualLinks: [
      { href: "/services/toilet-repair", label: "Toilet repair", description: "The matching route for cistern, filling and running-water faults." },
      { href: "/plumbing-advice/blocked-toilet-or-broken-flush", label: "Blocked toilet or broken flush", description: "Understand why a running cistern is different from a blockage." },
      { href: "/plumbing-glossary", label: "Plumbing glossary", description: "See cistern, fill-valve and overflow explained simply." },
    ],
  },
  "/plumbing-problems/shower-going-hot-and-cold": {
    family: "problem",
    intent: "Shower temperature changes",
    builderProblem: "shower",
    dockLabel: "Shower temperature problem",
    contextualLinks: [
      { href: "/plumbing-advice/what-details-to-send-for-a-plumbing-enquiry", label: "What details to send", description: "A short guide to describing the temperature and flow pattern." },
    ],
  },
  "/plumbing-advice/what-to-do-if-water-is-coming-through-your-ceiling": {
    family: "advice",
    intent: "Ceiling-water safety advice",
    builderProblem: "leak",
    dockLabel: "Ceiling water advice",
    contextualLinks: [
      { href: "/plumbing-problems/water-coming-through-ceiling", label: "Water coming through the ceiling", description: "A symptom-led page for describing the issue." },
      { href: "/services/leak-repair", label: "Leak repair", description: "The relevant service route once the space is safe." },
      { href: "/plumbing-glossary", label: "Plumbing glossary", description: "Plain-English terms for water controls and visible pipework." },
    ],
  },
  "/plumbing-advice/blocked-toilet-or-broken-flush": {
    family: "advice",
    intent: "Blocked toilet versus flush fault",
    builderProblem: "toilet",
    dockLabel: "Toilet advice",
    contextualLinks: [
      { href: "/plumbing-problems/toilet-wont-flush", label: "Toilet will not flush", description: "A symptom page for button, handle and cistern behaviour." },
      { href: "/services/toilet-repair", label: "Toilet repair", description: "The service route for flush and cistern faults." },
      { href: "/plumbing-glossary", label: "Plumbing glossary", description: "Read the cistern and fill-valve definitions in plain English." },
    ],
  },
  "/plumbing-advice/what-details-to-send-for-a-plumbing-enquiry": {
    family: "advice",
    intent: "How to describe a plumbing enquiry",
    dockLabel: "Enquiry details advice",
    contextualLinks: [
      { href: "/plumbing-problems", label: "Plumbing problems", description: "Choose a symptom-led route if you are not sure how to name the issue." },
      { href: "/services", label: "Services", description: "Browse the current plumbing enquiry categories." },
      { href: "/plumbing-glossary", label: "Plumbing glossary", description: "Find a plain-English term if a fitting name would help." },
    ],
  },
  "/areas/south-kensington": {
    family: "area", intent: "South Kensington plumbing enquiry", builderLocation: "south-kensington", dockLabel: "South Kensington", contextualLinks: [],
  },
  "/areas/west-kensington": {
    family: "area", intent: "West Kensington plumbing enquiry", builderLocation: "west-kensington", dockLabel: "West Kensington", contextualLinks: [],
  },
  "/areas/earls-court": {
    family: "area", intent: "Earl's Court plumbing enquiry", builderLocation: "earls-court", dockLabel: "Earl's Court", contextualLinks: [],
  },
  "/areas/notting-hill": {
    family: "area", intent: "Notting Hill plumbing enquiry", builderLocation: "notting-hill", dockLabel: "Notting Hill", contextualLinks: [],
  },
  "/areas/north-kensington": {
    family: "area", intent: "North Kensington plumbing enquiry", builderLocation: "north-kensington", dockLabel: "North Kensington", contextualLinks: [],
  },
  "/areas/holland-park": {
    family: "area", intent: "Holland Park plumbing enquiry", builderLocation: "holland-park", dockLabel: "Holland Park", contextualLinks: [],
  },
};

export function getContextualLinks(pathname: string) {
  return pageContexts[pathname]?.contextualLinks ?? [];
}

export function getEnquiryBuilderHref(pathname: string) {
  const context = pageContexts[pathname];
  const query = new URLSearchParams();
  if (context?.builderProblem) query.set("problem", context.builderProblem);
  if (context?.builderLocation) query.set("location", context.builderLocation);

  return `/contact${query.size > 0 ? `?${query.toString()}` : ""}#build-enquiry`;
}

export function getContactProblemHref(problem: BuilderProblemKey) {
  return `/contact?problem=${problem}#build-enquiry`;
}

export function getBuilderProblemOption(value: string | null | undefined) {
  if (!value || !(value in builderProblemOptions)) return "";

  return builderProblemOptions[value as BuilderProblemKey];
}

export function getMobileDockMessage(pathname: string) {
  const pageLabel = pageContexts[pathname]?.dockLabel;

  return pageLabel
    ? `Hi, I'm looking at the ${pageLabel} page and would like to send a plumbing enquiry.`
    : "Hi, I have a plumbing problem in Kensington and would like to send an enquiry.";
}

export function getDetailPageContext(pathname: string) {
  return pageContexts[pathname];
}
import type { CoveredAreaKey } from "./areaCoverage";
