import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { formatPrice, phones } from "../data/phones.js";
import PhoneImage from "../components/PhoneImage.jsx";

export const FREE_SHIPPING_OVER = 50000;
export const SHIPPING_FEE = 500;

export default function Cart() {
  const { cart, dispatch, subtotal } = useCart();
  const shipping = subtotal >= FREE_SHIPPING_OVER ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="empty">
        <div className="empty-art">
          <PhoneImage phone={phones[11]} view="front" />
        </div>
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added any phones yet.</p>
        <Link to="/phones" className="btn">Start Shopping</Link>
      </div>
    );
  }

  return (
    <>
      <h2 className="section-title">Shopping Cart</h2>
      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => {
            const phone = phones.find((p) => p.id === item.id);
            return (
              <div className="cart-item" key={item.id}>
                <div className="thumb" style={{ background: item.color }}>
                  <PhoneImage phone={phone} view="front" />
                </div>
                <div className="cart-info">
                  <Link to={`/phones/${item.id}`}>{item.brand} {item.name}</Link>
                  <small>{formatPrice(item.price)} each</small>
                </div>
                <div className="qty">
                  <button onClick={() => dispatch({ type: "SET_QTY", id: item.id, qty: item.qty - 1 })}>−</button>
                  <span>{item.qty}</span>
                  <button onClick={() => dispatch({ type: "SET_QTY", id: item.id, qty: item.qty + 1 })}>+</button>
                </div>
                <strong>{formatPrice(item.price * item.qty)}</strong>
                <button
                  className="remove"
                  onClick={() => dispatch({ type: "REMOVE", id: item.id })}
                  aria-label={`Remove ${item.name}`}
                >
                  ✕
                </button>
              </div>
            );
          })}
          <button className="link-btn" onClick={() => dispatch({ type: "CLEAR" })}>
            Clear cart
          </button>
        </div>

        <aside className="summary">
          <h3>Order Summary</h3>
          <div className="row"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
          <div className="row"><span>Delivery</span><span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span></div>
          <hr />
          <div className="row total"><span>Total</span><span>{formatPrice(total)}</span></div>
          <Link to="/checkout" className="btn block">Proceed to Checkout</Link>
        </aside>
      </div>
    </>
  );
}
