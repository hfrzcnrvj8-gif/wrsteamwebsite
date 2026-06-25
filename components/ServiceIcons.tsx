// Thematic SVG icons for Services and UseCases sections.
// All viewBox 0 0 40 40, stroke="var(--accent)" for brand-red theming.
import type { SVGProps } from "react";

const C = "var(--accent)";
const SL: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 40 40",
  fill: "none",
  stroke: C,
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// ── Services (4) ──────────────────────────────────────────────────────────────

// Tyre cross-section with 5 lug nuts
export function IconTyreFit() {
  return (
    <svg {...SL} aria-hidden>
      <circle cx="20" cy="20" r="17" />
      <circle cx="20" cy="20" r="9" />
      {/* 5 lug nuts at r=13, every 72° clockwise from top */}
      <circle cx="20"   cy="7"    r="2" fill={C} stroke="none" />
      <circle cx="32.4" cy="16"   r="2" fill={C} stroke="none" />
      <circle cx="27.6" cy="30.5" r="2" fill={C} stroke="none" />
      <circle cx="12.4" cy="30.5" r="2" fill={C} stroke="none" />
      <circle cx="7.6"  cy="16"   r="2" fill={C} stroke="none" />
    </svg>
  );
}

// Two wheels converging (toe-in view) — 3D alignment
export function IconAlignment() {
  return (
    <svg {...SL} aria-hidden>
      {/* Left wheel angled inward */}
      <path d="M3 13 L12 15 L12 25 L3 27 Z" />
      {/* Right wheel angled inward */}
      <path d="M37 13 L28 15 L28 25 L37 27 Z" />
      {/* Measurement axis */}
      <line x1="12" y1="20" x2="28" y2="20" strokeDasharray="2.5 2" />
      {/* Angle arc */}
      <path d="M17 16 A5 5 0 0 1 23 16" strokeWidth="1.2" />
    </svg>
  );
}

// 5-spoke alloy wheel
export function IconAlloyWheel() {
  return (
    <svg {...SL} aria-hidden>
      <circle cx="20" cy="20" r="17" />
      <circle cx="20" cy="20" r="4" />
      {/* 5 spokes from hub (r=4) to near rim (r=14), every 72° from top */}
      <line x1="20"   y1="16"   x2="20"   y2="6"    />
      <line x1="23.8" y1="18.8" x2="33.3" y2="15.7" />
      <line x1="22.4" y1="23.2" x2="28.2" y2="31.3" />
      <line x1="17.6" y1="23.2" x2="11.8" y2="31.3" />
      <line x1="16.2" y1="18.8" x2="6.7"  y2="15.7" />
    </svg>
  );
}

// Tyres stored upright — 3 stacked ovals with side walls
export function IconStorage() {
  return (
    <svg {...SL} aria-hidden>
      <ellipse cx="20" cy="31" rx="14" ry="4" />
      <ellipse cx="20" cy="23" rx="14" ry="4" />
      <ellipse cx="20" cy="15" rx="14" ry="4" />
      <line x1="6"  y1="15" x2="6"  y2="31" />
      <line x1="34" y1="15" x2="34" y2="31" />
    </svg>
  );
}

// ── UseCases (6) ──────────────────────────────────────────────────────────────

// Wheel with two clip-on balance weights
export function IconBalance() {
  return (
    <svg {...SL} aria-hidden>
      <circle cx="20" cy="20" r="14" />
      <circle cx="20" cy="20" r="4" />
      {/* Weight clips (filled rectangles) at top and 3 o'clock */}
      <rect x="17" y="3"    width="6"   height="4" rx="1" fill={C} stroke="none" />
      <rect x="33" y="17"   width="4"   height="6" rx="1" fill={C} stroke="none" />
    </svg>
  );
}

// Tyre circle + ultrasonic bubbles
export function IconUltrasonicWash() {
  return (
    <svg {...SL} aria-hidden>
      {/* Tyre */}
      <circle cx="14" cy="20" r="11" />
      <circle cx="14" cy="20" r="4.5" />
      {/* Bubbles — varying sizes, floating right */}
      <circle cx="31" cy="12" r="4"   />
      <circle cx="37" cy="22" r="2.5" />
      <circle cx="31" cy="30" r="3"   />
      <circle cx="37" cy="32" r="1.5" />
    </svg>
  );
}

// Standard TPMS warning symbol: horseshoe + exclamation mark
export function IconTPMS() {
  return (
    <svg {...SL} aria-hidden>
      {/* Horseshoe (tyre cross-section, open at bottom) */}
      <path d="M8 33 L8 18 A12 12 0 0 1 32 18 L32 33" />
      {/* Road line */}
      <line x1="4" y1="33" x2="36" y2="33" />
      {/* Exclamation body */}
      <line x1="20" y1="11" x2="20" y2="23" strokeWidth="2.5" />
      {/* Exclamation dot */}
      <circle cx="20" cy="28" r="2" fill={C} stroke="none" />
    </svg>
  );
}

// Runflat: tyre with RSC badge — as marked on the actual sidewall
export function IconRunFlat() {
  return (
    <svg {...SL} aria-hidden>
      <circle cx="20" cy="20" r="16" />
      <circle cx="20" cy="20" r="6.5" />
      {/* Red badge pill */}
      <rect x="9" y="15.5" width="22" height="9" rx="4.5" fill={C} stroke="none" />
      {/* RSC lettering */}
      <text
        x="20" y="22.5"
        textAnchor="middle"
        fill="white"
        fontSize="7"
        fontWeight="700"
        fontFamily="ui-sans-serif,system-ui,sans-serif"
        stroke="none"
      >
        RSC
      </text>
    </svg>
  );
}

// Vibration / sine wave — tyre diagnostics
export function IconDiagnostics() {
  return (
    <svg {...SL} aria-hidden>
      {/* Sine wave */}
      <path d="M2 20 C6 20 8 8 12 8 C16 8 18 32 22 32 C26 32 28 8 32 8 C36 8 38 20 38 20" />
      {/* Small tyre in bottom-left corner */}
      <circle cx="6" cy="34" r="4"   />
      <circle cx="6" cy="34" r="1.5" />
    </svg>
  );
}

// Price tag — custom order & used wheels
export function IconCustomOrder() {
  return (
    <svg {...SL} aria-hidden>
      {/* Tag shape */}
      <path d="M7 5 L25 5 L35 20 L25 35 L7 35 Z" />
      {/* Mounting hole */}
      <circle cx="13" cy="20" r="3" />
      {/* Lines suggesting specs/custom selection */}
      <line x1="19" y1="14" x2="30" y2="14" />
      <line x1="19" y1="20" x2="30" y2="20" />
      <line x1="19" y1="26" x2="26" y2="26" />
    </svg>
  );
}
