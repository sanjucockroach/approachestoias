import { ArrowDownRight, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  description,
  context,
  index,
}: {
  eyebrow: string;
  title: string;
  description: string;
  context: string;
  index: string;
}) {
  return (
    <section
      className="relative overflow-hidden border-b border-hairline bg-canvas px-4 pb-16 pt-28 md:px-6 md:pb-24 md:pt-36"
      aria-labelledby="page-heading"
    >
      <div className="blueprint-field" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[1200px] gap-12 md:grid-cols-[1fr_280px] md:items-end">
        <div>
          <p className="text-sm font-semibold text-primary">{eyebrow}</p>
          <h1
            id="page-heading"
            className="mt-5 max-w-[16ch] text-[44px] font-bold leading-[1.03] tracking-[-2.2px] text-ink sm:text-[52px] md:text-[68px] md:tracking-[-2.8px]"
          >
            {title}
          </h1>
          <p className="mt-6 max-w-[58ch] text-lg leading-8 text-ink-muted">
            {description}
          </p>
          <a
            href={whatsappUrl(context)}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary mt-8"
          >
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
            Discuss your requirement
          </a>
        </div>
        <div className="hidden border-l border-hairline pl-8 md:block">
          <p className="font-mono text-[72px] font-semibold leading-none tracking-[-5px] text-primary">
            {index}
          </p>
          <p className="mt-4 max-w-[20ch] text-sm leading-6 text-ink-muted">
            One connected system for content, teaching, community, and growth.
          </p>
          <ArrowDownRight
            aria-hidden="true"
            className="mt-8 h-7 w-7 text-primary"
          />
        </div>
      </div>
    </section>
  );
}
