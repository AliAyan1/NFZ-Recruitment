"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS, PHONE_TEL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-brand/10 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/nfz-logo.png"
            alt="NFZ Recruitment"
            width={736}
            height={215}
            className="hidden h-11 w-auto min-w-[140px] sm:block md:h-14 md:min-w-[180px]"
            priority
          />
          <Image
            src="/nfz-icon.png"
            alt="NFZ Recruitment"
            width={80}
            height={80}
            className="h-11 w-auto sm:hidden"
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-slate-brand/90 transition hover:bg-mint/15 hover:text-slate-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href={`tel:${PHONE_TEL}`}
            variant="primary"
            className="hidden !px-4 !py-2.5 text-sm sm:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call Now
          </Button>
          <button
            type="button"
            className="inline-flex rounded-xl p-2 text-slate-brand md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-slate-brand/10 bg-white px-4 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-slate-brand"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button href={`tel:${PHONE_TEL}`} className="w-full">
                <Phone className="h-4 w-4" aria-hidden />
                Call Now
              </Button>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
