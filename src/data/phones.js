export const brands = ["Vivo", "Oppo", "Infinix", "iPhone", "Tecno"];

export const brandInfo = {
  Vivo: { tagline: "Camera-first phones with stylish designs.", color: "#2563eb" },
  Oppo: { tagline: "Fast charging and portrait photography.", color: "#16a34a" },
  Infinix: { tagline: "Big batteries and great value.", color: "#7c3aed" },
  iPhone: { tagline: "Premium performance with iOS.", color: "#111827" },
  Tecno: { tagline: "Affordable phones packed with features.", color: "#0891b2" },
};

export const ramOptions = ["All", "4 GB", "6 GB", "8 GB", "12 GB"];

// Prices (PKR) and specifications are sample values for demonstration only.
const basePhones = [
  { id: 1, brand: "Vivo", name: "V29", price: 119999, ram: "8 GB", storage: "256 GB", display: '6.78" AMOLED 120Hz', camera: "50 MP + 12 MP", battery: "4600 mAh", os: "Android", rating: 4.5, color: "#dbeafe", description: "A stylish camera phone with an aura-light portrait flash and a curved AMOLED display." },
  { id: 2, brand: "Vivo", name: "Y36", price: 52999, ram: "8 GB", storage: "128 GB", display: '6.64" LCD 90Hz', camera: "50 MP + 2 MP", battery: "5000 mAh", os: "Android", rating: 4.2, color: "#e0f2fe", description: "Reliable everyday phone with a large battery and 44W fast charging." },
  { id: 3, brand: "Vivo", name: "X100", price: 249999, ram: "12 GB", storage: "256 GB", display: '6.78" AMOLED 120Hz', camera: "50 MP triple", battery: "5000 mAh", os: "Android", rating: 4.8, color: "#bfdbfe", description: "Flagship photography with a professional triple camera and a fast processor." },

  { id: 4, brand: "Oppo", name: "Reno 11", price: 129999, ram: "8 GB", storage: "256 GB", display: '6.7" AMOLED 120Hz', camera: "50 MP + 32 MP", battery: "5000 mAh", os: "Android", rating: 4.5, color: "#bbf7d0", description: "Slim portrait-focused phone with a 32 MP telephoto lens and 67W fast charging." },
  { id: 5, brand: "Oppo", name: "A78", price: 59999, ram: "8 GB", storage: "128 GB", display: '6.43" AMOLED 90Hz', camera: "50 MP", battery: "5000 mAh", os: "Android", rating: 4.3, color: "#dcfce7", description: "Great-value phone with an AMOLED screen and 33W SuperVOOC charging." },
  { id: 6, brand: "Oppo", name: "Reno 10", price: 99999, ram: "8 GB", storage: "256 GB", display: '6.7" AMOLED 120Hz', camera: "64 MP triple", battery: "5000 mAh", os: "Android", rating: 4.4, color: "#a7f3d0", description: "Portrait expert with a telephoto camera and a smooth curved display." },

  { id: 7, brand: "Infinix", name: "Note 40", price: 54999, ram: "8 GB", storage: "256 GB", display: '6.78" AMOLED 120Hz', camera: "108 MP", battery: "5000 mAh", os: "Android", rating: 4.4, color: "#ddd6fe", description: "Big AMOLED display, 108 MP camera and wireless-style magnetic accessories support." },
  { id: 8, brand: "Infinix", name: "Hot 40 Pro", price: 36999, ram: "8 GB", storage: "128 GB", display: '6.78" LCD 90Hz', camera: "108 MP", battery: "5000 mAh", os: "Android", rating: 4.2, color: "#ede9fe", description: "Budget phone with a huge display and 18W fast charging." },
  { id: 9, brand: "Infinix", name: "Zero 30", price: 79999, ram: "12 GB", storage: "256 GB", display: '6.78" AMOLED 144Hz', camera: "108 MP + 50 MP", battery: "5000 mAh", os: "Android", rating: 4.4, color: "#c4b5fd", description: "Creator-friendly phone with 4K selfie video and a 144Hz curved display." },

  { id: 10, brand: "iPhone", name: "13", price: 199999, ram: "4 GB", storage: "128 GB", display: '6.1" Super Retina OLED', camera: "12 MP dual", battery: "3240 mAh", os: "iOS", rating: 4.7, color: "#e5e7eb", description: "A proven, fast iPhone with a great dual camera and long software support." },
  { id: 11, brand: "iPhone", name: "14", price: 249999, ram: "6 GB", storage: "128 GB", display: '6.1" Super Retina OLED', camera: "12 MP dual", battery: "3279 mAh", os: "iOS", rating: 4.7, color: "#f3e8ff", description: "Improved main camera, crash detection and satellite emergency features." },
  { id: 12, brand: "iPhone", name: "15 Pro", price: 399999, ram: "8 GB", storage: "256 GB", display: '6.1" Super Retina OLED 120Hz', camera: "48 MP triple", battery: "3274 mAh", os: "iOS", rating: 4.9, color: "#d1d5db", description: "Titanium design, a powerful chip and a pro-level triple camera system." },

  { id: 13, brand: "Tecno", name: "Spark 20 Pro", price: 38999, ram: "8 GB", storage: "256 GB", display: '6.78" LCD 120Hz', camera: "108 MP", battery: "5000 mAh", os: "Android", rating: 4.3, color: "#cffafe", description: "Smooth 120Hz display and a high-resolution camera at an affordable price." },
  { id: 14, brand: "Tecno", name: "Camon 30", price: 64999, ram: "8 GB", storage: "256 GB", display: '6.78" AMOLED 120Hz', camera: "50 MP", battery: "5000 mAh", os: "Android", rating: 4.4, color: "#a5f3fc", description: "Camera-focused phone with an AMOLED screen and a premium finish." },
  { id: 15, brand: "Tecno", name: "Pova 6 Pro", price: 59999, ram: "8 GB", storage: "256 GB", display: '6.78" AMOLED 120Hz', camera: "108 MP", battery: "6000 mAh", os: "Android", rating: 4.5, color: "#99f6e4", description: "Gaming-friendly phone with a 6000 mAh battery and 70W fast charging." },
];

