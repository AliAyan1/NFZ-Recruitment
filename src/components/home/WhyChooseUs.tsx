import {
  BadgeCheck,
  Banknote,
  MapPinned,
  RefreshCw,
  Zap,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: Zap,
    title: "Fast shortlists",
    text: "We move quickly once we know your driver type, location and start date.",
  },
  {
    icon: BadgeCheck,
    title: "Licence & right-to-work checks",
    text: "Drivers are screened to help you meet compliance expectations.",
  },
  {
    icon: MapPinned,
    title: "UK-wide coverage",
    text: "We recruit and place drivers across England, Scotland, Wales and Northern Ireland.",
  },
  {
    icon: RefreshCw,
    title: "Free replacement guarantee",
    text: "If a placed driver leaves within the guarantee period, we work to find a replacement.",
  },
  {
    icon: Banknote,
    title: "No upfront fees",
    text: "Companies only pay when the driver starts work — simple and transparent.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="px-4 py-16 sm:px-6" aria-labelledby="why-heading">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="why-heading"
          title="Why choose NFZ Recruitment"
          subtitle="Built for delivery, courier and logistics businesses that need dependable drivers."
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className="flex gap-4 rounded-2xl border border-slate-brand/8 bg-white p-5 shadow-card"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mint/20">
                  <Icon className="h-5 w-5 text-slate-brand" aria-hidden />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-brand">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-brand/75">
                    {item.text}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
