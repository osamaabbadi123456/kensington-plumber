"use client";

import { useMemo, useState } from "react";
import {
  Camera,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "../_data/siteConfig";
import { getLocationOption, locationOptions } from "../_data/areaCoverage";
import { getBuilderProblemOption } from "../_data/internalLinks";
import { getWhatsAppUrl } from "../_lib/whatsapp";

type EnquiryBuilderProps = {
  variant?: "home" | "contact";
  initialLocationParam?: string | null;
  initialProblemParam?: string | null;
};

type FollowUp = {
  question: string;
  options: string[];
};

const problemOptions = [
  "Leak / water leak",
  "Burst or leaking pipe",
  "Blocked toilet",
  "Toilet flush / cistern problem",
  "Tap problem",
  "Shower problem",
  "Bathroom plumbing",
  "Radiator / heating plumbing",
  "No water / low pressure",
  "Sink / basin problem",
  "Drainage-related plumbing issue",
  "Other plumbing issue",
];

const fixtureOptions = [
  "Kitchen",
  "Bathroom",
  "Toilet",
  "Shower",
  "Basin / sink",
  "Bath",
  "Ceiling",
  "Pipework",
  "Radiator",
  "Water tank / cylinder",
  "Washing machine connection",
  "Outside tap",
  "Other",
];

const followUps: Partial<Record<(typeof problemOptions)[number], FollowUp>> = {
  "Leak / water leak": {
    question: "Is water still flowing?",
    options: ["Yes", "No", "Not sure"],
  },
  "Burst or leaking pipe": {
    question: "Is water still flowing?",
    options: ["Yes", "No", "Not sure"],
  },
  "Blocked toilet": {
    question: "What is happening?",
    options: [
      "Water rises after flushing",
      "Toilet drains slowly",
      "Toilet will not flush",
      "Other",
    ],
  },
  "Toilet flush / cistern problem": {
    question: "What is happening?",
    options: [
      "Will not flush",
      "Keeps running",
      "Cistern not filling",
      "Leak around toilet",
      "Other",
    ],
  },
  "Tap problem": {
    question: "What is the tap doing?",
    options: [
      "Dripping",
      "Stiff / difficult to turn",
      "Leak around base",
      "Low flow from this tap",
      "Other",
    ],
  },
  "Shower problem": {
    question: "What is the shower doing?",
    options: [
      "Hot and cold",
      "Low pressure",
      "Leak",
      "Drainage issue",
      "Fitting/control issue",
      "Other",
    ],
  },
  "No water / low pressure": {
    question: "How much of the property is affected?",
    options: ["One fixture only", "Several fixtures", "Whole property", "Not sure"],
  },
  "Bathroom plumbing": {
    question: "Which bathroom fixture is most affected?",
    options: ["Basin or tap", "Toilet", "Shower", "Bath", "Other"],
  },
  "Radiator / heating plumbing": {
    question: "What are you noticing?",
    options: ["Leak", "Cold radiator", "Noise", "Pressure concern", "Other"],
  },
  "Sink / basin problem": {
    question: "What is happening?",
    options: ["Leak below", "Slow drainage", "Low flow", "Tap issue", "Other"],
  },
  "Drainage-related plumbing issue": {
    question: "What is happening?",
    options: ["Slow drainage", "Water backing up", "Odour", "Repeated blockage", "Other"],
  },
  "Other plumbing issue": {
    question: "What is the clearest symptom?",
    options: ["Leak", "Noise", "No water", "Drainage issue", "Other"],
  },
};

const urgencyOptions = [
  "Not urgent",
  "Needs attention soon",
  "Urgent / active water problem",
];

function getResolvedLocation(area: string, otherArea: string) {
  if (area !== "Other London area / postcode") {
    return area;
  }

  return otherArea.trim() || "Other London area / postcode — please confirm";
}

export default function EnquiryBuilder({ variant = "home", initialLocationParam, initialProblemParam }: EnquiryBuilderProps) {
  const [area, setArea] = useState<string>(() => getLocationOption(initialLocationParam) || "Kensington / W8");
  const [otherArea, setOtherArea] = useState("");
  const [problem, setProblem] = useState(() => variant === "contact" ? getBuilderProblemOption(initialProblemParam) : "");
  const [fixture, setFixture] = useState("");
  const [followUpAnswer, setFollowUpAnswer] = useState("");
  const [urgency, setUrgency] = useState("Needs attention soon");
  const [details, setDetails] = useState("");

  const followUp = problem ? followUps[problem as keyof typeof followUps] : undefined;
  const urgencyStep = followUp ? 5 : 4;
  const detailsStep = urgencyStep + 1;

  const message = useMemo(() => {
    const lines = [
      "Hi, I’d like to send a plumbing enquiry.",
      "",
      "Area/postcode: " + getResolvedLocation(area, otherArea),
    ];

    if (problem) lines.push("Problem: " + problem);
    if (fixture) lines.push("Room/fixture: " + fixture);
    if (followUpAnswer) lines.push("What I can see: " + followUpAnswer);
    lines.push("Urgency: " + urgency);

    if (details.trim()) {
      lines.push("", "Additional details:", details.trim());
    }

    return lines.join("\n");
  }, [area, details, fixture, followUpAnswer, otherArea, problem, urgency]);

  const emailHref = "mailto:" + siteConfig.contact.email
    + "?subject=" + encodeURIComponent("Plumbing enquiry")
    + "&body=" + encodeURIComponent(message);
  const isContact = variant === "contact";
  const sectionClassName = "enquiry-builder-section"
    + (isContact ? " enquiry-builder-contact" : "");

  return (
    <section
      className={sectionClassName}
      id={isContact ? "build-enquiry" : "enquiry-builder"}
      aria-labelledby={isContact ? "contact-enquiry-builder-title" : "enquiry-builder-title"}
    >
      <div className="site-shell enquiry-builder-layout">
        <div className="enquiry-builder-intro">
          <span className="section-kicker"><Sparkles size={15} aria-hidden="true" /> Guided enquiry</span>
          <h2 id={isContact ? "contact-enquiry-builder-title" : "enquiry-builder-title"}>
            {isContact ? "Put the key details in one message." : "Build a clearer plumbing enquiry."}
          </h2>
          <p>
            {isContact
              ? "Choose what you know, add a short note, then send the finished message by WhatsApp or email."
              : "A few useful details make it easier to explain what is happening before you send the enquiry."}
          </p>
          <div className="enquiry-builder-route-note">
            <MapPin size={20} aria-hidden="true" />
            <p>For a confirmed covered area, the enquiry can be routed to a plumbing professional covering that area. This does not confirm availability or a visit.</p>
          </div>
        </div>

        <div className="enquiry-builder-card">
          <div className="enquiry-builder-card-heading">
            <span>Step by step</span>
            <p>Share only what you can see or safely describe.</p>
          </div>

          <div className="enquiry-builder-fields">
            <label className="enquiry-field">
              <span><b>1</b> Enquiry location</span>
              <select value={area} onChange={(event) => setArea(event.target.value)}>
                {locationOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
                <small>Submitting an area does not confirm availability, a booking or a visit.</small>
            </label>

            {area === "Other London area / postcode" && (
              <label className="enquiry-field enquiry-field-full enquiry-other-location">
                <span>Other London area or postcode</span>
                <input
                  value={otherArea}
                  onChange={(event) => setOtherArea(event.target.value)}
                  placeholder="For example, an area or postcode"
                />
                <small>Coverage outside the confirmed areas is not confirmed.</small>
              </label>
            )}

            <label className="enquiry-field">
              <span><b>2</b> Problem type</span>
              <select
                value={problem}
                onChange={(event) => {
                  setProblem(event.target.value);
                  setFollowUpAnswer("");
                }}
              >
                <option value="">Choose the closest problem</option>
                {problemOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>

            <label className="enquiry-field">
              <span><b>3</b> Room or fixture</span>
              <select value={fixture} onChange={(event) => setFixture(event.target.value)}>
                <option value="">Choose the affected area</option>
                {fixtureOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>

            {followUp && (
              <label className="enquiry-field enquiry-field-full enquiry-follow-up" key={problem}>
                <span><b>4</b> {followUp.question}</span>
                <select value={followUpAnswer} onChange={(event) => setFollowUpAnswer(event.target.value)}>
                  <option value="">Choose the closest answer</option>
                  {followUp.options.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
            )}

            <fieldset className="enquiry-field enquiry-field-full urgency-fieldset">
              <legend><b>{urgencyStep}</b> How urgent does it feel?</legend>
              <div className="urgency-options">
                {urgencyOptions.map((option) => (
                  <label className={urgency === option ? "is-selected" : ""} key={option}>
                    <input
                      checked={urgency === option}
                      name={"urgency-" + variant}
                      onChange={() => setUrgency(option)}
                      type="radio"
                      value={option}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="enquiry-field enquiry-field-full">
              <span><b>{detailsStep}</b> Additional details</span>
              <textarea
                value={details}
                onChange={(event) => setDetails(event.target.value)}
                placeholder="For example: where the water is appearing, what changed, and when it started."
                rows={4}
              />
            </label>
          </div>

          <div className="enquiry-photo-note">
            <Camera size={19} aria-hidden="true" />
            <p>A photo can help show the affected area if it is safe to take one. You can add it after WhatsApp opens; this page does not upload photos.</p>
          </div>

          <div className="enquiry-message-preview" aria-live="polite">
            <span>Your enquiry preview</span>
            <p>{message}</p>
          </div>

          <div className="enquiry-builder-actions">
            <a
              className="primary-button"
              aria-label="Send the details on WhatsApp as a structured plumbing enquiry"
              href={getWhatsAppUrl(message)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={19} aria-hidden="true" />
              Send the details on WhatsApp
              <Send size={17} aria-hidden="true" />
            </a>
            <a className="enquiry-email-link" href={emailHref}>
              <Mail size={17} aria-hidden="true" />
              Use email instead
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
