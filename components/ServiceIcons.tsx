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

// TPMS — exact paths from Wikimedia Commons "TPMS_warning_icon.svg" (CC-BY-SA),
// modelled after the NHTSA regulatory proposal (ISO 7000-2496).
// Original SVG: 300×222 px. Rendered here at 40×40 via viewBox scaling.
export function IconTPMS() {
  return (
    <svg
      viewBox="0 0 300.03 222.636"
      width={SZ}
      height={SZ}
      fill={A}
      stroke="none"
      fillRule="nonzero"
      aria-hidden
    >
      <g transform="translate(572.87354,-321.04418)">
        <g transform="matrix(0.521699,0,0,0.521699,-573.15247,314.03359)">
          {/* exclamation dot */}
          <path d="M 314.2583,323.64893 C 314.2583,309.1958 302.5415,297.479 288.08838,297.479 C 273.63525,297.479 261.91846,309.1958 261.91846,323.64893 C 261.91846,338.10205 273.63525,349.81885 288.08838,349.81885 C 302.5415,349.81885 314.2583,338.10205 314.2583,323.64893 z" />
          {/* exclamation body (pill/capsule) */}
          <path d="M 261.91846,100.74365 L 261.91846,235.81396 C 261.91846,250.26807 273.63525,261.98389 288.08838,261.98389 C 302.5415,261.98389 314.2583,250.26807 314.2583,235.81396 L 314.2583,100.74365 C 314.2583,86.290527 302.5415,74.57373 288.08838,74.57373 C 273.63525,74.57373 261.91846,86.290527 261.91846,100.74365 z" />
          {/* main body: two C-arms + base bar + 6 tread teeth */}
          <path d="M 406.63623,379.87451 C 464.35596,331.72412 487.21728,253.44385 464.48389,181.79736 C 462.69775,176.16602 459.99756,170.86572 456.49267,166.10889 L 411.48291,105.01904 C 404.65088,95.745605 400.96533,84.529297 400.96533,73.010742 L 400.96533,56.651855 C 400.96533,52.678222 404.18603,49.457031 408.16064,49.457031 L 435.58545,49.457031 C 440.24268,49.457031 444.12939,53.01123 444.54443,57.649414 L 447.68017,92.711426 C 448.57959,102.76123 452.27881,112.35693 458.35596,120.41016 C 481.74756,151.40381 496.23486,188.19336 500.2583,226.81397 C 502.85791,277.16846 487.46338,326.80518 456.82764,366.85205 L 440.02295,420.91455 C 439.46435,422.7124 437.84424,423.97217 435.96435,424.0708 L 396.08642,426.16065 L 396.08642,403.95166 L 365.22998,403.95166 L 365.22998,426.16064 L 334.37354,426.16064 L 334.37354,403.95166 L 303.51709,403.95166 L 303.51709,426.16064 L 272.66016,426.16064 L 272.66016,403.95166 L 241.80371,403.95166 L 241.80371,426.16064 L 210.94727,426.16064 L 210.94727,403.95166 L 180.09082,403.95166 L 180.09082,426.16064 L 140.21289,424.0708 C 138.33252,423.97217 136.7124,422.7124 136.15381,420.91455 L 119.34912,366.85205 C 88.713378,326.80517 73.319335,277.16846 75.918944,226.81396 C 79.941893,188.19336 94.429686,151.40381 117.8208,120.41015 C 123.89844,112.35693 127.59717,102.76123 128.49609,92.711425 L 131.63281,57.649413 C 132.04785,53.011229 135.93457,49.45703 140.59131,49.45703 L 168.0166,49.45703 C 171.99072,49.45703 175.21191,52.678221 175.21191,56.651854 L 175.21191,73.010741 C 175.21191,84.529296 171.52637,95.745604 164.69336,105.01904 L 119.68408,166.10889 C 116.17969,170.86572 113.47949,176.16601 111.69287,181.79736 C 88.959472,253.44385 111.8208,331.72412 169.54053,379.87451 L 406.63623,379.87451 z" />
        </g>
      </g>
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
