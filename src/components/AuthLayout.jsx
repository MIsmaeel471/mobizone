import { phones } from "../data/phones.js";
import PhoneImage from "./PhoneImage.jsx";

// Wraps the login / register forms with a picture panel on the side.
export default function AuthLayout({ children }) {
  return (
    <div className="auth-layout">
      <aside className="auth-art" aria-hidden="true">
        <div className="auth-phones">
          <PhoneImage phone={phones[6]} view="front" className="ap a1" />
          <PhoneImage phone={phones[10]} view="back" className="ap a2" />
        </div>
        <h3>Your next phone is a click away.</h3>
        <p>Create an account to order the latest phones with fast delivery.</p>
      </aside>
      {children}
    </div>
  );
}