// How each phone is drawn (used by the PhoneImage component).
// cam: tri | diag | circle | pill | quad   notch: island | punch | drop | notch
const looks = {
  1: { body: "#1e3a8a", wall: ["#60a5fa", "#7c3aed"], notch: "punch", cam: "circle" },
  2: { body: "#0f766e", wall: ["#34d399", "#0ea5e9"], notch: "drop", cam: "pill" },
  3: { body: "#111827", wall: ["#f59e0b", "#be123c"], notch: "punch", cam: "circle" },
  4: { body: "#a78bfa", wall: ["#f9a8d4", "#818cf8"], notch: "punch", cam: "pill" },
  5: { body: "#10b981", wall: ["#6ee7b7", "#0ea5e9"], notch: "drop", cam: "pill" },
  6: { body: "#0ea5e9", wall: ["#38bdf8", "#6366f1"], notch: "punch", cam: "pill" },
  7: { body: "#16a34a", wall: ["#4ade80", "#0d9488"], notch: "punch", cam: "quad" },
  8: { body: "#1e293b", wall: ["#fb923c", "#db2777"], notch: "punch", cam: "quad" },
  9: { body: "#7c3aed", wall: ["#c084fc", "#2563eb"], notch: "punch", cam: "quad" },
  10: { body: "#fb7185", wall: ["#fda4af", "#f97316"], notch: "notch", cam: "diag" },
  11: { body: "#6d28d9", wall: ["#a78bfa", "#ec4899"], notch: "island", cam: "diag" },
  12: { body: "#6b7280", wall: ["#38bdf8", "#1d4ed8"], notch: "island", cam: "tri" },
  13: { body: "#0891b2", wall: ["#22d3ee", "#2563eb"], notch: "punch", cam: "circle" },
  14: { body: "#047857", wall: ["#a3e635", "#0d9488"], notch: "punch", cam: "pill" },
  15: { body: "#ea580c", wall: ["#fbbf24", "#dc2626"], notch: "punch", cam: "circle" },
};

export const phones = basePhones.map((p) => ({ ...p, look: looks[p.id] }));

export function formatPrice(n) {
  return "PKR " + n.toLocaleString("en-PK");
}
