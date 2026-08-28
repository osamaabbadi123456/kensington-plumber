import type { Metadata } from "next";
import { Suspense } from "react";
import { Camera, Clock3, Mail, MapPin, MessageCircle, Wrench } from "lucide-react";
import Link from "next/link";
import Header from "../_components/Header";
import ContactEnquiryBuilder from "../_components/ContactEnquiryBuilder";
import EnquiryBuilder from "../_components/EnquiryBuilder";
import { siteConfig } from "../_data/siteConfig";
import { getWhatsAppUrl } from "../_lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact for Plumbing Enquiries",
  description: "Send a plumbing enquiry by WhatsApp or email for Kensington/W8 and confirmed nearby covered areas.",
  alternates: { canonical: "/contact" },
};

const enquiryDetails = [
  { title: "Area or postcode", detail: "Choose a confirmed covered area or include the relevant postcode where it helps.", icon: MapPin },
  { title: "Room or fixture", detail: "Name the room and the toilet, tap, shower, basin, bath or pipework involved.", icon: Wrench },
  { title: "What is happening", detail: "Describe the leak, blockage, flush fault, noise or temperature change you can see.", icon: MessageCircle },
  { title: "When it started", detail: "Say whether it began suddenly, is getting worse or only happens when something is used.", icon: Clock3 },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="contact-page">
        <section className="contact-hero">
          <div className="site-shell contact-hero-grid">
            <div>
              <span className="section-kicker">Contact</span>
              <h1>Send a clear plumbing enquiry.</h1>
              <p>Tell us what is happening in a confirmed covered area, and include a photo if it helps show the affected area. You can use WhatsApp or email to send the details.</p>
            </div>
            <div className="contact-routing-note">
              <MessageCircle size={24} aria-hidden="true" />
              <div>
                <strong>How the enquiry is handled</strong>
                <p>Send the details and the enquiry can be routed to a plumbing professional covering the selected confirmed area. This does not confirm availability or a visit.</p>
              </div>
            </div>
          </div>
        </section>

        <Suspense fallback={<EnquiryBuilder variant="contact" />}>
          <ContactEnquiryBuilder />
        </Suspense>

        <section className="contact-methods-section">
          <div className="site-shell contact-methods-grid">
            <a
              className="contact-method-card contact-whatsapp-card"
              aria-label="Describe the problem on WhatsApp — send a plumbing enquiry on WhatsApp"
              href={getWhatsAppUrl("Hi, I have a plumbing problem in Kensington. The area or postcode is...")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={28} aria-hidden="true" />
              <span className="section-kicker">WhatsApp</span>
              <h2>Describe the problem on WhatsApp.</h2>
              <p>Send the room, fixture, visible symptom and a useful photo if it is safe to take one.</p>
              <strong>WhatsApp: {siteConfig.contact.whatsapp.display}</strong>
            </a>
            <a className="contact-method-card" aria-label={`Email ${siteConfig.contact.email}`} href={`mailto:${siteConfig.contact.email}`}>
              <Mail size={28} aria-hidden="true" />
              <span className="section-kicker">Email</span>
              <h2>Send the details by email.</h2>
              <p>Use email if that is easier for you. Include the same short description and any helpful photo.</p>
              <strong>{siteConfig.contact.email}</strong>
            </a>
          </div>
        </section>

        <section className="contact-details-section">
          <div className="site-shell">
            <span className="section-kicker">What to include</span>
            <h2>Five details make an enquiry easier to understand.</h2>
            <div className="contact-details-grid">
              {enquiryDetails.map(({ title, detail, icon: Icon }) => (
                <article className="contact-detail-card" key={title}>
                  <Icon size={23} aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </article>
              ))}
              <article className="contact-detail-card">
                <Camera size={23} aria-hidden="true" />
                <h3>Photo if useful</h3>
                <p>A photo can help show the fitting, leak or surrounding area from a safe position.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="contact-next-steps">
          <div className="site-shell contact-next-steps-inner">
            <div>
              <span className="section-kicker">Need a starting point?</span>
              <h2>Choose a service or describe the symptom first.</h2>
              <p>You do not need to know the plumbing term before sending an enquiry.</p>
            </div>
            <div className="contact-next-links">
              <Link className="secondary-button" href="/services">Browse services</Link>
              <Link className="secondary-button" href="/plumbing-problems">Browse plumbing problems</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
