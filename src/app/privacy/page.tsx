import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { EMAIL, LEGAL_NAME, SITE_NAME } from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Privacy Policy",
  "Privacy policy for NFZ Recruitment — how we collect, use and protect personal data under UK GDPR.",
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="How we handle personal data when you apply for work or request drivers."
      />
      <article className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-3xl space-y-8 text-sm leading-relaxed text-slate-brand/90 sm:text-base">
          <p className="text-slate-brand/70">
            Last updated: {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
          </p>

          <section>
            <h2 className="text-lg font-bold text-slate-brand">1. Who we are</h2>
            <p className="mt-2">
              {SITE_NAME} ({LEGAL_NAME}) is a recruitment agency operating in the
              United Kingdom. For data protection purposes, we are the data
              controller for personal information collected through this website
              and our recruitment services.
            </p>
            <p className="mt-2">
              Contact:{" "}
              <a href={`mailto:${EMAIL}`} className="text-slate-brand underline">
                {EMAIL}
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-brand">2. What data we collect</h2>
            <p className="mt-2 font-medium text-slate-brand">From drivers (applicants)</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Identity and contact details (name, phone, email, town/postcode)</li>
              <li>Driving and employment-related information (licence category, experience, penalty points, CPC/tacho where relevant)</li>
              <li>Right to work status and availability to start</li>
              <li>Any additional information you provide in messages or calls</li>
            </ul>
            <p className="mt-4 font-medium text-slate-brand">From companies (clients)</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Company and contact details (company name, contact name, phone, email, location)</li>
              <li>Recruitment requirements (driver types, numbers needed, start dates, messages)</li>
            </ul>
            <p className="mt-4 font-medium text-slate-brand">From website visitors</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Information submitted through contact forms</li>
              <li>Technical data such as IP address and browser type may be processed by our hosting provider for security and performance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-brand">3. Why we use your data</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>To assess driver applications and match candidates with suitable roles</li>
              <li>To respond to company enquiries and supply drivers to client businesses</li>
              <li>To communicate with you about recruitment opportunities or requests</li>
              <li>To meet legal and regulatory obligations where applicable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-brand">4. Legal basis (UK GDPR)</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong>Consent</strong> — where you tick the consent box on the driver application form
              </li>
              <li>
                <strong>Legitimate interests</strong> — to operate our recruitment business, respond to enquiries, and place drivers with clients, balanced against your rights
              </li>
              <li>
                <strong>Contract</strong> — where processing is necessary to take steps at your request before entering a contract
              </li>
              <li>
                <strong>Legal obligation</strong> — where we must retain or disclose information to comply with law
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-brand">5. Who we share data with</h2>
            <p className="mt-2">
              We do not sell your personal data. We share information only where needed for recruitment:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong>Client companies</strong> — relevant driver details are shared with prospective employers when we propose you for a role (with your knowledge as part of the recruitment process)
              </li>
              <li>
                <strong>Service providers</strong> — such as website hosting, email/form delivery, and IT support, under appropriate contracts
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-brand">6. How long we keep data</h2>
            <p className="mt-2">
              We keep personal data only for as long as necessary for the purposes above. Driver application data is typically retained while you remain active in our recruitment pool and for a reasonable period afterwards (often up to 24 months unless a longer period is required for legal or business reasons). Company enquiry data is retained while the relationship is active and as needed for record-keeping. You may ask us to delete your data earlier where we are not required to keep it.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-brand">7. Your rights</h2>
            <p className="mt-2">
              Under UK data protection law you may have the right to access, rectify, erase, restrict, or object to processing of your personal data, and to data portability where applicable. You may withdraw consent at any time where processing is based on consent.
            </p>
            <p className="mt-2">
              To exercise your rights, email{" "}
              <a href={`mailto:${EMAIL}`} className="text-slate-brand underline">
                {EMAIL}
              </a>
              . You also have the right to complain to the Information Commissioner&apos;s Office (ICO) at{" "}
              <a
                href="https://ico.org.uk"
                className="text-slate-brand underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                ico.org.uk
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-brand">8. Security</h2>
            <p className="mt-2">
              We use appropriate technical and organisational measures to protect personal data. No method of transmission over the internet is completely secure; please avoid sending sensitive documents unless we ask you to through a secure channel.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-brand">9. Changes</h2>
            <p className="mt-2">
              We may update this policy from time to time. The latest version will always be published on this page.
            </p>
          </section>

          <p>
            See also our{" "}
            <Link href="/terms" className="font-medium text-slate-brand underline">
              Terms of Use
            </Link>
            .
          </p>
        </div>
      </article>
    </>
  );
}
