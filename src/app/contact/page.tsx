import { Mail, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/layout/PageHero";
import {
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Contact",
  "Contact NFZ Recruitment by phone, WhatsApp or email. Driver recruitment and van, courier and HGV jobs across the UK.",
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact us"
        description="Questions about hiring drivers or applying for work? Get in touch — we’re happy to help."
      />
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-brand">Direct contact</h2>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-card transition hover:shadow-soft"
                >
                  <Phone className="h-6 w-6 text-mint" aria-hidden />
                  <span className="font-medium text-slate-brand">{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-card transition hover:shadow-soft"
                >
                  <MessageCircle className="h-6 w-6 text-[#25D366]" aria-hidden />
                  <span className="font-medium text-slate-brand">
                    WhatsApp: {PHONE_DISPLAY}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-card transition hover:shadow-soft"
                >
                  <Mail className="h-6 w-6 text-sky" aria-hidden />
                  <span className="font-medium text-slate-brand">{EMAIL}</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-bold text-slate-brand">Send a message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
