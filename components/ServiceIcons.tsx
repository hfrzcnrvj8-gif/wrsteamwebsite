// Service & UseCase icons — all Tabler Icons (MIT), consistent outline style.
import {
  IconTools,
  IconCarSuspension,
  IconWheel,
  IconStack2,
  IconScale,
  IconDroplets,
  IconWaveSine,
  IconTag,
  IconGauge,
  IconShieldCheck,
} from "@tabler/icons-react";

const A = "var(--accent)";
const SZ = 40;
const ST = 1.5;

export const IconTyreFit       = () => <IconTools         size={SZ} stroke={ST} color={A} />;
export const IconAlignment     = () => <IconCarSuspension size={SZ} stroke={ST} color={A} />;
export const IconAlloyWheel    = () => <IconWheel         size={SZ} stroke={ST} color={A} />;
export const IconStorage       = () => <IconStack2        size={SZ} stroke={ST} color={A} />;
export const IconBalance       = () => <IconScale         size={SZ} stroke={ST} color={A} />;
export const IconUltrasonicWash= () => <IconDroplets      size={SZ} stroke={ST} color={A} />;
export const IconTPMS          = () => <IconGauge         size={SZ} stroke={ST} color={A} />;
export const IconRunFlat       = () => <IconShieldCheck   size={SZ} stroke={ST} color={A} />;
export const IconDiagnostics   = () => <IconWaveSine      size={SZ} stroke={ST} color={A} />;
export const IconCustomOrder   = () => <IconTag           size={SZ} stroke={ST} color={A} />;
