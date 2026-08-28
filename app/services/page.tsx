import type { Metadata } from "next";
import { AlertTriangle, Bath, Droplets, Heater, ShowerHead, Toilet, Wrench } from "lucide-react";
import HubPage from "../_components/HubPage";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plumbing Services Kensington | Leaks, Toilets, Taps & More",
  description: "Explore help for leaks, toilets, taps, bathrooms, showers and radiator pipework in Kensington. Choose the route that best fits the problem.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <HubPage eyebrow="Plumbing services" title="Choose the service that best matches your enquiry." intro="Browse the existing plumbing service routes for Kensington and W8. If the service name is unclear, start with the problem you can see." id="service-list" listTitle="Plumbing services" listIntro="Each card leads to a dedicated service page. The smaller guidance routes below help with related symptoms without pretending they are separate services." items={[
    { title: "Emergency plumbing", description: "Urgent situations where water is spreading, a fitting has failed or a toilet cannot be used.", href: "/services/emergency-plumber", icon: AlertTriangle, actionLabel: "View service" },
    { title: "Leak repair", description: "Visible leaks, dripping fittings and water appearing where it should not.", href: "/services/leak-repair", icon: Droplets, actionLabel: "View service" },
    { title: "Blocked toilet", description: "Slow, blocked, overflowing or repeatedly troublesome toilets.", href: "/services/blocked-toilet", icon: Toilet, actionLabel: "View service" },
    { title: "Toilet repair", description: "Flush, cistern, running-water, filling and toilet leaks that are not primarily blockages.", href: "/services/toilet-repair", icon: Wrench, actionLabel: "View service" },
    { title: "Tap repair", description: "Dripping, stiff, noisy or poorly closing kitchen and bathroom basin taps.", href: "/services/tap-repair", icon: Droplets, actionLabel: "View service" },
    { title: "Bathroom plumbing", description: "Enquiries involving basins, baths, showers, toilets and bathroom fixture plumbing.", href: "/services/bathroom-plumbing", icon: Bath, actionLabel: "View service" },
    { title: "Shower repair", description: "Shower pressure, temperature, leaks, drainage and control-related plumbing symptoms.", href: "/services/shower-repair", icon: ShowerHead, actionLabel: "View service" },
    { title: "Radiator and heating plumbing", description: "Radiator leaks, valves, pipework and uneven heating symptoms, without boiler or gas claims.", href: "/services/radiator-heating", icon: Heater, actionLabel: "View service" },
  ]}>
    <div className="hub-depth-section">
      <div className="hub-depth-heading"><span className="section-kicker">Other plumbing enquiry types</span><h2>Useful routes where a standalone page would add little.</h2><p>These sections help describe the visible problem before you build an enquiry. They do not widen the site into unconfirmed boiler, gas, commercial or tank work.</p></div>
      <div className="hub-depth-grid">
        <article id="pipework"><Link className="hub-depth-card hub-depth-guidance" href="/services/leak-repair#pipework"><Wrench size={24} aria-hidden="true" /><h3>Pipework and visible fittings</h3><p>For an exposed pipe, leaking joint, flexi connection, isolation-valve area or under-sink pipework, start with Leak Repair&apos;s pipework section. State where the water appears and what is nearby.</p><span>Read guidance</span></Link></article>
        <article id="basin-sink"><Link className="hub-depth-card hub-depth-guidance" href="/services/bathroom-plumbing#basin-sink"><Bath size={24} aria-hidden="true" /><h3>Basin or sink plumbing</h3><p>Visible water under a basin, at the trap, around a tap connection or beside a waste pipe belongs with the bathroom fixture context. No drain-unblocking claim is implied.</p><span>Read guidance</span></Link></article>
      </div>
    </div>
  </HubPage>;
}
