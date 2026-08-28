import type { Metadata } from "next";
import LegalPage from "../_components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Information",
  description: "How this plumbing enquiry website handles information you choose to send through WhatsApp or email.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy information for this enquiry website."
      intro="This page explains the limited information flow used by Plumber Kensington. It is not a claim about the practices of an independent plumbing professional after contact is made."
    >
      <section>
        <h2>What this website does</h2>
        <p>Plumber Kensington provides information and a way to prepare a plumbing enquiry. It does not include a website account, booking system or backend enquiry database.</p>
      </section>
      <section>
        <h2>Information you choose to send</h2>
        <p>When you use WhatsApp or email, you choose what to include, such as an area, room, fixture, visible symptom or photo. Please avoid sending unnecessary sensitive personal information.</p>
      </section>
      <section>
        <h2>WhatsApp and email</h2>
        <p>WhatsApp and email are third-party communication channels. Opening either route takes you to that provider&apos;s service or application; its own terms and privacy information apply to that communication.</p>
      </section>
      <section>
        <h2>Enquiry routing</h2>
        <p>An enquiry may be routed to a plumbing professional covering a confirmed area. Any discussion of work, availability or arrangements after that point is confirmed separately.</p>
      </section>
      <section>
        <h2>Updates</h2>
        <p>This page may be updated if the website&apos;s enquiry flow or data handling changes. No fixed retention period is stated here because none has been confirmed.</p>
      </section>
    </LegalPage>
  );
}
