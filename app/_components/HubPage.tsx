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
  destination?: "detail" | "guidance" | "enquiry";
  actionLabel?: string;
};

type HubPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  items: HubItem[];
  id?: string;
  children?: React.ReactNode;
  listTitle?: string;
  listIntro?: string;
};

const defaultActionLabels = {
  detail: "View service",
  guidance: "Read guidance",
  enquiry: "Build enquiry",
} as const;

export default function HubPage({ eyebrow, title, intro, items, id, children, listTitle, listIntro }: HubPageProps) {
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
            {listTitle && <div className="hub-list-heading"><span className="section-kicker">Choose a route</span><h2>{listTitle}</h2>{listIntro && <p>{listIntro}</p>}</div>}
            <div className="hub-card-grid">
              {items.map((item) => {
                const Icon = item.icon;
                const destination = item.destination ?? "detail";
                const content = (
                  <>
                    <span className="hub-card-icon"><Icon size={25} strokeWidth={1.8} aria-hidden="true" /></span>
                    <span className="hub-card-copy"><strong>{item.title}</strong><span>{item.description}</span><small className="hub-card-action">{item.actionLabel ?? defaultActionLabels[destination]}</small></span>
                    {item.href && <ArrowRight className="hub-card-arrow" size={19} aria-hidden="true" />}
                  </>
                );

                return item.href ? <Link className={`hub-card hub-card-${destination}`} href={item.href} key={item.title}>{content}</Link> : <div className={`hub-card hub-card-${destination}`} key={item.title}>{content}</div>;
              })}
            </div>

            {children}

            <div className="hub-enquiry-panel">
              <div>
                <span className="section-kicker">Not sure where to start?</span>
                <h2>Describe what you can see.</h2>
                <p>You can send a clear enquiry with the area, the problem and a photo if useful. The enquiry can then be routed to a plumbing professional covering a confirmed area.</p>
              </div>
              <div className="hub-enquiry-actions">
                <a className="primary-button" aria-label="Send by WhatsApp — send a plumbing enquiry on WhatsApp" href={getWhatsAppUrl("Hi, I have a plumbing problem in Kensington and would like to send an enquiry.")} target="_blank" rel="noopener noreferrer"><MessageCircle size={19} aria-hidden="true" /> Send by WhatsApp</a>
                <Link className="hub-contact-link" href="/contact">Contact details</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
