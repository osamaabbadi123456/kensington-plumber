"use client";

import { useSearchParams } from "next/navigation";
import EnquiryBuilder from "./EnquiryBuilder";

export default function ContactEnquiryBuilder() {
  const searchParams = useSearchParams();

  return (
    <EnquiryBuilder
      variant="contact"
      initialLocationParam={searchParams.get("location")}
      initialProblemParam={searchParams.get("problem")}
    />
  );
}
