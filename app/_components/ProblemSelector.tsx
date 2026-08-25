import Link from "next/link";
import {
  CircleHelp,
  Droplets,
  Gauge,
  Heater,
  ShowerHead,
  Toilet,
  WashingMachine,
} from "lucide-react";

const problems = [
  {
    title: "Water leaking",
    text: "Leaks from pipes, ceilings, sinks, radiators or fittings.",
    href: "/plumbing-problems/water-coming-through-ceiling",
    icon: Droplets,
  },
  {
    title: "Toilet problem",
    text: "Won't flush, keeps running, rising water or a blockage.",
    href: "/plumbing-problems/toilet-wont-flush",
    icon: Toilet,
  },
  {
    title: "Shower or bathroom",
    text: "Temperature, pressure, drainage or bathroom plumbing issues.",
    href: "/plumbing-problems/shower-going-hot-and-cold",
    icon: ShowerHead,
  },
  {
    title: "Tap or sink",
    text: "Dripping taps, no water, slow drainage or under-sink leaks.",
    href: "/plumbing-problems#problem-list",
    icon: WashingMachine,
  },
  {
    title: "Water pressure",
    text: "Sudden pressure loss, weak taps or uneven water flow.",
    href: "/plumbing-problems#problem-list",
    icon: Gauge,
  },
  {
    title: "Heating or radiator",
    text: "Radiator leaks, cold spots, pressure or hot-water issues.",
    href: "/plumbing-problems#problem-list",
    icon: Heater,
  },
  {
    title: "Not sure",
    text: "Describe what you can see and we can route the enquiry.",
    href: "/plumbing-problems",
    icon: CircleHelp,
  },
];

export default function ProblemSelector() {
  return (
    <section id="whats-happening" className="problem-section">
      <div className="site-shell">
        <div className="section-heading">
          <span className="section-kicker">Start with the symptom</span>

          <h2>What&apos;s happening?</h2>

          <p>
            You do not need to know the plumbing term. Choose the closest
            problem and continue from there.
          </p>
        </div>

        <div className="problem-grid">
          {problems.map((problem) => {
            const Icon = problem.icon;

            return (
              <Link
                key={problem.title}
                href={problem.href}
                className="problem-card"
              >
                <div className="problem-icon-wrap">
                  <Icon size={28} strokeWidth={1.8} aria-hidden="true" />
                </div>

                <div>
                  <h3>{problem.title}</h3>
                  <p>{problem.text}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
