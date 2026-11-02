import { Link } from "react-router-dom";
import { phones } from "../data/phones.js";
import PhoneImage from "../components/PhoneImage.jsx";

export default function NotFound() {
  return (
    <div className="empty">
      <div className="empty-art">
        <PhoneImage phone={phones[8]} view="front" />
      </div>
      <h2>404 — No signal here</h2>
      <Link to="/" className="btn">Go Home</Link>
    </div>
  );
}
