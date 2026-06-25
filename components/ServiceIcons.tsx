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

// Tyre tread icon — top-down view of a tyre contact patch.
// 40×40 px: two outer block columns (offset) + one solid center rib.
export function IconTyreFit() {
  return (
    <svg viewBox="0 0 36 40" width={SZ} height={SZ} aria-hidden style={{ fill: A }}>
      {/* Left outer blocks */}
      <rect x="0" y="0"  width="11" height="8"  rx="1.5"/>
      <rect x="0" y="11" width="11" height="6"  rx="1.5"/>
      <rect x="0" y="20" width="11" height="8"  rx="1.5"/>
      <rect x="0" y="31" width="11" height="9"  rx="1.5"/>
      {/* Center continuous rib */}
      <rect x="14" y="0" width="8"  height="40"/>
      {/* Right outer blocks — offset by half pitch */}
      <rect x="25" y="4"  width="11" height="6"  rx="1.5"/>
      <rect x="25" y="13" width="11" height="8"  rx="1.5"/>
      <rect x="25" y="24" width="11" height="6"  rx="1.5"/>
      <rect x="25" y="33" width="11" height="7"  rx="1.5"/>
    </svg>
  );
}

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
  strokeWidth: ST,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  width: SZ,
  height: SZ,
  style: { fill: "none", stroke: A },
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
      stroke="none"
      fillRule="nonzero"
      aria-hidden
      style={{ fill: A }}
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

// RunFlat — paths copied 1:1 from runflat_symbol.svg (user-provided file).
// Original: fill="#888888", transform flips y-axis. Accent color replaces gray.
export function IconRunFlat() {
  return (
    <svg version="1.0" viewBox="0 0 680 741" width={SZ} height={SZ} aria-hidden>
      <g transform="translate(0,741) scale(0.4072,-0.4072)" stroke="none" style={{ fill: A }}>
        <path d="M1140 1657 c0 -137 37 -285 145 -576 22 -62 26 -87 23 -146 -5 -103 -46 -182 -158 -299 -73 -76 -102 -99 -160 -126 -40 -18 -110 -43 -157 -56 -47 -13 -89 -26 -92 -30 -9 -10 205 6 286 22 40 7 93 22 118 33 66 29 154 102 200 166 61 86 84 154 84 258 1 69 -5 105 -25 165 -14 42 -52 136 -85 207 -88 189 -115 259 -140 358 -12 48 -25 87 -30 87 -5 0 -9 -28 -9 -63z" />
        <path d="M1250 1674 c0 -14 42 -170 57 -207 8 -23 56 -127 106 -231 l91 -189 4 -93 c4 -74 0 -107 -17 -161 -27 -90 -83 -183 -151 -252 -66 -67 -128 -102 -230 -131 -84 -23 -118 -25 -635 -41 -203 -6 -372 -13 -374 -14 -6 -6 77 -150 121 -209 l41 -56 58 0 58 0 6 38 c11 77 20 105 36 115 29 18 48 0 64 -60 9 -32 20 -65 24 -73 7 -12 30 -14 132 -11 68 2 153 6 189 10 l65 6 11 69 c6 37 18 72 25 77 34 22 56 -3 81 -91 12 -42 15 -45 46 -44 17 0 84 1 147 2 l115 2 25 39 c16 23 33 73 44 127 14 67 32 115 74 194 76 143 108 254 114 401 4 76 1 135 -7 170 -7 30 -47 126 -90 214 -85 174 -130 290 -130 335 0 24 -7 33 -40 50 -39 20 -60 25 -60 14z" />
        <path d="M1005 1480 c-24 -27 -22 -70 5 -92 28 -23 62 -23 82 0 28 31 30 57 7 85 -25 33 -68 36 -94 7z" />
        <path d="M1056 1298 c-9 -12 -16 -32 -16 -44 0 -25 43 -64 69 -64 27 0 61 38 61 69 0 15 -8 35 -18 44 -27 25 -78 22 -96 -5z" />
        <path d="M1097 1122 c-25 -27 -22 -78 5 -96 12 -9 32 -16 44 -16 25 0 64 43 64 71 0 28 -36 59 -68 59 -16 0 -36 -8 -45 -18z" />
        <path d="M1096 936 c-30 -29 -33 -56 -8 -84 39 -47 112 -23 112 37 0 35 -18 58 -52 66 -21 5 -33 1 -52 -19z" />
        <path d="M1007 772 c-10 -10 -17 -31 -17 -45 0 -32 32 -67 60 -67 26 0 70 43 70 67 0 10 -7 29 -16 41 -19 28 -74 30 -97 4z" />
        <path d="M857 662 c-25 -28 -21 -67 9 -91 15 -12 32 -21 39 -21 7 0 24 9 39 21 50 39 24 109 -41 109 -16 0 -37 -8 -46 -18z" />
        <path d="M703 610 c-25 -10 -38 -48 -29 -84 7 -28 51 -47 83 -35 23 8 43 38 43 64 0 19 -44 65 -62 64 -7 0 -23 -4 -35 -9z" />
        <path d="M507 542 c-10 -10 -17 -31 -17 -45 0 -32 32 -67 60 -67 12 0 32 11 45 25 14 13 25 33 25 45 0 29 -35 60 -68 60 -16 0 -36 -8 -45 -18z" />
      </g>
    </svg>
  );
}
