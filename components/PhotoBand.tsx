"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

// Full-bleed, hero-sized photo section. The image sits in an absolute layer of a
// min-height section (robust on iOS Safari, where `fill` inside a flex+min-height
// box can collapse). On mobile the copy drops to the bottom with a bottom-up
// scrim; on desktop it uses the directional `align` scrim.
export function PhotoBand({
  src,
  alt = "",
  priority = false,
  align = "left",
  valign = "center",
  objectPosition = "center",
  className = "",
  children,
}: {
  src: string;
  alt?: string;
  priority?: boolean;
  align?: "left" | "center" | "right";
  valign?: "center" | "bottom";
  objectPosition?: string;
  className?: string;
  children: ReactNode;
}) {
  const desktopScrim =
    align === "center"
      ? "rgba(10,10,11,0.55)"
      : align === "right"
        ? "linear-gradient(270deg, rgba(10,10,11,0.92) 0%, rgba(10,10,11,0.66) 36%, rgba(10,10,11,0.14) 68%, rgba(10,10,11,0) 100%)"
        : "linear-gradient(90deg, rgba(10,10,11,0.92) 0%, rgba(10,10,11,0.64) 38%, rgba(10,10,11,0.12) 70%, rgba(10,10,11,0) 100%)";
  const contentClass =
    align === "center"
      ? "mx-auto max-w-xl text-center"
      : align === "right"
        ? "md:ml-auto md:max-w-xl"
        : "md:max-w-xl";
  const vClass =
    valign === "bottom"
      ? "md:items-end md:pb-24"
      : "md:items-center md:pb-0";

  return (
    <section
      className={`relative flex min-h-[88vh] w-full items-end overflow-hidden pb-16 pt-28 md:min-h-[85vh] md:pt-0 ${vClass} ${className}`}
    >
      {/* image + overlays as an absolute layer of the section */}
      <div className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition }}
        />
        {/* vertical fades — seamless stacking between bands */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a0a0b 0%, rgba(10,10,11,0) 15%, rgba(10,10,11,0) 68%, rgba(10,10,11,0.97) 100%)",
          }}
        />
        {/* mobile: bottom-up scrim for legibility */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,11,0) 28%, rgba(10,10,11,0.5) 58%, rgba(10,10,11,0.9) 100%)",
          }}
        />
        {/* desktop: directional scrim */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{ background: desktopScrim }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <Reveal className={contentClass}>{children}</Reveal>
      </div>
    </section>
  );
}
