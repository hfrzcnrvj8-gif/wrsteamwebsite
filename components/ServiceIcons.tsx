// Service & UseCase icons — mix of Tabler Icons (MIT) and custom automotive SVGs.
// Custom SVGs use viewBox="0 0 24 24" to match Tabler proportions.
import type { SVGProps } from "react";
import {
  IconWheel,
  IconStack2,
  IconScale,
  IconDroplets,
  IconWaveSine,
  IconTag,
} from "@tabler/icons-react";

const A = "var(--accent)";
const SZ = 40;
const ST = 1.5;

// ── Tabler wrappers (brand colour, consistent size) ───────────────────────────

// Tyre service → generic wheel icon from Tabler
export const IconTyreFit = () => (
  <IconWheel size={SZ} stroke={ST} color={A} />
);

// Seasonal storage → stacked layers
export const IconStorage = () => (
  <IconStack2 size={SZ} stroke={ST} color={A} />
);

// Wheel balancing → balance scale (universal "balance" symbol)
export const IconBalance = () => (
  <IconScale size={SZ} stroke={ST} color={A} />
);

// Ultrasonic wash → water droplets
export const IconUltrasonicWash = () => (
  <IconDroplets size={SZ} stroke={ST} color={A} />
);

// Tyre diagnostics → sine / vibration wave
export const IconDiagnostics = () => (
  <IconWaveSine size={SZ} stroke={ST} color={A} />
);

// Custom order & used wheels → price tag
export const IconCustomOrder = () => (
  <IconTag size={SZ} stroke={ST} color={A} />
);

// ── Custom automotive SVGs (viewBox 0 0 24 24) ───────────────────────────────
const SL: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: A,
  strokeWidth: ST,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  width: SZ,
  height: SZ,
};

// 5-spoke alloy wheel (as it would appear looking straight at the face)
export function IconAlloyWheel() {
  return (
    <svg {...SL} aria-hidden>
      {/* outer rim */}
      <circle cx="12" cy="12" r="10" />
      {/* hub ring */}
      <circle cx="12" cy="12" r="3" />
      {/* 5 spokes, every 72° clockwise from top */}
      <line x1="12"    y1="9"    x2="12"    y2="2"    />
      <line x1="14.85" y1="11.1" x2="20.5"  y2="9.25" />
      <line x1="13.78" y1="14.3" x2="17.31" y2="19.3" />
      <line x1="10.22" y1="14.3" x2="6.69"  y2="19.3" />
      <line x1="9.15"  y1="11.1" x2="3.5"   y2="9.25" />
    </svg>
  );
}

// 3D wheel alignment: two wheels in toe-in view + dashed axis + angle arc
export function IconAlignment() {
  return (
    <svg {...SL} aria-hidden>
      {/* left wheel, angled inward */}
      <path d="M2 7 L6 8.5 L6 15.5 L2 17 Z" />
      {/* right wheel, angled inward */}
      <path d="M22 7 L18 8.5 L18 15.5 L22 17 Z" />
      {/* dashed measurement axis */}
      <line x1="6" y1="12" x2="18" y2="12" strokeDasharray="2 1.5" />
      {/* convergence angle arc */}
      <path d="M9 9.5 A4 4 0 0 1 15 9.5" />
    </svg>
  );
}

// TPMS — ISO 7000-2496 dashboard warning symbol, faithful reproduction:
// TWO separate C-curve arms (not a horseshoe) + flat bar + 5 rectangular teeth + exclamation
export function IconTPMS() {
  return (
    <svg {...SL} aria-hidden>
      {/* left arm: starts at base, curves up and outward, ends with rounded tip pointing inward */}
      <path d="M 5 16 C 2 15 2 11.5 2 9 C 2 5.5 4 2 8 1" strokeWidth="2.5" />
      {/* right arm: mirrored */}
      <path d="M 19 16 C 22 15 22 11.5 22 9 C 22 5.5 20 2 16 1" strokeWidth="2.5" />
      {/* horizontal base bar connecting both arms */}
      <line x1="3.5" y1="16" x2="20.5" y2="16" strokeWidth="2.5" />
      {/* 5 tread teeth hanging from base bar */}
      <line x1="6"  y1="17.5" x2="6"  y2="21" strokeWidth="2" />
      <line x1="9"  y1="17.5" x2="9"  y2="21" strokeWidth="2" />
      <line x1="12" y1="17.5" x2="12" y2="21" strokeWidth="2" />
      <line x1="15" y1="17.5" x2="15" y2="21" strokeWidth="2" />
      <line x1="18" y1="17.5" x2="18" y2="21" strokeWidth="2" />
      {/* exclamation body (pill-shaped via round linecap + thick stroke) */}
      <line x1="12" y1="3.5" x2="12" y2="10" strokeWidth="2.5" />
      {/* exclamation dot */}
      <circle cx="12" cy="13" r="1.5" fill={A} stroke="none" />
    </svg>
  );
}

// RunFlat — tyre cross-section (as if tyre cut in half and viewed end-on):
// outer rubber profile + RED filled sidewall inserts (the self-supporting reinforcement
// visible as pink wedges in technical diagrams) + inner air chamber
export function IconRunFlat() {
  return (
    <svg {...SL} aria-hidden>
      {/* outer tyre profile: flat tread on top, vertical sides, rounded bead at bottom */}
      <path d="M 3 4 L 21 4 L 22 5 L 22 16 Q 22 20 19 21 L 5 21 Q 2 20 2 16 L 2 5 Z" strokeWidth="1.5" />
      {/* LEFT sidewall reinforcement insert — filled accent trapezoid */}
      <path d="M 2.5 6 L 6.5 7 L 6.5 18.5 L 2.5 19.5 Z" fill={A} stroke="none" />
      {/* RIGHT sidewall reinforcement insert — mirrored */}
      <path d="M 21.5 6 L 17.5 7 L 17.5 18.5 L 21.5 19.5 Z" fill={A} stroke="none" />
      {/* inner air chamber */}
      <rect x="7" y="6.5" width="10" height="12" rx="1" strokeWidth="1.5" />
    </svg>
  );
}
