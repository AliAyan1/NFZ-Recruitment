import {
  BadgeCheck,
  Calendar,
  FileCheck,
  Gauge,
  IdCard,
  Users,
} from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const checks = [
  { icon: IdCard, title: "Driving licence check" },
  { icon: BadgeCheck, title: "Right to work" },
  { icon: Gauge, title: "Experience & van driving" },
  { icon: FileCheck, title: "Penalty points review" },
  { icon: Calendar, title: "Availability & start date" },
  { icon: Users, title: "References where required" },
];

export function ScreeningChecks() {
  return (
    <section className="px-4 py-20 sm:px-6" aria-labelledby="screening-heading">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            id="screening-heading"
            eyebrow="Screening"
            title="Our screening checks"
            subtitle="Roadworthy means fit for the road — we verify the essentials before we put a driver forward."
          />
        </FadeIn>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-5">
          {checks.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.05}>
              <li className="flex flex-col items-center rounded-2xl border border-navy/8 bg-white px-4 py-6 text-center shadow-card">
                <c.icon className="h-8 w-8 text-teal-dark" aria-hidden />
                <p className="mt-3 text-sm font-semibold text-navy">{c.title}</p>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
