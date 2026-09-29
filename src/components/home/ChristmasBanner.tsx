import { Gift } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";

export function ChristmasBanner() {
  return (
    <section className="px-4 py-12 sm:px-6">
      <FadeIn>
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 rounded-3xl border border-teal/30 bg-brand-gradient p-8 shadow-soft sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="flex gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/80">
              <Gift className="h-7 w-7 text-navy" aria-hidden />
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy sm:text-2xl">
                Need drivers for the Christmas peak?
              </h2>
              <p className="mt-1 text-navy-muted">
                Talk to us today about seasonal van and courier capacity.
              </p>
            </div>
          </div>
          <Button href="/contact" variant="secondary" className="shrink-0 bg-white">
            Get in touch
          </Button>
        </div>
      </FadeIn>
    </section>
  );
}
