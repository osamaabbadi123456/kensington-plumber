import {
  ArrowRight,
  Camera,
  Droplets,
  Heater,
  MapPin,
  MessageCircle,
  ShieldCheck,
  ShowerHead,
  Toilet,
} from "lucide-react";
import { getWhatsAppUrl } from "../_lib/whatsapp";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="site-shell hero-grid">
        <div className="hero-content">
          <div className="eyebrow"><MapPin size={16} aria-hidden="true" />Kensington plumbing enquiries</div>
          <h1>Plumbing problem in Kensington?<span> Start with what you can see.</span></h1>
          <p className="hero-lead">Tell us where the problem is, what is happening, and how urgent it feels. You can also send a photo so the enquiry is clearer from the start.</p>
          <div className="hero-actions">
            <a aria-label="Send a plumbing enquiry on WhatsApp" href={getWhatsAppUrl("Hi, I have a plumbing problem in Kensington. I can describe the issue and send a photo.")} className="primary-button" target="_blank" rel="noopener noreferrer"><MessageCircle size={19} aria-hidden="true" />Send a plumbing enquiry<ArrowRight size={18} aria-hidden="true" /></a>
            <a href="#whats-happening" className="secondary-button">Choose the problem</a>
          </div>
          <div className="hero-points">
            <div><Camera size={18} aria-hidden="true" /><span>Photos help explain the issue</span></div>
            <div><ShieldCheck size={18} aria-hidden="true" /><span>Clear local enquiry website</span></div>
          </div>
        </div>
        <div className="hero-visual" aria-label="Plumbing enquiry example">
          <div className="hero-visual-glow" />
          <div className="enquiry-card enquiry-card-main">
            <span className="card-kicker">Describe the problem</span>
            <strong>What are you seeing?</strong>
            <div className="mini-options">
              <span><Droplets size={17} aria-hidden="true" /> Water leaking</span>
              <span><Toilet size={17} aria-hidden="true" /> Toilet problem</span>
              <span><ShowerHead size={17} aria-hidden="true" /> Shower issue</span>
              <span><Heater size={17} aria-hidden="true" /> Heating problem</span>
            </div>
          </div>
          <div className="enquiry-card enquiry-card-photo"><Camera size={21} aria-hidden="true" /><div><strong>Add a photo</strong><span>Show the affected area</span></div></div>
          <div className="enquiry-card enquiry-card-location"><MapPin size={20} aria-hidden="true" /><div><strong>Kensington</strong><span>Tell us your area</span></div></div>
        </div>
      </div>
    </section>
  );
}
