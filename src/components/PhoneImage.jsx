import { useId, useState } from "react";

// Lighten (amt > 0) or darken (amt < 0) a #rrggbb colour.
function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  const target = amt < 0 ? 0 : 255;
  const p = Math.abs(amt);
  const mix = (c) => Math.round(c + (target - c) * p);
  return (
    "#" +
    [mix(n >> 16), mix((n >> 8) & 255), mix(n & 255)]
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("")
  );
}

const W = 108;
const H = 226;

function Lens({ cx, cy, r = 8 }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r + 2.5} fill="#0b0f19" />
      <circle cx={cx} cy={cy} r={r} fill="#1f2937" stroke="#4b5563" strokeWidth="1" />
      <circle cx={cx} cy={cy} r={r * 0.5} fill="#0f172a" />
      <circle cx={cx - r * 0.3} cy={cy - r * 0.3} r={r * 0.18} fill="#93c5fd" opacity="0.8" />
    </g>
  );
}

function Camera({ type, body }) {
  const plate = shade(body, -0.35);
  switch (type) {
    case "tri":
      return (
        <g>
          <rect x="8" y="8" width="54" height="54" rx="14" fill={shade(body, 0.12)} stroke={plate} />
          <Lens cx={24} cy={24} />
          <Lens cx={24} cy={46} />
          <Lens cx={44} cy={35} />
          <circle cx="46" cy="16" r="3" fill="#fde68a" />
        </g>
      );
    case "diag":
      return (
        <g>
          <rect x="8" y="8" width="48" height="48" rx="13" fill={shade(body, 0.12)} stroke={plate} />
          <Lens cx={23} cy={23} />
          <Lens cx={42} cy={42} />
          <circle cx="44" cy="16" r="3" fill="#fde68a" />
        </g>
      );
    case "circle":
      return (
        <g>
          <circle cx="34" cy="34" r="27" fill={shade(body, 0.1)} stroke={plate} strokeWidth="2" />
          <Lens cx={34} cy={21} r={7} />
          <Lens cx={22} cy={42} r={7} />
          <Lens cx={46} cy={42} r={7} />
        </g>
      );
    case "quad":
      return (
        <g>
          <rect x="8" y="8" width="52" height="52" rx="12" fill={shade(body, 0.1)} stroke={plate} />
          <Lens cx={23} cy={23} r={7} />
          <Lens cx={46} cy={23} r={7} />
          <Lens cx={23} cy={46} r={7} />
          <circle cx="46" cy="46" r="5" fill="#e5e7eb" opacity="0.9" />
        </g>
      );
    default: // pill
      return (
        <g>
          <rect x="8" y="8" width="34" height="62" rx="17" fill={shade(body, 0.1)} stroke={plate} />
          <Lens cx={25} cy={25} />
          <Lens cx={25} cy={52} />
          <circle cx="52" cy="22" r="4" fill="#fde68a" />
        </g>
      );
  }
}

function Notch({ type }) {
  switch (type) {
    case "island":
      return <rect x="36" y="12" width="36" height="11" rx="5.5" fill="#000" />;
    case "notch":
      return <path d="M30 6 H78 V10 Q78 20 68 20 H40 Q30 20 30 10 Z" fill="#000" />;
    case "drop":
      return <path d="M46 6 H62 Q62 17 54 17 Q46 17 46 6 Z" fill="#000" />;
    default:
      return <circle cx="54" cy="16" r="4.5" fill="#000" />;
  }
}

function Back({ look, uid }) {
  return (
    <g>
      <rect width={W} height={H} rx="20" fill={`url(#${uid}-body)`} stroke={shade(look.body, -0.45)} strokeWidth="1.5" />
      <rect x="3" y="3" width={W - 6} height={H - 6} rx="17" fill="none" stroke="#fff" opacity="0.15" />
      <Camera type={look.cam} body={look.body} />
      <path d="M0 0 L50 0 L0 90 Z" fill="#fff" opacity="0.07" transform={`translate(${W - 50} 0) scale(1 1)`} />
      <rect x={W} y="60" width="3" height="28" rx="1.5" fill={shade(look.body, -0.35)} />
      <rect x={W} y="100" width="3" height="16" rx="1.5" fill={shade(look.body, -0.35)} />
    </g>
  );
}

function Front({ look, uid }) {
  const [c1, c2] = look.wall;
  return (
    <g>
      <rect width={W} height={H} rx="20" fill="#0b0f19" stroke={shade(look.body, 0.1)} strokeWidth="2.5" />
      <rect x="5" y="5" width={W - 10} height={H - 10} rx="16" fill={`url(#${uid}-wall)`} />
      <circle cx="78" cy="150" r="36" fill="#fff" opacity="0.1" />
      <circle cx="26" cy="190" r="26" fill="#000" opacity="0.1" />
      <Notch type={look.notch} />
      <text x="54" y="72" fontSize="30" fontWeight="700" textAnchor="middle" fill="#fff" fontFamily="Arial, sans-serif">
        10:10
      </text>
      <text x="54" y="88" fontSize="8" textAnchor="middle" fill="#fff" opacity="0.85" fontFamily="Arial, sans-serif">
        Tuesday, 27 October
      </text>
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={14 + i * 21} y="178" width="16" height="16" rx="5" fill="#fff" opacity={0.28 + i * 0.1} />
      ))}
      <rect x="40" y="212" width="28" height="3" rx="1.5" fill="#fff" opacity="0.7" />
      <path d={`M10 6 L${W - 10} 6 L${W - 10} 70 Z`} fill="#fff" opacity="0.06" />
    </g>
  );
}

/**
 * Shows a drawn phone for every model. If you add a real photo named
 * public/images/phone-<id>.jpg it automatically replaces the drawing.
 * view = "both" (front + back) | "front" | "back"
 */
export default function PhoneImage({ phone, view = "both", className = "" }) {
  const uid = "p" + useId().replace(/:/g, "");
  const [photo, setPhoto] = useState(false);
  const look = phone.look;
  const both = view === "both";
  const viewBox = both ? "0 0 250 262" : "0 0 124 250";

  return (
    <div className={`phone-img ${className}`}>
      <svg viewBox={viewBox} role="img" aria-label={`${phone.brand} ${phone.name}`}>
        <defs>
          <linearGradient id={`${uid}-body`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={shade(look.body, 0.35)} />
            <stop offset="0.5" stopColor={look.body} />
            <stop offset="1" stopColor={shade(look.body, -0.35)} />
          </linearGradient>
          <linearGradient id={`${uid}-wall`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={look.wall[0]} />
            <stop offset="1" stopColor={look.wall[1]} />
          </linearGradient>
        </defs>

        {both ? (
          <>
            <g transform="translate(128 12) rotate(5 54 113)">
              <Back look={look} uid={uid} />
            </g>
            <g transform="translate(14 22) rotate(-4 54 113)">
              <Front look={look} uid={uid} />
            </g>
          </>
        ) : (
          <g transform="translate(8 12)">
            {view === "back" ? <Back look={look} uid={uid} /> : <Front look={look} uid={uid} />}
          </g>
        )}
      </svg>

      <img
        className={`photo ${photo ? "show" : ""}`}
        src={`/images/phone-${phone.id}.jpg`}
        alt={`${phone.brand} ${phone.name}`}
        onLoad={() => setPhoto(true)}
        onError={() => setPhoto(false)}
      />
    </div>
  );
}
