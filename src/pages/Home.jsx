import { Link } from "react-router-dom";
import PhoneCard from "../components/PhoneCard.jsx";
import PhoneImage from "../components/PhoneImage.jsx";
import HeroArt from "../components/HeroArt.jsx";
import { brands, brandInfo, phones } from "../data/phones.js";

export default function Home() {
  const featured = [...phones].sort((a, b) => b.rating - a.rating).slice(0, 4);
  return (
    <>
      <section className="hero">
        <div>
          <span className="pill">Latest smartphones in one place</span>
          <h1>Find the phone that fits you.</h1>
          <p>
            Shop Vivo, Oppo, Infinix, iPhone and Tecno. Compare specs, add to
            cart and order in minutes.
          </p>
          <div className="hero-actions">
            <Link to="/phones" className="btn">Shop Phones</Link>
            <Link to="/register" className="btn ghost">Create Account</Link>
          </div>
        </div>
        <HeroArt />
      </section>

      <section>
        <h2 className="section-title">Shop by Brand</h2>
        <div className="brand-grid">
          {brands.map((b) => {
            const sample = phones.find((p) => p.brand === b);
            return (
              <Link
                key={b}
                to={`/phones?brand=${b}`}
                className="brand-card"
                style={{ borderTopColor: brandInfo[b].color }}
              >
                <div className="brand-img" style={{ background: sample.color }}>
                  <PhoneImage phone={sample} view="front" />
                </div>
                <h3>{b}</h3>
                <p>{brandInfo[b].tagline}</p>
                <small>{phones.filter((p) => p.brand === b).length} phones</small>
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="section-title">Top Rated</h2>
        <div className="grid">
          {featured.map((p) => (
            <PhoneCard key={p.id} phone={p} />
          ))}
        </div>
      </section>

      <section className="features">
        <div><span>🛡️</span><h4>Official Warranty</h4><p>1-year brand warranty</p></div>
        <div><span>🚚</span><h4>Free Delivery</h4><p>On orders over PKR 50,000</p></div>
        <div><span>🔄</span><h4>7-Day Replacement</h4><p>If the phone has a fault</p></div>
      </section>
    </>
  );
}
