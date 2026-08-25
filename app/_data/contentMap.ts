export type ContentType = "service" | "problem" | "area" | "advice";

export type IndexingWave = 1 | 2 | 3 | 4 | 5;

export interface ContentMapEntry {
  slug: string;
  type: ContentType;
  title: string;
  intent: string;
  indexingWave: IndexingWave;
  relatedServices?: string[];
  relatedProblems?: string[];
  relatedAdvice?: string[];
}

export const contentMap: ContentMapEntry[] = [
  // Strong commercial service pages
  {
    slug: "emergency-plumber",
    type: "service",
    title: "Emergency Plumbing",
    intent: "Urgent commercial plumbing enquiry",
    indexingWave: 1,
  },
  {
    slug: "leak-repair",
    type: "service",
    title: "Leak Repair",
    intent: "Commercial leak repair enquiry",
    indexingWave: 1,
    relatedProblems: ["water-coming-through-ceiling", "radiator-leaking"],
  },
  {
    slug: "blocked-drains",
    type: "service",
    title: "Blocked Drains",
    intent: "Commercial drainage enquiry",
    indexingWave: 1,
    relatedProblems: ["sink-gurgling"],
  },
  {
    slug: "blocked-toilet",
    type: "service",
    title: "Blocked Toilet",
    intent: "Commercial blocked toilet enquiry",
    indexingWave: 1,
    relatedProblems: ["toilet-wont-flush", "toilet-keeps-running"],
  },
  {
    slug: "tap-repair",
    type: "service",
    title: "Tap Repair",
    intent: "Commercial tap repair enquiry",
    indexingWave: 1,
    relatedProblems: ["tap-has-no-water"],
  },
  {
    slug: "kitchen-plumber",
    type: "service",
    title: "Kitchen Plumbing",
    intent: "Kitchen plumbing service enquiry",
    indexingWave: 1,
  },
  {
    slug: "bathroom-plumber",
    type: "service",
    title: "Bathroom Plumbing",
    intent: "Bathroom plumbing service enquiry",
    indexingWave: 1,
  },
  {
    slug: "boiler-heating-plumbing",
    type: "service",
    title: "Boiler & Heating Plumbing",
    intent: "Heating-related plumbing enquiry",
    indexingWave: 1,
    relatedProblems: [
      "no-hot-water",
      "radiator-cold-at-bottom",
      "radiator-leaking",
    ],
  },
  {
    slug: "water-pressure",
    type: "service",
    title: "Water Pressure",
    intent: "Water pressure plumbing enquiry",
    indexingWave: 1,
    relatedProblems: ["water-pressure-dropped-suddenly"],
  },

  // Problem / symptom pages
  {
    slug: "water-coming-through-ceiling",
    type: "problem",
    title: "Water Coming Through the Ceiling",
    intent: "Urgent symptom / diagnostic intent",
    indexingWave: 2,
    relatedServices: ["leak-repair", "pipe-repair", "bathroom-plumber"],
  },
  {
    slug: "toilet-wont-flush",
    type: "problem",
    title: "Toilet Won't Flush",
    intent: "Toilet symptom / diagnostic intent",
    indexingWave: 2,
    relatedServices: ["blocked-toilet"],
  },
  {
    slug: "toilet-keeps-running",
    type: "problem",
    title: "Toilet Keeps Running",
    intent: "Toilet fault / diagnostic intent",
    indexingWave: 2,
    relatedServices: ["blocked-toilet", "bathroom-plumber"],
  },
  {
    slug: "sink-gurgling",
    type: "problem",
    title: "Sink Making a Gurgling Noise",
    intent: "Drainage symptom intent",
    indexingWave: 2,
    relatedServices: ["blocked-drains", "kitchen-plumber"],
  },
  {
    slug: "overflow-pipe-dripping",
    type: "problem",
    title: "Overflow Pipe Dripping",
    intent: "Leak symptom / diagnostic intent",
    indexingWave: 2,
    relatedServices: ["leak-repair", "pipe-repair"],
  },
  {
    slug: "no-hot-water",
    type: "problem",
    title: "No Hot Water",
    intent: "Hot water problem intent",
    indexingWave: 2,
    relatedServices: ["boiler-heating-plumbing"],
  },
  {
    slug: "radiator-cold-at-bottom",
    type: "problem",
    title: "Radiator Cold at the Bottom",
    intent: "Heating symptom / diagnostic intent",
    indexingWave: 2,
    relatedServices: ["boiler-heating-plumbing", "radiator-plumbing"],
  },
  {
    slug: "radiator-leaking",
    type: "problem",
    title: "Radiator Leaking",
    intent: "Heating leak intent",
    indexingWave: 2,
    relatedServices: ["leak-repair", "radiator-plumbing"],
  },
  {
    slug: "pipe-making-banging-noise",
    type: "problem",
    title: "Pipes Making a Banging Noise",
    intent: "Pipe noise / diagnostic intent",
    indexingWave: 2,
    relatedServices: ["pipe-repair"],
  },
  {
    slug: "tap-has-no-water",
    type: "problem",
    title: "No Water Coming From a Tap",
    intent: "Tap / supply diagnostic intent",
    indexingWave: 2,
    relatedServices: ["tap-repair", "water-pressure"],
  },
  {
    slug: "water-pressure-dropped-suddenly",
    type: "problem",
    title: "Water Pressure Suddenly Dropped",
    intent: "Water pressure diagnostic intent",
    indexingWave: 2,
    relatedServices: ["water-pressure", "leak-repair"],
  },
  {
    slug: "shower-going-hot-and-cold",
    type: "problem",
    title: "Shower Going Hot and Cold",
    intent: "Shower temperature diagnostic intent",
    indexingWave: 2,
    relatedServices: ["shower-plumber", "boiler-heating-plumbing"],
  },
];
