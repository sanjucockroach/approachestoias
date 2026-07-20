import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export function FloatingCTA() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Start a conversation on WhatsApp"
      className="floating-cta"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
