import { ClipboardList, PhoneCall, Send, UserCheck, Wallet } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { RoadLine } from "@/components/ui/RoadLine";
import { SectionHeading } from "@/components/ui/SectionHeading";

const companySteps = [
  {
    icon: ClipboardList,
    title: "Tell us what you need",
    text: "Depot location, driver type, start date and how many you need.",
  },
  {
    icon: UserCheck,
    title: "We send screened drivers fast",
    text: "Licence, right to work and experience checked before you meet anyone.",
  },
  {
    icon: Wallet,
    title: "Pay only when they start",
    text: "No upfront fees — you pay when the driver starts work with you.",
  },
];

const driverSteps = [
  {
    icon: Send,
    title: "Apply in 2 minutes",
    text: "Short form on your phone — licence, experience and availability.",
  },
  {
    icon: PhoneCall,
    title: "Quick call with our team",
    text: "We confirm details and discuss suitable van and courier roles.",
  },
  {
    icon: UserCheck,
    title: "Start your new job",
    text: "We match you with delivery companies that fit your skills and area.",
  },
];

function StepRow({
  steps,
  label,
}: {
  steps: typeof companySteps;
  label: string;
}) {
  return (
    <div className="relative">
      <div className="absolute left-0 right-0 top-[4.5rem] hidden md:block">
        <RoadLine />
      </div>
      <ol className="relative grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="rounded-2xl border border-navy/8 bg-white p-6 shadow-card"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-teal-dark">
              {label} · Step {index + 1}
            </span>
            <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-brand/40">
              <step.icon className="h-6 w-6 text-navy" aria-hidden />
            </div>
            <h3 className="mt-4 font-bold text-navy">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-muted">
              {step.text}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-20">
        <FadeIn>
          <SectionHeading
            eyebrow="For companies"
            title="How it works"
            subtitle="A clear path from request to a driver on your fleet."
          />
          <StepRow steps={companySteps} label="Company" />
        </FadeIn>
        <FadeIn>
          <SectionHeading
            eyebrow="For drivers"
            title="How it works"
            subtitle="Free to apply — we help you find van and courier work nationwide."
          />
          <StepRow steps={driverSteps} label="Driver" />
        </FadeIn>
      </div>
    </section>
  );
}
