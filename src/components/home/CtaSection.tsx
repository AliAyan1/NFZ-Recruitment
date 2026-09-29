import { Mail, MessageCircle, Phone } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { siteConfig } from "@/lib/site-config";

export function CtaSection() {
  return (
    <section className="px-4 pb-24 pt-8 sm:px-6 md:pb-20" aria-labelledby="cta-heading">
      <FadeIn>
        <div className="mx-auto max-w-4xl rounded-3xl border border-navy/8 bg-white p-10 text-center shadow-soft">
          <h2 id="cta-heading" className="text-2xl font-bold text-navy sm:text-3xl">
            Ready to talk?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-navy-muted">
            Call, WhatsApp or email — our team will get back to you as soon as we
            can, usually within one working day.
          </p>
          <ul className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-10">
            <li>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="inline-flex items-center gap-2 font-semibold text-navy hover:text-teal-dark"
              >
                <Phone className="h-5 w-5 text-teal-dark" aria-hidden />
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-navy hover:text-teal-dark"
              >
                <MessageCircle className="h-5 w-5 text-[#25D366]" aria-hidden />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 font-semibold text-navy hover:text-teal-dark"
              >
                <Mail className="h-5 w-5 text-teal-dark" aria-hidden />
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </FadeIn>
    </section>
  );
}
