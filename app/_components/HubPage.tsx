import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "../_lib/whatsapp";
import Header from "./Header";

type HubItem = {
  title: string;
  description: string;
  href?: string;
  icon: LucideIcon;
};

type HubPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  items: HubItem[];
  id?: string;
};

export default function HubPage({ eyebrow, title, intro, items, id }: HubPageProps) {
  return (
    <>
      <Header />
      <main className="hub-page">
        <section className="hub-hero">
          <div className="site-shell">
            <span className="section-kicker">{eyebrow}</span>
            <h1>{title}</h1>
            <p>{intro}</p>
          </div>
        </section>

        <section className="hub-list-section" id={id}>
          <div className="site-shell">
            <div className="hub-card-grid">
              {items.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <span className="hub-card-icon"><Icon size={25} strokeWidth={1.8} aria-hidden="true" /></span>
                    <span className="hub-card-copy"><strong>{item.title}</strong><span>{item.description}</span></span>
                    {item.href && <ArrowRight className="hub-card-arrow" size={19} aria-hidden="true" />}
                  </>
                );

                return item.href ? <Link className="hub-card" href={item.href} key={item.title}>{content}</Link> : <div className="hub-card" key={item.title}>{content}</div>;
              })}
            </div>

            <div className="hub-enquiry-panel">
              <div>
                <span className="section-kicker">Not sure where to start?</span>
                <h2>Describe what you can see.</h2>
                <p>You can send a clear enquiry with the area, the problem and a photo if useful. The enquiry can then be routed to a plumbing professional covering Kensington/W8.</p>
              </div>
              <div className="hub-enquiry-actions">
                <a className="primary-button" aria-label="Send a plumbing enquiry on WhatsApp" href={getWhatsAppUrl("Hi, I have a plumbing problem in Kensington and would like to send an enquiry.")} target="_blank" rel="noopener noreferrer"><MessageCircle size={19} aria-hidden="true" /> Send a plumbing enquiry</a>
                <Link className="hub-contact-link" href="/contact">Contact details</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
