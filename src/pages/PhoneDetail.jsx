import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { phones, formatPrice } from "../data/phones.js";
import { useCart } from "../context/CartContext.jsx";
import PhoneCard from "../components/PhoneCard.jsx";
import PhoneImage from "../components/PhoneImage.jsx";

export default function PhoneDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const phone = phones.find((p) => p.id === Number(id));

  if (!phone) {
    return (
      <div className="empty">
        <p>Phone not found.</p>
        <Link to="/phones" className="btn">Back to phones</Link>
      </div>
    );
  }

  const similar = phones.filter((p) => p.brand === phone.brand && p.id !== phone.id);

  const add = () => {
    dispatch({ type: "ADD", item: phone, qty });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const specs = [
    ["Brand", phone.brand],
    ["RAM / Storage", `${phone.ram} / ${phone.storage}`],
    ["Display", phone.display],
    ["Camera", phone.camera],
    ["Battery", phone.battery],
    ["Operating system", phone.os],
    ["Rating", `${phone.rating} / 5`],
  ];

  return (
    <>
      <div className="detail">
        <div className="detail-img" style={{ background: phone.color }}>
          <PhoneImage phone={phone} />
        </div>
        <div className="detail-info">
          <span className="tag">{phone.brand} · {phone.os}</span>
          <h1>{phone.brand} {phone.name}</h1>
          <p className="price">{formatPrice(phone.price)}</p>
          <p>{phone.description}</p>

          <table className="spec-table">
            <tbody>
              {specs.map(([k, v]) => (
                <tr key={k}>
                  <th>{k}</th>
                  <td>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="qty-row">
            <label>Quantity</label>
            <div className="qty">
              <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>
          </div>

          <div className="actions">
            <button className="btn" onClick={add}>{added ? "✓ Added!" : "Add to Cart"}</button>
            <button
              className="btn outline"
              onClick={() => {
                dispatch({ type: "ADD", item: phone, qty });
                navigate("/cart");
              }}
            >
              Buy Now
            </button>
          </div>
          <Link to="/phones" className="back">← Back to all phones</Link>
        </div>
      </div>

      {similar.length > 0 && (
        <section style={{ marginTop: 40 }}>
          <h2 className="section-title">More from {phone.brand}</h2>
          <div className="grid">
            {similar.map((p) => (
              <PhoneCard key={p.id} phone={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
