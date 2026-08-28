import Link from "next/link";
import {
  ArrowRight,
  CircleHelp,
  Droplets,
  ShowerHead,
  Toilet,
} from "lucide-react";
import { getContactProblemHref } from "../_data/internalLinks";

const problems = [
  {
    title: "Water coming through the ceiling",
    text: "A ceiling stain, drip or water appearing below another room.",
    href: "/plumbing-problems/water-coming-through-ceiling",
    icon: Droplets,
  },
  {
    title: "Toilet will not flush",
    text: "A flush, button, handle or cistern problem that is not mainly a blockage.",
    href: "/plumbing-problems/toilet-wont-flush",
    icon: Toilet,
  },
  {
    title: "Toilet keeps running",
    text: "A cistern that continues filling or water running into the pan.",
    href: "/plumbing-problems/toilet-keeps-running",
    icon: Toilet,
  },
  {
    title: "Shower going hot and cold",
    text: "A shower temperature change with pressure, flow or fitting symptoms.",
    href: "/plumbing-problems/shower-going-hot-and-cold",
    icon: ShowerHead,
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
            Each card opens a dedicated problem page. You do not need to know the plumbing term — choose the closest visible symptom.
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
                  <span className="problem-card-action">View problem</span>
                </div>
                <ArrowRight className="problem-card-arrow" size={19} aria-hidden="true" />
              </Link>
            );
          })}
        </div>
        <Link className="problem-enquiry-card" href={getContactProblemHref("other")}>
          <CircleHelp size={25} aria-hidden="true" />
          <span><strong>Not sure what to call it?</strong><small>You do not need to diagnose the fault before you build an enquiry.</small></span>
          <em>Build enquiry</em><ArrowRight size={19} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
