import { ArrowUpRight, CalendarCheck } from "lucide-react";
import Link from "next/link";
import {
  recentlyReviewedContent,
  formatReviewedDate,
} from "../_data/contentFreshness";

export default function RecentlyReviewedGuides() {
  const guides = [...recentlyReviewedContent].sort((left, right) =>
    right.reviewedAt.localeCompare(left.reviewedAt) || left.title.localeCompare(right.title),
  );

  return (
    <section className="recent-guides-section" aria-labelledby="recent-guides-title">
      <div className="site-shell">
        <div className="recent-guides-heading">
          <div className="section-heading">
            <span className="section-kicker">Useful resources</span>
            <h2 id="recent-guides-title">Recently reviewed plumbing guides.</h2>
            <p>Short, practical pages for understanding a symptom and deciding what details to send next.</p>
          </div>
          <Link className="view-all-link" href="/plumbing-advice">
            View all advice
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <div className="recent-guides-grid">
          {guides.map((guide) => (
            <Link className="recent-guide-card" href={guide.href} key={guide.href}>
              <span className="recent-guide-topic">{guide.topic}</span>
              <h3>{guide.title}</h3>
              <p>{guide.description}</p>
              <span className="recent-guide-footer">
                <time dateTime={guide.reviewedAt}>
                  <CalendarCheck size={15} aria-hidden="true" />
                  Reviewed {formatReviewedDate(guide.reviewedAt)}
                </time>
                <ArrowUpRight size={18} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
