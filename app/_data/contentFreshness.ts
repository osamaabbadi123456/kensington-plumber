export type ContentFreshness = {
  title: string;
  href: string;
  reviewedAt: string;
  topic: string;
  description: string;
};

export const adviceContentFreshness: readonly ContentFreshness[] = [
  {
    title: "What to do if water is coming through your ceiling",
    href: "/plumbing-advice/what-to-do-if-water-is-coming-through-your-ceiling",
    reviewedAt: "2026-08-25",
    topic: "Ceiling leaks",
    description: "Safety-first steps, useful photos and the clearest details to send when water is appearing through a ceiling.",
  },
  {
    title: "Blocked toilet or broken flush",
    href: "/plumbing-advice/blocked-toilet-or-broken-flush",
    reviewedAt: "2026-08-25",
    topic: "Toilet symptoms",
    description: "A clear way to separate rising water and drainage symptoms from flush and cistern faults.",
  },
  {
    title: "What details to send for a plumbing enquiry",
    href: "/plumbing-advice/what-details-to-send-for-a-plumbing-enquiry",
    reviewedAt: "2026-08-25",
    topic: "Sending an enquiry",
    description: "The room, fixture, visible change and photo details that can make a plumbing enquiry easier to understand.",
  },
];

export const glossaryContentFreshness: readonly ContentFreshness[] = [
  {
    title: "Plumbing glossary",
    href: "/plumbing-glossary",
    reviewedAt: "2026-08-26",
    topic: "Plain-English terms",
    description: "Straightforward explanations of common plumbing terms, with links to the existing routes where they are most useful.",
  },
];

export const recentlyReviewedContent: readonly ContentFreshness[] = [
  ...adviceContentFreshness,
  ...glossaryContentFreshness,
];

export function getAdviceContentFreshness(href: string) {
  const entry = adviceContentFreshness.find((item) => item.href === href);

  if (!entry) {
    throw new Error("Missing advice freshness metadata for " + href);
  }

  return entry;
}

export function getGlossaryContentFreshness(href: string) {
  const entry = glossaryContentFreshness.find((item) => item.href === href);

  if (!entry) {
    throw new Error("Missing glossary freshness metadata for " + href);
  }

  return entry;
}

export function formatReviewedDate(reviewedAt: string) {
  const date = new Date(reviewedAt + "T00:00:00Z");

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
