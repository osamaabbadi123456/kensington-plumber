import { BookOpenCheck, CalendarCheck } from "lucide-react";
import Link from "next/link";

export default function HomeResourcePath() {
  return (
    <section className="home-resource-path" aria-labelledby="resource-path-title">
      <div className="site-shell">
        <div className="home-resource-path-intro">
          <span className="section-kicker">Keep exploring</span>
          <h2 id="resource-path-title">Useful next steps, without the guesswork.</h2>
          <p className="home-resource-status">Cost guidance research is in progress; no public price guide is published yet.</p>
        </div>
        <div className="home-resource-path-grid">
          <Link href="/plumbing-advice">
            <BookOpenCheck size={22} aria-hidden="true" />
            <span>
              <strong>Plumbing advice</strong>
              <small>Read clear, symptom-led guides before sending the details.</small>
            </span>
          </Link>
          <Link href="/plumbing-glossary">
            <BookOpenCheck size={22} aria-hidden="true" />
            <span>
              <strong>Plumbing glossary</strong>
              <small>Plain-English explanations of terms that can help when describing a fixture or symptom.</small>
            </span>
          </Link>
          <Link href="#recent-guides-title">
            <CalendarCheck size={22} aria-hidden="true" />
            <span>
              <strong>Recently reviewed guides</strong>
              <small>Return to the practical guides that have a visible review date.</small>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
