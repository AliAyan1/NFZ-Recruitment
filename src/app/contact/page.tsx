import { Mail, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { FadeIn } from "@/components/motion/FadeIn";
import { PageHero } from "@/components/layout/PageHero";
import { siteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Contact",
  "Contact RoadWorthy Recruitment by phone, WhatsApp or email. Van driver recruitment across the UK.",
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact us"
        description="Hiring drivers or looking for work? We are here to help."
      />
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <FadeIn>
            <h2 className="text-xl font-bold text-navy">Direct contact</h2>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="flex items-center gap-4 rounded-2xl border border-navy/8 bg-white p-5 shadow-card transition hover:shadow-soft"
                >
                  <Phone className="h-6 w-6 text-teal-dark" aria-hidden />
                  <span className="font-semibold text-navy">
                    {siteConfig.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-navy/8 bg-white p-5 shadow-card transition hover:shadow-soft"
                >
                  <MessageCircle className="h-6 w-6 text-[#25D366]" aria-hidden />
                  <span className="font-semibold text-navy">
                    WhatsApp: {siteConfig.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 rounded-2xl border border-navy/8 bg-white p-5 shadow-card transition hover:shadow-soft"
                >
                  <Mail className="h-6 w-6 text-teal-dark" aria-hidden />
                  <span className="font-semibold text-navy">{siteConfig.email}</span>
                </a>
              </li>
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-xl font-bold text-navy">Send a message</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
