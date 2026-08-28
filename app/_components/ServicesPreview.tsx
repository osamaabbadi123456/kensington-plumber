import Link from "next/link";
import {
  AlertTriangle,
  ArrowUpRight,
  Bath,
  Droplets,
  ShowerHead,
  Heater,
  Toilet,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Emergency Plumbing",
    description:
      "For urgent situations where water is spreading, a fitting has failed or a toilet cannot be used.",
    href: "/services/emergency-plumber",
    icon: AlertTriangle,
  },
  {
    title: "Leak Repair",
    description:
      "For visible leaks, dripping fittings and water appearing where it should not.",
    href: "/services/leak-repair",
    icon: Droplets,
  },
  {
    title: "Blocked Toilet",
    description:
      "For slow, blocked, overflowing or repeatedly troublesome toilets.",
    href: "/services/blocked-toilet",
    icon: Toilet,
  },
  {
    title: "Toilet Repair",
    description:
      "For flush, cistern, filling and running-water faults that are not primarily blockages.",
    href: "/services/toilet-repair",
    icon: Wrench,
  },
  {
    title: "Tap Repair",
    description:
      "For dripping, stiff, noisy or leaking kitchen and bathroom basin taps.",
    href: "/services/tap-repair",
    icon: Droplets,
  },
  {
    title: "Bathroom Plumbing",
    description:
      "Plumbing enquiries involving showers, basins, baths and bathroom fittings.",
    href: "/services/bathroom-plumbing",
    icon: Bath,
  },
  {
    title: "Shower Repair",
    description:
      "For shower pressure, leaks, drainage and temperature-related plumbing.",
    href: "/services/shower-repair",
    icon: ShowerHead,
  },
  {
    title: "Radiator & Heating",
    description:
      "For radiator leaks, visible valves, pipework and uneven heating symptoms.",
    href: "/services/radiator-heating",
    icon: Heater,
  },
];

export default function ServicesPreview() {
  return (
    <section className="services-preview-section">
      <div className="site-shell">
        <div className="services-heading-row">
          <div className="section-heading services-heading">
            <span className="section-kicker">Plumbing services</span>

            <h2>Choose a plumbing service.</h2>

            <p>
              Each card opens a dedicated service page. If the service name is unclear, start with the problem you can see.
            </p>
          </div>

          <Link href="/services" className="view-all-link">
            View all services
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <div className="services-preview-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                href={service.href}
                key={service.title}
                className="service-preview-card"
              >
                <div className="service-preview-icon">
                  <Icon size={27} strokeWidth={1.7} aria-hidden="true" />
                </div>

                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="service-preview-action">View service</span>
                </div>

                <span className="service-card-arrow">
                  <ArrowUpRight size={18} aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
