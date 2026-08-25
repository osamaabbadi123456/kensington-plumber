import type { Metadata } from "next";
import { AlertTriangle, Bath, Droplets, Heater, ShowerHead, Toilet, Wrench } from "lucide-react";
import HubPage from "../_components/HubPage";

export const metadata: Metadata = {
  title: "Plumbing Services",
  description: "Browse common plumbing enquiry types for Kensington.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <HubPage eyebrow="Plumbing services" title="Choose the service that best matches your enquiry." intro="Browse common plumbing enquiry types for Kensington and W8. If you are unsure of the service name, start with the problem you can see." id="service-list" items={[
    { title: "Emergency plumbing", description: "Urgent situations where water is spreading, a fitting has failed or a toilet cannot be used.", href: "/services/emergency-plumber", icon: AlertTriangle },
    { title: "Leak repair", description: "Visible leaks, dripping fittings and water appearing where it should not.", href: "/services/leak-repair", icon: Droplets },
    { title: "Blocked toilet", description: "Slow, blocked, overflowing or repeatedly troublesome toilets.", href: "/services/blocked-toilet", icon: Toilet },
    { title: "Toilet repair", description: "Flush, cistern, running-water, filling and toilet leaks that are not primarily blockages.", href: "/services/toilet-repair", icon: Wrench },
    { title: "Tap repair", description: "Dripping, stiff, noisy or poorly closing kitchen and bathroom basin taps.", href: "/services/tap-repair", icon: Droplets },
    { title: "Bathroom plumbing", description: "Enquiries involving basins, baths, showers, toilets and bathroom fixture plumbing.", href: "/services/bathroom-plumbing", icon: Bath },
    { title: "Shower repair", description: "Shower pressure, temperature, leaks, drainage and control-related plumbing symptoms.", href: "/services/shower-repair", icon: ShowerHead },
    { title: "Pipe repair", description: "Damaged, leaking or noisy pipework and related plumbing issues.", icon: Wrench },
    { title: "Heating plumbing", description: "Radiator, pressure and other water-based heating plumbing enquiries.", icon: Heater },
  ]} />;
}
