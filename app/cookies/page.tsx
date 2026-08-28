import type { Metadata } from "next";
import LegalPage from "../_components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Information",
  description: "Cookie information for the current Plumber Kensington website, which has no analytics or advertising scripts.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Cookies"
      title="Cookie information."
      intro="This page describes the current website application. It does not describe the separate policies of communication providers, browsers or hosting services."
    >
      <section>
        <h2>No non-essential cookies set by this website</h2>
        <p>The current application does not include analytics, advertising or marketing scripts, and it does not set non-essential cookies for those purposes.</p>
      </section>
      <section>
        <h2>Technically necessary behaviour</h2>
        <p>The site may rely on ordinary browser and hosting behaviour needed to deliver pages and keep the site working. No additional cookie categories are claimed here because none are configured in the application.</p>
      </section>
      <section>
        <h2>Third-party services</h2>
        <p>If you open WhatsApp or email from this website, those services operate separately and may use their own technologies and policies.</p>
      </section>
      <section>
        <h2>Cookie banner</h2>
        <p>No cookie banner is shown because the current application does not use non-essential analytics or advertising cookies. This will be reviewed before any such technology is added.</p>
      </section>
    </LegalPage>
  );
}
