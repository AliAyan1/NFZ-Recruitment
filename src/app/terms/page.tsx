import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { siteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Terms of Use",
  "Terms of use for the RoadWorthy Recruitment website.",
  "/terms",
);

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Use" description="Rules for using this website." />
      <article className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl space-y-8 text-sm leading-relaxed text-navy-muted sm:text-base">
          <section>
            <h2 className="text-lg font-bold text-navy">1. Agreement</h2>
            <p className="mt-2">
              These terms apply to your use of the website operated by{" "}
              {siteConfig.brandName} ({siteConfig.companyLegalName}). By using
              the site, you agree to these terms.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-navy">2. Purpose</h2>
            <p className="mt-2">
              This site provides information about van and courier driver
              recruitment and lets you submit enquiries and applications. Content
              is general information only, not legal or employment advice.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-navy">3. Submissions</h2>
            <p className="mt-2">
              You confirm information you provide is accurate. Submitting a form
              does not create a contract until we agree terms separately.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-navy">4. Acceptable use</h2>
            <p className="mt-2">
              Do not misuse the site, attempt unauthorised access, or submit spam
              or false information.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-navy">5. Intellectual property</h2>
            <p className="mt-2">
              The {siteConfig.brandName} name, logo and content are owned by or
              licensed to us. Do not copy them without permission except for
              personal viewing of the site.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-navy">6. Liability</h2>
            <p className="mt-2">
              To the extent permitted by law, we are not liable for loss arising
              from use of this website. Nothing excludes liability that cannot be
              excluded under English law.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-navy">7. Law</h2>
            <p className="mt-2">
              These terms are governed by the laws of England and Wales.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-navy">8. Contact</h2>
            <p className="mt-2">
              Questions:{" "}
              <a href={`mailto:${siteConfig.email}`} className="underline">
                {siteConfig.email}
              </a>
              . See our{" "}
              <Link href="/privacy" className="font-semibold text-navy underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
