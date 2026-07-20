import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { CONTACT_EMAIL, whatsappUrl } from "@/lib/site";

export function ConversionBand({
  title = "Make the next batch easier to deliver.",
  body = "Tell us what your academy needs. We will map the right service mix and a practical next step.",
  context = "working with your academy",
}: {
  title?: string;
  body?: string;
  context?: string;
}) {
  return (
    <section className="border-t border-hairline bg-surface-1 section-shell">
      <div className="mx-auto max-w-[760px] text-center">
        <p className="eyebrow">A clearer way forward</p>
        <h2 className="display-lg mt-4 text-ink">{title}</h2>
        <p className="lead mx-auto mt-5 max-w-[55ch]">{body}</p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
          <a
            href={whatsappUrl(context)}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
            Start on WhatsApp
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="button button-secondary">
            <Mail aria-hidden="true" className="h-4 w-4" />
            Send an email
          </a>
        </div>
      </div>
    </section>
  );
}
