import { FadeIn } from "@/components/motion/FadeIn";
import { PageHero } from "@/components/layout/PageHero";
import { siteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "About Us",
  "RoadWorthy Recruitment is a UK agency supplying screened van and courier drivers. Roadworthy means fit for the road.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={`About ${siteConfig.brandName}`}
        description="Modern recruitment for UK delivery — checked drivers, clear communication."
      />
      <section className="px-4 py-16 sm:px-6">
        <FadeIn>
          <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-navy-muted">
            <p>
              {siteConfig.brandName} is a trading name of{" "}
              {siteConfig.companyLegalName} (Company No.{" "}
              {siteConfig.companyNumber}), registered in England and Wales. We
              focus on one thing: supplying pre-screened, licence-checked{" "}
              <strong className="text-navy">van and courier</strong> drivers to
              UK delivery and logistics companies.
            </p>
            <p>
              In the UK, <strong className="text-navy">roadworthy</strong> means
              safe and fit for the road. That is how we think about every driver
              we put forward — licence, right to work, experience and availability
              checked before you meet them.
            </p>
            <p>
              We use modern tools to screen applications quickly and keep
              communication straightforward for drivers and clients. Companies get
              faster shortlists; drivers get a simple path to new roles — without
              invented promises or inflated claims.
            </p>
            <p>
              Our commercial model is simple:{" "}
              <strong className="text-navy">
                you only pay when the driver starts work
              </strong>
              . If you run deliveries or couriers nationwide, or you are a driver
              looking for your next van role, we aim to be direct, honest and easy
              to reach.
            </p>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
