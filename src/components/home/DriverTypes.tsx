import { Car, Package, Truck } from "lucide-react";
import { DRIVER_TYPES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap = {
  van: Car,
  package: Package,
  truck: Truck,
};

export function DriverTypes() {
  return (
    <section className="px-4 py-16 sm:px-6" aria-labelledby="driver-types-heading">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="driver-types-heading"
          title="Driver types we supply"
          subtitle="From last-mile vans to articulated HGVs — screened and ready for your operation."
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DRIVER_TYPES.map((type) => {
            const Icon = iconMap[type.icon];
            return (
              <li
                key={type.id}
                className="rounded-2xl border border-slate-brand/8 bg-white p-6 shadow-card transition hover:shadow-soft"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mint/25 text-slate-brand">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-brand">
                  {type.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-brand/75">
                  Licence-checked drivers matched to your routes, shifts and
                  compliance requirements.
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
