"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

// Full-bleed, hero-sized photo section. Stacks seamlessly: the top + bottom
// fades blend into the deep-black page background so consecutive bands flow
// into each other with soft gradient transitions.
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
  const scrim =
    align === "center"
      ? "rgba(10,10,11,0.55)"
      : align === "right"
        ? "linear-gradient(270deg, rgba(10,10,11,0.92) 0%, rgba(10,10,11,0.66) 36%, rgba(10,10,11,0.14) 68%, rgba(10,10,11,0) 100%)"
        : "linear-gradient(90deg, rgba(10,10,11,0.92) 0%, rgba(10,10,11,0.64) 38%, rgba(10,10,11,0.12) 70%, rgba(10,10,11,0) 100%)";
  const contentClass =
    align === "center"
      ? "mx-auto max-w-2xl text-center"
      : align === "right"
        ? "ml-auto max-w-xl"
        : "max-w-xl";

  return (
    <section className={`relative w-full overflow-hidden ${className}`}>
      <div
        className={`relative flex min-h-[85vh] w-full ${
          valign === "bottom" ? "items-end pb-20 md:pb-28" : "items-center"
        }`}
      >
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
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a0a0b 0%, rgba(10,10,11,0) 15%, rgba(10,10,11,0) 70%, rgba(10,10,11,0.97) 100%)",
          }}
        />
        {/* directional scrim for text legibility */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: scrim }}
        />

        <div className="relative mx-auto w-full max-w-6xl px-6">
          <Reveal className={contentClass}>{children}</Reveal>
        </div>
      </div>
    </section>
  );
}
