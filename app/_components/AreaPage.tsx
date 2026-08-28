import { ArrowRight, CheckCircle2, MapPin, MessageCircle, Wrench } from "lucide-react";
import Link from "next/link";
import type { AreaPageDefinition, AreaRouteLink } from "../_data/areaPages";
import { getAreaEnquiryHref } from "../_data/areaCoverage";
import { getWhatsAppUrl } from "../_lib/whatsapp";
import { BreadcrumbStructuredData, WebPageStructuredData } from "./StructuredData";
import Header from "./Header";

function RouteCards({ links }: { links: AreaRouteLink[] }) {
  return <div className="area-route-cards">{links.map((link) => <Link className="area-route-card" href={link.href} key={link.href}><span><strong>{link.title}</strong><small>{link.detail}</small></span><ArrowRight size={18} aria-hidden="true" /></Link>)}</div>;
}

export default function AreaPage({ area }: { area: AreaPageDefinition }) {
  const enquiryHref = getAreaEnquiryHref(area.key);
  const services = <section className="area-detail-section area-detail-services"><div className="site-shell"><span className="section-kicker">Plumbing enquiries in {area.name}</span><h2>Choose the service route that best matches the visible issue.</h2><RouteCards links={area.services} /></div></section>;
  const problems = <section className="area-detail-section area-detail-problems"><div className="site-shell"><span className="section-kicker">Start with the symptom</span><h2>If the service name is unclear, use the closest problem.</h2><RouteCards links={area.problems} /></div></section>;
  const details = <section className="area-detail-section area-detail-details"><div className="site-shell area-detail-details-layout"><div><span className="section-kicker">Useful enquiry details</span><h2>Four details help make the route clearer.</h2><p>{area.postcodeContext}</p></div><ul>{area.details.map((detail) => <li key={detail}><CheckCircle2 size={19} aria-hidden="true" />{detail}</li>)}</ul></div></section>;
  const cta = <section className="area-detail-cta"><div className="site-shell area-detail-cta-inner"><div><span className="section-kicker">Ready to describe the problem?</span><h2>Build an enquiry with {area.name} already selected.</h2><p>You do not need to diagnose the fault. Add the room, fixture, visible symptom and a photo if it is safe and useful.</p><p>Send the details and the enquiry can be routed to a plumbing professional covering this confirmed area. This does not confirm availability or a visit.</p></div><div><Link className="primary-button" aria-label={`Build enquiry — build a plumbing enquiry for ${area.name}`} href={enquiryHref}><MessageCircle size={19} aria-hidden="true" />Build enquiry</Link><a className="area-detail-whatsapp" href={getWhatsAppUrl(`Hi, I have a plumbing problem in ${area.name} and would like to send an enquiry.`)} target="_blank" rel="noopener noreferrer" aria-label={`Send by WhatsApp — send a ${area.name} plumbing enquiry on WhatsApp`}>Send by WhatsApp <ArrowRight size={17} aria-hidden="true" /></a></div></div></section>;

  return <><Header /><WebPageStructuredData name={`Plumber in ${area.name} | Plumbing Enquiries`} description={area.intro} path={area.path} /><main className="area-detail-page">
    <BreadcrumbStructuredData items={[{ name: "Home", path: "/" }, { name: "Areas", path: "/areas" }, { name: area.name, path: area.path }]} />
    <section className="area-detail-hero"><div className="site-shell"><nav className="service-breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/areas">Areas</Link><span aria-hidden="true">/</span><span aria-current="page">{area.name}</span></nav><span className="section-kicker">Confirmed area</span><div className="area-detail-identity"><MapPin size={17} aria-hidden="true" /><span>Covered area</span><strong>{area.postcode}</strong><span>{area.name}, London</span></div><h1>Plumbing enquiries in {area.name}.</h1><p>{area.intro}</p><div className="area-detail-postcode"><MapPin size={20} aria-hidden="true" /><span>{area.postcodeContext}</span></div></div></section>
    <section className="area-detail-angle"><div className="site-shell area-detail-angle-layout"><Wrench size={26} aria-hidden="true" /><div><span className="section-kicker">A useful local starting point</span><h2>{area.angleTitle}</h2><p>{area.angle}</p></div></div></section>
    {services}{problems}{details}{cta}
    <section className="area-detail-related"><div className="site-shell"><span className="section-kicker">Nearby confirmed areas</span><h2>Continue with the area that best matches your location.</h2><div className="area-related-links">{area.relatedAreas.map((related) => <Link href={related.href} key={related.href}>{related.label}<ArrowRight size={17} aria-hidden="true" /></Link>)}</div></div></section>
  </main></>;
}
