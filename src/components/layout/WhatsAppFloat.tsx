import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

/** Desktop only — mobile uses sticky bar */
export function WhatsAppFloat() {
  return (
    <a
      href={siteConfig.whatsAppUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition hover:scale-105 md:flex"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </a>
  );
}
