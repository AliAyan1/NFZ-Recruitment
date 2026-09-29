"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "Do companies pay upfront fees?",
    a: "No. You only pay when the driver starts work with you.",
  },
  {
    q: "How quickly can you send drivers?",
    a: "We aim to send screened shortlists within 48–72 hours once we have your requirements and start date.",
  },
  {
    q: "What is the replacement guarantee?",
    a: "If a placed driver leaves within the guarantee period, we will work to supply a replacement at no extra placement charge.",
  },
  {
    q: "Which areas do you cover?",
    a: "We recruit and supply drivers across the UK — England, Scotland, Wales and Northern Ireland.",
  },
  {
    q: "Is it free for drivers to apply?",
    a: "Yes. There is no charge to register or apply with RoadWorthy Recruitment.",
  },
  {
    q: "What licence do I need?",
    a: "Van and courier roles typically require a full UK driving licence (Category B). We will confirm requirements for each role.",
  },
  {
    q: "How does pay work for drivers?",
    a: "Pay rates and employment status depend on the delivery company you work with. We discuss this during your call with our team.",
  },
  {
    q: "How fast can I start a new job?",
    a: "Timelines vary by role and location. After you apply and speak with us, we match you to suitable opportunities based on your availability.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="px-4 py-20 sm:px-6" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <SectionHeading
            id="faq-heading"
            eyebrow="FAQ"
            title="Common questions"
            subtitle="For companies hiring drivers and drivers looking for work."
          />
        </FadeIn>
        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <FadeIn key={item.q} delay={i * 0.04}>
                <div className="overflow-hidden rounded-2xl border border-navy/8 bg-white shadow-card">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-navy"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    {item.q}
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-teal-dark transition ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden
                    />
                  </button>
                  {isOpen ? (
                    <div className="border-t border-navy/6 px-5 pb-4 pt-2 text-sm leading-relaxed text-navy-muted">
                      {item.a}
                    </div>
                  ) : null}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
