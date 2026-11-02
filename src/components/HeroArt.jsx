import { phones } from "../data/phones.js";
import PhoneImage from "./PhoneImage.jsx";

// Three overlapping phones used in the home page banner.
export default function HeroArt() {
  const [left, center, right] = [phones[3], phones[11], phones[0]];
  return (
    <div className="hero-art" aria-hidden="true">
      <PhoneImage phone={left} view="back" className="hero-p side left" />
      <PhoneImage phone={center} view="front" className="hero-p center" />
      <PhoneImage phone={right} view="back" className="hero-p side right" />
    </div>
  );
}
