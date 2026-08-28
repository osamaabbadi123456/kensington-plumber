import type { Metadata } from "next";
import AreaPage from "../../_components/AreaPage";
import { areaPages } from "../../_data/areaPages";

export const metadata: Metadata = {
  title: "Plumber in Earl's Court",
  description: "For an Earl's Court plumbing enquiry, use safety-first ceiling-water, leak and toilet routes, then send the room and location details.",
  alternates: { canonical: "/areas/earls-court" },
};

export default function EarlsCourtPage() { return <AreaPage area={areaPages["earls-court"]} />; }
