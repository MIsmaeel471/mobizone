import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { formatPrice } from "../data/phones.js";
import PhoneImage from "./PhoneImage.jsx";

export default function PhoneCard({ phone }) {
  const { dispatch } = useCart();
  return (
    <div className="card">
      <Link to={`/phones/${phone.id}`}>
        <div className="card-img" style={{ background: phone.color }}>
          <PhoneImage phone={phone} />
        </div>
      </Link>
      <div className="card-body">
        <span className="tag">{phone.brand} · {phone.os}</span>
        <Link to={`/phones/${phone.id}`} className="card-title">
          {phone.brand} {phone.name}
        </Link>
        <div className="specs">
          <span>💾 {phone.ram} / {phone.storage}</span>
          <span>🔋 {phone.battery}</span>
        </div>
        <div className="rating">⭐ {phone.rating}</div>
        <div className="card-footer">
          <strong>{formatPrice(phone.price)}</strong>
          <button className="btn small" onClick={() => dispatch({ type: "ADD", item: phone })}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
