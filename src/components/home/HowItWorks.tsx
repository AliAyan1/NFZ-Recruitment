import { Building2, ClipboardList, PhoneCall, Send, UserCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const companySteps = [
  {
    icon: ClipboardList,
    title: "Tell us what you need",
    text: "Share driver type, location, start date and how many drivers you need.",
  },
  {
    icon: UserCheck,
    title: "We send screened drivers",
    text: "Pre-screened candidates with licence and right-to-work checks where required.",
  },
  {
    icon: Building2,
    title: "Pay only when they start",
    text: "No upfront fees — you only pay when the driver starts work with you.",
  },
];

const driverSteps = [
  {
    icon: Send,
    title: "Apply in 2 minutes",
    text: "Quick online form — tell us your licence, experience and availability.",
  },
  {
    icon: PhoneCall,
    title: "Quick call with us",
    text: "We confirm details and discuss suitable roles across the UK.",
  },
  {
    icon: UserCheck,
    title: "Start your new job",
    text: "We match you with companies that fit your skills and location.",
  },
];

function StepsGrid({
  steps,
  prefix,
}: {
  steps: typeof companySteps;
  prefix: string;
}) {
  return (
    <ol className="grid gap-6 md:grid-cols-3">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <li
            key={step.title}
            className="relative rounded-2xl bg-white p-6 shadow-card"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-mint">
              Step {index + 1}
            </span>
            <div className="mt-3 flex h-11 w-11 items-center justify-center rounded-xl bg-sky/30 text-slate-brand">
              <Icon className="h-5 w-5" aria-hidden />
            </div>
            <h3 className="mt-4 font-semibold text-slate-brand">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-brand/75">
              {step.text}
            </p>
            <span className="sr-only">{prefix} step {index + 1}</span>
          </li>
        );
      })}
    </ol>
  );
}

export function HowItWorks() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-20">
        <div>
          <SectionHeading
            title="How it works for companies"
            subtitle="A straightforward way to fill driver vacancies without upfront recruitment fees."
          />
          <StepsGrid steps={companySteps} prefix="Company" />
        </div>
        <div>
          <SectionHeading
            title="How it works for drivers"
            subtitle="Free to apply — we help you find van, courier and HGV work nationwide."
          />
          <StepsGrid steps={driverSteps} prefix="Driver" />
        </div>
      </div>
    </section>
  );
}
