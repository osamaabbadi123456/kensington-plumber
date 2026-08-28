import type { Metadata } from "next";
import { CircleHelp, MapPin, MessageCircle, Wrench } from "lucide-react";
import Link from "next/link";
import AreaCoverageSection from "../_components/AreaCoverageSection";
import Header from "../_components/Header";

export const metadata: Metadata = {
  title: "Covered Areas for Plumbing Enquiries",
  description: "Plumbing enquiries across Kensington/W8 and confirmed nearby areas including South Kensington, West Kensington, Earl's Court, Notting Hill and Holland Park.",
  alternates: { canonical: "/areas" },
};

export default function AreasPage() {
  return (
    <>
      <Header />
      <main className="areas-page">
        <section className="areas-hero">
          <div className="site-shell areas-hero-grid">
            <div>
              <span className="section-kicker">Confirmed coverage</span>
              <h1>Choose a covered area for your plumbing enquiry.</h1>
              <p>Kensington/W8 remains the primary local focus. The six nearby confirmed areas below have their own learning routes, so you can choose a useful service or symptom page before sending the details.</p>
            </div>
            <div className="areas-hero-note">
              <MapPin size={25} aria-hidden="true" />
              <p>An area route is not a claim of a local office, confirmed availability or a booking. It simply helps make the enquiry clearer.</p>
            </div>
          </div>
        </section>

        <AreaCoverageSection variant="hub" />

        <section className="areas-route-section">
          <div className="site-shell areas-route-grid">
            <Link className="hub-card" href="/services">
              <span className="hub-card-icon"><Wrench size={25} aria-hidden="true" /></span>
              <span className="hub-card-copy"><strong>Choose a service</strong><span>Browse the current routes for leaks, toilets, taps, bathrooms, showers and urgent plumbing situations.</span></span>
            </Link>
            <Link className="hub-card" href="/plumbing-problems">
              <span className="hub-card-icon"><CircleHelp size={25} aria-hidden="true" /></span>
              <span className="hub-card-copy"><strong>Start with the symptom</strong><span>If the service name is unclear, choose the closest visible problem before you send the details.</span></span>
            </Link>
          </div>
        </section>

        <section className="areas-builder-section">
          <div className="site-shell areas-builder-panel">
            <div><span className="section-kicker">Ready to send the details?</span><h2>Build a plumbing enquiry.</h2><p>You do not need to know the technical name. Add the area, room, fixture and visible symptom, then choose WhatsApp or email.</p></div>
            <Link className="primary-button" href="/contact#build-enquiry"><MessageCircle size={19} aria-hidden="true" />Build enquiry</Link>
          </div>
        </section>
      </main>
    </>
  );
}
