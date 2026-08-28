import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import { coveredAreas, getAreaLearningHref } from "../_data/areaCoverage";

type AreaCoverageSectionProps = {
  variant?: "home" | "hub";
};

export default function AreaCoverageSection({ variant = "home" }: AreaCoverageSectionProps) {
  const isHome = variant === "home";

  return (
    <section className={`area-coverage-section area-coverage-${variant}`} aria-labelledby={`area-coverage-${variant}-title`}>
      <div className="site-shell">
        <div className="area-coverage-heading">
          <div className="section-heading">
            <span className="section-kicker">Confirmed coverage</span>
            <h2 id={`area-coverage-${variant}-title`}>
              {isHome ? "Areas we cover." : "Areas confirmed for plumbing enquiries."}
            </h2>
            <p>
              {isHome
                ? "Kensington/W8 is the primary local focus. Choose a nearby confirmed area to see its useful service and symptom routes first."
                : "Kensington/W8 remains the primary local focus. Each nearby confirmed area has one distinct learning route."}
            </p>
          </div>
          {isHome && <Link className="view-all-link" href="/areas">View all covered areas <ArrowRight size={18} aria-hidden="true" /></Link>}
        </div>

        <div className="area-coverage-grid">
          {coveredAreas.map((area) => (
            <Link className="area-coverage-card" href={getAreaLearningHref(area.key)} key={area.key}>
              <span className="area-coverage-icon"><MapPin size={22} aria-hidden="true" /></span>
              <span className="area-coverage-copy">
                <strong>{area.label}</strong>
                <small>{isHome ? area.detail : `${area.detail} Postcode context: ${area.postcode}`}</small>
              </span>
              <span className="area-coverage-action">{area.pagePath ? "View area" : "Current area"}</span><ArrowRight className="area-coverage-arrow" size={19} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
