import { Banknote, RefreshCw, ShieldCheck } from "lucide-react";
import { CompanyRequestForm } from "@/components/forms/CompanyRequestForm";
import { PageHero } from "@/components/layout/PageHero";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "For Companies",
  "Request pre-screened van, courier and HGV drivers for your UK operation. Pay only when the driver starts — free replacement within the guarantee period.",
  "/companies",
);

const benefits = [
  {
    icon: Banknote,
    title: "Pay on start",
    text: "No upfront recruitment fees. You only pay when your new driver starts work.",
  },
  {
    icon: RefreshCw,
    title: "Replacement guarantee",
    text: "If a placed driver leaves within the guarantee period, we will work to supply a replacement at no extra placement charge.",
  },
  {
    icon: ShieldCheck,
    title: "Screened candidates",
    text: "We pre-screen drivers and carry out licence and right-to-work checks to support your compliance needs.",
  },
];

export default function CompaniesPage() {
  return (
    <>
      <PageHero
        title="Drivers for your business"
        description="Tell us what you need — we’ll send suitable, screened drivers for delivery, courier and logistics roles across the UK."
      />
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <ul className="mb-14 grid gap-6 md:grid-cols-3">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <li
                  key={b.title}
                  className="rounded-2xl border border-slate-brand/8 bg-white p-6 shadow-card"
                >
                  <Icon className="h-8 w-8 text-mint" aria-hidden />
                  <h2 className="mt-3 text-lg font-semibold text-slate-brand">
                    {b.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-brand/75">
                    {b.text}
                  </p>
                </li>
              );
            })}
          </ul>

          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 text-center text-2xl font-bold text-slate-brand">
              Request drivers
            </h2>
            <CompanyRequestForm />
          </div>
        </div>
      </section>
    </>
  );
}
