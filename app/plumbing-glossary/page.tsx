import type { Metadata } from "next";
import { ArrowUpRight, BookOpenCheck, Droplets, Gauge, Pipette, Thermometer, Toilet, Wrench } from "lucide-react";
import Link from "next/link";
import ContentReviewed from "../_components/ContentReviewed";
import { BreadcrumbStructuredData, WebPageStructuredData } from "../_components/StructuredData";
import Header from "../_components/Header";
import { getGlossaryContentFreshness } from "../_data/contentFreshness";

const pagePath = "/plumbing-glossary";
const contentFreshness = getGlossaryContentFreshness(pagePath);

export const metadata: Metadata = {
  title: "Plumbing Glossary: Plain-English Terms",
  description: "Plain-English explanations of plumbing terms such as stop tap, cistern, trap and isolation valve, with useful enquiry routes.",
  alternates: { canonical: "/plumbing-glossary" },
};

type GlossaryTerm = {
  term: string;
  definition: string;
  context: string;
  href: string;
  routeLabel: string;
};

const groups: Array<{ title: string; icon: typeof Droplets; terms: GlossaryTerm[] }> = [
  {
    title: "Water controls and pipework",
    icon: Wrench,
    terms: [
      { term: "Stopcock / stop tap", definition: "The main valve that controls water entering a property.", context: "You may see it near where the supply enters, sometimes below a sink, in a cupboard or near a meter.", href: "/services/leak-repair", routeLabel: "Leak repair" },
      { term: "Isolation valve", definition: "A small valve that can turn off water to one fitting or appliance.", context: "It may be on pipework serving a toilet, tap or washing-machine connection.", href: "/services/tap-repair", routeLabel: "Tap repair" },
      { term: "Flexi hose", definition: "A flexible connector between pipework and a fitting or appliance.", context: "It is often found below taps, toilets and washing-machine connections.", href: "/services/leak-repair", routeLabel: "Leak repair" },
      { term: "Compression fitting", definition: "A pipe connector tightened around a pipe with a nut and ring.", context: "It can appear on visible copper or plastic pipework, often near valves or earlier repairs.", href: "/services/leak-repair", routeLabel: "Leak repair" },
    ],
  },
  {
    title: "Toilet and bathroom terms",
    icon: Toilet,
    terms: [
      { term: "Cistern", definition: "The tank that stores water for a toilet flush.", context: "It may sit behind, above or inside the toilet.", href: "/services/toilet-repair", routeLabel: "Toilet repair" },
      { term: "Ball valve / fill valve", definition: "A cistern part that controls water refilling after a flush.", context: "It is found inside the toilet cistern and can be relevant when water keeps running or refilling sounds unusual.", href: "/plumbing-problems/toilet-keeps-running", routeLabel: "Toilet keeps running" },
      { term: "Overflow", definition: "A route for excess water when a cistern or tank keeps filling beyond its normal level.", context: "It may be visible at a toilet cistern, tank or an external overflow pipe.", href: "/plumbing-problems/toilet-keeps-running", routeLabel: "Toilet keeps running" },
      { term: "Mixer tap", definition: "A tap that mixes hot and cold water through one spout or control.", context: "It is common at kitchen and bathroom basins, and on some baths.", href: "/services/tap-repair", routeLabel: "Tap repair" },
    ],
  },
  {
    title: "Waste and drainage terms",
    icon: Pipette,
    terms: [
      { term: "Trap", definition: "A curved section of waste pipe that holds water to help prevent smells returning into a room.", context: "You may see one beneath a basin, sink, bath or shower waste.", href: "/services/bathroom-plumbing", routeLabel: "Bathroom plumbing" },
      { term: "Waste pipe", definition: "Pipework that carries used water away from a basin, bath, shower or appliance.", context: "It can be visible below sinks, baths, showers and appliance connections.", href: "/services/bathroom-plumbing", routeLabel: "Bathroom plumbing" },
      { term: "Soil pipe", definition: "The larger pipe that carries toilet waste away from a property.", context: "It may run behind a toilet or along an external wall.", href: "/services/blocked-toilet", routeLabel: "Blocked toilet" },
    ],
  },
  {
    title: "Radiator terms",
    icon: Thermometer,
    terms: [
      { term: "Radiator valve", definition: "A valve that controls water flow into or out of a radiator.", context: "It is usually found at the lower side of a radiator.", href: "/services", routeLabel: "Services" },
      { term: "TRV", definition: "A thermostatic radiator valve: a radiator control with a temperature setting.", context: "It is fitted on one side of many radiators and is normally marked with numbers or symbols.", href: "/services", routeLabel: "Services" },
    ],
  },
];

export default function PlumbingGlossaryPage() {
  return (
    <>
      <Header />
      <WebPageStructuredData
        name="Plumbing glossary"
        description="Plain-English explanations of common plumbing terms, with useful links for Kensington plumbing enquiries."
        path={pagePath}
        dateModified={contentFreshness.reviewedAt}
      />
      <BreadcrumbStructuredData items={[{ name: "Home", path: "/" }, { name: "Plumbing glossary", path: pagePath }]} />
      <main className="glossary-page">
        <section className="glossary-hero">
          <div className="site-shell">
            <nav className="service-breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Plumbing glossary</span>
            </nav>
            <span className="section-kicker">Plain-English plumbing terms</span>
            <h1>Plumbing terms, explained simply.</h1>
            <p>Use these short definitions when a fitting, pipe or toilet part is mentioned in an enquiry. They are for clearer descriptions, not DIY repair instructions.</p>
            <ContentReviewed reviewedAt={contentFreshness.reviewedAt} />
          </div>
        </section>

        <section className="glossary-content">
          <div className="site-shell">
            <div className="glossary-intro">
              <BookOpenCheck size={25} aria-hidden="true" />
              <p>Choose the closest term, then use the linked route if it matches what you can see. A photo can also help explain the fitting or symptom.</p>
            </div>

            {groups.map((group) => {
              const Icon = group.icon;

              return (
                <section className="glossary-group" key={group.title} aria-labelledby={group.title.toLowerCase().replaceAll(" ", "-")}>
                  <div className="glossary-group-heading">
                    <span><Icon size={22} aria-hidden="true" /></span>
                    <h2 id={group.title.toLowerCase().replaceAll(" ", "-")}>{group.title}</h2>
                  </div>
                  <div className="glossary-grid">
                    {group.terms.map((item) => (
                      <article className="glossary-card" key={item.term}>
                        <h3>{item.term}</h3>
                        <p>{item.definition}</p>
                        <small>{item.context}</small>
                        <Link href={item.href}>
                          Explore {item.routeLabel}
                          <ArrowUpRight size={16} aria-hidden="true" />
                        </Link>
                      </article>
                    ))}
                  </div>
                </section>
              );
            })}

            <section className="glossary-enquiry-panel">
              <Gauge size={25} aria-hidden="true" />
              <div>
                <h2>Still not sure which term fits?</h2>
                <p>Describe the room, fixture and visible change instead. You do not need to name a part correctly to send a useful plumbing enquiry.</p>
              </div>
              <Link href="/contact#build-enquiry">Build a guided enquiry <ArrowUpRight size={17} aria-hidden="true" /></Link>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
