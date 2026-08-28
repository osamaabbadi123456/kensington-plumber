import type { Metadata } from "next";
import { Camera, Droplets, Gauge, Heater, MapPin, Thermometer, Wrench } from "lucide-react";
import Header from "../../_components/Header";
import { EnquiryCTA, RelatedLinks, ServiceBreadcrumbs, ServiceSection } from "../../_components/ServicePrimitives";
import { ServiceStructuredData } from "../../_components/StructuredData";

export const metadata: Metadata = {
  title: "Radiator & Heating Plumbing Kensington",
  description: "Radiator leak, valve, pipework or uneven-heating symptom in Kensington? Describe what you can see and send the room and fitting details.",
  alternates: { canonical: "/services/radiator-heating" },
};

export default function RadiatorHeatingPage() {
  return (
    <>
      <Header />
      <ServiceStructuredData
        name="Radiator and heating plumbing"
        description="A route for radiator leaks, visible valves, heating pipework and uneven radiator symptoms in Kensington."
        path="/services/radiator-heating"
      />
      <main className="service-detail radiator-heating-service">
        <section className="service-hero service-hero-cream">
          <div className="site-shell">
            <ServiceBreadcrumbs current="Radiator and heating plumbing" currentPath="/services/radiator-heating" />
            <div className="radiator-hero-layout">
              <div>
                <span className="service-icon-large"><Heater size={30} aria-hidden="true" /></span>
                <span className="section-kicker">Radiator and heating plumbing</span>
                <h1 id="radiator-heating">What is happening at the radiator or visible pipework?</h1>
                <p>Start with what you can see or feel: water at a radiator or valve, a cold area, uneven warmth, noise, or pipework nearby. Describe the symptom without assuming the cause.</p>
              </div>
              <div className="radiator-hero-prompt" aria-label="Useful radiator details">
                <span>Room</span><span>Radiator or valve</span><span>Visible change</span>
              </div>
            </div>
          </div>
        </section>

        <ServiceSection eyebrow="Choose the clearest symptom" title="What can you see or notice?" className="service-section-light">
          <div className="radiator-symptom-grid">
            <article><Droplets size={24} aria-hidden="true" /><h3>Leak at a radiator or valve</h3><p>Water is visible at the panel, valve, pipe connection or nearby floor.</p></article>
            <article><Thermometer size={24} aria-hidden="true" /><h3>Uneven warmth</h3><p>Part of one radiator feels cooler than the rest, or it does not seem to warm evenly.</p></article>
            <article><Gauge size={24} aria-hidden="true" /><h3>Heating only seems affected in one room</h3><p>Describe whether the issue is limited to one radiator or appears across several rooms.</p></article>
            <article><Wrench size={24} aria-hidden="true" /><h3>Visible valve or pipework concern</h3><p>A valve, connection or nearby pipe looks wet, loose, damaged or different from usual.</p></article>
          </div>
        </ServiceSection>

        <section className="radiator-decision-section">
          <div className="site-shell radiator-decision-layout">
            <div>
              <span className="section-kicker">A useful first distinction</span>
              <h2>One radiator, or more than one?</h2>
              <p>If one radiator has a visible leak, valve or uneven-warmth symptom, say which room it is in. If several radiators are affected, describe that pattern too. These observations are more useful than guessing at a system diagnosis.</p>
            </div>
            <ul>
              <li><strong>One radiator:</strong> room, valve or pipework, visible water, temperature pattern.</li>
              <li><strong>Several radiators:</strong> which rooms, whether the pattern is similar, and when it changed.</li>
            </ul>
          </div>
        </section>

        <ServiceSection eyebrow="Keep the description useful" title="What details or photos help?" className="service-section-stone">
          <div className="radiator-details-grid">
            <div><Camera size={25} aria-hidden="true" /><h3>Show the radiator in context</h3><p>If it is safe, include a wider photo of the radiator and floor, then a close photo of any visible valve, pipe connection or water.</p></div>
            <ul>
              <li>Which room and postcode area?</li>
              <li>Is there visible water, a mark, a noise or only uneven warmth?</li>
              <li>Is the issue at one radiator or more than one?</li>
              <li>When did you first notice the change?</li>
            </ul>
          </div>
        </ServiceSection>

        <ServiceSection eyebrow="Scope boundary" title="Radiator and pipework context, not gas or boiler diagnosis" className="service-section-warning">
          <p className="section-lead">This page covers user-observable radiator, valve and heating-pipework symptoms. It does not describe gas or boiler-specific diagnosis, repair, installation or certification while the relevant credentials are unverified.</p>
        </ServiceSection>

        <ServiceSection eyebrow="Useful related routes" title="Continue with the closest visible problem">
          <RelatedLinks
            links={[
              { href: "/services/leak-repair", label: "Leak repair", description: "For water at a valve, pipe connection or nearby fitting." },
              { href: "/plumbing-glossary", label: "Radiator terms", description: "See radiator valve and TRV explained in plain English." },
              { href: "/plumbing-advice/what-details-to-send-for-a-plumbing-enquiry", label: "What details to send", description: "Use a short checklist for room, fixture, timing and photos." },
            ]}
          />
        </ServiceSection>

        <section className="service-context">
          <div className="site-shell"><MapPin size={23} aria-hidden="true" /><div><span className="section-kicker">Kensington and nearby confirmed areas</span><h2>Start with the room, radiator and visible symptom.</h2><p>A postcode, room and clear description help make a radiator or heating-pipework request easier to understand.</p></div></div>
        </section>

        <EnquiryCTA pagePath="/services/radiator-heating" heading="Send the radiator or pipework details." detail="Share the room, radiator or valve, visible symptom and a safe photo if useful." message="Hi, I have a radiator or heating pipework problem in Kensington. The issue is..." />
      </main>
    </>
  );
}
