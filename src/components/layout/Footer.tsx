import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const links = [
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
    <footer className="border-t border-navy/8 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Image
              src="/roadworthy-logo.png"
              alt={siteConfig.brandName}
              width={994}
              height={373}
              className="h-12 w-auto max-w-[220px]"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-muted">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-navy">
              <MapPin className="h-4 w-4 text-teal-dark" aria-hidden />
              {siteConfig.coverage}
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-navy">
              Quick links
            </h2>
            <ul className="mt-4 space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-navy-muted transition hover:text-navy"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-navy">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="inline-flex items-center gap-2 text-navy-muted hover:text-navy"
                >
                  <Phone className="h-4 w-4 text-teal-dark" aria-hidden />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.whatsAppUrl}
                  className="text-navy-muted hover:text-navy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-navy-muted hover:text-navy"
                >
                  <Mail className="h-4 w-4 text-teal-dark" aria-hidden />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-navy/8 pt-8 text-xs leading-relaxed text-navy-muted">
          <p>
            {siteConfig.brandName} is a trading name of{" "}
            {siteConfig.companyLegalName}, registered in England &amp; Wales,
            Company No. {siteConfig.companyNumber}
          </p>
          <p className="mt-2">
            © {year} {siteConfig.brandName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
