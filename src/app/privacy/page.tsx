import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { siteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Privacy Policy",
  "Privacy policy for RoadWorthy Recruitment — UK GDPR information for drivers and companies.",
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="How we handle personal data when you apply for work or request drivers."
      />
      <article className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl space-y-8 text-sm leading-relaxed text-navy-muted sm:text-base">
          <p>
            Last updated:{" "}
            {new Date().toLocaleDateString("en-GB", {
              month: "long",
              year: "numeric",
            })}
          </p>

          <section>
            <h2 className="text-lg font-bold text-navy">1. Who we are</h2>
            <p className="mt-2">
              {siteConfig.brandName} ({siteConfig.companyLegalName}) is a
              recruitment agency in the United Kingdom. We are the data controller
              for personal information collected through this website and our
              services.
            </p>
            <p className="mt-2">
              Contact:{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-navy underline">
                {siteConfig.email}
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy">2. Data we collect</h2>
            <p className="mt-2 font-semibold text-navy">Drivers</p>
            <p className="mt-2">
              Van driver applications are submitted through{" "}
              <a
                href="https://tally.so"
                className="text-navy underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tally
              </a>{" "}
              (tally.so), a third-party form provider embedded on our For Drivers
              page. The fields in that form may include:
            </p>
            <ul className="mt-2 list-disc pl-5">
              <li>Name, phone, email, town/postcode</li>
              <li>Licence, experience, penalty points, van experience</li>
              <li>Right to work, availability, preferred work patterns</li>
            </ul>
            <p className="mt-2">
              Tally processes this data on our behalf to deliver submissions to
              us. Tally&apos;s own privacy terms apply on their platform; we
              receive the application content to assess and match you with roles.
            </p>
            <p className="mt-4 font-semibold text-navy">Companies</p>
            <ul className="mt-2 list-disc pl-5">
              <li>Company and contact details, depot location</li>
              <li>Driver requirements, contract type, start dates</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy">3. Why we use data</h2>
            <ul className="mt-2 list-disc pl-5">
              <li>To assess applications and match drivers with roles</li>
              <li>To respond to company requests and supply drivers</li>
              <li>To communicate about recruitment</li>
              <li>To meet legal obligations where applicable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy">4. Legal basis</h2>
            <ul className="mt-2 list-disc pl-5">
              <li>Consent (driver application submitted via our Tally form)</li>
              <li>Legitimate interests (running our recruitment business)</li>
              <li>Contract (steps before entering an agreement)</li>
              <li>Legal obligation where required</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy">5. Sharing</h2>
            <p className="mt-2">
              We do not sell personal data. We share relevant driver information
              with client companies for job placement, and with service providers
              (including Tally for driver applications, website hosting, company
              and contact forms, and IT support) under appropriate terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy">6. Retention</h2>
            <p className="mt-2">
              We keep data only as long as needed — typically while you remain
              active in our pool and for a reasonable period afterwards (often up
              to 24 months unless law requires longer). You may request earlier
              deletion where we are not required to retain records.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy">7. Your rights</h2>
            <p className="mt-2">
              You may have rights to access, rectify, erase, restrict or object to
              processing, and to complain to the ICO (
              <a href="https://ico.org.uk" className="underline" target="_blank" rel="noopener noreferrer">
                ico.org.uk
              </a>
              ). To exercise rights or request deletion, email{" "}
              <a href={`mailto:${siteConfig.email}`} className="underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </section>

          <p>
            See also our{" "}
            <Link href="/terms" className="font-semibold text-navy underline">
              Terms of Use
            </Link>
            .
          </p>
        </div>
      </article>
    </>
  );
}
