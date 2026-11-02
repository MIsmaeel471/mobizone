import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { useCart } from "../context/CartContext.jsx";
import { formatPrice } from "../data/phones.js";
import { isPkPhone } from "../utils/validators.js";
import { FREE_SHIPPING_OVER, SHIPPING_FEE } from "./Cart.jsx";

export default function Checkout() {
  const { user } = useAuth();
  const { cart, dispatch, subtotal } = useCart();
  const [form, setForm] = useState({
    name: user.name,
    phone: user.phone || "",
    address: "",
    city: "",
    payment: "cod",
  });
  const [errors, setErrors] = useState({});
  const [order, setOrder] = useState(null);

  const shipping = subtotal >= FREE_SHIPPING_OVER ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: undefined });
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = {};
    if (form.name.trim().length < 3) e.name = "Enter your full name";
    if (!isPkPhone(form.phone)) e.phone = "Enter a valid number, e.g. 0300-1234567";
    if (form.address.trim().length < 8) e.address = "Enter your full delivery address";
    if (!form.city.trim()) e.city = "City is required";
    setErrors(e);
    if (Object.keys(e).length) return;
    setOrder({
      id: "MZ" + Math.floor(100000 + Math.random() * 900000),
      total,
      name: form.name,
    });
    dispatch({ type: "CLEAR" });
  };

  if (order) {
    return (
      <div className="auth-card success">
        <h2>🎉 Order placed!</h2>
        <p>Thank you, {order.name}.</p>
        <p>Order number: <strong>{order.id}</strong></p>
        <p>Total: <strong>{formatPrice(order.total)}</strong></p>
        <p className="muted">A confirmation will be sent to {user.email}.</p>
        <Link to="/phones" className="btn">Continue Shopping</Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="empty">
        <h2>Nothing to checkout</h2>
        <Link to="/phones" className="btn">Browse phones</Link>
      </div>
    );
  }

  return (
    <>
      <h2 className="section-title">Checkout</h2>
      <div className="cart-layout">
        <form className="form" onSubmit={submit} noValidate>
          <div className="field">
            <label htmlFor="name">Full Name</label>
            <input id="name" name="name" value={form.name} onChange={change} />
            {errors.name && <small className="error">{errors.name}</small>}
          </div>
          <div className="field">
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" value={form.phone} onChange={change} />
            {errors.phone && <small className="error">{errors.phone}</small>}
          </div>
          <div className="field">
            <label htmlFor="address">Delivery Address</label>
            <input id="address" name="address" value={form.address} onChange={change} />
            {errors.address && <small className="error">{errors.address}</small>}
          </div>
          <div className="field">
            <label htmlFor="city">City</label>
            <input id="city" name="city" value={form.city} onChange={change} />
            {errors.city && <small className="error">{errors.city}</small>}
          </div>
          <div className="field">
            <label htmlFor="payment">Payment Method</label>
            <select id="payment" name="payment" value={form.payment} onChange={change}>
              <option value="cod">Cash on Delivery</option>
              <option value="bank">Bank Transfer</option>
              <option value="card">Credit / Debit Card (demo)</option>
            </select>
          </div>
          <button className="btn block" type="submit">Place Order</button>
        </form>

        <aside className="summary">
          <h3>Your Order</h3>
          {cart.map((i) => (
            <div className="row" key={i.id}>
              <span>{i.name} × {i.qty}</span>
              <span>{formatPrice(i.price * i.qty)}</span>
            </div>
          ))}
          <hr />
          <div className="row"><span>Delivery</span><span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span></div>
          <div className="row total"><span>Total</span><span>{formatPrice(total)}</span></div>
        </aside>
      </div>
    </>
  );
}
