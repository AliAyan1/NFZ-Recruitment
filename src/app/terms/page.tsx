import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { EMAIL, LEGAL_NAME, SITE_NAME } from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Terms of Use",
  "Terms of use for the NFZ Recruitment website.",
  "/terms",
);

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Use"
        description="Rules for using this website."
      />
      <article className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-3xl space-y-8 text-sm leading-relaxed text-slate-brand/90 sm:text-base">
          <section>
            <h2 className="text-lg font-bold text-slate-brand">1. About these terms</h2>
            <p className="mt-2">
              These terms govern your use of the website operated by {SITE_NAME} (
              {LEGAL_NAME}). By using this site, you agree to these terms. If you do
              not agree, please do not use the website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-brand">2. Website purpose</h2>
            <p className="mt-2">
              This website provides information about our driver recruitment services
              and allows drivers and companies to submit enquiries and applications.
              Content is for general information only and is not legal or employment
              advice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-brand">3. Accuracy</h2>
            <p className="mt-2">
              We aim to keep information on this site accurate and up to date, but we
              do not guarantee that all content is complete or error-free. We may
              change site content at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-brand">4. Form submissions</h2>
            <p className="mt-2">
              When you submit a form, you confirm that the information you provide is
              accurate to the best of your knowledge. Submitting an application or
              enquiry does not create a contract for employment or recruitment services
              until we agree terms with you separately.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-brand">5. Acceptable use</h2>
            <p className="mt-2">You must not:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Use the site unlawfully or in a way that could harm us or others</li>
              <li>Attempt to gain unauthorised access to our systems</li>
              <li>Submit false, misleading or spam content through our forms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-brand">6. Intellectual property</h2>
            <p className="mt-2">
              The NFZ Recruitment name, logo, and website content are owned by or
              licensed to us. You may not copy or reuse them without our permission
              except for personal, non-commercial viewing of the site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-brand">7. Liability</h2>
            <p className="mt-2">
              To the fullest extent permitted by law, we are not liable for any loss
              arising from your use of this website or reliance on its content. Nothing
              in these terms excludes liability that cannot be excluded under English
              law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-brand">8. Links</h2>
            <p className="mt-2">
              This site may link to third-party websites (for example WhatsApp). We are
              not responsible for their content or privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-brand">9. Governing law</h2>
            <p className="mt-2">
              These terms are governed by the laws of England and Wales. Courts in
              England and Wales have exclusive jurisdiction, subject to applicable
              consumer rights.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-brand">10. Contact</h2>
            <p className="mt-2">
              Questions about these terms:{" "}
              <a href={`mailto:${EMAIL}`} className="text-slate-brand underline">
                {EMAIL}
              </a>
              . See our{" "}
              <Link href="/privacy" className="font-medium text-slate-brand underline">
                Privacy Policy
              </Link>{" "}
              for how we handle personal data.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
