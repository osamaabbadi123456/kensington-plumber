import type { Metadata } from "next";
import { AlertTriangle, ArrowDownToLine, Toilet, Wrench } from "lucide-react";
import Header from "../../_components/Header";
import ContentReviewed from "../../_components/ContentReviewed";
import { EnquiryCTA, RelatedLinks, ServiceBreadcrumbs, ServiceSection } from "../../_components/ServicePrimitives";
import { AdvicePageStructuredData } from "../../_components/StructuredData";
import { getAdviceContentFreshness } from "../../_data/contentFreshness";

const pagePath = "/plumbing-advice/blocked-toilet-or-broken-flush";
const contentFreshness = getAdviceContentFreshness(pagePath);

export const metadata: Metadata = {
  title: "Blocked Toilet or Broken Flush?",
  description: "Compare rising water and slow clearing with flush and cistern faults, then choose the most useful next step for a toilet problem.",
  alternates: { canonical: "/plumbing-advice/blocked-toilet-or-broken-flush" },
};

export default function BlockedToiletOrBrokenFlushAdvicePage() {
  return (
    <>
      <Header />
      <AdvicePageStructuredData
        name="Blocked toilet or broken flush"
        description="Advice for telling a toilet blockage from a flush or cistern fault before you send an enquiry in Kensington or W8."
        path={pagePath}
        dateModified={contentFreshness.reviewedAt}
      />
      <main className="service-detail advice-detail">
        <section className="service-hero service-hero-burgundy">
          <div className="site-shell">
            <ServiceBreadcrumbs current="Blocked toilet or broken flush" />
            <div className="service-hero-grid">
              <div>
                <span className="service-icon-large">
                  <Toilet size={30} aria-hidden="true" />
                </span>
                <span className="section-kicker">Advice</span>
                <ContentReviewed reviewedAt={contentFreshness.reviewedAt} />
                <h1>Blocked toilet or broken flush?</h1>
                <p>
                  If the water rises and does not clear, start with a blockage. If the cistern, button,
                  handle or refill behaviour is the problem, it is more likely to be a toilet fault.
                </p>
              </div>
              <div className="service-hero-note">
                <AlertTriangle size={22} aria-hidden="true" />
                <span>Only use the signs you can see. If you are unsure, describe the symptoms instead of forcing more flushes.</span>
              </div>
            </div>
          </div>
        </section>

        <ServiceSection eyebrow="The key difference" title="What the toilet is doing" className="repair-compare-section">
          <div className="repair-compare">
            <div>
              <span className="repair-compare-icon">
                <ArrowDownToLine size={22} aria-hidden="true" />
              </span>
              <h3>Likely blocked</h3>
              <p>The pan fills, drains slowly or does not clear after flushing. The issue sounds like waste is not moving away properly.</p>
              <ul>
                <li>Water rises in the pan</li>
                <li>The level drops slowly, if at all</li>
                <li>The same blockage keeps returning</li>
              </ul>
            </div>
            <div>
              <span className="repair-compare-icon">
                <Wrench size={22} aria-hidden="true" />
              </span>
              <h3>Likely broken flush</h3>
              <p>The cistern, button or handle does not release or refill in the normal way, even when the pan itself is not blocked.</p>
              <ul>
                <li>The flush does nothing</li>
                <li>The cistern keeps running</li>
                <li>Water enters the pan but the flush feels weak or incomplete</li>
              </ul>
            </div>
          </div>
        </ServiceSection>

        <ServiceSection eyebrow="Before you send the enquiry" title="What not to keep doing" className="service-section-warning">
          <div className="warning-list">
            <div>
              <Toilet size={21} aria-hidden="true" />
              <p>Do not keep flushing if the water is already rising or near the rim.</p>
            </div>
            <div>
              <AlertTriangle size={21} aria-hidden="true" />
              <p>Do not force the handle or button repeatedly if the cistern is clearly not behaving normally.</p>
            </div>
            <div>
              <Wrench size={21} aria-hidden="true" />
              <p>Do not assume every toilet fault is a blockage. Saying what you can see helps narrow the right starting point.</p>
            </div>
          </div>
        </ServiceSection>

        <ServiceSection eyebrow="Useful next reading" title="Useful next steps">
          <RelatedLinks
            pagePath={pagePath}
            links={[]}
          />
        </ServiceSection>

        <EnquiryCTA
          pagePath={pagePath}
          heading="Send the toilet details."
          detail="Say whether the pan is rising, the cistern is running, or the flush button or handle is not working as expected."
          message="Hi, I have a toilet problem in Kensington. It looks like..."
        />
      </main>
    </>
  );
}
