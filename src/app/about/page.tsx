import { PageHero } from "@/components/layout/PageHero";
import { COMPANY_NUMBER, LEGAL_NAME, SITE_NAME } from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "About Us",
  "NFZ Recruitment is a UK-registered driver recruitment agency helping delivery and logistics companies hire screened van, courier and HGV drivers.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About NFZ Recruitment"
        description="A focused UK recruitment agency for delivery, courier and logistics drivers."
      />
      <section className="px-4 py-12 sm:px-6">
        <div className="prose-slate mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-slate-brand/90">
          <p>
            {SITE_NAME} is a trading name of {LEGAL_NAME} (Company No.{" "}
            {COMPANY_NUMBER}), registered in England and Wales. We specialise in
            supplying pre-screened, licence-checked drivers to UK businesses that
            depend on reliable delivery and logistics operations.
          </p>
          <p>
            Our work sits at the intersection of recruitment and compliance: we
            speak with drivers, verify key details, and match them with companies
            that need van, courier, 7.5 tonne and HGV capacity — often at short
            notice.
          </p>
          <p>
            We use modern tools to screen applications quickly and keep
            communication clear for both drivers and clients. That means less
            back-and-forth, faster shortlists, and a straightforward commercial
            model for companies: you only pay when the driver starts work.
          </p>
          <p>
            Whether you run a regional courier fleet or a national distribution
            network, or you&apos;re a driver looking for your next role, we aim to
            be direct, honest and easy to reach.
          </p>
        </div>
      </section>
    </>
  );
}
