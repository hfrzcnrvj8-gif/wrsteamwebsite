"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";
import { bookingUrl, mapsUrl } from "@/lib/site";
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

  return (
    <section id="contact" className="relative px-6 py-44 md:py-64">
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
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-red/15 text-brand-red">
                      ✆
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.18em] text-muted">
                        {info.phoneLabel}
                      </span>
                      <span className="block text-lg font-semibold tracking-tight">
                        {info.phone}
                      </span>
                    </span>
                  </a>

                  {/* Address + directions */}
                  <div className="glass rounded-2xl px-5 py-4">
                    <span className="block text-xs uppercase tracking-[0.18em] text-muted">
                      {info.addressLabel}
                    </span>
                    <address className="mt-1.5 space-y-0.5 not-italic">
                      {info.address.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-liquid mt-3 inline-block text-sm font-medium underline-offset-2 hover:underline"
                    >
                      {info.mapsCta} →
                    </a>
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
