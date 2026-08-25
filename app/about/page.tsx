import type { Metadata } from "next";
import { MessageCircle, MapPin, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { getWhatsAppUrl } from "../_lib/whatsapp";
import Header from "../_components/Header";

export const metadata: Metadata = {
  title: "About",
  description: "About the Plumber Kensington enquiry website.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <><Header /><main className="hub-page"><section className="hub-hero"><div className="site-shell"><span className="section-kicker">About this website</span><h1>A clear starting point for a local plumbing enquiry.</h1><p>Plumber Kensington is a local plumbing enquiry and lead-generation website for Kensington, London. It helps people describe what they can see and send an enquiry through WhatsApp.</p></div></section><section className="about-section"><div className="site-shell"><div className="about-grid"><div className="about-point"><MapPin size={25} aria-hidden="true" /><div><h2>Local focus</h2><p>The primary local intent is Kensington and W8.</p></div></div><div className="about-point"><ShieldCheck size={25} aria-hidden="true" /><div><h2>Clear information</h2><p>Pages use straightforward prompts rather than unverified company claims.</p></div></div><div className="about-point"><MessageCircle size={25} aria-hidden="true" /><div><h2>Simple enquiry route</h2><p>Share the problem, location and any useful photo through WhatsApp.</p></div></div></div><div className="hub-enquiry-panel"><div><span className="section-kicker">Ready to explain the issue?</span><h2>Send a plumbing enquiry.</h2><p>Send the details and the enquiry can be routed to a plumbing professional covering Kensington/W8.</p></div><div className="hub-enquiry-actions"><a className="primary-button" aria-label="Send a plumbing enquiry on WhatsApp" href={getWhatsAppUrl("Hi, I have a plumbing problem in Kensington and would like to send an enquiry.")} target="_blank" rel="noopener noreferrer"><MessageCircle size={19} aria-hidden="true" /> Send the details</a><Link className="hub-contact-link" href="/contact">Contact details</Link></div></div></div></section></main></>;
}
