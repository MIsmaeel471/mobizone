import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PhoneCard from "../components/PhoneCard.jsx";
import { phones, brands, ramOptions } from "../data/phones.js";

export default function Phones() {
  const [params, setParams] = useSearchParams();
  const brand = params.get("brand") || "All";
  const [ram, setRam] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [maxPrice, setMaxPrice] = useState(400000);

  const setBrand = (b) => {
    if (b === "All") setParams({});
    else setParams({ brand: b });
  };

  const list = useMemo(() => {
    let l = phones.filter(
      (p) =>
        (brand === "All" || p.brand === brand) &&
        (ram === "All" || p.ram === ram) &&
        p.price <= maxPrice &&
        `${p.brand} ${p.name}`.toLowerCase().includes(search.toLowerCase())
    );
    if (sort === "low") l = [...l].sort((a, b) => a.price - b.price);
    if (sort === "high") l = [...l].sort((a, b) => b.price - a.price);
    if (sort === "rating") l = [...l].sort((a, b) => b.rating - a.rating);
    return l;
  }, [brand, ram, search, sort, maxPrice]);

  return (
    <>
      <h2 className="section-title">All Phones</h2>

      <div className="chips">
        {["All", ...brands].map((b) => (
          <button key={b} className={`chip ${brand === b ? "active" : ""}`} onClick={() => setBrand(b)}>
            {b}
          </button>
        ))}
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search phones..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={ram} onChange={(e) => setRam(e.target.value)}>
          {ramOptions.map((r) => (
            <option key={r} value={r}>{r === "All" ? "Any RAM" : r + " RAM"}</option>
          ))}
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="default">Sort: Default</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      <div className="range">
        <label htmlFor="price">
          Max price: <strong>PKR {maxPrice.toLocaleString("en-PK")}</strong>
        </label>
        <input
          id="price"
          type="range"
          min="30000"
          max="400000"
          step="5000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </div>

      {list.length === 0 ? (
        <p className="empty">No phones match your filters.</p>
      ) : (
        <div className="grid">
          {list.map((p) => (
            <PhoneCard key={p.id} phone={p} />
          ))}
        </div>
      )}
    </>
  );
}
