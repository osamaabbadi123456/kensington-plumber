import type { Metadata } from "next";
import { Camera, ClipboardList, MapPin, MessageCircleQuestion, PhoneCall } from "lucide-react";
import Header from "../../_components/Header";
import { EnquiryCTA, RelatedLinks, ServiceBreadcrumbs, ServiceSection } from "../../_components/ServicePrimitives";
import { AdvicePageStructuredData } from "../../_components/StructuredData";

export const metadata: Metadata = {
  title: "What Details to Send for a Plumbing Enquiry",
  description: "A simple checklist for location, fixture, photos and contact preferences so a Kensington plumbing enquiry is clearer.",
  alternates: { canonical: "/plumbing-advice/what-details-to-send-for-a-plumbing-enquiry" },
};

export default function PlumbingEnquiryDetailsPage() {
  return (
    <>
      <Header />
      <AdvicePageStructuredData
        name="What details to send for a plumbing enquiry"
        description="A simple checklist for location, fixture, photos and contact preferences so a Kensington plumbing enquiry is clearer."
        path="/plumbing-advice/what-details-to-send-for-a-plumbing-enquiry"
      />
      <main className="service-detail advice-detail">
        <section className="service-hero service-hero-cream">
          <div className="site-shell">
            <ServiceBreadcrumbs current="What details to send" />
            <div className="service-hero-grid">
              <div>
                <span className="service-icon-large">
                  <ClipboardList size={30} aria-hidden="true" />
                </span>
                <span className="section-kicker">Advice</span>
                <h1>What details should you send for a plumbing enquiry?</h1>
                <p>
                  A short message with the room, the fixture, what changed and a photo is usually enough.
                  You do not need to write a long explanation or know the plumbing term first.
                </p>
              </div>
              <div className="service-hero-note">
                <MessageCircleQuestion size={22} aria-hidden="true" />
                <span>If the problem feels urgent, say what is happening and where. Avoid overexplaining and keep the first message factual.</span>
              </div>
            </div>
          </div>
        </section>

        <ServiceSection eyebrow="The useful basics" title="Include these five details" className="service-section-light">
          <div className="details-grid">
            <div>
              <MapPin size={24} aria-hidden="true" />
              <h3>Room and area</h3>
              <p>Name the room, the floor if relevant and whether you are in Kensington or W8.</p>
            </div>
            <div>
              <ClipboardList size={24} aria-hidden="true" />
              <h3>Fixture affected</h3>
              <p>Say whether it is a toilet, tap, shower, sink, bath or pipework issue.</p>
            </div>
            <div>
              <MessageCircleQuestion size={24} aria-hidden="true" />
              <h3>What changed</h3>
              <p>Explain whether it started suddenly, got worse or only happens at certain times.</p>
            </div>
            <div>
              <Camera size={24} aria-hidden="true" />
              <h3>Photos</h3>
              <p>Include a wide shot of the area and one close photo if the fitting or leak is visible.</p>
            </div>
            <div>
              <PhoneCall size={24} aria-hidden="true" />
              <h3>Contact preference</h3>
              <p>Say whether you would like WhatsApp or email, and include the best number or address to use.</p>
            </div>
          </div>
        </ServiceSection>

        <ServiceSection eyebrow="A simple structure" title="A short message is enough" className="service-section-dark">
          <div className="step-columns">
            <div>
              <span className="step-number">01</span>
              <h3>Start with the issue</h3>
              <p>For example: toilet will not flush, water is leaking under the sink, or a shower keeps changing temperature.</p>
            </div>
            <div>
              <span className="step-number">02</span>
              <h3>Add the location</h3>
              <p>Give the room, floor or nearby landmark so the enquiry can be understood quickly.</p>
            </div>
            <div>
              <span className="step-number">03</span>
              <h3>Include one useful detail</h3>
              <p>A photo, a note about what changed, or whether the water is spreading can be enough to make the message clearer.</p>
            </div>
          </div>
        </ServiceSection>

        <ServiceSection eyebrow="Related routes" title="Where to go after this">
          <RelatedLinks
            links={[
              {
                href: "/services",
                label: "Services",
                description: "Browse the current plumbing service categories.",
              },
              {
                href: "/plumbing-problems",
                label: "Plumbing problems",
                description: "Choose a symptom-led starting point if that is easier.",
              },
              {
                href: "/plumbing-advice/blocked-toilet-or-broken-flush",
                label: "Blocked toilet or broken flush",
                description: "A guide for toilet-specific enquiry wording.",
              },
            ]}
          />
        </ServiceSection>

        <EnquiryCTA
          heading="Send the enquiry when the details are ready."
          detail="A clear location, one photo and a short description are usually enough to start the conversation."
          message="Hi, I want to send a plumbing enquiry in Kensington. The issue is..."
        />
      </main>
    </>
  );
}
