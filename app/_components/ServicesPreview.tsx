import Link from "next/link";
import {
  ArrowUpRight,
  Bath,
  Droplets,
  Heater,
  ShowerHead,
  Toilet,
  Wrench,
} from "lucide-react";

const services = [
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
    title: "Pipe Repair",
    description:
      "For damaged, leaking or noisy pipework and related plumbing issues.",
    href: "/services#service-list",
    icon: Wrench,
  },
  {
    title: "Heating Plumbing",
    description:
      "For radiator, pressure and other water-based heating plumbing enquiries.",
    href: "/services#service-list",
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

            <h2>Know what service you need?</h2>

            <p>
              Browse common plumbing enquiry types, or start with the problem
              you are seeing if you are unsure.
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
