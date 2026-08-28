import type { Metadata } from "next";
import AreaPage from "../../_components/AreaPage";
import { areaPages } from "../../_data/areaPages";

export const metadata: Metadata = {
  title: "Plumber in West Kensington",
  description: "For a West Kensington plumbing enquiry, compare visible pipework leaks, toilet symptoms and bathroom fixtures before sending the details.",
  alternates: { canonical: "/areas/west-kensington" },
};

export default function WestKensingtonPage() { return <AreaPage area={areaPages["west-kensington"]} />; }
