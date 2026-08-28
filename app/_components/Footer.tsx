import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "../_data/siteConfig";
import { getWhatsAppUrl } from "../_lib/whatsapp";
import BrandMark from "./BrandMark";

const resourceLinks = [
  { label: "Plumbing advice", href: "/plumbing-advice" },
  { label: "Plumbing glossary", href: "/plumbing-glossary" },
  { label: "Plumbing problems", href: "/plumbing-problems" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
];

export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="site-shell site-footer-grid">
        <div className="site-footer-brand">
          <Link href="/" className="site-footer-brand-link" aria-label="Plumber Kensington home">
            <BrandMark size={40} />
            <strong>{siteConfig.name}</strong>
          </Link>
          <p>A local plumbing enquiry website for Kensington/W8 and confirmed nearby covered areas. Send the details and an enquiry can be routed to a plumbing professional covering the selected area.</p>
        </div>

        <nav aria-label="Footer navigation">
          <h2>Explore</h2>
          <ul>
            {siteConfig.navigation.map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer resources">
          <h2>Resources</h2>
          <ul>
            {resourceLinks.map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal information">
          <h2>Legal</h2>
          <ul>
            {legalLinks.map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </nav>

        <div className="site-footer-contact">
          <h2>Contact</h2>
          <a
            href={getWhatsAppUrl("Hi, I have a plumbing problem in Kensington and would like to send an enquiry.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp enquiry — send a plumbing enquiry on WhatsApp"
          >
            <MessageCircle size={18} aria-hidden="true" />
            WhatsApp enquiry
          </a>
          <a href={`mailto:${siteConfig.contact.email}`} aria-label={`Email ${siteConfig.contact.email}`}>
            <Mail size={18} aria-hidden="true" />
            {siteConfig.contact.email}
          </a>
        </div>
      </div>
      <div className="site-shell site-footer-bottom">
        <small>&copy; {new Date().getFullYear()} Plumber Kensington</small>
        <small>Local plumbing enquiries for Kensington/W8 and confirmed covered areas.</small>
      </div>
    </footer>
  );
}
