import { Mail, MessageCircle, Phone } from "lucide-react";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/constants";

export function CtaBanner() {
  return (
    <section className="px-4 py-16 sm:px-6" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-mint/40 via-sky/30 to-mint/20 p-8 text-center shadow-soft sm:p-12">
        <h2
          id="cta-heading"
          className="text-2xl font-bold text-slate-brand sm:text-3xl"
        >
          Ready to talk?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-slate-brand/85">
          Call, WhatsApp or email — we&apos;ll respond as soon as we can, usually
          within one working day.
        </p>
        <ul className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
          <li>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 font-semibold text-slate-brand hover:underline"
            >
              <Phone className="h-5 w-5 text-mint" aria-hidden />
              {PHONE_DISPLAY}
            </a>
          </li>
          <li>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-slate-brand hover:underline"
            >
              <MessageCircle className="h-5 w-5 text-[#25D366]" aria-hidden />
              WhatsApp
            </a>
          </li>
          <li>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 font-semibold text-slate-brand hover:underline"
            >
              <Mail className="h-5 w-5 text-sky" aria-hidden />
              {EMAIL}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
