import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </a>
  );
}
