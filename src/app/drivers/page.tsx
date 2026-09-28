import { Clock, MapPin, Wallet } from "lucide-react";
import { DriverApplyForm } from "@/components/forms/DriverApplyForm";
import { PageHero } from "@/components/layout/PageHero";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "For Drivers — Van & HGV Jobs UK",
  "Apply for van driver jobs, courier work and HGV roles across the UK. Free to register with NFZ Recruitment — fast placement.",
  "/drivers",
);

const perks = [
  {
    icon: Wallet,
    title: "Free for drivers",
    text: "There is no charge to apply or register with us.",
  },
  {
    icon: Clock,
    title: "Fast placement",
    text: "Short application, then a quick call to match you with suitable roles.",
  },
  {
    icon: MapPin,
    title: "Jobs across the UK",
    text: "Van, courier and HGV opportunities nationwide.",
  },
];

export default function DriversPage() {
  return (
    <>
      <PageHero
        title="Find your next driving job"
        description="Van, courier and HGV roles with UK delivery and logistics companies. Apply in minutes — it’s free."
      />
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <ul className="mb-14 grid gap-6 md:grid-cols-3">
            {perks.map((p) => {
              const Icon = p.icon;
              return (
                <li
                  key={p.title}
                  className="rounded-2xl border border-slate-brand/8 bg-white p-6 shadow-card"
                >
                  <Icon className="h-8 w-8 text-sky" aria-hidden />
                  <h2 className="mt-3 text-lg font-semibold text-slate-brand">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-brand/75">
                    {p.text}
                  </p>
                </li>
              );
            })}
          </ul>

          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 text-center text-2xl font-bold text-slate-brand">
              Apply now
            </h2>
            <DriverApplyForm />
          </div>
        </div>
      </section>
    </>
  );
}
