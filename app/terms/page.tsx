import type { Metadata } from "next";
import LegalPage from "../_components/LegalPage";

export const metadata: Metadata = {
  title: "Website Terms",
  description: "Terms for using this plumbing information and enquiry-routing website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms for using this website."
      intro="These terms describe the current role of this information and enquiry-routing website. They do not create a plumbing-service contract."
    >
      <section>
        <h2>Website role</h2>
        <p>This website provides general plumbing information and a route for sending an enquiry. It is not represented as the plumbing contractor completing any work.</p>
      </section>
      <section>
        <h2>Enquiries are not bookings</h2>
        <p>Sending an enquiry does not guarantee acceptance, availability, attendance, a response time, a visit or a completed job. Any provider arrangement is confirmed separately.</p>
      </section>
      <section>
        <h2>Prices and work scope</h2>
        <p>Prices are not currently published on this website. Any price, work scope, timing or arrangement must be agreed separately with the relevant provider.</p>
      </section>
      <section>
        <h2>Information and urgent danger</h2>
        <p>The information on this website is general guidance, not emergency-service advice. Where there is immediate danger, such as a threat to life, fire, gas safety or electrical safety, contact the appropriate emergency service or relevant authority.</p>
      </section>
      <section>
        <h2>Changes</h2>
        <p>These terms may be updated when the website&apos;s model or published information changes.</p>
      </section>
    </LegalPage>
  );
}
