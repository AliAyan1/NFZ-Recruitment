"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/companies", label: "For Companies" },
  { href: "/drivers", label: "For Drivers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <header className="sticky top-0 z-50 border-b border-navy/8 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:py-4">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/roadworthy-logo.png"
            alt={siteConfig.brandName}
            width={994}
            height={373}
            className="hidden h-10 w-auto min-w-[130px] sm:block md:h-12 md:min-w-[160px]"
            priority
          />
          <Image
            src="/roadworthy-icon.png"
            alt={siteConfig.brandName}
            width={120}
            height={92}
            className="h-10 w-auto sm:hidden"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-3.5 py-2 text-sm font-medium text-navy-muted transition hover:bg-teal/15 hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href={`tel:${siteConfig.phoneTel}`}
            variant="primary"
            className="hidden !px-4 !py-2.5 text-sm lg:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call Now
          </Button>
          <button
            type="button"
            className="inline-flex rounded-xl p-2.5 text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-navy/8 bg-white lg:hidden"
            aria-label="Mobile"
          >
            <ul className="space-y-1 px-4 py-4">
              {NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-xl px-3 py-3.5 text-base font-medium text-navy"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Button href={`tel:${siteConfig.phoneTel}`} className="w-full">
                  <Phone className="h-4 w-4" aria-hidden />
                  Call Now
                </Button>
              </li>
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
