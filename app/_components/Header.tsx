import Link from "next/link";
import { siteConfig } from "../_data/siteConfig";
import { getWhatsAppUrl } from "../_lib/whatsapp";
import BrandMark, { BrandWordmark } from "./BrandMark";
import MobileNav from "./MobileNav";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <Link href="/" className="brand" aria-label="Plumber Kensington home">
          <BrandMark />
          <BrandWordmark />
          <span className="brand-copy">
            <strong>Plumber Kensington</strong>
            <span>Local plumbing enquiries</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {siteConfig.navigation.slice(1).map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          className="header-cta"
          aria-label="WhatsApp enquiry — send a plumbing enquiry on WhatsApp"
          href={getWhatsAppUrl(
            "Hi, I have a plumbing problem in Kensington and would like to send an enquiry.",
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="whatsapp-icon-badge">
            <WhatsAppIcon size={18} />
          </span>

          <span className="header-cta-label">WhatsApp enquiry</span>
        </a>

        <MobileNav />
      </div>
    </header>
  );
}
