import { ChristmasBanner } from "@/components/home/ChristmasBanner";
import { CtaSection } from "@/components/home/CtaSection";
import { Faq } from "@/components/home/Faq";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ScreeningChecks } from "@/components/home/ScreeningChecks";
import { TestimonialsPlaceholder } from "@/components/home/TestimonialsPlaceholder";
import { TrustStrip } from "@/components/home/TrustStrip";
import { WhoWeSupply } from "@/components/home/WhoWeSupply";
import { WhyTrust } from "@/components/home/WhyTrust";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Van Driver Recruitment UK",
  "Road-ready van and courier drivers for UK delivery companies. Licence-checked, pay only on start. Christmas peak drivers available.",
  "/",
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WhoWeSupply />
      <HowItWorks />
      <ScreeningChecks />
      <WhyTrust />
      <ChristmasBanner />
      <Faq />
      <TestimonialsPlaceholder />
      <CtaSection />
    </>
  );
}
