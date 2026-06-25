"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";
import { bookingUrl, mapsUrl, mapsEmbedUrl } from "@/lib/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export function CTA({
  dict,
  lang,
}: {
  dict: Dictionary["cta"];
  lang: Locale;
}) {
  const info = dict.info;
  const telHref = `tel:${info.phone.replace(/\s+/g, "")}`;
  const mailHref = `mailto:${info.email}`;

  return (
    <section id="contact" className="relative px-6 py-24 md:py-36">
      {/* subtle workshop backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
        <Image
          src="/images/web/img_7049.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a0a0b 0%, rgba(10,10,11,0.55) 30%, rgba(10,10,11,0.55) 70%, #0a0a0b 100%)",
          }}
        />
      </div>

      <Reveal className="mx-auto max-w-6xl">
        <div className="glow-border relative overflow-hidden rounded-[2.5rem]">
          <div className="card-surface relative rounded-[2.5rem] p-8 md:p-14">
            <div
              className="orb pointer-events-none absolute -right-32 top-0 h-[120%] w-[55%] animate-orb-float rounded-full opacity-40"
              aria-hidden
            />

            <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              {/* Left — contact details, funnel to call / directions */}
              <div>
                <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tightest sm:text-5xl">
                  {dict.title}
                </h2>
                <p className="mt-5 max-w-md text-lg text-muted">
                  {dict.subtitle}
                </p>

                <div className="mt-10 space-y-6">
                  {/* Phone — primary action */}
                  <a
                    href={telHref}
                    className="glass group flex items-center gap-4 rounded-2xl px-5 py-4 transition-transform hover:scale-[1.01]"
                  >
                    <span className="shrink-0 text-2xl leading-none">✆</span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.18em] text-muted">
                        {info.phoneLabel}
                      </span>
                      <span className="block text-lg font-semibold tracking-tight">
                        {info.phone}
                      </span>
                    </span>
                  </a>

                  {/* Email — secondary CTA */}
                  <a
                    href={mailHref}
                    className="glass group flex items-center gap-4 rounded-2xl px-5 py-4 transition-transform hover:scale-[1.01]"
                  >
                    <span className="shrink-0 text-2xl leading-none">✉</span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.18em] text-muted">
                        {info.emailLabel}
                      </span>
                      <span className="block font-semibold tracking-tight">
                        {info.email}
                      </span>
                    </span>
                  </a>

                  {/* Map */}
                  <div className="glass overflow-hidden rounded-2xl">
                    <iframe
                      src={mapsEmbedUrl}
                      width="100%"
                      height="200"
                      style={{
                        border: 0,
                        filter: "grayscale(1) brightness(0.5) contrast(1.2)",
                        display: "block",
                      }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={info.addressLabel}
                    />
                    <div className="px-5 py-3">
                      <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-liquid text-sm font-medium underline-offset-2 hover:underline"
                      >
                        📍 {info.mapsCta} →
                      </a>
                    </div>
                  </div>

                  {/* Opening hours */}
                  <div className="glass rounded-2xl px-5 py-4">
                    <span className="block text-xs uppercase tracking-[0.18em] text-muted">
                      {info.hoursLabel}
                    </span>
                    <dl className="mt-2 space-y-1.5 text-sm">
                      {info.hours.map((h) => (
                        <div
                          key={h.day}
                          className="flex items-center justify-between gap-6"
                        >
                          <dt className="text-muted">{h.day}</dt>
                          <dd className="font-medium tracking-tight">
                            {h.time}
                          </dd>
                        </div>
                      ))}
                    </dl>
                    <p className="mt-3 text-xs text-muted">{info.hoursNote}</p>
                  </div>
                </div>
              </div>

              {/* Right — appointment request form */}
              <div className="lg:pl-2">
                <p className="mb-6 text-sm text-muted">
                  {dict.bookingText}{" "}
                  <a
                    href={bookingUrl}
                    className="text-liquid font-medium underline-offset-2 hover:underline"
                    {...(bookingUrl.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {dict.bookingCta} →
                  </a>
                </p>
                <ContactForm dict={dict.form} lang={lang} />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
