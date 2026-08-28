import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "../_lib/whatsapp";
import { getContextualLinks, getEnquiryBuilderHref } from "../_data/internalLinks";
import { BreadcrumbStructuredData } from "./StructuredData";

const breadcrumbPaths: Record<string, string> = {
  "Emergency plumber": "/services/emergency-plumber",
  "Leak repair": "/services/leak-repair",
  "Blocked toilet": "/services/blocked-toilet",
  "Toilet repair": "/services/toilet-repair",
  "Tap repair": "/services/tap-repair",
  "Bathroom plumbing": "/services/bathroom-plumbing",
  "Shower repair": "/services/shower-repair",
  "Water coming through the ceiling": "/plumbing-problems/water-coming-through-ceiling",
  "Toilet will not flush": "/plumbing-problems/toilet-wont-flush",
  "Toilet keeps running": "/plumbing-problems/toilet-keeps-running",
  "Shower going hot and cold": "/plumbing-problems/shower-going-hot-and-cold",
  "Blocked toilet or broken flush": "/plumbing-advice/blocked-toilet-or-broken-flush",
  "What details to send": "/plumbing-advice/what-details-to-send-for-a-plumbing-enquiry",
};

export function ServiceBreadcrumbs({
  current,
  currentPath,
  section,
}: {
  current: string;
  currentPath?: string;
  section?: { label: string; href: string };
}) {
  const resolvedCurrentPath = currentPath ?? breadcrumbPaths[current] ?? section?.href ?? "/services";
  const resolvedSection = section ?? (resolvedCurrentPath.startsWith("/plumbing-problems/")
    ? { label: "Plumbing problems", href: "/plumbing-problems" }
    : resolvedCurrentPath.startsWith("/plumbing-advice/")
      ? { label: "Plumbing advice", href: "/plumbing-advice" }
      : { label: "Services", href: "/services" });

  return (
    <>
      <nav className="service-breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span aria-hidden="true">/</span>
        <Link href={resolvedSection.href}>{resolvedSection.label}</Link><span aria-hidden="true">/</span>
        <span aria-current="page">{current}</span>
      </nav>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", path: "/" },
          { name: resolvedSection.label, path: resolvedSection.href },
          { name: current, path: resolvedCurrentPath },
        ]}
      />
    </>
  );
}

export function ServiceSection({
  eyebrow,
  title,
  children,
  className = "",
  id,
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return <section className={`service-section ${className}`} id={id}><div className="site-shell">{eyebrow && <span className="section-kicker">{eyebrow}</span>}<h2>{title}</h2>{children}</div></section>;
}

export function EnquiryCTA({ heading, detail, message, pagePath }: { heading: string; detail: string; message: string; pagePath: string }) {
  return <section className="service-cta"><div className="site-shell service-cta-inner"><div><span className="section-kicker">Ready to send the details?</span><h2>{heading}</h2><p>{detail}</p><p className="service-cta-routing">Send the details and the enquiry can be routed to a plumbing professional covering a confirmed area.</p></div><div className="service-cta-actions"><a className="primary-button" aria-label="Send the details on WhatsApp" href={getWhatsAppUrl(message)} target="_blank" rel="noopener noreferrer"><MessageCircle size={19} aria-hidden="true" /> Send the details <ArrowRight size={18} aria-hidden="true" /></a><Link className="service-cta-builder" href={getEnquiryBuilderHref(pagePath)}>Build a guided enquiry</Link><Link className="service-cta-contact" href="/contact">Email or contact details</Link></div></div></section>;
}

export function RelatedLinks({ links, pagePath }: { links: Array<{ href: string; label: string; description: string }>; pagePath?: string }) {
  const resolvedLinks = pagePath ? getContextualLinks(pagePath) : links;

  return <div className="related-links">{resolvedLinks.map((link) => <Link href={link.href} className="related-link" key={link.href}><span><strong>{link.label}</strong><small>{link.description}</small></span><ArrowRight size={18} aria-hidden="true" /></Link>)}</div>;
}
