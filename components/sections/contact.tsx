import { ArrowUpRight, Mail, MessageCircle, Send } from "lucide-react";
import { CONTACT_EMAIL, TELEGRAM_URL, whatsappUrl } from "@/lib/site";
import { Reveal } from "@/components/reveal";

const methods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    copy: "Best for a quick requirement brief.",
    href: whatsappUrl("working together"),
  },
  {
    icon: Mail,
    title: "Email",
    copy: "Best for detailed proposals and documents.",
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: Send,
    title: "Telegram",
    copy: "Follow updates and connect with the community.",
    href: TELEGRAM_URL,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-hairline bg-surface-1 px-4 py-20 md:px-6 md:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-end">
          <div>
            <h2
              id="contact-heading"
              className="max-w-[14ch] text-[38px] font-bold leading-[1.06] tracking-[-2px] text-ink md:text-[52px] md:tracking-[-2.6px]"
            >
              Start with the problem you need solved.
            </h2>
          </div>
          <p className="max-w-[48ch] text-lg leading-8 text-ink-muted">
            You do not need a perfect brief. Share the current challenge and we
            will help shape the right next step.
          </p>
        </Reveal>

        <div className="mt-12 grid border-t border-hairline md:grid-cols-3 md:divide-x md:divide-hairline">
          {methods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Reveal key={method.title} delay={index * 0.05}>
                <a
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    method.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex min-h-44 flex-col justify-between border-b border-hairline px-1 py-7 md:border-b-0 md:px-7"
                >
                  <Icon
                    aria-hidden="true"
                    className="h-6 w-6 text-primary"
                    strokeWidth={1.8}
                  />
                  <div className="mt-8">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-semibold text-ink">{method.title}</h3>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-4 w-4 text-primary"
                      />
                    </div>
                    <p className="mt-2 text-sm leading-6 text-ink-muted">
                      {method.copy}
                    </p>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
