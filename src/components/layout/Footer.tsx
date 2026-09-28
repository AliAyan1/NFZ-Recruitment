import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  COMPANY_NUMBER,
  EMAIL,
  LEGAL_NAME,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_NAME,
  WHATSAPP_URL,
} from "@/lib/constants";

const footerLinks = [
  { href: "/companies", label: "For Companies" },
  { href: "/drivers", label: "For Drivers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-brand/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Image
              src="/nfz-logo.png"
              alt={SITE_NAME}
              width={736}
              height={215}
              className="h-14 w-auto max-w-[240px] md:h-16 md:max-w-[280px]"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-brand/80">
              We supply pre-screened, licence-checked drivers to UK delivery,
              courier and logistics companies. Van, courier and HGV — nationwide.
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm font-medium text-slate-brand">
              <MapPin className="h-4 w-4 text-mint" aria-hidden />
              Covering all of the UK
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-slate-brand">
              Quick links
            </h2>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-brand/80 transition hover:text-slate-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-slate-brand">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center gap-2 text-slate-brand/80 hover:text-slate-brand"
                >
                  <Phone className="h-4 w-4 text-mint" aria-hidden />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  className="text-slate-brand/80 hover:text-slate-brand"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 text-slate-brand/80 hover:text-slate-brand"
                >
                  <Mail className="h-4 w-4 text-mint" aria-hidden />
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-brand/10 pt-8 text-center text-xs leading-relaxed text-slate-brand/70 sm:text-left">
          <p>
            {SITE_NAME} is a trading name of {LEGAL_NAME}, registered in England
            &amp; Wales, Company No. {COMPANY_NUMBER}
          </p>
          <p className="mt-2">© {year} {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
