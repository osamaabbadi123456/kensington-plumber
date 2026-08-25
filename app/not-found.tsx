import Link from "next/link";
import { ArrowLeft, CircleHelp } from "lucide-react";
import Header from "./_components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="not-found-page">
        <div className="site-shell not-found-content">
          <span className="not-found-icon"><CircleHelp size={34} aria-hidden="true" /></span>
          <span className="section-kicker">Page not found</span>
          <h1>That page is not available.</h1>
          <p>Try one of these starting points for a Kensington plumbing enquiry.</p>
          <div className="not-found-links">
            <Link className="primary-button" href="/">Home</Link>
            <Link className="secondary-button" href="/services">Services</Link>
            <Link className="secondary-button" href="/plumbing-problems"><ArrowLeft size={18} aria-hidden="true" /> Plumbing problems</Link>
          </div>
        </div>
      </main>
    </>
  );
}
