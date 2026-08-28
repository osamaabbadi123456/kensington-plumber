import VisualAsset from "./VisualAsset";

export default function HomeEnquiryVisual() {
  return (
    <section className="home-enquiry-visual-section" aria-labelledby="enquiry-visual-title">
      <div className="site-shell home-enquiry-visual-grid">
        <div>
          <span className="section-kicker">A clearer first message</span>
          <h2 id="enquiry-visual-title">You do not need to know the technical name.</h2>
          <p>
            Start with the room, the fixture and what you can see. A photo can help when it is safe to take one.
          </p>
        </div>
        <VisualAsset
          alt="Illustrated steps for describing a plumbing enquiry: room, fixture, symptom, photo and enquiry"
          name="home-enquiry-process"
        />
      </div>
    </section>
  );
}
