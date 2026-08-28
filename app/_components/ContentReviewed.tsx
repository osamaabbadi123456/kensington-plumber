import { CalendarCheck } from "lucide-react";
import { formatReviewedDate } from "../_data/contentFreshness";

export default function ContentReviewed({ reviewedAt }: { reviewedAt: string }) {
  return (
    <time className="content-reviewed" dateTime={reviewedAt}>
      <CalendarCheck size={15} aria-hidden="true" />
      Last reviewed {formatReviewedDate(reviewedAt)}
    </time>
  );
}
