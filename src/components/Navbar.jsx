import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { useCart } from "../context/CartContext.jsx";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="logo" onClick={close}>
          📱 Mobi<span>Zone</span>
        </Link>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? "✕" : "☰"}
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`} onClick={close}>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/phones">Phones</NavLink>
          <NavLink to="/cart">
            🛒 Cart{totalItems > 0 && <span className="badge">{totalItems}</span>}
          </NavLink>
          {user ? (
            <>
              <span className="hello">Hi, {user.name.split(" ")[0]}</span>
              <button
                className="btn small outline"
                onClick={() => {
                  logout();
                  navigate("/");
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn small outline">Login</Link>
              <Link to="/register" className="btn small">Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
