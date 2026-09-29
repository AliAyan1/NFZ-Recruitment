"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck, Calendar, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { RoadLine } from "@/components/ui/RoadLine";
import { FadeIn } from "@/components/motion/FadeIn";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-hero-gradient px-4 pb-20 pt-12 sm:px-6 sm:pb-24 sm:pt-16">
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
        <div className="absolute -left-32 top-20 h-64 w-64 rounded-full bg-teal/30 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-sky-brand/40 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-dark">
            Road-ready drivers, UK-wide
          </p>
          <h1 className="mt-3 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-[3.25rem]">
            Road-ready van drivers for UK delivery companies.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-muted">
            Pre-screened, licence-checked van and courier drivers — ready to
            start. You only pay when they start work.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/companies" className="w-full sm:w-auto">
              I Need Drivers
            </Button>
            <Button
              href={siteConfig.driversApplyPath}
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Apply as a Driver
            </Button>
          </div>
          <div className="mt-10 max-w-md">
            <RoadLine animated />
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="lg:justify-self-end">
          <motion.div
            className="relative mx-auto w-full max-w-md rounded-3xl border border-navy/8 bg-white p-6 shadow-lift sm:p-8"
            whileHover={reduce ? undefined : { y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-dark">
                  Example profile
                </p>
                <p className="mt-1 text-xl font-bold text-navy">Screened driver</p>
                <p className="text-sm text-navy-muted">Van · Cat B · UK</p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient">
                <Shield className="h-7 w-7 text-navy" aria-hidden />
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              {[
                { label: "Driving licence verified", icon: BadgeCheck },
                { label: "Right to work confirmed", icon: BadgeCheck },
                { label: "Available from next week", icon: Calendar },
              ].map((row) => (
                <li
                  key={row.label}
                  className="flex items-center gap-3 rounded-2xl border border-navy/6 bg-surface px-4 py-3 text-sm font-medium text-navy"
                >
                  <row.icon className="h-5 w-5 shrink-0 text-teal-dark" aria-hidden />
                  {row.label}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-center text-xs text-navy-muted">
              Illustration only — every candidate is checked before we send details.
            </p>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
