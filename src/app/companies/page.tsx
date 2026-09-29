import { Clock, MapPinned, RefreshCw, Wallet } from "lucide-react";
import { CompanyRequestForm } from "@/components/forms/CompanyRequestForm";
import { FadeIn } from "@/components/motion/FadeIn";
import { PageHero } from "@/components/layout/PageHero";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "For Companies",
  "Request screened van and courier drivers for your UK delivery operation. Pay only when they start — free replacement guarantee.",
  "/companies",
);

const benefits = [
  {
    icon: Wallet,
    title: "Pay on start",
    text: "No upfront recruitment fees. You only pay when your driver starts work.",
  },
  {
    icon: RefreshCw,
    title: "Replacement guarantee",
    text: "If a placed driver leaves within the guarantee period, we work to supply a replacement at no extra placement charge.",
  },
  {
    icon: Clock,
    title: "Speed",
    text: "Screened shortlists typically within 48–72 hours of your request.",
  },
  {
    icon: MapPinned,
    title: "UK-wide",
    text: "Van and courier drivers for depots and routes across the United Kingdom.",
  },
];

export default function CompaniesPage() {
  return (
    <>
      <PageHero
        title="Drivers for your delivery fleet"
        description="Tell us what you need — we’ll send licence-checked van and courier drivers who are road-ready."
      />
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <ul className="mb-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.05}>
                <li className="h-full list-none rounded-2xl border border-navy/8 bg-white p-6 shadow-card">
                  <b.icon className="h-8 w-8 text-teal-dark" aria-hidden />
                  <h2 className="mt-3 font-bold text-navy">{b.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-navy-muted">
                    {b.text}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ul>
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 text-center text-2xl font-bold text-navy">
              Request drivers
            </h2>
            <CompanyRequestForm />
          </div>
        </div>
      </section>
    </>
  );
}
