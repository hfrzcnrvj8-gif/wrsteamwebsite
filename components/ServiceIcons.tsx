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

// TPMS — precise reproduction of ISO 7000-2496 dashboard warning symbol:
// horseshoe cross-section + tread marks at bottom + exclamation mark inside
export function IconTPMS() {
  return (
    <svg {...SL} aria-hidden>
      {/* tyre horseshoe (open at bottom) */}
      <path d="M5 20 L5 11 A7 7 0 0 1 19 11 L19 20" strokeWidth="2" />
      {/* tread marks — vertical stubs around the bottom arc */}
      <line x1="5"    y1="20"   x2="5"    y2="22.5" />
      <line x1="8.5"  y1="21.2" x2="8.5"  y2="23.5" />
      <line x1="12"   y1="21.5" x2="12"   y2="24"   />
      <line x1="15.5" y1="21.2" x2="15.5" y2="23.5" />
      <line x1="19"   y1="20"   x2="19"   y2="22.5" />
      {/* exclamation body */}
      <line x1="12" y1="6" x2="12" y2="13.5" strokeWidth="2.5" />
      {/* exclamation dot */}
      <circle cx="12" cy="17" r="1.5" fill={A} stroke="none" />
    </svg>
  );
}

// RunFlat / Self-supporting tyre:
// Three concentric rings — the notably thick gap between outer tyre (r=10) and
// rim (r=7) visually represents the reinforced self-supporting sidewall.
export function IconRunFlat() {
  return (
    <svg {...SL} aria-hidden>
      {/* outer tyre */}
      <circle cx="12" cy="12" r="10" />
      {/* inner rim — close to outer tyre = thick sidewall = runflat */}
      <circle cx="12" cy="12" r="6.5" />
      {/* hub */}
      <circle cx="12" cy="12" r="2" />
      {/* RF label in the air chamber area */}
      <text
        x="12"
        y="13.2"
        textAnchor="middle"
        fill={A}
        fontSize="5"
        fontWeight="900"
        fontFamily="ui-sans-serif,system-ui,sans-serif"
        stroke="none"
        letterSpacing="-0.5"
      >
        RF
      </text>
    </svg>
  );
}
