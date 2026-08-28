import Link from "next/link";
import Header from "./Header";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
};

export default function LegalPage({ eyebrow, title, intro, children }: LegalPageProps) {
  return (
    <>
      <Header />
      <main className="legal-page">
        <section className="legal-hero">
          <div className="site-shell">
            <span className="section-kicker">{eyebrow}</span>
            <h1>{title}</h1>
            <p>{intro}</p>
          </div>
        </section>
        <section className="legal-content-section">
          <div className="site-shell legal-content">
            {children}
            <p className="legal-contact-note">Questions about this website can be sent through the <Link href="/contact">contact page</Link>.</p>
          </div>
        </section>
      </main>
    </>
  );
}
