import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-mint/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-sky/30 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-brand sm:text-4xl md:text-5xl">
          Reliable Drivers for UK Delivery Companies
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-brand/85 sm:text-xl">
          Van, courier and HGV drivers — pre-screened, licence-checked and ready
          to start. You only pay when they start work.
        </p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <Button href="/companies" className="w-full sm:w-auto sm:min-w-[200px]">
            I Need Drivers
          </Button>
          <Button
            href="/drivers"
            variant="secondary"
            className="w-full sm:w-auto sm:min-w-[200px]"
          >
            I&apos;m a Driver — Apply
          </Button>
        </div>
      </div>
    </section>
  );
}
