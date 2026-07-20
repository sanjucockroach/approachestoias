import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  description,
  context,
}: {
  eyebrow: string;
  title: string;
  description: string;
  context: string;
}) {
  return (
    <section className="page-hero" aria-labelledby="page-heading">
      <div className="relative z-10 mx-auto max-w-[820px]">
        <p className="eyebrow">{eyebrow}</p>
        <h1 id="page-heading" className="display-xl mt-5 text-ink">
          {title}
        </h1>
        <p className="lead mx-auto mt-6 max-w-[54ch]">{description}</p>
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
    </section>
  );
}
