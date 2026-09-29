"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck, Clock, RefreshCw, Wallet } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const cards = [
  {
    icon: Wallet,
    title: "Pay only on start",
    text: "You pay nothing until your driver starts work.",
  },
  {
    icon: RefreshCw,
    title: "Free replacement guarantee",
    text: "If a driver leaves within the guarantee period, we replace them free.",
  },
  {
    icon: BadgeCheck,
    title: "Every driver checked",
    text: "Driving licence, right to work, experience and penalty points verified before we send anyone.",
  },
  {
    icon: Clock,
    title: "Fast shortlists",
    text: "Screened drivers sent within 48–72 hours of your request.",
  },
];

export function WhyTrust() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-white px-4 py-20 sm:px-6" aria-labelledby="trust-heading">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            id="trust-heading"
            eyebrow="Why RoadWorthy"
            title="Why companies trust RoadWorthy"
            subtitle="Straightforward recruitment for delivery fleets — no fluff, no upfront fees."
          />
        </FadeIn>
        <ul className="grid gap-5 sm:grid-cols-2">
          {cards.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.06}>
              <motion.li
                className="list-none rounded-2xl border border-navy/8 bg-surface p-6"
                whileHover={reduce ? undefined : { y: -3 }}
              >
                <c.icon className="h-8 w-8 text-teal-dark" aria-hidden />
                <h3 className="mt-4 text-lg font-bold text-navy">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-muted">
                  {c.text}
                </p>
              </motion.li>
            </FadeIn>
          ))}
        </ul>
        <FadeIn className="mt-10 text-center">
          <p className="text-sm font-semibold text-navy-muted">
            Registered UK company • Covering all of the UK
          </p>
          <Button href="/companies" variant="secondary" className="mt-6">
            Talk to us about your drivers
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
