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
    <section className="bg-primary px-4 py-16 text-on-primary md:px-6 md:py-20">
      <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-on-primary/75">
            A clearer way forward
          </p>
          <h2 className="mt-4 max-w-[18ch] text-[36px] font-bold leading-[1.05] tracking-[-2px] md:text-[52px] md:tracking-[-2.6px]">
            {title}
          </h2>
          <p className="mt-5 max-w-[62ch] text-base leading-7 text-on-primary/80 md:text-lg">
            {body}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
          <a
            href={whatsappUrl(context)}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-inverse"
          >
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
            Start on WhatsApp
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="button button-on-blue">
            <Mail aria-hidden="true" className="h-4 w-4" />
            Send an email
          </a>
        </div>
      </div>
    </section>
  );
}
