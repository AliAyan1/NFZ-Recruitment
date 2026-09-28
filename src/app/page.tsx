import { CtaBanner } from "@/components/home/CtaBanner";
import { DriverTypes } from "@/components/home/DriverTypes";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { TestimonialsPlaceholder } from "@/components/home/TestimonialsPlaceholder";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Driver Recruitment UK",
  "Reliable van, courier and HGV drivers for UK delivery companies. Pre-screened, licence-checked — pay only when they start work.",
  "/",
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <DriverTypes />
      <HowItWorks />
      <WhyChooseUs />
      <TestimonialsPlaceholder />
      <CtaBanner />
    </>
  );
}
