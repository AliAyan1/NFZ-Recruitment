import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-navy/10 bg-white/95 p-3 backdrop-blur-lg md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <Link
          href={siteConfig.driversApplyPath}
          className="flex flex-1 items-center justify-center rounded-2xl bg-brand-gradient py-3.5 text-center text-sm font-bold text-navy shadow-soft"
        >
          Apply Now
        </Link>
        <a
          href={siteConfig.whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-navy/10 bg-white py-3.5 text-sm font-bold text-navy"
        >
          <MessageCircle className="h-5 w-5 text-[#25D366]" aria-hidden />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
