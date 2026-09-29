"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Gift, MapPin, Package, Truck } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const types = [
  {
    icon: Truck,
    title: "Van delivery drivers",
    text: "Last-mile and depot-to-door van work for parcel and retail delivery.",
  },
  {
    icon: Package,
    title: "Courier drivers",
    text: "Time-sensitive collections and deliveries for courier networks.",
  },
  {
    icon: MapPin,
    title: "Multi-drop drivers",
    text: "Experienced drivers comfortable with high-drop routes and tight schedules.",
  },
  {
    icon: Gift,
    title: "Seasonal & Christmas peak",
    text: "Extra capacity when volumes surge — planned ahead or at short notice.",
  },
];

export function WhoWeSupply() {
  const reduce = useReducedMotion();

  return (
    <section className="px-4 py-20 sm:px-6" aria-labelledby="who-heading">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            id="who-heading"
            eyebrow="Who we supply"
            title="Van and courier capacity for your operation"
            subtitle="Focused on delivery — not HGV. We match screened drivers to the roles you run every day."
          />
        </FadeIn>
        <ul className="grid gap-5 sm:grid-cols-2">
          {types.map((t, i) => (
            <FadeIn key={t.title} delay={i * 0.08}>
              <motion.li
                className="h-full list-none rounded-2xl border border-navy/8 bg-white p-6 shadow-card"
                whileHover={reduce ? undefined : { y: -4, boxShadow: "0 16px 48px -12px rgba(53, 73, 94, 0.12)" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/25">
                  <t.icon className="h-6 w-6 text-navy" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-muted">
                  {t.text}
                </p>
              </motion.li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
