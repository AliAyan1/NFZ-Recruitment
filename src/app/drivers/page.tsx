import { Clock, Gift, MapPin, Wallet } from "lucide-react";
import { TallyDriverEmbed } from "@/components/forms/TallyDriverEmbed";
import { FadeIn } from "@/components/motion/FadeIn";
import { PageHero } from "@/components/layout/PageHero";
import { siteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Van Driver Jobs UK",
  "Apply for van driver jobs across the UK. Free to register with RoadWorthy Recruitment — Christmas peak roles available.",
  "/drivers",
);

const perks = [
  { icon: Wallet, title: "Free for drivers", text: "No charge to apply or register." },
  { icon: Clock, title: "Fast placement", text: "Short Tally application, then a quick call with our team." },
  { icon: MapPin, title: "Van jobs across the UK", text: "Delivery van roles nationwide." },
  { icon: Gift, title: "Christmas peak work", text: "Extra van shifts when seasonal demand peaks." },
];

export default function DriversPage() {
  return (
    <>
      <PageHero
        title="Find van driving work"
        description="Apply in minutes — it’s free. We match road-ready van drivers with UK delivery companies."
      />
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <ul className="mb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.05}>
                <li className="list-none rounded-2xl border border-navy/8 bg-white p-6 shadow-card">
                  <p.icon className="h-8 w-8 text-teal-dark" aria-hidden />
                  <h2 className="mt-3 font-bold text-navy">{p.title}</h2>
                  <p className="mt-2 text-sm text-navy-muted">{p.text}</p>
                </li>
              </FadeIn>
            ))}
          </ul>

          <FadeIn>
            <div
              id="apply"
              className="scroll-mt-24 mx-auto max-w-2xl rounded-2xl border border-navy/8 bg-white p-5 shadow-card sm:p-8"
            >
              <h2 className="text-2xl font-bold text-navy">Apply in 2 minutes</h2>
              <p className="mt-2 text-sm text-navy-muted sm:text-base">
                Requirements: aged 20+, full driving licence, right to work in
                the UK.
              </p>
              <div className="mt-6">
                <TallyDriverEmbed />
              </div>
              <p className="mt-6 text-center text-sm">
                <a
                  href={siteConfig.driverFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-teal-dark underline-offset-2 hover:underline"
                >
                  Form not loading? Open it here
                </a>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
