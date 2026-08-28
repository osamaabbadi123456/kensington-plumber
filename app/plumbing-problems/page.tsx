import type { Metadata } from "next";
import { CircleHelp, Droplets, Gauge, ShowerHead, Toilet, WashingMachine, Wrench } from "lucide-react";
import Link from "next/link";
import HubPage from "../_components/HubPage";
import { getContactProblemHref } from "../_data/internalLinks";

export const metadata: Metadata = {
  title: "Plumbing Problems Kensington | Find the Right Next Step",
  description: "See a leak, toilet fault, blocked toilet or shower problem in Kensington? Start with the symptom and choose a useful next step.",
  alternates: { canonical: "/plumbing-problems" },
};

export default function PlumbingProblemsPage() {
  return <HubPage eyebrow="Start with the symptom" title="What is happening?" intro="You do not need to know the plumbing term. Start with the closest visible problem, then use the guidance below if no dedicated page is an exact match." id="problem-list" listTitle="Start with the problem you can see" listIntro="These four cards lead to dedicated symptom pages. Other symptoms use clear guidance routes or the guided enquiry builder." items={[
    { title: "Water coming through the ceiling", description: "A ceiling stain, drip or water appearing below another room.", href: "/plumbing-problems/water-coming-through-ceiling", icon: Droplets, actionLabel: "View problem" },
    { title: "Toilet will not flush", description: "A flush, handle, button or cistern symptom that is not mainly a blockage.", href: "/plumbing-problems/toilet-wont-flush", icon: Toilet, actionLabel: "View problem" },
    { title: "Toilet keeps running", description: "A cistern that continues filling or water running into the pan.", href: "/plumbing-problems/toilet-keeps-running", icon: Toilet, actionLabel: "View problem" },
    { title: "Shower going hot and cold", description: "A shower temperature change with pressure, flow or fitting symptoms.", href: "/plumbing-problems/shower-going-hot-and-cold", icon: ShowerHead, actionLabel: "View problem" },
  ]}>
    <div className="hub-depth-section" id="water-pressure">
      <div className="hub-depth-heading"><span className="section-kicker">Other symptoms</span><h2>Use a short guidance route, or build an enquiry.</h2><p>This site cannot diagnose a supply cause from a webpage. The distinctions below help you send clearer details and choose an existing route where one fits.</p></div>
      <div className="hub-depth-grid hub-decision-grid">
        <article><Link className="hub-depth-card hub-depth-guidance" href="/plumbing-problems#water-pressure"><Gauge size={24} aria-hidden="true" /><h3>Water pressure or low flow</h3><p>Compare one weak fitting with a wider supply concern. Do not assume the cause; say which fixtures are affected and when it started.</p><span>Read guidance</span></Link></article>
        <article><Link className="hub-depth-card hub-depth-detail" href="/services/tap-repair"><WashingMachine size={24} aria-hidden="true" /><h3>Tap issue</h3><p>A single kitchen or basin tap that drips, leaks, feels stiff or has weak flow belongs with Tap Repair.</p><span>View service</span></Link></article>
        <article><Link className="hub-depth-card hub-depth-guidance" href="/services/leak-repair#pipework"><Wrench size={24} aria-hidden="true" /><h3>Pipework leak</h3><p>Use the Leak Repair pipework guide for an exposed joint, valve, flexi connection or visible fitting leak.</p><span>Read guidance</span></Link></article>
        <article><Link className="hub-depth-card hub-depth-guidance" href="/services/bathroom-plumbing#basin-sink"><WashingMachine size={24} aria-hidden="true" /><h3>Basin or sink issue</h3><p>Visible water at a basin, trap, tap connection or nearby pipework belongs with the bathroom fixture guide.</p><span>Read guidance</span></Link></article>
        <article><Link className="hub-depth-card hub-depth-enquiry" href={getContactProblemHref("other")}><CircleHelp size={24} aria-hidden="true" /><h3>Not sure what to call it?</h3><p>You do not need to diagnose the fault. Describe what you can see and build an enquiry.</p><span>Build enquiry</span></Link></article>
      </div>
    </div>
  </HubPage>;
}
