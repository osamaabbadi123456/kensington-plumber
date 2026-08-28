import type { Metadata } from "next";
import { Camera, Droplets, Lightbulb, TriangleAlert, Zap } from "lucide-react";
import Header from "../../_components/Header";
import ContentReviewed from "../../_components/ContentReviewed";
import { EnquiryCTA, RelatedLinks, ServiceBreadcrumbs, ServiceSection } from "../../_components/ServicePrimitives";
import { AdvicePageStructuredData } from "../../_components/StructuredData";
import { getAdviceContentFreshness } from "../../_data/contentFreshness";

const pagePath = "/plumbing-advice/what-to-do-if-water-is-coming-through-your-ceiling";
const contentFreshness = getAdviceContentFreshness(pagePath);

export const metadata: Metadata = {
  title: "Ceiling Leak | What to Do Safely",
  description: "Water coming through a ceiling? Start with safety, avoid electrical risks, note the room above and take useful photos from a safe position.",
  alternates: { canonical: "/plumbing-advice/what-to-do-if-water-is-coming-through-your-ceiling" },
};

export default function WaterThroughCeilingAdvicePage() {
  return (
    <>
      <Header />
      <AdvicePageStructuredData
        name="What to do if water is coming through your ceiling"
        description="Practical advice for a ceiling leak in Kensington or W8: what you can check safely, what to photograph and which service page to use next."
        path={pagePath}
        dateModified={contentFreshness.reviewedAt}
      />
      <main className="service-detail advice-detail">
        <section className="service-hero service-hero-cream">
          <div className="site-shell">
            <ServiceBreadcrumbs current="Water coming through the ceiling" currentPath="/plumbing-advice/what-to-do-if-water-is-coming-through-your-ceiling" />
            <div className="service-hero-grid">
              <div>
                <span className="service-icon-large">
                  <Droplets size={30} aria-hidden="true" />
                </span>
                <span className="section-kicker">Advice</span>
                <ContentReviewed reviewedAt={contentFreshness.reviewedAt} />
                <h1>What should you do if water is coming through the ceiling?</h1>
                <p>
                  Treat it as a leak first. Stay clear of electrics, note the room above if you know it,
                  take a photo of the affected area and send the details once the space is safe.
                </p>
              </div>
              <div className="service-hero-note">
                <TriangleAlert size={22} aria-hidden="true" />
                <span>Only check what you can do safely. If water is near lights, sockets or a ceiling fitting, keep away and describe the situation in your enquiry.</span>
              </div>
            </div>
          </div>
        </section>

        <ServiceSection eyebrow="What you can check safely" title="A quick safety check" className="service-section-light">
          <div className="details-grid">
            <div>
              <Zap size={24} aria-hidden="true" />
              <h3>Keep clear of electrics</h3>
              <p>If the water is close to a light, socket or electrical fitting, do not go underneath it or try to open anything up.</p>
            </div>
            <div>
              <Camera size={24} aria-hidden="true" />
              <h3>Take a clear photo</h3>
              <p>Show the stain, drip or wet patch and enough of the room for the location to make sense.</p>
            </div>
            <div>
              <Lightbulb size={24} aria-hidden="true" />
              <h3>Note the room above</h3>
              <p>If you know what room or fixture is above the ceiling, include that in the message rather than guessing the cause.</p>
            </div>
          </div>
        </ServiceSection>

        <ServiceSection eyebrow="Keep it simple" title="What to include in the first message" className="service-section-dark">
          <div className="step-columns">
            <div>
              <span className="step-number">01</span>
              <h3>Where you can see it</h3>
              <p>Name the room, ceiling area or corner where the water is appearing.</p>
            </div>
            <div>
              <span className="step-number">02</span>
              <h3>What changed</h3>
              <p>Say whether the water is constant, intermittent, spreading or newly noticed.</p>
            </div>
            <div>
              <span className="step-number">03</span>
              <h3>Whether it is safe to stay nearby</h3>
              <p>If water is near electrics or the patch is growing, say so plainly and avoid standing under it.</p>
            </div>
          </div>
        </ServiceSection>

        <ServiceSection eyebrow="Useful next reading" title="What to read next">
          <RelatedLinks
            pagePath={pagePath}
            links={[]}
          />
        </ServiceSection>

        <section className="service-context">
          <div className="site-shell">
            <Droplets size={23} aria-hidden="true" />
            <div>
              <span className="section-kicker">Kensington / W8</span>
              <h2>Send the room, the photo and the postcode area.</h2>
              <p>
                A short, factual message is usually enough. You do not need to name the hidden cause before
                you send the enquiry.
              </p>
            </div>
          </div>
        </section>

        <EnquiryCTA
          pagePath={pagePath}
          heading="Send the ceiling leak details."
          detail="Tell us where the water is showing, what room is above it if you know, and whether it is safe to remain nearby."
          message="Hi, I have water coming through the ceiling in Kensington. The water is showing..."
        />
      </main>
    </>
  );
}
